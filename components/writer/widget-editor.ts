import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import { marked } from 'marked';
import type TurndownService from 'turndown';
import * as fabric from 'fabric';
import type { ICellModel, ICellRendererModule } from './widget.d';
import type { WriterWidget } from './widget';
import './turndown.js';
import type { LuminoLayoutWindow } from '../bundle/lumino.d';

const widgetSelf: LuminoLayoutWindow & {
	TurndownService: typeof TurndownService;
	WriterWidget: typeof WriterWidget;
} = self as unknown as any;


export class CellEditorWidget extends Widget
{
	public readonly cellUpdated = new Signal<this, string>(this);
	public readonly heightMeasured = new Signal<this, number>(this);
	public readonly actionRequested = new Signal<this, { action: string; cellId: string; }>(this);

	private _model: ICellModel;
	private _contentNode: HTMLElement;
	private _controlsNode: HTMLElement;
	private _instanceDispose?: () => void;
	private static _modules: Map<string, ICellRendererModule> = new Map();
	static turndownService: any;

	constructor(model: ICellModel)
	{
		super();
		this._model = model;
		this.addClass('lm-CellEditorWidget');
		this.node.dataset.cellId = model.id;

		// Build DOM structure
		this.node.style.cssText = 'position: absolute; width: 100%; left: 0; display: flex; flex-direction: column; border-bottom: 1px solid #e0e0e0;';

		this._controlsNode = this.createControlsBar();
		this._contentNode = document.createElement('div');
		this._contentNode.className = 'lm-CellContent';
		this._contentNode.style.cssText = 'flex: 1; padding: 12px; min-height: 40px;';

		this.node.appendChild(this._controlsNode);
		this.node.appendChild(this._contentNode);

		// Register built-in cell type handlers
		CellEditorWidget.registerBuiltins();

		if(!CellEditorWidget.turndownService)
		{
			CellEditorWidget.turndownService = new widgetSelf.TurndownService({
				headingStyle: 'atx', // # Header format
				codeBlockStyle: 'fenced', // ``` code fences
				emDelimiter: '*'
			});
		}
	}

	public get model(): ICellModel
	{
		return this._model;
	}

	public static registerModule(module: ICellRendererModule): void
	{
		CellEditorWidget._modules.set(module.type, module);
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		setTimeout(() =>
		{
			this.renderCellContent();
		}, 200);
	}

	protected override onBeforeDetach(msg: Message): void
	{
		if(this._instanceDispose)
		{
			this._instanceDispose();
		}
		super.onBeforeDetach(msg);
	}

	public renderCellContent(): void
	{
		this._contentNode.innerHTML = '';
		if(this._instanceDispose)
		{
			this._instanceDispose();
			this._instanceDispose = undefined;
		}

		const handler = CellEditorWidget._modules.get(this._model.type);
		if(handler)
		{
			const instance = handler.render(this._contentNode, this._model, (newVal) =>
			{
				this._model.content = newVal;
				this.cellUpdated.emit(newVal);
				this.measureAndEmitHeight();
			});
			this._instanceDispose = instance.dispose;
		} else
		{
			this._contentNode.textContent = `Unknown cell type: ${this._model.type}`;
		}

		// Schedule pass-1 height discovery
		requestAnimationFrame(() => this.measureAndEmitHeight());
	}

	private measureAndEmitHeight(): void
	{
		const rect = this.node.getBoundingClientRect();
		if(rect.height > 0 && rect.height !== this._model.height)
		{
			this._model.height = rect.height;
			this.heightMeasured.emit(rect.height);
		}
	}

	private createControlsBar(): HTMLElement
	{
		const bar = document.createElement('div');
		bar.className = 'lm-CellControls';

		const typeBadge = document.createElement('span');
		typeBadge.style.cssText = 'font-weight: bold; text-transform: uppercase; margin-right: auto; color: #666;';
		typeBadge.textContent = this._model.type;

		const magicWandBtn = this.createButton('fa fa-magic', 'AI Magic Wand', 'ai-wand');
		const outlineBtn = this.createButton('fa fa-list-ol', 'Outline & Format', 'outline-toggle');
		const addCellBtn = this.createButton('fa fa-plus', 'Add Cell Below', 'add-below');
		const deleteBtn = this.createButton('fa fa-trash', 'Delete Cell', 'delete');

		bar.appendChild(typeBadge);
		bar.appendChild(magicWandBtn);
		bar.appendChild(outlineBtn);
		bar.appendChild(addCellBtn);
		bar.appendChild(deleteBtn);

		return bar;
	}

	private createButton(iconClass: string, title: string, action: string): HTMLButtonElement
	{
		const btn = document.createElement('button');
		btn.title = title;
		btn.className = 'lm-CellControlBtn';
		btn.style.cssText = 'background: none; border: none; cursor: pointer; padding: 2px 6px; margin-left: 4px; color: #444;';
		btn.innerHTML = `<i class="${iconClass}"></i>`;
		btn.onclick = (e) =>
		{
			e.stopPropagation();
			this.actionRequested.emit({ action, cellId: this._model.id });
		};
		return btn;
	}

	public getCellMarkdown(): string
	{
		if(widgetSelf.WriterWidget.activeEditor)
		{
			const html = widgetSelf.WriterWidget.activeEditor.getContent();
			return CellEditorWidget.turndownService.turndown(html); // Output: "# Hello\n\nThis is **markdown**."
		}
		return '';
	}

	private static registerBuiltins(): void
	{
		if(CellEditorWidget._modules.size > 0) return;

		// 1. Markdown & GFM Module
		CellEditorWidget.registerModule({
			type: 'markdown',
			render: async (container, model, onChange) =>
			{
				marked.setOptions({ gfm: true, breaks: true });
				const editorDiv = document.createElement('div');
				editorDiv.setAttribute('contenteditable', 'true');
				editorDiv.contentEditable = 'true';
				editorDiv.style.cssText = 'outline: none; min-height: 60px; font-family: serif; font-size: 18px; line-height: 1.6;';
				editorDiv.innerHTML = await marked.parse(model.content || '');
				editorDiv.id = 'writer-cell-' + Date.now() + '-' + widgetSelf.nextTemp?.();

				editorDiv.oninput = () => onChange(editorDiv.innerHTML);
				container.appendChild(editorDiv);
				return {
					dispose: () => { editorDiv.oninput = null; },
					getValue: () => editorDiv.innerHTML
				};
			}
		});

		// 2. Fabric.js Interactive Canvas Module (Updated for Fabric v6 + Lumino)
		CellEditorWidget.registerModule({
			type: 'canvas',
			render: (container, model, onChange) =>
			{
				const canvasEl = document.createElement('canvas');
				canvasEl.width = container.clientWidth || 800;
				canvasEl.height = 400;
				canvasEl.id = 'writer-cell-' + Date.now() + '-' + widgetSelf.nextTemp?.();
				container.appendChild(canvasEl);

				const fabricCanvas = new fabric.Canvas(canvasEl, {
					isDrawingMode: false,
					backgroundColor: 'transparent'
				});

				// Hydrate JSON state asynchronously
				if(model.content)
				{
					try
					{
						const json = typeof model.content === 'string'
							? JSON.parse(model.content)
							: model.content;

						// Fabric v6 returns a Promise for loadFromJSON
						fabricCanvas.loadFromJSON(json).then(() =>
						{
							// Force Fabric to recalculate DOM offsets inside Lumino's layout
							fabricCanvas.calcOffset();
							// Explicitly trigger canvas paint
							fabricCanvas.requestRenderAll();
						}).catch(e =>
						{
							console.warn('Fabric loadFromJSON error:', e);
						});
					} catch(e)
					{
						console.warn('Fabric JSON parse error:', e);
					}
				}
				else
				{
					// Initial blank render
					fabricCanvas.requestRenderAll();
				}

				const syncState = () => onChange(JSON.stringify(fabricCanvas.toJSON()));

				// Listen to canvas events for changes
				fabricCanvas.on('object:modified', syncState);
				fabricCanvas.on('object:added', syncState);
				fabricCanvas.on('object:removed', syncState);

				return {
					dispose: () =>
					{
						fabricCanvas.dispose();
					},
					getValue: () => JSON.stringify(fabricCanvas.toJSON())
				};
			}
		});


		// 3. HTML / Rich Text Module
		CellEditorWidget.registerModule({
			type: 'html',
			render: (container, model, onChange) =>
			{
				const div = document.createElement('div');
				div.id = 'writer-cell-' + Date.now() + '-' + widgetSelf.nextTemp?.();
				div.setAttribute('contenteditable', 'true');
				div.contentEditable = 'true';
				div.style.cssText = 'outline: none; min-height: 60px;';
				div.innerHTML = model.content;
				div.oninput = () => onChange(div.innerHTML);
				container.appendChild(div);
				return {
					dispose: () => { div.oninput = null; },
					getValue: () => div.innerHTML
				};
			}
		});
	}
}

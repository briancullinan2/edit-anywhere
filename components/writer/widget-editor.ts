import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import { marked } from 'marked';
import * as fabric from 'fabric';
import type { ICellModel, ICellRendererModule } from './widget.d';

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
		this.renderCellContent();
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
		bar.style.cssText = 'display: flex; align-items: center; background: #f5f5f5; padding: 4px 8px; font-size: 12px; border-bottom: 1px solid #ddd; user-select: none;';

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
				editorDiv.contentEditable = 'true';
				editorDiv.style.cssText = 'outline: none; min-height: 60px; font-family: serif; font-size: 18px; line-height: 1.6;';
				editorDiv.innerHTML = await marked.parse(model.content || '');

				editorDiv.oninput = () => onChange(editorDiv.innerHTML);
				container.innerHTML = editorDiv.innerHTML;
				return {
					dispose: () => { editorDiv.oninput = null; },
					getValue: () => editorDiv.innerHTML
				};
			}
		});

		// 2. Fabric.js Interactive Canvas Module
		CellEditorWidget.registerModule({
			type: 'canvas',
			render: (container, model, onChange) =>
			{
				const canvasEl = document.createElement('canvas');
				canvasEl.width = container.clientWidth || 800;
				canvasEl.height = 400;
				container.appendChild(canvasEl);

				const fabricCanvas = new fabric.Canvas(canvasEl, {
					isDrawingMode: false,
					backgroundColor: '#ffffff'
				});

				if(model.content)
				{
					try
					{
						fabricCanvas.loadFromJSON(JSON.parse(model.content), () => fabricCanvas.renderAll());
					} catch(e)
					{
						console.warn('Fabric JSON parse error:', e);
					}
				}

				const syncState = () => onChange(JSON.stringify(fabricCanvas.toJSON()));
				fabricCanvas.on('object:modified', syncState);

				return {
					dispose: () => { fabricCanvas.dispose(); },
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
				div.contentEditable = 'true';
				div.style.cssText = 'outline: none; min-height: 60px;';
				div.innerHTML = model.content;
				div.oninput = () => onChange(div.innerHTML);
				container.innerHTML = div.innerHTML;
				return {
					dispose: () => { div.oninput = null; },
					getValue: () => div.innerHTML
				};
			}
		});
	}
}

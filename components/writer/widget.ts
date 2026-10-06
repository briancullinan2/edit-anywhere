import { Widget, PanelLayout } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { VirtualWriterScrollerWidget } from './widget-scroll';
import type { IDocumentModel, ICellModel } from './widget.d';
import type { Editor, RawEditorOptions, TinyMCE } from 'tinymce';
import './tinymce.js';


const widgetSelf: {
	WriterWidget: typeof WriterWidget,
	tinymce: TinyMCE;
} = self as unknown as any;

export class WriterWidget extends Widget
{
	private scroller: VirtualWriterScrollerWidget;
	private documentModel: IDocumentModel;
	private pdfWorker?: Worker;
	public static activeEditor?: Editor;
	// public static currentCellNode?: HTMLElement;
	static handleSync: () => void;

	constructor(title?: string, initialDocument?: IDocumentModel)
	{
		super();
		this.id = 'lumino-writer-editor';
		this.addClass('lm-WriterWidget');

		this.title.label = title ?? 'Writer';
		this.title.iconClass = 'fa fa-book';
		this.title.closable = true;

		this.layout = new PanelLayout();

		this.documentModel = initialDocument || {
			title: 'Bionicle Interactive Web Spec',
			cells: [
				{ id: 'c1', type: 'markdown', content: '# Welcome to the Authoring Studio\nSpecialized web-first publishing.' },
				{
					id: 'c2', type: 'canvas', content: JSON.stringify({
						"version": "6.0.0",
						"objects": [
							{
								"type": "rect",
								"version": "6.0.0",
								"originX": "left",
								"originY": "top",
								"left": 50,
								"top": 50,
								"width": 100,
								"height": 80,
								"fill": "#3b82f6",
								"stroke": null,
								"strokeWidth": 1,
								"scaleX": 1,
								"scaleY": 1,
								"angle": 0,
								"opacity": 1,
								"rx": 10,
								"ry": 10,
								"visible": true
							},
							{
								"type": "text",
								"version": "6.0.0",
								"originX": "left",
								"originY": "top",
								"left": 180,
								"top": 70,
								"width": 185.4,
								"height": 22.6,
								"fill": "#1e293b",
								"scaleX": 1,
								"scaleY": 1,
								"angle": 0,
								"text": "Double click to edit",
								"fontSize": 20,
								"fontWeight": "normal",
								"fontFamily": "Times New Roman",
								"fontStyle": "normal",
								"textAlign": "left"
							},
							{
								"type": "image",
								"version": "6.0.0",
								"originX": "left",
								"originY": "top",
								"left": 50,
								"top": 160,
								"width": 150,
								"height": 150,
								"scaleX": 1,
								"scaleY": 1,
								"angle": 0,
								"src": "https://via.placeholder.com/150",
								"crossOrigin": "anonymous"
							}
						],
						//"background": "#f8f9fa"
					})
				},
				{ id: 'c3', type: 'html', content: '<div><h2 style="color: #ff5722;">Interactive Web Presence</h2></div>' }
			]
		};

		this.scroller = new VirtualWriterScrollerWidget();
		(this.layout as PanelLayout).addWidget(this.scroller);

		this.initPdfWorker();
		this.bindSignals();
	}


	protected override onBeforeDetach(msg: Message): void
	{
		WriterWidget.activeEditor?.hide();
		super.onBeforeDetach(msg);
	}


	protected override onBeforeHide(msg: Message): void
	{
		WriterWidget.activeEditor?.hide();
		super.onBeforeHide(msg);
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		this.scroller.setCells(this.documentModel.cells);
		this.attachEvents();
		if(!WriterWidget.activeEditor)
		{
			this.initEditor();
		}
	}

	private async initEditor(id: HTMLElement | string = '*[contenteditable]')
	{
		//if(!WriterWidget.activeEditor)
		{
			// await widgetSelf.tinymce.init({
			// 	selector: '*[contenteditable]',
			// 	inline: true,
			// 	base_url: '/components/writer',
			// 	license_key: 'gpl',
			// 	menubar: false,
			// 	statusbar: false,

			// 	// Limit loaded plugins to essential Markdown features
			// 	plugins: 'lists link code codesample autolink',

			// 	// Clean Markdown-focused Floating/Fixed Toolbar
			// 	toolbar: 'undo redo | blocks | bold italic strikethrough code | bullist numlist blockquote link codesample | removeformat',

			// 	// Restrict allowed block types to standard Markdown headers
			// 	block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Code Block=pre',

			// 	// Strict element whitelisting: prevents inline style tags, spans, or font tags
			// 	valid_elements: 'p,h1,h2,h3,h4,h5,h6,blockquote,pre,code,ul,ol,li,b,strong,i,em,s,del,a[href|target],br,hr',
			// 	invalid_elements: 'span,font,style,div,table,tbody,tr,td,img',

			// 	// Strip pasted inline styles/formatting automatically
			// 	paste_as_text: false,
			// 	paste_remove_styles: true,
			// 	paste_webkit_styles: 'none',

			// 	setup: (editor) =>
			// 	{
			// 		WriterWidget.activeEditor = editor;

			// 		editor.on('input change Undo Redo', () =>
			// 		{
			// 			if(WriterWidget.currentCellNode)
			// 			{
			// 				WriterWidget.currentCellNode.innerHTML = editor.getContent();
			// 				// Trigger cell model sync or height measurement signals
			// 			}
			// 		});
			// 	}
			// });
			const config: RawEditorOptions = {
				//target: document.body,
				//selector: id ?? '*[contenteditable]',
				inline: true,
				noneditable_class: '*',
				editable_class: '[contenteditable]',
				base_url: '/components/writer',
				license_key: 'gpl',
				//fixed_toolbar_container: '#app-top-header-row',
				fixed_toolbar_container: 'body',
				toolbar_persist: true,
				//ui_mode: 'split',

				// Enable top menubar with full options
				menubar: 'file edit view insert format tools table help',
				statusbar: true,

				// ALL standard open-source plugins enabled
				plugins: [
					'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
					'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
					'insertdatetime', 'media', 'table', 'wordcount',
					'accordion', 'autosave', 'codesample', 'directionality', 'emoticons',
					'help', 'importcss', 'nonbreaking', 'pagebreak', 'quickbars', 'visualchars',
					//'editimage',
				],

				// Comprehensive 2-row toolbar setup
				toolbar1: 'undo redo | accordion | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify',
				toolbar2: 'bullist numlist outdent indent | table image media link anchor codesample | charmap emoticons hr pagebreak | removeformat visualblocks code fullscreen preview',

				// Quickbars (hover bubble toolbars on click/selection)
				quickbars_selection_toolbar: 'bold italic underline | forecolor backcolor | quicklink h2 h3 blockquote',
				quickbars_insert_toolbar: 'quickimage quicktable media codesample hr',

				// Image & Media upload settings
				image_advtab: true,
				image_title: true,
				automatic_uploads: true,
				file_picker_types: 'image media',


				// Full layout flexibility
				extended_valid_elements: '*[*]', // Allow all HTML attributes and elements
				style_formats_autohide: true,

				setup: (editor) =>
				{
					WriterWidget.activeEditor = editor;

					WriterWidget.handleSync = () =>
					{
						const activeBody = editor.bodyElement;

						// Ensure we're syncing back to the currently bound DOM element
						if(activeBody && activeBody instanceof HTMLElement)
						{
							// Get content from TinyMCE and update cell HTML
							const updatedHtml = editor.getContent();

							if(activeBody.innerHTML !== updatedHtml)
							{
								//activeBody.innerHTML = updatedHtml;
							}
						}
					};

					// Listen to changes and selection updates
					editor.on('input change Undo Redo SetContent ExecCommand', WriterWidget.handleSync);

					// Track caret position changes when user clicks or moves cursor
					editor.on('NodeChange SelectionChange', () =>
					{
						// Keeps TinyMCE's internal bookmark manager aligned with current caret position
						//editor.nodeChanged();
					});

					const syncCaretFollower = () =>
					{
						WriterWidget.updatePosition(editor);
					};

					// Listen to typing, line breaks, cursor clicks, and selection shifts
					editor.on('keyup click ExecCommand SelectionChange NodeChange input', syncCaretFollower);

					// Track when virtual scroller scrolls
					const scrollerNode = document.querySelector('#virtual-scroller');
					scrollerNode?.addEventListener('scroll', syncCaretFollower, { passive: true });
				}
			};
			if(id instanceof HTMLElement)
			{
				config.target = id ?? VirtualWriterScrollerWidget.hiddenOffscreen;
			}
			await widgetSelf.tinymce.init(config);
		}
	}

	private static rafId: number | null = null;
	private static updatePosition(editor: any)
	{
		if(this.rafId) cancelAnimationFrame(this.rafId);

		this.rafId = requestAnimationFrame(() =>
		{
			// 1. Get browser selection and active caret range
			const sel = editor.selection?.getSel();
			if(!sel || sel.rangeCount === 0) return;

			const range = sel.getRangeAt(0);
			let rect = range.getBoundingClientRect();

			// Fallback: If cursor is at start of empty line, get element rect
			if(rect.top === 0 && rect.bottom === 0)
			{
				const startNode = range.startContainer as HTMLElement;
				const targetElem = startNode.nodeType === Node.ELEMENT_NODE
					? startNode
					: startNode.parentElement;
				if(targetElem)
				{
					rect = targetElem.getBoundingClientRect();
				}
			}

			if(rect.top === 0 && rect.bottom === 0) return;

			// 2. Locate TinyMCE's floating toolbar container
			// TinyMCE inline toolbar container rendered in body or root
			const container = editor.getContainer() || document.querySelector('.tox-tinymce-inline');
			if(!container) return;

			const toolbarEl = container as HTMLElement;
			toolbarEl.style.position = 'fixed';
			toolbarEl.style.transition = 'top 0.12s ease-out, left 0.12s ease-out'; // Smooth "flowy" tracking

			// 3. Offset calculations:
			// Place toolbar ~42px ABOVE the caret line (or below if near top of viewport)
			const toolbarHeight = toolbarEl.offsetHeight || 40;
			let targetTop = rect.top - toolbarHeight - 8;

			// If caret is too close to top of viewport, shift toolbar below caret line instead
			if(targetTop < 10)
			{
				targetTop = rect.bottom + 8;
			}

			// Align horizontally with the caret position (with safety bounds)
			let targetLeft = rect.left;
			const maxLeft = window.innerWidth - toolbarEl.offsetWidth - 16;
			targetLeft = Math.max(16, Math.min(targetLeft, maxLeft));

			// 4. Apply updated coordinates
			toolbarEl.style.top = `${targetTop}px`;
			toolbarEl.style.left = `${targetLeft}px`;
			toolbarEl.style.zIndex = '100000';
		});
	}


	// private static trackCaret(editor: any, scrollerViewport: HTMLElement)
	// {
	// 	if(this.rafId) cancelAnimationFrame(this.rafId);

	// 	this.rafId = requestAnimationFrame(() =>
	// 	{
	// 		const sel = editor.selection.getSel();
	// 		if(!sel || sel.rangeCount === 0) return;

	// 		const range = sel.getRangeAt(0);
	// 		const caretRect = range.getBoundingClientRect();
	// 		const viewportRect = scrollerViewport.getBoundingClientRect();

	// 		// Top boundary offset (leave room below fixed toolbar - e.g. 60px)
	// 		const topBuffer = viewportRect.top + 60;
	// 		// Bottom boundary offset
	// 		const bottomBuffer = viewportRect.bottom - 40;

	// 		// 1. If cursor goes above top buffer (behind toolbar), scroll viewport up
	// 		if(caretRect.top < topBuffer)
	// 		{
	// 			scrollerViewport.scrollTop -= (topBuffer - caretRect.top + 20);
	// 		}
	// 		// 2. If cursor goes below bottom buffer, scroll viewport down
	// 		else if(caretRect.bottom > bottomBuffer)
	// 		{
	// 			scrollerViewport.scrollTop += (caretRect.bottom - bottomBuffer + 20);
	// 		}
	// 	});
	// }


	private attachEvents()
	{
		this.node.addEventListener('click', async (event) =>
		{
			const cellContentDiv = (event.target as HTMLElement)?.closest?.('*[contenteditable], .mce-content-body') as HTMLElement;

			if(!cellContentDiv)
			{
				return;
			}

			if(!WriterWidget.activeEditor)
			{
				await this.initEditor(cellContentDiv);
				return;
			}

			const editor = WriterWidget.activeEditor;

			if(editor.bodyElement !== cellContentDiv)
			{
				// 1. Unbind focus from old element
				editor.bodyElement?.blur();

				// 2. Update TinyMCE internal pointers
				editor.bodyElement = cellContentDiv;
				editor.targetElm = cellContentDiv;

				// 3. Ensure element is editable BEFORE setting content/selection
				cellContentDiv.setAttribute('contenteditable', 'true');

				// 4. Populate content into TinyMCE without wiping selection history
				editor.setContent(cellContentDiv.innerHTML, { format: 'raw' });

				// 5. CRITICAL: Re-bind TinyMCE's internal selection to the new body
				editor.selection.select(cellContentDiv, true); // Selects content of new cell
				editor.selection.collapse(false);              // Collapses cursor to the end (or start)

				// 6. Force focus directly on TinyMCE editor host
				editor.focus();

				// 7. Tell TinyMCE to update formats/toolbars for the new node
				editor.dispatch('focusin', event);
				editor.show();
				editor.nodeChanged();
			}
			else if(editor.container.style.display === 'none')
			{
				// If already on the same cell, just restore cursor/focus
				editor.focus();
				editor.dispatch('focusin', event);
				editor.show();
				editor.nodeChanged();
			}

		});
	}

	public exportToPdf(): void
	{
		if(!this.pdfWorker) return;

		// Compile entire document cells into raw HTML string
		const renderedHtml = this.documentModel.cells
			.map(c => `<div class="cell-container">${c.content}</div>`)
			.join('<div class="page-break"></div>');

		this.pdfWorker.postMessage({
			title: this.documentModel.title,
			cellsHtml: renderedHtml
		});
	}

	private initPdfWorker(): void
	{
		// Instantiate off-thread printing worker inline/blob or worker file
		const workerBlob = new Blob([
			`self.onmessage = function(e) {
        const { title, cellsHtml } = e.data;
        const html = "<html><head><title>" + title + "</title></head>body>" + cellsHtml + "</body></html>";
        self.postMessage({ type: "DONE", html });
      };`
		], { type: 'text/javascript' });

		this.pdfWorker = new Worker(URL.createObjectURL(workerBlob));
		this.pdfWorker.onmessage = (e) =>
		{
			if(e.data.type === 'DONE')
			{
				const printWin = window.open('', '_blank');
				if(printWin)
				{
					printWin.document.write(e.data.html);
					printWin.document.close();
					printWin.print();
				}
			}
		};
	}

	private bindSignals(): void
	{
		this.scroller.cellActionTriggered.connect((_, evt) =>
		{
			const idx = this.documentModel.cells.findIndex(c => c.id === evt.cellId);
			if(idx === -1) return;

			switch(evt.action)
			{
				case 'add-below':
					this.documentModel.cells.splice(idx + 1, 0, {
						id: 'c_' + Date.now(),
						type: 'markdown',
						content: ''
					});
					this.scroller.setCells(this.documentModel.cells);
					break;

				case 'delete':
					if(this.documentModel.cells.length > 1)
					{
						this.documentModel.cells.splice(idx, 1);
						this.scroller.setCells(this.documentModel.cells);
					}
					break;

				case 'ai-wand':
					console.log(`[AI Magic Wand] Invoked for cell: ${evt.cellId}`);
					// AI prompt hook integration point
					break;

				case 'outline-toggle':
					console.log(`[Outline Toggle] Triggered for cell: ${evt.cellId}`);
					break;
			}
		});
	}
}

widgetSelf.WriterWidget = WriterWidget;


export const BIONICLE_DEMO_CELLS: ICellModel[] = [
	{
		id: 'cell-header-markdown',
		type: 'markdown',
		content: `# BIONICLE: Legend of Mata Nui
## Interactive Lore & Web Presence Studio

> *"In the time before time, the Great Spirit Mata Nui fell into a deep slumber..."*

Welcome to the **BIONICLE Web Presence Writer**. This environment bridges raw markdown storytelling, rich component layouts, and canvas drawing layers.`
	},
	{
		id: 'cell-kanohi-canvas',
		type: 'canvas',
		content: JSON.stringify({
			version: '5.3.0',
			objects: [
				{
					type: 'rect',
					left: 50,
					top: 30,
					width: 300,
					height: 120,
					fill: '#1565c0',
					rx: 12,
					ry: 12
				},
				{
					type: 'textbox',
					left: 70,
					top: 60,
					width: 260,
					text: 'KANOHI HAU\nMask of Shielding',
					fontSize: 20,
					fill: '#ffffff',
					fontFamily: 'sans-serif',
					textAlign: 'center'
				}
			]
		})
	},
	{
		id: 'cell-code-ast',
		type: 'code',
		content: `// Toa Mata Element Mapping
interface Toa {
    name: string;
    element: 'Fire' | 'Water' | 'Air' | 'Earth' | 'Stone' | 'Ice';
    kanohi: string;
}

const TAHU: Toa = {
    name: 'Tahu',
    element: 'Fire',
    kanohi: 'Hau'
};`
	},
	{
		id: 'cell-html-banner',
		type: 'html',
		content: `<div style="background: linear-gradient(135deg, #ff6f00, #ff8f00); padding: 24px; border-radius: 8px; color: white;">
    <h3 style="margin: 0 0 8px 0; font-family: sans-serif;">Ta-Koro Chronicles</h3>
    <p style="margin: 0; opacity: 0.9;">Directly published as a web component from your writer studio.</p>
</div>`
	}
];


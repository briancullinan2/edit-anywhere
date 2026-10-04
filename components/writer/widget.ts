import { Widget, PanelLayout } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { VirtualWriterScrollerWidget } from './widget-scroll';
import type { IDocumentModel, ICellModel } from './widget.d';

export class WriterWidget extends Widget
{
	private scroller: VirtualWriterScrollerWidget;
	private documentModel: IDocumentModel;
	private pdfWorker?: Worker;

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
				{ id: 'c2', type: 'canvas', content: '' },
				{ id: 'c3', type: 'html', content: '<div><h2 style="color: #ff5722;">Interactive Web Presence</h2></div>' }
			]
		};

		this.scroller = new VirtualWriterScrollerWidget();
		(this.layout as PanelLayout).addWidget(this.scroller);

		this.initPdfWorker();
		this.bindSignals();
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		this.scroller.setCells(this.documentModel.cells);
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

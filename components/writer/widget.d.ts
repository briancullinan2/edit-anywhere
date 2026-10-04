export type CellType = 'markdown' | 'code' | 'html' | 'canvas' | string;

export interface ICellModel
{
	id: string;
	type: CellType;
	content: string; // Markdown source, JS code, HTML string, or Fabric JSON string
	height?: number; // Measured height cache
	metadata?: Record<string, any>;
}

export interface IDocumentModel
{
	title: string;
	cells: ICellModel[];
}

export interface ICellRendererModule
{
	type: CellType;
	render(container: HTMLElement, model: ICellModel, onChange: (val: string) => void):
		Prmise<{
			dispose: () => void;
			getValue: () => string;
			getHeight?: () => number;
		}>;
}

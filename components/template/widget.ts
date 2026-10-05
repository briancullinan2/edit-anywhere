import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import
{
	ITemplateCategory,
	ITemplateItem,
	DEFAULT_TEMPLATE_CATEGORIES,
	prepareTemplateForEditor,
	CONTENT_LAYOUT_TEMPLATE_CATEGORIES
} from './template';
import { TemplateMiniatureRenderer } from './widget-mini';

export class LayoutWidget extends Widget
{
	/**
	 * Signal emitted when a template is chosen.
	 * Delivers the template model and the editor-ready HTML string.
	 */
	public readonly templateSelected = new Signal<this, { template: ITemplateItem; editorContent: string; }>(this);

	private categories: ITemplateCategory[];

	constructor(title?: string, categories: ITemplateCategory[] = [...DEFAULT_TEMPLATE_CATEGORIES, ...CONTENT_LAYOUT_TEMPLATE_CATEGORIES])
	{
		super();
		this.title.label = title ?? 'Templates';
		this.categories = categories;
		this.id = 'lumino-template-gallery';
		this.addClass('docs-homescreen-itemholder-content');
		this.addClass('docs-homescreen-templates-gallery');
		this.node.style.cssText = 'overflow-y: auto; height: 100%; width: 100%; background: #f8f9fa; padding: 16px; box-sizing: border-box;';
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		this.renderGallery();
	}

	private renderGallery(): void
	{
		this.node.innerHTML = '';

		for(const category of this.categories)
		{
			const gridContainer = document.createElement('div');
			gridContainer.className = 'docs-homescreen-grid-container docs-homescreen-grid-container-horizontal';

			// Section Header
			const header = document.createElement('div');
			header.className = 'docs-homescreen-grid-header';

			const title = document.createElement('div');
			title.className = 'docs-homescreen-grid-header-title';
			title.textContent = category.title;
			header.appendChild(title);

			gridContainer.appendChild(header);

			// Template Items Row / Grid
			const sectionList = document.createElement('div');
			sectionList.className = 'docs-homescreen-item-section';
			sectionList.setAttribute('role', 'listbox');

			for(const tpl of category.templates)
			{
				const itemNode = this.createTemplateCard(tpl);
				sectionList.appendChild(itemNode);
			}

			gridContainer.appendChild(sectionList);
			this.node.appendChild(gridContainer);
		}
	}

	private createTemplateCard(tpl: ITemplateItem): HTMLElement
	{
		const card = document.createElement('div');
		card.className = 'docs-homescreen-templates-templateview docs-homescreen-templates-templateview-showcase';
		card.setAttribute('role', 'option');
		card.setAttribute('tabindex', '0');

		// Preview Container
		const preview = document.createElement('div');
		preview.className = 'docs-homescreen-templates-templateview-preview docs-homescreen-templates-templateview-preview-showcase';

		const overlay = document.createElement('div');
		overlay.className = 'docs-homescreen-templates-templateview-preview-overlay';

		preview.appendChild(overlay);

		if(tpl.thumbnailUrl)
		{
			const img = document.createElement('img');
			img.src = tpl.thumbnailUrl;
			img.alt = tpl.title;
			preview.appendChild(img);
		} else
		{
			// Build live mini DOM preview with tag badges
			const miniView = TemplateMiniatureRenderer.renderMiniature(tpl);
			preview.appendChild(miniView);
		}

		// Caption Metadata
		const caption = document.createElement('div');
		caption.className = 'docs-homescreen-templates-templateview-caption';

		const meta = document.createElement('div');
		meta.className = 'docs-homescreen-templates-templateview-metadata';

		const titleEl = document.createElement('div');
		titleEl.className = 'docs-homescreen-templates-templateview-title';
		titleEl.textContent = tpl.title;

		const styleEl = document.createElement('div');
		styleEl.className = 'docs-homescreen-templates-templateview-style';
		styleEl.textContent = tpl.styleVariant;

		meta.appendChild(titleEl);
		meta.appendChild(styleEl);
		caption.appendChild(meta);

		card.appendChild(preview);
		card.appendChild(caption);

		// Event Handler: Click -> Convert into contenteditable starter HTML
		card.onclick = () =>
		{
			const editorContent = prepareTemplateForEditor(tpl.htmlContent, tpl.cssContent);
			this.templateSelected.emit({
				template: tpl,
				editorContent
			});
		};

		return card;
	}

}

export class TemplateWidget extends LayoutWidget
{
	constructor(title?: string, categories: ITemplateCategory[] = DEFAULT_TEMPLATE_CATEGORIES)
	{
		super();
		this.title.label = title ?? 'Layouts';
	}
}

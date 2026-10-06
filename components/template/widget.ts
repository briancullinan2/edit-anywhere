import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import
{
	ITemplateCategory,
	ITemplateItem,
	DEFAULT_TEMPLATE_CATEGORIES,
	prepareTemplateForEditor,
	CONTENT_LAYOUT_TEMPLATE_CATEGORIES,
	TemplateCategoryWidget,
	ITemplateSelectPayload
} from './template';
import { TemplateMiniatureRenderer } from './widget-mini';
import type { LuminoLayoutWindow } from '../bundle/lumino.d';
import type { GlobalToolbarsWindow } from '../bundle/menu.d';
import type { IconSize } from '../tools/widget';

export * from './template';

const widgetSelf: LuminoLayoutWindow & GlobalToolbarsWindow = self as unknown as any;

export class LayoutWidget extends Widget
{
	/**
	 * Signal emitted when a template is chosen.
	 * Delivers the template model and the editor-ready HTML string.
	 */
	public readonly templateSelected = new Signal<this, { template: ITemplateItem; editorContent: string; }>(this);

	private categories: ITemplateCategory[];
	private categoriesSidebar?: TemplateCategoryWidget;
	private filterCategory?: ITemplateCategory;

	constructor(title?: string, categories: ITemplateCategory[] = [...DEFAULT_TEMPLATE_CATEGORIES, ...CONTENT_LAYOUT_TEMPLATE_CATEGORIES])
	{
		super();
		this.title.label = title ?? 'Templates';
		this.title.iconClass = 'bx bx-scroll';
		this.title.closable = true;
		this.categories = categories;
		this.id = 'lumino-template-gallery';
		this.addClass('docs-homescreen-itemholder-content');
		this.addClass('docs-homescreen-templates-gallery');
		this.categoriesSidebar = new TemplateCategoryWidget(undefined, categories);
		this.categoriesSidebar?.categorySelected.connect(this.filterTemplates.bind(this));
	}


	private filterTemplates(send: Widget, args: ITemplateSelectPayload)
	{
		debugger;
		this.filterCategory = args.category;
		this.renderGallery();
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		this.renderGallery();
		this.openCategories();
	}

	protected override onAfterShow(msg: Message): void
	{
		super.onAfterShow(msg);
		this.openCategories();
	}

	private openCategories()
	{
		const that = this;
		setTimeout(() =>
		{
			if(widgetSelf.mainDock && widgetSelf.LayoutAdjuster && that.categoriesSidebar)
			{
				if(!this.categoriesSidebar?.isAttached)
				{
					widgetSelf.LayoutAdjuster?.addOptimalWidgetLayout(widgetSelf.mainDock, that.categoriesSidebar, {
						type: 'outline',
						projectId: that.categoriesSidebar?.constructor.name
					});
				}
			}
		}, 300);
	}

	public processMessage(msg: Message): void
	{
		if(msg.type === 'close-request')
		{
			this.categoriesSidebar?.close();
		}

		super.processMessage(msg);
	}

	protected override onBeforeHide(msg: Message): void
	{
		this.categoriesSidebar?.close();
		super.onBeforeHide(msg);
	}


	protected override onBeforeDetach(msg: Message): void
	{
		this.categoriesSidebar?.close();
		super.onBeforeDetach(msg);
	}


	private renderGallery(): void
	{
		if(!this.filterCategory || this.filterCategory.id === 'all')
		{

			this.node.innerHTML = `
				<div class="template-placeholder">
				<i class="bx bx-select-multiple"></i>
				<p>Select a category from the list to view templates.</p>
				</div>
			`;

			return;
		}
		this.node.innerHTML = '';

		for(const category of this.categories)
		{
			if(category !== this.filterCategory)
			{
				continue;
			}

			const gridContainer = document.createElement('div');
			gridContainer.className = 'docs-homescreen-grid-container docs-homescreen-grid-container-horizontal';

			// Section Header
			const header = document.createElement('div');
			header.className = 'docs-homescreen-grid-header';

			const title = document.createElement('h3');
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
			if(tpl.description)
			{
				preview.title = tpl.description;
			}
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




	public setZoom(delta?: number)
	{
		if(delta === -1)
		{
			if(this.zoom === 'tiny')
			{

			} else if(this.zoom === 'small')
			{
				this.zoom = 'tiny';
			} else if(this.zoom === 'medium')
			{
				this.zoom = 'small';
			} else if(this.zoom === 'large')
			{
				this.zoom = 'medium';
			} else if(this.zoom === 'huge')
			{
				this.zoom = 'large';
			} else
			{
				this.zoom = 'medium';
			}
		}
		else if(delta === 1)
		{
			if(this.zoom === 'tiny')
			{
				this.zoom = 'small';
			} else if(this.zoom === 'small')
			{
				this.zoom = 'medium';
			} else if(this.zoom === 'medium')
			{
				this.zoom = 'large';
			} else if(this.zoom === 'large')
			{
				this.zoom = 'huge';
			} else if(this.zoom === 'huge')
			{

			} else
			{
				this.zoom = 'medium';
			}
		} else if(delta === 0)
		{
			this.zoom = 'medium';
		}

		for(const c of this.node.classList)
		{
			if(c.startsWith('zoom-') && c !== this.zoom)
			{
				this.removeClass(c);
			}
		}
		this.addClass('zoom-' + this.zoom);
	}

	private zoom: IconSize = 'medium';
	public modules: Record<string, Record<string, Function>> = LOCAL_COMMANDS;
}

export class TemplateWidget extends LayoutWidget
{
	constructor(title?: string, categories: ITemplateCategory[] = DEFAULT_TEMPLATE_CATEGORIES)
	{
		super();
		this.title.label = title ?? 'Layouts';
	}
	public modules: Record<string, Record<string, Function>> = LOCAL_COMMANDS;
}

if(typeof module !== 'undefined' && module.exports)
{
	module.exports = {
		TemplateWidget,
		LayoutWidget
	};
}

const LOCAL_COMMANDS: Record<string, Record<string, Function>> = {};


LOCAL_COMMANDS['view/zoom'] = {
	in: function ()
	{
		//const toolbar = fileviewSelf.ViewToolbar?.getInstance();
		//toolbar?.toggleHiddenFiles();
		const activeWidget = widgetSelf.lastInteractedWidget ?? widgetSelf.previousInteractedWidget;
		if(typeof (activeWidget as any)?.setZoom === 'function')
		{
			(activeWidget as any).setZoom(1);
		}
	},
	out: function ()
	{
		//const toolbar = fileviewSelf.ViewToolbar?.getInstance();
		//toolbar?.toggleHiddenFiles();
		const activeWidget = widgetSelf.lastInteractedWidget ?? widgetSelf.previousInteractedWidget;
		if(typeof (activeWidget as any)?.setZoom === 'function')
		{
			(activeWidget as any).setZoom(-1);
		}
	}
};

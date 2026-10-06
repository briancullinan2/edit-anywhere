import { AUTHOR_LAYOUT_TEMPLATES } from "./layout-author";
import { BACK_PANEL_REVIEWS_TEMPLATES } from "./layout-back";
import { CALLOUTS_QUOTES_LISTS_TEMPLATES } from "./layout-callout";
import { CATALOG_BROCHURE_TEMPLATES } from "./layout-catelog";
import { FAQ_TROUBLESHOOTING_TEMPLATES } from "./layout-faq";
import { FEATURE_COMPONENTS_TEMPLATES } from "./layout-feature";
import { INDEX_GLOSSARY_TEMPLATES } from "./layout-glossary";
import { MARKETING_TEMPLATES } from "./layout-marketing";
import { EXECUTIVE_PREAMBLE_TEMPLATES } from "./layout-preamble";
import { TOC_FRONT_MATTER_TEMPLATES } from "./layout-tables";
import { TECHNICAL_DIAGRAMS_TEMPLATES } from "./layout-tech";
import { EDUCATION_TEMPLATES } from "./template-education";
import { EXOTIC_TEMPLATES } from "./template-exotic";
import { HR_TEMPLATES } from "./template-hr";
import { LEGAL_TEMPLATES } from "./template-legal";
import { LETTER_TEMPLATES } from "./template-letters";
import { PROPOSAL_TEMPLATES } from "./template-proposal";
import { PUBLISHER_TEMPLATES } from "./template-publisher";
import { RESEARCH_TEMPLATES } from "./template-research";
import { RESUME_TEMPLATES } from "./template-resume";
import { SALES_TEMPLATES } from "./template-sales";
import { SHOWCASE_TEMPLATES } from "./template-showcase";
import { WORK_TEMPLATES } from "./template-work";
import { WRITING_TEMPLATES } from "./template-writing";
import { ZEN_TEMPLATES } from "./template-zen";

import { Widget } from '@lumino/widgets';
import { Signal } from '@lumino/signaling';
import { Message } from "@lumino/messaging";
import type { LuminoLayoutWindow } from "../bundle/lumino.d";

export interface ITemplateSelectPayload
{
	category: ITemplateCategory;
	//item?: ITemplateItem;
}

export interface ITemplateCategory
{
	id: string;
	title: string;
	templates: ITemplateItem[];
}

export interface ITemplateItem
{
	id: string;
	title: string;
	styleVariant: string;
	thumbnailUrl?: string; // Optional raster thumbnail fallback
	htmlContent: string;
	cssContent: string;
	description?: string;
}

/**
 * Transforms template HTML into editor-ready content by decorating leaf nodes
 * with contenteditable attributes and wrapper section markers.
 */
export function prepareTemplateForEditor(rawHtml: string, rawCss: string): string
{
	const parser = new DOMParser();
	const doc = parser.parseFromString(rawHtml, 'text/html');

	// Walk through tree and make leaf nodes contenteditable
	const walk = (node: Node) =>
	{
		if(node.nodeType === Node.ELEMENT_NODE)
		{
			const el = node as HTMLElement;
			// Skip script/style or complex embeds
			if(['SCRIPT', 'STYLE', 'SVG', 'CANVAS'].includes(el.tagName)) return;

			const hasElementChildren = Array.from(el.children).some(child =>
				!['SPAN', 'B', 'I', 'U', 'A', 'STRONG', 'EM'].includes(child.tagName)
			);

			if(!hasElementChildren && el.textContent?.trim())
			{
				el.setAttribute('contenteditable', 'true');
				el.classList.add('editable-template-leaf');
			} else
			{
				Array.from(el.childNodes).forEach(walk);
			}
		}
	};

	Array.from(doc.body.childNodes).forEach(walk);

	return `<style>${rawCss}</style>\n<div class="template-editor-wrapper">\n${doc.body.innerHTML}\n</div>`;
}

// Built-in high quality templates
export const DEFAULT_TEMPLATE_CATEGORIES: ITemplateCategory[] = [
	{
		id: 'showcase',
		title: 'Recently used templates',
		templates: SHOWCASE_TEMPLATES
	},
	{
		id: 'resumes',
		title: 'Resumes',
		templates: RESUME_TEMPLATES
	},
	{
		id: 'letters',
		title: 'Letters',
		templates: LETTER_TEMPLATES
	},
	{
		id: 'work',
		title: 'Work',
		templates: WORK_TEMPLATES
	},
	{
		id: 'sales',
		title: 'Sales',
		templates: SALES_TEMPLATES
	},
	{
		id: 'legal',
		title: 'Legal Documents',
		templates: LEGAL_TEMPLATES
	},
	{
		id: 'proposals',
		title: 'Proposals',
		templates: PROPOSAL_TEMPLATES
	},
	{
		id: 'hr',
		title: 'Human Resources',
		templates: HR_TEMPLATES
	},
	{
		id: 'education',
		title: 'Educational',
		templates: EDUCATION_TEMPLATES
	},
	{
		id: 'writing',
		title: 'Writing',
		templates: WRITING_TEMPLATES
	},
	{
		id: 'research',
		title: 'Research',
		templates: RESEARCH_TEMPLATES
	},
	{
		id: 'publisher',
		title: 'Publisher',
		templates: PUBLISHER_TEMPLATES
	},
	{
		id: 'exotic',
		title: 'Exotic',
		templates: EXOTIC_TEMPLATES
	},
	{
		id: 'zen',
		title: 'Zen Garden',
		templates: ZEN_TEMPLATES
	}
];

export const CONTENT_LAYOUT_TEMPLATE_CATEGORIES: ITemplateCategory[] = [
	{
		id: 'toc-front-matter',
		title: 'Table of Contents & Front Matter',
		templates: TOC_FRONT_MATTER_TEMPLATES
	},
	{
		id: 'index-glossary',
		title: 'Indexes & Glossaries',
		templates: INDEX_GLOSSARY_TEMPLATES
	},
	{
		id: 'author-layouts',
		title: 'Author Layouts & Bios',
		templates: AUTHOR_LAYOUT_TEMPLATES
	},
	{
		id: 'back-panel-reviews',
		title: 'Back Panels, Reviews & Blurbs',
		templates: BACK_PANEL_REVIEWS_TEMPLATES
	},
	{
		id: 'faq-troubleshooting',
		title: 'FAQ & Troubleshooting Guides',
		templates: FAQ_TROUBLESHOOTING_TEMPLATES
	},
	{
		id: 'feature-components',
		title: 'Feature Grids & Content Components',
		templates: FEATURE_COMPONENTS_TEMPLATES
	},
	{
		id: 'catalog-brochure',
		title: 'Catalog & Brochure Layouts',
		templates: CATALOG_BROCHURE_TEMPLATES
	},
	{
		id: 'executive-preamble',
		title: 'Executive Summaries & Preambles',
		templates: EXECUTIVE_PREAMBLE_TEMPLATES
	},
	{
		id: 'technical-diagrams',
		title: 'Code, Math & Technical Diagrams',
		templates: TECHNICAL_DIAGRAMS_TEMPLATES
	},
	{
		id: 'callouts-quotes-lists',
		title: 'Callouts, Quotes & Lists',
		templates: CALLOUTS_QUOTES_LISTS_TEMPLATES
	},
	{
		id: 'marketing',
		title: 'Marketing & Conversion Components',
		templates: MARKETING_TEMPLATES
	}
];

const threadsSelf: LuminoLayoutWindow = self as unknown as any;

export class TemplateCategoryWidget extends Widget
{
	/** Signal emitted when a template card is clicked. */
	public readonly categorySelected = new Signal<this, ITemplateSelectPayload>(this);

	private _categories: ITemplateCategory[];
	private _activeCategoryId: string = 'all';
	private _searchQuery: string = '';

	private _sidebarEl!: HTMLElement;
	private _galleryEl!: HTMLElement;
	private _searchInputEl!: HTMLInputElement;

	constructor(title?: string, categories: ITemplateCategory[] = [...DEFAULT_TEMPLATE_CATEGORIES, ...CONTENT_LAYOUT_TEMPLATE_CATEGORIES])
	{
		super();
		this.id = 'lumino-template-category-widget';
		this.title.label = title ?? 'Categories';
		this.title.closable = true;
		this.addClass('lm-TemplateCategoryWidget');

		this._categories = categories;

		this._buildSkeleton();
		this._renderSidebar();
	}

	public processMessage(msg: Message): void
	{
		if(msg.type === 'close-request')
		{
			console.log('Intercepted close request, hiding instead: ' + this.title.label);

			this.hide();
			threadsSelf.mainDock?.layout?.removeWidget(this);
			return; // BAIL OUT: Avoid calling super.processMessage() to prevent disposal
		}

		super.processMessage(msg);
	}

	/**
	 * Set up the base DOM structure.
	 */
	private _buildSkeleton(): void
	{
		this.node.innerHTML = `
			<aside class="tcw-sidebar">
				<div class="tcw-search-box">
					<input type="text" class="tcw-search-input" placeholder="Search templates..." />
				</div>
				<nav class="tcw-nav"></nav>
			</aside>
        `;

		this._sidebarEl = this.node.querySelector('.tcw-nav') as HTMLElement;
		this._galleryEl = this.node.querySelector('.tcw-gallery') as HTMLElement;
		this._searchInputEl = this.node.querySelector('.tcw-search-input') as HTMLInputElement;

		this._searchInputEl.addEventListener('input', this._onSearchInput);
	}

	private _onSearchInput = (e: Event): void =>
	{
		this._searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
	};

	/**
	 * Render category sidebar items.
	 */
	private _renderSidebar(): void
	{
		this._sidebarEl.innerHTML = '';

		const allBtn = document.createElement('button');
		allBtn.className = `tcw-nav-item ${this._activeCategoryId === 'all' ? 'active' : ''}`;
		allBtn.innerHTML = `<span class="tcw-nav-label">All Templates</span><span class="tcw-nav-count">${this._getTotalTemplateCount()}</span>`;
		allBtn.onclick = () => this._setActiveCategory({
			id: 'all',
			title: 'All Templates',
			templates: this._categories.map(c => c.templates).flat()
		});
		this._sidebarEl.appendChild(allBtn);

		this._categories.forEach(cat =>
		{
			const btn = document.createElement('button');
			btn.className = `tcw-nav-item ${this._activeCategoryId === cat.id ? 'active' : ''}`;
			btn.innerHTML = `
                <span class="tcw-nav-label">${this._escapeHtml(cat.title)}</span>
                <span class="tcw-nav-count">${cat.templates.length}</span>
            `;
			btn.onclick = () => this._setActiveCategory(cat);
			this._sidebarEl.appendChild(btn);
		});
	}

	private _setActiveCategory(category: ITemplateCategory): void
	{
		this._activeCategoryId = category.id;
		this.categorySelected.emit({
			category: category
		});
		this._renderSidebar();

		if(category.id !== 'all')
		{
			const targetSection = this._galleryEl.querySelector(`#tcw-cat-${category.id}`);
			if(targetSection)
			{
				targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} else
		{
			this._galleryEl.parentElement?.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	private _getTotalTemplateCount(): number
	{
		return this._categories.reduce((acc, cat) => acc + cat.templates.length, 0);
	}

	private _escapeHtml(str: string): string
	{
		return str.replace(/[&<>"']/g, m => ({
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		}[m] || m));
	}

	protected onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		// Force Lumino box layout refresh on parent attachment
		this.update();
	}
}

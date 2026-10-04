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

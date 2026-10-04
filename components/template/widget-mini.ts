import type { ITemplateItem } from './template';

export class TemplateMiniatureRenderer
{
	public static renderMiniature(template: ITemplateItem): HTMLElement
	{
		const container = document.createElement('div');
		container.id = 'template-mini-' + Date.now();
		container.className = 'template-mini-viewport';

		const styleEl = document.createElement('style');
		styleEl.textContent = `
	@scope (#${container.id}) {
      * { box-sizing: border-box; margin: 0; padding: 0; }
      div, section, header, article, aside, footer { position: relative; }
      ${template.cssContent}
	}
    `;
		container.appendChild(styleEl);

		const contentFrame = document.createElement('div');
		contentFrame.className = 'mini-frame-content';
		contentFrame.style.cssText = 'width: 100%; height: 100%; position: relative;';
		contentFrame.innerHTML = template.htmlContent;

		TemplateMiniatureRenderer.decorateNodesWithTags(contentFrame);

		container.appendChild(contentFrame);
		return container;
	}

	private static decorateNodesWithTags(parent: HTMLElement): void
	{
		const elements = Array.from(parent.querySelectorAll('*')) as HTMLElement[];

		elements.forEach((el) =>
		{
			const tagName = el.tagName.toLowerCase();
			if(['h1', 'h2', 'header', 'section', 'aside', 'button', 'article'].includes(tagName))
			{
				// Ensure parent element is positioned so absolute tag stays attached to top-right corner
				const pos = window.getComputedStyle(el).position;
				if(pos === 'static')
				{
					el.style.position = 'relative';
				}

				const badge = document.createElement('span');
				badge.className = `mini-tag-badge tag-${tagName}`;
				badge.textContent = `<${tagName}>`;
				el.appendChild(badge);
			}
		});
	}
}

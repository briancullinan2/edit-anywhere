import type { ITemplateItem } from './template';
import type { LuminoLayoutWindow } from '../bundle/lumino.d';

const widgetSelf: LuminoLayoutWindow = self as unknown as any;

export class TemplateMiniatureRenderer
{
	public static renderMiniature(template: ITemplateItem): HTMLElement
	{
		const container = document.createElement('div');
		container.id = 'template-mini-' + Date.now() + '-' + widgetSelf.nextTemp?.();
		container.className = 'template-mini-viewport';


		const styleEl = document.createElement('style');
		styleEl.textContent = `
	@scope (#${container.id}) {
      * { box-sizing: border-box; margin: 0; padding: 0; }
      div, section, header, article, aside, footer { position: relative; }
      ${TemplateMiniatureRenderer.convertNamedFontSizesToEm(
			replaceCssColors(template.cssContent))}
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


	public static convertNamedFontSizesToEm(cssString: string)
	{
		const fontSizeMap: Record<string, string> = {
			'xx-small': '0.625em',
			'x-small': '0.75em',
			'small': '0.875em',
			'medium': '1em',
			'large': '1.2em',
			'x-large': '1.5em',
			'xx-large': '2em',
			'xxx-large': '3em',
			'smaller': '0.833em',
			'larger': '1.2em'
		};

		// Regex matches 'font-size:' or 'font:' followed by a named keyword
		const pattern = /(font(?:-size)?\s*:\s*)([a-z-]+)(?=[;\s!}])/gi;

		return cssString.replace(pattern, (match, property, keyword) =>
		{
			const lowerKeyword = keyword.toLowerCase();
			if(fontSizeMap.hasOwnProperty(lowerKeyword))
			{
				return `${property}${fontSizeMap[lowerKeyword]}`;
			}
			return match;
		});
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

/**
 * Classifies RGB values into standard Ace theme variable targets based on HSL color balance.
 */
function classifyColorToAceVar(r: number, g: number, b: number)
{
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;
	const l = (max + min) / 2;

	let h = 0;
	let s = 0;

	if(delta !== 0)
	{
		s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
		switch(max)
		{
			case rNorm:
				h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) / 6;
				break;
			case gNorm:
				h = ((bNorm - rNorm) / delta + 2) / 6;
				break;
			case bNorm:
				h = ((rNorm - gNorm) / delta + 4) / 6;
				break;
		}
	}

	const hueDegrees = h * 360;

	// 1. Monochromatic / Greys (Low Saturation)
	if(s < 0.18 || delta < 0.1)
	{
		if(l < 0.15) return '--ace-bg';
		if(l < 0.35) return '--ace-selection-bg';
		if(l < 0.65) return '--ace-comment';
		return '--ace-foreground';
	}

	// 2. Chromatic Colors (Determined by Hue angles)
	if(hueDegrees >= 330 || hueDegrees < 15)
	{
		return '--ace-pink'; // Pink / Red
	} else if(hueDegrees >= 15 && hueDegrees < 45)
	{
		return '--ace-pink'; // Orange / Warm accents
	} else if(hueDegrees >= 45 && hueDegrees < 70)
	{
		return '--ace-foreground'; // Yellow / Bright neutral accents
	} else if(hueDegrees >= 70 && hueDegrees < 165)
	{
		return '--ace-green'; // Greens & Cyans
	} else if(hueDegrees >= 165 && hueDegrees < 260)
	{
		return '--ace-blue'; // Blues & Light Sky Blues
	} else if(hueDegrees >= 260 && hueDegrees < 330)
	{
		return '--ace-purple'; // Violets, Purples, Magentas
	}

	return '--ace-foreground';
}

export function replaceCssColors(cssContent: string)
{
	return cssContent
		// global replacement flag /g ensures all instances in the CSS string are replaced

		// almost white / light backgrounds
		.replace(/(#[cdef][cdef][cdef]);/gi, 'var(--ace-bg, $1);')
		.replace(/(#[cdef][a-f0-9][cdef][a-f0-9][cdef][a-f0-9]);/gi, 'var(--ace-bg, $1);')

		// almost black / dark foregrounds
		.replace(/(#[01234][01234][01234]);/gi, 'var(--ace-foreground, $1);')
		.replace(/(#[01234][a-f0-9][01234][a-f0-9][01234][a-f0-9]);/gi, 'var(--ace-foreground, $1);')

		// greys all close together
		.replace(/(#[345][345][345]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[567][567][567]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[789][789][789]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[9ab][9ab][9ab]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[345][a-f0-9][345][a-f0-9][345][a-f0-9]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[567][a-f0-9][567][a-f0-9][567][a-f0-9]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[789][a-f0-9][789][a-f0-9][789][a-f0-9]);/gi, 'var(--ace-comment, $1);')
		.replace(/(#[9ab][a-f0-9][9ab][a-f0-9][9ab][a-f0-9]);/gi, 'var(--ace-comment, $1);')

		// reds / pinks (dominant R channel)
		.replace(/(#[789a-f][01234][0123]);/gi, 'var(--ace-pink, $1);')
		.replace(/(#[789a-f][a-f0-9][01234][a-f0-9][0123][a-f0-9]);/gi, 'var(--ace-pink, $1);')

		// blues / cyans (dominant B channel)
		.replace(/(#[01234][01234567][789a-f]);/gi, 'var(--ace-blue, $1);')
		.replace(/(#[01234][a-f0-9][01234567][a-f0-9][789a-f][a-f0-9]);/gi, 'var(--ace-blue, $1);')

		// greens (dominant G channel)
		.replace(/(#[01234][789a-f][01234]);/gi, 'var(--ace-green, $1);')
		.replace(/(#[01234][a-f0-9][789a-f][a-f0-9][01234][a-f0-9]);/gi, 'var(--ace-green, $1);')

		// purples / magentas (high R and B, low G)
		.replace(/(#[789a-f][01234][789a-f]);/gi, 'var(--ace-purple, $1);')
		.replace(/(#[789a-f][a-f0-9][01234][a-f0-9][789a-f][a-f0-9]);/gi, 'var(--ace-purple, $1);')

		// oranges / yellows (high R and G, low B)
		.replace(/(#[789a-f][6789a-f][01234]);/gi, 'var(--ace-gutter-bg, $1);')
		.replace(/(#[789a-f][a-f0-9][6789a-f][a-f0-9][01234][a-f0-9]);/gi, 'var(--ace-orange, $1);');
}

/**
 * Main CSS Color Replacer
 */
export function replaceCssColorsOld(cssContent: string)
{
	let result = cssContent;

	// ---------------------------------------------------------------------------
	// 1. MATCH HEX VALUES (#RGB or #RRGGBB)
	// Lookbehinds/Lookaheads ensure we don't match hexes already trapped inside var(...) or rgb(...)
	// ---------------------------------------------------------------------------
	const hexRegex = /(?<!var\([^)]*\vert{}from\s+[^)]*)(?<![a-zA-Z0-9_])#([0-9a-fA-F]{3}\vert{}[0-9a-fA-F]{6})\b(?![\w-]*\))/g;

	result = result.replace(hexRegex, (fullMatch, hexGroup) =>
	{
		let hex = hexGroup;
		if(hex.length === 3)
		{
			hex = hex.split('').map((c: string) => c + c).join('');
		}

		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);

		const targetVar = classifyColorToAceVar(r, g, b);
		return `var(${targetVar}, ${fullMatch})`;
	});

	// ---------------------------------------------------------------------------
	// 2. MATCH RGB / RGBA CALLS
	// Skips rgb(...) expressions that already use 'from var(...)' relative syntax
	// ---------------------------------------------------------------------------
	const rgbRegex = /(?<!rgb\(\s*from\s+)rgba?\(\s*(\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(?:\s*[/,]\s*([\d.\%]+))?\s*\)/gi;

	result = result.replace(rgbRegex, (fullMatch, rStr, gStr, bStr, alphaStr) =>
	{
		const r = parseInt(rStr, 10);
		const g = parseInt(gStr, 10);
		const b = parseInt(bStr, 10);

		const targetVar = classifyColorToAceVar(r, g, b);
		const hexFallback = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

		// Format opacity alpha
		let alphaFormatted = '100%';
		if(alphaStr)
		{
			if(alphaStr.endsWith('%'))
			{
				alphaFormatted = alphaStr;
			} else
			{
				const parsedAlpha = parseFloat(alphaStr);
				alphaFormatted = `${Math.round(parsedAlpha <= 1 ? parsedAlpha * 100 : parsedAlpha)}%`;
			}
		}

		// If fully opaque, standard var replacement; if semi-transparent, relative color syntax
		if(alphaFormatted === '100%')
		{
			return `var(${targetVar}, ${hexFallback})`;
		}

		return `rgb(from var(${targetVar}, ${hexFallback}) r g b / ${alphaFormatted})`;
	});

	return result;
}

import type { ITemplateItem } from "./template";

export const BACK_PANEL_REVIEWS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'review-star-rating-block',
		title: 'Editorial review with star rating',
		styleVariant: 'Star Review',
		htmlContent: `
      <div class="review-block">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>&ldquo;A tour de force in modern web architectures. Essential reading.&rdquo;</p>
        <span class="source">&mdash; Tech Publishing Weekly</span>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .review-block { background: #fff8f1; border: 0.5px solid #fed7aa; padding: 4px; border-radius: 2px; }
      .stars { color: #f59e0b; font-size: 5px; margin-bottom: 2px; }
      p { font-size: 3.6px; color: #431407; margin: 0 0 2px 0; font-style: italic; }
      .source { font-size: 3px; font-family: sans-serif; font-weight: bold; color: #ea580c; }
    `
	},
	{
		id: 'blurb-press-quotes-stack',
		title: 'Stacked press blurbs',
		styleVariant: 'Press Stack',
		htmlContent: `
      <div class="press-stack">
        <div class="quote"><p>&ldquo;Brilliant code execution.&rdquo;</p><span>&mdash; Code Magazine</span></div>
        <div class="quote"><p>&ldquo;Fast, lightweight, effective.&rdquo;</p><span>&mdash; Dev Review</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .quote { border-bottom: 0.5px solid #e2e8f0; padding-bottom: 2px; margin-bottom: 2px; }
      .quote p { font-size: 3.4px; font-weight: bold; color: #0f172a; margin: 0; }
      .quote span { font-size: 3px; color: #64748b; }
    `
	},
	{
		id: 'backpanel-isbn-barcode-block',
		title: 'Back panel barcode & publisher mark',
		styleVariant: 'ISBN Barcode',
		htmlContent: `
      <div class="back-bar">
        <div class="pub-mark">LUMINO PRESS</div>
        <div class="barcode-ph">||||| |||||| |||||||</div>
        <span class="isbn">ISBN 978-0-123456-78-9</span>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #fff; border: 1px solid #000; text-align: center; }
      .pub-mark { font-size: 3.5px; font-weight: bold; margin-bottom: 2px; }
      .barcode-ph { font-size: 6px; letter-spacing: 1px; }
      .isbn { font-size: 2.8px; color: #444; }
    `
	},
	{
		id: 'review-praise-grid-2x2',
		title: '2x2 Praise grid',
		styleVariant: '2x2 Grid',
		htmlContent: `
      <div class="praise-grid">
        <div class="cell">&ldquo;Masterpiece.&rdquo;</div>
        <div class="cell">&ldquo;Unstoppable.&rdquo;</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .praise-grid { display: flex; gap: 3px; }
      .cell { flex: 1; background: #0f172a; color: #38bdf8; font-size: 3.5px; padding: 3px; text-align: center; font-style: italic; }
    `
	},
	{
		id: 'blurb-author-endorsement',
		title: 'Prominent author endorsement',
		styleVariant: 'Author Endorsement',
		htmlContent: `
      <div class="endorse">
        <p>&ldquo;I couldn't put it down. This changes everything we know about local worker tabs.&rdquo;</p>
        <span>&mdash; Jane Doe, Author of <em>Web Architecture</em></span>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; border-left: 2px solid #2563eb; background: #eff6ff; }
      p { font-size: 3.6px; color: #1e3a8a; margin: 0 0 2px 0; }
      span { font-size: 3px; font-family: sans-serif; color: #1d4ed8; }
    `
	},
	{
		id: 'backpanel-synopsis-summary',
		title: 'Back panel book synopsis',
		styleVariant: 'Back Synopsis',
		htmlContent: `
      <div class="back-synopsis">
        <h3>WHAT LIES WITHIN</h3>
        <p>Discover the secrets of building robust client-worker networking architectures directly inside browser tabs.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #1e293b; color: #fff; }
      h3 { font-size: 4px; color: #f59e0b; margin: 0 0 2px 0; letter-spacing: 0.5px; }
      p { font-size: 3.4px; color: #cbd5e1; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'review-badge-highlight',
		title: 'Award badge callout',
		styleVariant: 'Award Badge',
		htmlContent: `
      <div class="award-block">
        <div class="badge">&#127942; WINNER</div>
        <p>Best Technical Publication 2026</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; text-align: center; }
      .badge { background: #fef08a; color: #854d0e; font-size: 3.5px; font-weight: bold; display: inline-block; padding: 1px 4px; border-radius: 10px; }
      p { font-size: 3.2px; color: #475569; margin-top: 2px; }
    `
	},
	{
		id: 'blurb-reader-testimonial-slider',
		title: 'Reader testimonial card',
		styleVariant: 'Testimonial Card',
		htmlContent: `
      <div class="test-card">
        <p>&ldquo;Solves my daily Webpack build headache.&rdquo;</p>
        <span class="user">&mdash; @dev_user99</span>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #f1f5f9; border-radius: 3px; }
      p { font-size: 3.4px; color: #334155; margin: 0; }
      .user { font-size: 2.8px; color: #0284c7; font-weight: bold; margin-top: 2px; display: block; }
    `
	},
	{
		id: 'backpanel-publisher-colophon',
		title: 'Publisher colophon block',
		styleVariant: 'Colophon Block',
		htmlContent: `
      <div class="colophon">
        <p>Typeset in Georgia and Helvetica. Printed on recycled acid-free paper by Lumino Digital Press.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; font-size: 2.8px; color: #666; text-align: center; border-top: 0.5px solid #ddd; }
    `
	},
	{
		id: 'review-critic-pull-quote',
		title: 'Large critic pull quote',
		styleVariant: 'Pull Quote',
		htmlContent: `
      <div class="pull-q">
        <span class="mark">&ldquo;</span>
        <h2>UNSTOPPABLE INNOVATION.</h2>
        <span class="critic">&mdash; The Tech Chronicle</span>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', sans-serif; box-sizing: border-box; padding: 4px; background: #dc2626; color: #fff; text-align: center; }
      .mark { font-size: 8px; line-height: 4px; }
      h2 { font-size: 5px; font-weight: 900; margin: 2px 0; letter-spacing: 0.5px; }
      .critic { font-size: 3px; text-transform: uppercase; }
    `
	}
];

import type { ITemplateItem } from "./template";

export const CALLOUTS_QUOTES_LISTS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'callout-info-note-blue',
		title: 'Information callout box',
		styleVariant: 'Info Callout',
		htmlContent: `
      <div class="info-callout">
        <strong>NOTE:</strong>
        <p>Ensure your local SOCKS5 proxy server is active before initiating the tunnel.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #eff6ff; border-left: 2px solid #3b82f6; }
      strong { font-size: 3.2px; color: #1d4ed8; }
      p { font-size: 3px; color: #1e40af; margin-top: 1px; }
    `
	},
	{
		id: 'quote-large-pull-quote-border',
		title: 'Magazine pull quote with borders',
		styleVariant: 'Editorial Pull Quote',
		htmlContent: `
      <div class="pull-quote">
        <p>&ldquo;Simplicity in design leads to resilience in production.&rdquo;</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; border-top: 1px solid #000; border-bottom: 1px solid #000; text-align: center; }
      p { font-size: 4px; font-style: italic; color: #111; margin: 0; }
    `
	},
	{
		id: 'list-checkmarks-green-bullets',
		title: 'Green checkmark feature list',
		styleVariant: 'Checkmark Bullets',
		htmlContent: `
      <ul class="chk-bullets">
        <li>&#10004; TypeScript Type Verification</li>
        <li>&#10004; Automatic Subdomain Creation</li>
      </ul>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; list-style: none; padding: 4px; margin: 0; font-size: 3.4px; color: #15803d; }
      li { margin-bottom: 2px; }
    `
	},
	{
		id: 'callout-success-tip-green',
		title: 'Pro tip callout box',
		styleVariant: 'Pro Tip',
		htmlContent: `
      <div class="tip-box">
        <strong>PRO TIP:</strong>
        <p>Use Webpack hooks to automate GGUF file checks.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #f0fdf4; border: 0.5px solid #86efac; border-radius: 3px; }
      strong { font-size: 3.2px; color: #15803d; }
      p { font-size: 3px; color: #166534; margin-top: 1px; }
    `
	},
	{
		id: 'quote-dark-slate-testimonial',
		title: 'Dark slate quote block',
		styleVariant: 'Dark Slate Quote',
		htmlContent: `
      <div class="dark-q">
        <p>&ldquo;The Lumino integration solved our browser layout management instantly.&rdquo;</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #1e293b; color: #38bdf8; border-radius: 3px; font-style: italic; }
      p { font-size: 3.5px; margin: 0; }
    `
	},
	{
		id: 'list-numbered-step-circles',
		title: 'Numbered process list circles',
		styleVariant: 'Numbered Steps',
		htmlContent: `
      <ol class="num-steps">
        <li><span>1</span> Clone repo</li>
        <li><span>2</span> Run build</li>
      </ol>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; list-style: none; padding: 4px; margin: 0; }
      li { font-size: 3.4px; display: flex; align-items: center; gap: 3px; margin-bottom: 2px; color: #334155; }
      span { width: 7px; height: 7px; background: #2563eb; color: #fff; font-size: 3px; font-weight: bold; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    `
	},
	{
		id: 'callout-error-alert-red',
		title: 'Error alert callout',
		styleVariant: 'Error Alert',
		htmlContent: `
      <div class="err-alert">
        <strong>ALERT:</strong> ENOBUFS Buffer Overflow encountered.
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #fef2f2; border: 0.5px solid #fca5a5; color: #991b1b; font-size: 3.2px; }
      strong { color: #dc2626; }
    `
	},
	{
		id: 'quote-speech-bubble-tail',
		title: 'Speech bubble quote container',
		styleVariant: 'Speech Bubble',
		htmlContent: `
      <div class="bubble">
        <p>Looks great on all screen sizes!</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .bubble { background: #e0f2fe; border-radius: 6px; padding: 3px 5px; color: #0369a1; font-size: 3.2px; display: inline-block; }
    `
	},
	{
		id: 'list-badge-pills-horizontal',
		title: 'Horizontal pill badge list',
		styleVariant: 'Pill Badges',
		htmlContent: `
      <div class="pills">
        <span class="p">TypeScript</span><span class="p">Webpack</span><span class="p">Lumino</span>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .pills { display: flex; gap: 2px; }
      .p { background: #f1f5f9; color: #475569; border: 0.5px solid #cbd5e1; font-size: 2.8px; padding: 1px 3px; border-radius: 10px; font-weight: bold; }
    `
	},
	{
		id: 'callout-gradient-highlight-box',
		title: 'Vibrant gradient highlight callout',
		styleVariant: 'Gradient Callout',
		htmlContent: `
      <div class="grad-box">
        <h3>INSIGHT</h3>
        <p>Combining WebSockets with double reverse proxies unlocks local folder tab sharing.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #fff; border-radius: 3px; }
      h3 { font-size: 3.2px; color: #c7d2fe; margin: 0; letter-spacing: 0.5px; }
      p { font-size: 3.4px; margin-top: 1px; }
    `
	}
];

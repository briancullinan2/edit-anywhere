import type { ITemplateItem } from "./template";

export const FAQ_TROUBLESHOOTING_TEMPLATES: ITemplateItem[] = [
	{
		id: 'faq-accordion-style',
		title: 'Accordion FAQ list',
		styleVariant: 'Accordion List',
		htmlContent: `
      <div class="faq-acc">
        <div class="item">
          <div class="q">Q: How do I configure Cloudflare tunnels? <span>+</span></div>
          <div class="a">A: Run the cloudflared CLI utility and map CNAME entries.</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .item { border: 0.5px solid #cbd5e1; border-radius: 2px; }
      .q { background: #f8fafc; font-size: 3.6px; font-weight: bold; color: #0f172a; padding: 3px; display: flex; justify-content: space-between; }
      .a { font-size: 3.2px; color: #475569; padding: 3px; border-top: 0.5px solid #e2e8f0; }
    `
	},
	{
		id: 'troubleshoot-step-by-step',
		title: 'Step-by-step troubleshooting guide',
		styleVariant: 'Troubleshoot Steps',
		htmlContent: `
      <div class="ts-steps">
        <div class="step"><span class="num">1</span><div><strong>Check Terminal Logs</strong><p>Verify ENOBUFS errors.</p></div></div>
        <div class="step"><span class="num">2</span><div><strong>Rebase History</strong><p>Pull latest changes from remote.</p></div></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .step { display: flex; gap: 3px; margin-bottom: 3px; }
      .num { background: #ef4444; color: #fff; font-size: 3.5px; font-weight: bold; width: 8px; height: 8px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
      strong { font-size: 3.6px; color: #0f172a; }
      p { font-size: 3px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'faq-two-column-qa',
		title: 'Two-column Q&A matrix',
		styleVariant: 'Q&A Matrix',
		htmlContent: `
      <div class="qa-matrix">
        <div class="col"><strong>Q: Is TypeScript required?</strong><p>A: Recommended for Lumino layout types.</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #f0fdf4; border: 0.5px solid #bbf7d0; }
      strong { font-size: 3.5px; color: #166534; display: block; }
      p { font-size: 3.2px; color: #15803d; margin-top: 1px; }
    `
	},
	{
		id: 'troubleshoot-error-code-lookup',
		title: 'Error code lookup table',
		styleVariant: 'Error Lookup',
		htmlContent: `
      <table class="err-tbl">
        <tr><th>Code</th><th>Cause</th><th>Resolution</th></tr>
        <tr><td>ERR_01</td><td>Buffer Overflow</td><td>Increase memory limit</td></tr>
      </table>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; width: 100%; border-collapse: collapse; }
      th { background: #1e293b; color: #38bdf8; font-size: 3px; padding: 2px; text-align: left; }
      td { font-size: 3px; border-bottom: 0.5px solid #cbd5e1; padding: 2px; color: #334155; }
    `
	},
	{
		id: 'faq-icon-callout-grid',
		title: 'Icon callout FAQ cards',
		styleVariant: 'Icon FAQ',
		htmlContent: `
      <div class="icon-faq">
        <div class="card"><span class="icon">&#10067;</span><h4>What is Lumino?</h4><p>A frontend window framework.</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .card { background: #fff; border: 0.5px solid #e2e8f0; padding: 3px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
      .icon { font-size: 5px; }
      h4 { font-size: 3.6px; margin: 1px 0; color: #0f172a; }
      p { font-size: 3px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'troubleshoot-diagnostic-flowchart',
		title: 'Diagnostic tree layout',
		styleVariant: 'Flowchart Tree',
		htmlContent: `
      <div class="diag-tree">
        <div class="node">Build Error?</div>
        <div class="arrow">&darr;</div>
        <div class="node alt">Check Webpack Flags</div>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; text-align: center; padding: 4px; }
      .node { background: #334155; color: #fff; font-size: 3.2px; padding: 2px; display: inline-block; }
      .node.alt { background: #0284c7; }
      .arrow { font-size: 4px; color: #64748b; margin: 1px 0; }
    `
	},
	{
		id: 'faq-search-filter-mockup',
		title: 'FAQ with search input header',
		styleVariant: 'Searchable FAQ',
		htmlContent: `
      <div class="search-faq">
        <div class="s-bar">[ Search help articles... ]</div>
        <p class="res">Top Result: WebSockets setup</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .s-bar { background: #e2e8f0; font-size: 3px; color: #64748b; padding: 2px 4px; border-radius: 10px; margin-bottom: 3px; }
      .res { font-size: 3.4px; color: #0f172a; font-weight: bold; margin: 0; }
    `
	},
	{
		id: 'troubleshoot-warning-callout-box',
		title: 'Warning callout box',
		styleVariant: 'Warning Callout',
		htmlContent: `
      <div class="warn-box">
        <strong>&#9888; CRITICAL WARNING</strong>
        <p>Do not modify upstream rebase history directly.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #fef2f2; border-left: 2px solid #ef4444; }
      strong { font-size: 3.5px; color: #991b1b; display: block; }
      p { font-size: 3.2px; color: #7f1d1d; margin-top: 1px; }
    `
	},
	{
		id: 'faq-category-pills',
		title: 'Pill category tagged FAQ',
		styleVariant: 'Category Pills',
		htmlContent: `
      <div class="pill-faq">
        <span class="pill">NETWORKING</span>
        <p class="q">How to proxy WebSockets over SOCKS5?</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .pill { background: #e0e7ff; color: #4338ca; font-size: 2.8px; font-weight: bold; padding: 1px 3px; border-radius: 4px; }
      .q { font-size: 3.5px; color: #1e1b4b; font-weight: bold; margin-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-checklist-style',
		title: 'Troubleshooting verification checklist',
		styleVariant: 'Verification Checklist',
		htmlContent: `
      <div class="chk-list">
        <label><input type="checkbox" checked> CNAME configured</label><br>
        <label><input type="checkbox"> Tunnel service started</label>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; font-size: 3.4px; color: #334155; }
    `
	}
];

import type { ITemplateItem } from "./template";

export const EXECUTIVE_PREAMBLE_TEMPLATES: ITemplateItem[] = [
	{
		id: 'preamble-dropcap-serif-lead',
		title: 'Classic dropcap lead paragraph',
		styleVariant: 'Classic Dropcap',
		htmlContent: `
      <div class="preamble-dc">
        <p><span class="dc">I</span>n the pursuit of automated web infrastructure, the primary objective remains the reduction of operational latency and developer cognitive load.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      p { font-size: 3.8px; line-height: 1.4; color: #111; margin: 0; }
      .dc { float: left; font-size: 14px; line-height: 10px; padding-right: 2px; font-weight: bold; color: #991b1b; }
    `
	},
	{
		id: 'exec-summary-callout-sidebar',
		title: 'Executive summary highlight box',
		styleVariant: 'Exec Box',
		htmlContent: `
      <div class="exec-box">
        <h3>EXECUTIVE SUMMARY</h3>
        <p>This report details the implementation of client-worker WebSockets and Cloudflare tunnel integrations.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #f0f9ff; border-left: 2px solid #0284c7; }
      h3 { font-size: 3.8px; color: #0369a1; margin: 0 0 2px 0; letter-spacing: 0.5px; }
      p { font-size: 3.2px; color: #0c4a6e; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'preamble-statement-centered-lead',
		title: 'Centered manifesto lead paragraph',
		styleVariant: 'Centered Lead',
		htmlContent: `
      <div class="lead-stmt">
        <h2>REDEFINING THE BROWSER EXPERIENCE</h2>
        <p>A unified vision for local folder tab streaming and server orchestration.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 6px; text-align: center; }
      h2 { font-size: 5px; font-weight: 900; color: #0f172a; margin: 0; }
      p { font-size: 3.5px; color: #64748b; margin-top: 2px; }
    `
	},
	{
		id: 'exec-key-takeaways-bullet-box',
		title: 'Key takeaways bullet list',
		styleVariant: 'Key Takeaways',
		htmlContent: `
      <div class="takeaways">
        <h4>KEY TAKEAWAYS</h4>
        <ul>
          <li>Zero local port binding required</li>
          <li>Instant SOCKS5 tunnel setup</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #ecfdf5; border: 0.5px solid #a7f3d0; }
      h4 { font-size: 3.5px; color: #047857; margin: 0 0 2px 0; }
      ul { margin: 0; padding-left: 4px; font-size: 3.2px; color: #065f46; }
    `
	},
	{
		id: 'preamble-author-note-italic',
		title: 'Author intro note block',
		styleVariant: 'Author Note',
		htmlContent: `
      <div class="author-note">
        <p><em>Note from the Author:</em> The techniques described herein reflect actual production experiments from late 2026.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; background: #fff8f1; border-top: 0.5px solid #fed7aa; border-bottom: 0.5px solid #fed7aa; }
      p { font-size: 3.4px; color: #7c2d12; margin: 0; }
    `
	},
	{
		id: 'exec-dashboard-summary-cards',
		title: 'Summary dashboard stat row',
		styleVariant: 'Dashboard Stats',
		htmlContent: `
      <div class="dash-row">
        <div class="box"><strong>12</strong><span>Modules</span></div>
        <div class="box"><strong>100%</strong><span>Coverage</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .dash-row { display: flex; gap: 3px; }
      .box { flex: 1; background: #1e293b; color: #fff; padding: 3px; text-align: center; }
      strong { font-size: 5px; color: #38bdf8; display: block; }
      span { font-size: 2.8px; color: #94a3b8; }
    `
	},
	{
		id: 'preamble-mission-statement-card',
		title: 'Mission statement callout',
		styleVariant: 'Mission Card',
		htmlContent: `
      <div class="mission">
        <h3>OUR MISSION</h3>
        <p>To deliver rapid, reliable TypeScript developer extensions without friction.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #4338ca; color: #fff; border-radius: 2px; }
      h3 { font-size: 3.5px; color: #a5b4fc; margin: 0; letter-spacing: 0.5px; }
      p { font-size: 3.4px; margin-top: 1px; }
    `
	},
	{
		id: 'exec-context-background-split',
		title: 'Context vs Objective split block',
		styleVariant: 'Context/Objective',
		htmlContent: `
      <div class="split-exec">
        <div class="col"><strong>CONTEXT</strong><p>Existing Git workflows required manual rebases.</p></div>
        <div class="col"><strong>OBJECTIVE</strong><p>Automate pipeline operations using LLM scripts.</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .split-exec { display: flex; gap: 3px; }
      .col { flex: 1; background: #f8fafc; border: 0.5px solid #cbd5e1; padding: 3px; }
      strong { font-size: 3.2px; color: #2563eb; display: block; }
      p { font-size: 3px; color: #475569; margin-top: 1px; }
    `
	},
	{
		id: 'preamble-quote-header-hero',
		title: 'Hero quote preamble block',
		styleVariant: 'Hero Quote Lead',
		htmlContent: `
      <div class="hero-q">
        <h2>&ldquo;Simple code scales better than complex frameworks.&rdquo;</h2>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 6px; background: #0f172a; color: #f1f5f9; text-align: center; }
      h2 { font-size: 4.5px; font-style: italic; margin: 0; font-weight: normal; }
    `
	},
	{
		id: 'exec-version-release-notes',
		title: 'Version release notes summary',
		styleVariant: 'Release Notes',
		htmlContent: `
      <div class="rel-notes">
        <div class="ver">v2.4.0</div>
        <p>Added support for Lumino window restoration and Webpack hook exceptions.</p>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #18181b; color: #f4f4f5; }
      .ver { font-size: 3.8px; font-weight: bold; color: #22c55e; }
      p { font-size: 3px; color: #a1a1aa; margin-top: 1px; }
    `
	}
];

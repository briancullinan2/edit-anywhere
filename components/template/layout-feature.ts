import type { ITemplateItem } from "./template";

export const FEATURE_COMPONENTS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'feature-three-column-cards',
		title: '3-Column feature highlight cards',
		styleVariant: '3-Card Grid',
		htmlContent: `
      <div class="feat-grid">
        <div class="card"><h4>01. Speed</h4><p>Sub-millisecond worker pass.</p></div>
        <div class="card"><h4>02. Scale</h4><p>Handles thousands of nodes.</p></div>
        <div class="card"><h4>03. Secure</h4><p>Encrypted web tunnels.</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .feat-grid { display: flex; gap: 3px; }
      .card { flex: 1; background: #f8fafc; border: 0.5px solid #cbd5e1; padding: 3px; border-radius: 2px; }
      h4 { font-size: 3.6px; color: #2563eb; margin: 0 0 1px 0; }
      p { font-size: 3px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'component-hero-stat-callouts',
		title: 'Big stat callout numbers',
		styleVariant: 'Big Stat Callouts',
		htmlContent: `
      <div class="stat-callout">
        <div class="stat"><span class="num">99.9%</span><span class="lbl">Uptime</span></div>
        <div class="stat"><span class="num">&lt;5ms</span><span class="lbl">Latency</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; background: #0f172a; color: #fff; text-align: center; }
      .stat-callout { display: flex; gap: 6px; justify-content: center; }
      .num { font-size: 7px; font-weight: 900; color: #38bdf8; display: block; }
      .lbl { font-size: 2.8px; color: #94a3b8; text-transform: uppercase; }
    `
	},
	{
		id: 'component-split-image-text',
		title: 'Split media and content block',
		styleVariant: 'Split Media/Text',
		htmlContent: `
      <div class="split-block">
        <div class="media-ph">[ GRAPHIC ]</div>
        <div class="content">
          <h3>Streamlined Architecture</h3>
          <p>Local folder sharing direct to tab workers.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; display: flex; gap: 4px; align-items: center; }
      .media-ph { width: 25px; height: 18px; background: #e2e8f0; font-size: 2.8px; display: flex; align-items: center; justify-content: center; color: #64748b; }
      .content h3 { font-size: 4px; margin: 0; color: #0f172a; }
      .content p { font-size: 3.2px; color: #475569; margin-top: 1px; }
    `
	},
	{
		id: 'feature-asymmetric-hero-banner',
		title: 'Asymmetric feature banner',
		styleVariant: 'Asymmetric Banner',
		htmlContent: `
      <div class="asym-banner">
        <div class="left"><h2>POWERFUL UTILITIES</h2></div>
        <div class="right"><p>Built for modern web workflows and automation tools.</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #7c3aed; color: #fff; display: flex; gap: 4px; }
      .left h2 { font-size: 5px; font-weight: 900; margin: 0; }
      .right p { font-size: 3.2px; color: #ddd6fe; margin: 0; }
    `
	},
	{
		id: 'component-comparison-table-row',
		title: 'Feature comparison matrix',
		styleVariant: 'Comparison Matrix',
		htmlContent: `
      <table class="comp-tbl">
        <tr><th>Feature</th><th>Standard</th><th>Lumino</th></tr>
        <tr><td>Speed</td><td>1x</td><td>10x</td></tr>
      </table>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; width: 100%; border-collapse: collapse; }
      th { background: #f1f5f9; font-size: 3.2px; padding: 2px; text-align: left; }
      td { font-size: 3px; border-bottom: 0.5px solid #e2e8f0; padding: 2px; }
    `
	},
	{
		id: 'feature-icon-list-vertical',
		title: 'Vertical icon bullet list',
		styleVariant: 'Icon Bullets',
		htmlContent: `
      <ul class="icon-bullets">
        <li><span class="icon">&#10003;</span> Automated subdomains</li>
        <li><span class="icon">&#10003;</span> SOCKS5 tunneling</li>
      </ul>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; list-style: none; padding: 4px; margin: 0; }
      li { font-size: 3.5px; color: #334155; margin-bottom: 2px; display: flex; align-items: center; gap: 3px; }
      .icon { color: #16a34a; font-weight: bold; }
    `
	},
	{
		id: 'component-interactive-tab-buttons',
		title: 'Interactive content tabs mockup',
		styleVariant: 'Content Tabs',
		htmlContent: `
      <div class="tabs-mock">
        <div class="tab-hdrs"><span class="active">Overview</span><span>Details</span></div>
        <div class="tab-body"><p>System overview panel details...</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .tab-hdrs span { font-size: 3.2px; padding: 2px 4px; background: #e2e8f0; margin-right: 2px; border-radius: 2px 2px 0 0; }
      .tab-hdrs span.active { background: #2563eb; color: #fff; font-weight: bold; }
      .tab-body { background: #fff; border: 0.5px solid #cbd5e1; padding: 3px; font-size: 3px; color: #475569; }
    `
	},
	{
		id: 'feature-zigzag-alternating-rows',
		title: 'Zig-zag alternating content row',
		styleVariant: 'Zig-Zag Rows',
		htmlContent: `
      <div class="zigzag">
        <div class="row"><div>Text Left</div><div class="box">[Media Right]</div></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .row { display: flex; justify-content: space-between; align-items: center; font-size: 3.4px; }
      .box { background: #cbd5e1; padding: 3px; font-size: 2.8px; }
    `
	},
	{
		id: 'component-floating-card-shadow',
		title: 'Elevated floating feature card',
		styleVariant: 'Floating Elevation',
		htmlContent: `
      <div class="float-card">
        <h3>Cloudflared CLI Integration</h3>
        <p>Seamless proxy binding across remote nodes.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .float-card { background: #fff; padding: 4px; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
      h3 { font-size: 3.8px; color: #0f172a; margin: 0; }
      p { font-size: 3px; color: #64748b; margin-top: 1px; }
    `
	},
	{
		id: 'feature-timeline-milestones',
		title: 'Milestone progress roadmap',
		styleVariant: 'Milestone Roadmap',
		htmlContent: `
      <div class="roadmap">
        <div class="m"><span class="m-title">Phase 1</span><p>Core Webpack setup</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .m-title { font-size: 3.2px; font-weight: bold; background: #0284c7; color: #fff; padding: 1px 3px; border-radius: 2px; }
      p { font-size: 3px; color: #334155; margin-top: 2px; }
    `
	}
];

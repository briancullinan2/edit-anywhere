import type { ITemplateItem } from "./template";

export const FEATURE_COMPONENTS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'feature-three-column-cards',
		title: '3-Column feature highlight cards',
		styleVariant: '3-Card Grid',
		description: 'Equal-width three-card feature grid used on product landing pages, architecture overviews, and capability summaries. Each card carries a numbered title, a one-line value proposition, and a short supporting sentence. Ideal when you need to present three peer-level benefits at the same visual weight.',
		htmlContent: `
      <div class="feat-grid">
        <div class="card">
          <h4>01 · Speed</h4>
          <p class="lead">Sub-millisecond worker pass-through</p>
          <p>Local folder changes reach the browser tab in under 5 ms via native WebSocket pipes—no intermediate cloud hop required.</p>
        </div>
        <div class="card">
          <h4>02 · Scale</h4>
          <p class="lead">Thousands of concurrent nodes</p>
          <p>Horizontal worker pools and automatic CNAME provisioning let a single control plane manage edge deployments across regions.</p>
        </div>
        <div class="card">
          <h4>03 · Secure</h4>
          <p class="lead">Encrypted web tunnels end-to-end</p>
          <p>All traffic travels inside Cloudflare tunnels with zero inbound ports opened on the host. Credentials never leave the encrypted channel.</p>
        </div>
      </div>
      <p class="usage">Place this block directly under a section heading that introduces the three pillars of the product. Keep each card’s lead line under eight words and the body under 30 words. The numeric prefix (01, 02, 03) is required for scanning; do not replace it with icons unless the entire set uses icons.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .feat-grid { display: flex; gap: 4px; margin-bottom: 4px; }
      .card { flex: 1; background: var(--ace-bg, #f8fafc); border: 0.5px solid #cbd5e1; padding: 5px; border-radius: 3px; }
      h4 { font-size: small; color: var(--ace-blue, #2563eb); margin: 0 0 2px 0; font-weight: 800; letter-spacing: 0.3px; }
      .lead { font-size: small; color: var(--ace-foreground, #0f172a); font-weight: 600; margin: 0 0 2px 0; line-height: 1.25; }
      p { font-size: small; color: var(--ace-comment, #64748b); margin: 0; line-height: 1.3; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'component-hero-stat-callouts',
		title: 'Big stat callout numbers',
		styleVariant: 'Big Stat Callouts',
		description: 'Dark hero-band of large performance metrics. Used at the top of product pages, case-study headers, and architecture decision records to establish credibility in under two seconds. Each statistic must be independently verifiable.',
		htmlContent: `
      <div class="stat-callout">
        <div class="stat">
          <span class="num">99.99%</span>
          <span class="lbl">Uptime SLA</span>
          <span class="sub">Measured across 12 regions · rolling 90-day window</span>
        </div>
        <div class="stat">
          <span class="num">&lt; 5 ms</span>
          <span class="lbl">Socket Latency</span>
          <span class="sub">p99 end-to-end · local worker to browser tab</span>
        </div>
        <div class="stat">
          <span class="num">40 %</span>
          <span class="lbl">Overhead Cut</span>
          <span class="sub">Connection setup time vs legacy static-IP proxies</span>
        </div>
      </div>
      <p class="usage">Reserve this component for metrics that are both impressive and defensible. Never place marketing claims here—only numbers that appear in the formal SLA or published benchmarks. The dark background signals “performance proof”; keep the label uppercase and the sub-line factual.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 5px; background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #fff); text-align: center; border-radius: 3px; }
      .stat-callout { display: flex; gap: 6px; justify-content: center; margin-bottom: 4px; }
      .stat { flex: 1; }
      .num { font-size: large; font-weight: 900; color: var(--ace-blue, #38bdf8); display: block; line-height: 1.1; }
      .lbl { font-size: small; color: var(--ace-comment, #94a3b8); text-transform: uppercase; letter-spacing: 0.4px; display: block; margin: 1px 0; }
      .sub { font-size: small; color: var(--ace-comment, #64748b); display: block; line-height: 1.2; }
      .usage { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; border-top: 0.5px solid #334155; padding-top: 3px; margin: 0; line-height: 1.3; text-align: left; }
    `
	},
	{
		id: 'component-split-image-text',
		title: 'Split media and content block',
		styleVariant: 'Split Media/Text',
		description: 'Horizontal split layout pairing a media placeholder (diagram, screenshot, or icon cluster) with explanatory text. Standard pattern for architecture walkthroughs, feature deep-dives, and “how it works” sections. Media always sits on the left for left-to-right reading flow.',
		htmlContent: `
      <div class="split-block">
        <div class="media-ph">[ ARCHITECTURE DIAGRAM ]</div>
        <div class="content">
          <h3>Streamlined Local-to-Edge Architecture</h3>
          <p>Local folder hierarchies are streamed directly into browser-tab workers through a double-reverse-proxy path. No intermediate cloud storage is required; state remains on the originating machine while the tunnel provides encrypted reachability from any authorized client.</p>
          <ul>
            <li>Zero inbound ports on the host</li>
            <li>Automatic CNAME reconciliation</li>
            <li>Deterministic tab-state recovery</li>
          </ul>
        </div>
      </div>
      <p class="usage">Use this block whenever a visual aid is essential to understanding the text. Replace the placeholder with a real diagram or annotated screenshot. Keep the heading under eight words and the body under 60 words. The bullet list is optional but recommended when the reader needs a quick scan of concrete outcomes.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .split-block { display: flex; gap: 6px; align-items: flex-start; margin-bottom: 4px; }
      .media-ph { width: 40%; min-height: 48px; background: var(--ace-bg, #e2e8f0); font-size: small; display: flex; align-items: center; justify-content: center; color: var(--ace-comment, #64748b); border-radius: 2px; flex-shrink: 0; }
      .content { flex: 1; }
      .content h3 { font-size: medium; margin: 0 0 3px 0; color: var(--ace-foreground, #0f172a); }
      .content p { font-size: small; color: var(--ace-comment, #475569); margin: 0 0 3px 0; line-height: 1.35; }
      .content ul { margin: 0; padding-left: 12px; }
      .content li { font-size: small; color: var(--ace-foreground, #334155); margin-bottom: 1px; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'feature-asymmetric-hero-banner',
		title: 'Asymmetric feature banner',
		styleVariant: 'Asymmetric Banner',
		description: 'Full-width accent banner with a bold left-side headline and supporting copy on the right. Used as a section opener or mid-page break to re-energize the reader. The strong color field signals a shift in topic; keep the headline short and declarative.',
		htmlContent: `
      <div class="asym-banner">
        <div class="left">
          <h2>POWERFUL UTILITIES</h2>
          <span class="tag">Built for production workflows</span>
        </div>
        <div class="right">
          <p>Every component in this toolkit was extracted from live production systems that move local directory trees, Git histories, and real-time tab state across encrypted Cloudflare tunnels. No toy demos—only patterns that survive 99.99 % uptime requirements.</p>
        </div>
      </div>
      <p class="usage">Insert this banner at the start of a major feature section or after a dense technical passage. The left column must contain a single short headline (two to four words). The right column holds the supporting paragraph. Do not place interactive elements or lists inside the banner; it is purely declarative.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 5px; }
      .asym-banner { background: #7c3aed; color: var(--ace-bg, #fff); display: flex; gap: 8px; border-radius: 3px; margin-bottom: 4px; }
      .left { flex: 0 0 35%; }
      .left h2 { font-size: medium; font-weight: 900; margin: 0 0 2px 0; letter-spacing: 0.3px; }
      .tag { font-size: small; color: var(--ace-bg, #ddd6fe); display: block; }
      .right { flex: 1; }
      .right p { font-size: small; color: var(--ace-bg, #e9d5ff); margin: 0; line-height: 1.35; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'component-comparison-table-row',
		title: 'Feature comparison matrix',
		styleVariant: 'Comparison Matrix',
		description: 'Compact three-column comparison table contrasting a baseline (“Standard”) approach against the product (“Lumino”). Used in sales decks, architecture decision records, and migration guides. Every cell must be factual and measurable.',
		htmlContent: `
      <table class="comp-tbl">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Standard Proxy</th>
            <th>Lumino + Tunnel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Connection setup</td>
            <td>~120 ms</td>
            <td>&lt; 5 ms</td>
          </tr>
          <tr>
            <td>Inbound ports required</td>
            <td>Yes (static IP)</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Cross-region failover</td>
            <td>Manual</td>
            <td>Automatic</td>
          </tr>
          <tr>
            <td>Tab-state recovery</td>
            <td>Lost on reload</td>
            <td>Deterministic restore</td>
          </tr>
          <tr>
            <td>Credential exposure</td>
            <td>Client-side risk</td>
            <td>Tunnel-only</td>
          </tr>
        </tbody>
      </table>
      <p class="usage">Limit the table to five or six rows of highest-impact differences. Always place the product column on the right so the eye finishes on the superior values. Use the same units across each row. This component is for decision support, not marketing hyperbole—every number must be reproducible.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; width: 100%; border-collapse: collapse; padding: 3px; }
      th { background: var(--ace-foreground, #0f172a); color: var(--ace-blue, #38bdf8); font-size: small; padding: 3px 5px; text-align: left; font-weight: 700; }
      td { font-size: small; border-bottom: 0.5px solid #e2e8f0; padding: 3px 5px; color: var(--ace-foreground, #334155); }
      tr:nth-child(even) { background: var(--ace-bg, #f8fafc); }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 4px 0 0 0; line-height: 1.3; }
    `
	},
	{
		id: 'feature-icon-list-vertical',
		title: 'Vertical icon bullet list',
		styleVariant: 'Icon Bullets',
		description: 'Vertical checklist of concrete capabilities, each preceded by a green confirmation icon. Used for feature summaries, “what you get” sections, and pre-flight requirement lists. Keep every line parallel in grammatical structure.',
		htmlContent: `
      <div class="icon-list-wrap">
        <h4>Core Capabilities Included</h4>
        <ul class="icon-bullets">
          <li><span class="icon">✓</span> Automated dynamic subdomain provisioning via Cloudflare API</li>
          <li><span class="icon">✓</span> Native SOCKS5 proxy initialization over active WebSocket channels</li>
          <li><span class="icon">✓</span> Zero local port binding—no inbound firewall rules required</li>
          <li><span class="icon">✓</span> Deterministic tab-state recovery across browser reloads</li>
          <li><span class="icon">✓</span> End-to-end encryption through existing web standards</li>
        </ul>
        <p class="usage">Use this list when the reader needs a rapid inventory of delivered features. Every item must begin with a verb or a concrete noun phrase. Limit the list to five–seven items; longer inventories belong in a full specification table. The green check is mandatory—do not substitute other symbols.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      h4 { font-size: small; color: var(--ace-foreground, #0f172a); margin: 0 0 4px 0; font-weight: 800; letter-spacing: 0.3px; }
      .icon-bullets { list-style: none; padding: 0; margin: 0 0 4px 0; }
      li { font-size: small; color: var(--ace-foreground, #334155); margin-bottom: 3px; display: flex; align-items: flex-start; gap: 4px; line-height: 1.3; }
      .icon { color: var(--ace-green, #16a34a); font-weight: 800; flex-shrink: 0; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'component-interactive-tab-buttons',
		title: 'Interactive content tabs mockup',
		styleVariant: 'Content Tabs',
		description: 'Visual mock-up of a tabbed interface showing alternate views of the same subject (Overview / Details / Config). Used in documentation and product pages to demonstrate multi-perspective content without requiring live JavaScript. Only the active tab’s body is shown.',
		htmlContent: `
      <div class="tabs-mock">
        <div class="tab-hdrs">
          <span class="active">Overview</span>
          <span>Architecture</span>
          <span>Configuration</span>
        </div>
        <div class="tab-body">
          <p class="lead">System Overview</p>
          <p>The Lumino control plane orchestrates local worker processes, Cloudflare tunnel endpoints, and browser-tab state managers as a single coherent unit. From the operator’s perspective the system appears as a set of named workspaces that can be started, inspected, and recovered without manual port management.</p>
          <p class="hint">Switch to the Architecture tab for the component diagram, or Configuration for the exact CLI flags and environment variables required at launch.</p>
        </div>
      </div>
      <p class="usage">This is a static visual representation only. The active tab is indicated by the filled background; the other labels remain present so the reader understands the full set of available views. Keep the body text under 80 words. Never place critical installation steps solely inside a non-active tab mock-up.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .tab-hdrs { display: flex; gap: 2px; margin-bottom: 0; }
      .tab-hdrs span { font-size: small; padding: 3px 6px; background: var(--ace-bg, #e2e8f0); color: var(--ace-comment, #64748b); border-radius: 3px 3px 0 0; }
      .tab-hdrs span.active { background: #2563eb; color: var(--ace-bg, #fff); font-weight: 700; }
      .tab-body { background: var(--ace-bg, #fff); border: 0.5px solid #cbd5e1; border-top: none; padding: 5px; margin-bottom: 4px; }
      .lead { font-size: small; font-weight: 700; color: var(--ace-foreground, #0f172a); margin: 0 0 2px 0; }
      .tab-body p { font-size: small; color: var(--ace-comment, #475569); margin: 0 0 3px 0; line-height: 1.3; }
      .hint { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'feature-zigzag-alternating-rows',
		title: 'Zig-zag alternating content row',
		styleVariant: 'Zig-Zag Rows',
		description: 'Alternating left-right media/text rows that create a visual rhythm down the page. Used for multi-step feature walkthroughs, “how it works” narratives, and sequential benefit explanations. Each row reverses the media position so the eye is forced to travel.',
		htmlContent: `
      <div class="zigzag">
        <div class="row">
          <div class="text">
            <h4>1 · Local Folder Binding</h4>
            <p>Point the agent at any local directory. Changes are watched, hashed, and prepared for transport without leaving the host filesystem.</p>
          </div>
          <div class="media">[ WATCHER DIAGRAM ]</div>
        </div>
        <div class="row reverse">
          <div class="text">
            <h4>2 · Encrypted Tunnel Establishment</h4>
            <p>A Cloudflare tunnel is negotiated automatically. No inbound ports are opened; the agent initiates the outbound connection and receives a stable public hostname.</p>
          </div>
          <div class="media">[ TUNNEL FLOW ]</div>
        </div>
        <div class="row">
          <div class="text">
            <h4>3 · Browser Tab Orchestration</h4>
            <p>Authorized clients open the published hostname. Lumino restores the exact tab layout and file state that existed on the originating machine.</p>
          </div>
          <div class="media">[ TAB RESTORE ]</div>
        </div>
      </div>
      <p class="usage">Use three or five rows for best rhythm. Always reverse the media side on even rows. Keep each heading under six words and each paragraph under 35 words. The media placeholders must be replaced with real diagrams before publication; never ship the bracketed labels.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 3px; }
      .row { display: flex; gap: 6px; align-items: center; margin-bottom: 5px; }
      .row.reverse { flex-direction: row-reverse; }
      .text { flex: 1; }
      .text h4 { font-size: small; color: var(--ace-foreground, #0f172a); margin: 0 0 2px 0; font-weight: 800; }
      .text p { font-size: small; color: var(--ace-comment, #475569); margin: 0; line-height: 1.3; }
      .media { width: 35%; min-height: 32px; background: var(--ace-bg, #e2e8f0); font-size: small; display: flex; align-items: center; justify-content: center; color: var(--ace-comment, #64748b); border-radius: 2px; flex-shrink: 0; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'component-floating-card-shadow',
		title: 'Elevated floating feature card',
		styleVariant: 'Floating Elevation',
		description: 'Single elevated card with soft shadow used to highlight one discrete capability or integration. Common on feature grids, integration directories, and “spotlight” sections. The shadow creates separation from the page background so the card feels interactive even when static.',
		htmlContent: `
      <div class="float-card">
        <div class="badge">INTEGRATION</div>
        <h3>Cloudflared CLI Integration</h3>
        <p>Seamless proxy binding across remote nodes. The agent detects an existing cloudflared binary, authenticates against the account, and registers a new named tunnel without manual CNAME editing.</p>
        <ul>
          <li>Auto-detects installed cloudflared version</li>
          <li>Registers tunnel name from workspace ID</li>
          <li>Writes ready-to-use public hostname to local config</li>
        </ul>
        <p class="usage">Use one floating card per discrete integration or standout feature. Keep the body under 50 words and the bullet list to three items. The soft shadow is part of the visual language—do not remove it or the card loses its elevated identity.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 5px; }
      .float-card { background: var(--ace-bg, #fff); border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06); }
      .badge { font-size: small; background: var(--ace-bg, #e0e7ff); color: var(--ace-purple, #4338ca); font-weight: 800; padding: 1px 4px; border-radius: 2px; display: inline-block; margin-bottom: 3px; }
      h3 { font-size: medium; color: var(--ace-foreground, #0f172a); margin: 0 0 3px 0; }
      p { font-size: small; color: var(--ace-comment, #64748b); margin: 0 0 3px 0; line-height: 1.3; }
      ul { margin: 0 0 4px 0; padding-left: 12px; }
      li { font-size: small; color: var(--ace-foreground, #334155); margin-bottom: 1px; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px solid #f1f5f9; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'feature-timeline-milestones',
		title: 'Milestone progress roadmap',
		styleVariant: 'Milestone Roadmap',
		description: 'Horizontal or stacked timeline of delivery phases. Used in product roadmaps, release notes, and project status pages. Each milestone carries a phase label, a short outcome statement, and an optional status chip (Done / In Progress / Planned).',
		htmlContent: `
      <div class="roadmap">
        <div class="header">
          <span class="title">DELIVERY ROADMAP</span>
          <span class="period">Q3 2025 – Q1 2027</span>
        </div>
        <div class="m done">
          <span class="m-title">Phase 1 · Foundation</span>
          <span class="status">DONE</span>
          <p>Core Webpack build chain, Lumino window manager bindings, and initial Cloudflare tunnel adapter shipped to production.</p>
        </div>
        <div class="m current">
          <span class="m-title">Phase 2 · Orchestration</span>
          <span class="status">IN PROGRESS</span>
          <p>Automated CNAME reconciliation, SOCKS5 proxy initialization, and deterministic tab-state recovery across browser reloads.</p>
        </div>
        <div class="m">
          <span class="m-title">Phase 3 · Scale</span>
          <span class="status">PLANNED</span>
          <p>Multi-region worker pools, cross-account tunnel federation, and formal SLA instrumentation with public status page.</p>
        </div>
      </div>
      <p class="usage">Limit the roadmap to three–five phases. Always show the current phase with a distinct status chip. Dates or quarter labels belong in the header, not on every milestone. This component is for communication of intent and progress; it is not a detailed project plan.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 3px; }
      .title { font-size: small; font-weight: 800; color: var(--ace-foreground, #0f172a); letter-spacing: 0.4px; }
      .period { font-size: small; color: var(--ace-comment, #64748b); }
      .m { margin-bottom: 5px; padding: 4px; border-radius: 3px; background: var(--ace-bg, #f8fafc); border-left: 3px solid #cbd5e1; }
      .m.done { border-left-color: var(--ace-green, #16a34a); background: var(--ace-bg, #f0fdf4); }
      .m.current { border-left-color: var(--ace-blue, #0284c7); background: var(--ace-bg, #f0f9ff); }
      .m-title { font-size: small; font-weight: 700; color: var(--ace-foreground, #0f172a); margin-right: 4px; }
      .status { font-size: small; font-weight: 800; padding: 0 4px; border-radius: 2px; }
      .done .status { background: var(--ace-bg, #dcfce7); color: #166534; }
      .current .status { background: var(--ace-bg, #e0f2fe); color: var(--ace-blue, #0369a1); }
      .m:not(.done):not(.current) .status { background: var(--ace-bg, #f1f5f9); color: var(--ace-comment, #64748b); }
      p { font-size: small; color: var(--ace-comment, #475569); margin: 2px 0 0 0; line-height: 1.3; }
      .usage { font-size: small; color: var(--ace-comment, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 4px 0 0 0; line-height: 1.3; }
    `
	}
];

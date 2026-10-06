
import type { ITemplateItem } from "./template";

export const EXECUTIVE_PREAMBLE_TEMPLATES: ITemplateItem[] = [
	{
		id: 'preamble-dropcap-serif-lead',
		title: 'Classic dropcap lead paragraph',
		styleVariant: 'Classic Dropcap',
		description: 'Elegant serif drop-cap opening for formal executive reports, architectural briefs, and high-trust technical narratives. Designed to establish authority and narrative flow in a single compact block.',
		htmlContent: `
      <div class="preamble-dc">
        <p><span class="dc">I</span>n the pursuit of automated web infrastructure, the primary objective remains the reduction of operational latency and developer cognitive load. As modern architectures shift toward decentralized execution environments and edge computing paradigms, the necessity for robust, self-healing routing mechanisms becomes paramount across all deployment environments.</p>
        <p>This initiative establishes a resilient framework designed to bridge local browser contexts with high-throughput backend services. By leveraging optimized protocol negotiation and minimal overhead transport layers, engineering teams can achieve seamless directory synchronization, deterministic state management, and enterprise-grade reliability without sacrificing speed or security.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      p { font-size: small; line-height: 1.45; color: var(--ace-foreground, #111); margin: 0 0 4px 0; }
      p:last-child { margin-bottom: 0; }
      .dc { float: left; font-size: medium; line-height: 10px; padding-right: 3px; padding-top: 1px; font-weight: bold; color: var(--ace-pink, #991b1b); }
    `
	},
	{
		id: 'exec-summary-callout-sidebar',
		title: 'Executive summary highlight box',
		styleVariant: 'Exec Box',
		description: 'High-visibility left-border callout for executive summaries. Ideal for board decks, status reports, and decision briefs where key findings must be scanned in under five seconds.',
		htmlContent: `
      <div class="exec-box">
        <h3>EXECUTIVE SUMMARY</h3>
        <p>This report details the end-to-end implementation of client-worker WebSockets, Cloudflare tunnel integrations, and automated dynamic subdomain orchestration. Key operational findings demonstrate a 40% reduction in connection overhead and immediate cross-region fault tolerance.</p>
        <p class="subtext">Strategic focus was placed on eliminating static IP dependencies, enforcing automated CNAME reconciliation, and establishing encrypted, peer-to-peer data channels directly through existing web standards.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 6px; background: var(--ace-bg, #f0f9ff); border-left: 2px solid #0284c7; }
      h3 { font-size: small; color: var(--ace-blue, #0369a1); margin: 0 0 3px 0; letter-spacing: 0.5px; font-weight: 700; }
      p { font-size: small; color: #0c4a6e; margin: 0 0 3px 0; line-height: 1.35; }
      p.subtext { margin-bottom: 0; color: var(--ace-blue, #075985); }
    `
	},
	{
		id: 'preamble-statement-centered-lead',
		title: 'Centered manifesto lead paragraph',
		styleVariant: 'Centered Lead',
		description: 'Centered manifesto-style lead with subtle divider. Perfect for vision statements, product launches, and internal alignment documents that need a strong, memorable opening.',
		htmlContent: `
      <div class="lead-stmt">
        <h2>REDEFINING THE BROWSER EXPERIENCE</h2>
        <p class="subtitle">A unified vision for local folder tab streaming and client-worker orchestration.</p>
        <div class="divider"></div>
        <p class="body">We propose a fundamental shift in how local filesystem hierarchies interface with real-time web applications. By abstracting transport layers into double reverse proxies and browser-native WebSocket pipes, application state remains synchronized across disparate client nodes without central cloud persistence bottlenecks.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 6px; text-align: center; }
      h2 { font-size: medium; font-weight: 900; color: var(--ace-foreground, #0f172a); margin: 0 0 2px 0; letter-spacing: 0.2px; }
      .subtitle { font-size: small; color: var(--ace-blue, #2563eb); font-weight: 600; margin: 0 0 4px 0; }
      .divider { width: 20px; height: 0.5px; background: var(--ace-bg, #cbd5e1); margin: 0 auto 4px auto; }
      .body { font-size: small; color: var(--ace-comment, #64748b); line-height: 1.4; margin: 0; }
    `
	},
	{
		id: 'exec-key-takeaways-bullet-box',
		title: 'Key takeaways bullet list',
		styleVariant: 'Key Takeaways',
		description: 'Compact, high-contrast takeaway list for strategic briefings. Optimized for rapid scanning by executives and stakeholders who need the “so what” in under ten seconds.',
		htmlContent: `
      <div class="takeaways">
        <h4>KEY STRATEGIC TAKEAWAYS</h4>
        <ul>
          <li><strong>Zero Local Port Binding:</strong> Tunneling protocols eliminate open inbound firewall ports.</li>
          <li><strong>Instant SOCKS5 Setup:</strong> Low-overhead socket proxying enables immediate client connection.</li>
          <li><strong>Dynamic Subdomain Provisioning:</strong> Automated CNAME record creation via unified Cloudflare API integration.</li>
          <li><strong>Resilient State Recovery:</strong> Automated tab state restoration using Lumino frontend layout frameworks.</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 5px; background: var(--ace-bg, #ecfdf5); border: 0.5px solid #a7f3d0; border-radius: 2px; }
      h4 { font-size: small; color: #047857; margin: 0 0 3px 0; letter-spacing: 0.3px; text-transform: uppercase; }
      ul { margin: 0; padding-left: 8px; font-size: small; color: var(--ace-foreground, #065f46); line-height: 1.4; }
      li { margin-bottom: 2px; }
      li:last-child { margin-bottom: 0; }
      strong { color: var(--ace-foreground, #064e3b); }
    `
	},
	{
		id: 'preamble-author-note-italic',
		title: 'Author intro note block',
		styleVariant: 'Author Note',
		description: 'Warm, personal author note with italic body text. Best used as a humanizing preamble in technical architecture documents and design decision records.',
		htmlContent: `
      <div class="author-note">
        <p class="header"><em>A Note from the Technical Architect:</em></p>
        <p class="body">The architectural strategies and implementation models detailed in this document stem directly from production benchmarks and real-world system trials. As software ecosystems scale in complexity, prioritizing zero-trust networking models alongside lightweight, developer-first tooling provides the clearest foundation for sustained feature velocity and systemic stability.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 5px; background: var(--ace-bg, #fff8f1); border-top: 0.5px solid #fed7aa; border-bottom: 0.5px solid #fed7aa; }
      p { margin: 0; }
      p.header { font-size: small; color: var(--ace-pink, #9a3412); font-weight: bold; margin-bottom: 2px; }
      p.body { font-size: small; color: #7c2d12; line-height: 1.4; font-style: italic; }
    `
	},
	{
		id: 'exec-dashboard-summary-cards',
		title: 'Summary dashboard stat row',
		styleVariant: 'Dashboard Stats',
		description: 'Dark-mode metric strip for executive dashboards. Four equal-width KPI cards that remain legible even when the entire template is scaled to thumbnail size.',
		htmlContent: `
      <div class="dash-container">
        <div class="dash-header">EXECUTIVE METRICS DASHBOARD</div>
        <div class="dash-row">
          <div class="box"><strong>12</strong><span>Active Modules</span></div>
          <div class="box"><strong>100%</strong><span>Test Coverage</span></div>
          <div class="box"><strong>&lt; 5ms</strong><span>Socket Latency</span></div>
          <div class="box"><strong>99.99%</strong><span>Uptime SLA</span></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: var(--ace-foreground, #0f172a); border-radius: 2px; }
      .dash-container { display: flex; flex-direction: column; gap: 3px; }
      .dash-header { font-size: small; font-weight: bold; color: var(--ace-blue, #38bdf8); letter-spacing: 0.5px; text-transform: uppercase; padding: 0 0 2px 0; border-bottom: 0.5px solid #334155; }
      .dash-row { display: flex; gap: 3px; }
      .box { flex: 1; background: var(--ace-foreground, #1e293b); color: var(--ace-bg, #fff); padding: 3px; text-align: center; border-radius: 1px; }
      strong { font-size: medium; color: var(--ace-bg, #f8fafc); display: block; font-weight: 800; }
      span { font-size: small; color: var(--ace-comment, #94a3b8); text-transform: uppercase; letter-spacing: 0.2px; }
    `
	},
	{
		id: 'preamble-mission-statement-card',
		title: 'Mission statement callout',
		styleVariant: 'Mission Card',
		description: 'Bold indigo mission card for internal strategy documents and external partner one-pagers. High contrast and strong hierarchy make it ideal for printed handouts and slide inserts.',
		htmlContent: `
      <div class="mission">
        <h3>OUR CORE MISSION</h3>
        <p class="lead">Delivering rapid, reliable TypeScript developer extensions without runtime friction.</p>
        <p class="detail">We are committed to building open, composable software infrastructure that empowers developers to stream local assets, manage complex Git histories, and execute web-scale workflows directly from standard browser interfaces.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 6px; background: #4338ca; color: var(--ace-bg, #fff); border-radius: 2px; }
      h3 { font-size: small; color: var(--ace-bg, #a5b4fc); margin: 0 0 2px 0; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 800; }
      p.lead { font-size: small; margin: 0 0 3px 0; font-weight: 600; color: var(--ace-bg, #e0e7ff); line-height: 1.3; }
      p.detail { font-size: small; margin: 0; color: var(--ace-bg, #c7d2fe); line-height: 1.35; opacity: 0.9; }
    `
	},
	{
		id: 'exec-context-background-split',
		title: 'Context vs Objective split block',
		styleVariant: 'Context/Objective',
		description: 'Two-column context-versus-objective layout. Excellent for problem/solution framing in investment memos, architecture decision records, and go-to-market briefs.',
		htmlContent: `
      <div class="split-exec">
        <div class="col">
          <strong>OPERATIONAL CONTEXT</strong>
          <p>Legacy development pipelines heavily relied on manual Git rebasing, static IP configuration, and complex multi-step deployment sequences, creating significant cognitive friction and build fragility across distributed teams.</p>
        </div>
        <div class="col">
          <strong>STRATEGIC OBJECTIVE</strong>
          <p>Automate pipeline operations using modern TypeScript runtime extensions, Cloudflare tunnel proxies, and intelligent script automation to enable zero-overhead deployment channels and instant local folder streaming.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .split-exec { display: flex; gap: 4px; }
      .col { flex: 1; background: var(--ace-bg, #f8fafc); border: 0.5px solid #cbd5e1; padding: 4px; border-radius: 2px; }
      strong { font-size: small; color: var(--ace-blue, #2563eb); display: block; margin-bottom: 2px; letter-spacing: 0.3px; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 1px; }
      p { font-size: small; color: var(--ace-comment, #475569); margin: 0; line-height: 1.35; }
    `
	},
	{
		id: 'preamble-quote-header-hero',
		title: 'Hero quote preamble block',
		styleVariant: 'Hero Quote Lead',
		description: 'Dark hero quote with attribution and supporting abstract. Designed for thought-leadership pieces, architecture principle documents, and culture decks that open with a memorable line.',
		htmlContent: `
      <div class="hero-q">
        <h2>&ldquo;Simple, decoupled code scales predictably; bloated frameworks accumulate interest on technical debt.&rdquo;</h2>
        <div class="attribution">&mdash; ENGINEERING ARCHITECTURE GUIDELINES, SECTION 1.4</div>
        <p class="abstract">This document details the architectural core behind modular client-side socket managers, demonstrating how lightweight patterns replace legacy monolithic orchestration software.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 6px; background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #f1f5f9); text-align: center; }
      h2 { font-size: medium; font-style: italic; margin: 0 0 3px 0; font-weight: normal; line-height: 1.35; color: var(--ace-bg, #f8fafc); }
      .attribution { font-family: sans-serif; font-size: small; color: var(--ace-blue, #38bdf8); font-weight: bold; letter-spacing: 0.5px; margin-bottom: 4px; }
      .abstract { font-family: sans-serif; font-size: small; color: var(--ace-comment, #94a3b8); line-height: 1.3; margin: 0; max-width: 90%; margin-left: auto; margin-right: auto; }
    `
	},
	{
		id: 'exec-version-release-notes',
		title: 'Version release notes summary',
		styleVariant: 'Release Notes',
		description: 'Monospace release-notes card for engineering changelogs and product update briefs. Clean header with version + date, followed by a tight bullet list of high-impact changes.',
		htmlContent: `
      <div class="rel-notes">
        <div class="rel-header">
          <span class="ver">v2.4.0 OPERATIONAL RELEASE</span>
          <span class="date">OCTOBER 2026</span>
        </div>
        <p class="summary">Major build updating core network extensions and layout engine bindings.</p>
        <ul>
          <li>Integrated native Lumino window workspace state persistence across active browser tabs.</li>
          <li>Resolved Webpack HookWebpackError type flag exceptions during production bundling.</li>
          <li>Added support for automated SOCKS5 proxy initialization over active WebSocket channels.</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 5px; background: var(--ace-foreground, #18181b); color: var(--ace-bg, #f4f4f5); border-radius: 2px; }
      .rel-header { display: flex; justify-content: space-between; border-bottom: 0.5px solid #3f3f46; padding-bottom: 2px; margin-bottom: 3px; }
      .ver { font-size: small; font-weight: bold; color: #22c55e; }
      .date { font-size: small; color: var(--ace-comment, #71717a); }
      p.summary { font-size: small; color: var(--ace-bg, #e4e4e7); margin: 0 0 3px 0; font-weight: bold; }
      ul { margin: 0; padding-left: 6px; font-size: small; color: var(--ace-bg, #a1a1aa); line-height: 1.35; }
      li { margin-bottom: 1px; }
      li:last-child { margin-bottom: 0; }
    `
	}
];

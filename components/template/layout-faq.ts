import type { ITemplateItem } from "./template";

export const FAQ_TROUBLESHOOTING_TEMPLATES: ITemplateItem[] = [
	{
		id: 'faq-accordion-style',
		title: 'Accordion FAQ list',
		styleVariant: 'Accordion List',
		description: 'Compact self-service accordion with open/closed states, severity badges, and inline cross-references. Modeled after dense technical manual Q&A sections.',
		htmlContent: `
      <div class="faq-acc">
        <div class="item open">
          <div class="q">
            <span class="badge">NET</span>
            <span class="q-text">How do I configure Cloudflare tunnels?</span>
            <span class="toggle">−</span>
          </div>
          <div class="a">
            <p>Run the <code>cloudflared</code> CLI, authenticate, then map CNAME entries to local ingress services.</p>
            <div class="meta">
              <span class="tag">Ref: §3.2</span>
              <span class="tag">ETA: 4 min</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="q">
            <span class="badge warn">WS</span>
            <span class="q-text">How to handle persistent WebSocket disconnects?</span>
            <span class="toggle">+</span>
          </div>
          <div class="a">
            <p>Match client ping intervals to server keep-alive timeout and verify proxy idle settings.</p>
            <div class="meta">
              <span class="tag">Ref: §7.1</span>
              <span class="tag">Severity: Med</span>
            </div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 3px; }
      .item { border: 0.5px solid #cbd5e1; border-radius: 3px; margin-bottom: 3px; background: #fff; overflow: hidden; }
      .item.open { border-color: #94a3b8; }
      .q { background: #f8fafc; font-size: small; font-weight: 700; color: #0f172a; padding: 3px 5px; display: flex; align-items: center; gap: 4px; }
      .badge { font-size: small; background: #e0f2fe; color: #0369a1; padding: 0 3px; border-radius: 2px; font-weight: 800; letter-spacing: 0.3px; }
      .badge.warn { background: #fef3c7; color: #b45309; }
      .q-text { flex: 1; }
      .toggle { font-size: medium; color: #0284c7; font-weight: 800; line-height: 1; }
      .a { font-size: small; color: #475569; padding: 4px 5px; border-top: 0.5px solid #e2e8f0; line-height: 1.3; }
      .a p { margin: 0 0 3px 0; }
      code { background: #f1f5f9; padding: 0 2px; border-radius: 2px; font-family: monospace; font-size: small; }
      .meta { display: flex; gap: 4px; }
      .tag { font-size: small; color: #64748b; background: #f1f5f9; padding: 0 3px; border-radius: 2px; }
    `
	},
	{
		id: 'troubleshoot-step-by-step',
		title: 'Step-by-step troubleshooting guide',
		styleVariant: 'Troubleshoot Steps',
		description: 'Linear numbered remediation path with tool icons, expected results, and failure branches — pure IKEA-manual sequential instruction style.',
		htmlContent: `
      <div class="ts-steps">
        <div class="header">
          <span class="title">REMEDIATION SEQUENCE</span>
          <span class="time">≈ 6 min</span>
        </div>
        <div class="step">
          <span class="num">1</span>
          <div class="content">
            <strong>Inspect Terminal Logs <span class="tool">🖥️</span></strong>
            <p>Look for <code>ENOBUFS</code> in stdout. Confirm system buffer limits are not exceeded.</p>
            <div class="result">Expected: clean buffer report</div>
          </div>
        </div>
        <div class="step">
          <span class="num">2</span>
          <div class="content">
            <strong>Rebase & Sync History <span class="tool">↻</span></strong>
            <p>Pull latest from <code>main</code>, resolve conflicts, force-refresh dependencies.</p>
            <div class="result">Expected: clean working tree</div>
          </div>
        </div>
        <div class="step">
          <span class="num">3</span>
          <div class="content">
            <strong>Restart Service Daemon <span class="tool">⚡</span></strong>
            <p>Execute <code>systemctl restart lumino-agent</code> and monitor health checks.</p>
            <div class="result ok">Expected: all green</div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 0.5px solid #e2e8f0; margin-bottom: 4px; padding-bottom: 2px; }
      .title { font-size: small; font-weight: 800; color: #0f172a; letter-spacing: 0.4px; }
      .time { font-size: small; color: #64748b; background: #f1f5f9; padding: 0 3px; border-radius: 2px; }
      .step { display: flex; gap: 5px; margin-bottom: 5px; align-items: flex-start; }
      .num { background: #0f172a; color: #fff; font-size: small; font-weight: 800; width: 14px; height: 14px; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0; line-height: 1; }
      .content { flex: 1; }
      strong { font-size: small; color: #0f172a; display: block; margin-bottom: 1px; }
      .tool { font-size: small; opacity: 0.7; }
      p { font-size: small; color: #64748b; margin: 0 0 2px 0; line-height: 1.25; }
      code { font-family: monospace; background: #f1f5f9; padding: 0 2px; border-radius: 2px; font-size: small; }
      .result { font-size: small; color: #475569; background: #f8fafc; border-left: 2px solid #94a3b8; padding: 1px 4px; }
      .result.ok { border-color: #22c55e; color: #166534; }
    `
	},
	{
		id: 'faq-two-column-qa',
		title: 'Two-column Q&A matrix',
		styleVariant: 'Q&A Matrix',
		description: 'Side-by-side high-contrast requirement cards with status chips and quick-reference codes — dense technical matrix layout.',
		htmlContent: `
      <div class="qa-matrix">
        <div class="col">
          <div class="top">
            <span class="chip">REQ</span>
            <span class="code">TS-01</span>
          </div>
          <strong>Is TypeScript required?</strong>
          <p>Recommended for Lumino layout types. Strict mode can be disabled for pure JS builds.</p>
          <div class="foot">Default: enabled</div>
        </div>
        <div class="col">
          <div class="top">
            <span class="chip alt">OPT</span>
            <span class="code">CSS-04</span>
          </div>
          <strong>Can I customize CSS themes?</strong>
          <p>Yes — all CSS variables may be overridden globally or scoped to component containers.</p>
          <div class="foot">Scope: global / local</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .qa-matrix { display: flex; gap: 4px; }
      .col { flex: 1; background: #f0fdf4; border: 0.5px solid #bbf7d0; border-radius: 3px; padding: 4px; }
      .top { display: flex; justify-content: space-between; margin-bottom: 2px; }
      .chip { font-size: small; background: #166534; color: #fff; padding: 0 3px; border-radius: 2px; font-weight: 800; }
      .chip.alt { background: #0369a1; }
      .code { font-size: small; font-family: monospace; color: #64748b; }
      strong { font-size: small; color: #14532d; display: block; margin-bottom: 2px; }
      p { font-size: small; color: #15803d; margin: 0 0 3px 0; line-height: 1.25; }
      .foot { font-size: small; color: #4d7c0f; border-top: 0.5px solid #bbf7d0; padding-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-error-code-lookup',
		title: 'Error code lookup table',
		styleVariant: 'Error Lookup',
		description: 'Dense three-column error lookup with severity indicators and action codes. Classic technical manual reference table.',
		htmlContent: `
      <div class="err-wrap">
        <div class="legend">
          <span class="sev high">● HIGH</span>
          <span class="sev med">● MED</span>
          <span class="sev low">● LOW</span>
        </div>
        <table class="err-tbl">
          <thead>
            <tr><th>Code</th><th>Cause</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="sev high">●</span> ERR_01</td>
              <td>Buffer Overflow</td>
              <td>↑ maxBuffer in config</td>
            </tr>
            <tr>
              <td><span class="sev med">●</span> ERR_02</td>
              <td>Socket Timeout</td>
              <td>Check ports / firewall</td>
            </tr>
            <tr>
              <td><span class="sev high">●</span> ERR_03</td>
              <td>Auth Rejected</td>
              <td>Regen API bearer token</td>
            </tr>
            <tr>
              <td><span class="sev low">●</span> ERR_04</td>
              <td>Stale Cache</td>
              <td>Purge & rebuild</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; width: 100%; border-collapse: collapse; }
      .legend { display: flex; gap: 6px; margin-bottom: 3px; font-size: small; }
      .sev { font-size: small; }
      .sev.high { color: #dc2626; }
      .sev.med { color: #d97706; }
      .sev.low { color: #16a34a; }
      th { background: #0f172a; color: #38bdf8; font-size: small; padding: 3px 4px; text-align: left; font-weight: 700; }
      td { font-size: small; border-bottom: 0.5px solid #e2e8f0; padding: 3px 4px; color: #334155; line-height: 1.2; }
      tr:nth-child(even) { background: #f8fafc; }
    `
	},
	{
		id: 'faq-icon-callout-grid',
		title: 'Icon callout FAQ cards',
		styleVariant: 'Icon FAQ',
		description: 'Two-card visual FAQ grid with large icons, category labels, and short action lines — onboarding-style technical cards.',
		htmlContent: `
      <div class="icon-faq">
        <div class="card">
          <div class="icon-row">
            <span class="icon">?</span>
            <span class="cat">CORE</span>
          </div>
          <h4>What is Lumino?</h4>
          <p>Lightweight frontend window framework for modular dockable layouts and micro-frontends.</p>
          <div class="action">→ See Architecture Overview</div>
        </div>
        <div class="card">
          <div class="icon-row">
            <span class="icon">⚙</span>
            <span class="cat">SETUP</span>
          </div>
          <h4>How to configure plugins?</h4>
          <p>Import modules into bootstrap bundle and register with <code>Lumino.use()</code>.</p>
          <div class="action">→ Plugin Registry Guide</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .icon-faq { display: flex; gap: 4px; }
      .card { flex: 1; background: #fff; border: 0.5px solid #e2e8f0; border-radius: 3px; padding: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
      .icon-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
      .icon { font-size: medium; font-weight: 800; color: #0284c7; line-height: 1; }
      .cat { font-size: small; background: #f1f5f9; color: #475569; padding: 0 3px; border-radius: 2px; font-weight: 700; }
      h4 { font-size: small; margin: 0 0 2px 0; color: #0f172a; font-weight: 700; }
      p { font-size: small; color: #64748b; margin: 0 0 3px 0; line-height: 1.25; }
      code { font-family: monospace; background: #f1f5f9; padding: 0 2px; border-radius: 2px; }
      .action { font-size: small; color: #0284c7; font-weight: 600; border-top: 0.5px solid #f1f5f9; padding-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-diagnostic-flowchart',
		title: 'Diagnostic tree layout',
		styleVariant: 'Flowchart Tree',
		description: 'Vertical decision tree with color-coded nodes, branch labels, and terminal actions — classic technical flowchart style.',
		htmlContent: `
      <div class="diag-tree">
        <div class="node head">Build Failure Detected?</div>
        <div class="arrow">↓ YES</div>
        <div class="node alt">Inspect Webpack Flags & Bundler Logs</div>
        <div class="branch">
          <span class="b-label">Error found?</span>
        </div>
        <div class="arrow">↓ YES</div>
        <div class="node action">Clear Node Cache → Rebuild Project</div>
        <div class="foot">If still failing → escalate to ERR_01 table</div>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; text-align: center; padding: 3px; }
      .node { font-size: small; padding: 3px 6px; display: inline-block; border-radius: 3px; margin: 0 auto; }
      .node.head { background: #0f172a; color: #fff; font-weight: 800; border: 0.5px solid #38bdf8; }
      .node.alt { background: #0284c7; color: #fff; }
      .node.action { background: #16a34a; color: #fff; font-weight: 700; }
      .arrow { font-size: small; color: #64748b; margin: 2px 0; font-weight: 700; }
      .branch { margin: 2px 0; }
      .b-label { font-size: small; background: #f1f5f9; color: #475569; padding: 1px 4px; border-radius: 2px; }
      .foot { font-size: small; color: #94a3b8; margin-top: 4px; border-top: 0.5px dashed #cbd5e1; padding-top: 2px; }
    `
	},
	{
		id: 'faq-search-filter-mockup',
		title: 'FAQ with search input header',
		styleVariant: 'Searchable FAQ',
		description: 'Mock search bar with result ranking, relevance score, and quick filter chips — documentation hub style.',
		htmlContent: `
      <div class="search-faq">
        <div class="s-bar">
          <span class="icon">⌕</span>
          <span class="placeholder">Search knowledge base & help articles…</span>
        </div>
        <div class="filters">
          <span class="chip active">All</span>
          <span class="chip">Networking</span>
          <span class="chip">Auth</span>
          <span class="chip">Build</span>
        </div>
        <div class="res-item">
          <div class="rank">
            <span class="score">98%</span>
            <span class="label">Top Match</span>
          </div>
          <p class="res">WebSockets proxy setup</p>
          <span class="sub">Configure reverse-proxy headers and keep-alive ping rules.</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .s-bar { background: #f1f5f9; border: 0.5px solid #cbd5e1; font-size: small; color: #64748b; padding: 3px 6px; border-radius: 12px; margin-bottom: 3px; display: flex; align-items: center; gap: 4px; }
      .icon { font-size: medium; color: #94a3b8; }
      .filters { display: flex; gap: 3px; margin-bottom: 4px; }
      .chip { font-size: small; background: #f1f5f9; color: #64748b; padding: 1px 5px; border-radius: 8px; }
      .chip.active { background: #0284c7; color: #fff; font-weight: 700; }
      .res-item { background: #fff; border-left: 2px solid #0284c7; padding: 3px 5px; }
      .rank { display: flex; gap: 4px; align-items: center; margin-bottom: 1px; }
      .score { font-size: small; font-weight: 800; color: #16a34a; }
      .label { font-size: small; color: #94a3b8; }
      .res { font-size: small; color: #0f172a; font-weight: 700; margin: 0 0 1px 0; }
      .sub { font-size: small; color: #64748b; display: block; line-height: 1.2; }
    `
	},
	{
		id: 'troubleshoot-warning-callout-box',
		title: 'Warning callout box',
		styleVariant: 'Warning Callout',
		description: 'Critical safety callout with icon, severity bar, and explicit consequence text — pure technical-manual warning style.',
		htmlContent: `
      <div class="warn-box">
        <div class="top">
          <span class="icon">⚠</span>
          <strong>CRITICAL SYSTEM WARNING</strong>
          <span class="sev">HIGH</span>
        </div>
        <p>Do not modify upstream rebase history during active deployment pipelines. Force-pushing can cause severe metadata desynchronization on production nodes.</p>
        <div class="consequence">Consequence: possible production outage & data loss</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .warn-box { background: #fef2f2; border-left: 3px solid #dc2626; border-radius: 0 3px 3px 0; }
      .top { display: flex; align-items: center; gap: 4px; margin-bottom: 3px; }
      .icon { font-size: medium; color: #dc2626; line-height: 1; }
      strong { font-size: small; color: #991b1b; font-weight: 800; flex: 1; }
      .sev { font-size: small; background: #dc2626; color: #fff; padding: 0 4px; border-radius: 2px; font-weight: 800; }
      p { font-size: small; color: #7f1d1d; margin: 0 0 3px 0; line-height: 1.3; }
      .consequence { font-size: small; background: #fee2e2; color: #991b1b; padding: 2px 4px; border-radius: 2px; font-weight: 600; }
    `
	},
	{
		id: 'faq-category-pills',
		title: 'Pill category tagged FAQ',
		styleVariant: 'Category Pills',
		description: 'Multi-domain FAQ entry with category pills, priority flag, and cross-reference footer.',
		htmlContent: `
      <div class="pill-faq">
        <div class="tags">
          <span class="pill">NETWORKING</span>
          <span class="pill alt">SECURITY</span>
          <span class="prio">P1</span>
        </div>
        <p class="q">How to proxy WebSockets over SOCKS5?</p>
        <p class="a">Configure upstream gateway to use SOCKS5 protocol headers and bypass CORS checks on the tunnel path.</p>
        <div class="foot">
          <span>Ref: NET-17 / SEC-09</span>
          <span>Last verified: 2026-09</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .tags { display: flex; gap: 3px; margin-bottom: 3px; align-items: center; }
      .pill { background: #e0e7ff; color: #4338ca; font-size: small; font-weight: 800; padding: 1px 4px; border-radius: 3px; }
      .pill.alt { background: #fce7f3; color: #be185d; }
      .prio { font-size: small; background: #0f172a; color: #f8fafc; padding: 1px 4px; border-radius: 3px; font-weight: 800; margin-left: auto; }
      .q { font-size: small; color: #1e1b4b; font-weight: 700; margin: 0 0 2px 0; }
      .a { font-size: small; color: #475569; margin: 0 0 3px 0; line-height: 1.25; }
      .foot { display: flex; justify-content: space-between; font-size: small; color: #94a3b8; border-top: 0.5px solid #e2e8f0; padding-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-checklist-style',
		title: 'Troubleshooting verification checklist',
		styleVariant: 'Verification Checklist',
		description: 'Pre-flight checklist with progress indicator, required tools, and pass/fail states — deployment gate style.',
		htmlContent: `
      <div class="chk-list">
        <div class="header">
          <span class="title">PRE-FLIGHT CHECK</span>
          <span class="progress">2 / 3</span>
        </div>
        <div class="tools">Required: <code>cloudflared</code> · <code>systemctl</code> · browser console</div>
        <label class="done"><span class="box">☑</span> CNAME DNS record correctly configured & propagated</label>
        <label class="done"><span class="box">☑</span> Tunnel background service initialized & listening</label>
        <label><span class="box">☐</span> Firewall port 443 inbound rules verified open</label>
        <div class="status">Status: incomplete — resolve remaining item before deploy</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
      .title { font-size: small; font-weight: 800; color: #0f172a; letter-spacing: 0.3px; }
      .progress { font-size: small; background: #fef3c7; color: #b45309; padding: 0 4px; border-radius: 2px; font-weight: 700; }
      .tools { font-size: small; color: #64748b; margin-bottom: 4px; }
      code { font-family: monospace; background: #f1f5f9; padding: 0 2px; border-radius: 2px; }
      label { display: flex; align-items: flex-start; gap: 4px; font-size: small; color: #334155; margin-bottom: 3px; line-height: 1.25; }
      label.done { color: #166534; }
      .box { font-size: medium; line-height: 1; flex-shrink: 0; }
      .status { font-size: small; background: #fffbeb; color: #92400e; padding: 2px 4px; border-radius: 2px; margin-top: 2px; font-weight: 600; }
    `
	},
	{
		id: 'troubleshoot-command-terminal-box',
		title: 'CLI command fix preview',
		styleVariant: 'Terminal Snippet',
		description: 'Copy-paste terminal block with step numbers, exit-code expectations, and safety note — exact technical-manual command style.',
		htmlContent: `
      <div class="term-box">
        <div class="header">
          <span>bash — resolution script</span>
          <span class="copy">COPY</span>
        </div>
        <div class="line"><span class="n">1</span><code>$ sudo systemctl stop lumino-agent</code></div>
        <div class="line"><span class="n">2</span><code>$ lumino-cli purge-cache --all --force</code></div>
        <div class="line"><span class="n">3</span><code>$ sudo systemctl start lumino-agent --verbose</code></div>
        <div class="expect">Expected exit: 0 · runtime ≈ 12 s</div>
        <div class="note">⚠ Run only on non-production nodes first</div>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 3px; }
      .term-box { background: #0f172a; border-radius: 3px; padding: 4px 5px; }
      .header { display: flex; justify-content: space-between; font-size: small; color: #94a3b8; text-transform: uppercase; margin-bottom: 3px; border-bottom: 0.5px solid #334155; padding-bottom: 2px; }
      .copy { background: #1e293b; color: #38bdf8; padding: 0 4px; border-radius: 2px; font-weight: 700; }
      .line { display: flex; gap: 4px; align-items: baseline; margin-bottom: 1px; }
      .n { font-size: small; color: #475569; width: 10px; text-align: right; }
      code { font-size: small; color: #4ade80; line-height: 1.4; }
      .expect { font-size: small; color: #94a3b8; margin-top: 3px; border-top: 0.5px solid #334155; padding-top: 2px; }
      .note { font-size: small; color: #fbbf24; margin-top: 2px; }
    `
	},
	{
		id: 'faq-author-avatar-quote',
		title: 'Expert tip avatar quote card',
		styleVariant: 'Expert Tip Quote',
		description: 'Attributed specialist tip with avatar, role badge, and verification stamp — human-expert callout for manuals.',
		htmlContent: `
      <div class="avatar-card">
        <div class="author">
          <div class="avatar">JS</div>
          <div class="meta">
            <strong class="name">DevOps Support Team</strong>
            <span class="role">System Lead · Verified</span>
          </div>
          <span class="stamp">TIP</span>
        </div>
        <p class="quote">“Always audit network bandwidth usage before increasing worker thread counts to prevent thread-pool exhaustion.”</p>
        <div class="foot">Source: Internal runbook v4.2 · 2026-08</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .avatar-card { background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 3px; padding: 4px; }
      .author { display: flex; align-items: center; gap: 4px; margin-bottom: 3px; }
      .avatar { width: 16px; height: 16px; background: #0284c7; color: #fff; border-radius: 50%; font-size: small; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      .meta { flex: 1; }
      .name { font-size: small; color: #0f172a; display: block; }
      .role { font-size: small; color: #64748b; }
      .stamp { font-size: small; background: #0f172a; color: #38bdf8; padding: 0 4px; border-radius: 2px; font-weight: 800; }
      .quote { font-size: small; color: #334155; font-style: italic; margin: 0 0 3px 0; line-height: 1.3; }
      .foot { font-size: small; color: #94a3b8; border-top: 0.5px solid #e2e8f0; padding-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-status-banner-bar',
		title: 'System status indicator banner',
		styleVariant: 'Status Banner',
		description: 'Live-status banner with severity indicator, region tag, and incident reference — operational header for troubleshooting pages.',
		htmlContent: `
      <div class="status-banner deg">
        <div class="indicator"></div>
        <div class="text">
          <div class="top">
            <strong>Service Status: Degraded Performance</strong>
            <span class="region">US-EAST</span>
          </div>
          <p>WebSocket connections experiencing elevated latency. Incident #INC-2409 active.</p>
        </div>
        <div class="eta">ETA 45 m</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .status-banner { display: flex; align-items: center; gap: 5px; background: #fffbeb; border: 0.5px solid #fde68a; border-radius: 3px; padding: 4px; }
      .indicator { width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; flex-shrink: 0; box-shadow: 0 0 0 2px #fef3c7; }
      .text { flex: 1; }
      .top { display: flex; gap: 4px; align-items: center; margin-bottom: 1px; }
      strong { font-size: small; color: #92400e; }
      .region { font-size: small; background: #fef3c7; color: #b45309; padding: 0 3px; border-radius: 2px; font-weight: 700; }
      p { font-size: small; color: #b45309; margin: 0; line-height: 1.2; }
      .eta { font-size: small; background: #0f172a; color: #fbbf24; padding: 2px 5px; border-radius: 2px; font-weight: 800; white-space: nowrap; }
    `
	},
	{
		id: 'faq-side-by-side-comparison',
		title: 'Side-by-side do/don\'t comparison',
		styleVariant: 'Do / Don\'t Matrix',
		description: 'Best-practice vs anti-pattern matrix with icons, severity, and short rationale — classic technical-manual decision aid.',
		htmlContent: `
      <div class="dodont-container">
        <div class="box do">
          <div class="label-row">
            <span class="label">✓ DO</span>
            <span class="sev">SAFE</span>
          </div>
          <p>Store API credentials and secret keys in environment variables for all production deployments.</p>
          <div class="why">Prevents credential leakage in client bundles</div>
        </div>
        <div class="box dont">
          <div class="label-row">
            <span class="label">✗ DON'T</span>
            <span class="sev">RISK</span>
          </div>
          <p>Hard-code plain-text credentials directly inside client-side JavaScript bundles.</p>
          <div class="why">Exposed secrets = immediate compromise</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .dodont-container { display: flex; gap: 4px; }
      .box { flex: 1; padding: 4px; border-radius: 3px; }
      .box.do { background: #f0fdf4; border: 0.5px solid #86efac; }
      .box.dont { background: #fef2f2; border: 0.5px solid #fca5a5; }
      .label-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
      .label { font-size: small; font-weight: 800; }
      .do .label { color: #166534; }
      .dont .label { color: #991b1b; }
      .sev { font-size: small; padding: 0 3px; border-radius: 2px; font-weight: 700; }
      .do .sev { background: #dcfce7; color: #166534; }
      .dont .sev { background: #fee2e2; color: #991b1b; }
      p { font-size: small; margin: 0 0 3px 0; color: #334155; line-height: 1.25; }
      .why { font-size: small; color: #64748b; border-top: 0.5px solid rgba(0,0,0,0.06); padding-top: 2px; }
    `
	},
	{
		id: 'troubleshoot-tabs-navigation',
		title: 'Multi-environment OS tab navigation',
		styleVariant: 'Tabbed Troubleshooting',
		description: 'OS-specific instruction tabs with active state, command blocks, and platform notes — multi-platform technical manual pattern.',
		htmlContent: `
      <div class="tab-wrapper">
        <div class="tab-header">
          <span class="tab active">Linux</span>
          <span class="tab">macOS</span>
          <span class="tab">Windows</span>
        </div>
        <div class="tab-body">
          <div class="plat">Platform: systemd · bash</div>
          <p>Export the production environment key:</p>
          <code>export LUMINO_ENV=production</code>
          <div class="note">Note: requires root or sudo for system-wide path</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .tab-header { display: flex; gap: 2px; border-bottom: 0.5px solid #cbd5e1; }
      .tab { font-size: small; padding: 2px 6px; color: #64748b; background: #f1f5f9; border-radius: 3px 3px 0 0; cursor: pointer; }
      .tab.active { background: #0284c7; color: #fff; font-weight: 700; }
      .tab-body { background: #fff; border: 0.5px solid #cbd5e1; border-top: none; padding: 5px; }
      .plat { font-size: small; color: #94a3b8; margin-bottom: 3px; }
      p { font-size: small; color: #334155; margin: 0 0 3px 0; }
      code { display: block; font-family: monospace; background: #0f172a; color: #4ade80; padding: 3px 5px; border-radius: 2px; font-size: small; margin-bottom: 3px; }
      .note { font-size: small; color: #b45309; background: #fffbeb; padding: 2px 4px; border-radius: 2px; }
    `
	},
	{
		id: 'faq-related-resource-links',
		title: 'Related documentation resource links',
		styleVariant: 'Resource Links',
		description: 'Footer resource block with icons, document codes, and external escalation paths — end-of-section technical manual pattern.',
		htmlContent: `
      <div class="res-links">
        <h4>Need further assistance?</h4>
        <ul>
          <li>
            <span class="icon">📘</span>
            <a href="#">Cloudflare Tunnel Documentation</a>
            <span class="code">DOC-CT-12</span>
          </li>
          <li>
            <span class="icon">💬</span>
            <a href="#">Developer Discord Community</a>
            <span class="code">COM-01</span>
          </li>
          <li>
            <span class="icon">🛠️</span>
            <a href="#">Submit Diagnostic Support Ticket</a>
            <span class="code">TKT-NEW</span>
          </li>
        </ul>
        <div class="foot">All links open in new tab · last updated 2026-10</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 3px; }
      .res-links { background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 3px; padding: 5px; }
      h4 { font-size: small; color: #0f172a; margin: 0 0 4px 0; font-weight: 800; }
      ul { margin: 0; padding: 0; list-style: none; }
      li { display: flex; align-items: center; gap: 4px; font-size: small; margin-bottom: 3px; }
      .icon { font-size: medium; line-height: 1; }
      a { color: #0284c7; text-decoration: none; font-weight: 600; flex: 1; }
      .code { font-size: small; font-family: monospace; color: #94a3b8; background: #f1f5f9; padding: 0 3px; border-radius: 2px; }
      .foot { font-size: small; color: #94a3b8; border-top: 0.5px solid #e2e8f0; padding-top: 3px; margin-top: 2px; }
    `
	}
];

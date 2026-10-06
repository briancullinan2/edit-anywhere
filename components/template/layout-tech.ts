import type { ITemplateItem } from './template';

export interface ExtendedTemplateItem extends ITemplateItem
{
	description: string;
}

export const TECHNICAL_DIAGRAMS_TEMPLATES: ExtendedTemplateItem[] = [
	// -------------------------------------------------------------------------
	// CODE WINDOWS & SYNTAX HIGHLIGHTING
	// -------------------------------------------------------------------------

	// 1. Syntax Highlighted Code Window
	{
		id: 'code-syntax-highlighted-block',
		title: 'Syntax Highlighted Code Window',
		styleVariant: 'Code Window',
		description: 'Dark IDE-style code editor window with control buttons, tab name header, and syntax highlighted snippet line.',
		htmlContent: `
      <div class="code-win">
        <div class="code-bar">
          <div class="dots">
            <span class="dot close"></span>
            <span class="dot min"></span>
            <span class="dot max"></span>
          </div>
          <em class="file-title">selectLLM.js</em>
        </div>
        <pre><code><span class="kw">const</span> model = <span class="kw">await</span> <span class="fn">selectModel</span>(<span class="str">'Qwen2.5'</span>);</code></pre>
      </div>
    `,
		cssContent: `
      .code-win { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; background: #1e1e1e; color: #d4d4d4; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #333333; }
      .code-win * { box-sizing: border-box; margin: 0; padding: 0; }
      .code-bar { border-bottom: 1px solid #2d2d2d; padding-bottom: 0.5rem; font-size: small; color: #888888; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; }
      .dots { display: flex; gap: 0.35rem; align-items: center; }
      .dot { width: 0.65rem; height: 0.65rem; border-radius: 50%; display: inline-block; }
      .dot.close { background: #ff5f56; } .dot.min { background: #ffbd2e; } .dot.max { background: #27c93f; }
      .file-title { font-style: normal; font-size: small; color: #a0a0a0; font-family: inherit; }
      pre { font-size: small; line-height: 1.5; color: #ce9178; overflow-x: auto; }
      code { font-family: inherit; }
      .kw { color: #569cd6; font-weight: 600; } .fn { color: #dcdcaa; } .str { color: #ce9178; }
    `
	},

	// 2. Multi-Tab Editor Window
	{
		id: 'code-multi-tab-ide-window',
		title: 'Multi-Tab IDE Editor Window',
		styleVariant: 'Multi-Tab IDE',
		description: 'Multi-file dark code editor frame featuring active tab selection, line numbers, and TypeScript code highlighting.',
		htmlContent: `
      <div class="ide-frame">
        <div class="ide-tabs">
          <span class="tab active">tunnel.ts</span>
          <span class="tab">config.json</span>
        </div>
        <div class="ide-body">
          <div class="line-nums"><span>1</span><span>2</span><span>3</span></div>
          <pre><code><span class="kw">import</span> { Tunnel } <span class="kw">from</span> <span class="str">'@cloudflare/worker'</span>;
<span class="kw">export const</span> bridge = <span class="kw">new</span> <span class="fn">Tunnel</span>({ port: <span class="num">1080</span> });
<span class="comment">// Establish WebSocket SOCKS5 proxy session</span></code></pre>
        </div>
      </div>
    `,
		cssContent: `
      .ide-frame { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #0f172a; border-radius: 0.5rem; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
      .ide-frame * { box-sizing: border-box; margin: 0; padding: 0; }
      .ide-tabs { background: #1e293b; display: flex; border-bottom: 1px solid #334155; }
      .tab { padding: 0.5rem 1rem; font-size: small; color: #64748b; border-right: 1px solid #334155; cursor: pointer; }
      .tab.active { background: #0f172a; color: #38bdf8; border-top: 2px solid #38bdf8; font-weight: 600; }
      .ide-body { display: flex; padding: 0.75rem; gap: 0.75rem; font-size: small; line-height: 1.5; }
      .line-nums { color: #475569; display: flex; flex-direction: column; text-align: right; user-select: none; }
      pre { color: #f8fafc; overflow-x: auto; }
      .kw { color: #38bdf8; } .str { color: #fde047; } .num { color: #4ade80; } .comment { color: #64748b; font-style: italic; } .fn { color: #c084fc; }
    `
	},

	// -------------------------------------------------------------------------
	// ASCII & SYSTEM ARCHITECTURE DIAGRAMS
	// -------------------------------------------------------------------------

	// 3. ASCII Architecture Box
	{
		id: 'diagram-ascii-architecture-box',
		title: 'ASCII Architecture Diagram Box',
		styleVariant: 'ASCII Diagram',
		description: 'Monochrome terminal-style ASCII sequence box for data flow and system integration mappings.',
		htmlContent: `
      <div class="ascii-box">
        <pre>+----------+     +------------+     +----------------+
|  Browser | --> | WebSockets | --> | SOCKS5 Tunnel  |
+----------+     +------------+     +----------------+</pre>
      </div>
    `,
		cssContent: `
      .ascii-box { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.85rem; background: #000000; color: #00ff00; border-radius: 0.375rem; border: 1px solid #004400; overflow-x: auto; }
      .ascii-box * { box-sizing: border-box; margin: 0; padding: 0; }
      pre { font-size: small; line-height: 1.25; font-family: inherit; }
    `
	},

	// 4. System Topology Node Box
	{
		id: 'diagram-system-topology-nodes',
		title: 'System Topology Node Card',
		styleVariant: 'System Topology',
		description: 'Visual system node architecture displaying gateway edge routing to microservice clusters.',
		htmlContent: `
      <div class="topo-card">
        <div class="node gateway">
          <span class="badge">EDGE GATEWAY</span>
          <strong>Cloudflare Tunnel Proxy</strong>
        </div>
        <div class="connector">&darr;</div>
        <div class="cluster">
          <div class="node service">
            <strong>Worker Node A</strong>
            <span class="sub">Port 8080</span>
          </div>
          <div class="node service">
            <strong>Worker Node B</strong>
            <span class="sub">Port 8081</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      .topo-card { font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; text-align: center; }
      .topo-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .node { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0.375rem; padding: 0.65rem 0.85rem; display: inline-block; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .node.gateway { border-color: #0284c7; background: #f0f9ff; }
      .badge { font-size: small; font-weight: 800; color: #0369a1; display: block; margin-bottom: 0.25rem; letter-spacing: 0.05em; }
      .node strong { font-size: small; color: #0f172a; display: block; }
      .connector { color: #64748b; font-weight: bold; margin: 0.5rem 0; font-size: medium; }
      .cluster { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      .node.service { flex: 1; min-width: 7.5rem; }
      .sub { font-size: small; color: #64748b; display: block; margin-top: 0.15rem; }
    `
	},

	// 5. Database ERD Entity Block
	{
		id: 'diagram-database-erd-entity',
		title: 'Database ERD Entity Schema Block',
		styleVariant: 'ERD Entity',
		description: 'Database entity model table displaying primary keys, attributes, and column data types.',
		htmlContent: `
      <div class="erd-box">
        <div class="erd-head">
          <span class="tbl-icon">🗄️</span>
          <strong>users_table</strong>
        </div>
        <ul class="erd-cols">
          <li class="pk"><span class="key-type">PK</span> <span class="col-name">id</span> <span class="type">UUID</span></li>
          <li><span class="key-type"></span> <span class="col-name">username</span> <span class="type">VARCHAR(255)</span></li>
          <li><span class="key-type"></span> <span class="col-name">created_at</span> <span class="type">TIMESTAMP</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      .erd-box { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0.375rem; width: 100%; max-width: 18rem; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
      .erd-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .erd-head { background: #0f172a; color: #f8fafc; padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-size: small; }
      .tbl-icon { font-size: small; }
      .erd-cols { list-style: none; }
      .erd-cols li { display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0.75rem; border-bottom: 1px solid #f1f5f9; font-size: small; color: #334155; }
      .erd-cols li:last-child { border-bottom: none; }
      .erd-cols li.pk { background: #f0f9ff; font-weight: 600; }
      .key-type { font-size: small; font-weight: 800; color: #0284c7; width: 1.25rem; }
      .col-name { flex: 1; color: #0f172a; }
      .type { color: #64748b; font-size: small; }
    `
	},

	// -------------------------------------------------------------------------
	// MATHEMATICAL & FORMULA CALLOUTS
	// -------------------------------------------------------------------------

	// 6. Mathematical Formula Callout
	{
		id: 'math-formula-latex-callout',
		title: 'Mathematical Formula Callout',
		styleVariant: 'Math Formula',
		description: 'Centered formula callout block displaying mathematical equations and variable definitions.',
		htmlContent: `
      <div class="math-box">
        <div class="eq">E = mc<sup>2</sup></div>
        <p class="math-desc">Mass-energy equivalence equation formulation.</p>
      </div>
    `,
		cssContent: `
      .math-box { font-family: 'Times New Roman', Georgia, serif; box-sizing: border-box; padding: 0.85rem; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 0.375rem; text-align: center; }
      .math-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .eq { font-size: large; font-weight: bold; color: #0f172a; margin-bottom: 0.35rem; }
      .math-desc { font-size: small; font-family: system-ui, -apple-system, sans-serif; color: #64748b; }
    `
	},

	// 7. LaTeX Scientific Formula Block
	{
		id: 'math-scientific-proof-block',
		title: 'LaTeX Scientific Formula Block',
		styleVariant: 'LaTeX Scientific',
		description: 'Formal academic formula container with numbered equation references and LaTeX styling.',
		htmlContent: `
      <div class="proof-box">
        <div class="formula-row">
          <span class="formula">&int;<sub>0</sub><sup>&infin;</sup> e<sup>-x<sup>2</sup></sup> dx = &radic;&pi; / 2</span>
          <span class="eq-num">(Eq. 1.2)</span>
        </div>
        <p class="proof-note">Gaussian integral convergence proof in real analysis.</p>
      </div>
    `,
		cssContent: `
      .proof-box { font-family: 'Times New Roman', Georgia, serif; background: #ffffff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0 0.375rem 0.375rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .proof-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .formula-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; }
      .formula { font-size: large; font-weight: 600; color: #0f172a; }
      .eq-num { font-size: small; color: #64748b; font-family: system-ui, sans-serif; }
      .proof-note { font-size: small; font-family: system-ui, sans-serif; color: #475569; font-style: italic; }
    `
	},

	// -------------------------------------------------------------------------
	// CLI TERMINAL & SHELL PROMPTS
	// -------------------------------------------------------------------------

	// 8. Terminal CLI Command Prompt
	{
		id: 'tech-terminal-cli-command',
		title: 'CLI Command Terminal Prompt',
		styleVariant: 'Terminal Prompt',
		description: 'Dark terminal prompt simulating user command line input with syntax highlighting.',
		htmlContent: `
      <div class="cli-prompt">
        <span class="usr">brian@host:~$</span> <code>git rebase -i upstream/main</code>
      </div>
    `,
		cssContent: `
      .cli-prompt { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.65rem 0.85rem; background: #0f172a; color: #f8fafc; font-size: small; border-radius: 0.375rem; display: flex; align-items: center; gap: 0.5rem; overflow-x: auto; }
      .cli-prompt * { box-sizing: border-box; margin: 0; padding: 0; }
      .usr { color: #22c55e; font-weight: bold; white-space: nowrap; }
      code { color: #38bdf8; font-family: inherit; }
    `
	},

	// 9. Interactive Console Output Stream
	{
		id: 'tech-log-output-stream',
		title: 'Stdout Build Log Console',
		styleVariant: 'Build Console',
		description: 'Black console log stream with timestamped stdout information and success badges.',
		htmlContent: `
      <div class="build-log">
        <p class="line"><span class="ts">[10:42:01]</span> [INFO] Compiling Webpack bundle target...</p>
        <p class="line ok"><span class="ts">[10:42:04]</span> [SUCCESS] Compiled successfully in 3120ms. 0 errors, 0 warnings.</p>
      </div>
    `,
		cssContent: `
      .build-log { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.75rem; background: #000000; color: #a1a1aa; font-size: small; border-radius: 0.375rem; line-height: 1.5; overflow-x: auto; }
      .build-log * { box-sizing: border-box; margin: 0; padding: 0; }
      .line { margin-bottom: 0.25rem; }
      .line:last-child { margin-bottom: 0; }
      .ts { color: #52525b; margin-right: 0.35rem; }
      .ok { color: #22c55e; }
    `
	},

	// 10. Multi-Line Terminal Output with Cursor
	{
		id: 'tech-terminal-blinking-cursor',
		title: 'Terminal Session with Blinking Cursor',
		styleVariant: 'Terminal Session',
		description: 'Multi-line terminal command session displaying active output execution and blinking block cursor.',
		htmlContent: `
      <div class="term-session">
        <div class="cmd-line"><span class="prompt">$</span> <code>npm run build:ts</code></div>
        <div class="out-line">&gt; Executing tsc compiler pass...</div>
        <div class="out-line">&gt; Output written to /dist/bundle.js</div>
        <div class="cmd-line"><span class="prompt">$</span> <span class="cursor">█</span></div>
      </div>
    `,
		cssContent: `
      .term-session { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #111827; padding: 0.85rem; border-radius: 0.375rem; color: #e5e7eb; font-size: small; line-height: 1.5; }
      .term-session * { box-sizing: border-box; margin: 0; padding: 0; }
      .cmd-line { display: flex; gap: 0.5rem; align-items: center; }
      .prompt { color: #f59e0b; font-weight: bold; }
      .out-line { color: #9ca3af; padding-left: 1rem; }
      .cursor { color: #3b82f6; animation: blink 1s infinite; }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    `
	},

	// -------------------------------------------------------------------------
	// API ENDPOINTS & SCHEMAS
	// -------------------------------------------------------------------------

	// 11. API Endpoint Request Box
	{
		id: 'tech-api-endpoint-badge',
		title: 'API Endpoint Request Box',
		styleVariant: 'API Badge',
		description: 'Compact HTTP request endpoint callout showing request method badge and path URL.',
		htmlContent: `
      <div class="api-box">
        <span class="mth post">POST</span>
        <code>/api/v1/select-model</code>
      </div>
    `,
		cssContent: `
      .api-box { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.5rem 0.75rem; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 0.375rem; display: inline-flex; align-items: center; gap: 0.6rem; }
      .api-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .mth { background: #16a34a; color: #ffffff; font-size: small; font-weight: bold; padding: 0.15rem 0.4rem; border-radius: 0.2rem; text-transform: uppercase; letter-spacing: 0.05em; }
      .mth.post { background: #16a34a; }
      code { font-size: small; color: #0f172a; font-family: inherit; }
    `
	},

	// 12. Full API Documentation Endpoint Card
	{
		id: 'tech-api-doc-endpoint-card',
		title: 'API Documentation Method Card',
		styleVariant: 'API Spec Card',
		description: 'Comprehensive API documentation block detailing parameters, headers, and status response codes.',
		htmlContent: `
      <div class="api-card">
        <div class="api-header">
          <span class="method get">GET</span>
          <code class="endpoint">/v2/tunnels/{tunnel_id}/status</code>
        </div>
        <div class="api-meta">
          <span class="auth">🔒 Bearer Auth</span>
          <span class="status ok">200 OK</span>
        </div>
      </div>
    `,
		cssContent: `
      .api-card { font-family: system-ui, -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 0.75rem 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .api-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .api-header { display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem; flex-wrap: wrap; }
      .method { font-family: ui-monospace, monospace; font-size: small; font-weight: 800; padding: 0.2rem 0.45rem; border-radius: 0.25rem; }
      .method.get { background: #0284c7; color: #ffffff; }
      .endpoint { font-family: ui-monospace, monospace; font-size: small; font-weight: 600; color: #0f172a; }
      .api-meta { display: flex; gap: 0.75rem; font-size: small; color: #64748b; }
      .status.ok { color: #16a34a; font-weight: 600; }
    `
	},

	// 13. JSON Data Schema Block
	{
		id: 'tech-data-schema-json',
		title: 'JSON Data Schema Block',
		styleVariant: 'JSON Schema',
		description: 'Clean formatted JSON data block displaying payload attributes and data types.',
		htmlContent: `
      <div class="json-schema">
        <pre><code>{
  <span class="key">"model"</span>: <span class="str">"Qwen2.5"</span>,
  <span class="key">"temperature"</span>: <span class="num">0.7</span>,
  <span class="key">"stream"</span>: <span class="bool">true</span>
}</code></pre>
      </div>
    `,
		cssContent: `
      .json-schema { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.75rem; background: #18181b; color: #a1a1aa; font-size: small; border-radius: 0.375rem; border: 1px solid #27272a; }
      .json-schema * { box-sizing: border-box; margin: 0; padding: 0; }
      pre { line-height: 1.45; }
      code { font-family: inherit; }
      .key { color: #38bdf8; } .str { color: #a78bfa; } .num { color: #facc15; } .bool { color: #f43f5e; }
    `
	},

	// -------------------------------------------------------------------------
	// PIPELINE & DATA FLOW DIAGRAMS
	// -------------------------------------------------------------------------

	// 14. Horizontal Pipeline Data Flow
	{
		id: 'tech-flow-step-horizontal',
		title: 'Horizontal Pipeline Data Flow',
		styleVariant: 'Pipeline Flow',
		description: 'Linear horizontal step flow diagram depicting sequential data transformation steps.',
		htmlContent: `
      <div class="pipe">
        <span class="step">XLSX File</span> &rarr; <span class="step">Range Extract</span> &rarr; <span class="step">LLM Elaborate</span>
      </div>
    `,
		cssContent: `
      .pipe { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.75rem; background: #f0fdf4; border: 1px solid #bbf7d0; font-size: small; color: #166534; text-align: center; border-radius: 0.375rem; overflow-x: auto; white-space: nowrap; }
      .pipe * { box-sizing: border-box; margin: 0; padding: 0; }
      .step { font-weight: bold; background: #dcfce7; padding: 0.2rem 0.5rem; border-radius: 0.25rem; border: 1px solid #86efac; }
    `
	},

	// 15. Vertical Process Flow Connector
	{
		id: 'tech-vertical-process-flow',
		title: 'Vertical Process Flow Cards',
		styleVariant: 'Vertical Flow',
		description: 'Vertical step pipeline connecting execution phases with explicit down-arrow indicators.',
		htmlContent: `
      <div class="v-flow">
        <div class="v-card">
          <span class="v-num">01</span>
          <strong>Parse Request Payload</strong>
        </div>
        <div class="v-arr">&darr;</div>
        <div class="v-card active">
          <span class="v-num">02</span>
          <strong>Query SOCKS5 Tunnel</strong>
        </div>
      </div>
    `,
		cssContent: `
      .v-flow { font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; max-width: 18rem; }
      .v-flow * { box-sizing: border-box; margin: 0; padding: 0; }
      .v-card { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0.375rem; padding: 0.65rem 1rem; width: 100%; display: flex; align-items: center; gap: 0.75rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .v-card.active { border-color: #2563eb; background: #eff6ff; }
      .v-num { font-size: small; font-weight: 800; color: #2563eb; background: #dbeafe; padding: 0.15rem 0.4rem; border-radius: 0.2rem; }
      .v-card strong { font-size: small; color: #0f172a; }
      .v-arr { color: #94a3b8; font-weight: bold; margin: 0.25rem 0; font-size: medium; }
    `
	},


	// -------------------------------------------------------------------------
	// KEYBOARD SHORTCUTS & INPUT PILLS
	// -------------------------------------------------------------------------

	// 16. Keyboard Shortcut Key Pills
	{
		id: 'tech-keyboard-shortcut-pills',
		title: 'Keyboard Shortcut Key Pills',
		styleVariant: 'Keyboard Pills',
		description: 'Inline key combination guide rendered with styled keyboard key caps.',
		htmlContent: `
      <div class="keys">
        Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open command palette.
      </div>
    `,
		cssContent: `
      .keys { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 0.65rem; font-size: small; color: #334155; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.375rem; }
      .keys * { box-sizing: border-box; margin: 0; padding: 0; }
      kbd { background: #f1f5f9; border: 1px solid #cbd5e1; border-bottom: 2px solid #94a3b8; border-radius: 0.25rem; padding: 0.15rem 0.45rem; font-family: ui-monospace, monospace; font-size: small; color: #0f172a; font-weight: 600; display: inline-block; }
    `
	},

	// -------------------------------------------------------------------------
	// DIFF COMPARISONS & CODE REVIEWS
	// -------------------------------------------------------------------------

	// 17. Git Diff Comparison Block
	{
		id: 'tech-diff-comparison-block',
		title: 'Git Diff Change Block',
		styleVariant: 'Git Diff',
		description: 'Code review git diff snippet showing removed and added lines with standard green/red indicators.',
		htmlContent: `
      <div class="diff">
        <p class="del">- const model = 'Llama3';</p>
        <p class="add">+ const model = 'Qwen2.5';</p>
      </div>
    `,
		cssContent: `
      .diff { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; padding: 0.65rem; background: #1e293b; font-size: small; border-radius: 0.375rem; border: 1px solid #334155; line-height: 1.5; }
      .diff * { box-sizing: border-box; margin: 0; padding: 0; }
      p { margin: 0; padding: 0.1rem 0.35rem; border-radius: 0.2rem; }
      .del { color: #f87171; background: rgba(239, 68, 68, 0.15); }
      .add { color: #4ade80; background: rgba(34, 197, 94, 0.15); }
    `
	},

	// 18. Side-by-Side Code Review Diff
	{
		id: 'tech-side-by-side-diff-card',
		title: 'Side-by-Side Code Review Split',
		styleVariant: 'Split Diff',
		description: 'Two-column code review layout comparing original source code against incoming updates.',
		htmlContent: `
      <div class="split-diff">
        <div class="col old">
          <span class="col-hdr">BEFORE</span>
          <pre><code>maxBuffer: 1024 * 1024</code></pre>
        </div>
        <div class="col new">
          <span class="col-hdr">AFTER</span>
          <pre><code>maxBuffer: 1024 * 1024 * 10</code></pre>
        </div>
      </div>
    `,
		cssContent: `
      .split-diff { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; display: flex; gap: 0.5rem; background: #0f172a; padding: 0.65rem; border-radius: 0.375rem; flex-wrap: wrap; }
      .split-diff * { box-sizing: border-box; margin: 0; padding: 0; }
      .col { flex: 1; min-width: 10rem; padding: 0.5rem; border-radius: 0.25rem; font-size: small; }
      .col.old { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; }
      .col.new { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #86efac; }
      .col-hdr { font-size: small; font-weight: 800; display: block; margin-bottom: 0.35rem; letter-spacing: 0.05em; }
      pre { font-family: inherit; }
    `
	},

	// -------------------------------------------------------------------------
	// ADDITIONAL EXPANDED TEMPLATES (19 - 30)
	// -------------------------------------------------------------------------

	// 19. Network Request Sequence Flow
	{
		id: 'tech-network-sequence-flow',
		title: 'Network Request Sequence Diagram',
		styleVariant: 'Network Sequence',
		description: 'Interaction flow card between Client, Edge Proxy, and Origin Server.',
		htmlContent: `
      <div class="seq-card">
        <div class="seq-row"><span class="actor">Client</span> &rarr; <span class="msg">1. SYN / Handshake</span> &rarr; <span class="actor">Edge</span></div>
        <div class="seq-row"><span class="actor">Edge</span> &rarr; <span class="msg">2. SOCKS5 Connect</span> &rarr; <span class="actor">Origin</span></div>
        <div class="seq-row ret"><span class="actor">Client</span> &larr; <span class="msg">3. 101 Switching Protocols</span> &larr; <span class="actor">Origin</span></div>
      </div>
    `,
		cssContent: `
      .seq-card { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0.375rem; padding: 0.75rem; font-size: small; color: #334155; }
      .seq-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .seq-row { margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between; }
      .seq-row:last-child { margin-bottom: 0; }
      .actor { font-weight: bold; background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 0.2rem; color: #0f172a; }
      .msg { color: #0284c7; font-size: small; }
      .seq-row.ret .msg { color: #16a34a; }
    `
	},

	// 20. Microservice Health Metric Grid
	{
		id: 'tech-service-health-grid',
		title: 'Microservice Health Metric Cards',
		styleVariant: 'Service Status',
		description: 'Live service uptime status grid displaying memory usage, ping latency, and health badges.',
		htmlContent: `
      <div class="svc-grid">
        <div class="svc-item">
          <div class="svc-top">
            <strong>auth-service</strong>
            <span class="status-dot online"></span>
          </div>
          <span class="svc-stat">Latency: 12ms</span>
        </div>
        <div class="svc-item">
          <div class="svc-top">
            <strong>tunnel-worker</strong>
            <span class="status-dot online"></span>
          </div>
          <span class="svc-stat">RAM: 42MB</span>
        </div>
      </div>
    `,
		cssContent: `
      .svc-grid { font-family: system-ui, -apple-system, sans-serif; display: flex; gap: 0.65rem; flex-wrap: wrap; }
      .svc-grid * { box-sizing: border-box; margin: 0; padding: 0; }
      .svc-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 0.65rem; flex: 1; min-width: 8.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
      .svc-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; }
      .svc-top strong { font-size: small; color: #0f172a; }
      .status-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; }
      .status-dot.online { background: #22c55e; box-shadow: 0 0 6px #22c55e; }
      .svc-stat { font-size: small; color: #64748b; font-family: ui-monospace, monospace; }
    `
	},

	// 21. Environment Variable Configuration Box
	{
		id: 'tech-env-variable-block',
		title: 'Environment Variable (.env) Config Block',
		styleVariant: 'ENV Config',
		description: 'Secrets and environment variables configuration block styled for documentation guides.',
		htmlContent: `
      <div class="env-box">
        <div class="env-hdr">.env.production</div>
        <pre><code>CLOUDFLARE_TUNNEL_TOKEN=<span class="val">"eyJhIjoi..."</span>
SOCKS5_PORT=<span class="val">1080</span>
NODE_ENV=<span class="val">"production"</span></code></pre>
      </div>
    `,
		cssContent: `
      .env-box { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #0f172a; border-radius: 0.375rem; border: 1px solid #1e293b; overflow: hidden; }
      .env-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .env-hdr { background: #1e293b; color: #94a3b8; padding: 0.35rem 0.75rem; font-size: small; font-weight: 600; border-bottom: 1px solid #334155; }
      pre { padding: 0.75rem; font-size: small; color: #f8fafc; line-height: 1.5; }
      .val { color: #facc15; }
    `
	},

	// 22. Git Commit Log Timeline
	{
		id: 'tech-git-commit-history-timeline',
		title: 'Git Commit History Timeline',
		styleVariant: 'Git History',
		description: 'Commit log entries display showing commit hashes, author attribution, and commit messages.',
		htmlContent: `
      <div class="commit-log">
        <div class="commit-item">
          <span class="hash">a1b2c3d</span>
          <span class="msg">fix: resolve HookWebpackError type flags</span>
          <span class="author">Brian C.</span>
        </div>
        <div class="commit-item">
          <span class="hash">e4f5g6h</span>
          <span class="msg">feat: add WebSocket double reverse proxy</span>
          <span class="author">Brian C.</span>
        </div>
      </div>
    `,
		cssContent: `
      .commit-log { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.375rem; overflow: hidden; }
      .commit-log * { box-sizing: border-box; margin: 0; padding: 0; }
      .commit-item { display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; border-bottom: 1px solid #f1f5f9; font-size: small; }
      .commit-item:last-child { border-bottom: none; }
      .hash { color: #2563eb; font-weight: bold; font-size: small; }
      .msg { flex: 1; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .author { color: #64748b; font-size: small; }
    `
	},

	// 23. Package Dependency Json Card
	{
		id: 'tech-package-dependency-card',
		title: 'Package.json Dependency Block',
		styleVariant: 'Dependency Spec',
		description: 'Dependency list display illustrating library names and semver version requirements.',
		htmlContent: `
      <div class="pkg-card">
        <div class="pkg-hdr">npm dependencies</div>
        <ul class="pkg-list">
          <li><span class="name">@lumino/widgets</span> <span class="ver">^2.3.1</span></li>
          <li><span class="name">typescript</span> <span class="ver">^5.4.0</span></li>
          <li><span class="name">webpack</span> <span class="ver">^5.90.0</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      .pkg-card { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #1e1e1e; color: #d4d4d4; border-radius: 0.375rem; padding: 0.75rem; border: 1px solid #333333; }
      .pkg-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .pkg-hdr { font-size: small; font-weight: 700; color: #888888; text-transform: uppercase; margin-bottom: 0.5rem; }
      .pkg-list { list-style: none; }
      .pkg-list li { display: flex; justify-content: space-between; font-size: small; padding: 0.2rem 0; }
      .name { color: #9cdcfe; }
      .ver { color: #ce9178; }
    `
	},

	// 24. GraphQL Query Request Callout
	{
		id: 'tech-graphql-query-block',
		title: 'GraphQL Query Request Block',
		styleVariant: 'GraphQL Spec',
		description: 'Formatted GraphQL request query showing selection fields and variables.',
		htmlContent: `
      <div class="gql-box">
        <div class="gql-hdr">GraphQL Query</div>
        <pre><code><span class="kw">query</span> <span class="fn">GetTunnel</span>($id: <span class="type">ID!</span>) {
  tunnel(id: $id) {
    domain
    status
  }
}</code></pre>
      </div>
    `,
		cssContent: `
      .gql-box { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #0b0f19; border-radius: 0.375rem; border: 1px solid #1e293b; padding: 0.75rem; color: #f8fafc; }
      .gql-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .gql-hdr { font-size: small; font-weight: 800; color: #e11d48; text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em; }
      pre { font-size: small; line-height: 1.45; }
      .kw { color: #e11d48; } .fn { color: #38bdf8; } .type { color: #facc15; }
    `
	},

	// 25. HTTP Status Code Callout
	{
		id: 'tech-http-status-badge-card',
		title: 'HTTP Response Status Badge',
		styleVariant: 'HTTP Status',
		description: 'HTTP status indicator card showcasing numeric status code, title, and response meaning.',
		htmlContent: `
      <div class="http-card">
        <span class="status-code">404</span>
        <div class="status-info">
          <strong>NOT FOUND</strong>
          <p>Requested SOCKS5 proxy tunnel endpoint does not exist.</p>
        </div>
      </div>
    `,
		cssContent: `
      .http-card { font-family: system-ui, -apple-system, sans-serif; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.375rem; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.85rem; }
      .http-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .status-code { font-family: ui-monospace, monospace; font-size: large; font-weight: 900; color: #dc2626; }
      .status-info strong { font-size: small; color: #991b1b; display: block; }
      .status-info p { font-size: small; color: #7f1d1d; margin-top: 0.1rem; }
    `
	},

	// 26. Webhook Event Payload Card
	{
		id: 'tech-webhook-event-payload',
		title: 'Webhook Event Dispatch Block',
		styleVariant: 'Webhook Event',
		description: 'Event-driven webhook alert payload showing trigger type and timestamp metadata.',
		htmlContent: `
      <div class="wh-card">
        <div class="wh-hdr">
          <span class="wh-icon">⚡</span>
          <strong>tunnel.connected</strong>
        </div>
        <p class="wh-desc">Event dispatched when Cloudflare edge tunnel completes initialization.</p>
      </div>
    `,
		cssContent: `
      .wh-card { font-family: system-ui, -apple-system, sans-serif; background: #fffbeb; border: 1px solid #fde68a; border-radius: 0.375rem; padding: 0.75rem; }
      .wh-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .wh-hdr { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem; }
      .wh-icon { font-size: small; }
      .wh-hdr strong { font-family: ui-monospace, monospace; font-size: small; color: #b45309; }
      .wh-desc { font-size: small; color: #92400e; line-height: 1.4; }
    `
	},

	// 27. Docker Container Specs Block
	{
		id: 'tech-dockerfile-instruction-card',
		title: 'Dockerfile Instruction Block',
		styleVariant: 'Docker Spec',
		description: 'Formatted Docker configuration file block showing image layers and runtime commands.',
		htmlContent: `
      <div class="docker-box">
        <div class="docker-hdr">Dockerfile</div>
        <pre><code><span class="cmd">FROM</span> node:20-alpine
<span class="cmd">WORKDIR</span> /app
<span class="cmd">COPY</span> . .
<span class="cmd">RUN</span> npm install
<span class="cmd">CMD</span> ["node", "dist/index.js"]</code></pre>
      </div>
    `,
		cssContent: `
      .docker-box { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #0f172a; border-radius: 0.375rem; border: 1px solid #1e293b; padding: 0.75rem; }
      .docker-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .docker-hdr { font-size: small; color: #38bdf8; font-weight: bold; margin-bottom: 0.5rem; text-transform: uppercase; }
      pre { font-size: small; line-height: 1.5; color: #f8fafc; }
      .cmd { color: #38bdf8; font-weight: bold; }
    `
	},

	// 28. Regex Pattern Explainer Callout
	{
		id: 'tech-regex-pattern-explainer',
		title: 'Regular Expression Match Block',
		styleVariant: 'Regex Matcher',
		description: 'Regular expression pattern breakdown displaying evaluated string parameters.',
		htmlContent: `
      <div class="regex-box">
        <div class="pattern"><code>/^https?:\\/\\/([a-z0-9-]+)\\.pryor\\.games$/</code></div>
        <p class="explanation">Matches subdomains under pryor.games domain via HTTPS protocol.</p>
      </div>
    `,
		cssContent: `
      .regex-box { font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 0.375rem; padding: 0.75rem; }
      .regex-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .pattern { background: #0f172a; padding: 0.4rem 0.65rem; border-radius: 0.25rem; margin-bottom: 0.35rem; overflow-x: auto; }
      .pattern code { font-family: ui-monospace, monospace; font-size: small; color: #f43f5e; }
      .explanation { font-size: small; color: #64748b; }
    `
	},

	// 29. Cron Schedule Expression Block
	{
		id: 'tech-cron-schedule-syntax',
		title: 'Cron Expression Schedule Block',
		styleVariant: 'Cron Schedule',
		description: 'Automated cron expression breakdown card explaining timing intervals.',
		htmlContent: `
      <div class="cron-box">
        <div class="cron-expr"><code>0 0 * * 1-5</code></div>
        <span class="cron-text">"At 00:00 on every day-of-week from Monday through Friday."</span>
      </div>
    `,
		cssContent: `
      .cron-box { font-family: system-ui, -apple-system, sans-serif; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 0.375rem; padding: 0.75rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
      .cron-box * { box-sizing: border-box; margin: 0; padding: 0; }
      .cron-expr { background: #166534; padding: 0.25rem 0.5rem; border-radius: 0.2rem; }
      .cron-expr code { font-family: ui-monospace, monospace; font-size: small; color: #ffffff; font-weight: bold; }
      .cron-text { font-size: small; color: #14532d; font-style: italic; }
    `
	},

	// 30. Port Forwarding Configuration Card
	{
		id: 'tech-port-forwarding-matrix',
		title: 'Port Forwarding Network Matrix',
		styleVariant: 'Port Mapping',
		description: 'Network port mapping matrix mapping incoming public request ports to internal local sockets.',
		htmlContent: `
      <div class="port-card">
        <div class="port-row">
          <span class="label">EXTERNAL WAN</span>
          <code class="val">pryor.games:443</code>
        </div>
        <div class="arrow">&darr;</div>
        <div class="port-row target">
          <span class="label">INTERNAL TUNNEL</span>
          <code class="val">localhost:1080 (SOCKS5)</code>
        </div>
      </div>
    `,
		cssContent: `
      .port-card { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0.375rem; padding: 0.75rem; text-align: center; }
      .port-card * { box-sizing: border-box; margin: 0; padding: 0; }
      .port-row { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.25rem; padding: 0.4rem; display: flex; justify-content: space-between; align-items: center; font-size: small; }
      .port-row.target { background: #f0f9ff; border-color: #bae6fd; }
      .label { font-size: small; font-weight: 800; color: #64748b; }
      .val { font-weight: bold; color: #0f172a; }
      .arrow { color: #0284c7; margin: 0.25rem 0; font-size: small; font-weight: bold; }
    `
	}
];

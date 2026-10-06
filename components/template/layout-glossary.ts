import type { ITemplateItem } from "./template";

export const INDEX_GLOSSARY_TEMPLATES: ITemplateItem[] = [
	// =========================================================================
	// GLOSSARIES & DEFINITION LISTS
	// =========================================================================
	{
		id: 'glossary-alphabetical-grid',
		title: 'Alphabetical glossary grid',
		styleVariant: 'A-Z Grid',
		description: 'An A-Z structured definition layout featuring prominent letter group badges, bolded term headers, and inline definitions designed for reference sections.',
		htmlContent: `
      <div class="glossary-grid">
        <div class="alpha-group">
          <div class="letter-badge">A</div>
          <dl class="terms">
            <dt>Algorithm</dt>
            <dd>A deterministic, step-by-step procedure or mathematical formula used by computers to calculate outputs, solve problems, or automate decision-making processes.</dd>
            <dt>API (Application Programming Interface)</dt>
            <dd>A defined set of protocols, routines, and tools that enable distinct software applications to communicate, exchange data, and execute remote procedures seamlessly.</dd>
            <dt>Asynchronous Execution</dt>
            <dd>A program execution model where tasks run independently of the main execution thread, preventing UI freezing or blocking during long I/O operations.</dd>
          </dl>
        </div>
        <div class="alpha-group">
          <div class="letter-badge">B</div>
          <dl class="terms">
            <dt>Bandwidth</dt>
            <dd>The maximum capacity of a wired or wireless communications link to transmit data over a network connection in a given amount of time, typically measured in bps.</dd>
            <dt>Buffer Memory</dt>
            <dd>A temporary physical or virtual memory holding region used to store data stream packets while being transferred between devices or processes with differing speeds.</dd>
          </dl>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .glossary-grid { padding: 8px; background: var(--ace-bg, #ffffff); display: flex; flex-direction: column; gap: 8px; }
      .alpha-group { display: flex; gap: 6px; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 6px; align-items: flex-start; }
      .letter-badge { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #ffffff); width: 14px; height: 14px; font-size: 7px; font-weight: 700; display: flex; align-items: center; justify-content: center; border-radius: 2px; flex-shrink: 0; }
      .terms { margin: 0; flex: 1; }
      .terms dt { font-size: 3.8px; font-weight: 700; color: var(--ace-blue, #0284c7); margin-top: 2px; }
      .terms dt:first-child { margin-top: 0; }
      .terms dd { font-size: 3.2px; color: var(--ace-foreground, #334155); margin: 1px 0 4px 0; line-height: 1.35; }
    `
	},
	{
		id: 'glossary-card-list',
		title: 'Modern definition cards',
		styleVariant: 'Card Stack',
		description: 'A contemporary stacked card component showcasing terminology, parts of speech tags, explicit definitions, and real-world implementation examples.',
		htmlContent: `
      <div class="def-cards">
        <div class="card">
          <div class="card-header">
            <span class="term">HYDRATION</span>
            <span class="pos">noun &bull; /haɪˈdreɪ.ʃən/</span>
          </div>
          <p class="definition">The web execution process where client-side JavaScript attaches interactive event handlers and application state to server-rendered static HTML markup during initial page boot.</p>
          <div class="example-box"><strong>Example:</strong> "React executes client-side hydration immediately after receiving the initial HTML payload from the edge server."</div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="term">REBASE</span>
            <span class="pos">verb &bull; /riːˈbeɪs/</span>
          </div>
          <p class="definition">A version control strategy in Git that moves or combines a sequence of commits to a new base commit, creating a clean, linear project commit history.</p>
          <div class="example-box"><strong>Example:</strong> "Always rebase feature branches off master prior to issuing a pull request."</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .def-cards { padding: 6px; background: var(--ace-bg, #f8fafc); display: flex; flex-direction: column; gap: 5px; }
      .card { background: var(--ace-bg, #ffffff); border: 0.5px solid #cbd5e1; border-left: 2.5px solid #a855f7; padding: 4px 6px; border-radius: 2px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
      .card-header { display: flex; align-items: baseline; gap: 4px; }
      .term { font-size: 4px; font-weight: 800; color: var(--ace-purple, #581c87); letter-spacing: 0.2px; }
      .pos { font-size: 2.6px; font-style: italic; color: var(--ace-purple, #9333ea); }
      .card .definition { font-size: 3.2px; color: var(--ace-foreground, #334155); margin: 2px 0; line-height: 1.3; }
      .example-box { font-size: 2.8px; color: var(--ace-comment, #64748b); background: var(--ace-bg, #faf5ff); padding: 2px 4px; border-radius: 2px; border: 0.5px solid #f3e8ff; }
      .example-box strong { color: var(--ace-purple, #7e22ce); }
    `
	},
	{
		id: 'glossary-two-column-definitions',
		title: 'Two-column definition pairs',
		styleVariant: 'Side-by-Side',
		description: 'A structured split-view glossary mapping term keys in a fixed width column alongside detailed explanations in an auto-expanding body container.',
		htmlContent: `
      <div class="gloss-dual">
        <div class="pair">
          <div class="dt">DOM</div>
          <div class="dd">Document Object Model; a cross-platform and language-neutral interface that treats an XML or HTML document as a tree structure where each node is an object representing a part of the document.</div>
        </div>
        <div class="pair">
          <div class="dt">SOCKS5</div>
          <div class="dd">An Internet protocol that exchanges network packets between a client and server through a proxy server, routing traffic through firewalls and facilitating anonymous or tunneled connections.</div>
        </div>
        <div class="pair">
          <div class="dt">WEBPACK</div>
          <div class="dd">A static module bundler for modern JavaScript applications that builds a dependency graph mapping every module your project needs and generating one or more bundles.</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .gloss-dual { padding: 6px; background: var(--ace-bg, #ffffff); }
      .pair { display: flex; gap: 6px; border-bottom: 0.5px solid #e2e8f0; padding: 3px 0; align-items: baseline; }
      .pair:last-child { border-bottom: none; }
      .dt { font-size: 3.6px; font-weight: 700; width: 24px; color: var(--ace-blue, #0d9488); flex-shrink: 0; letter-spacing: 0.2px; }
      .dd { font-size: 3.1px; flex: 1; color: var(--ace-foreground, #334155); line-height: 1.35; }
    `
	},
	{
		id: 'glossary-sidebar-callout',
		title: 'Key terms sidebar glossary',
		styleVariant: 'Sidebar Callout',
		description: 'A callout box suited for page margins or chapter sidebars highlighting core terminology directly alongside primary instructional text.',
		htmlContent: `
      <aside class="glossary-side">
        <h3>KEY TERMS &bull; CHAPTER 4</h3>
        <div class="term-item">
          <strong>Latency:</strong>
          <span>The time delay recorded between the initiation of an action and the occurrence of its observable result in a system network.</span>
        </div>
        <div class="term-item">
          <strong>Throughput:</strong>
          <span>The rate of successful message or data packet delivery over a specified communication channel.</span>
        </div>
        <div class="term-item">
          <strong>Jitter:</strong>
          <span>The variance in time delay between data packet deliveries over a network connection.</span>
        </div>
      </aside>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .glossary-side { background: var(--ace-bg, #fef3c7); border: 0.5px solid #f59e0b; padding: 4px; border-radius: 2px; }
      .glossary-side h3 { font-size: 3.5px; color: #b45309; margin: 0 0 3px 0; border-bottom: 0.5px solid #fcd34d; padding-bottom: 2px; font-weight: 800; letter-spacing: 0.4px; }
      .term-item { font-size: 3px; color: #78350f; margin-bottom: 3px; line-height: 1.3; }
      .term-item:last-child { margin-bottom: 0; }
      .term-item strong { color: var(--ace-pink, #92400e); }
    `
	},
	{
		id: 'glossary-code-terms',
		title: 'Developer API code glossary',
		styleVariant: 'Monospace Code',
		description: 'A dark-mode technical API glossary template displaying function signatures, parameter listings, and descriptions designed for software documentation.',
		htmlContent: `
      <div class="code-gloss">
        <div class="api-item">
          <div class="sig"><code>selectModel(name: string, options?: ModelOpts)</code></div>
          <p class="desc">Dynamic GGUF model loader and bindings generator. Instantiates backend runtime threads based on hardware flags.</p>
        </div>
        <div class="api-item">
          <div class="sig"><code>spawnTunnel(port: number, domain: string)</code></div>
          <p class="desc">Establishes an encrypted double reverse proxy connection between a local port and Cloudflare edge routes.</p>
        </div>
        <div class="api-item">
          <div class="sig"><code>reconcileState(delta: StateDelta)</code></div>
          <p class="desc">Merges operational transformation deltas across distributed WebSocket clients to ensure state eventual consistency.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; box-sizing: border-box; }
      .code-gloss { padding: 6px; background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #f8fafc); border-radius: 2px; display: flex; flex-direction: column; gap: 4px; }
      .api-item { border-bottom: 0.5px solid #1e293b; padding-bottom: 3px; }
      .api-item:last-child { border-bottom: none; padding-bottom: 0; }
      .sig code { font-size: 3.5px; color: var(--ace-blue, #38bdf8); font-weight: 700; background: var(--ace-foreground, #1e293b); padding: 1px 3px; border-radius: 2px; display: inline-block; }
      .desc { font-size: 3px; color: var(--ace-comment, #94a3b8); margin: 2px 0 0 0; line-height: 1.3; font-family: system-ui, -apple-system, sans-serif; }
    `
	},

	// =========================================================================
	// BOOK INDEXES & CROSS-REFERENCES
	// =========================================================================
	{
		id: 'index-three-column-dense',
		title: 'Three-column book index',
		styleVariant: 'Dense 3-Col',
		description: 'A classic three-column publication index layout supporting dense listings of subjects and corresponding page citations.',
		htmlContent: `
      <div class="index-dense">
        <h2>INDEX</h2>
        <div class="cols">
          <div class="col">
            <p class="letter-head">A</p>
            <p>Abstraction, 12, 45, 102</p>
            <p>Algorithms, 88–94</p>

            <p class="letter-head">B</p>
            <p>Bandwidth, 102, 108</p>
            <p>Buffer Memory, 14, 19, 22</p>
          </div>
          <div class="col">
            <p class="letter-head">C</p>
            <p>Cache Invalidation, 201</p>
            <p>Cloudflare Tunnels, 302–309</p>
            <p>Compiler Flags, 310, 315</p>

            <p class="letter-head">D</p>
            <p>Data Pipelines, 412</p>
          </div>
          <div class="col">
            <p class="letter-head">E</p>
            <p>Edge Routing, 501–504</p>
            <p>Encryption Keys, 512</p>

            <p class="letter-head">F</p>
            <p>File Streaming, 602, 615</p>
            <p>Frontend Frames, 620</p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; box-sizing: border-box; }
      .index-dense { padding: 6px; font-size: 3px; background: var(--ace-bg, #ffffff); }
      .index-dense h2 { font-size: 5px; text-align: center; margin: 0 0 4px 0; border-bottom: 1px solid #000000; padding-bottom: 2px; letter-spacing: 1px; }
      .cols { display: flex; gap: 4px; }
      .col { flex: 1; }
      .letter-head { font-weight: 700; border-bottom: 0.5px solid #666666; margin: 3px 0 1px 0; font-size: 3.5px; }
      .col p { margin: 0 0 1px 0; color: var(--ace-foreground, #111111); line-height: 1.2; text-indent: -4px; padding-left: 4px; }
    `
	},
	{
		id: 'index-subject-cross-reference',
		title: 'Cross-referenced index',
		styleVariant: 'Cross Ref',
		description: 'An index system supporting nested topics, sub-entries, and explicit cross-reference pointers ("See also").',
		htmlContent: `
      <div class="index-xref">
        <div class="section-title">D</div>
        <div class="entry-group">
          <div class="entry"><strong>Data Structures</strong>, 14–22, 104</div>
          <div class="sub-entry">&bull; Binary Trees, 18–20</div>
          <div class="sub-entry">&bull; Hash Tables, 21–22</div>
          <div class="see-also">&mdash; <em>See also</em> Graphs, Heaps, Memory Allocation</div>
        </div>
        <div class="entry-group">
          <div class="entry"><strong>Domain Name System (DNS)</strong>, 45, 88</div>
          <div class="sub-entry">&bull; CNAME Records, 47</div>
          <div class="see-also">&mdash; <em>See also</em> Cloudflare Routing</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; }
      .index-xref { padding: 6px; background: var(--ace-bg, #ffffff); }
      .section-title { font-size: 4px; font-weight: 700; border-bottom: 0.5px solid #000000; margin-bottom: 3px; }
      .entry-group { margin-bottom: 4px; }
      .entry { font-size: 3.5px; color: var(--ace-foreground, #0f172a); line-height: 1.2; }
      .sub-entry { font-size: 3.1px; color: var(--ace-foreground, #334155); padding-left: 6px; line-height: 1.2; }
      .see-also { font-size: 2.8px; color: var(--ace-comment, #475569); padding-left: 6px; font-style: italic; margin-top: 1px; }
    `
	},
	{
		id: 'index-visual-page-badges',
		title: 'Visual badge index',
		styleVariant: 'Page Badges',
		description: 'A modern UI-focused index layout displaying topics paired with styled visual page pill indicators for digital reader displays.',
		htmlContent: `
      <div class="badge-index">
        <div class="row">
          <span class="title">WebSockets Protocol</span>
          <div class="badges">
            <span class="badge">p. 42</span>
            <span class="badge">p. 88</span>
            <span class="badge highlight">p. 104</span>
          </div>
        </div>
        <div class="row">
          <span class="title">SOCKS5 Proxy Architecture</span>
          <div class="badges">
            <span class="badge">p. 15</span>
            <span class="badge">p. 112</span>
          </div>
        </div>
        <div class="row">
          <span class="title">TypeScript Compilation Flags</span>
          <div class="badges">
            <span class="badge">p. 201</span>
            <span class="badge">p. 205</span>
            <span class="badge">p. 210</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .badge-index { padding: 6px; background: var(--ace-bg, #ffffff); border: 0.5px solid #e2e8f0; border-radius: 2px; }
      .row { display: flex; align-items: center; justify-content: space-between; font-size: 3.3px; border-bottom: 0.5px solid #f1f5f9; padding: 3px 0; }
      .row:last-child { border-bottom: none; }
      .title { font-weight: 600; color: var(--ace-foreground, #1e293b); }
      .badges { display: flex; gap: 2px; }
      .badge { background: var(--ace-bg, #f1f5f9); color: var(--ace-comment, #475569); padding: 1px 3px; border-radius: 2px; font-size: 2.8px; font-weight: 700; border: 0.5px solid #cbd5e1; }
      .badge.highlight { background: var(--ace-bg, #e0f2fe); color: var(--ace-blue, #0369a1); border-color: var(--ace-bg, #bae6fd); }
    `
	},
	{
		id: 'index-category-grouped',
		title: 'Categorized subject index',
		styleVariant: 'Grouped Categories',
		description: 'An index structure organizing topics into distinct domain categories rather than strictly linear alphabetical orders.',
		htmlContent: `
      <div class="cat-index">
        <div class="category">
          <h4>NETWORKING &amp; PROTOCOLS</h4>
          <p>HTTP/3 (14), TCP Sockets (99), TLS Handshake (104), WebSocket Tunneling (112, 118)</p>
        </div>
        <div class="category">
          <h4>BUILD TOOLING &amp; RUNTIMES</h4>
          <p>Esbuild (201), Node.js SpawnSync (208), Webpack HookErrors (214), Lumino Layouts (230)</p>
        </div>
        <div class="category">
          <h4>VERSION CONTROL</h4>
          <p>Git Author Filtering (301), Rebase Upstream (305), Submodule Sync (310)</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .cat-index { padding: 6px; background: var(--ace-bg, #ffffff); display: flex; flex-direction: column; gap: 4px; }
      .category h4 { font-size: 3.5px; background: var(--ace-foreground, #334155); color: var(--ace-bg, #ffffff); padding: 2px 4px; margin: 0 0 2px 0; border-radius: 1px; font-weight: 700; letter-spacing: 0.3px; }
      .category p { font-size: 3px; color: var(--ace-comment, #475569); margin: 0; line-height: 1.35; padding: 2px 4px; background: var(--ace-bg, #f8fafc); border: 0.5px solid #f1f5f9; }
    `
	},
	{
		id: 'index-timeline-chronological',
		title: 'Chronological timeline index',
		styleVariant: 'Chrono Index',
		description: 'A timeline index linking historical events, release years, or linear milestones directly to corresponding page references.',
		htmlContent: `
      <div class="chrono-idx">
        <div class="yr">
          <span class="year-label">1995</span>
          <div class="events">
            <p><strong>JavaScript First Released</strong> &bull; <em>Netscape Communications (p. 2)</em></p>
            <p><strong>HTTP/1.0 Specification Drafted</strong> &bull; <em>RFC 1945 (p. 14)</em></p>
          </div>
        </div>
        <div class="yr">
          <span class="year-label">2009</span>
          <div class="events">
            <p><strong>Node.js Engine Introduced</strong> &bull; <em>Ryan Dahl (p. 88)</em></p>
          </div>
        </div>
        <div class="yr">
          <span class="year-label">2015</span>
          <div class="events">
            <p><strong>ES6 / ECMAScript 2015 Finalized</strong> &bull; <em>TC39 Module Standards (p. 142)</em></p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .chrono-idx { padding: 6px; background: var(--ace-bg, #ffffff); display: flex; flex-direction: column; gap: 4px; }
      .yr { display: flex; gap: 6px; font-size: 3.2px; border-left: 2px solid #ec4899; padding-left: 4px; align-items: flex-start; }
      .year-label { font-weight: 800; color: #be185d; flex-shrink: 0; width: 12px; }
      .events p { color: var(--ace-foreground, #334155); margin: 0 0 2px 0; line-height: 1.25; }
      .events p:last-child { margin-bottom: 0; }
      .events strong { color: var(--ace-foreground, #0f172a); }
      .events em { color: var(--ace-comment, #64748b); font-style: normal; }
    `
	}
];

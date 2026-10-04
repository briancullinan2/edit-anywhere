import type { ITemplateItem } from './template';

export const RESEARCH_TEMPLATES: ITemplateItem[] = [
	// 1. Research Paper Generator (Reflects askLlamaWriteEssay)
	{
		id: 'ai-research-paper-generator',
		title: 'Research paper generator',
		styleVariant: 'Academic LLM',
		htmlContent: `
      <header class="rp-hdr">
        <span class="rp-tag">&check; Section-by-Section Pass</span>
        <h1>RESEARCH PAPER GENERATOR</h1>
        <p class="meta">TOPIC: Metal Bonding Analysis &bull; MODEL: Qwen2.5-14B</p>
      </header>
      <main class="rp-body">
        <section class="abstract-box">
          <h2>Abstract</h2>
          <p>Generated abstract synthesis based on section outlines and chapter synopses...</p>
        </section>
        <section class="chapter-block">
          <h2>Chapter 1 - Introduction & Background</h2>
          <p>Detailed introductory essay section generated without synopsis or concluding pleasantries...</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; }
      .rp-hdr { border-bottom: 1.5px solid #1a237e; padding-bottom: 3px; margin-bottom: 5px; }
      .rp-tag { font-family: sans-serif; background: #e8eaf6; color: #1a237e; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .rp-hdr h1 { font-size: 8.5px; color: #1a237e; font-weight: bold; margin-top: 2px; }
      .meta { font-family: sans-serif; font-size: 3.2px; color: #3f51b5; }
      .abstract-box { font-family: Georgia, serif; background: #f5f5f5; border-left: 2px solid #1a237e; padding: 4px; font-size: 3.6px; margin-bottom: 4px; }
      .abstract-box h2 { font-size: 4.2px; font-weight: bold; color: #1a237e; margin-bottom: 1px; }
      .chapter-block h2 { font-size: 4.8px; font-weight: bold; color: #111; margin: 3px 0 1px 0; border-bottom: 0.5px solid #ccc; }
      p { font-size: 3.8px; color: #222; line-height: 1.4; text-indent: 8px; }
    `
	},

	// 2. GGUF Model Selector & System Prompt Config (Reflects Select LLM By Name code)
	{
		id: 'ai-model-selector-config',
		title: 'Model selector & prompt config',
		styleVariant: 'GGUF Config',
		htmlContent: `
      <header class="cfg-hdr">
        <span class="cfg-badge">GGUF Manager</span>
        <h1>MODEL SELECTOR & INSTRUCTION BINDINGS</h1>
      </header>
      <main class="cfg-body">
        <table class="model-table">
          <thead><tr><th>Model Key</th><th>GGUF Spec File</th><th>System Instruction</th></tr></thead>
          <tbody>
            <tr><td>Meta</td><td>Meta-Llama-3.1-8B-Q6.gguf</td><td>Standard Instruct</td></tr>
            <tr><td>DeepSeek</td><td>DeepSeek-R1-Distill-8B.gguf</td><td>Reasoning Chain</td></tr>
            <tr><td>Code</td><td>DeepSeek-R1-Distill-70B.gguf</td><td>Markdown Code Only</td></tr>
          </tbody>
        </table>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .cfg-hdr { background: #263238; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .cfg-badge { background: #cfd8dc; color: #263238; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .cfg-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .model-table { width: 100%; border-collapse: collapse; font-size: 3.6px; margin-top: 3px; }
      .model-table th { background: #eceff1; color: #263238; text-align: left; padding: 2px; font-weight: bold; }
      .model-table td { border-bottom: 0.5px solid #cfd8dc; padding: 2px; font-family: monospace; }
    `
	},

	// 3. Title & Section Parser Pipeline (Reflects Title Parsing / askLlamaForAChapterSynopsis)
	{
		id: 'ai-title-section-parser',
		title: 'Title & section parser pipeline',
		styleVariant: 'Regex Parser',
		htmlContent: `
      <header class="prs-hdr">
        <span class="prs-tag">Regex Section Splitter</span>
        <h1>TITLE & SYNOPSIS PARSER</h1>
      </header>
      <main class="prs-body">
        <div class="parse-card">
          <p><strong>PATTERN:</strong> <code>/(^|\\n)\\s*[0-9]+\\.\\s*/gi</code></p>
          <p>Extracts numbered titles and splits descriptions into structured objects.</p>
        </div>
        <section>
          <h2>Extracted Chapter Dictionary</h2>
          <pre><code>{
  "Chapter 1": "Introduction to atomic structures...",
  "Chapter 2": "Experimental electron transfer..."
}</code></pre>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .prs-hdr { border-bottom: 2px solid #00838f; padding-bottom: 3px; margin-bottom: 5px; }
      .prs-tag { background: #e0f7fa; color: #006064; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .prs-hdr h1 { font-size: 8.5px; color: #006064; font-weight: bold; margin-top: 2px; }
      .parse-card { background: #e0f7fa; border-left: 2px solid #00838f; padding: 3px; font-size: 3.5px; color: #006064; margin-bottom: 4px; }
      code { font-family: monospace; background: #ffffff; padding: 0.5px 2px; border-radius: 1px; }
      pre { background: #1e1e1e; color: #d4d4d4; padding: 4px; border-radius: 2px; font-family: monospace; font-size: 3.2px; }
    `
	},

	// 4. XLSX Spreadsheet Decoder & Range Extractor (Reflects Read Spreadsheet code)
	{
		id: 'ai-xlsx-decoder-extractor',
		title: 'Spreadsheet decoder & range extractor',
		styleVariant: 'XLSX Data Tool',
		htmlContent: `
      <header class="xls-hdr">
        <span class="xls-tag">xlsx.utils.decode_cell</span>
        <h1>SPREADSHEET RANGE EXTRACTOR</h1>
      </header>
      <main class="xls-body">
        <div class="meta-box">
          <p><strong>Target Sheet:</strong> Prompts.xlsx &bull; <strong>Range:</strong> A1 - Z999</p>
        </div>
        <table class="data-preview">
          <thead><tr><th>Cell ID</th><th>Decoded Value</th></tr></thead>
          <tbody>
            <tr><td>A1</td><td>"A cinematic photo of a cyberpunk city..."</td></tr>
            <tr><td>A2</td><td>"Abstract watercolor landscape at sunset..."</td></tr>
          </tbody>
        </table>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .xls-hdr { background: #2e7d32; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .xls-tag { background: #a5d6a7; color: #1b5e20; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .xls-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .meta-box { background: #e8f5e9; border-left: 2px solid #2e7d32; padding: 3px; font-size: 3.5px; color: #1b5e20; margin-bottom: 4px; }
      .data-preview { width: 100%; border-collapse: collapse; font-size: 3.5px; }
      .data-preview th { background: #c8e6c9; color: #1b5e20; text-align: left; padding: 2px; }
      .data-preview td { border-bottom: 0.5px solid #e8f5e9; padding: 2px; font-family: monospace; }
    `
	},

	// 5. Elaborate List Generator (Reflects elaborateLlama / XLSX + LLM Expansion)
	{
		id: 'ai-elaborate-list-generator',
		title: 'Spreadsheet elaborator pipeline',
		styleVariant: 'LLM Expansion',
		htmlContent: `
      <header class="elb-hdr">
        <span class="elb-badge">Elaborate Pass</span>
        <h1>XLSX + LLM PROMPT EXPANSION PIPELINE</h1>
      </header>
      <main class="elb-body">
        <div class="prompt-prefix">
          <p><strong>PREFIX:</strong> "Imagine a scene that is much more exotic, weird, bizarre and detailed with this topic:"</p>
        </div>
        <section>
          <h2>Expanded Scene Output</h2>
          <p>Generates detailed 2-3 sentence scene expansions for each cell in the extracted range and writes output to temp file.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .elb-hdr { border-bottom: 1.5px solid #6a1b9a; padding-bottom: 3px; margin-bottom: 5px; }
      .elb-badge { background: #f3e5f5; color: #6a1b9a; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .elb-hdr h1 { font-size: 8.5px; color: #4a148c; font-weight: 800; margin-top: 2px; }
      .prompt-prefix { background: #f3e5f5; border-left: 2px solid #6a1b9a; padding: 3px; font-size: 3.5px; color: #4a148c; margin-bottom: 4px; }
      section h2 { font-size: 4.5px; color: #4a148c; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #e1bee7; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 6. Grant Proposal Generator (Reflects LLM Grant Proposal Code comment)
	{
		id: 'ai-grant-proposal-generator',
		title: 'LLM Grant proposal generator',
		styleVariant: 'Grant Pipeline',
		htmlContent: `
      <header class="grant-hdr">
        <span class="grant-tag">Research Grant Pipeline</span>
        <h1>LLM GRANT PROPOSAL GENERATOR</h1>
      </header>
      <main class="grant-body">
        <div class="target-card">
          <p><strong>Target Research:</strong> Quantum Error Correction Architectures</p>
        </div>
        <section class="clause">
          <h2>1. Specific Aims & Methodology</h2>
          <p>Generated multi-pass research aims and experimental milestones...</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .grant-hdr { border-bottom: 1.5px solid #1565c0; padding-bottom: 3px; margin-bottom: 5px; }
      .grant-tag { font-family: sans-serif; background: #e3f2fd; color: #1565c0; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .grant-hdr h1 { font-size: 8.5px; color: #0d47a1; font-weight: bold; margin-top: 2px; }
      .target-card { font-family: sans-serif; background: #e3f2fd; border-left: 2px solid #1565c0; padding: 3px; font-size: 3.5px; color: #0d47a1; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #0d47a1; border-bottom: 0.5px solid #bbdefb; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #222; line-height: 1.35; }
    `
	},

	// 7. Brainstorming Engine Blueprint (Reflects ask llm to brainstorm)
	{
		id: 'ai-brainstorming-engine',
		title: 'LLM Brainstorming engine',
		styleVariant: 'Ideation Loop',
		htmlContent: `
      <header class="bs-hdr">
        <span class="bs-badge">Ideation Pass</span>
        <h1>AUTOMATED BRAINSTORMING ENGINE</h1>
      </header>
      <main class="bs-body">
        <div class="query-box">
          <p><strong>PROMPT:</strong> "Brainstorm 12 creative names or concepts involving [Topic]..."</p>
        </div>
        <section>
          <h2>Filtered Candidates</h2>
          <p>1. QuantumScroller &bull; 2. DOMMatrix &bull; 3. CanvasFlow</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .bs-hdr { border-bottom: 1.5px solid #00796b; padding-bottom: 3px; margin-bottom: 5px; }
      .bs-badge { background: #e0f2f1; color: #00796b; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .bs-hdr h1 { font-size: 8.5px; color: #004d40; font-weight: 800; margin-top: 2px; }
      .query-box { background: #e0f2f1; border-left: 2px solid #00796b; padding: 3px; font-size: 3.5px; color: #004d40; margin-bottom: 4px; }
      section h2 { font-size: 4.5px; color: #004d40; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #b2dfdb; }
      p { font-size: 3.8px; color: #333; }
    `
	},

	// 8. Markdown / HTML Remarkable Renderer Pipeline
	{
		id: 'ai-remarkable-markdown-renderer',
		title: 'Markdown rendering pipeline',
		styleVariant: 'Remarkable Compiler',
		htmlContent: `
      <header class="md-hdr">
        <span class="md-tag">Remarkable Compiler</span>
        <h1>MARKDOWN TO HTML COMPILER PIPELINE</h1>
      </header>
      <main class="md-body">
        <div class="code-box">
          <pre><code>const {Remarkable} = require('remarkable');
const md = new Remarkable({html: true, xhtmlOut: true});
const mdHtml = md.render('# Document Title');</code></pre>
        </div>
        <section>
          <h2>Compiled Document Preview</h2>
          <p>Rendered HTML output saved directly to disk path cache...</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .md-hdr { border-bottom: 2px solid #d84315; padding-bottom: 3px; margin-bottom: 5px; }
      .md-tag { background: #fbe9e7; color: #d84315; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .md-hdr h1 { font-size: 8.5px; color: #d84315; font-weight: 800; margin-top: 2px; }
      pre { background: #1e1e1e; color: #ce9178; padding: 4px; border-radius: 2px; font-family: monospace; font-size: 3.2px; }
      section h2 { font-size: 4.5px; color: #d84315; font-weight: bold; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; }
    `
	},

	// 9. Llama Vision Session & Chat History Restorer
	{
		id: 'ai-llama-vision-session-manager',
		title: 'Vision session & state restorer',
		styleVariant: 'Session Memory',
		htmlContent: `
      <header class="vsn-hdr">
        <span class="vsn-badge">Llama Vision</span>
        <h1>CHAT HISTORY & SESSION RESTORER</h1>
      </header>
      <main class="vsn-body">
        <div class="status-card">
          <p><strong>SESSION STATUS:</strong> Active Session Locked</p>
          <p><code>session.setChatHistory(initialHistory)</code></p>
        </div>
        <section>
          <h2>Streaming Chunk Execution</h2>
          <p>Logs stdout text chunks in real-time during LLM response generation passes.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .vsn-hdr { background: #4a148c; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .vsn-badge { background: #ea80fc; color: #4a148c; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .vsn-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .status-card { background: #f3e5f5; border-left: 2px solid #ab47bc; padding: 3px; font-size: 3.5px; color: #4a148c; margin-bottom: 4px; }
      code { font-family: monospace; background: #ffffff; padding: 0.5px 2px; border-radius: 1px; }
      section h2 { font-size: 4.5px; color: #4a148c; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #e1bee7; }
      p { font-size: 3.8px; color: #333; }
    `
	},

	// 10. Multi-Model RPC Service Dispatcher
	{
		id: 'ai-rpc-model-dispatcher',
		title: 'RPC model dispatcher',
		styleVariant: 'Multi-Model RPC',
		htmlContent: `
      <header class="rpc-hdr">
        <span class="rpc-tag">RPC Dispatcher</span>
        <h1>LLM RPC SERVICE DISPATCHER</h1>
      </header>
      <main class="rpc-body">
        <div class="route-grid">
          <div class="r-card">Meta-3.1 &rarr; Port 8080</div>
          <div class="r-card">Qwen-2.5 &rarr; Port 8081</div>
        </div>
        <section>
          <h2>RPC Model Binding</h2>
          <p>Binds temperature and session parameters dynamically per request string name.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .rpc-hdr { border-bottom: 1.5px solid #37474f; padding-bottom: 3px; margin-bottom: 5px; }
      .rpc-tag { background: #cfd8dc; color: #263238; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .rpc-hdr h1 { font-size: 8.5px; color: #263238; font-weight: 800; margin-top: 2px; }
      .route-grid { display: flex; gap: 3px; margin: 4px 0; }
      .r-card { flex: 1; background: #eceff1; border-left: 1.5px solid #37474f; padding: 2px; font-size: 3.2px; color: #263238; font-weight: bold; text-align: center; }
      section h2 { font-size: 4.5px; color: #263238; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #cfd8dc; }
      p { font-size: 3.8px; color: #333; }
    `
	}
];

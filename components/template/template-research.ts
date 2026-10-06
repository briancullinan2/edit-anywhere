import type { ITemplateItem } from './template';

export const RESEARCH_TEMPLATES: ITemplateItem[] = [
	// 1. Research Paper Generator
	{
		id: 'ai-research-paper-generator',
		title: 'Research paper generator',
		description: 'Generates end-to-end academic research papers section by section including abstract, introduction, literature review, methodology, results, discussion, and references.',
		styleVariant: 'Academic LLM',
		htmlContent: `
      <header class="rp-hdr">
        <span class="rp-tag">&check; Section-by-Section Pass</span>
        <h1>RESEARCH PAPER GENERATOR</h1>
        <p class="meta">TOPIC: Metal Bonding Analysis &bull; MODEL: Qwen2.5-14B &bull; STATUS: Complete</p>
      </header>
      <main class="rp-body">
        <section class="abstract-box">
          <h2>Abstract</h2>
          <p>This study investigates advanced metal bonding techniques using high-resolution spectroscopy and atomistic simulations. We quantify binding energy differentials and phase transformations under thermal stress.</p>
        </section>
        <section class="chapter-block">
          <h2>1. Introduction & Background</h2>
          <p>Metal bonding mechanisms govern mechanical integrity in high-stress aerospace alloys. Traditional models fail to capture localized electronic interactions at phase boundaries.</p>
        </section>
        <section class="chapter-block">
          <h2>2. Literature Review</h2>
          <p>Prior work by Smith et al. (2021) established foundational DFT models. However, temperature-dependent lattice distortion effects remained unquantified across alloy gradations.</p>
        </section>
        <section class="chapter-block">
          <h2>3. Methodology & Experimental Design</h2>
          <p>We combine ab initio molecular dynamics (AIMD) with high-angle annular dark-field scanning transmission electron microscopy (HAADF-STEM) across 12 distinct sample compositions.</p>
        </section>
        <section class="chapter-block">
          <h2>4. Results & Data Synthesis</h2>
          <p>Empirical evidence demonstrates a 14.2% increase in shear strength when interstitial nitrogen doping is applied at grain boundaries under 450°C thermal exposure.</p>
        </section>
        <section class="chapter-block">
          <h2>5. Discussion & Theoretical Implications</h2>
          <p>The observed boundary stabilization aligns with core-shell diffusion predictions. This provides a clear roadmap for engineering fatigue-resistant alloy structures.</p>
        </section>
        <section class="chapter-block">
          <h2>6. Conclusion & Future Directions</h2>
          <p>Multi-pass AI synthesis confirms that grain-boundary solute engineering significantly improves high-temperature mechanical performance without ductility loss.</p>
        </section>
        <section class="chapter-block">
          <h2>7. References & Citations</h2>
          <p>[1] Smith, J. et al. (2021). <em>Journal of Materials Science</em>, 56(4), 1120-1135.<br>[2] Zhang, Y. et al. (2024). <em>ACS Nano</em>, 18(2), 401-415.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; }
      .rp-hdr { border-bottom: 1.5px solid #1a237e; padding-bottom: 3px; margin-bottom: 5px; }
      .rp-tag { font-family: sans-serif; background: var(--ace-bg, #e8eaf6); color: #1a237e; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .rp-hdr h1 { font-size: 8.5px; color: #1a237e; font-weight: bold; margin-top: 2px; }
      .meta { font-family: sans-serif; font-size: 3.2px; color: var(--ace-blue, #3f51b5); }
      .abstract-box { font-family: Georgia, serif; background: var(--ace-bg, #f5f5f5); border-left: 2px solid #1a237e; padding: 4px; font-size: 3.6px; margin-bottom: 4px; }
      .abstract-box h2 { font-size: 4.2px; font-weight: bold; color: #1a237e; margin-bottom: 1px; }
      .chapter-block h2 { font-size: 4.8px; font-weight: bold; color: var(--ace-foreground, #111); margin: 3px 0 1px 0; border-bottom: 0.5px solid #ccc; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.4; text-indent: 8px; }
    `
	},

	// 2. GGUF Model Selector & System Prompt Config
	{
		id: 'ai-model-selector-config',
		title: 'Model selector & prompt config',
		description: 'Configuration dashboard mapping GGUF quantized models to hyperparameter profiles, system prompts, context window sizes, and inference dispatch parameters.',
		styleVariant: 'GGUF Config',
		htmlContent: `
      <header class="cfg-hdr">
        <span class="cfg-badge">GGUF Manager</span>
        <h1>MODEL SELECTOR & INSTRUCTION BINDINGS</h1>
      </header>
      <main class="cfg-body">
        <section class="cfg-sec">
          <h2>1. Overview & System Target</h2>
          <p>Configures local LLM execution bindings for multi-model inference pipelines and task-specific prompt injection rules.</p>
        </section>
        <section class="cfg-sec">
          <h2>2. Model Matrix & Parameters</h2>
          <table class="model-table">
            <thead><tr><th>Model Key</th><th>GGUF Spec File</th><th>Context Window</th><th>System Instruction</th></tr></thead>
            <tbody>
              <tr><td>Meta</td><td>Meta-Llama-3.1-8B-Q6.gguf</td><td>8,192 tok</td><td>Standard Instruct</td></tr>
              <tr><td>DeepSeek</td><td>DeepSeek-R1-Distill-8B.gguf</td><td>16,384 tok</td><td>Reasoning Chain</td></tr>
              <tr><td>Code</td><td>DeepSeek-R1-Distill-70B.gguf</td><td>32,768 tok</td><td>Markdown Code Only</td></tr>
            </tbody>
          </table>
        </section>
        <section class="cfg-sec">
          <h2>3. Global System Prompt Definition</h2>
          <p class="code-block"><code>SYSTEM_INSTRUCT = "You are an expert research analyst. Always respond in structured JSON schema."</code></p>
        </section>
        <section class="cfg-sec">
          <h2>4. Execution & Validation Rules</h2>
          <p>Temperature strictly bounded to [0.1, 0.7]. Top-P set to 0.9. Fallback on VRAM overflow redirects to 8B quant fallback queue.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .cfg-hdr { background: var(--ace-foreground, #263238); color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .cfg-badge { background: var(--ace-bg, #cfd8dc); color: var(--ace-foreground, #263238); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .cfg-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .cfg-sec h2 { font-size: 4.5px; color: var(--ace-foreground, #263238); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #cfd8dc; }
      .model-table { width: 100%; border-collapse: collapse; font-size: 3.6px; margin-top: 3px; }
      .model-table th { background: var(--ace-bg, #eceff1); color: var(--ace-foreground, #263238); text-align: left; padding: 2px; font-weight: bold; }
      .model-table td { border-bottom: 0.5px solid #cfd8dc; padding: 2px; font-family: monospace; }
      .code-block { background: var(--ace-bg, #eceff1); padding: 2px; font-size: 3.4px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 3. Title & Section Parser Pipeline
	{
		id: 'ai-title-section-parser',
		title: 'Title & section parser pipeline',
		description: 'Regex-based text processing pipeline that ingests raw LLM outputs, extracts numbered chapter titles, builds a structured dictionary, and handles parsing exceptions.',
		styleVariant: 'Regex Parser',
		htmlContent: `
      <header class="prs-hdr">
        <span class="prs-tag">Regex Section Splitter</span>
        <h1>TITLE & SYNOPSIS PARSER</h1>
      </header>
      <main class="prs-body">
        <section class="prs-sec">
          <h2>1. Pipeline Objective</h2>
          <p>Splits unstructured multi-chapter Markdown documents into clean JSON key-value pairs representing individual chapter outlines.</p>
        </section>
        <section class="prs-sec">
          <h2>2. Pattern Definition</h2>
          <div class="parse-card">
            <p><strong>PATTERN:</strong> <code>/(^|\\n)\\s*([0-9]+|Chapter\\s+[0-9]+)\\.\\s*/gi</code></p>
            <p>Matches explicit chapter headings and separates section titles from content blocks.</p>
          </div>
        </section>
        <section class="prs-sec">
          <h2>3. Extracted Chapter Dictionary Output</h2>
          <pre><code>{
  "Chapter 1": "Introduction to atomic structures...",
  "Chapter 2": "Experimental electron transfer...",
  "Chapter 3": "Quantum mechanical bonding states..."
}</code></pre>
        </section>
        <section class="prs-sec">
          <h2>4. Error Handling & Edge Cases</h2>
          <p>Fallback parsing triggers when headings lack numeric prefixes, using newline heuristics and font-weight tags.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .prs-hdr { border-bottom: 2px solid #00838f; padding-bottom: 3px; margin-bottom: 5px; }
      .prs-tag { background: var(--ace-bg, #e0f7fa); color: #006064; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .prs-hdr h1 { font-size: 8.5px; color: #006064; font-weight: bold; margin-top: 2px; }
      .prs-sec h2 { font-size: 4.5px; color: #006064; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #b2ebf2; }
      .parse-card { background: var(--ace-bg, #e0f7fa); border-left: 2px solid #00838f; padding: 3px; font-size: 3.5px; color: #006064; margin-bottom: 4px; }
      code { font-family: monospace; background: var(--ace-bg, #ffffff); padding: 0.5px 2px; border-radius: 1px; }
      pre { background: var(--ace-foreground, #1e1e1e); color: var(--ace-bg, #d4d4d4); padding: 4px; border-radius: 2px; font-family: monospace; font-size: 3.2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 4. XLSX Spreadsheet Decoder & Range Extractor
	{
		id: 'ai-xlsx-decoder-extractor',
		title: 'Spreadsheet decoder & range extractor',
		description: 'Automated tabular data extraction workflow using SheetJS/XLSX utilities to parse ranges, decode cell locations, format headers, and generate array previews.',
		styleVariant: 'XLSX Data Tool',
		htmlContent: `
      <header class="xls-hdr">
        <span class="xls-tag">xlsx.utils.decode_cell</span>
        <h1>SPREADSHEET RANGE EXTRACTOR</h1>
      </header>
      <main class="xls-body">
        <section class="xls-sec">
          <h2>1. Source Workbook Metadata</h2>
          <div class="meta-box">
            <p><strong>Target File:</strong> Prompts.xlsx &bull; <strong>Active Sheet:</strong> Prompts_Master &bull; <strong>Decoded Range:</strong> A1 : Z999</p>
          </div>
        </section>
        <section class="xls-sec">
          <h2>2. Extraction Parameters</h2>
          <p>Extracts column 0 (Prompt Text) and column 1 (Target Domain), converting raw cell values into clean string arrays.</p>
        </section>
        <section class="xls-sec">
          <h2>3. Decoded Cell Preview</h2>
          <table class="data-preview">
            <thead><tr><th>Cell ID</th><th>Decoded Value</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>A1</td><td>"A cinematic photo of a cyberpunk city..."</td><td>SUCCESS</td></tr>
              <tr><td>A2</td><td>"Abstract watercolor landscape at sunset..."</td><td>SUCCESS</td></tr>
              <tr><td>A3</td><td>"Microscopic view of crystalline lattice..."</td><td>SUCCESS</td></tr>
            </tbody>
          </table>
        </section>
        <section class="xls-sec">
          <h2>4. Output Schema & Export Path</h2>
          <p>Parsed records are emitted as structured JSON payloads saved to <code>/tmp/extracted_prompts.json</code>.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .xls-hdr { background: #2e7d32; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .xls-tag { background: var(--ace-bg, #a5d6a7); color: var(--ace-foreground, #1b5e20); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .xls-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .xls-sec h2 { font-size: 4.5px; color: var(--ace-foreground, #1b5e20); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #c8e6c9; }
      .meta-box { background: var(--ace-bg, #e8f5e9); border-left: 2px solid #2e7d32; padding: 3px; font-size: 3.5px; color: var(--ace-foreground, #1b5e20); margin-bottom: 4px; }
      .data-preview { width: 100%; border-collapse: collapse; font-size: 3.5px; }
      .data-preview th { background: var(--ace-bg, #c8e6c9); color: var(--ace-foreground, #1b5e20); text-align: left; padding: 2px; }
      .data-preview td { border-bottom: 0.5px solid #e8f5e9; padding: 2px; font-family: monospace; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 5. Elaborate List Generator
	{
		id: 'ai-elaborate-list-generator',
		title: 'Spreadsheet elaborator pipeline',
		description: 'Takes tabular spreadsheet entries and applies a creative LLM expansion pass to construct rich, descriptive multi-sentence scene descriptions from brief keywords.',
		styleVariant: 'LLM Expansion',
		htmlContent: `
      <header class="elb-hdr">
        <span class="elb-badge">Elaborate Pass</span>
        <h1>XLSX + LLM PROMPT EXPANSION PIPELINE</h1>
      </header>
      <main class="elb-body">
        <section class="elb-sec">
          <h2>1. Ingestion & Preprocessing</h2>
          <p>Reads simple topic strings from raw spreadsheet cells and prepares batch prompt jobs.</p>
        </section>
        <section class="elb-sec">
          <h2>2. System Prompt & Instruction Prefix</h2>
          <div class="prompt-prefix">
            <p><strong>PREFIX:</strong> "Imagine a scene that is much more exotic, weird, bizarre and detailed with this topic:"</p>
          </div>
        </section>
        <section class="elb-sec">
          <h2>3. Expanded Output Synthesis</h2>
          <p>Generates detailed 2-3 sentence scene expansions for each cell in the extracted range, embedding atmospheric details and lighting attributes.</p>
        </section>
        <section class="elb-sec">
          <h2>4. Disk Caching & Batch Writer</h2>
          <p>Appends transformed outputs sequentially into target Excel destination columns and exports back to disk.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .elb-hdr { border-bottom: 1.5px solid #6a1b9a; padding-bottom: 3px; margin-bottom: 5px; }
      .elb-badge { background: var(--ace-bg, #f3e5f5); color: var(--ace-purple, #6a1b9a); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .elb-hdr h1 { font-size: 8.5px; color: var(--ace-purple, #4a148c); font-weight: 800; margin-top: 2px; }
      .elb-sec h2 { font-size: 4.5px; color: var(--ace-purple, #4a148c); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #e1bee7; }
      .prompt-prefix { background: var(--ace-bg, #f3e5f5); border-left: 2px solid #6a1b9a; padding: 3px; font-size: 3.5px; color: var(--ace-purple, #4a148c); margin-bottom: 4px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 6. Grant Proposal Generator
	{
		id: 'ai-grant-proposal-generator',
		title: 'LLM Grant proposal generator',
		description: 'Comprehensive multi-pass grant proposal builder detailing project summaries, specific aims, significance, experimental methods, budget allocation, and expected milestones.',
		styleVariant: 'Grant Pipeline',
		htmlContent: `
      <header class="grant-hdr">
        <span class="grant-tag">Research Grant Pipeline</span>
        <h1>LLM GRANT PROPOSAL GENERATOR</h1>
      </header>
      <main class="grant-body">
        <section class="clause">
          <h2>1. Executive Summary & Overview</h2>
          <div class="target-card">
            <p><strong>Target Research:</strong> Quantum Error Correction Architectures</p>
          </div>
          <p>This proposal seeks funding to develop high-threshold topological surface codes running on fault-tolerant superconducting qubits.</p>
        </section>
        <section class="clause">
          <h2>2. Specific Aims</h2>
          <p>Aim 1: Construct low-overhead syndrome decoding algorithms. Aim 2: Validate real-time error suppression in a 100-qubit processor environment.</p>
        </section>
        <section class="clause">
          <h2>3. Research Significance & Impact</h2>
          <p>Fault-tolerant quantum processing requires reducing physical-to-logical qubit ratios below 1000:1. This project directly addresses this critical scalability bottleneck.</p>
        </section>
        <section class="clause">
          <h2>4. Research Methodology & Work Plan</h2>
          <p>We deploy tensor-network neural decoders coupled with FPGA hardware controllers to process error signals under 50 nanosecond latencies.</p>
        </section>
        <section class="clause">
          <h2>5. Budget & Resource Justification</h2>
          <p>Personnel: $450k (2 Postdocs, 3 PhD Students). Equipment: $320k (Cryogenic amplification hardware). Indirects: $130k.</p>
        </section>
        <section class="clause">
          <h2>6. Timeline & Expected Milestones</h2>
          <p>Month 6: Simulation benchmark complete. Month 18: FPGA implementation. Month 36: Empirical validation on physical hardware.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .grant-hdr { border-bottom: 1.5px solid #1565c0; padding-bottom: 3px; margin-bottom: 5px; }
      .grant-tag { font-family: sans-serif; background: var(--ace-bg, #e3f2fd); color: var(--ace-blue, #1565c0); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .grant-hdr h1 { font-size: 8.5px; color: var(--ace-blue, #0d47a1); font-weight: bold; margin-top: 2px; }
      .target-card { font-family: sans-serif; background: var(--ace-bg, #e3f2fd); border-left: 2px solid #1565c0; padding: 3px; font-size: 3.5px; color: var(--ace-blue, #0d47a1); margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-blue, #0d47a1); border-bottom: 0.5px solid #bbdefb; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.35; }
    `
	},

	// 7. Brainstorming Engine Blueprint
	{
		id: 'ai-brainstorming-engine',
		title: 'LLM Brainstorming engine',
		description: 'Ideation framework designed to query language models for concept generation, apply semantic deduplication, score candidates, and return top ideas.',
		styleVariant: 'Ideation Loop',
		htmlContent: `
      <header class="bs-hdr">
        <span class="bs-badge">Ideation Pass</span>
        <h1>AUTOMATED BRAINSTORMING ENGINE</h1>
      </header>
      <main class="bs-body">
        <section class="bs-sec">
          <h2>1. Input Prompt Parameters</h2>
          <div class="query-box">
            <p><strong>PROMPT:</strong> "Brainstorm 12 creative names or concepts involving Virtual DOM Rendering Optimization..."</p>
          </div>
        </section>
        <section class="bs-sec">
          <h2>2. Raw Concept Generation</h2>
          <p>Generates 50 candidate naming strings using high-temperature sampling (T=0.85) across 3 parallel inference runs.</p>
        </section>
        <section class="bs-sec">
          <h2>3. Filtering & Semantic Deduplication</h2>
          <p>Applies vector cosine distance to prune redundant concepts and removes trademark-conflicting keywords.</p>
        </section>
        <section class="bs-sec">
          <h2>4. Final Rank-Ordered Candidates</h2>
          <p>1. QuantumScroller &bull; 2. DOMMatrix &bull; 3. CanvasFlow &bull; 4. FiberDiff &bull; 5. QuickPatch</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .bs-hdr { border-bottom: 1.5px solid #00796b; padding-bottom: 3px; margin-bottom: 5px; }
      .bs-badge { background: var(--ace-bg, #e0f2f1); color: #00796b; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .bs-hdr h1 { font-size: 8.5px; color: var(--ace-foreground, #004d40); font-weight: 800; margin-top: 2px; }
      .bs-sec h2 { font-size: 4.5px; color: var(--ace-foreground, #004d40); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #b2dfdb; }
      .query-box { background: var(--ace-bg, #e0f2f1); border-left: 2px solid #00796b; padding: 3px; font-size: 3.5px; color: var(--ace-foreground, #004d40); margin-bottom: 4px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 8. Markdown / HTML Remarkable Renderer Pipeline
	{
		id: 'ai-remarkable-markdown-renderer',
		title: 'Markdown rendering pipeline',
		description: 'Server-side Markdown parsing compiler utilizing Remarkable to convert generated raw text documents into clean, styled HTML artifacts with preview rendering.',
		styleVariant: 'Remarkable Compiler',
		htmlContent: `
      <header class="md-hdr">
        <span class="md-tag">Remarkable Compiler</span>
        <h1>MARKDOWN TO HTML COMPILER PIPELINE</h1>
      </header>
      <main class="md-body">
        <section class="md-sec">
          <h2>1. Source Markdown Ingestion</h2>
          <p>Receives unstructured raw string streams emitted from model stdout.</p>
        </section>
        <section class="md-sec">
          <h2>2. Compiler Configuration</h2>
          <div class="code-box">
            <pre><code>const {Remarkable} = require('remarkable');
const md = new Remarkable({html: true, xhtmlOut: true, breaks: true});
const mdHtml = md.render('# Document Title\\n\\n* Bullet point 1\\n* Bullet point 2');</code></pre>
          </div>
        </section>
        <section class="md-sec">
          <h2>3. CSS Injection & Styling Pass</h2>
          <p>Applies scoped stylesheets and wraps output inside isolated shadow root containers.</p>
        </section>
        <section class="md-sec">
          <h2>4. Rendered Document Output</h2>
          <p>Rendered HTML output saved directly to disk path cache for instant frontend webview preview.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .md-hdr { border-bottom: 2px solid #d84315; padding-bottom: 3px; margin-bottom: 5px; }
      .md-tag { background: var(--ace-bg, #fbe9e7); color: var(--ace-pink, #d84315); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .md-hdr h1 { font-size: 8.5px; color: var(--ace-pink, #d84315); font-weight: 800; margin-top: 2px; }
      .md-sec h2 { font-size: 4.5px; color: var(--ace-pink, #d84315); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #ffccbc; }
      pre { background: var(--ace-foreground, #1e1e1e); color: #ce9178; padding: 4px; border-radius: 2px; font-family: monospace; font-size: 3.2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 9. Llama Vision Session & Chat History Restorer
	{
		id: 'ai-llama-vision-session-manager',
		title: 'Vision session & state restorer',
		description: 'Multimodal session persistence system that manages image embeddings, restores multi-turn chat history, and streams tokens in real-time.',
		styleVariant: 'Session Memory',
		htmlContent: `
      <header class="vsn-hdr">
        <span class="vsn-badge">Llama Vision</span>
        <h1>CHAT HISTORY & SESSION RESTORER</h1>
      </header>
      <main class="vsn-body">
        <section class="vsn-sec">
          <h2>1. Session Initialization</h2>
          <div class="status-card">
            <p><strong>SESSION STATUS:</strong> Active Session Locked</p>
            <p><code>session.setChatHistory(initialHistory)</code></p>
          </div>
        </section>
        <section class="vsn-sec">
          <h2>2. Image Tensor Encoding</h2>
          <p>Converts incoming JPEG visual inputs into CLIP projection embeddings attached to the initial turn prompt.</p>
        </section>
        <section class="vsn-sec">
          <h2>3. Streaming Token Execution</h2>
          <p>Logs stdout text chunks in real-time during LLM response generation passes, updating the active DOM buffer.</p>
        </section>
        <section class="vsn-sec">
          <h2>4. State Persistence & Export</h2>
          <p>Serializes complete conversation turn state to SQLite storage upon completion of inference run.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .vsn-hdr { background: #4a148c; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .vsn-badge { background: var(--ace-bg, #ea80fc); color: var(--ace-purple, #4a148c); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .vsn-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .vsn-sec h2 { font-size: 4.5px; color: var(--ace-purple, #4a148c); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #e1bee7; }
      .status-card { background: var(--ace-bg, #f3e5f5); border-left: 2px solid #ab47bc; padding: 3px; font-size: 3.5px; color: var(--ace-purple, #4a148c); margin-bottom: 4px; }
      code { font-family: monospace; background: var(--ace-bg, #ffffff); padding: 0.5px 2px; border-radius: 1px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 10. Multi-Model RPC Service Dispatcher
	{
		id: 'ai-rpc-model-dispatcher',
		title: 'RPC model dispatcher',
		description: 'High-performance model routing engine that dynamically dispatches incoming inference tasks across local and remote RPC model servers based on workload demands.',
		styleVariant: 'Multi-Model RPC',
		htmlContent: `
      <header class="rpc-hdr">
        <span class="rpc-tag">RPC Dispatcher</span>
        <h1>LLM RPC SERVICE DISPATCHER</h1>
      </header>
      <main class="rpc-body">
        <section class="rpc-sec">
          <h2>1. Dispatcher Overview</h2>
          <p>Manages TCP/gRPC transport channels connecting application clients with isolated model daemon instances.</p>
        </section>
        <section class="rpc-sec">
          <h2>2. Active Route Table</h2>
          <div class="route-grid">
            <div class="r-card">Meta-3.1 &rarr; Port 8080</div>
            <div class="r-card">Qwen-2.5 &rarr; Port 8081</div>
            <div class="r-card">DeepSeek &rarr; Port 8082</div>
          </div>
        </section>
        <section class="rpc-sec">
          <h2>3. Parameter Binding & Middleware</h2>
          <p>Binds temperature and session parameters dynamically per request string name while applying rate-limiting limits.</p>
        </section>
        <section class="rpc-sec">
          <h2>4. Health Checks & Failover Strategy</h2>
          <p>Pings model ports every 500ms; automatically re-routes traffic if response latency exceeds 2000ms threshold.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .rpc-hdr { border-bottom: 1.5px solid #37474f; padding-bottom: 3px; margin-bottom: 5px; }
      .rpc-tag { background: var(--ace-bg, #cfd8dc); color: var(--ace-foreground, #263238); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .rpc-hdr h1 { font-size: 8.5px; color: var(--ace-foreground, #263238); font-weight: 800; margin-top: 2px; }
      .rpc-sec h2 { font-size: 4.5px; color: var(--ace-foreground, #263238); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #cfd8dc; }
      .route-grid { display: flex; gap: 3px; margin: 4px 0; }
      .r-card { flex: 1; background: var(--ace-bg, #eceff1); border-left: 1.5px solid #37474f; padding: 2px; font-size: 3.2px; color: var(--ace-foreground, #263238); font-weight: bold; text-align: center; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 11. Systematic Literature Review Synthesis Engine (NEW)
	{
		id: 'ai-systematic-literature-review',
		title: 'Systematic literature review engine',
		description: 'Executes PRISMA-compliant literature reviews including database querying, screening protocol, quality assessment, data extraction, and meta-analysis synthesis.',
		styleVariant: 'Meta Synthesis',
		htmlContent: `
      <header class="slr-hdr">
        <span class="slr-tag">PRISMA Framework</span>
        <h1>SYSTEMATIC LITERATURE REVIEW SYNTHESIS</h1>
      </header>
      <main class="slr-body">
        <section class="slr-sec">
          <h2>1. Executive Summary & Review Scope</h2>
          <p>Synthesizes 42 peer-reviewed studies examining deep learning applications in protein folding prediction between 2020 and 2026.</p>
        </section>
        <section class="slr-sec">
          <h2>2. Search Strategy & Database Query</h2>
          <p>Queried PubMed, IEEE Xplore, and arXiv using boolean syntax: <code>("transformer" OR "diffusion") AND "protein structure"</code>.</p>
        </section>
        <section class="slr-sec">
          <h2>3. Inclusion / Exclusion Screening Matrix</h2>
          <p>Included: Peer-reviewed empirical studies with code open-sourcing. Excluded: Non-English reports and commentaries lacking validation datasets.</p>
        </section>
        <section class="slr-sec">
          <h2>4. Primary Findings & Meta-Analysis</h2>
          <p>Transformer-based architectures consistently achieved sub-1.5 Å RMSD accuracy across 78% of benchmark target proteins.</p>
        </section>
        <section class="slr-sec">
          <h2>5. Bias & Risk Assessment</h2>
          <p>Risk of publication bias evaluated via funnel plots; high consistency was observed across independent validation labs.</p>
        </section>
        <section class="slr-sec">
          <h2>6. Conclusions & Future Research Gaps</h2>
          <p>Gaps remain in modeling dynamic ligand-protein binding interactions under non-equilibrium physiological states.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .slr-hdr { border-bottom: 2px solid #b71c1c; padding-bottom: 3px; margin-bottom: 5px; }
      .slr-tag { background: var(--ace-bg, #ffebee); color: var(--ace-pink, #b71c1c); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .slr-hdr h1 { font-size: 8.5px; color: var(--ace-pink, #b71c1c); font-weight: 800; margin-top: 2px; }
      .slr-sec h2 { font-size: 4.5px; color: var(--ace-pink, #b71c1c); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #ffcdd2; }
      code { font-family: monospace; background: var(--ace-bg, #ffebee); padding: 0.5px 2px; border-radius: 1px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 12. Clinical Trial & Experimental Protocol Design (NEW)
	{
		id: 'ai-clinical-trial-protocol',
		title: 'Clinical trial & experimental protocol design',
		description: 'Structured clinical trial protocol documentation covering study objectives, patient eligibility criteria, intervention arms, primary endpoints, and safety monitoring.',
		styleVariant: 'Clinical Protocol',
		htmlContent: `
      <header class="ctp-hdr">
        <span class="ctp-badge">IRB / FDA Spec</span>
        <h1>CLINICAL TRIAL & EXPERIMENTAL PROTOCOL</h1>
      </header>
      <main class="ctp-body">
        <section class="ctp-sec">
          <h2>1. Study Title & Objective</h2>
          <p>Phase II Randomized Controlled Trial evaluating novel immunotherapeutic agent CTX-101 in targeted oncology populations.</p>
        </section>
        <section class="ctp-sec">
          <h2>2. Patient Inclusion / Exclusion Criteria</h2>
          <p>Inclusion: Adults aged 18-75 with confirmed stage III/IV carcinoma. Exclusion: Prior exposure to immune-checkpoint inhibitors within 60 days.</p>
        </section>
        <section class="ctp-sec">
          <h2>3. Intervention & Arm Randomization</h2>
          <p>Arm A: CTX-101 (10mg/kg bi-weekly IV). Arm B: Standard-of-care chemotherapy control group with double-blind administration.</p>
        </section>
        <section class="ctp-sec">
          <h2>4. Endpoints & Measuring Metrics</h2>
          <p>Primary Endpoint: Progression-Free Survival (PFS) at 12 months. Secondary Endpoints: Overall Response Rate (ORR) and adverse event frequencies.</p>
        </section>
        <section class="ctp-sec">
          <h2>5. Safety & Adverse Event Monitoring</h2>
          <p>Monitored continuously by an independent Data Safety Monitoring Board (DSMB) with mandatory stopping rules if Grade 4 toxicity exceeds 5%.</p>
        </section>
        <section class="ctp-sec">
          <h2>6. Statistical Power & Data Analysis</h2>
          <p>Sample size of N=240 provides 90% statistical power at alpha=0.05 two-sided significance level to detect hazard ratio of 0.65.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, Helvetica, sans-serif; }
      .ctp-hdr { background: var(--ace-foreground, #004d40); color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .ctp-badge { background: var(--ace-bg, #80cbc4); color: var(--ace-foreground, #004d40); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .ctp-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .ctp-sec h2 { font-size: 4.5px; color: var(--ace-foreground, #004d40); font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #b2dfdb; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	}
];

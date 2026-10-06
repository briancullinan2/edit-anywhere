import type { ITemplateItem } from './template';

export const WRITING_TEMPLATES: ITemplateItem[] = [
	// 1. LLM Serial Business Plan Generator (Reflects askLlamaToWriteBusinessPlan)
	{
		id: 'ai-business-plan-generator',
		title: 'LLM Business plan generator',
		styleVariant: 'Serial Prompting',
		htmlContent: `
      <header class="ai-hdr">
        <span class="pipeline-badge">&check; Serial Prompt Pipeline</span>
        <h1>LLM BUSINESS PLAN GENERATOR</h1>
        <p class="subtitle">AUTOMATED MULTI-STAGE LLM PROMPTING WORKFLOW</p>
      </header>
      <main class="ai-body">
        <div class="prompt-chain-status">
          <div class="step active"><span class="num">1</span> Name Brainstorm</div>
          <div class="step active"><span class="num">2</span> Exec Summary</div>
          <div class="step active"><span class="num">3</span> Market Demands</div>
          <div class="step"><span class="num">4</span> Financials</div>
        </div>

        <section class="code-preview">
          <h2>Sequential Context Summarization Strategy</h2>
          <p>Each section summarizes prior context into a 1-2 sentence payload to avoid context window degradation.</p>
        </section>

        <section class="output-preview">
          <h2>1. Executive Summary</h2>
          <p>Generated output based on multi-stage serial prompts and model synthesis...</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; }
      .ai-hdr { background: #1a237e; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .pipeline-badge { background: #3d5aff; color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .ai-hdr h1 { font-size: 8.5px; font-weight: 800; color: var(--ace-bg, #fff); margin-top: 2px; }
      .subtitle { font-size: 3.2px; color: var(--ace-bg, #8c9eff); letter-spacing: 0.5px; }
      .prompt-chain-status { display: flex; gap: 2px; margin: 4px 0; }
      .step { flex: 1; background: var(--ace-bg, #e8eaf6); padding: 2px; font-size: 3px; color: var(--ace-blue, #3f51b5); text-align: center; border-radius: 1px; }
      .step.active { background: #3f51b5; color: var(--ace-bg, #fff); font-weight: bold; }
      .step .num { background: rgba(0,0,0,0.2); padding: 0.5px 2px; border-radius: 50%; }
      .code-preview { background: var(--ace-bg, #f5f5f5); border-left: 2px solid #3f51b5; padding: 3px; font-size: 3.5px; margin-bottom: 4px; }
      .code-preview h2 { font-size: 4.2px; color: #1a237e; font-weight: bold; margin-bottom: 2px; }
      .output-preview h2 { font-size: 4.5px; color: #1a237e; border-bottom: 0.5px solid #c5cae9; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 2. Creative Fiction & Chapter Generator (Reflects Hero's Journey / Apotheosis Story Code)
	{
		id: 'ai-story-generator',
		title: 'Creative story generator',
		styleVariant: 'Hero\'s Journey Pipeline',
		htmlContent: `
      <header class="story-hdr">
        <span class="apotheosis-tag">Apotheosis Architecture</span>
        <h1>CREATIVE FICTION & CHAPTER SCRIPT</h1>
        <p class="archetype">ARCHETYPE: The Reluctant Hero Ascends to Godhood</p>
      </header>
      <main class="story-body">
        <div class="pipeline-card">
          <p><strong>Stage 1:</strong> Character Personas & Scenario Extraction</p>
          <p><strong>Stage 2:</strong> Chapter Synopsis & Hero's Journey Loop</p>
        </div>
        <section class="chapter-block">
          <h2>Chapter 1: The Inciting Incident</h2>
          <p>The story unfolds as characters transition from ordinary existence to supernatural call...</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .story-hdr { border-bottom: 2px solid #4a148c; padding-bottom: 3px; margin-bottom: 5px; }
      .apotheosis-tag { font-family: sans-serif; background: var(--ace-bg, #f3e5f5); color: var(--ace-purple, #4a148c); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; border: 0.5px solid #ce93d8; }
      .story-hdr h1 { font-size: 8.5px; color: var(--ace-purple, #4a148c); font-weight: bold; margin-top: 2px; }
      .archetype { font-family: sans-serif; font-size: 3.2px; color: var(--ace-purple, #ab47bc); font-weight: 600; }
      .pipeline-card { font-family: sans-serif; background: var(--ace-bg, #f3e5f5); border-left: 2px solid #ab47bc; padding: 3px; font-size: 3.5px; color: var(--ace-purple, #4a148c); margin-bottom: 4px; }
      .chapter-block h2 { font-size: 4.8px; color: var(--ace-purple, #4a148c); border-bottom: 0.5px solid #e1bee7; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.4; }
    `
	},

	// 3. Adversarial LLM Debate / Argument Script (Reflects argueLlama)
	{
		id: 'ai-llm-argument-script',
		title: 'Adversarial LLM debate',
		styleVariant: 'Multi-LLM Debate',
		htmlContent: `
      <header class="arg-hdr">
        <span class="deceive-badge">Adversarial Loop</span>
        <h1>MULTI-LLM DEBATE LOG</h1>
        <p class="sub">LLM A (Prompting) vs LLM B (Deceive/Contrarian Model)</p>
      </header>
      <main class="arg-body">
        <div class="turn-box llm-a">
          <p class="speaker">LLM Alpha [Primary Model]:</p>
          <p>"Standardized web layout engines provide superior predictability across viewports."</p>
        </div>
        <div class="turn-box llm-b">
          <p class="speaker">LLM Beta [Deceive / Contrarian]:</p>
          <p>"Contrarily, rigid standardization restricts adaptive responsive design architectures..."</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .arg-hdr { border-bottom: 1.5px solid #d32f2f; padding-bottom: 3px; margin-bottom: 5px; }
      .deceive-badge { background: var(--ace-bg, #ffebee); color: var(--ace-pink, #d32f2f); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border: 0.5px solid #ef9a9a; border-radius: 1px; }
      .arg-hdr h1 { font-size: 8.5px; color: var(--ace-pink, #b71c1c); font-weight: 800; margin-top: 2px; }
      .sub { font-size: 3.2px; color: var(--ace-pink, #e53935); }
      .turn-box { padding: 3px; margin-bottom: 3px; border-radius: 2px; font-size: 3.6px; }
      .turn-box.llm-a { background: var(--ace-bg, #e3f2fd); border-left: 2px solid #1976d2; color: var(--ace-blue, #0d47a1); }
      .turn-box.llm-b { background: var(--ace-bg, #ffebee); border-left: 2px solid #d32f2f; color: var(--ace-pink, #b71c1c); }
      .speaker { font-weight: bold; font-size: 3.2px; margin-bottom: 1px; }
      p { font-size: 3.6px; line-height: 1.3; }
    `
	},

	// 4. Multi-Stage SEO Article Serial Prompt Blueprint
	{
		id: 'ai-seo-content-pipeline',
		title: 'SEO Content serial prompt',
		styleVariant: 'Serial Prompting',
		htmlContent: `
      <header class="seo-hdr">
        <span class="badge">Content Factory</span>
        <h1>MULTI-STAGE SEO ARTICLE BLUEPRINT</h1>
        <p class="sub">Outline &rarr; Keyword Insertion &rarr; Draft &rarr; Readability Pass</p>
      </header>
      <main class="seo-body">
        <div class="pipeline-grid">
          <div class="p-card">1. Keyword Cluster</div>
          <div class="p-card">2. H2/H3 Structure</div>
          <div class="p-card">3. FAQ Generation</div>
        </div>
        <section class="clause">
          <h2>Target Keywords</h2>
          <p>Primary: <code>canvas scroller</code> &bull; Secondary: <code>DOM virtualization</code>, <code>web layout</code></p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .seo-hdr { background: #00796b; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .badge { background: var(--ace-bg, #80cbc4); color: var(--ace-foreground, #004d40); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .seo-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .sub { font-size: 3.2px; color: var(--ace-bg, #e0f2f1); }
      .pipeline-grid { display: flex; gap: 3px; margin: 4px 0; }
      .p-card { flex: 1; background: var(--ace-bg, #e0f2f1); border-left: 1.5px solid #00796b; padding: 2px; font-size: 3.2px; color: var(--ace-foreground, #004d40); font-weight: bold; text-align: center; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #00796b; border-bottom: 0.5px solid #b2dfdb; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
      code { background: var(--ace-bg, #eceff1); padding: 0.5px 2px; border-radius: 1px; font-family: monospace; font-size: 3.2px; }
    `
	},

	// 5. Code Refactoring & System Architecture Prompt Template
	{
		id: 'ai-code-refactor-pipeline',
		title: 'Code refactoring prompt',
		styleVariant: 'Developer AI',
		htmlContent: `
      <header class="code-hdr">
        <span class="code-tag">AST / LLM Pass</span>
        <h1>SYSTEM ARCHITECTURE REFACTORING PIPELINE</h1>
      </header>
      <main class="code-body">
        <div class="step-card">
          <p><strong>PASS 1:</strong> Dependency Graph Extraction & Imports Analysis</p>
          <p><strong>PASS 2:</strong> Type Safety & Strict Flag Enforcement</p>
        </div>
        <section>
          <h2>Refactored Output</h2>
          <pre><code>async function executePipeline(prompt, model) {
  const result = await model(prompt);
  return result.trim();
}</code></pre>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .code-hdr { border-bottom: 2px solid #263238; padding-bottom: 3px; margin-bottom: 5px; }
      .code-tag { background: var(--ace-bg, #eceff1); color: var(--ace-foreground, #263238); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border: 0.5px solid #cfd8dc; border-radius: 1px; }
      .code-hdr h1 { font-size: 8px; color: var(--ace-foreground, #263238); font-weight: 800; margin-top: 2px; }
      .step-card { background: var(--ace-bg, #eceff1); padding: 3px; font-size: 3.5px; border-left: 2px solid #263238; color: var(--ace-foreground, #263238); margin-bottom: 4px; }
      section h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #263238); margin: 3px 0 1px 0; }
      pre { background: var(--ace-foreground, #1e1e1e); color: var(--ace-bg, #d4d4d4); padding: 4px; border-radius: 2px; font-family: 'Courier New', monospace; font-size: 3.2px; overflow-x: auto; }
    `
	},

	// 6. Marketing Copy & Persona Expansion Generator
	{
		id: 'ai-marketing-persona-prompt',
		title: 'Marketing copy generator',
		styleVariant: 'Serial Prompting',
		htmlContent: `
      <header class="mkt-hdr">
        <span class="mkt-badge">Serial Persona Chain</span>
        <h1>MARKETING COPY & PERSONA SCRIPT</h1>
      </header>
      <main class="mkt-body">
        <section class="persona-box">
          <h2>Target Persona: Enterprise CTO</h2>
          <p>Core Pain Point: Frame rate stutter on heavy canvas documents.</p>
        </section>
        <section class="clause">
          <h2>Generated Headline Options</h2>
          <p>1. "60FPS Document Virtualization Without Main-Thread Stutter."</p>
          <p>2. "Unshackle Your Web Authoring Canvas with Offscreen Workers."</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .mkt-hdr { border-bottom: 1.5px solid #e65100; padding-bottom: 3px; margin-bottom: 5px; }
      .mkt-badge { background: var(--ace-bg, #fff3e0); color: #e65100; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .mkt-hdr h1 { font-size: 8.5px; color: #e65100; font-weight: 800; margin-top: 2px; }
      .persona-box { background: var(--ace-bg, #fff3e0); border-left: 2px solid #e65100; padding: 3px; font-size: 3.8px; color: #e65100; margin-bottom: 4px; }
      .persona-box h2 { font-size: 4.2px; font-weight: bold; margin-bottom: 1px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #e65100; border-bottom: 0.5px solid #ffe0b2; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 7. Academic Research Paper Summarizer & Serial Digest
	{
		id: 'ai-academic-digest-prompt',
		title: 'Academic paper digest',
		styleVariant: 'LLM Digest Pass',
		htmlContent: `
      <header class="dig-hdr">
        <span class="dig-tag">Serial Digest</span>
        <h1>ACADEMIC PAPER ANALYSIS PIPELINE</h1>
      </header>
      <main class="dig-body">
        <div class="summary-card">
          <p><strong>PASS 1 SUMMARY:</strong> Extracted core claims regarding DOM virtualization.</p>
          <p><strong>PASS 2 SUMMARY:</strong> Verified methodology and statistical confidence intervals.</p>
        </div>
        <section>
          <h2>Key Findings Digest</h2>
          <p>&bull; Offscreen canvas passes reduce main-thread blockage by 84%.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .dig-hdr { border-bottom: 1px solid #1a237e; padding-bottom: 3px; margin-bottom: 5px; }
      .dig-tag { font-family: sans-serif; background: var(--ace-bg, #e8eaf6); color: #1a237e; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .dig-hdr h1 { font-size: 8px; color: #1a237e; font-weight: bold; margin-top: 2px; }
      .summary-card { font-family: sans-serif; background: var(--ace-bg, #e8eaf6); padding: 3px; border-left: 2px solid #1a237e; font-size: 3.5px; color: #1a237e; margin-bottom: 4px; }
      section h2 { font-size: 4.5px; color: #1a237e; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #c5cae9; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.35; }
    `
	},

	// 8. Technical Specification & API Prompt Generator
	{
		id: 'ai-tech-spec-generator',
		title: 'Technical spec generator',
		styleVariant: 'Serial Prompting',
		htmlContent: `
      <header class="spec-hdr">
        <span class="spec-badge">LLM Spec Builder</span>
        <h1>SYSTEM API SPECIFICATION BLUEPRINT</h1>
      </header>
      <main class="spec-body">
        <section class="clause">
          <h2>1. Endpoint Definitions</h2>
          <p>Sequential generation of REST & WebSocket endpoints for remote document streaming.</p>
        </section>
        <section class="clause">
          <h2>2. Data Schema Definition</h2>
          <p>Generated JSON schemas for template gallery widget payload initialization.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .spec-hdr { background: var(--ace-foreground, #37474f); color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .spec-badge { background: var(--ace-bg, #cfd8dc); color: var(--ace-foreground, #263238); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .spec-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #37474f); border-bottom: 0.5px solid #cfd8dc; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 9. Automated Script & Dialogue Prompt Pipeline
	{
		id: 'ai-script-dialogue-prompt',
		title: 'Dialogue & script builder',
		styleVariant: 'Creative Fiction',
		htmlContent: `
      <header class="scr-hdr">
        <span class="scr-tag">Dialogue Loop</span>
        <h1>INTERACTIVE DIALOGUE SCRIPT</h1>
      </header>
      <main class="scr-body">
        <div class="scene-box">
          <p><strong>SCENE 1:</strong> Laboratory Interior &bull; Night</p>
        </div>
        <section class="dialogue">
          <p><strong>ALEX:</strong> "The scroller is rendering at full capacity."</p>
          <p><strong>JORDAN:</strong> "Verify the offscreen canvas worker memory bounds first."</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, monospace; }
      .scr-hdr { border-bottom: 1.5px solid #000; padding-bottom: 3px; margin-bottom: 5px; }
      .scr-tag { background: var(--ace-bg, #e0e0e0); color: var(--ace-foreground, #000); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .scr-hdr h1 { font-size: 8px; font-weight: bold; color: var(--ace-foreground, #000); margin-top: 2px; }
      .scene-box { background: var(--ace-bg, #f5f5f5); border: 0.5px solid #ccc; padding: 3px; font-size: 3.5px; margin-bottom: 4px; text-align: center; }
      .dialogue p { font-size: 3.8px; color: var(--ace-foreground, #111); margin-bottom: 3px; line-height: 1.3; }
    `
	},

	// 10. Multi-Language Serial Translation & Localization Chain
	{
		id: 'ai-translation-localization-chain',
		title: 'Multi-language translation chain',
		styleVariant: 'Serial Prompting',
		htmlContent: `
      <header class="loc-hdr">
        <span class="loc-badge">Localization Pass</span>
        <h1>MULTI-LANGUAGE TRANSLATION PIPELINE</h1>
      </header>
      <main class="loc-body">
        <div class="lang-grid">
          <div class="lang-card">&check; English (Source)</div>
          <div class="lang-card">&check; Spanish (Pass 1)</div>
          <div class="lang-card">&check; Japanese (Pass 2)</div>
        </div>
        <section class="clause">
          <h2>Context-Preserving Translation</h2>
          <p>Serial prompts preserve technical terminology definitions across localized output schemas.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .loc-hdr { border-bottom: 1.5px solid #283593; padding-bottom: 3px; margin-bottom: 5px; }
      .loc-badge { background: var(--ace-bg, #e8eaf6); color: var(--ace-blue, #283593); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .loc-hdr h1 { font-size: 8.5px; color: var(--ace-blue, #283593); font-weight: 800; margin-top: 2px; }
      .lang-grid { display: flex; gap: 2px; margin: 4px 0; }
      .lang-card { flex: 1; background: var(--ace-bg, #e8eaf6); font-size: 3.2px; color: var(--ace-blue, #283593); font-weight: bold; text-align: center; padding: 2px; border-radius: 1px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-blue, #283593); border-bottom: 0.5px solid #c5cae9; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	}
];

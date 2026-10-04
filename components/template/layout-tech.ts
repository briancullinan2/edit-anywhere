import type { ITemplateItem } from "./template";

export const TECHNICAL_DIAGRAMS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'code-syntax-highlighted-block',
		title: 'Syntax highlighted code window',
		styleVariant: 'Code Window',
		htmlContent: `
      <div class="code-win">
        <div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span> <em>selectLLM.js</em></div>
        <pre><code>const model = await selectModel('Qwen');</code></pre>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; }
      .code-win { background: #1e1e1e; color: #d4d4d4; padding: 3px; border-radius: 3px; }
      .bar { border-bottom: 0.5px solid #333; padding-bottom: 2px; font-size: 2.8px; color: #888; margin-bottom: 2px; }
      .dot { display: inline-block; width: 3px; height: 3px; background: #ff5f56; border-radius: 50%; margin-right: 1px; }
      pre { margin: 0; font-size: 3.2px; color: #ce9178; }
    `
	},
	{
		id: 'diagram-ascii-architecture-box',
		title: 'ASCII architecture diagram box',
		styleVariant: 'ASCII Diagram',
		htmlContent: `
      <div class="ascii-box">
        <pre>+----------+     +------------+
| Browser  | --> | WebSockets |
+----------+     +------------+</pre>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #000; color: #00ff00; }
      pre { margin: 0; font-size: 3px; line-height: 1.1; }
    `
	},
	{
		id: 'math-formula-latex-callout',
		title: 'Mathematical formula callout',
		styleVariant: 'Math LaTeX',
		htmlContent: `
      <div class="math-box">
        <div class="eq">E = mc<sup>2</sup></div>
        <p>Mass-energy equivalence equation.</p>
      </div>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', serif; box-sizing: border-box; padding: 4px; background: #f8fafc; border: 0.5px solid #cbd5e1; text-align: center; }
      .eq { font-size: 6px; font-weight: bold; color: #0f172a; margin-bottom: 2px; }
      p { font-size: 3px; font-family: sans-serif; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'tech-terminal-cli-command',
		title: 'CLI Command terminal prompt',
		styleVariant: 'Terminal Prompt',
		htmlContent: `
      <div class="cli-prompt">
        <span class="usr">brian@host:~$</span> <code>git rebase -i upstream/main</code>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 3px 4px; background: #0f172a; color: #f8fafc; font-size: 3.2px; }
      .usr { color: #22c55e; font-weight: bold; }
      code { color: #38bdf8; }
    `
	},
	{
		id: 'tech-api-endpoint-badge',
		title: 'API Endpoint request box',
		styleVariant: 'API Badge',
		htmlContent: `
      <div class="api-box">
        <span class="mth">POST</span> <code>/api/v1/select-model</code>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 3px; background: #f1f5f9; border: 0.5px solid #cbd5e1; display: flex; align-items: center; gap: 3px; }
      .mth { background: #16a34a; color: #fff; font-size: 2.8px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      code { font-size: 3.2px; color: #0f172a; }
    `
	},
	{
		id: 'tech-data-schema-json',
		title: 'JSON Data schema block',
		styleVariant: 'JSON Schema',
		htmlContent: `
      <div class="json-schema">
        <pre>{ "model": "Qwen2.5", "temp": 0.7 }</pre>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #18181b; color: #a1a1aa; font-size: 3px; }
      pre { margin: 0; color: #a78bfa; }
    `
	},
	{
		id: 'tech-flow-step-horizontal',
		title: 'Horizontal pipeline data flow',
		styleVariant: 'Pipeline Flow',
		htmlContent: `
      <div class="pipe">
        <span>XLSX</span> &rarr; <span>Range Extract</span> &rarr; <span>LLM Elaborate</span>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #f0fdf4; border: 0.5px solid #bbf7d0; font-size: 3px; color: #166534; text-align: center; }
      span { font-weight: bold; background: #dcfce7; padding: 1px 3px; }
    `
	},
	{
		id: 'tech-keyboard-shortcut-pills',
		title: 'Keyboard shortcut key pills',
		styleVariant: 'Keyboard Pills',
		htmlContent: `
      <div class="keys">
        Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open command palette.
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; font-size: 3.2px; color: #334155; }
      kbd { background: #e2e8f0; border: 0.5px solid #94a3b8; border-bottom-width: 1.5px; border-radius: 2px; padding: 1px 3px; font-family: monospace; font-size: 2.8px; }
    `
	},
	{
		id: 'tech-log-output-stream',
		title: 'Stdout build log console',
		styleVariant: 'Build Console',
		htmlContent: `
      <div class="build-log">
        <p>[INFO] Compiling Webpack bundle...</p>
        <p class="ok">[SUCCESS] 0 errors, 0 warnings.</p>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #000; color: #aaa; font-size: 2.8px; }
      p { margin: 0; }
      .ok { color: #22c55e; }
    `
	},
	{
		id: 'tech-diff-comparison-block',
		title: 'Git diff change block',
		styleVariant: 'Git Diff',
		htmlContent: `
      <div class="diff">
        <p class="del">- const model = 'Llama';</p>
        <p class="add">+ const model = 'Qwen2.5';</p>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #1e293b; font-size: 3px; }
      p { margin: 0; }
      .del { color: #f87171; background: rgba(239,68,68,0.1); }
      .add { color: #4ade80; background: rgba(34,197,94,0.1); }
    `
	}
];

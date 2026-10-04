import type { ITemplateItem } from "./template";

export const INDEX_GLOSSARY_TEMPLATES: ITemplateItem[] = [
	{
		id: 'glossary-alphabetical-grid',
		title: 'Alphabetical glossary grid',
		styleVariant: 'A-Z Grid',
		htmlContent: `
      <div class="glossary-grid">
        <div class="alpha-group">
          <div class="letter-badge">A</div>
          <dl class="terms">
            <dt>Algorithm</dt><dd>A step-by-step procedure for solving a problem.</dd>
            <dt>API</dt><dd>Application Programming Interface for data exchange.</dd>
          </dl>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .glossary-grid { padding: 4px; background: #fff; }
      .alpha-group { display: flex; gap: 4px; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 3px; }
      .letter-badge { background: #0f172a; color: #fff; width: 10px; height: 10px; font-size: 5px; font-weight: bold; display: flex; align-items: center; justify-content: center; }
      .terms dt { font-size: 3.8px; font-weight: bold; color: #0284c7; }
      .terms dd { font-size: 3.2px; color: #334155; margin: 0 0 2px 0; }
    `
	},
	{
		id: 'index-three-column-dense',
		title: 'Three-column book index',
		styleVariant: 'Dense 3-Col',
		htmlContent: `
      <div class="index-dense">
        <h2>INDEX</h2>
        <div class="cols">
          <div class="col"><p>Abstraction, 12, 45</p><p>Algorithms, 88</p></div>
          <div class="col"><p>Bandwidth, 102</p><p>Buffer, 14, 19</p></div>
          <div class="col"><p>Cache, 201</p><p>Compiler, 310</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', serif; box-sizing: border-box; }
      .index-dense { padding: 4px; font-size: 3px; }
      .index-dense h2 { font-size: 5px; text-align: center; margin-bottom: 3px; border-bottom: 0.5px solid #000; }
      .cols { display: flex; gap: 3px; }
      .col { flex: 1; }
      .col p { margin-bottom: 1px; color: #111; }
    `
	},
	{
		id: 'glossary-card-list',
		title: 'Modern definition cards',
		styleVariant: 'Card Stack',
		htmlContent: `
      <div class="def-cards">
        <div class="card">
          <span class="term">HYDRATION</span>
          <span class="pos">noun</span>
          <p>The process of attaching event listeners to static HTML.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .def-cards { padding: 4px; background: #f8fafc; }
      .card { background: #fff; border: 0.5px solid #cbd5e1; border-left: 2px solid #a855f7; padding: 3px; }
      .term { font-size: 4px; font-weight: bold; color: #581c87; }
      .pos { font-size: 2.8px; font-style: italic; color: #9333ea; margin-left: 2px; }
      .card p { font-size: 3.2px; color: #334155; margin-top: 1px; }
    `
	},
	{
		id: 'index-subject-cross-reference',
		title: 'Cross-referenced index',
		styleVariant: 'Cross Ref',
		htmlContent: `
      <div class="index-xref">
        <div class="entry"><strong>Data Structures</strong>, 14-22</div>
        <div class="sub-entry">&mdash; <em>See also</em> Trees, Graphs</div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .entry { font-size: 3.8px; color: #0f172a; }
      .sub-entry { font-size: 3.2px; color: #475569; padding-left: 4px; }
    `
	},
	{
		id: 'glossary-sidebar-callout',
		title: 'Key terms sidebar glossary',
		styleVariant: 'Sidebar Callout',
		htmlContent: `
      <aside class="glossary-side">
        <h3>KEY TERMS</h3>
        <p><strong>Latency:</strong> The time delay in data transmission.</p>
      </aside>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .glossary-side { background: #fef3c7; border: 0.5px solid #f59e0b; padding: 3px; width: 100%; }
      .glossary-side h3 { font-size: 3.8px; color: #b45309; margin: 0 0 2px 0; border-bottom: 0.5px solid #f59e0b; }
      .glossary-side p { font-size: 3.2px; color: #78350f; margin: 0; }
    `
	},
	{
		id: 'index-visual-page-badges',
		title: 'Visual badge index',
		styleVariant: 'Page Badges',
		htmlContent: `
      <div class="badge-index">
        <div class="row"><span class="title">WebSockets</span><span class="badge">p.42</span><span class="badge">p.88</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .row { display: flex; align-items: center; justify-content: space-between; font-size: 3.5px; border-bottom: 0.5px solid #e2e8f0; padding: 2px 0; }
      .title { font-weight: 600; color: #1e293b; }
      .badge { background: #e0f2fe; color: #0369a1; padding: 1px 3px; border-radius: 2px; font-size: 3px; font-weight: bold; }
    `
	},
	{
		id: 'glossary-two-column-definitions',
		title: 'Two-column definition pairs',
		styleVariant: 'Side-by-Side',
		htmlContent: `
      <div class="gloss-dual">
        <div class="pair"><div class="dt">DOM</div><div class="dd">Document Object Model tree structure.</div></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .pair { display: flex; gap: 4px; border-bottom: 0.5px solid #ddd; padding: 2px 0; }
      .dt { font-size: 3.8px; font-weight: bold; width: 20px; color: #0d9488; }
      .dd { font-size: 3.2px; flex: 1; color: #334155; }
    `
	},
	{
		id: 'index-category-grouped',
		title: 'Categorized subject index',
		styleVariant: 'Grouped Categories',
		htmlContent: `
      <div class="cat-index">
        <h4>NETWORKING</h4>
        <p>HTTP/3 (14), TCP Sockets (99), TLS Handshake (104)</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .cat-index h4 { font-size: 4px; background: #334155; color: #fff; padding: 1px 3px; margin: 0 0 2px 0; }
      .cat-index p { font-size: 3.2px; color: #475569; margin: 0; }
    `
	},
	{
		id: 'glossary-code-terms',
		title: 'Developer API code glossary',
		styleVariant: 'Monospace Code',
		htmlContent: `
      <div class="code-gloss">
        <code>selectModel(name)</code>
        <p>Dynamic GGUF model loader and bindings generator.</p>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; background: #1e293b; color: #f8fafc; }
      code { font-size: 3.8px; color: #38bdf8; font-weight: bold; }
      p { font-size: 3.2px; color: #94a3b8; margin-top: 1px; }
    `
	},
	{
		id: 'index-timeline-chronological',
		title: 'Chronological timeline index',
		styleVariant: 'Chrono Index',
		htmlContent: `
      <div class="chrono-idx">
        <div class="yr"><span>1995</span><p>JavaScript Released (p. 2)</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .yr { display: flex; gap: 4px; font-size: 3.5px; border-left: 2px solid #ec4899; padding-left: 3px; }
      .yr span { font-weight: bold; color: #be185d; }
      .yr p { color: #334155; margin: 0; }
    `
	}
];

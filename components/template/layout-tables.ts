import type { ITemplateItem } from './template';

export const TOC_FRONT_MATTER_TEMPLATES: ITemplateItem[] = [
	{
		id: 'toc-classic-leader-dots',
		title: 'Classic TOC with leader dots',
		styleVariant: 'Classic Editorial',
		htmlContent: `
      <div class="toc-container">
        <h2>Table of Contents</h2>
        <ul class="toc-list">
          <li><span class="ch-title">Chapter 1: The First Spark</span><span class="ch-dots"></span><span class="ch-pg">1</span></li>
          <li><span class="ch-title">Chapter 2: Architectural Foundations</span><span class="ch-dots"></span><span class="ch-pg">14</span></li>
          <li><span class="ch-title">Chapter 3: Asynchronous Systems</span><span class="ch-dots"></span><span class="ch-pg">42</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .toc-container { background: #fff; padding: 6px; border: 1px solid #e0e0e0; }
      .toc-container h2 { font-size: 7px; font-weight: bold; border-bottom: 1.5px solid #000; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase; }
      .toc-list { list-style: none; padding: 0; margin: 0; }
      .toc-list li { display: flex; align-items: baseline; font-size: 3.8px; margin-bottom: 3px; }
      .ch-title { white-space: nowrap; font-weight: 500; }
      .ch-dots { flex: 1; border-bottom: 0.8px dotted #888; margin: 0 3px; }
      .ch-pg { font-family: monospace; font-size: 3.5px; font-weight: bold; }
    `
	},
	{
		id: 'toc-modern-grid-tiles',
		title: 'Modern grid block TOC',
		styleVariant: 'Grid Tiles',
		htmlContent: `
      <div class="toc-tiles-container">
        <header><h1>CONTENTS</h1></header>
        <div class="tile-grid">
          <div class="tile"><span class="num">01</span><p>Introduction</p></div>
          <div class="tile"><span class="num">02</span><p>Core Methods</p></div>
          <div class="tile"><span class="num">03</span><p>Case Studies</p></div>
          <div class="tile"><span class="num">04</span><p>Appendix</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .toc-tiles-container { background: #0f172a; color: #fff; padding: 6px; }
      header h1 { font-size: 6.5px; letter-spacing: 1px; color: #38bdf8; margin-bottom: 4px; }
      .tile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; }
      .tile { background: #1e293b; padding: 3px; border-left: 2px solid #38bdf8; }
      .num { font-size: 5px; font-weight: 900; color: #38bdf8; display: block; }
      .tile p { font-size: 3.5px; color: #94a3b8; margin-top: 1px; }
    `
	},
	{
		id: 'toc-timeline-vertical',
		title: 'Vertical timeline TOC',
		styleVariant: 'Vertical Line',
		htmlContent: `
      <div class="toc-timeline">
        <div class="timeline-item">
          <div class="node">1</div>
          <div class="info"><h3>Part I: Genesis</h3><p>Page 5 &bull; 3 Chapters</p></div>
        </div>
        <div class="timeline-item">
          <div class="node">2</div>
          <div class="info"><h3>Part II: Execution</h3><p>Page 48 &bull; 5 Chapters</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .toc-timeline { padding: 4px; position: relative; }
      .toc-timeline::before { content: ''; position: absolute; left: 8px; top: 8px; bottom: 8px; width: 1px; background: #cbd5e1; }
      .timeline-item { display: flex; align-items: center; margin-bottom: 4px; position: relative; z-index: 1; }
      .node { width: 9px; height: 9px; background: #2563eb; color: #fff; border-radius: 50%; font-size: 3.5px; font-weight: bold; display: flex; align-items: center; justify-content: center; margin-right: 4px; }
      .info h3 { font-size: 4px; font-weight: bold; color: #0f172a; margin: 0; }
      .info p { font-size: 3.2px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'toc-magazine-sidebar-feature',
		title: 'Magazine sidebar TOC',
		styleVariant: 'Editorial Magazine',
		htmlContent: `
      <div class="toc-mag">
        <aside class="sidebar">
          <h2>THIS ISSUE</h2>
          <span class="vol">VOL. 42</span>
        </aside>
        <div class="main-list">
          <div class="entry"><span class="pg">12</span><div><h4>THE FUTURE OF COMPUTING</h4><p>An in-depth analysis of browser rendering engines.</p></div></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', sans-serif; box-sizing: border-box; }
      .toc-mag { display: flex; gap: 4px; padding: 4px; background: #f8fafc; border: 0.5px solid #e2e8f0; }
      .sidebar { background: #000; color: #fff; padding: 3px; text-align: center; width: 25px; }
      .sidebar h2 { font-size: 4px; font-weight: 900; }
      .sidebar .vol { font-size: 3px; color: #ef4444; }
      .main-list { flex: 1; }
      .entry { display: flex; gap: 3px; margin-bottom: 3px; }
      .pg { font-size: 6px; font-weight: 900; color: #ef4444; }
      .entry h4 { font-size: 3.8px; font-weight: bold; margin: 0; }
      .entry p { font-size: 3px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'toc-accordion-hierarchical',
		title: 'Hierarchical nested TOC',
		styleVariant: 'Nested Tree',
		htmlContent: `
      <div class="toc-tree">
        <div class="section-head">SECTION 1: SYSTEM SETUP</div>
        <ul class="sub-tree">
          <li>1.1 Environment Configuration <span>p. 4</span></li>
          <li>1.2 Package Dependencies <span>p. 9</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; }
      .toc-tree { padding: 4px; background: #f1f5f9; border: 1px solid #cbd5e1; }
      .section-head { font-size: 4px; font-weight: bold; background: #e2e8f0; padding: 2px; color: #334155; }
      .sub-tree { list-style: none; padding-left: 6px; margin: 3px 0; }
      .sub-tree li { font-size: 3.4px; color: #475569; display: flex; justify-content: space-between; margin-bottom: 2px; }
      .sub-tree li span { color: #94a3b8; }
    `
	},
	{
		id: 'toc-two-column-index',
		title: 'Two-column balanced TOC',
		styleVariant: 'Dual Column',
		htmlContent: `
      <div class="toc-dual">
        <h2>Contents Overview</h2>
        <div class="cols">
          <div class="col">
            <p><strong>01</strong> Overview <em>p.1</em></p>
            <p><strong>02</strong> Setup <em>p.5</em></p>
          </div>
          <div class="col">
            <p><strong>03</strong> Modules <em>p.12</em></p>
            <p><strong>04</strong> Testing <em>p.20</em></p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .toc-dual { padding: 4px; border: 0.5px solid #ccc; }
      .toc-dual h2 { font-size: 5px; text-align: center; border-bottom: 0.5px solid #333; padding-bottom: 2px; margin-bottom: 3px; }
      .cols { display: flex; gap: 6px; }
      .col { flex: 1; }
      .col p { font-size: 3.5px; margin-bottom: 2px; display: flex; justify-content: space-between; }
      .col strong { color: #2563eb; }
      .col em { font-style: normal; color: #666; }
    `
	},
	{
		id: 'toc-minimalist-sans',
		title: 'Minimalist Swiss TOC',
		styleVariant: 'Swiss Minimal',
		htmlContent: `
      <div class="toc-swiss">
        <div class="row"><span>01</span><h3>PREAMBLE</h3><span>003</span></div>
        <div class="row"><span>02</span><h3>FOUNDATIONS</h3><span>012</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Arial, sans-serif; box-sizing: border-box; }
      .toc-swiss { padding: 6px; background: #fff; }
      .row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #000; padding: 3px 0; }
      .row span { font-size: 3.5px; font-weight: bold; color: #666; }
      .row h3 { font-size: 4.5px; font-weight: 900; margin: 0; letter-spacing: 0.5px; }
    `
	},
	{
		id: 'toc-thumbnail-preview',
		title: 'Visual thumbnail TOC',
		styleVariant: 'Image Previews',
		htmlContent: `
      <div class="toc-thumbs">
        <div class="item">
          <div class="img-ph">[IMG]</div>
          <div class="meta"><h4>01. LANDSCAPES</h4><p>Page 14</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .toc-thumbs { padding: 4px; }
      .item { display: flex; gap: 4px; align-items: center; background: #f8fafc; padding: 2px; border: 0.5px solid #e2e8f0; }
      .img-ph { width: 14px; height: 10px; background: #cbd5e1; font-size: 2.5px; display: flex; align-items: center; justify-content: center; color: #475569; }
      .meta h4 { font-size: 3.8px; margin: 0; color: #0f172a; }
      .meta p { font-size: 3px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'toc-chapter-summary-blocks',
		title: 'Expanded synopsis TOC',
		styleVariant: 'Expanded Synopsis',
		htmlContent: `
      <div class="toc-synopsis">
        <div class="ch-block">
          <div class="hdr"><span>CHAPTER ONE</span> <strong>P. 1</strong></div>
          <p>An examination of early structural paradigms and layout patterns.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .toc-synopsis { padding: 4px; }
      .ch-block { border-left: 1.5px solid #991b1b; padding-left: 4px; margin-bottom: 4px; }
      .hdr { display: flex; justify-content: space-between; font-size: 3.8px; font-weight: bold; color: #991b1b; }
      .ch-block p { font-size: 3.2px; color: #451a03; margin-top: 1px; font-style: italic; }
    `
	},
	{
		id: 'toc-numbered-index-banner',
		title: 'Banner header TOC',
		styleVariant: 'Header Banner',
		htmlContent: `
      <div class="toc-banner">
        <div class="top-bar">TABLE OF CONTENTS</div>
        <div class="list">
          <div class="line"><span>01 &bull; INTRODUCTION</span><em>PAGE 03</em></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .toc-banner { border: 1px solid #1e3a8a; }
      .top-bar { background: #1e3a8a; color: #fff; font-size: 4px; font-weight: bold; padding: 2px 4px; text-align: center; }
      .list { padding: 4px; }
      .line { display: flex; justify-content: space-between; font-size: 3.5px; border-bottom: 0.5px dashed #93c5fd; padding: 2px 0; }
      .line em { font-style: normal; color: #1e3a8a; font-weight: bold; }
    `
	}
];

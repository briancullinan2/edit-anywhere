import type { ITemplateItem } from './template';

export const WORK_TEMPLATES: ITemplateItem[] = [
	// 1. Project Proposal Tropic (Teal Hero Banner & Key Metrics)
	{
		id: 'proposal-tropic',
		title: 'Project proposal',
		styleVariant: 'Tropic',
		htmlContent: `
      <div class="tropic-hero">
        <span class="badge">PROJECT PROPOSAL</span>
        <h1>NEXT-GEN PUBLISHING ENGINE</h1>
        <p class="subtitle">Prepared for Executive Leadership &bull; Q4 2026</p>
      </div>
      <main class="tropic-body">
        <section>
          <h2>Executive Summary</h2>
          <p>This proposal outlines the architecture for a virtualized document environment bridging markdown, rich components, and canvas drawing layers.</p>
        </section>
        <section>
          <h2>Key Deliverables</h2>
          <div class="deliverable-grid">
            <article class="card">
              <h3>01. Scroller</h3>
              <p>2-Pass Virtualized DOM Engine</p>
            </article>
            <article class="card">
              <h3>02. Canvas</h3>
              <p>Fabric.js Layer Integration</p>
            </article>
          </div>
        </section>
      </main>
    `,
		cssContent: `
      .tropic-hero { background: #00695c; color: var(--ace-bg, #fff); padding: 8px; margin: -10px -10px 6px -10px; }
      .badge { background: var(--ace-bg, #80cbc4); color: var(--ace-foreground, #004d40); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .tropic-hero h1 { font-size: 9px; margin-top: 2px; font-weight: bold; color: var(--ace-bg, #ffffff); }
      .subtitle { font-size: 3.8px; color: var(--ace-bg, #e0f2f1); }
      .tropic-body h2 { font-size: 5.5px; color: #00695c; border-bottom: 0.5px solid #b2dfdb; margin: 4px 0 2px 0; font-weight: bold; }
      p { font-size: 4px; color: var(--ace-foreground, #333); line-height: 1.3; }
      .deliverable-grid { display: flex; gap: 4px; margin-top: 3px; }
      .card { flex: 1; background: var(--ace-bg, #e0f2f1); padding: 4px; border-left: 2px solid #00695c; border-radius: 2px; }
      .card h3 { font-size: 4.5px; color: var(--ace-foreground, #004d40); font-weight: bold; }
    `
	},

	// 2. Project Proposal Spearmint (Green Top Accent Rule & Milestones Table)
	{
		id: 'proposal-spearmint',
		title: 'Project proposal',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="mint-hdr">
        <div class="top-line"></div>
        <h1>PRODUCT ROADMAP PROPOSAL</h1>
        <p>Author: Infrastructure Engineering</p>
      </header>
      <main class="mint-body">
        <section>
          <h2>Milestones & Timeline</h2>
          <table class="mint-table">
            <thead>
              <tr><th>Phase</th><th>Deliverable</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Phase 1</td><td>Virtual Scroller</td><td><span class="st-done">DONE</span></td></tr>
              <tr><td>Phase 2</td><td>Template Gallery</td><td><span class="st-active">IN PROGRESS</span></td></tr>
            </tbody>
          </table>
        </section>
      </main>
    `,
		cssContent: `
      .top-line { width: 100%; height: 2.5px; background: #2e7d32; margin-bottom: 4px; }
      .mint-hdr h1 { font-size: 9.5px; color: var(--ace-foreground, #1b5e20); font-weight: bold; }
      .mint-hdr p { font-size: 3.8px; color: #666; }
      .mint-body h2 { font-size: 5.2px; color: #2e7d32; border-bottom: 0.5px solid #a5d6a7; margin: 4px 0 2px 0; }
      .mint-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-top: 3px; }
      .mint-table th { background: var(--ace-bg, #c8e6c9); color: var(--ace-foreground, #1b5e20); text-align: left; padding: 2px; }
      .mint-table td { border-bottom: 0.5px solid #e8f5e9; padding: 2px; }
      .st-done { background: var(--ace-bg, #81c784); color: var(--ace-bg, #fff); padding: 0.5px 2px; border-radius: 1px; font-weight: bold; }
      .st-active { background: #ffb74d; color: var(--ace-bg, #fff); padding: 0.5px 2px; border-radius: 1px; font-weight: bold; }
    `
	},

	// 3. Meeting Notes Modern Writer (Monospace Agenda & Checklist)
	{
		id: 'notes-modern-writer',
		title: 'Meeting notes',
		styleVariant: 'Modern Writer',
		htmlContent: `
      <header class="notes-hdr">
        <h1>[SPRINT_SYNC_2026-10-24]</h1>
        <p>ATTENDEES: @alex, @jordan, @sam</p>
      </header>
      <main class="notes-body">
        <section>
          <h2>> AGENDA</h2>
          <p>1. Review Lumino widget tree integration.</p>
          <p>2. Benchmark offscreen PDF worker throughput.</p>
        </section>
        <section>
          <h2>> ACTION_ITEMS</h2>
          <ul class="task-list">
            <li>[x] Implement Template Gallery Widget</li>
            <li>[ ] Connect TinyMCE contenteditable leaves</li>
          </ul>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, monospace; }
      .notes-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-foreground, #212121); }
      .notes-hdr p { font-size: 3.5px; color: var(--ace-comment, #757575); margin-bottom: 5px; }
      .notes-body h2 { font-size: 5px; font-weight: bold; background: var(--ace-bg, #e0e0e0); padding: 1px 3px; color: var(--ace-foreground, #000); margin: 4px 0 2px 0; }
      .task-list { list-style: none; padding-left: 0; }
      .task-list li { font-size: 3.8px; color: var(--ace-foreground, #333); margin-bottom: 2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
    `
	},

	// 4. Meeting Notes Coral (Warm Header & Callout Box)
	{
		id: 'notes-coral',
		title: 'Meeting notes',
		styleVariant: 'Coral',
		htmlContent: `
      <header class="coral-notes-hdr">
        <h1>Design System Review</h1>
        <p class="meta">Date: Oct 24, 2026 &bull; Host: Studio Team</p>
      </header>
      <main class="coral-notes-body">
        <div class="highlight-box">
          <p><strong>KEY DECISION:</strong> Standardize all micro-templates with contenteditable leaf attributes.</p>
        </div>
        <section>
          <h2>Discussion Topics</h2>
          <p>&bull; Tag badge positioning inside mini DOM viewports.</p>
          <p>&bull; Offscreen worker DOM serialization limits.</p>
        </section>
      </main>
    `,
		cssContent: `
      .coral-notes-hdr { border-bottom: 1.5px solid #ff7043; padding-bottom: 3px; margin-bottom: 5px; }
      .coral-notes-hdr h1 { font-size: 9.5px; color: var(--ace-pink, #d84315); font-weight: bold; }
      .meta { font-size: 3.8px; color: var(--ace-comment, #8d6e63); }
      .highlight-box { background: var(--ace-bg, #fbe9e7); border-left: 2px solid #ff7043; padding: 4px; margin-bottom: 5px; border-radius: 2px; }
      .highlight-box p { font-size: 3.8px; color: var(--ace-pink, #d84315); }
      .coral-notes-body h2 { font-size: 5px; color: var(--ace-pink, #d84315); margin: 4px 0 2px 0; border-bottom: 0.5px solid #ffccbc; }
      p { font-size: 4px; color: var(--ace-foreground, #333); line-height: 1.3; }
    `
	},

	// 5. Onboarding Notes Spearmint (New Hire Checklist & Contact Card)
	{
		id: 'onboarding-spearmint',
		title: 'Onboarding notes',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="onb-hdr">
        <h1>TEAM ONBOARDING GUIDE</h1>
        <p>Welcome to the Systems Engineering Group</p>
      </header>
      <main class="onb-body">
        <section>
          <h2>First Week Checklist</h2>
          <ul class="check-list">
            <li>&check; Clone core repository & setup dependencies</li>
            <li>&check; Run local Lumino dev server</li>
            <li>&square; Submit first pull request</li>
          </ul>
        </section>
        <section>
          <h2>Key Contacts</h2>
          <div class="contact-card">
            <p><strong>Tech Lead:</strong> Alex Smith (Slack: @alex)</p>
          </div>
        </section>
      </main>
    `,
		cssContent: `
      .onb-hdr { background: var(--ace-bg, #e8f5e9); border-left: 3px solid #2e7d32; padding: 6px; margin: -10px -10px 6px -10px; }
      .onb-hdr h1 { font-size: 9px; color: var(--ace-foreground, #1b5e20); font-weight: bold; }
      .onb-hdr p { font-size: 3.8px; color: #388e3c; }
      .onb-body h2 { font-size: 5px; color: #2e7d32; border-bottom: 0.5px solid #a5d6a7; margin: 4px 0 2px 0; }
      .check-list { list-style: none; padding-left: 0; }
      .check-list li { font-size: 3.8px; color: var(--ace-foreground, #222); margin-bottom: 2px; }
      .contact-card { background: var(--ace-bg, #f1f8e9); padding: 3px; border-radius: 2px; border: 0.5px solid #c8e6c9; }
      .contact-card p { font-size: 3.8px; color: var(--ace-foreground, #1b5e20); }
    `
	},

	// 6. Brochure Geometric (3-Column Layout & Color Blocks)
	{
		id: 'brochure-geometric',
		title: 'Brochure',
		styleVariant: 'Geometric',
		htmlContent: `
      <div class="brochure-banner">
        <div class="geo-accent"></div>
        <h1>CLOUD PUBLISHING SUITE</h1>
      </div>
      <div class="cols-container">
        <div class="col">
          <h2>Authoring</h2>
          <p>Markdown, HTML, and Canvas cells in one notebook.</p>
        </div>
        <div class="col">
          <h2>Virtualization</h2>
          <p>Instant scrolling across hundreds of complex pages.</p>
        </div>
        <div class="col">
          <h2>PDF Export</h2>
          <p>Off-thread Web Worker rendering for print bundles.</p>
        </div>
      </div>
    `,
		cssContent: `
      .brochure-banner { position: relative; background: #311b92; color: var(--ace-bg, #fff); padding: 8px; margin: -10px -10px 6px -10px; overflow: hidden; }
      .geo-accent { position: absolute; right: -10px; top: -10px; width: 30px; height: 30px; background: #7c4dff; transform: rotate(45deg); }
      .brochure-banner h1 { font-size: 8.5px; font-weight: bold; letter-spacing: 0.5px; }
      .cols-container { display: flex; gap: 3px; }
      .col { flex: 1; background: var(--ace-bg, #f3e5f5); padding: 3px; border-radius: 2px; border-top: 1.5px solid #7b1fa2; }
      .col h2 { font-size: 4.5px; color: var(--ace-purple, #4a148c); font-weight: bold; margin-bottom: 2px; }
      .col p { font-size: 3.5px; color: var(--ace-foreground, #333); line-height: 1.25; }
    `
	},

	// 7. Newsletter Geometric (Multi-Article Grid with Featured Banner)
	{
		id: 'newsletter-geometric',
		title: 'Newsletter',
		styleVariant: 'Geometric',
		htmlContent: `
      <header class="news-hdr">
        <p class="issue">ISSUE #42 &bull; OCTOBER 2026</p>
        <h1>THE DEVELOPER DISPATCH</h1>
        <div class="hdr-rule"></div>
      </header>
      <main class="news-body">
        <article class="featured">
          <h2>Virtualizing Canvas Layouts</h2>
          <p>How offscreen DOM measurement pass eliminates viewport jank in multi-page web applications.</p>
        </article>
        <div class="news-grid">
          <article class="sub-art">
            <h3>TypeScript 5.x Tips</h3>
            <p>Strict flags for Webpack loaders.</p>
          </article>
          <article class="sub-art">
            <h3>Lumino DockPanel</h3>
            <p>Managing tab state effectively.</p>
          </article>
        </div>
      </main>
    `,
		cssContent: `
      .news-hdr { text-align: center; margin-bottom: 5px; }
      .issue { font-size: 3.5px; color: var(--ace-blue, #0288d1); font-weight: bold; letter-spacing: 0.5px; }
      .news-hdr h1 { font-size: 9.5px; font-weight: 900; color: var(--ace-blue, #01579b); margin: 1px 0; }
      .hdr-rule { width: 100%; height: 1px; background: #0288d1; }
      .featured { background: var(--ace-bg, #e1f5fe); padding: 4px; border-left: 2px solid #0288d1; margin-bottom: 4px; }
      .featured h2 { font-size: 5px; color: var(--ace-blue, #01579b); font-weight: bold; }
      .featured p { font-size: 3.8px; color: var(--ace-blue, #0277bd); }
      .news-grid { display: flex; gap: 4px; }
      .sub-art { flex: 1; background: var(--ace-bg, #fafafa); padding: 3px; border: 0.5px solid #e0e0e0; }
      .sub-art h3 { font-size: 4px; color: var(--ace-foreground, #333); font-weight: bold; }
      .sub-art p { font-size: 3.5px; color: #666; }
    `
	},

	// 8. Mutual NDA Add-on Template (Formal Legal Layout with Signatures)
	{
		id: 'nda-legalzoom',
		title: 'Mutual NDA',
		styleVariant: 'LegalZoom',
		htmlContent: `
      <header class="legal-hdr">
        <div class="partner-badge">LegalZoom &bull; DocuSign</div>
        <h1>MUTUAL NON-DISCLOSURE AGREEMENT</h1>
      </header>
      <main class="legal-body">
        <p class="recital">This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of October 24, 2026 ("Effective Date").</p>
        <section>
          <h2>1. Confidential Information</h2>
          <p>Each party agrees to protect all proprietary technical source code, component definitions, and system architectures from unauthorized disclosure.</p>
        </section>
        <div class="sig-block">
          <div class="sig-line"><p>Party A Signature</p></div>
          <div class="sig-line"><p>Party B Signature</p></div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; }
      .legal-hdr { text-align: center; border-bottom: 1px solid #333; padding-bottom: 3px; margin-bottom: 5px; }
      .partner-badge { font-family: sans-serif; font-size: 3.5px; background: #1565c0; color: var(--ace-bg, #fff); display: inline-block; padding: 1px 3px; border-radius: 1px; font-weight: bold; margin-bottom: 2px; }
      .legal-hdr h1 { font-size: 7.5px; font-weight: bold; color: var(--ace-foreground, #111); letter-spacing: 0.3px; }
      .recital { font-size: 3.8px; font-style: italic; color: var(--ace-foreground, #555); margin-bottom: 4px; }
      .legal-body h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #000); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
      .sig-block { display: flex; gap: 8px; margin-top: 8px; }
      .sig-line { flex: 1; border-top: 0.5px solid #000; padding-top: 2px; }
      .sig-line p { font-family: sans-serif; font-size: 3.5px; color: #666; }
    `
	},

	// 9. Business Process Manual Add-on (Diagram/Flowchart Visual Style)
	{
		id: 'manual-lucidchart',
		title: 'Business process manual',
		styleVariant: 'Lucidchart',
		htmlContent: `
      <header class="manual-hdr">
        <span class="addon-tag">Lucidchart</span>
        <h1>STANDARD OPERATING PROCEDURE</h1>
      </header>
      <main class="manual-body">
        <div class="flow-diagram">
          <div class="node">Source Code</div>
          <div class="arrow">&rarr;</div>
          <div class="node active">Virtual Scroller</div>
          <div class="arrow">&rarr;</div>
          <div class="node">PDF Bundle</div>
        </div>
        <section>
          <h2>Procedure Steps</h2>
          <p>1. Ingest raw document markdown into cell model array.</p>
          <p>2. Execute Pass-1 offscreen height discovery for virtual DOM pool positioning.</p>
        </section>
      </main>
    `,
		cssContent: `
      .manual-hdr { border-bottom: 1.5px solid #f57c00; padding-bottom: 3px; margin-bottom: 5px; }
      .addon-tag { background: var(--ace-bg, #fff3e0); color: #e65100; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border: 0.5px solid #ffe0b2; border-radius: 1px; }
      .manual-hdr h1 { font-size: 8.5px; color: #e65100; font-weight: bold; margin-top: 2px; }
      .flow-diagram { display: flex; align-items: center; justify-content: space-between; background: var(--ace-bg, #fafafa); padding: 4px; border: 0.5px solid #e0e0e0; margin-bottom: 5px; border-radius: 2px; }
      .node { font-size: 3.5px; background: var(--ace-bg, #ffffff); border: 0.5px solid #cccccc; padding: 2px 4px; border-radius: 2px; }
      .node.active { background: var(--ace-bg, #ffe0b2); border-color: #f57c00; font-weight: bold; color: #e65100; }
      .arrow { font-size: 5px; color: #f57c00; }
      .manual-body h2 { font-size: 4.8px; color: var(--ace-foreground, #333); font-weight: bold; margin-bottom: 2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #444); line-height: 1.3; }
    `
	},

	// 10. Consulting Agreement Add-on (PandaDoc Branded Contract Style)
	{
		id: 'agreement-pandadoc',
		title: 'Consulting agreement',
		styleVariant: 'PandaDoc',
		htmlContent: `
      <header class="agr-hdr">
        <span class="pd-tag">PandaDoc</span>
        <h1>CONSULTING SERVICES AGREEMENT</h1>
      </header>
      <main class="agr-body">
        <div class="agr-card">
          <p><strong>CLIENT:</strong> Enterprise Technologies Corp.</p>
          <p><strong>CONSULTANT:</strong> Systems Architecture Group LLC</p>
        </div>
        <section>
          <h2>Scope of Services</h2>
          <p>Consultant shall provide expert technical guidance regarding client-side rendering optimizations and Lumino widget DockPanel layout management.</p>
        </section>
        <div class="status-footer">
          <p>&check; Verified via PandaDoc E-Signature</p>
        </div>
      </main>
    `,
		cssContent: `
      .agr-hdr { border-bottom: 1.5px solid #43a047; padding-bottom: 3px; margin-bottom: 5px; }
      .pd-tag { background: var(--ace-bg, #e8f5e9); color: #2e7d32; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .agr-hdr h1 { font-size: 8px; color: var(--ace-foreground, #1b5e20); font-weight: bold; margin-top: 2px; }
      .agr-card { background: var(--ace-bg, #f1f8e9); padding: 4px; border-left: 2px solid #43a047; margin-bottom: 5px; font-size: 3.8px; }
      .agr-card p { margin-bottom: 1px; }
      .agr-body h2 { font-size: 4.8px; color: #2e7d32; font-weight: bold; margin-bottom: 2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
      .status-footer { background: var(--ace-bg, #e8f5e9); padding: 2px; text-align: center; font-size: 3.5px; color: #2e7d32; font-weight: bold; margin-top: 6px; border-radius: 2px; }
    `
	}
];

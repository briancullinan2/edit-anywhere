import type { ITemplateItem } from "./template";

export const SHOWCASE_TEMPLATES: ITemplateItem[] = [
	// 1. Blank Document
	{
		id: 'blank-doc',
		title: 'Blank document',
		styleVariant: 'Default',
		htmlContent: `
      <div class="blank-container">
        <div class="plus-icon">+</div>
      </div>
    `,
		cssContent: `
      .blank-container { display: flex; align-items: center; justify-content: center; height: 100%; }
      .plus-icon { font-size: 32px; font-weight: 300; color: #4285f4; }
    `
	},

	// 2. Resume Serif (2-Column Layout)
	{
		id: 'resume-serif',
		title: 'Resume',
		styleVariant: 'Serif',
		htmlContent: `
      <header class="hdr">
        <h1>YOUR NAME</h1>
        <p class="sub">Creative Director & Staff Engineer</p>
      </header>
      <div class="two-col">
        <aside class="sidebar">
          <section class="sec">
            <h2>Skills</h2>
            <p>TypeScript, React, Lumino, Canvas2D, WebGL, Node.js</p>
          </section>
          <section class="sec">
            <h2>Education</h2>
            <p><strong>B.S. Computer Science</strong><br>Stanford University</p>
          </section>
        </aside>
        <main class="main-col">
          <section class="sec">
            <h2>Experience</h2>
            <article class="job">
              <h3>Principal Architect &mdash; Acme Systems</h3>
              <p class="date">2022 &ndash; Present</p>
              <p>Led development of cloud publishing platforms and virtualized UI engines.</p>
            </article>
            <article class="job">
              <h3>Lead Frontend Developer &mdash; Nexus Interactive</h3>
              <p class="date">2019 &ndash; 2022</p>
              <p>Built real-time collaborative document editors and canvas engines.</p>
            </article>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .hdr { border-bottom: 1px solid #111; padding-bottom: 4px; margin-bottom: 6px; }
      .hdr h1 { font-family: Georgia, serif; font-size: 11px; font-weight: normal; letter-spacing: 0.5px; }
      .sub { color: #666; font-size: 4.5px; font-style: italic; }
      .two-col { display: flex; gap: 8px; }
      .sidebar { width: 32%; border-right: 0.5px solid #eee; padding-right: 4px; }
      .main-col { width: 68%; }
      .sec h2 { font-family: Georgia, serif; font-size: 6px; color: #1a73e8; border-bottom: 0.5px solid #ddd; margin: 4px 0 2px 0; }
      .job h3 { font-size: 5px; font-weight: bold; }
      .date { color: #888; font-size: 4px; margin-bottom: 1px; }
      p { font-size: 4.5px; color: #333; }
    `
	},

	// 3. Resume Coral (Sidebar Strip)
	{
		id: 'resume-coral',
		title: 'Resume',
		styleVariant: 'Coral',
		htmlContent: `
      <div class="coral-layout">
        <aside class="coral-strip">
          <div class="avatar-ph"></div>
          <h2>Contact</h2>
          <p>alex@example.com</p>
          <p>+1 555-0192</p>
          <h2>Expertise</h2>
          <p>UI Architecture</p>
          <p>Design Systems</p>
        </aside>
        <main class="coral-body">
          <header>
            <h1>ALEX SMITH</h1>
            <p class="title-tag">SENIOR PRODUCT DESIGNER</p>
          </header>
          <section>
            <h2>Profile</h2>
            <p>Product designer with 8+ years experience building web applications and design tokens.</p>
          </section>
          <section>
            <h2>Projects</h2>
            <article>
              <h3>Enterprise Design System</h3>
              <p>Maintained component library used by 200+ engineers across 12 teams.</p>
            </article>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .coral-layout { display: flex; height: 100%; margin: -10px; }
      .coral-strip { width: 35%; background: #fff3e0; padding: 8px 6px; border-right: 2px solid #ffab91; }
      .avatar-ph { width: 20px; height: 20px; background: #ff7043; border-radius: 50%; margin-bottom: 6px; }
      .coral-strip h2 { font-size: 5px; color: #d84315; margin-top: 4px; text-transform: uppercase; }
      .coral-strip p { font-size: 4px; color: #4e342e; }
      .coral-body { width: 65%; padding: 8px 6px; }
      .coral-body h1 { font-size: 10px; color: #d84315; }
      .title-tag { font-size: 4.5px; color: #8d6e63; font-weight: bold; margin-bottom: 6px; }
      .coral-body h2 { font-size: 6px; color: #d84315; border-bottom: 0.5px solid #ffccbc; margin: 4px 0 2px 0; }
      p { font-size: 4.5px; color: #333; }
    `
	},

	// 4. Letter Spearmint
	{
		id: 'letter-spearmint',
		title: 'Letter',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="mint-header">
        <div class="accent-bar"></div>
        <h1>YOUR NAME</h1>
        <p>123 Innovation Way &bull; San Francisco, CA</p>
      </header>
      <div class="letter-meta">
        <p>October 24, 2026</p>
        <p><strong>Hiring Committee</strong><br>Design Technologies Inc.</p>
      </div>
      <main class="letter-body">
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my strong interest in the Lead Architect position. With extensive experience in modular TypeScript frameworks and canvas editors, I have successfully delivered modern web presences.</p>
        <p>Thank you for your time and consideration.</p>
        <p class="sig">Sincerely,<br><strong>Your Name</strong></p>
      </main>
    `,
		cssContent: `
      .accent-bar { width: 100%; height: 3px; background: #2e7d32; margin-bottom: 4px; }
      .mint-header h1 { font-size: 10px; color: #1b5e20; }
      .mint-header p { font-size: 4px; color: #666; }
      .letter-meta { margin: 8px 0; font-size: 4.5px; border-top: 0.5px solid #c8e6c9; padding-top: 4px; }
      .letter-body p { font-size: 4.5px; color: #222; margin-bottom: 4px; }
      .sig { margin-top: 8px; }
    `
	},

	// 5. Project Proposal Tropic (Banner Header)
	{
		id: 'project-tropic',
		title: 'Project proposal',
		styleVariant: 'Tropic',
		htmlContent: `
      <div class="tropic-banner">
        <span class="category">PROJECT PROPOSAL</span>
        <h1>Next-Gen Authoring Platform</h1>
      </div>
      <main class="tropic-content">
        <section>
          <h2>Overview</h2>
          <p>A web-first authoring environment uniting markdown, rich visual editors, and interactive canvas components.</p>
        </section>
        <section>
          <h2>Key Deliverables</h2>
          <ul>
            <li>Virtualized Lumino Page Scroller</li>
            <li>Embedded Fabric.js Canvas Layer</li>
            <li>Off-thread Web Worker PDF Exporter</li>
          </ul>
        </section>
      </main>
    `,
		cssContent: `
      .tropic-banner { background: #00695c; color: #fff; padding: 10px 8px; margin: -10px -10px 8px -10px; }
      .category { font-size: 4px; letter-spacing: 1px; color: #80cbc4; }
      .tropic-banner h1 { font-size: 9px; margin-top: 2px; }
      .tropic-content h2 { font-size: 6px; color: #00695c; border-bottom: 0.5px solid #b2dfdb; margin: 4px 0 2px 0; }
      p, li { font-size: 4.5px; color: #333; }
      ul { padding-left: 8px; }
    `
	},

	// 6. BIONICLE Lore (Tropic Hero Variant)
	{
		id: 'bionicle-landing',
		title: 'BIONICLE Lore',
		styleVariant: 'Tropic',
		htmlContent: `
      <div class="bionicle-hero">
        <span class="tag">MATA NUI CHRONICLES</span>
        <h1>Legend of the Toa</h1>
        <p class="lead">Six heroes arrived on the shores of Mata Nui, bound by duty and destined for glory.</p>
        <button class="cta-btn">Explore Kanohi Masks</button>
      </div>
      <section class="toa-grid">
        <div class="toa-card"><h3>Tahu</h3><p>Toa of Fire</p></div>
        <div class="toa-card"><h3>Kopaka</h3><p>Toa of Ice</p></div>
        <div class="toa-card"><h3>Gali</h3><p>Toa of Water</p></div>
      </section>
    `,
		cssContent: `
      .bionicle-hero { background: linear-gradient(135deg, #0d47a1, #002171); color: #fff; padding: 8px; border-radius: 4px; }
      .bionicle-hero h1 { color: #ffab00; font-family: monospace; font-size: 9px; margin: 3px 0; }
      .tag { background: #ff6d00; padding: 1px 4px; border-radius: 2px; font-size: 3.5px; font-weight: bold; }
      .lead { font-size: 4px; opacity: 0.9; }
      .cta-btn { background: #ffab00; color: #000; border: none; padding: 2px 6px; border-radius: 2px; font-size: 4px; font-weight: bold; margin-top: 4px; }
      .toa-grid { display: flex; gap: 3px; margin-top: 6px; }
      .toa-card { flex: 1; background: #f5f5f5; padding: 4px; border-radius: 2px; border-left: 1.5px solid #0d47a1; }
      .toa-card h3 { font-size: 4.5px; margin: 0; }
      .toa-card p { font-size: 3.5px; color: #666; }
    `
	},

	// 7. Brochure Geometric
	{
		id: 'brochure-geometric',
		title: 'Brochure',
		styleVariant: 'Geometric',
		htmlContent: `
      <div class="geo-header">
        <div class="geo-shape"></div>
        <h1>ANNUAL SUMMIT</h1>
      </div>
      <div class="three-col">
        <div class="col">
          <h2>Keynote</h2>
          <p>Insights into future web architectures and canvas technologies.</p>
        </div>
        <div class="col">
          <h2>Workshops</h2>
          <p>Hands-on sessions with TypeScript and Lumino widget trees.</p>
        </div>
        <div class="col">
          <h2>Networking</h2>
          <p>Connect with leading software architects and designers.</p>
        </div>
      </div>
    `,
		cssContent: `
      .geo-header { position: relative; background: #311b92; color: #fff; padding: 12px 8px; overflow: hidden; margin: -10px -10px 8px -10px; }
      .geo-shape { position: absolute; right: -10px; top: -10px; width: 40px; height: 40px; background: #7c4dff; transform: rotate(45deg); }
      .geo-header h1 { font-size: 9px; letter-spacing: 0.5px; }
      .three-col { display: flex; gap: 4px; }
      .col { flex: 1; background: #fafafa; padding: 4px; border-top: 1.5px solid #512da8; }
      .col h2 { font-size: 5px; color: #512da8; margin-bottom: 2px; }
      .col p { font-size: 4px; color: #444; }
    `
	},

	// 8. Report Luxe
	{
		id: 'report-luxe',
		title: 'Report',
		styleVariant: 'Luxe',
		htmlContent: `
      <header class="luxe-hdr">
        <p class="org">RESEARCH & DEVELOPMENT</p>
        <h1>Q4 Performance Analysis</h1>
        <div class="gold-divider"></div>
      </header>
      <main class="luxe-body">
        <section>
          <h2>Executive Summary</h2>
          <p>System throughput increased by 42% following the deployment of virtualized DOM list containers.</p>
        </section>
        <section>
          <h2>Key Metrics</h2>
          <div class="stat-box">
            <span class="num">60 FPS</span>
            <span class="lbl">Smooth Virtual Scroll</span>
          </div>
        </section>
      </main>
    `,
		cssContent: `
      .luxe-hdr { text-align: center; margin-bottom: 8px; }
      .org { font-size: 4px; letter-spacing: 1px; color: #c5a059; font-weight: bold; }
      .luxe-hdr h1 { font-size: 9px; font-family: Georgia, serif; color: #111; margin: 2px 0; }
      .gold-divider { width: 24px; height: 1px; background: #c5a059; margin: 0 auto; }
      .luxe-body h2 { font-size: 5.5px; font-family: Georgia, serif; color: #c5a059; border-bottom: 0.5px solid #e0e0e0; margin: 4px 0 2px 0; }
      p { font-size: 4.5px; color: #333; }
      .stat-box { background: #fdfbf7; border: 0.5px solid #e0d0b0; padding: 4px; text-align: center; margin-top: 4px; }
      .num { display: block; font-size: 7px; font-weight: bold; color: #c5a059; }
      .lbl { font-size: 3.5px; color: #666; }
    `
	},

	// 9. Meeting Notes Modern Writer
	{
		id: 'notes-modern',
		title: 'Meeting notes',
		styleVariant: 'Modern Writer',
		htmlContent: `
      <header class="notes-hdr">
        <h1>Sprint Sync &mdash; Oct 2026</h1>
        <p><strong>Attendees:</strong> Alex, Jordan, Sam</p>
      </header>
      <section class="notes-sec">
        <h2>Action Items</h2>
        <ul class="task-list">
          <li>[x] Implement Template Gallery Widget</li>
          <li>[ ] Wire up TinyMCE contenteditable hooks</li>
          <li>[ ] Benchmark offscreen PDF worker</li>
        </ul>
      </section>
    `,
		cssContent: `
      .notes-hdr h1 { font-size: 9px; font-family: Courier, monospace; color: #212121; }
      .notes-hdr p { font-size: 4px; color: #757575; margin-bottom: 6px; }
      .notes-sec h2 { font-size: 6px; font-family: Courier, monospace; background: #eeeeee; padding: 1px 4px; margin-bottom: 3px; }
      .task-list { list-style: none; padding-left: 0; }
      .task-list li { font-size: 4.5px; font-family: Courier, monospace; color: #333; margin-bottom: 2px; }
    `
	},

	// 10. Recipe Coral
	{
		id: 'recipe-coral',
		title: 'Recipe',
		styleVariant: 'Coral',
		htmlContent: `
      <header class="recipe-hdr">
        <h1>Artisanal Sourdough</h1>
        <p class="meta">Prep: 20 mins &bull; Bake: 45 mins</p>
      </header>
      <div class="recipe-grid">
        <aside class="ingr">
          <h2>Ingredients</h2>
          <p>&bull; 500g Bread Flour</p>
          <p>&bull; 350g Water</p>
          <p>&bull; 100g Starter</p>
        </aside>
        <main class="steps">
          <h2>Directions</h2>
          <p>1. Mix flour and water for autolyse.</p>
          <p>2. Fold in starter and salt.</p>
        </main>
      </div>
    `,
		cssContent: `
      .recipe-hdr { border-bottom: 1px solid #ff7043; padding-bottom: 3px; margin-bottom: 6px; }
      .recipe-hdr h1 { font-size: 9px; color: #d84315; font-family: Georgia, serif; }
      .meta { font-size: 4px; color: #8d6e63; }
      .recipe-grid { display: flex; gap: 6px; }
      .ingr { width: 40%; background: #fbe9e7; padding: 4px; border-radius: 2px; }
      .ingr h2, .steps h2 { font-size: 5px; color: #d84315; margin-bottom: 2px; }
      .steps { width: 60%; }
      p { font-size: 4px; color: #333; }
    `
	}
];

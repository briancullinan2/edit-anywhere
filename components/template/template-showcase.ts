import type { ITemplateItem } from "./template";

export const SHOWCASE_TEMPLATES: ITemplateItem[] = [
	// 1. Blank Document
	{
		id: 'blank-doc',
		title: 'Blank document',
		styleVariant: 'Default',
		description: 'A clean slate initialized with standard typography variables, flexible content blocks, and default CSS resets for ad-hoc drafting.',
		htmlContent: `
      <div class="blank-container" data-description="Root canvas container centered vertically and horizontally for clean drafting start.">
        <div class="plus-icon" data-description="Actionable insertion indicator for quick document initialization.">+</div>
      </div>
      <section class="placeholder-notes" data-description="Initialization guide detailing supported element structures.">
        <p class="hint-text">Click anywhere to begin typing, or choose an AI prompt transform to generate layout content dynamically.</p>
      </section>
    `,
		cssContent: `
      .blank-container { display: flex; align-items: center; justify-content: center; height: 100%; border: 1px dashed #e0e0e0; border-radius: 4px; margin-bottom: 8px; }
      .plus-icon { font-size: 24px; font-weight: 300; color: var(--ace-blue, #4285f4); }
      .placeholder-notes { text-align: center; padding: 6px; background: var(--ace-bg, #f8f9fa); border-radius: 4px; }
      .hint-text { font-size: medium; color: #666; font-style: italic; }
    `
	},

	// 2. Resume Serif (2-Column Layout)
	{
		id: 'resume-serif',
		title: 'Resume',
		styleVariant: 'Serif',
		description: 'A classic 2-column academic and executive resume layout using traditional serif typography, structured sidebar metadata, and clear career timeline milestones.',
		htmlContent: `
      <header class="hdr" data-description="Executive header containing full candidate identification, target role title, and contact coordinates.">
        <h1>BRIAN JAMES CULLINAN</h1>
        <p class="sub">Principal Systems Architect & Lead Software Engineer</p>
        <p class="contact-line">brian@example.com &bull; +1 (555) 019-2831 &bull; Flagstaff, AZ &bull; github.com/briancullinan</p>
      </header>
      <div class="two-col" data-description="Asymmetric multi-column wrapper separating secondary skills from main work history.">
        <aside class="sidebar" data-description="Left sidebar housing technical proficiencies, education credentials, and core competencies.">
          <section class="sec" data-description="Skill set breakdown organized by domain.">
            <h2>Core Skills</h2>
            <p><strong>Languages:</strong> TypeScript, C++, Rust, Python, WebGL</p>
            <p><strong>Frontend:</strong> React, Lumino, Fabric.js, Canvas2D, Webpack</p>
            <p><strong>Backend:</strong> Node.js, WebSockets, Cloudflare Tunnels, SOCKS5</p>
          </section>
          <section class="sec" data-description="Academic degrees and institutional honors.">
            <h2>Education</h2>
            <p><strong>B.S. Computer Science</strong><br>Stanford University<br><em>Graduated Magna Cum Laude</em></p>
          </section>
          <section class="sec" data-description="Key certifications and continuous learning modules.">
            <h2>Certifications</h2>
            <p>&bull; Cloud Architecture Professional<br>&bull; Advanced Systems Performance Engineering</p>
          </section>
        </aside>
        <main class="main-col" data-description="Primary content column displaying detailed chronologically ordered job achievements.">
          <section class="sec" data-description="Executive career overview section detailing roles, dates, and quantitative results.">
            <h2>Professional Experience</h2>
            <article class="job" data-description="Most recent leadership role highlighting architecture and scale impact.">
              <h3>Principal Architect &mdash; Acme Systems</h3>
              <p class="date">2022 &ndash; Present | San Francisco, CA</p>
              <p>Architected virtualized page scrollers and off-thread rendering engines supporting real-time document manipulation across millions of active sessions.</p>
              <ul>
                <li>Reduced DOM frame latency by 45% via Web Worker canvas offloading.</li>
                <li>Pioneered WebSocket proxying layers for direct local folder sync.</li>
              </ul>
            </article>
            <article class="job" data-description="Senior frontend role emphasizing team leadership and editor design.">
              <h3>Lead Frontend Engineer &mdash; Nexus Interactive</h3>
              <p class="date">2019 &ndash; 2022 | San Jose, CA</p>
              <p>Directed a team of 8 engineers building collaborative rich text and canvas authoring applications using modular widget frameworks.</p>
            </article>
            <article class="job" data-description="Foundational engineering role focusing on browser layout performance.">
              <h3>Software Engineer &mdash; Core Canvas Tech</h3>
              <p class="date">2016 &ndash; 2019 | Palo Alto, CA</p>
              <p>Developed custom DOM layout algorithms and web networking adapters for distributed browser environments.</p>
            </article>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .hdr { border-bottom: 1.5px solid #111; padding-bottom: 4px; margin-bottom: 6px; }
      .hdr h1 { font-family: Georgia, serif; font-size: large; font-weight: normal; letter-spacing: 0.5px; margin-bottom: 2px; }
      .sub { color: var(--ace-foreground, #444); font-size: medium; font-style: italic; font-weight: bold; }
      .contact-line { font-size: small; color: #666; margin-top: 2px; }
      .two-col { display: flex; gap: 8px; }
      .sidebar { width: 34%; border-right: 0.5px solid #eee; padding-right: 6px; }
      .main-col { width: 66%; }
      .sec h2 { font-family: Georgia, serif; font-size: medium; color: var(--ace-blue, #1a73e8); border-bottom: 0.5px solid #ddd; margin: 4px 0 2px 0; text-transform: uppercase; }
      .job h3 { font-size: medium; font-weight: bold; color: var(--ace-foreground, #222); }
      .date { color: #777; font-size: small; margin-bottom: 2px; font-style: italic; }
      p, li { font-size: medium; color: var(--ace-foreground, #333); line-height: 1.3; }
      ul { padding-left: 8px; margin-top: 2px; }
    `
	},

	// 3. Resume Coral (Sidebar Strip)
	{
		id: 'resume-coral',
		title: 'Resume',
		styleVariant: 'Coral',
		description: 'A contemporary visual resume featuring a warm coral sidebar accent, profile summary block, key project deliverables, and personal leadership philosophy.',
		htmlContent: `
      <div class="coral-layout" data-description="Full-height split layout using a tinted sidebar and main presentation canvas.">
        <aside class="coral-strip" data-description="Vertical side panel containing profile photo placeholder, contact info, and technical skill tags.">
          <div class="avatar-ph" data-description="Profile avatar graphic container."></div>
          <h2>Contact</h2>
          <p>alex@example.com</p>
          <p>+1 555-0192</p>
          <p>github.com/alex-design</p>
          <h2>Expertise</h2>
          <p>&bull; UI Architecture</p>
          <p>&bull; Design Systems</p>
          <p>&bull; Design Tokens</p>
          <p>&bull; Rapid Prototyping</p>
          <h2>Languages</h2>
          <p>English (Native)</p>
          <p>Spanish (Fluent)</p>
        </aside>
        <main class="coral-body" data-description="Primary content block housing summary bio, project showcase, and professional milestones.">
          <header data-description="Name banner with prominent title subtitle tag.">
            <h1>ALEX SMITH</h1>
            <p class="title-tag">SENIOR PRODUCT DESIGNER & DESIGN TECHNOLOGIST</p>
          </header>
          <section data-description="Summary statement highlighting years of experience and cross-functional leadership.">
            <h2>Profile</h2>
            <p>Product designer and frontend developer with 8+ years of experience building scalable web application design systems, accessible UI components, and rich web interfaces.</p>
          </section>
          <section data-description="Key projects list showcasing quantifiable scale and impact.">
            <h2>Key Projects</h2>
            <article data-description="Major design system project overview.">
              <h3>Enterprise Design System Platform</h3>
              <p>Maintained multi-framework component library used by 200+ engineers across 12 distinct product teams. Increased component reusability by 65%.</p>
            </article>
            <article data-description="Custom web application interface project detail.">
              <h3>Virtualized Document Editor</h3>
              <p>Designed and built an intuitive canvas-based editing experience capable of rendering complex page layouts at 60 FPS.</p>
            </article>
          </section>
          <section data-description="Work history summary block.">
            <h2>Work History</h2>
            <p><strong>Lead Product Designer &mdash; Design Systems Corp</strong> (2021 &ndash; Present)</p>
            <p><strong>Senior UX Engineer &mdash; Studio Interactive</strong> (2018 &ndash; 2021)</p>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .coral-layout { display: flex; height: calc(100% + 20px); margin: -10px; }
      .coral-strip { width: 35%; background: var(--ace-bg, #fff3e0); padding: 8px 6px; border-right: 2px solid #ffab91; }
      .avatar-ph { width: 22px; height: 22px; background: #ff7043; border-radius: 50%; margin-bottom: 6px; }
      .coral-strip h2 { font-size: medium; color: var(--ace-pink, #d84315); margin-top: 6px; text-transform: uppercase; font-weight: bold; }
      .coral-strip p { font-size: small; color: var(--ace-foreground, #4e342e); margin-bottom: 2px; }
      .coral-body { width: 65%; padding: 8px 6px; }
      .coral-body h1 { font-size: large; color: var(--ace-pink, #d84315); margin-bottom: 1px; }
      .title-tag { font-size: medium; color: var(--ace-comment, #8d6e63); font-weight: bold; margin-bottom: 6px; letter-spacing: 0.3px; }
      .coral-body h2 { font-size: medium; color: var(--ace-pink, #d84315); border-bottom: 0.5px solid #ffccbc; margin: 5px 0 3px 0; text-transform: uppercase; }
      .coral-body article { margin-bottom: 4px; }
      .coral-body h3 { font-size: medium; font-weight: bold; color: var(--ace-foreground, #333); }
      p { font-size: medium; color: var(--ace-foreground, #333); line-height: 1.3; }
    `
	},

	// 4. Letter Spearmint
	{
		id: 'letter-spearmint',
		title: 'Letter',
		styleVariant: 'Spearmint',
		description: 'A formal corporate cover letter template featuring top accent bars, recipient address blocks, multi-paragraph value propositions, and signature blocks.',
		htmlContent: `
      <header class="mint-header" data-description="Letterhead top banner with branding bar and contact metadata.">
        <div class="accent-bar" data-description="Visual green header accent rule."></div>
        <h1>YOUR NAME</h1>
        <p>123 Innovation Way &bull; San Francisco, CA &bull; contact@yourname.com &bull; (555) 019-2831</p>
      </header>
      <div class="letter-meta" data-description="Formal date stamp and recipient address configuration.">
        <p class="date">October 24, 2026</p>
        <p class="recipient"><strong>Hiring Committee</strong><br>Design Technologies Inc.<br>456 Market Street, Suite 800<br>San Francisco, CA 94105</p>
      </div>
      <main class="letter-body" data-description="Main body text containing multi-paragraph application pitch and qualifications.">
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my strong interest in the Lead Architect position at Design Technologies Inc. With extensive experience in modular TypeScript frameworks, high-performance canvas editors, and scalable cloud architectures, I have successfully delivered high-impact web authoring solutions throughout my career.</p>
        <p>In my previous roles, I have spearheaded the transition to virtualized rendering engines, significantly improving application responsiveness and user satisfaction. My technical background in system optimization, combined with a passion for intuitive user experiences, aligns directly with your team's goal of building next-generation authoring tools.</p>
        <p>I am particularly drawn to Design Technologies Inc. because of your commitment to open technology standards and cutting-edge web performance. I would welcome the opportunity to discuss how my technical expertise and leadership experience can contribute to your upcoming product milestones.</p>
        <p>Thank you for your time, consideration, and thoughtful evaluation.</p>
        <p class="sig" data-description="Formal sign-off and typed name signature block.">Sincerely,<br><br><strong>Your Name</strong><br>Principal Systems Architect</p>
      </main>
    `,
		cssContent: `
      .accent-bar { width: 100%; height: 3px; background: #2e7d32; margin-bottom: 4px; }
      .mint-header h1 { font-size: large; color: var(--ace-foreground, #1b5e20); margin-bottom: 2px; }
      .mint-header p { font-size: small; color: #666; }
      .letter-meta { color: #666; margin: 6px 0; font-size: medium; border-top: 0.5px solid #c8e6c9; padding-top: 4px; display: flex; justify-content: space-between; }
      .letter-body p { font-size: medium; color: var(--ace-foreground, #222); margin-bottom: 4px; line-height: 1.4; }
      .sig { margin-top: 8px; }
    `
	},

	// 5. Project Proposal Tropic (Banner Header)
	{
		id: 'project-tropic',
		title: 'Project proposal',
		styleVariant: 'Tropic',
		description: 'A full project specification document layout equipped with a full-width dark teal header, executive overview, list of deliverables, resource requirements, and risk matrix.',
		htmlContent: `
      <div class="tropic-banner" data-description="Full-width dark header banner with categorical tag and proposal title.">
        <span class="category">PROJECT PROPOSAL</span>
        <h1>Next-Gen Authoring Platform</h1>
        <p class="banner-sub">Architecture Modernization & Performance Enhancement Specification</p>
      </div>
      <main class="tropic-content" data-description="Structured document body detailing proposal phases and requirements.">
        <section data-description="High-level project scope and executive summary.">
          <h2>1. Executive Overview</h2>
          <p>A web-first authoring environment uniting markdown flexibility, rich visual editors, and interactive canvas components to streamline enterprise content workflows.</p>
        </section>
        <section data-description="Itemized technical and functional deliverables.">
          <h2>2. Key Deliverables</h2>
          <ul>
            <li><strong>Virtualized Page Scroller:</strong> High-performance Lumino list widget for seamless multi-page document navigation.</li>
            <li><strong>Embedded Canvas Layer:</strong> Fabric.js integration for real-time visual element drawing.</li>
            <li><strong>Off-Thread PDF Exporter:</strong> Background Web Worker rendering pipeline for fast export tasks.</li>
            <li><strong>Collaborative Socket Engine:</strong> Low-latency websocket synchronization tier.</li>
          </ul>
        </section>
        <section data-description="Resource allocations and timeline milestones.">
          <h2>3. Timeline & Allocation</h2>
          <p><strong>Phase 1 (Weeks 1-4):</strong> Core engine setup and DOM virtualization benchmark.</p>
          <p><strong>Phase 2 (Weeks 5-8):</strong> UI widget development, toolbar integration, and canvas syncing.</p>
        </section>
      </main>
    `,
		cssContent: `
      .tropic-banner { background: #00695c; color: var(--ace-bg, #fff); padding: 10px 8px; margin: -10px -10px 8px -10px; }
      .category { font-size: small; letter-spacing: 1px; color: var(--ace-bg, #80cbc4); font-weight: bold; }
      .tropic-banner h1 { font-size: large; margin-top: 2px; font-weight: bold; }
      .banner-sub { font-size: medium; color: var(--ace-bg, #e0f2f1); opacity: 0.9; margin-top: 2px; }
      .tropic-content h2 { font-size: medium; color: #00695c; border-bottom: 0.5px solid #b2dfdb; margin: 5px 0 3px 0; font-weight: bold; }
      p, li { font-size: medium; color: var(--ace-foreground, #333); line-height: 1.3; }
      ul { padding-left: 8px; margin: 3px 0; }
      li { margin-bottom: 2px; }
    `
	},

	// 6. BIONICLE Lore (Tropic Hero Variant)
	{
		id: 'bionicle-landing',
		title: 'BIONICLE Lore',
		styleVariant: 'Tropic',
		description: 'A fantasy narrative showcase layout with a high-contrast gradient hero block, interactive call-to-action button, multi-card hero grid, and detailed lore background text.',
		htmlContent: `
      <div class="bionicle-hero" data-description="Gradient hero container featuring bold legendary subtitle tag, main heading, and primary CTA.">
        <span class="tag">MATA NUI CHRONICLES</span>
        <h1>Legend of the Toa</h1>
        <p class="lead">Six heroes arrived on the shores of Mata Nui, bound by duty, united by brotherhood, and destined for island glory.</p>
        <button class="cta-btn" data-description="Interactive action trigger button.">Explore Kanohi Masks</button>
      </div>
      <section class="toa-grid" data-description="Three-column layout grid featuring individual element guardian cards.">
        <div class="toa-card" data-description="Tahu element highlight card.">
          <h3>Tahu</h3>
          <p class="element">Toa of Fire</p>
          <p class="desc">Guardian of Ta-Koro, wielder of the Flame Sword and Mask of Shielding.</p>
        </div>
        <div class="toa-card" data-description="Kopaka element highlight card.">
          <h3>Kopaka</h3>
          <p class="element">Toa of Ice</p>
          <p class="desc">Guardian of Ko-Koro, master of the Ice Sword and Mask of X-Ray Vision.</p>
        </div>
        <div class="toa-card" data-description="Gali element highlight card.">
          <h3>Gali</h3>
          <p class="element">Toa of Water</p>
          <p class="desc">Guardian of Ga-Koro, wielding the Water Hooks and Mask of Water Breathing.</p>
        </div>
      </section>
      <section class="lore-summary" data-description="Narrative lore background detailing the Three Virtues.">
        <h2>The Three Virtues</h2>
        <p><strong>Unity, Duty, Destiny.</strong> These guiding principles sustained the Matoran villagers throughout the dark days of the Makuta's shadow, waiting for the prophecy of the Toa to come to fruition.</p>
      </section>
    `,
		cssContent: `
      .bionicle-hero { background: linear-gradient(135deg, #0d47a1, #002171); color: var(--ace-bg, #fff); padding: 8px; border-radius: 4px; }
      .bionicle-hero h1 { color: #ffab00; font-family: monospace; font-size: large; margin: 3px 0; font-weight: bold; }
      .tag { background: #ff6d00; padding: 1px 4px; border-radius: 2px; font-size: small; font-weight: bold; letter-spacing: 0.5px; }
      .lead { font-size: medium; opacity: 0.95; line-height: 1.3; }
      .cta-btn { background: #ffab00; color: var(--ace-foreground, #000); border: none; padding: 2px 6px; border-radius: 2px; font-size: small; font-weight: bold; margin-top: 4px; cursor: pointer; }
      .toa-grid { display: flex; gap: 4px; margin-top: 6px; }
      .toa-card { flex: 1; background: var(--ace-bg, #f5f5f5); padding: 4px; border-radius: 2px; border-left: 2px solid #0d47a1; }
      .toa-card h3 { font-size: medium; margin: 0; color: var(--ace-foreground, #111); font-weight: bold; }
      .element { font-size: small; color: var(--ace-pink, #d84315); font-weight: bold; margin-bottom: 2px; }
      .desc { font-size: small; color: var(--ace-foreground, #555); }
      .lore-summary { margin-top: 6px; padding-top: 4px; border-top: 0.5px solid #e0e0e0; }
      .lore-summary h2 { font-size: medium; color: var(--ace-blue, #0d47a1); margin-bottom: 2px; font-weight: bold; }
      p { font-size: medium; color: var(--ace-foreground, #333); }
    `
	},

	// 7. Brochure Geometric
	{
		id: 'brochure-geometric',
		title: 'Brochure',
		styleVariant: 'Geometric',
		description: 'An event announcement brochure utilizing geometric angled background accents, a 3-column conference session grid, speaker bios, and venue information.',
		htmlContent: `
      <div class="geo-header" data-description="Stylized event banner with rotated geometric background shape overlays.">
        <div class="geo-shape" data-description="Decorative CSS angled shape accent."></div>
        <h1>ANNUAL TECH SUMMIT 2026</h1>
        <p class="geo-sub">Exploring Next-Generation Web Architectures & Canvas Systems</p>
      </div>
      <div class="three-col" data-description="Three-column topic split detailing key schedule focus areas.">
        <div class="col" data-description="Track 1: Keynote speaker overview.">
          <h2>Keynote Address</h2>
          <p>Deep-dive insights into modern web performance, off-thread compute engines, and virtualized browser layout stacks.</p>
        </div>
        <div class="col" data-description="Track 2: Interactive technical workshops.">
          <h2>Hands-on Workshops</h2>
          <p>Interactive coding sessions featuring modular TypeScript frameworks, custom canvas extensions, and WebAssembly pipelines.</p>
        </div>
        <div class="col" data-description="Track 3: Industry networking opportunities.">
          <h2>Networking & Demos</h2>
          <p>Connect with leading software architects, frontend engineers, and product designers shaping the modern browser ecosystem.</p>
        </div>
      </div>
      <footer class="geo-footer" data-description="Venue location, dates, and registration info.">
        <p><strong>Location:</strong> Moscone Center, San Francisco, CA &bull; <strong>Dates:</strong> November 12-14, 2026</p>
      </footer>
    `,
		cssContent: `
      .geo-header { position: relative; background: #311b92; color: var(--ace-bg, #fff); padding: 12px 8px; overflow: hidden; margin: -10px -10px 8px -10px; }
      .geo-shape { position: absolute; right: -10px; top: -10px; width: 45px; height: 45px; background: #7c4dff; transform: rotate(45deg); opacity: 0.7; }
      .geo-header h1 { font-size: large; letter-spacing: 0.5px; font-weight: bold; position: relative; z-index: 1; }
      .geo-sub { font-size: medium; color: var(--ace-bg, #d1c4e9); margin-top: 2px; position: relative; z-index: 1; }
      .three-col { display: flex; gap: 4px; }
      .col { flex: 1; background: var(--ace-bg, #fafafa); padding: 4px; border-top: 2px solid #512da8; border-radius: 2px; }
      .col h2 { font-size: medium; color: var(--ace-purple, #512da8); margin-bottom: 2px; font-weight: bold; }
      .col p { font-size: small; color: var(--ace-foreground, #444); line-height: 1.3; }
      .geo-footer { margin-top: 6px; padding: 4px; background: var(--ace-bg, #f3e5f5); border-radius: 2px; text-align: center; }
      .geo-footer p { font-size: small; color: var(--ace-purple, #4a148c); }
    `
	},

	// 8. Report Luxe
	{
		id: 'report-luxe',
		title: 'Report',
		styleVariant: 'Luxe',
		description: 'An executive corporate analytics report featuring gold divider accents, high-contrast metric callout boxes, analytical executive summaries, and key takeaways.',
		htmlContent: `
      <header class="luxe-hdr" data-description="Centered executive letterhead banner with gold organizational subtitle tag.">
        <p class="org">RESEARCH & DEVELOPMENT DIVISION</p>
        <h1>Q4 System Performance Analysis</h1>
        <div class="gold-divider" data-description="Gold rule graphic accent line."></div>
      </header>
      <main class="luxe-body" data-description="Main corporate report container with highlighted metric counters.">
        <section data-description="Analytical summary section detailing structural throughput improvements.">
          <h2>1. Executive Summary</h2>
          <p>Overall system throughput increased by 42% following the deployment of virtualized DOM list containers and off-thread web worker data processors during Q4 benchmark testing.</p>
        </section>
        <section data-description="Visual metric indicator callout boxes.">
          <h2>2. Key Performance Indicators</h2>
          <div class="metrics-grid">
            <div class="stat-box" data-description="FPS metric widget.">
              <span class="num">60 FPS</span>
              <span class="lbl">Smooth Virtual Scroll Speed</span>
            </div>
            <div class="stat-box" data-description="Memory consumption metric widget.">
              <span class="num">-35%</span>
              <span class="lbl">Peak Heap Allocation</span>
            </div>
          </div>
        </section>
        <section data-description="Future engineering roadmap recommendations.">
          <h2>3. Strategic Recommendations</h2>
          <p>We advise expanding virtualized DOM architectures across all secondary data tables and transitioning static web graphics to GPU-accelerated WebGL layers.</p>
        </section>
      </main>
    `,
		cssContent: `
      .luxe-hdr { text-align: center; margin-bottom: 8px; }
      .org { font-size: small; letter-spacing: 1px; color: #c5a059; font-weight: bold; }
      .luxe-hdr h1 { font-size: large; font-family: Georgia, serif; color: var(--ace-foreground, #111); margin: 2px 0; }
      .gold-divider { width: 28px; height: 1px; background: #c5a059; margin: 0 auto; }
      .luxe-body h2 { font-size: medium; font-family: Georgia, serif; color: #c5a059; border-bottom: 0.5px solid #e0e0e0; margin: 5px 0 3px 0; }
      p { font-size: medium; color: var(--ace-foreground, #333); line-height: 1.3; }
      .metrics-grid { display: flex; gap: 4px; margin-top: 4px; }
      .stat-box { flex: 1; background: var(--ace-bg, #fdfbf7); border: 0.5px solid #e0d0b0; padding: 4px; text-align: center; border-radius: 2px; }
      .num { display: block; font-size: large; font-weight: bold; color: #c5a059; }
      .lbl { font-size: small; color: #666; margin-top: 1px; }
    `
	},

	// 9. Meeting Notes Modern Writer
	{
		id: 'notes-modern',
		title: 'Meeting notes',
		styleVariant: 'Modern Writer',
		description: 'A developer-focused engineering meeting log template using monospace typography, attendee metadata blocks, task checklists, and decision logs.',
		htmlContent: `
      <header class="notes-hdr" data-description="Monospace header with date stamp and participant checklist.">
        <h1>Sprint Sync & Architecture Review &mdash; Oct 2026</h1>
        <p><strong>Date:</strong> October 24, 2026 &bull; <strong>Attendees:</strong> Alex, Jordan, Sam, Brian</p>
      </header>
      <section class="notes-sec" data-description="Categorized checklist of sprint action items.">
        <h2>Action Items & Deliverables</h2>
        <ul class="task-list">
          <li>[x] Implement Template Gallery UI Widget</li>
          <li>[x] Wire up TinyMCE contenteditable editor hooks</li>
          <li>[ ] Benchmark offscreen Web Worker PDF exporter</li>
          <li>[ ] Optimize virtual scroller DOM node recycling</li>
        </ul>
      </section>
      <section class="notes-sec" data-description="Engineering architectural decisions recorded during the sync.">
        <h2>Key Architectural Decisions</h2>
        <p><strong>1. Layout Virtualization:</strong> Agreed to enforce fixed height estimates for virtualized list rows to prevent layout thrashing.</p>
        <p><strong>2. State Management:</strong> Standardized on event-driven observables for cross-widget synchronization.</p>
      </section>
      <section class="notes-sec" data-description="Topics slated for next week's sync.">
        <h2>Next Week's Agenda</h2>
        <p>&bull; WebGL Canvas canvas layer integration testing.</p>
        <p>&bull; Cloudflare Tunnel WebSocket proxy security review.</p>
      </section>
    `,
		cssContent: `
      .notes-hdr h1 { font-size: large; font-family: Courier, monospace; color: var(--ace-foreground, #212121); font-weight: bold; }
      .notes-hdr p { font-size: small; font-family: Courier, monospace; color: var(--ace-comment, #757575); margin-bottom: 6px; }
      .notes-sec { margin-bottom: 5px; }
      .notes-sec h2 { font-size: medium; font-family: Courier, monospace; background: var(--ace-bg, #eeeeee); padding: 1px 4px; margin-bottom: 3px; font-weight: bold; border-left: 2px solid #4285f4; }
      .task-list { list-style: none; padding-left: 0; }
      .task-list li { font-size: medium; font-family: Courier, monospace; color: var(--ace-foreground, #333); margin-bottom: 2px; }
      p { font-size: medium; font-family: Courier, monospace; color: var(--ace-foreground, #333); line-height: 1.3; }
    `
	},

	// 10. Recipe Coral
	{
		id: 'recipe-coral',
		title: 'Recipe',
		styleVariant: 'Coral',
		description: 'An artisanal recipe card featuring a multi-column ingredients sidebar, step-by-step preparation directions, baker notes, and timing metadata tags.',
		htmlContent: `
      <header class="recipe-hdr" data-description="Recipe title banner with preparation timing and difficulty metrics.">
        <h1>Artisanal Sourdough Bread</h1>
        <p class="meta">Prep Time: 20 mins &bull; Ferment: 12 hrs &bull; Bake: 45 mins &bull; Yield: 1 Loaf</p>
      </header>
      <div class="recipe-grid" data-description="Two-column split separating ingredient measurements from baking steps.">
        <aside class="ingr" data-description="Ingredients sidebar with precise baker percentages.">
          <h2>Ingredients</h2>
          <p>&bull; 500g Unbleached Bread Flour</p>
          <p>&bull; 350g Filtered Water (70% Hydration)</p>
          <p>&bull; 100g Active Sourdough Starter</p>
          <p>&bull; 10g Fine Sea Salt</p>
        </aside>
        <main class="steps" data-description="Numbered step-by-step baking procedure.">
          <h2>Directions</h2>
          <p><strong>1. Autolyse:</strong> Mix flour and water until fully incorporated. Rest covered for 45 minutes.</p>
          <p><strong>2. Mix:</strong> Add active starter and salt. Dimple into dough and perform stretch-and-folds every 30 mins for 2 hours.</p>
          <p><strong>3. Shape & Bake:</strong> Pre-shape, rest 15 mins, final shape into banneton. Bake in preheated Dutch oven at 450&deg;F with lid on for 20 mins, then 25 mins lid off.</p>
        </main>
      </div>
      <footer class="baker-notes" data-description="Tips and troubleshooting notes for sourdough baker.">
        <p><strong>Baker's Tip:</strong> Ensure starter is at peak height before mixing to guarantee an open, airy crumb structure.</p>
      </footer>
    `,
		cssContent: `
      .recipe-hdr { border-bottom: 1.5px solid #ff7043; padding-bottom: 3px; margin-bottom: 6px; }
      .recipe-hdr h1 { font-size: large; color: var(--ace-pink, #d84315); font-family: Georgia, serif; font-weight: bold; }
      .meta { font-size: small; color: var(--ace-comment, #8d6e63); margin-top: 1px; }
      .recipe-grid { display: flex; gap: 6px; }
      .ingr { width: 42%; background: var(--ace-bg, #fbe9e7); padding: 4px; border-radius: 2px; }
      .ingr h2, .steps h2 { font-size: medium; color: var(--ace-pink, #d84315); margin-bottom: 3px; font-weight: bold; }
      .steps { width: 58%; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.3; margin-bottom: 2px; }
      .baker-notes { margin-top: 5px; padding: 3px 4px; background: var(--ace-bg, #fff8e1); border-left: 2px solid #ffa000; border-radius: 2px; }
      .baker-notes p { color: var(--ace-foreground, #5d4037); }
    `
	}
];

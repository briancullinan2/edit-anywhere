import type { ITemplateItem } from './template';

export const PROPOSAL_TEMPLATES: ITemplateItem[] = [
	// 1. Independent Contractor Agreement (Upwork)
	{
		id: 'freelance-contractor-upwork',
		title: 'Independent contractor agreement',
		styleVariant: 'Upwork',
		htmlContent: `
      <header class="prop-hdr">
        <span class="brand-badge">Upwork Add-on</span>
        <h1>INDEPENDENT CONTRACTOR AGREEMENT</h1>
        <p class="subtitle">CONTRACT ID: UP-2026-9081</p>
      </header>
      <main class="prop-body">
        <p class="intro">This Independent Contractor Agreement ("Agreement") is entered into via Upwork Escrow between Client and Independent Freelancer.</p>
        <section class="clause">
          <h2>1. Services & Deliverables</h2>
          <p>Freelancer agrees to provide specialized technical development and UI/UX template design services as specified in the active milestone description.</p>
        </section>
        <section class="clause">
          <h2>2. Payment & Escrow Release</h2>
          <p>Payment shall be funded in Escrow prior to milestone commencement and released upon client acceptance of deliverables.</p>
        </section>
        <div class="sig-block">
          <div class="sig-line"><p>Client Signature (Verified Upwork Account)</p></div>
          <div class="sig-line"><p>Freelancer Signature (Verified Upwork Account)</p></div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; }
      .prop-hdr { border-bottom: 2px solid #14a800; padding-bottom: 3px; margin-bottom: 5px; }
      .brand-badge { background: #eef9ec; color: #14a800; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; border: 0.5px solid #14a800; }
      .prop-hdr h1 { font-size: 8.5px; color: #14a800; font-weight: 800; margin-top: 2px; }
      .subtitle { font-size: 3.5px; color: #5bbc2e; font-weight: 600; }
      .intro { font-size: 3.8px; color: #333; line-height: 1.35; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #14a800; border-bottom: 0.5px solid #d4f3cc; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .sig-block { display: flex; gap: 8px; margin-top: 6px; }
      .sig-line { flex: 1; border-top: 0.5px solid #333; padding-top: 2px; }
      .sig-line p { font-size: 3.2px; color: #666; text-align: center; }
    `
	},

	// 2. Statement of Work (Upwork)
	{
		id: 'freelance-sow-upwork',
		title: 'Statement of work',
		styleVariant: 'Upwork',
		htmlContent: `
      <header class="prop-hdr">
        <span class="brand-badge">Upwork Add-on</span>
        <h1>FREELANCE STATEMENT OF WORK (SOW)</h1>
        <p class="subtitle">ATTACHMENT TO PROJECT #499210</p>
      </header>
      <main class="prop-body">
        <div class="sow-card">
          <p><strong>FREELANCER:</strong> Senior Full-Stack Engineer</p>
          <p><strong>CLIENT:</strong> Digital Media Innovations LLC</p>
        </div>
        <section class="clause">
          <h2>Project Milestones</h2>
          <table class="sow-table">
            <thead>
              <tr><th>Milestone</th><th>Target Date</th><th>Escrow Amount</th></tr>
            </thead>
            <tbody>
              <tr><td>1. Widget Component Architecture</td><td>Nov 10, 2026</td><td>$1,500</td></tr>
              <tr><td>2. DOM Virtualization & Testing</td><td>Nov 24, 2026</td><td>$2,000</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; }
      .prop-hdr { background: #14a800; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .brand-badge { background: #ffffff; color: #14a800; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .prop-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .subtitle { font-size: 3.5px; color: #eef9ec; }
      .sow-card { background: #eef9ec; border-left: 2px solid #14a800; padding: 4px; font-size: 3.8px; color: #14a800; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #14a800; border-bottom: 0.5px solid #d4f3cc; margin: 3px 0 1px 0; }
      .sow-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-top: 3px; }
      .sow-table th { background: #d4f3cc; color: #14a800; text-align: left; padding: 2px; }
      .sow-table td { border-bottom: 0.5px solid #eef9ec; padding: 2px; }
    `
	},

	// 3. Non-Profit / Research Grant Proposal
	{
		id: 'grant-proposal-foundation',
		title: 'Grant proposal',
		styleVariant: 'Academic & Non-Profit',
		htmlContent: `
      <header class="grant-hdr">
        <span class="tag">Grant Funding Request</span>
        <h1>RESEARCH & COMMUNITY GRANT PROPOSAL</h1>
        <p class="grant-no">GRANT REF: GR-2026-STEM-04</p>
      </header>
      <main class="grant-body">
        <section class="summary-box">
          <h2>Project Title: Open Access Browser Tooling Initiative</h2>
          <p><strong>Requesting Organization:</strong> Open Software Foundation</p>
          <p><strong>Funding Requested:</strong> $50,000 USD</p>
        </section>
        <section class="clause">
          <h2>1. Executive Summary & Impact</h2>
          <p>This initiative develops lightweight, client-side virtualized authoring components to empower educational non-profits with accessible document tools.</p>
        </section>
        <section class="clause">
          <h2>2. Budget Breakdown</h2>
          <p>&bull; <strong>Software Engineering:</strong> $35,000<br>&bull; <strong>Community Outreach & Docs:</strong> $15,000</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .grant-hdr { border-bottom: 1.5px solid #1565c0; padding-bottom: 3px; margin-bottom: 5px; }
      .tag { font-family: sans-serif; background: #e3f2fd; color: #1565c0; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .grant-hdr h1 { font-size: 8px; color: #0d47a1; font-weight: bold; margin-top: 2px; }
      .grant-no { font-family: sans-serif; font-size: 3.2px; color: #666; }
      .summary-box { background: #e3f2fd; padding: 4px; border-left: 2px solid #1565c0; font-size: 3.8px; margin-bottom: 4px; }
      .summary-box h2 { font-size: 4.2px; font-weight: bold; color: #0d47a1; margin-bottom: 2px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #0d47a1; border-bottom: 0.5px solid #bbdefb; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #222; line-height: 1.35; }
    `
	},

	// 4. Academic Scholarship Proposal / Application Essay
	{
		id: 'scholarship-proposal-academic',
		title: 'Scholarship proposal',
		styleVariant: 'Academic Excellence',
		htmlContent: `
      <header class="schol-hdr">
        <h1>STEM FELLOWSHIP SCHOLARSHIP PROPOSAL</h1>
        <p class="applicant">APPLICANT: Alex James Cullinan &bull; ID: #2026-9041</p>
      </header>
      <main class="schol-body">
        <section class="clause">
          <h2>1. Academic Statement & Objectives</h2>
          <p>Applying for the 2026 Advanced Computer Science Fellowship to research web layout engines, DOM scrollers, and canvas state management.</p>
        </section>
        <section class="clause">
          <h2>2. Proposed Research Scope</h2>
          <p>Investigating two-pass virtualization models for rendering high-density rich-text document structures inside restricted memory environments.</p>
        </section>
        <div class="endorse-box">
          <p><strong>Faculty Endorsement:</strong> Department of Computer Science</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .schol-hdr { text-align: center; border-bottom: 1px solid #4a148c; padding-bottom: 3px; margin-bottom: 5px; }
      .schol-hdr h1 { font-size: 8.5px; font-weight: bold; color: #4a148c; }
      .applicant { font-family: sans-serif; font-size: 3.5px; color: #7b1fa2; font-weight: bold; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #4a148c; border-bottom: 0.5px solid #e1bee7; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #222; line-height: 1.35; }
      .endorse-box { background: #f3e5f5; padding: 3px; border: 0.5px solid #ce93d8; text-align: center; font-size: 3.5px; color: #4a148c; margin-top: 6px; }
    `
	},

	// 5. Technical Research Project Proposal
	{
		id: 'research-proposal-tech',
		title: 'Research proposal',
		styleVariant: 'Technical Report',
		htmlContent: `
      <header class="res-hdr">
        <h1>TECHNICAL RESEARCH PROPOSAL</h1>
        <p class="sub">TOPIC: CLIENT-SIDE GRAPHICS VIRTUALIZATION</p>
      </header>
      <main class="res-body">
        <section class="clause">
          <h2>Abstract</h2>
          <p>Proposing a methodology for coupling offscreen Web Workers with canvas rendering layers to achieve 60FPS viewport scrolling.</p>
        </section>
        <section class="clause">
          <h2>Methodology & Benchmarks</h2>
          <p>Utilizing Lumino layout widgets and synthetic performance passes across multi-page document structures.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .res-hdr { border-bottom: 1.5px solid #263238; padding-bottom: 3px; margin-bottom: 5px; }
      .res-hdr h1 { font-size: 8.5px; font-weight: 800; color: #263238; }
      .sub { font-size: 3.2px; color: #546e7a; font-weight: bold; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #263238; border-bottom: 0.5px solid #cfd8dc; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 6. Corporate Sponsorship Proposal
	{
		id: 'sponsorship-proposal-event',
		title: 'Sponsorship proposal',
		styleVariant: 'Corporate Event',
		htmlContent: `
      <header class="spon-hdr">
        <h1>2026 WEB DEV CONFERENCE SPONSORSHIP</h1>
        <p class="sub">PARTNERSHIP PACKAGES & BRAND BENEFITS</p>
      </header>
      <main class="spon-body">
        <div class="tier-grid">
          <div class="tier">
            <h3>PLATINUM</h3>
            <p class="cost">$10,000</p>
            <p>&bull; Keynote Speaking Slot<br>&bull; Booth Space A1</p>
          </div>
          <div class="tier">
            <h3>GOLD</h3>
            <p class="cost">$5,000</p>
            <p>&bull; Logo on Badge & Site<br>&bull; Booth Space B3</p>
          </div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .spon-hdr { background: #311b92; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .spon-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; }
      .sub { font-size: 3.5px; color: #d1c4e9; }
      .tier-grid { display: flex; gap: 4px; margin-top: 4px; }
      .tier { flex: 1; background: #f3e5f5; padding: 4px; border-left: 2px solid #512da8; border-radius: 2px; }
      .tier h3 { font-size: 4.2px; color: #311b92; font-weight: bold; }
      .cost { font-size: 5px; font-weight: bold; color: #512da8; margin: 1px 0; }
      p { font-size: 3.5px; color: #333; }
    `
	},

	// 7. Business Acquisition / Investment Proposal
	{
		id: 'investment-proposal-biz',
		title: 'Investment proposal',
		styleVariant: 'Executive Finance',
		htmlContent: `
      <header class="inv-hdr">
        <h1>CAPITAL INVESTMENT PROPOSAL</h1>
        <p class="conf">STRICTLY CONFIDENTIAL &bull; FOR QUALIFIED INVESTORS</p>
      </header>
      <main class="inv-body">
        <div class="deal-card">
          <p><strong>TARGET CAPITAL RAISE:</strong> $500,000 USD</p>
          <p><strong>EQUITY OFFERED:</strong> 8% Preferred Series Seed Stock</p>
        </div>
        <section class="clause">
          <h2>Use of Funds</h2>
          <p>&bull; 60% Core Engineering & UI Widget R&D<br>&bull; 40% Developer Ecosystem Growth</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .inv-hdr { border-bottom: 2px solid #1b5e20; padding-bottom: 3px; margin-bottom: 5px; }
      .inv-hdr h1 { font-size: 8.5px; font-weight: 800; color: #1b5e20; }
      .conf { font-size: 3.2px; color: #388e3c; font-weight: bold; }
      .deal-card { background: #e8f5e9; border-left: 2px solid #1b5e20; padding: 4px; font-size: 3.8px; color: #1b5e20; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #1b5e20; border-bottom: 0.5px solid #a5d6a7; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 8. Event / Exhibition Proposal
	{
		id: 'event-proposal-design',
		title: 'Event proposal',
		styleVariant: 'Creative Event',
		htmlContent: `
      <header class="evt-hdr">
        <h1>DESIGN GALLERY EXHIBITION PROPOSAL</h1>
        <p class="meta">SPRING 2027 EXPOSITION</p>
      </header>
      <main class="evt-body">
        <section class="clause">
          <h2>Concept & Vision</h2>
          <p>Curating an interactive showcase of virtualized digital document layouts, vector graphics, and web-native template schemas.</p>
        </section>
        <section class="clause">
          <h2>Venue Requirements</h2>
          <p>3,000 sq ft hall with high-bandwidth network connectivity and digital presentation screens.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .evt-hdr { border-bottom: 1.5px solid #e65100; padding-bottom: 3px; margin-bottom: 5px; }
      .evt-hdr h1 { font-size: 8.5px; font-weight: 800; color: #e65100; }
      .meta { font-size: 3.5px; color: #f57c00; font-weight: bold; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #e65100; border-bottom: 0.5px solid #ffe0b2; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 9. Community Outreach & Non-Profit Program Proposal
	{
		id: 'community-proposal-outreach',
		title: 'Community program proposal',
		styleVariant: 'Civic & Social',
		htmlContent: `
      <header class="com-hdr">
        <h1>YOUTH CODING INITIATIVE PROPOSAL</h1>
        <p class="sub">COMMUNITY OUTREACH PROGRAM</p>
      </header>
      <main class="com-body">
        <section class="clause">
          <h2>Program Overview</h2>
          <p>Providing free weekend workshops on web development, UI component design, and document layout automation for local high school students.</p>
        </section>
        <section class="clause">
          <h2>Required Resources</h2>
          <p>20 refurbished laptop computers, computer lab space, and volunteer teaching assistants.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .com-hdr { border-bottom: 1.5px solid #00838f; padding-bottom: 3px; margin-bottom: 5px; }
      .com-hdr h1 { font-size: 8.5px; font-weight: 800; color: #00838f; }
      .sub { font-size: 3.2px; color: #00acc1; font-weight: bold; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #00838f; border-bottom: 0.5px solid #b2ebf2; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 10. Technical Partnership & API Integration Proposal
	{
		id: 'partnership-proposal-tech',
		title: 'Partnership proposal',
		styleVariant: 'Tech Alliance',
		htmlContent: `
      <header class="part-hdr">
        <h1>STRATEGIC API INTEGRATION PROPOSAL</h1>
        <p class="sub">ECOSYSTEM ALLIANCE</p>
      </header>
      <main class="part-body">
        <section class="clause">
          <h2>Integration Objective</h2>
          <p>Integrating our real-time DOM template gallery widget directly into third-party cloud authoring suites.</p>
        </section>
        <div class="benefit-box">
          <p><strong>MUTUAL VALUE:</strong> Expands reach across 100K+ active web authors with zero rendering latency.</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .part-hdr { background: #263238; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .part-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; }
      .sub { font-size: 3.5px; color: #90a4ae; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #263238; border-bottom: 0.5px solid #cfd8dc; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .benefit-box { background: #eceff1; border-left: 2px solid #263238; padding: 4px; font-size: 3.8px; color: #263238; margin-top: 4px; }
    `
	}
];

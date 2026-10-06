import type { ITemplateItem } from './template';

export const SALES_TEMPLATES: ITemplateItem[] = [
	// 1. Sales Quote PandaDoc (Formal Itemized Pricing Table with Total Box)
	{
		id: 'quote-pandadoc',
		title: 'Sales quote',
		styleVariant: 'PandaDoc',
		htmlContent: `
      <header class="quote-hdr">
        <span class="pd-tag">PandaDoc Add-on</span>
        <h1>OFFICIAL SALES QUOTE</h1>
        <p class="quote-id">QUOTE #2026-8891 &bull; VALID UNTIL: NOV 30, 2026</p>
      </header>
      <main class="quote-body">
        <div class="client-box">
          <p><strong>PREPARED FOR:</strong> Acme Corp Engineering</p>
          <p><strong>PREPARED BY:</strong> Systems Studio Inc.</p>
        </div>
        <table class="pricing-table">
          <thead>
            <tr><th>Item Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>
          </thead>
          <tbody>
            <tr><td>Lumino Editor License</td><td>10</td><td>$150</td><td>$1,500</td></tr>
            <tr><td>Canvas Engine Support</td><td>1</td><td>$500</td><td>$500</td></tr>
          </tbody>
        </table>
        <div class="total-card">
          <p><strong>SUBTOTAL:</strong> $2,000</p>
          <p><strong>TAX (8%):</strong> $160</p>
          <p class="grand-total">GRAND TOTAL: $2,160</p>
        </div>
      </main>
    `,
		cssContent: `
      .quote-hdr { border-bottom: 1.5px solid #2e7d32; padding-bottom: 3px; margin-bottom: 5px; }
      .pd-tag { background: var(--ace-bg, #e8f5e9); color: #2e7d32; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .quote-hdr h1 { font-size: 8.5px; color: var(--ace-foreground, #1b5e20); font-weight: bold; margin-top: 2px; }
      .quote-id { font-size: 3.5px; color: #666; }
      .client-box { background: var(--ace-bg, #f1f8e9); padding: 4px; border-left: 2px solid #2e7d32; margin-bottom: 5px; font-size: 3.8px; }
      .pricing-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-bottom: 5px; }
      .pricing-table th { background: var(--ace-bg, #c8e6c9); color: var(--ace-foreground, #1b5e20); text-align: left; padding: 2px; }
      .pricing-table td { border-bottom: 0.5px solid #e8f5e9; padding: 2px; }
      .total-card { text-align: right; background: var(--ace-bg, #fafafa); padding: 4px; border: 0.5px solid #e0e0e0; font-size: 3.8px; }
      .grand-total { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #1b5e20); margin-top: 2px; }
    `
	},

	// 2. Training Proposal PandaDoc (Module Schedule & Seat Pricing)
	{
		id: 'proposal-training',
		title: 'Training proposal',
		styleVariant: 'PandaDoc',
		htmlContent: `
      <header class="tr-hdr">
        <span class="pd-tag">PandaDoc Add-on</span>
        <h1>ENTERPRISE TRAINING PROPOSAL</h1>
        <p>Custom Workshop Series for Software Teams</p>
      </header>
      <main class="tr-body">
        <section>
          <h2>Curriculum Modules</h2>
          <div class="mod-grid">
            <div class="mod">
              <h3>Module A: Lumino Widgets</h3>
              <p>4 Hours &bull; Layout Trees & DockPanels</p>
            </div>
            <div class="mod">
              <h3>Module B: Canvas Layers</h3>
              <p>4 Hours &bull; Fabric.js Virtualization</p>
            </div>
          </div>
        </section>
        <section class="investment">
          <h2>Investment Summary</h2>
          <p><strong>Package Rate (Up to 20 Engineers):</strong> $4,500</p>
        </section>
      </main>
    `,
		cssContent: `
      .tr-hdr { background: #1565c0; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .pd-tag { background: var(--ace-bg, #90caf9); color: var(--ace-blue, #0d47a1); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .tr-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .tr-hdr p { font-size: 3.8px; color: var(--ace-bg, #e3f2fd); }
      .tr-body h2 { font-size: 5px; color: var(--ace-blue, #1565c0); border-bottom: 0.5px solid #bbdefb; margin: 4px 0 2px 0; }
      .mod-grid { display: flex; gap: 4px; margin-top: 3px; }
      .mod { flex: 1; background: var(--ace-bg, #e3f2fd); padding: 4px; border-radius: 2px; border-left: 2px solid #1565c0; }
      .mod h3 { font-size: 4.2px; color: var(--ace-blue, #0d47a1); font-weight: bold; }
      .mod p { font-size: 3.5px; color: var(--ace-foreground, #333); }
      .investment p { font-size: 4px; color: var(--ace-blue, #1565c0); font-weight: bold; }
    `
	},

	// 3. Software Development Proposal PandaDoc (Milestones & Architecture)
	{
		id: 'proposal-software',
		title: 'Software dev proposal',
		styleVariant: 'PandaDoc',
		htmlContent: `
      <header class="sw-hdr">
        <span class="pd-tag">PandaDoc Add-on</span>
        <h1>SOFTWARE DEVELOPMENT PROPOSAL</h1>
        <p>Custom Authoring System Development</p>
      </header>
      <main class="sw-body">
        <section>
          <h2>Scope of Work</h2>
          <p>Engineering a client-side virtualized page scroller with built-in markdown, HTML, and canvas component renderers.</p>
        </section>
        <section>
          <h2>Phase Schedule</h2>
          <table class="sw-table">
            <thead><tr><th>Phase</th><th>Timeline</th><th>Cost</th></tr></thead>
            <tbody>
              <tr><td>Architecture & Prototype</td><td>2 Weeks</td><td>$3,000</td></tr>
              <tr><td>Full Widget Integration</td><td>3 Weeks</td><td>$5,000</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    `,
		cssContent: `
      .sw-hdr { border-bottom: 1.5px solid #00838f; padding-bottom: 3px; margin-bottom: 5px; }
      .pd-tag { background: var(--ace-bg, #e0f7fa); color: #006064; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .sw-hdr h1 { font-size: 8.5px; color: #006064; font-weight: bold; margin-top: 2px; }
      .sw-hdr p { font-size: 3.8px; color: var(--ace-blue, #00838f); }
      .sw-body h2 { font-size: 5px; color: var(--ace-blue, #00838f); border-bottom: 0.5px solid #b2ebf2; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
      .sw-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-top: 3px; }
      .sw-table th { background: var(--ace-bg, #b2ebf2); color: #006064; text-align: left; padding: 2px; }
      .sw-table td { border-bottom: 0.5px solid #e0f7fa; padding: 2px; }
    `
	},

	// 4. Request for Proposal (RFP) PandaDoc (Formal RFP Spec)
	{
		id: 'proposal-rfp',
		title: 'Request for proposal',
		styleVariant: 'PandaDoc',
		htmlContent: `
      <header class="rfp-hdr">
        <span class="pd-tag">PandaDoc Add-on</span>
        <h1>REQUEST FOR PROPOSAL (RFP)</h1>
        <p>RFP-2026-CLOUD &bull; Issued by Global Tech Inc.</p>
      </header>
      <main class="rfp-body">
        <section>
          <h2>1. Project Objective</h2>
          <p>Seeking vendor proposals for high-performance browser layout virtualization engines.</p>
        </section>
        <section>
          <h2>2. Submission Requirements</h2>
          <ul class="rfp-list">
            <li>&bull; Technical Architecture Blueprint</li>
            <li>&bull; Itemized Pricing Model</li>
            <li>&bull; Client Case Studies</li>
          </ul>
        </section>
      </main>
    `,
		cssContent: `
      .rfp-hdr { background: var(--ace-foreground, #37474f); color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .pd-tag { background: var(--ace-bg, #cfd8dc); color: var(--ace-foreground, #263238); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .rfp-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); margin-top: 2px; }
      .rfp-hdr p { font-size: 3.5px; color: var(--ace-bg, #eceff1); }
      .rfp-body h2 { font-size: 4.8px; color: var(--ace-foreground, #37474f); border-bottom: 0.5px solid #cfd8dc; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
      .rfp-list { list-style: none; padding-left: 0; font-size: 3.8px; color: var(--ace-comment, #455a64); }
    `
	},

	// 5. Tiered Pricing Quote (3-Column Plan Comparison Cards)
	{
		id: 'quote-tiered',
		title: 'Tiered sales quote',
		styleVariant: 'Geometric',
		htmlContent: `
      <header class="tier-hdr">
        <h1>PRICING & SUBSCRIPTION TIERS</h1>
        <p>Choose the plan that fits your engineering team</p>
      </header>
      <div class="tier-grid">
        <div class="tier-card">
          <h3>STARTER</h3>
          <p class="price">$49/mo</p>
          <p>&bull; 1 User License<br>&bull; Basic Scroller</p>
        </div>
        <div class="tier-card active">
          <span class="top-badge">POPULAR</span>
          <h3>PRO</h3>
          <p class="price">$149/mo</p>
          <p>&bull; 5 User Licenses<br>&bull; Fabric.js Layer</p>
        </div>
        <div class="tier-card">
          <h3>ENTERPRISE</h3>
          <p class="price">$399/mo</p>
          <p>&bull; Unlimited Seats<br>&bull; Offscreen Worker</p>
        </div>
      </div>
    `,
		cssContent: `
      .tier-hdr { text-align: center; margin-bottom: 6px; }
      .tier-hdr h1 { font-size: 9px; font-weight: bold; color: var(--ace-blue, #311b92); }
      .tier-hdr p { font-size: 3.8px; color: var(--ace-comment, #616161); }
      .tier-grid { display: flex; gap: 3px; }
      .tier-card { flex: 1; background: var(--ace-bg, #f3e5f5); border: 0.5px solid #d1c4e9; padding: 3px; border-radius: 2px; text-align: center; position: relative; }
      .tier-card.active { background: var(--ace-bg, #ffffff); border: 1.5px solid #7b1fa2; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .top-badge { position: absolute; top: -5px; left: 50%; transform: translateX(-50%); background: #7b1fa2; color: var(--ace-bg, #fff); font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .tier-card h3 { font-size: 4.5px; color: var(--ace-purple, #4a148c); font-weight: bold; margin-top: 2px; }
      .price { font-size: 6px; font-weight: bold; color: var(--ace-purple, #7b1fa2); margin: 1px 0; }
      .tier-card p { font-size: 3.2px; color: var(--ace-foreground, #444); line-height: 1.2; }
    `
	},

	// 6. Modern Consulting Pitch Quote (Modern Minimalist Dark Theme)
	{
		id: 'quote-modern-pitch',
		title: 'Consulting estimate',
		styleVariant: 'Modern Minimal',
		htmlContent: `
      <header class="pitch-hdr">
        <h1>PROJECT ESTIMATE</h1>
        <p>Client: Lumino UI Team &bull; Date: Oct 2026</p>
      </header>
      <main class="pitch-body">
        <section class="summary-box">
          <h2>Project Scope</h2>
          <p>Full implementation of Template Gallery Widget with contenteditable leaf node parser.</p>
        </section>
        <div class="est-row">
          <p>Estimated Hours: <strong>40 Hrs</strong></p>
          <p>Hourly Rate: <strong>$125 / Hr</strong></p>
        </div>
        <div class="est-total">
          <p>TOTAL ESTIMATE: $5,000</p>
        </div>
      </main>
    `,
		cssContent: `
      .pitch-hdr { border-bottom: 1px solid #212121; padding-bottom: 3px; margin-bottom: 5px; }
      .pitch-hdr h1 { font-size: 9.5px; font-weight: 300; letter-spacing: 1px; color: var(--ace-foreground, #212121); }
      .pitch-hdr p { font-size: 3.8px; color: var(--ace-comment, #757575); }
      .summary-box h2 { font-size: 4.8px; font-weight: bold; color: var(--ace-foreground, #212121); margin-bottom: 2px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); }
      .est-row { display: flex; justify-content: space-between; background: var(--ace-bg, #f5f5f5); padding: 4px; margin: 5px 0; font-size: 3.8px; }
      .est-total { background: var(--ace-foreground, #212121); color: var(--ace-bg, #fff); text-align: right; padding: 4px; font-size: 4.5px; font-weight: bold; border-radius: 1px; }
    `
	},

	// 7. Statement of Work (SOW) Sales Agreement
	{
		id: 'sow-agreement',
		title: 'Statement of work',
		styleVariant: 'Executive',
		htmlContent: `
      <header class="sow-hdr">
        <h1>STATEMENT OF WORK (SOW)</h1>
        <p>SOW-2026-004 &bull; Attachment to Master Services Agreement</p>
      </header>
      <main class="sow-body">
        <section>
          <h2>1. Responsibilities</h2>
          <p>Vendor shall supply 10 pre-formatted sales and proposal templates matching Google Docs UI specs.</p>
        </section>
        <section>
          <h2>2. Acceptance Criteria</h2>
          <p>Templates must render as miniature DOM frames with tag badges in preview mode.</p>
        </section>
      </main>
    `,
		cssContent: `
      .sow-hdr { background: #1a237e; color: var(--ace-bg, #fff); padding: 6px; margin: -10px -10px 5px -10px; }
      .sow-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-bg, #fff); }
      .sow-hdr p { font-size: 3.5px; color: var(--ace-bg, #9fa8da); }
      .sow-body h2 { font-size: 4.8px; color: #1a237e; border-bottom: 0.5px solid #1a237e; margin: 4px 0 2px 0; font-weight: bold; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
    `
	},

	// 8. Simple Invoice Quote Style
	{
		id: 'quote-simple-invoice',
		title: 'Service invoice quote',
		styleVariant: 'Swiss',
		htmlContent: `
      <header class="inv-hdr">
        <h1>INVOICE ESTIMATE</h1>
        <div class="black-bar"></div>
      </header>
      <main class="inv-body">
        <div class="inv-meta">
          <p><strong>INVOICE NO:</strong> #INV-9041</p>
          <p><strong>DATE:</strong> 2026-10-24</p>
        </div>
        <table class="inv-table">
          <thead><tr><th>Service</th><th>Amount</th></tr></thead>
          <tbody>
            <tr><td>TypeScript Architecture</td><td>$2,500</td></tr>
            <tr><td>CSS Template Styling</td><td>$1,500</td></tr>
          </tbody>
        </table>
        <p class="inv-total">TOTAL DUE: $4,000</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .inv-hdr h1 { font-size: 10px; font-weight: 900; letter-spacing: -0.5px; color: var(--ace-foreground, #000); }
      .black-bar { width: 100%; height: 2px; background: var(--ace-foreground, #000); margin: 2px 0 5px 0; }
      .inv-meta { font-size: 3.8px; margin-bottom: 4px; }
      .inv-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-bottom: 4px; }
      .inv-table th { border-bottom: 1px solid #000; text-align: left; padding: 2px 0; font-weight: 900; }
      .inv-table td { border-bottom: 0.5px solid #ccc; padding: 2px 0; }
      .inv-total { text-align: right; font-size: 5px; font-weight: 900; color: var(--ace-foreground, #000); }
    `
	},

	// 9. Coral Sales Pitch Proposal (Creative Coral Accents & Metrics)
	{
		id: 'proposal-coral-pitch',
		title: 'Creative sales pitch',
		styleVariant: 'Coral',
		htmlContent: `
      <header class="cp-hdr">
        <h1>BRAND ELEVATION PITCH</h1>
        <p class="author">By Studio Coral &bull; Prepared for Acme</p>
      </header>
      <main class="cp-body">
        <div class="coral-card">
          <p><strong>GOAL:</strong> Transition static web documents into interactive, editable presences.</p>
        </div>
        <section>
          <h2>Expected Outcomes</h2>
          <p>&bull; +300% User Engagement with Embedded Canvas</p>
          <p>&bull; 60FPS Virtualized Scrolling Performance</p>
        </section>
      </main>
    `,
		cssContent: `
      .cp-hdr { border-bottom: 1.5px solid #d84315; padding-bottom: 3px; margin-bottom: 5px; }
      .cp-hdr h1 { font-size: 9px; color: var(--ace-pink, #d84315); font-weight: bold; }
      .author { font-size: 3.8px; color: #ff7043; }
      .coral-card { background: var(--ace-bg, #fbe9e7); border-left: 2px solid #d84315; padding: 4px; margin-bottom: 4px; font-size: 3.8px; color: var(--ace-pink, #d84315); }
      .cp-body h2 { font-size: 4.8px; color: var(--ace-pink, #d84315); border-bottom: 0.5px solid #ffccbc; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); }
    `
	},

	// 10. Spearmint Service Agreement Quote
	{
		id: 'quote-spearmint-service',
		title: 'Service agreement quote',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="sp-hdr">
        <div class="top-accent"></div>
        <h1>ANNUAL SERVICE AGREEMENT</h1>
        <p>Maintenance & Support Contract</p>
      </header>
      <main class="sp-body">
        <section>
          <h2>Covered Services</h2>
          <p>&bull; Quarterly Lumino layout engine upgrades</p>
          <p>&bull; Priority bug fixes and offscreen worker support</p>
        </section>
        <div class="price-box">
          <p>ANNUAL FEE: <strong>$2,400 / Year</strong></p>
        </div>
      </main>
    `,
		cssContent: `
      .top-accent { width: 100%; height: 2.5px; background: #2e7d32; margin-bottom: 4px; }
      .sp-hdr h1 { font-size: 9px; color: var(--ace-foreground, #1b5e20); font-weight: bold; }
      .sp-hdr p { font-size: 3.8px; color: #388e3c; }
      .sp-body h2 { font-size: 4.8px; color: #2e7d32; border-bottom: 0.5px solid #a5d6a7; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.3; }
      .price-box { background: var(--ace-bg, #e8f5e9); border: 0.5px solid #a5d6a7; padding: 4px; text-align: center; margin-top: 5px; font-size: 4px; color: var(--ace-foreground, #1b5e20); }
    `
	}
];

import type { ITemplateItem } from './template';

export const MARKETING_TEMPLATES: ITemplateItem[] = [
	// 1. High-Converting Hero CTA Banner
	{
		id: 'mkt-hero-cta-banner',
		title: 'High-converting hero CTA banner',
		styleVariant: 'Hero Lead CTA',
		htmlContent: `
      <div class="mkt-hero">
        <span class="badge">NOW IN BETA &bull; v2.4</span>
        <h1>Ship Web Apps 10x Faster</h1>
        <p>Deploy client-worker WebSocket tunnels directly from your browser tabs with zero CLI friction.</p>
        <div class="cta-group">
          <button class="btn-primary">Get Started Free</button>
          <button class="btn-secondary">View Documentation &rarr;</button>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .mkt-hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #fff; padding: 8px; border-radius: 4px; text-align: center; }
      .badge { background: rgba(56,189,248,0.1); color: #38bdf8; border: 0.5px solid rgba(56,189,248,0.3); font-size: 2.8px; font-weight: bold; padding: 1px 4px; border-radius: 10px; }
      .mkt-hero h1 { font-size: 8px; font-weight: 900; letter-spacing: -0.2px; margin: 3px 0 1px 0; color: #fff; }
      .mkt-hero p { font-size: 3.4px; color: #94a3b8; max-width: 80%; margin: 0 auto 4px auto; line-height: 1.35; }
      .cta-group { display: flex; gap: 3px; justify-content: center; }
      .btn-primary { background: #0284c7; color: #fff; border: none; font-size: 3.2px; font-weight: bold; padding: 2px 5px; border-radius: 2px; }
      .btn-secondary { background: transparent; color: #cbd5e1; border: 0.5px solid #475569; font-size: 3.2px; padding: 2px 5px; border-radius: 2px; }
    `
	},

	// 2. Client Social Proof Logo Bar
	{
		id: 'mkt-social-proof-logobar',
		title: 'Client social proof logo bar',
		styleVariant: 'Logo Wall',
		htmlContent: `
      <div class="logo-bar">
        <p>TRUSTED BY INNOVATORS AT</p>
        <div class="logos">
          <span class="logo">ACME CORP</span>
          <span class="logo">GLOBEX</span>
          <span class="logo">INITECH</span>
          <span class="logo">UMBRELLA</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .logo-bar { background: #f8fafc; border-top: 0.5px solid #e2e8f0; border-bottom: 0.5px solid #e2e8f0; padding: 4px; text-align: center; }
      .logo-bar p { font-size: 2.8px; font-weight: bold; color: #94a3b8; letter-spacing: 0.8px; margin: 0 0 2px 0; }
      .logos { display: flex; justify-content: space-around; align-items: center; }
      .logo { font-size: 3.5px; font-weight: 900; color: #64748b; letter-spacing: 0.5px; }
    `
	},

	// 3. 3-Tier SaaS Pricing Matrix
	{
		id: 'mkt-pricing-table-matrix',
		title: '3-Tier SaaS pricing matrix',
		styleVariant: 'Pricing Grid',
		htmlContent: `
      <div class="pricing-grid">
        <div class="plan">
          <h3>Starter</h3>
          <div class="price">$0<span>/mo</span></div>
          <p>1 Tunnel Endpoint</p>
          <button>Sign Up</button>
        </div>
        <div class="plan featured">
          <span class="pop">POPULAR</span>
          <h3>Pro</h3>
          <div class="price">$29<span>/mo</span></div>
          <p>Unlimited SOCKS5</p>
          <button class="btn-pop">Start Trial</button>
        </div>
        <div class="plan">
          <h3>Enterprise</h3>
          <div class="price">Custom</div>
          <p>Dedicated SLA</p>
          <button>Contact Us</button>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .pricing-grid { display: flex; gap: 3px; padding: 2px; }
      .plan { flex: 1; background: #fff; border: 0.5px solid #cbd5e1; border-radius: 3px; padding: 4px; text-align: center; position: relative; }
      .plan.featured { border: 1.5px solid #2563eb; background: #f0f6ff; box-shadow: 0 2px 4px rgba(37,99,235,0.1); }
      .pop { background: #2563eb; color: #fff; font-size: 2.5px; font-weight: bold; padding: 1px 3px; border-radius: 2px; position: absolute; top: -4px; left: 50%; transform: translateX(-50%); }
      .plan h3 { font-size: 3.8px; margin: 0; color: #0f172a; }
      .price { font-size: 6px; font-weight: 900; color: #0f172a; margin: 2px 0; }
      .price span { font-size: 3px; font-weight: normal; color: #64748b; }
      .plan p { font-size: 3px; color: #475569; margin-bottom: 3px; }
      button { background: #e2e8f0; color: #1e293b; border: none; font-size: 3px; font-weight: bold; padding: 2px 4px; border-radius: 2px; width: 100%; }
      button.btn-pop { background: #2563eb; color: #fff; }
    `
	},

	// 4. Value Proposition Grid with Icons
	{
		id: 'mkt-value-prop-grid',
		title: 'Value proposition grid with icons',
		styleVariant: 'Value Props',
		htmlContent: `
      <div class="val-grid">
        <div class="val-card">
          <div class="icon">&#9889;</div>
          <h4>Instant Setup</h4>
          <p>Zero configuration required to start tunneling traffic.</p>
        </div>
        <div class="val-card">
          <div class="icon">&#128274;</div>
          <h4>End-to-End Secure</h4>
          <p>TLS encryption backed by Cloudflare infrastructure.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .val-grid { display: flex; gap: 4px; padding: 2px; }
      .val-card { flex: 1; background: #ffffff; border: 0.5px solid #e2e8f0; border-radius: 3px; padding: 4px; }
      .icon { font-size: 6px; color: #0284c7; margin-bottom: 2px; }
      .val-card h4 { font-size: 3.8px; font-weight: bold; color: #0f172a; margin: 0 0 1px 0; }
      .val-card p { font-size: 3.2px; color: #64748b; margin: 0; line-height: 1.3; }
    `
	},

	// 5. Lead Capture Email Newsletter Form
	{
		id: 'mkt-lead-capture-newsletter',
		title: 'Lead capture newsletter box',
		styleVariant: 'Lead Capture',
		htmlContent: `
      <div class="newsletter-box">
        <h3>Subscribe to Technical Updates</h3>
        <p>Get bi-weekly insights into browser rendering engines and networking.</p>
        <div class="form-row">
          <input type="email" placeholder="Enter your work email..." />
          <button>Subscribe</button>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .newsletter-box { background: #0284c7; color: #fff; padding: 6px; border-radius: 3px; text-align: center; }
      .newsletter-box h3 { font-size: 4.5px; font-weight: bold; margin: 0 0 1px 0; }
      .newsletter-box p { font-size: 3.2px; color: #e0f2fe; margin: 0 0 4px 0; }
      .form-row { display: flex; gap: 2px; justify-content: center; max-width: 90%; margin: 0 auto; }
      input { flex: 1; font-size: 3px; padding: 2px 4px; border: none; border-radius: 2px; outline: none; }
      button { background: #0f172a; color: #fff; border: none; font-size: 3px; font-weight: bold; padding: 2px 5px; border-radius: 2px; }
    `
	},

	// 6. Before vs. After Comparison Card
	{
		id: 'mkt-before-after-card',
		title: 'Before vs. After workflow comparison',
		styleVariant: 'Workflow Shift',
		htmlContent: `
      <div class="ba-card">
        <div class="col before">
          <h5>OLD WAY</h5>
          <p>&bull; Complex DNS setup<br>&bull; Port forwarding risk<br>&bull; Slow debugging</p>
        </div>
        <div class="col after">
          <h5>LUMINO WAY</h5>
          <p>&bull; One-click WebSockets<br>&bull; Automatic SSL<br>&bull; Instant tab sync</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .ba-card { display: flex; gap: 3px; padding: 2px; }
      .col { flex: 1; padding: 4px; border-radius: 3px; font-size: 3.2px; line-height: 1.35; }
      .before { background: #fef2f2; border: 0.5px solid #fca5a5; color: #991b1b; }
      .after { background: #f0fdf4; border: 0.5px solid #86efac; color: #166534; }
      h5 { font-size: 3.5px; font-weight: bold; margin: 0 0 2px 0; letter-spacing: 0.5px; }
      .before h5 { color: #dc2626; }
      .after h5 { color: #16a34a; }
      p { margin: 0; }
    `
	},

	// 7. Interactive ROI Calculator Mockup
	{
		id: 'mkt-roi-calculator-mockup',
		title: 'Interactive ROI calculator card',
		styleVariant: 'Calculator Tool',
		htmlContent: `
      <div class="roi-calc">
        <div class="calc-hdr">
          <h4>ESTIMATE YOUR TIME SAVINGS</h4>
        </div>
        <div class="calc-body">
          <div class="metric"><span class="lbl">Devs on Team:</span><span class="val">10</span></div>
          <div class="metric"><span class="lbl">Hours Saved / Mo:</span><span class="val highlight">120 hrs</span></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; }
      .roi-calc { background: #1e293b; color: #f8fafc; border: 1px solid #334155; border-radius: 3px; padding: 4px; }
      .calc-hdr h4 { font-size: 3.5px; color: #38bdf8; margin: 0 0 3px 0; text-align: center; }
      .metric { display: flex; justify-content: space-between; font-size: 3.2px; margin-bottom: 2px; border-bottom: 0.5px dashed #475569; padding-bottom: 1px; }
      .lbl { color: #cbd5e1; }
      .val { font-weight: bold; color: #fff; }
      .val.highlight { color: #4ade80; }
    `
	},

	// 8. Product Announcement Banner with Timer
	{
		id: 'mkt-announcement-countdown',
		title: 'Product launch countdown banner',
		styleVariant: 'Launch Banner',
		htmlContent: `
      <div class="launch-banner">
        <div class="info">
          <span class="tag">UPCOMING LAUNCH</span>
          <h4>Pryor.games Subdomain API</h4>
        </div>
        <div class="timer">
          <div class="unit"><span>03</span><p>DAYS</p></div>
          <div class="unit"><span>14</span><p>HRS</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .launch-banner { background: #7c3aed; color: #fff; padding: 4px 6px; border-radius: 3px; display: flex; justify-content: space-between; align-items: center; }
      .tag { font-size: 2.5px; font-weight: bold; background: #a78bfa; color: #2e1065; padding: 1px 3px; border-radius: 2px; }
      h4 { font-size: 4px; margin: 1px 0 0 0; }
      .timer { display: flex; gap: 2px; }
      .unit { background: rgba(0,0,0,0.2); padding: 2px; border-radius: 2px; text-align: center; width: 12px; }
      .unit span { font-size: 4px; font-weight: bold; font-family: monospace; display: block; }
      .unit p { font-size: 2px; color: #ddd6fe; margin: 0; }
    `
	},

	// 9. Customer Success Metrics Showcase
	{
		id: 'mkt-customer-metrics-showcase',
		title: 'Customer success metrics grid',
		styleVariant: 'Metrics Showcase',
		htmlContent: `
      <div class="metrics-grid">
        <div class="m-card">
          <span class="stat">99.8%</span>
          <p>Reduction in setup time</p>
        </div>
        <div class="m-card">
          <span class="stat">50k+</span>
          <p>Tunnels established</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .metrics-grid { display: flex; gap: 3px; padding: 2px; }
      .m-card { flex: 1; background: #f1f5f9; border-left: 2px solid #0284c7; padding: 4px; }
      .stat { font-size: 6px; font-weight: 900; color: #0284c7; display: block; }
      .m-card p { font-size: 3px; color: #475569; margin: 1px 0 0 0; }
    `
	},

	// 10. Sticky Bottom CTA Opt-In Bar
	{
		id: 'mkt-sticky-cta-bar',
		title: 'Sticky conversion opt-in bar',
		styleVariant: 'Conversion Bar',
		htmlContent: `
      <div class="sticky-bar">
        <span>Ready to automate your Webpack & Lumino setup?</span>
        <button>Get Free Access</button>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .sticky-bar { background: #18181b; color: #f4f4f5; padding: 3px 6px; border-radius: 3px; display: flex; justify-content: space-between; align-items: center; border: 0.5px solid #3f3f46; }
      span { font-size: 3.2px; font-weight: 500; }
      button { background: #16a34a; color: #fff; border: none; font-size: 3px; font-weight: bold; padding: 2px 5px; border-radius: 2px; }
    `
	}
];

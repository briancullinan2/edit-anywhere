import type { ITemplateItem } from './template';

export const MARKETING_TEMPLATES: ITemplateItem[] = [
	// 1. High-Converting Hero CTA Banner
	{
		id: 'mkt-hero-cta-banner',
		title: 'High-Converting Hero CTA Banner',
		styleVariant: 'Hero Lead CTA',
		description: 'Full-width dark hero designed for maximum conversion. Combines a live version badge, a single-sentence value proposition, supporting micro-copy, dual CTAs (primary + secondary), and subtle social-proof trust line. Place at the absolute top of landing pages, product launches, and pricing pages.',
		htmlContent: `
      <div class="mkt-hero">
        <span class="badge">NOW IN BETA · v2.4 · OCT 2026</span>
        <h1>Ship Web Apps 10× Faster</h1>
        <p class="lead">Deploy client-worker WebSocket tunnels directly from your browser tabs—zero CLI friction, zero inbound ports, zero static IPs.</p>
        <div class="cta-group">
          <button class="btn-primary">Get Started Free</button>
          <button class="btn-secondary">View Live Demo →</button>
        </div>
        <p class="trust">Trusted by 4,200+ engineering teams · No credit card required · 14-day Pro trial</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .mkt-hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: var(--ace-bg, #fff); padding: 28px 20px; border-radius: 6px; text-align: center; }
      .badge { display: inline-block; background: rgba(56,189,248,0.12); color: var(--ace-blue, #38bdf8); border: 0.5px solid rgba(56,189,248,0.35); font-size: small; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px; letter-spacing: 0.4px; }
      .mkt-hero h1 { font-size: large; font-weight: 900; letter-spacing: -0.4px; margin-bottom: 8px; color: var(--ace-bg, #fff); line-height: 1.15; }
      .lead { font-size: medium; color: var(--ace-comment, #94a3b8); max-width: 520px; margin: 0 auto 16px auto; line-height: 1.45; }
      .cta-group { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 12px; }
      .btn-primary { background: #0284c7; color: var(--ace-bg, #fff); border: none; font-size: medium; font-weight: 700; padding: 8px 18px; border-radius: 5px; cursor: pointer; }
      .btn-secondary { background: transparent; color: var(--ace-bg, #cbd5e1); border: 0.5px solid #475569; font-size: medium; font-weight: 600; padding: 8px 18px; border-radius: 5px; cursor: pointer; }
      .trust { font-size: small; color: var(--ace-comment, #64748b); }
    `
	},

	// 2. Client Social Proof Logo Bar
	{
		id: 'mkt-social-proof-logobar',
		title: 'Client Social Proof Logo Bar',
		styleVariant: 'Logo Wall',
		description: 'Monochrome trust strip placed immediately under the hero. Displays an eyebrow headline plus five enterprise logos. Use real customer marks in production; the placeholder names below demonstrate correct visual weight and spacing.',
		htmlContent: `
      <div class="logo-bar">
        <p class="eyebrow">TRUSTED BY ENGINEERING TEAMS AT</p>
        <div class="logos">
          <span class="logo">ACME CORP</span>
          <span class="logo">GLOBEX</span>
          <span class="logo">INITECH</span>
          <span class="logo">UMBRELLA</span>
          <span class="logo">STARK IND</span>
        </div>
        <p class="sub">From early-stage startups to Fortune-500 platform teams — all running production tunnels today.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .logo-bar { background: var(--ace-bg, #f8fafc); border-top: 0.5px solid #e2e8f0; border-bottom: 0.5px solid #e2e8f0; padding: 14px 12px; text-align: center; }
      .eyebrow { font-size: small; font-weight: 700; color: var(--ace-comment, #94a3b8); letter-spacing: 1.2px; margin-bottom: 10px; text-transform: uppercase; }
      .logos { display: flex; justify-content: center; align-items: center; gap: 22px; flex-wrap: wrap; margin-bottom: 8px; }
      .logo { font-size: medium; font-weight: 900; color: var(--ace-comment, #64748b); letter-spacing: 0.8px; opacity: 0.75; }
      .sub { font-size: small; color: var(--ace-comment, #94a3b8); }
    `
	},

	// 3. 3-Tier SaaS Pricing Matrix
	{
		id: 'mkt-pricing-table-matrix',
		title: '3-Tier SaaS Pricing Matrix',
		styleVariant: 'Pricing Grid',
		description: 'Classic three-column pricing table with a visually elevated “Most Popular” center tier. Each plan carries a short descriptor, price, feature checklist, and a single CTA. Designed for self-serve conversion on pricing pages and homepage mid-sections.',
		htmlContent: `
      <div class="pricing-grid">
        <div class="plan">
          <h3>Starter</h3>
          <p class="plan-desc">Side projects & experiments</p>
          <div class="price">$0<span>/mo</span></div>
          <ul class="features">
            <li>1 tunnel endpoint</li>
            <li>Community Discord support</li>
            <li>Shared edge bandwidth</li>
            <li>Basic CNAME automation</li>
          </ul>
          <button class="btn-plan">Sign Up Free</button>
        </div>
        <div class="plan featured">
          <span class="pop">MOST POPULAR</span>
          <h3>Pro</h3>
          <p class="plan-desc">Active developers & small teams</p>
          <div class="price">$29<span>/mo</span></div>
          <ul class="features">
            <li>Unlimited SOCKS5 tunnels</li>
            <li>Custom subdomains</li>
            <li>Priority email + chat support</li>
            <li>Tab-state recovery & analytics</li>
          </ul>
          <button class="btn-plan btn-pop">Start 14-Day Trial</button>
        </div>
        <div class="plan">
          <h3>Enterprise</h3>
          <p class="plan-desc">High-scale infrastructure</p>
          <div class="price">Custom</div>
          <ul class="features">
            <li>Dedicated SLA & 99.99 % uptime</li>
            <li>Private Cloudflare routing</li>
            <li>24/7 dedicated success engineer</li>
            <li>SSO, audit logs, custom contracts</li>
          </ul>
          <button class="btn-plan">Contact Sales</button>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pricing-grid { display: flex; gap: 12px; padding: 12px; max-width: 920px; margin: 0 auto; align-items: stretch; flex-wrap: wrap; }
      .plan { flex: 1; min-width: 200px; background: var(--ace-bg, #fff); border: 0.5px solid #cbd5e1; border-radius: 6px; padding: 18px 14px; text-align: center; position: relative; display: flex; flex-direction: column; }
      .plan.featured { border: 1.5px solid #2563eb; background: var(--ace-bg, #f8fafc); box-shadow: 0 8px 20px -4px rgba(37,99,235,0.18); transform: scale(1.02); }
      .pop { background: #2563eb; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 2px 10px; border-radius: 999px; position: absolute; top: -10px; left: 50%; transform: translateX(-50%); letter-spacing: 0.4px; }
      .plan h3 { font-size: large; color: var(--ace-foreground, #0f172a); margin-bottom: 2px; }
      .plan-desc { font-size: small; color: var(--ace-comment, #64748b); margin-bottom: 10px; }
      .price { font-size: large; font-weight: 900; color: var(--ace-foreground, #0f172a); margin-bottom: 12px; }
      .price span { font-size: small; font-weight: 400; color: var(--ace-comment, #64748b); }
      .features { list-style: none; text-align: left; font-size: small; color: var(--ace-comment, #475569); margin-bottom: 14px; flex: 1; }
      .features li { margin-bottom: 5px; padding-left: 14px; position: relative; }
      .features li::before { content: "✓"; position: absolute; left: 0; color: var(--ace-green, #16a34a); font-weight: 700; }
      .btn-plan { background: var(--ace-bg, #e2e8f0); color: var(--ace-foreground, #1e293b); border: none; font-size: medium; font-weight: 700; padding: 8px 12px; border-radius: 5px; width: 100%; cursor: pointer; }
      .btn-plan.btn-pop { background: #2563eb; color: var(--ace-bg, #fff); }
    `
	},

	// 4. Value Proposition Grid with Icons
	{
		id: 'mkt-value-prop-grid',
		title: 'Value Proposition Feature Grid',
		styleVariant: 'Value Props',
		description: 'Three equal cards that translate product capabilities into customer outcomes. Each card pairs a single emoji icon with a benefit-led headline and a one-sentence proof statement. Ideal for the section immediately after the hero.',
		htmlContent: `
      <div class="val-grid">
        <div class="val-card">
          <div class="icon-wrapper">⚡</div>
          <h4>Instant Setup</h4>
          <p>Spin up an encrypted tunnel from any browser tab in under 30 seconds—no local DNS edits, no port-forwarding rules, no YAML.</p>
        </div>
        <div class="val-card">
          <div class="icon-wrapper">🔒</div>
          <h4>End-to-End Secure</h4>
          <p>Every byte travels inside Cloudflare’s TLS-terminated edge network. Credentials never appear in client-side bundles or public logs.</p>
        </div>
        <div class="val-card">
          <div class="icon-wrapper">🌐</div>
          <h4>Custom Routing</h4>
          <p>Claim persistent subdomains with automatic CNAME reconciliation. Your tunnel hostname stays stable across restarts and region failovers.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .val-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; padding: 12px; }
      .val-card { background: var(--ace-bg, #fff); border: 0.5px solid #e2e8f0; border-radius: 6px; padding: 16px; }
      .icon-wrapper { font-size: large; margin-bottom: 8px; display: inline-block; line-height: 1; }
      .val-card h4 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #0f172a); margin-bottom: 4px; }
      .val-card p { font-size: small; color: var(--ace-comment, #64748b); line-height: 1.4; }
    `
	},

	// 5. Lead Capture Email Newsletter Form
	{
		id: 'mkt-lead-capture-newsletter',
		title: 'Lead Capture Newsletter Card',
		styleVariant: 'Lead Capture',
		description: 'High-visibility lead-gen card for mid-page or footer placement. Combines a clear benefit headline, short value statement, and a single-field email form. Optimized for developer-audience newsletters and product update lists.',
		htmlContent: `
      <div class="newsletter-box">
        <h3>Stay Ahead of the Edge</h3>
        <p>Bi-weekly technical notes on browser rendering, WebSocket orchestration, and the patterns we extract from production tunnel fleets. No fluff—only field-tested insights.</p>
        <form class="form-row" onsubmit="return false;">
          <input type="email" placeholder="you@company.com" required />
          <button type="submit">Subscribe Free</button>
        </form>
        <p class="fine">Join 8,400 engineers · Unsubscribe anytime · We never share your address</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .newsletter-box { background: #0284c7; color: var(--ace-bg, #fff); padding: 22px 18px; border-radius: 6px; text-align: center; max-width: 560px; margin: 0 auto; }
      .newsletter-box h3 { font-size: large; font-weight: 800; margin-bottom: 6px; }
      .newsletter-box p { font-size: medium; color: var(--ace-bg, #e0f2fe); margin-bottom: 14px; line-height: 1.4; }
      .form-row { display: flex; gap: 6px; justify-content: center; max-width: 420px; margin: 0 auto 8px auto; flex-wrap: wrap; }
      input { flex: 1; min-width: 180px; font-size: medium; padding: 8px 12px; border: none; border-radius: 5px; outline: none; }
      button { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #fff); border: none; font-size: medium; font-weight: 700; padding: 8px 16px; border-radius: 5px; cursor: pointer; }
      .fine { font-size: small; color: var(--ace-bg, #bae6fd); margin: 0; }
    `
	},

	// 6. Before vs. After Comparison Card
	{
		id: 'mkt-before-after-card',
		title: 'Before vs. After Workflow Comparison',
		styleVariant: 'Workflow Shift',
		description: 'Side-by-side pain-versus-gain card that forces the reader to feel the difference between legacy proxy workflows and the modern tunnel approach. Use on feature pages, case studies, and sales decks.',
		htmlContent: `
      <div class="ba-card">
        <div class="col before">
          <h5>THE OLD WAY</h5>
          <ul>
            <li>❌ Manual local DNS & hosts-file edits</li>
            <li>❌ Open inbound ports & firewall tickets</li>
            <li>❌ 10–15 min remote debugging loops</li>
            <li>❌ Lost tab state on every reload</li>
            <li>❌ Credentials leaked in client bundles</li>
          </ul>
        </div>
        <div class="col after">
          <h5>THE LUMINO WAY</h5>
          <ul>
            <li>✅ One-click encrypted WebSocket tunnel</li>
            <li>✅ Zero inbound ports — pure outbound</li>
            <li>✅ Sub-5 ms local-to-tab latency</li>
            <li>✅ Deterministic tab-state recovery</li>
            <li>✅ Secrets stay inside the tunnel only</li>
          </ul>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .ba-card { display: flex; gap: 10px; padding: 8px 0; flex-wrap: wrap; }
      .col { flex: 1; min-width: 220px; padding: 14px; border-radius: 6px; }
      .before { background: var(--ace-bg, #fef2f2); border: 0.5px solid #fca5a5; }
      .after { background: var(--ace-bg, #f0fdf4); border: 0.5px solid #86efac; }
      h5 { font-size: medium; font-weight: 800; margin-bottom: 8px; letter-spacing: 0.6px; }
      .before h5 { color: var(--ace-pink, #dc2626); }
      .after h5 { color: var(--ace-green, #16a34a); }
      ul { list-style: none; font-size: small; line-height: 1.7; }
      .before ul { color: var(--ace-pink, #991b1b); }
      .after ul { color: #166534; }
    `
	},

	// 7. Interactive ROI Calculator Mockup
	{
		id: 'mkt-roi-calculator-mockup',
		title: 'Developer ROI & Savings Calculator',
		styleVariant: 'Calculator Tool',
		description: 'Static visual mock-up of a time-savings calculator. Shows team size, monthly tunnel volume, and the resulting hours recovered. Use on pricing and ROI pages to make abstract efficiency gains concrete.',
		htmlContent: `
      <div class="roi-calc">
        <div class="calc-hdr">
          <h4>ESTIMATE YOUR TEAM’S TIME SAVINGS</h4>
          <p class="sub">Based on observed averages from 200+ production teams</p>
        </div>
        <div class="calc-body">
          <div class="metric">
            <span class="lbl">Developers on team</span>
            <span class="val">12</span>
          </div>
          <div class="metric">
            <span class="lbl">Tunnels created / dev / month</span>
            <span class="val">38</span>
          </div>
          <div class="metric">
            <span class="lbl">Avg. minutes saved per tunnel</span>
            <span class="val">4.2</span>
          </div>
          <div class="metric highlight-row">
            <span class="lbl">Monthly hours recovered</span>
            <span class="val highlight">319 hrs</span>
          </div>
          <div class="metric highlight-row">
            <span class="lbl">Equivalent FTE capacity</span>
            <span class="val highlight">≈ 1.8 engineers</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; margin: 0; padding: 0; }
      .roi-calc { background: var(--ace-foreground, #1e293b); color: var(--ace-bg, #f8fafc); border: 0.5px solid #334155; border-radius: 6px; padding: 16px; max-width: 440px; margin: 0 auto; }
      .calc-hdr h4 { font-size: medium; color: var(--ace-blue, #38bdf8); margin-bottom: 2px; text-align: center; letter-spacing: 0.6px; }
      .sub { font-size: small; color: var(--ace-comment, #94a3b8); text-align: center; margin-bottom: 12px; }
      .metric { display: flex; justify-content: space-between; font-size: small; padding: 6px 0; border-bottom: 0.5px dashed #475569; }
      .metric.highlight-row { border-bottom: none; padding-top: 8px; }
      .lbl { color: var(--ace-bg, #cbd5e1); }
      .val { font-weight: 700; color: var(--ace-bg, #fff); }
      .val.highlight { color: var(--ace-green, #4ade80); font-size: medium; }
    `
	},

	// 8. Product Announcement Banner with Timer
	{
		id: 'mkt-announcement-countdown',
		title: 'Product Launch Countdown Banner',
		styleVariant: 'Launch Banner',
		description: 'Urgent full-width announcement strip for upcoming releases, feature freezes, or limited-time offers. Combines a status tag, product name, and a three-unit countdown. Place above the navigation or as a sticky top bar during launch windows.',
		htmlContent: `
      <div class="launch-banner">
        <div class="info">
          <span class="tag">UPCOMING RELEASE</span>
          <h4>Pryor.games Subdomain API · Public Beta</h4>
          <p class="desc">Programmatic CNAME + tunnel provisioning for game studios and real-time multiplayer stacks.</p>
        </div>
        <div class="timer">
          <div class="unit"><span>03</span><p>DAYS</p></div>
          <div class="unit"><span>14</span><p>HRS</p></div>
          <div class="unit"><span>22</span><p>MIN</p></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .launch-banner { background: #7c3aed; color: var(--ace-bg, #fff); padding: 12px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
      .tag { font-size: small; font-weight: 800; background: rgba(255,255,255,0.2); color: var(--ace-bg, #fff); padding: 2px 7px; border-radius: 3px; letter-spacing: 0.4px; }
      h4 { font-size: medium; margin: 3px 0 2px 0; font-weight: 700; }
      .desc { font-size: small; color: var(--ace-bg, #e9d5ff); margin: 0; }
      .timer { display: flex; gap: 6px; }
      .unit { background: rgba(0,0,0,0.25); padding: 5px 8px; border-radius: 4px; text-align: center; min-width: 42px; }
      .unit span { font-size: medium; font-weight: 800; font-family: monospace; display: block; }
      .unit p { font-size: small; color: var(--ace-bg, #ddd6fe); margin-top: 1px; letter-spacing: 0.4px; }
    `
	},

	// 9. Customer Success Metrics Showcase
	{
		id: 'mkt-customer-metrics-showcase',
		title: 'Customer Success Impact Grid',
		styleVariant: 'Metrics Showcase',
		description: 'Three high-impact proof metrics drawn from real customer outcomes. Use on homepage social-proof sections, case-study headers, and investor one-pagers. Every number must be defensible and independently verifiable.',
		htmlContent: `
      <div class="metrics-grid">
        <div class="m-card">
          <span class="stat">99.8 %</span>
          <p>Reduction in tunnel-setup friction reported by design-partner teams</p>
        </div>
        <div class="m-card">
          <span class="stat">50 k+</span>
          <p>Active encrypted WebSocket sessions established in the last 30 days</p>
        </div>
        <div class="m-card">
          <span class="stat">&lt; 5 ms</span>
          <p>Median end-to-end proxy latency from local worker to browser tab</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .metrics-grid { display: flex; gap: 10px; padding: 8px 0; flex-wrap: wrap; }
      .m-card { flex: 1; min-width: 160px; background: var(--ace-bg, #f1f5f9); border-left: 3px solid #0284c7; padding: 12px; border-radius: 0 5px 5px 0; }
      .stat { font-size: large; font-weight: 900; color: var(--ace-blue, #0284c7); display: block; line-height: 1.1; margin-bottom: 3px; }
      .m-card p { font-size: small; color: var(--ace-comment, #475569); font-weight: 500; line-height: 1.3; }
    `
	},

	// 10. Sticky Bottom CTA Opt-In Bar
	{
		id: 'mkt-sticky-cta-bar',
		title: 'Full Conversion & Promo Bar',
		styleVariant: 'Conversion Bar',
		description: 'Multi-layer conversion bar intended for sticky footer or top-of-page placement during campaigns. Combines a utility contact strip, a rotating offer scroller, and an inline email capture. High visual density for maximum conversion surface area.',
		htmlContent: `
      <div class="conversion-bar-container">
        <div class="top-utility">
          <span class="contact-info">📞 Sales: <strong>1-800-555-0199</strong></span>
          <span class="support-link">24/7 Live Support · Average response &lt; 4 min</span>
        </div>
        <div class="offer-scroller">
          <div class="offer-item">🎉 <strong>Offer 1:</strong> 20 % off Pro — code PRO20</div>
          <div class="offer-item active">⚡ <strong>Offer 2:</strong> Free custom subdomain with annual plan</div>
          <div class="offer-item">🚀 <strong>Offer 3:</strong> Zero setup fee · Instant provisioning</div>
        </div>
        <div class="optin-strip">
          <span class="optin-text">Claim your discount & developer updates:</span>
          <form class="optin-form" onsubmit="return false;">
            <input type="email" placeholder="you@company.com" required />
            <button type="submit">Claim Offer</button>
          </form>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .conversion-bar-container { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #f8fafc); border: 0.5px solid #334155; border-radius: 6px; overflow: hidden; box-shadow: 0 6px 16px rgba(0,0,0,0.18); }
      .top-utility { background: var(--ace-foreground, #1e293b); display: flex; justify-content: space-between; padding: 5px 12px; font-size: small; color: var(--ace-comment, #94a3b8); border-bottom: 0.5px solid #334155; flex-wrap: wrap; gap: 4px; }
      .top-utility strong { color: var(--ace-blue, #38bdf8); }
      .offer-scroller { display: flex; justify-content: space-around; background: #0284c7; padding: 6px 10px; font-size: small; color: var(--ace-bg, #fff); gap: 6px; overflow-x: auto; }
      .offer-item { opacity: 0.7; white-space: nowrap; padding: 2px 6px; border-radius: 3px; }
      .offer-item.active { opacity: 1; background: rgba(255,255,255,0.2); font-weight: 600; }
      .optin-strip { padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; background: var(--ace-foreground, #0f172a); }
      .optin-text { font-size: small; font-weight: 600; color: var(--ace-bg, #cbd5e1); }
      .optin-form { display: flex; gap: 5px; flex: 1; max-width: 360px; }
      .optin-form input { flex: 1; font-size: small; padding: 5px 8px; border: 0.5px solid #475569; border-radius: 4px; background: var(--ace-foreground, #1e293b); color: var(--ace-bg, #fff); outline: none; }
      .optin-form button { background: #16a34a; color: var(--ace-bg, #fff); border: none; font-size: small; font-weight: 700; padding: 5px 12px; border-radius: 4px; cursor: pointer; white-space: nowrap; }
    `
	}
];

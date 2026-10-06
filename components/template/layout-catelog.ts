import type { ITemplateItem } from "./template";

export const CATALOG_BROCHURE_TEMPLATES: ITemplateItem[] = [
	{
		id: 'catalog-three-column-products',
		title: '3-Column Product Grid Catalog',
		styleVariant: '3-Up Grid',
		htmlContent: `
      <div class="cat-grid-wrapper">
        <header class="cat-header">
          <h3>Featured Hardware Collection</h3>
          <p>Next-Gen High Performance Nodes</p>
        </header>
        <div class="cat-grid">
          <div class="item">
            <div class="badge">NEW</div>
            <div class="img-ph">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            </div>
            <h4>Edge Node Alpha</h4>
            <ul class="specs-mini">
              <li>16GB LPDDR5</li>
              <li>Quad-Core ARM</li>
            </ul>
            <div class="footer-row">
              <span class="price">$29.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
          <div class="item highlight">
            <div class="badge hot">POPULAR</div>
            <div class="img-ph">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <h4>Pro Hub X2</h4>
            <ul class="specs-mini">
              <li>32GB Unified</li>
              <li>Dual 10GbE Port</li>
            </ul>
            <div class="footer-row">
              <span class="price">$49.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
          <div class="item">
            <div class="badge">PRO</div>
            <div class="img-ph">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h4>Cluster Blade</h4>
            <ul class="specs-mini">
              <li>64GB High Bandwidth</li>
              <li>NVMe Gen4 Storage</li>
            </ul>
            <div class="footer-row">
              <span class="price">$89.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .cat-grid-wrapper { padding: 8px; background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 4px; }
      .cat-header { margin-bottom: 6px; text-align: center; }
      .cat-header h3 { font-size: 5px; color: #0f172a; font-weight: 700; }
      .cat-header p { font-size: 3px; color: #64748b; }
      .cat-grid { display: flex; gap: 4px; }
      .item { flex: 1; background: #ffffff; border: 0.5px solid #cbd5e1; border-radius: 3px; padding: 4px; position: relative; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
      .item.highlight { border-color: #3b82f6; background: #f0f9ff; }
      .badge { position: absolute; top: 2px; right: 2px; background: #e2e8f0; color: #475569; font-size: 2px; font-weight: 700; padding: 1px 2.5px; border-radius: 2px; text-transform: uppercase; }
      .badge.hot { background: #3b82f6; color: #ffffff; }
      .img-ph { height: 22px; background: #f1f5f9; border-radius: 2px; display: flex; align-items: center; justify-content: center; color: #94a3b8; margin-bottom: 3px; }
      h4 { font-size: 3.6px; color: #0f172a; margin-bottom: 2px; font-weight: 600; }
      .specs-mini { list-style: none; margin-bottom: 4px; }
      .specs-mini li { font-size: 2.5px; color: #64748b; margin-bottom: 1px; display: flex; align-items: center; }
      .specs-mini li::before { content: "•"; color: #94a3b8; margin-right: 2px; }
      .footer-row { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 2px; border-top: 0.5px solid #f1f5f9; }
      .price { font-size: 3.5px; font-weight: 700; color: #16a34a; }
      .buy-btn { background: #0f172a; color: #fff; border: none; font-size: 2.5px; padding: 1px 4px; border-radius: 2px; cursor: pointer; font-weight: 600; }
    `
	},
	{
		id: 'brochure-trifold-panel-layout',
		title: 'Trifold Brochure Three Panels Layout',
		styleVariant: 'Trifold Architecture',
		htmlContent: `
      <div class="trifold-container">
        <div class="panel panel-left">
          <div class="panel-tag">INSIDE FLAP</div>
          <h5>Why Choose Us</h5>
          <p class="panel-desc">Empowering next-gen web applications with sub-millisecond automated proxy configurations.</p>
          <ul class="panel-list">
            <li>Zero-latency routing</li>
            <li>Cloudflare edge support</li>
            <li>Custom WebSocket protocols</li>
          </ul>
        </div>
        <div class="panel panel-center">
          <div class="panel-tag">BACK COVER</div>
          <h5>Global Infrastructure</h5>
          <div class="stat-box">
            <strong>99.99%</strong>
            <span>Uptime SLA guarantee</span>
          </div>
          <p class="contact-mini">info@pryor.games &bull; pryor.games</p>
        </div>
        <div class="panel panel-right main-cover">
          <div class="panel-tag hero-tag">FRONT COVER</div>
          <div class="brand-badge">2026 EDITION</div>
          <h5>Pryor Framework Architecture</h5>
          <p class="hero-sub">Enterprise Docking & Layout System</p>
          <div class="cover-cta">EXPAND HORIZONS</div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .trifold-container { display: flex; gap: 3px; background: #e2e8f0; padding: 3px; border-radius: 4px; }
      .panel { flex: 1; border: 0.5px dashed #94a3b8; padding: 5px; background: #ffffff; border-radius: 2px; display: flex; flex-direction: column; min-height: 70px; }
      .panel-tag { font-size: 2px; font-weight: 700; color: #94a3b8; letter-spacing: 0.5px; margin-bottom: 3px; }
      .panel-tag.hero-tag { color: #38bdf8; }
      .panel h5 { font-size: 4px; color: #0f172a; margin-bottom: 3px; font-weight: 700; }
      .panel-desc { font-size: 2.8px; color: #475569; line-height: 1.3; margin-bottom: 4px; }
      .panel-list { list-style: none; padding: 0; margin-bottom: 4px; }
      .panel-list li { font-size: 2.6px; color: #334155; margin-bottom: 1.5px; padding-left: 4px; position: relative; }
      .panel-list li::before { content: "✓"; position: absolute; left: 0; color: #16a34a; font-weight: bold; }
      .panel-center { background: #f8fafc; text-align: center; justify-content: space-between; }
      .stat-box { background: #ffffff; border: 0.5px solid #e2e8f0; padding: 3px; border-radius: 3px; margin: 3px 0; }
      .stat-box strong { font-size: 5px; color: #2563eb; display: block; }
      .stat-box span { font-size: 2.2px; color: #64748b; }
      .contact-mini { font-size: 2.3px; color: #64748b; }
      .main-cover { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-style: solid; border-color: #0f172a; justify-content: space-between; }
      .main-cover h5 { color: #ffffff; font-size: 4.8px; line-height: 1.2; }
      .brand-badge { background: #2563eb; color: #fff; font-size: 2px; font-weight: 700; padding: 1px 3px; border-radius: 2px; width: fit-content; margin-bottom: 4px; }
      .hero-sub { font-size: 2.8px; color: #94a3b8; margin-bottom: auto; }
      .cover-cta { background: #ffffff; color: #0f172a; font-size: 2.5px; font-weight: 700; text-align: center; padding: 2px 0; border-radius: 2px; letter-spacing: 0.5px; }
    `
	},
	{
		id: 'catalog-horizontal-spec-list',
		title: 'Spec Sheet Detailed Matrix List',
		styleVariant: 'Technical Specs',
		htmlContent: `
      <div class="spec-matrix">
        <header class="spec-header">
          <span class="category-tag">AI & MODEL BENCHMARKS</span>
          <h3>LLM Runtime & Parameter Specifications</h3>
        </header>
        <div class="spec-table">
          <div class="spec-row header-row">
            <span class="col-name">MODEL IDENTIFIER</span>
            <span class="col-quant">QUANTIZATION</span>
            <span class="col-params">PARAMS</span>
            <span class="col-vram">REQ VRAM</span>
            <span class="col-status">STATUS</span>
          </div>
          <div class="spec-row">
            <span class="col-name">Llama-3-70B-Instruct-GGUF</span>
            <span class="col-quant">Q6_K_L</span>
            <span class="col-params">70B</span>
            <span class="col-vram">42.5 GB</span>
            <span class="col-status ready">STABLE</span>
          </div>
          <div class="spec-row alt">
            <span class="col-name">Mistral-Nemo-12B-Base</span>
            <span class="col-quant">Q8_0</span>
            <span class="col-params">12B</span>
            <span class="col-vram">13.8 GB</span>
            <span class="col-status ready">STABLE</span>
          </div>
          <div class="spec-row">
            <span class="col-name">DeepSeek-R1-Distill-Qwen</span>
            <span class="col-quant">Q4_K_M</span>
            <span class="col-params">14B</span>
            <span class="col-vram">9.2 GB</span>
            <span class="col-status beta">TESTING</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: "JetBrains Mono", "Courier New", monospace; box-sizing: border-box; margin: 0; padding: 0; }
      .spec-matrix { background: #0f172a; color: #f8fafc; padding: 6px; border-radius: 4px; border: 0.5px solid #334155; }
      .spec-header { margin-bottom: 6px; border-bottom: 0.5px solid #334155; padding-bottom: 4px; }
      .category-tag { font-size: 2px; color: #38bdf8; letter-spacing: 0.5px; font-weight: 700; display: block; margin-bottom: 1px; }
      .spec-header h3 { font-size: 4px; color: #f8fafc; font-weight: 600; }
      .spec-table { width: 100%; display: flex; flex-direction: column; gap: 1px; }
      .spec-row { display: flex; align-items: center; justify-content: space-between; padding: 2.5px 3px; font-size: 2.8px; border-radius: 2px; }
      .spec-row.alt { background: rgba(255, 255, 255, 0.03); }
      .header-row { background: #1e293b; font-weight: 700; color: #94a3b8; font-size: 2.3px; letter-spacing: 0.3px; }
      .col-name { flex: 2; font-weight: 600; color: #e2e8f0; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
      .header-row .col-name { color: #94a3b8; }
      .col-quant { flex: 1; color: #38bdf8; }
      .col-params { flex: 0.8; color: #cbd5e1; }
      .col-vram { flex: 1; color: #f59e0b; }
      .col-status { flex: 0.8; text-align: right; font-weight: 700; font-size: 2.2px; }
      .col-status.ready { color: #4ade80; }
      .col-status.beta { color: #fbbf24; }
    `
	},
	{
		id: 'brochure-hero-splash-cover',
		title: 'Brochure Hero Splash Poster Cover',
		styleVariant: 'Editorial Splash Cover',
		htmlContent: `
      <div class="splash-poster">
        <div class="overlay-pattern"></div>
        <div class="top-meta">
          <span class="vol-tag">VOL. 08 / ISSUE 04</span>
          <span class="date-tag">OCTOBER 2026</span>
        </div>
        <div class="hero-content">
          <span class="edition-badge">ANNUAL TECH SHOWCASE</span>
          <h1>NEXT ARCHITECTURE</h1>
          <p class="subtitle">Exploring Distributed Browser Workspaces, Tunnels & Lumino Layout Systems</p>
        </div>
        <div class="bottom-bar">
          <div class="presenter">
            <span class="lbl">KEYNOTE PRESENTED BY</span>
            <span class="val">Brian Cullinan</span>
          </div>
          <div class="brand">
            <span>PRYOR.GAMES</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .splash-poster { background: #030712; color: #ffffff; padding: 10px; border-radius: 4px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; min-height: 110px; border: 0.5px solid #1f2937; }
      .top-meta { display: flex; justify-content: space-between; font-size: 2.4px; color: #e11d48; font-weight: 700; letter-spacing: 0.5px; border-bottom: 0.5px solid #1f2937; padding-bottom: 3px; z-index: 2; }
      .hero-content { margin: auto 0; padding: 8px 0; z-index: 2; }
      .edition-badge { font-size: 2.2px; font-weight: 800; background: #f43f5e; color: #ffffff; padding: 1px 3px; border-radius: 2px; letter-spacing: 0.8px; text-transform: uppercase; display: inline-block; margin-bottom: 3px; }
      h1 { font-size: 9px; font-weight: 900; letter-spacing: -0.2px; line-height: 1.05; color: #ffffff; margin-bottom: 3px; text-transform: uppercase; background: linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .subtitle { font-size: 3.2px; color: #fda4af; font-weight: 400; line-height: 1.3; max-width: 90%; }
      .bottom-bar { display: flex; justify-content: space-between; align-items: flex-end; border-top: 0.5px solid #1f2937; padding-top: 4px; z-index: 2; }
      .presenter .lbl { font-size: 2px; color: #64748b; display: block; font-weight: 600; }
      .presenter .val { font-size: 2.8px; color: #f3f4f6; font-weight: 700; }
      .brand { font-size: 3px; font-weight: 900; letter-spacing: 0.8px; color: #f43f5e; }
    `
	},
	{
		id: 'catalog-pricing-tier-matrix',
		title: 'Pricing Tiers Comparison Grid',
		styleVariant: 'SaaS Tier Matrix',
		htmlContent: `
      <div class="pricing-card-expanded">
        <div class="tier-header">
          <span class="popular-ribbon">RECOMMENDED</span>
          <h3>ENTERPRISE PRO</h3>
          <p class="tier-desc">Designed for heavy WebSockets & remote dev environments</p>
        </div>
        <div class="price-container">
          <span class="currency">$</span>
          <span class="cost">49</span>
          <span class="period">/ month</span>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li><strong>Unlimited</strong> Cloudflare Tunnel Bridges</li>
          <li><strong>Full API</strong> & SOCKS5 Proxy Access</li>
          <li><strong>Custom</strong> Subdomain Route (pryor.games)</li>
          <li><strong>Lumino Engine</strong> State Restoration</li>
        </ul>
        <button class="cta-button">Deploy Instance Now</button>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pricing-card-expanded { background: #ffffff; border: 1px solid #2563eb; border-radius: 5px; padding: 7px; text-align: center; position: relative; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.1); }
      .popular-ribbon { background: #2563eb; color: #ffffff; font-size: 2px; font-weight: 800; padding: 1px 5px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 2px; }
      .tier-header h3 { font-size: 4.5px; color: #1e3a8a; font-weight: 800; margin-bottom: 1px; }
      .tier-desc { font-size: 2.6px; color: #64748b; margin-bottom: 4px; }
      .price-container { display: flex; align-items: baseline; justify-content: center; margin-bottom: 4px; }
      .currency { font-size: 4px; font-weight: 700; color: #2563eb; top: -2px; position: relative; }
      .cost { font-size: 8px; font-weight: 900; color: #1e3a8a; letter-spacing: -0.5px; }
      .period { font-size: 2.8px; color: #64748b; margin-left: 1px; }
      .divider { height: 0.5px; background: #e2e8f0; margin: 4px 0; }
      .features-list { list-style: none; padding: 0; text-align: left; margin-bottom: 6px; }
      .features-list li { font-size: 2.7px; color: #334155; margin-bottom: 2px; display: flex; align-items: center; }
      .features-list li::before { content: "✓"; color: #2563eb; font-weight: bold; margin-right: 3px; font-size: 3px; }
      .cta-button { width: 100%; background: #2563eb; color: #ffffff; border: none; padding: 3px 0; font-size: 2.8px; font-weight: 700; border-radius: 3px; cursor: pointer; transition: background 0.2s; }
    `
	},
	{
		id: 'brochure-contact-information-footer',
		title: 'Brochure Contact Information Panel',
		styleVariant: 'Dark Modern Footer',
		htmlContent: `
      <div class="contact-card">
        <div class="contact-header">
          <h4>GET IN TOUCH WITH OUR TEAM</h4>
          <p>Questions about deployment or custom network setups?</p>
        </div>
        <div class="contact-grid">
          <div class="contact-item">
            <div class="icon">✉</div>
            <div class="details">
              <span class="label">EMAIL US</span>
              <span class="val">contact@pryor.games</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon">🌐</div>
            <div class="details">
              <span class="label">OFFICIAL PORTAL</span>
              <span class="val">pryor.games</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon">📍</div>
            <div class="details">
              <span class="label">OFFICE LOCATION</span>
              <span class="val">Flagstaff, Arizona, USA</span>
            </div>
          </div>
        </div>
        <div class="contact-footer">
          <span>&copy; 2026 Pryor Games LLC. All rights reserved.</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .contact-card { background: #0f172a; color: #ffffff; padding: 6px; border-radius: 4px; border: 0.5px solid #1e293b; }
      .contact-header { text-align: center; margin-bottom: 5px; border-bottom: 0.5px solid #1e293b; padding-bottom: 4px; }
      .contact-header h4 { font-size: 3.8px; color: #38bdf8; letter-spacing: 0.3px; margin-bottom: 1px; font-weight: 700; }
      .contact-header p { font-size: 2.5px; color: #94a3b8; }
      .contact-grid { display: flex; gap: 4px; margin-bottom: 5px; }
      .contact-item { flex: 1; background: #1e293b; padding: 3px; border-radius: 3px; display: flex; align-items: center; gap: 3px; }
      .contact-item .icon { font-size: 4px; background: #0f172a; width: 10px; height: 10px; display: flex; align-items: center; justify-content: center; border-radius: 2px; }
      .details { display: flex; flex-direction: column; }
      .details .label { font-size: 1.8px; color: #64748b; font-weight: 700; }
      .details .val { font-size: 2.5px; color: #e2e8f0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .contact-footer { text-align: center; border-top: 0.5px solid #1e293b; padding-top: 3px; font-size: 2px; color: #64748b; }
    `
	},
	{
		id: 'catalog-featured-item-spotlight',
		title: 'Featured Item Highlight Spotlight',
		styleVariant: 'Amber Spotlight Banner',
		htmlContent: `
      <div class="spotlight-card">
        <div class="spotlight-badge-row">
          <span class="spotlight-tag">FEATURED ENGINE</span>
          <span class="version">v2.4 RELEASE</span>
        </div>
        <div class="spotlight-body">
          <h3>Lumino Layout Framework</h3>
          <p class="description">Advanced, customizable window layout and tab management built strictly for complex TypeScript Web Applications.</p>
          <div class="pill-group">
            <span class="pill">Dockable Windows</span>
            <span class="pill">State Persistence</span>
            <span class="pill">TypeScript Native</span>
          </div>
        </div>
        <div class="spotlight-action">
          <div class="author-block">
            <span class="by">AUTHOR</span>
            <span class="author-name">Brian Cullinan</span>
          </div>
          <button class="action-btn">Explore Docs →</button>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .spotlight-card { background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border: 0.5px solid #f59e0b; border-radius: 4px; padding: 6px; position: relative; box-shadow: 0 2px 4px rgba(245, 158, 11, 0.08); }
      .spotlight-badge-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
      .spotlight-tag { background: #d97706; color: #ffffff; font-size: 2px; font-weight: 800; padding: 1px 3px; border-radius: 2px; letter-spacing: 0.3px; }
      .version { font-size: 2.2px; font-weight: 700; color: #b45309; }
      .spotlight-body h3 { font-size: 4.5px; color: #78350f; font-weight: 800; margin-bottom: 2px; }
      .description { font-size: 2.8px; color: #92400e; line-height: 1.3; margin-bottom: 4px; }
      .pill-group { display: flex; gap: 2px; margin-bottom: 5px; }
      .pill { background: rgba(245, 158, 11, 0.2); color: #78350f; font-size: 2px; font-weight: 600; padding: 1px 3px; border-radius: 10px; }
      .spotlight-action { display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid #fde68a; padding-top: 3px; }
      .author-block .by { font-size: 1.8px; color: #b45309; display: block; font-weight: 700; }
      .author-block .author-name { font-size: 2.6px; color: #78350f; font-weight: 700; }
      .action-btn { background: #b45309; color: #ffffff; border: none; font-size: 2.4px; font-weight: 700; padding: 2px 5px; border-radius: 2px; cursor: pointer; }
    `
	},
	{
		id: 'brochure-event-schedule-grid',
		title: 'Event Schedule Timeline Block',
		styleVariant: 'Vertical Timeline',
		htmlContent: `
      <div class="schedule-block">
        <header class="sched-header">
          <span class="sched-date">SATURDAY, OCT 24, 2026</span>
          <h3>Centennial Celebration Schedule</h3>
        </header>
        <div class="timeline">
          <div class="timeline-item">
            <div class="time-col">
              <span class="time">10:00 AM</span>
              <span class="duration">45 mins</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>Grand Opening & Welcome Keynote</strong>
              <p>Opening remarks and historical overview at Scottsdale Celebration Center.</p>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="time-col">
              <span class="time">11:30 AM</span>
              <span class="duration">60 mins</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>100th Birthday Ceremony & Luncheon</strong>
              <p>Honoring 100 years of achievements with special family guest presentations.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time-col">
              <span class="time">02:00 PM</span>
              <span class="duration">90 mins</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>Interactive Memory Showcase</strong>
              <p>Digital gallery exhibition hosted on Aura Frames platform.</p>
            </div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .schedule-block { background: #ffffff; border: 0.5px solid #e2e8f0; border-radius: 4px; padding: 6px; }
      .sched-header { margin-bottom: 6px; border-bottom: 0.5px solid #f1f5f9; padding-bottom: 3px; }
      .sched-date { font-size: 2.2px; font-weight: 800; color: #6d28d9; letter-spacing: 0.5px; display: block; margin-bottom: 1px; }
      .sched-header h3 { font-size: 4px; color: #0f172a; font-weight: 700; }
      .timeline { display: flex; flex-direction: column; gap: 4px; }
      .timeline-item { display: flex; align-items: flex-start; gap: 4px; position: relative; }
      .time-col { min-width: 18px; text-align: right; }
      .time-col .time { font-size: 2.8px; font-weight: 700; color: #6d28d9; display: block; }
      .time-col .duration { font-size: 2px; color: #94a3b8; }
      .marker { width: 4px; height: 4px; border-radius: 50%; background: #cbd5e1; margin-top: 1px; flex-shrink: 0; position: relative; z-index: 2; }
      .timeline-item.active .marker { background: #8b5cf6; box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2); }
      .event-details { flex: 1; background: #f8fafc; padding: 3px; border-radius: 3px; border-left: 1.5px solid #cbd5e1; }
      .timeline-item.active .event-details { border-left-color: #8b5cf6; background: #f5f3ff; }
      .event-details strong { font-size: 3px; color: #0f172a; display: block; margin-bottom: 1px; }
      .event-details p { font-size: 2.4px; color: #64748b; line-height: 1.3; }
    `
	},
	{
		id: 'catalog-lookbook-fullwidth-image',
		title: 'Lookbook Fullwidth Photo Frame',
		styleVariant: 'Minimalist Photo Frame',
		htmlContent: `
      <div class="lookbook-container">
        <div class="photo-frame">
          <div class="img-placeholder">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>[ HIGH RESOLUTION TOPOLOGY MAP ]</span>
          </div>
          <span class="photo-tag">DIAGRAM 4.2</span>
        </div>
        <div class="caption-bar">
          <div class="caption-content">
            <h4>Cloudflare Tunnel & SOCKS5 Architecture</h4>
            <p>Direct peer connection topology routing WebSockets via double reverse proxy instances.</p>
          </div>
          <div class="meta-tag">
            <span>PNG &bull; 3840 x 2160</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .lookbook-container { background: #ffffff; border: 0.5px solid #cbd5e1; border-radius: 4px; padding: 5px; }
      .photo-frame { position: relative; border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
      .img-placeholder { height: 38px; background: #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #64748b; gap: 2px; }
      .img-placeholder span { font-size: 2.5px; font-weight: 700; letter-spacing: 0.5px; }
      .photo-tag { position: absolute; top: 3px; left: 3px; background: rgba(15, 23, 42, 0.75); color: #ffffff; font-size: 2px; font-weight: 700; padding: 1px 3px; border-radius: 2px; }
      .caption-bar { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 1px; }
      .caption-content h4 { font-size: 3.4px; color: #0f172a; font-weight: 700; margin-bottom: 1px; }
      .caption-content p { font-size: 2.5px; color: #64748b; }
      .meta-tag span { font-size: 2px; color: #94a3b8; font-weight: 600; }
    `
	},
	{
		id: 'brochure-map-location-block',
		title: 'Venue Location & Interactive Map',
		styleVariant: 'Venue Location Card',
		htmlContent: `
      <div class="venue-card">
        <div class="map-view">
          <div class="map-grid-pattern"></div>
          <div class="pin">
            <span class="pin-icon">📍</span>
            <span class="pin-label">Scottsdale Celebration Center</span>
          </div>
        </div>
        <div class="venue-details">
          <div class="info-group">
            <h5>EVENT VENUE</h5>
            <p class="address">7500 E McCormick Pkwy, Scottsdale, AZ 85258</p>
          </div>
          <div class="info-group right">
            <h5>DATE & TIME</h5>
            <p class="time-str">Oct 24, 2026 &bull; 10:00 AM</p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .venue-card { background: #f8fafc; border: 0.5px solid #cbd5e1; border-radius: 4px; padding: 5px; }
      .map-view { height: 30px; background: #cbd5e1; border-radius: 3px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; border: 0.5px solid #94a3b8; }
      .pin { background: #ffffff; border: 0.5px solid #0f172a; padding: 1px 4px; border-radius: 12px; display: flex; align-items: center; gap: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); }
      .pin-icon { font-size: 3px; }
      .pin-label { font-size: 2.4px; font-weight: 700; color: #0f172a; }
      .venue-details { display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 3px 4px; border-radius: 2px; border: 0.5px solid #e2e8f0; }
      .info-group h5 { font-size: 1.8px; color: #64748b; font-weight: 800; letter-spacing: 0.3px; margin-bottom: 1px; }
      .address { font-size: 2.5px; color: #0f172a; font-weight: 600; }
      .right { text-align: right; }
      .time-str { font-size: 2.5px; color: #2563eb; font-weight: 700; }
    `
	},
	{
		id: 'catalog-stats-overview-dashboard',
		title: 'Catalog Key Metrics & Stat Highlights',
		styleVariant: 'Analytics Dashboard',
		htmlContent: `
      <div class="metrics-panel">
        <header class="panel-head">
          <span class="sub">PERFORMANCE MATRIX</span>
          <h3>Network Infrastructure Analytics</h3>
        </header>
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-title">TOTAL TUNNELS</span>
            <div class="metric-value">1,420<span class="growth">+12%</span></div>
            <span class="metric-sub">Active Cloudflare connections</span>
          </div>
          <div class="metric-card">
            <span class="metric-title">LATENCY</span>
            <div class="metric-value">4.2ms<span class="growth positive">-0.8ms</span></div>
            <span class="metric-sub">Global average response</span>
          </div>
          <div class="metric-card">
            <span class="metric-title">REPOSITORIES</span>
            <div class="metric-value">86<span class="growth">TS</span></div>
            <span class="metric-sub">Lumino & Activity apps</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .metrics-panel { background: #1e293b; color: #ffffff; padding: 6px; border-radius: 4px; border: 0.5px solid #334155; }
      .panel-head { margin-bottom: 5px; }
      .panel-head .sub { font-size: 2px; color: #38bdf8; font-weight: 800; letter-spacing: 0.5px; display: block; }
      .panel-head h3 { font-size: 4px; color: #f8fafc; font-weight: 700; }
      .metrics-grid { display: flex; gap: 4px; }
      .metric-card { flex: 1; background: #0f172a; padding: 4px; border-radius: 3px; border: 0.5px solid #334155; }
      .metric-title { font-size: 1.8px; color: #94a3b8; font-weight: 700; letter-spacing: 0.3px; display: block; margin-bottom: 2px; }
      .metric-value { font-size: 5.5px; font-weight: 900; color: #ffffff; display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 1px; }
      .growth { font-size: 2.2px; font-weight: 700; color: #38bdf8; }
      .growth.positive { color: #4ade80; }
      .metric-sub { font-size: 2px; color: #64748b; display: block; }
    `
	},
	{
		id: 'brochure-testimonial-quote-block',
		title: 'Brochure Testimonial Quote Banner',
		styleVariant: 'Quote Banner',
		htmlContent: `
      <div class="quote-card">
        <div class="quote-mark">“</div>
        <p class="quote-text">The integration of WebSockets with local SOCKS5 proxy workers completely redefined how we share local workspace environments in real time.</p>
        <div class="author-row">
          <div class="avatar-ph">BC</div>
          <div class="author-meta">
            <span class="name">Brian Cullinan</span>
            <span class="title">Lead Systems Architect, pryor.games</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .quote-card { background: #f0fdf4; border: 0.5px solid #86efac; border-radius: 4px; padding: 6px; position: relative; }
      .quote-mark { font-size: 12px; line-height: 8px; color: #16a34a; opacity: 0.3; position: absolute; top: 4px; left: 4px; font-family: Georgia, serif; }
      .quote-text { font-size: 3.2px; color: #14532d; font-style: italic; line-height: 1.4; margin-bottom: 5px; position: relative; z-index: 2; padding-left: 6px; }
      .author-row { display: flex; align-items: center; gap: 3px; padding-left: 6px; }
      .avatar-ph { width: 10px; height: 10px; border-radius: 50%; background: #16a34a; color: #ffffff; font-size: 3px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
      .author-meta { display: flex; flex-direction: column; }
      .author-meta .name { font-size: 2.8px; font-weight: 700; color: #0f172a; }
      .author-meta .title { font-size: 2.2px; color: #15803d; }
    `
	}
];

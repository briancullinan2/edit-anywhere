import type { ITemplateItem } from "./template";

export const CATALOG_BROCHURE_TEMPLATES: ITemplateItem[] = [
	{
		id: 'catalog-three-column-products',
		title: '3-Column Product Grid Catalog',
		styleVariant: '3-Up Grid',
		description: 'Equal-width three-product catalog grid for hardware or SaaS SKUs. Each card carries a status badge, icon placeholder, title, mini-spec list, price, and action button. Ideal for product landing pages, hardware catalogs, and feature comparison strips.',
		htmlContent: `
      <div class="cat-grid-wrapper">
        <header class="cat-header">
          <h3>Featured Hardware Collection</h3>
          <p>Next-gen high-performance edge nodes engineered for local-first tunnel workloads</p>
        </header>
        <div class="cat-grid">
          <div class="item">
            <div class="badge">NEW</div>
            <div class="img-ph">📦</div>
            <h4>Edge Node Alpha</h4>
            <ul class="specs-mini">
              <li>16 GB LPDDR5</li>
              <li>Quad-Core ARM</li>
              <li>Passive cooling</li>
            </ul>
            <div class="footer-row">
              <span class="price">$29.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
          <div class="item highlight">
            <div class="badge hot">POPULAR</div>
            <div class="img-ph">⚡</div>
            <h4>Pro Hub X2</h4>
            <ul class="specs-mini">
              <li>32 GB Unified</li>
              <li>Dual 10 GbE</li>
              <li>Hot-swap SSD</li>
            </ul>
            <div class="footer-row">
              <span class="price">$49.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
          <div class="item">
            <div class="badge">PRO</div>
            <div class="img-ph">🚀</div>
            <h4>Cluster Blade</h4>
            <ul class="specs-mini">
              <li>64 GB High-BW</li>
              <li>NVMe Gen4</li>
              <li>Rack-ready</li>
            </ul>
            <div class="footer-row">
              <span class="price">$89.99</span>
              <button class="buy-btn">View</button>
            </div>
          </div>
        </div>
        <p class="usage">Use three equal cards for peer SKUs. Mark one as “POPULAR” to guide conversion. Keep each spec list to three lines. Replace emoji placeholders with product photography or isometric icons before production.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .cat-grid-wrapper { padding: 8px; background: #f8fafc; border: 0.5px solid #e2e8f0; border-radius: 4px; }
      .cat-header { margin-bottom: 6px; text-align: center; }
      .cat-header h3 { font-size: medium; color: var(--ace-foreground, #0f172a); font-weight: 800; margin-bottom: 2px; }
      .cat-header p { font-size: small; color: var(--ace-comment, #64748b); }
      .cat-grid { display: flex; gap: 5px; margin-bottom: 5px; }
      .item { flex: 1; background: #fff; border: 0.5px solid #cbd5e1; border-radius: 3px; padding: 5px; position: relative; display: flex; flex-direction: column; }
      .item.highlight { border-color: #3b82f6; background: #f0f9ff; }
      .badge { position: absolute; top: 3px; right: 3px; background: #e2e8f0; color: #475569; font-size: small; font-weight: 800; padding: 1px 4px; border-radius: 2px; text-transform: uppercase; }
      .badge.hot { background: #3b82f6; color: var(--ace-bg, #fff); }
      .img-ph { height: 24px; background: #f1f5f9; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: medium; margin-bottom: 4px; }
      h4 { font-size: small; color: var(--ace-foreground, #0f172a); margin-bottom: 3px; font-weight: 700; }
      .specs-mini { list-style: none; margin-bottom: 5px; flex: 1; }
      .specs-mini li { font-size: small; color: var(--ace-comment, #64748b); margin-bottom: 1px; }
      .footer-row { display: flex; align-items: center; justify-content: space-between; padding-top: 3px; border-top: 0.5px solid #f1f5f9; }
      .price { font-size: medium; font-weight: 800; color: #16a34a; }
      .buy-btn { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #fff); border: none; font-size: small; padding: 2px 6px; border-radius: 2px; font-weight: 700; cursor: pointer; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'brochure-trifold-panel-layout',
		title: 'Trifold Brochure Three Panels Layout',
		styleVariant: 'Trifold Architecture',
		description: 'Print-ready trifold brochure simulation showing the three visible panels when the brochure is fully open: inside flap, back cover, and front cover. Use for physical marketing collateral, conference handouts, and product leave-behinds.',
		htmlContent: `
      <div class="trifold-container">
        <div class="panel panel-left">
          <div class="panel-tag">INSIDE FLAP</div>
          <h5>Why Choose Us</h5>
          <p class="panel-desc">We eliminate the friction between local development and edge deployment. One agent, one tunnel, zero inbound ports.</p>
          <ul class="panel-list">
            <li>Sub-5 ms local-to-tab latency</li>
            <li>Cloudflare edge termination</li>
            <li>Native WebSocket + SOCKS5</li>
            <li>Deterministic tab recovery</li>
          </ul>
        </div>
        <div class="panel panel-center">
          <div class="panel-tag">BACK COVER</div>
          <h5>Global Infrastructure</h5>
          <div class="stat-box">
            <strong>99.99 %</strong>
            <span>Uptime SLA across 12 regions</span>
          </div>
          <p class="contact-mini">info@pryor.games · pryor.games<br>Flagstaff, Arizona · USA</p>
        </div>
        <div class="panel panel-right main-cover">
          <div class="panel-tag hero-tag">FRONT COVER</div>
          <div class="brand-badge">2026 EDITION</div>
          <h5>Pryor Framework Architecture</h5>
          <p class="hero-sub">Enterprise docking, layout & encrypted tunnel system for modern TypeScript teams</p>
          <div class="cover-cta">EXPAND HORIZONS</div>
        </div>
      </div>
      <p class="usage">Design for print: left panel becomes the inside flap, center the back, right the front. Keep text density low—trifold real estate is limited. The dashed borders are production guides; remove them in final print files.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .trifold-container { display: flex; gap: 4px; background: #e2e8f0; padding: 4px; border-radius: 4px; margin-bottom: 4px; }
      .panel { flex: 1; border: 0.5px dashed #94a3b8; padding: 6px; background: #fff; border-radius: 2px; display: flex; flex-direction: column; min-height: 80px; }
      .panel-tag { font-size: small; font-weight: 800; color: var(--ace-bg, #94a3b8); letter-spacing: 0.4px; margin-bottom: 3px; }
      .panel-tag.hero-tag { color: #38bdf8; }
      .panel h5 { font-size: medium; color: var(--ace-foreground, #0f172a); margin-bottom: 3px; font-weight: 800; }
      .panel-desc { font-size: small; color: #475569; line-height: 1.3; margin-bottom: 4px; }
      .panel-list { list-style: none; padding: 0; margin-bottom: 0; }
      .panel-list li { font-size: small; color: #334155; margin-bottom: 2px; padding-left: 10px; position: relative; }
      .panel-list li::before { content: "✓"; position: absolute; left: 0; color: #16a34a; font-weight: 700; }
      .panel-center { background: #f8fafc; text-align: center; justify-content: space-between; }
      .stat-box { background: #fff; border: 0.5px solid #e2e8f0; padding: 4px; border-radius: 3px; margin: 4px 0; }
      .stat-box strong { font-size: large; color: #2563eb; display: block; }
      .stat-box span { font-size: small; color: var(--ace-comment, #64748b); }
      .contact-mini { font-size: small; color: var(--ace-comment, #64748b); line-height: 1.3; }
      .main-cover { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: var(--ace-bg, #fff); border-style: solid; border-color: var(--ace-foreground, #0f172a); justify-content: space-between; }
      .main-cover h5 { color: var(--ace-bg, #fff); font-size: medium; line-height: 1.2; }
      .brand-badge { background: #2563eb; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 4px; border-radius: 2px; width: fit-content; margin-bottom: 4px; }
      .hero-sub { font-size: small; color: var(--ace-bg, #94a3b8); margin-bottom: auto; line-height: 1.3; }
      .cover-cta { background: #fff; color: var(--ace-foreground, #0f172a); font-size: small; font-weight: 800; text-align: center; padding: 3px 0; border-radius: 2px; letter-spacing: 0.4px; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; line-height: 1.3; }
    `
	},
	{
		id: 'catalog-horizontal-spec-list',
		title: 'Spec Sheet Detailed Matrix List',
		styleVariant: 'Technical Specs',
		description: 'Dark, monospace technical specification matrix for model catalogs, hardware SKUs, or LLM runtime inventories. Columns are fixed-width and status chips are color-coded. Use in technical appendices, product data sheets, and internal runbooks.',
		htmlContent: `
      <div class="spec-matrix">
        <header class="spec-header">
          <span class="category-tag">AI & MODEL BENCHMARKS</span>
          <h3>LLM Runtime & Parameter Specifications</h3>
        </header>
        <div class="spec-table">
          <div class="spec-row header-row">
            <span class="col-name">MODEL IDENTIFIER</span>
            <span class="col-quant">QUANT</span>
            <span class="col-params">PARAMS</span>
            <span class="col-vram">VRAM</span>
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
          <div class="spec-row alt">
            <span class="col-name">Phi-3-Medium-128K</span>
            <span class="col-quant">Q5_K_M</span>
            <span class="col-params">14B</span>
            <span class="col-vram">10.1 GB</span>
            <span class="col-status ready">STABLE</span>
          </div>
        </div>
        <p class="usage">Keep column headers short. Status values must be one of STABLE / TESTING / EXPERIMENTAL. VRAM figures are peak measured under load; document the test harness in the accompanying notes.</p>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, "JetBrains Mono", monospace; box-sizing: border-box; margin: 0; padding: 0; }
      .spec-matrix { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #f8fafc); padding: 7px; border-radius: 4px; border: 0.5px solid #334155; }
      .spec-header { margin-bottom: 5px; border-bottom: 0.5px solid #334155; padding-bottom: 4px; }
      .category-tag { font-size: small; color: #38bdf8; letter-spacing: 0.5px; font-weight: 800; display: block; margin-bottom: 2px; }
      .spec-header h3 { font-size: medium; color: var(--ace-bg, #f8fafc); font-weight: 700; }
      .spec-table { width: 100%; display: flex; flex-direction: column; gap: 1px; margin-bottom: 5px; }
      .spec-row { display: flex; align-items: center; justify-content: space-between; padding: 3px 4px; font-size: small; border-radius: 2px; }
      .spec-row.alt { background: rgba(255,255,255,0.03); }
      .header-row { background: var(--ace-foreground, #1e293b); font-weight: 800; color: var(--ace-bg, #94a3b8); font-size: small; letter-spacing: 0.3px; }
      .col-name { flex: 2.2; font-weight: 600; color: var(--ace-bg, #e2e8f0); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .header-row .col-name { color: var(--ace-bg, #94a3b8); }
      .col-quant { flex: 0.9; color: #38bdf8; }
      .col-params { flex: 0.7; color: var(--ace-bg, #cbd5e1); }
      .col-vram { flex: 0.9; color: #f59e0b; }
      .col-status { flex: 0.8; text-align: right; font-weight: 800; font-size: small; }
      .col-status.ready { color: #4ade80; }
      .col-status.beta { color: #fbbf24; }
      .usage { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; border-top: 0.5px solid #334155; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'brochure-hero-splash-cover',
		title: 'Brochure Hero Splash Poster Cover',
		styleVariant: 'Editorial Splash Cover',
		description: 'Full-bleed editorial poster cover for annual reports, conference programs, and premium product launches. Dark background, oversized title, volume/date metadata, and presenter credit. Designed to feel like a magazine cover.',
		htmlContent: `
      <div class="splash-poster">
        <div class="top-meta">
          <span class="vol-tag">VOL. 08 / ISSUE 04</span>
          <span class="date-tag">OCTOBER 2026</span>
        </div>
        <div class="hero-content">
          <span class="edition-badge">ANNUAL TECH SHOWCASE</span>
          <h1>NEXT ARCHITECTURE</h1>
          <p class="subtitle">Exploring distributed browser workspaces, encrypted tunnels, and the Lumino layout system that keeps state alive across every tab.</p>
        </div>
        <div class="bottom-bar">
          <div class="presenter">
            <span class="lbl">KEYNOTE PRESENTED BY</span>
            <span class="val">Brian Cullinan</span>
          </div>
          <div class="brand">PRYOR.GAMES</div>
        </div>
      </div>
      <p class="usage">Print at full page or use as a digital splash. Keep the title under three words. Subtitle should expand the theme without repeating the title. Volume and date are mandatory for archival identity.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, "Helvetica Neue", sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .splash-poster { background: var(--ace-foreground, #030712); color: var(--ace-bg, #fff); padding: 12px; border-radius: 4px; display: flex; flex-direction: column; justify-content: space-between; min-height: 120px; border: 0.5px solid #1f2937; margin-bottom: 4px; }
      .top-meta { display: flex; justify-content: space-between; font-size: small; color: #e11d48; font-weight: 800; letter-spacing: 0.5px; border-bottom: 0.5px solid #1f2937; padding-bottom: 4px; }
      .hero-content { margin: auto 0; padding: 10px 0; }
      .edition-badge { font-size: small; font-weight: 800; background: #f43f5e; color: var(--ace-bg, #fff); padding: 2px 5px; border-radius: 2px; letter-spacing: 0.6px; text-transform: uppercase; display: inline-block; margin-bottom: 4px; }
      h1 { font-size: large; font-weight: 900; letter-spacing: -0.3px; line-height: 1.05; color: var(--ace-bg, #fff); margin-bottom: 4px; text-transform: uppercase; }
      .subtitle { font-size: medium; color: var(--ace-bg, #fda4af); font-weight: 400; line-height: 1.35; max-width: 92%; }
      .bottom-bar { display: flex; justify-content: space-between; align-items: flex-end; border-top: 0.5px solid #1f2937; padding-top: 5px; }
      .presenter .lbl { font-size: small; color: var(--ace-comment, #64748b); display: block; font-weight: 600; }
      .presenter .val { font-size: small; color: var(--ace-bg, #f3f4f6); font-weight: 800; }
      .brand { font-size: medium; font-weight: 900; letter-spacing: 0.8px; color: #f43f5e; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; line-height: 1.3; }
    `
	},
	{
		id: 'catalog-pricing-tier-matrix',
		title: 'Pricing Tiers Comparison Grid',
		styleVariant: 'SaaS Tier Matrix',
		description: 'Single highlighted pricing card optimized for the recommended mid-tier plan. Includes ribbon, price, feature checklist, and primary CTA. Place on pricing pages or as a mid-funnel conversion module.',
		htmlContent: `
      <div class="pricing-card-expanded">
        <div class="tier-header">
          <span class="popular-ribbon">RECOMMENDED</span>
          <h3>ENTERPRISE PRO</h3>
          <p class="tier-desc">Built for teams running continuous WebSocket tunnels and remote development environments at scale</p>
        </div>
        <div class="price-container">
          <span class="currency">$</span>
          <span class="cost">49</span>
          <span class="period">/ month</span>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li><strong>Unlimited</strong> Cloudflare tunnel bridges</li>
          <li><strong>Full API</strong> + SOCKS5 proxy access</li>
          <li><strong>Custom</strong> subdomain routing (*.pryor.games)</li>
          <li><strong>Lumino Engine</strong> deterministic state restoration</li>
          <li><strong>Priority</strong> chat + email support</li>
        </ul>
        <button class="cta-button">Deploy Instance Now</button>
        <p class="fine">14-day free trial · No credit card required · Cancel anytime</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pricing-card-expanded { background: #fff; border: 1.5px solid #2563eb; border-radius: 5px; padding: 10px; text-align: center; position: relative; box-shadow: 0 4px 12px -2px rgba(37,99,235,0.12); }
      .popular-ribbon { background: #2563eb; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 2px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.4px; display: inline-block; margin-bottom: 4px; }
      .tier-header h3 { font-size: medium; color: #1e3a8a; font-weight: 900; margin-bottom: 2px; }
      .tier-desc { font-size: small; color: var(--ace-comment, #64748b); margin-bottom: 6px; line-height: 1.3; }
      .price-container { display: flex; align-items: baseline; justify-content: center; margin-bottom: 6px; }
      .currency { font-size: medium; font-weight: 700; color: #2563eb; }
      .cost { font-size: large; font-weight: 900; color: #1e3a8a; letter-spacing: -0.5px; }
      .period { font-size: small; color: var(--ace-comment, #64748b); margin-left: 2px; }
      .divider { height: 0.5px; background: #e2e8f0; margin: 6px 0; }
      .features-list { list-style: none; padding: 0; text-align: left; margin-bottom: 8px; }
      .features-list li { font-size: small; color: #334155; margin-bottom: 3px; display: flex; align-items: center; }
      .features-list li::before { content: "✓"; color: #2563eb; font-weight: 800; margin-right: 4px; }
      .cta-button { width: 100%; background: #2563eb; color: var(--ace-bg, #fff); border: none; padding: 6px 0; font-size: medium; font-weight: 800; border-radius: 4px; cursor: pointer; margin-bottom: 4px; }
      .fine { font-size: small; color: var(--ace-bg, #94a3b8); margin: 0; }
    `
	},
	{
		id: 'brochure-contact-information-footer',
		title: 'Brochure Contact Information Panel',
		styleVariant: 'Dark Modern Footer',
		description: 'Dark contact footer panel for the back cover of a brochure or the final section of a digital leave-behind. Three equal contact channels plus copyright line. Keep information current and scannable.',
		htmlContent: `
      <div class="contact-card">
        <div class="contact-header">
          <h4>GET IN TOUCH WITH OUR TEAM</h4>
          <p>Questions about deployment, custom routing, or enterprise SLAs? We respond within four business hours.</p>
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
          <span>© 2026 Pryor Games LLC. All rights reserved. · Confidential when marked</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .contact-card { background: var(--ace-foreground, #0f172a); color: var(--ace-bg, #fff); padding: 8px; border-radius: 4px; border: 0.5px solid #1e293b; }
      .contact-header { text-align: center; margin-bottom: 6px; border-bottom: 0.5px solid #1e293b; padding-bottom: 5px; }
      .contact-header h4 { font-size: medium; color: #38bdf8; letter-spacing: 0.3px; margin-bottom: 2px; font-weight: 800; }
      .contact-header p { font-size: small; color: var(--ace-bg, #94a3b8); line-height: 1.3; }
      .contact-grid { display: flex; gap: 5px; margin-bottom: 6px; }
      .contact-item { flex: 1; background: var(--ace-foreground, #1e293b); padding: 5px; border-radius: 3px; display: flex; align-items: center; gap: 4px; }
      .contact-item .icon { font-size: medium; background: var(--ace-foreground, #0f172a); width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border-radius: 3px; flex-shrink: 0; }
      .details { display: flex; flex-direction: column; overflow: hidden; }
      .details .label { font-size: small; color: var(--ace-comment, #64748b); font-weight: 800; }
      .details .val { font-size: small; color: var(--ace-bg, #e2e8f0); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .contact-footer { text-align: center; border-top: 0.5px solid #1e293b; padding-top: 4px; font-size: small; color: var(--ace-comment, #64748b); }
    `
	},
	{
		id: 'catalog-featured-item-spotlight',
		title: 'Featured Item Highlight Spotlight',
		styleVariant: 'Amber Spotlight Banner',
		description: 'Warm amber spotlight card for a single featured product, library, or release. Combines status tags, descriptive body, capability pills, author credit, and a secondary CTA. Use when one item deserves elevated attention inside a larger catalog.',
		htmlContent: `
      <div class="spotlight-card">
        <div class="spotlight-badge-row">
          <span class="spotlight-tag">FEATURED ENGINE</span>
          <span class="version">v2.4 RELEASE</span>
        </div>
        <div class="spotlight-body">
          <h3>Lumino Layout Framework</h3>
          <p class="description">Advanced, fully typed window layout and tab management system built exclusively for complex TypeScript web applications that require dockable panels, persistent state, and multi-workspace recovery.</p>
          <div class="pill-group">
            <span class="pill">Dockable Windows</span>
            <span class="pill">State Persistence</span>
            <span class="pill">TypeScript Native</span>
            <span class="pill">Zero Runtime Cost</span>
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
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .spotlight-card { background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border: 0.5px solid #f59e0b; border-radius: 4px; padding: 8px; box-shadow: 0 2px 6px rgba(245,158,11,0.1); }
      .spotlight-badge-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
      .spotlight-tag { background: #d97706; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; letter-spacing: 0.3px; }
      .version { font-size: small; font-weight: 800; color: #b45309; }
      .spotlight-body h3 { font-size: medium; color: #78350f; font-weight: 900; margin-bottom: 3px; }
      .description { font-size: small; color: #92400e; line-height: 1.35; margin-bottom: 5px; }
      .pill-group { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 6px; }
      .pill { background: rgba(245,158,11,0.2); color: #78350f; font-size: small; font-weight: 700; padding: 1px 5px; border-radius: 10px; }
      .spotlight-action { display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid #fde68a; padding-top: 4px; }
      .author-block .by { font-size: small; color: #b45309; display: block; font-weight: 800; }
      .author-block .author-name { font-size: small; color: #78350f; font-weight: 800; }
      .action-btn { background: #b45309; color: var(--ace-bg, #fff); border: none; font-size: small; font-weight: 800; padding: 3px 8px; border-radius: 3px; cursor: pointer; }
    `
	},
	{
		id: 'brochure-event-schedule-grid',
		title: 'Event Schedule Timeline Block',
		styleVariant: 'Vertical Timeline',
		description: 'Vertical event schedule with time, duration, and description for each slot. Active item is visually elevated. Use for conference programs, celebration itineraries, workshop agendas, and any time-ordered sequence that must remain scannable.',
		htmlContent: `
      <div class="schedule-block">
        <header class="sched-header">
          <span class="sched-date">SATURDAY, 24 OCTOBER 2026</span>
          <h3>Centennial Celebration Schedule</h3>
        </header>
        <div class="timeline">
          <div class="timeline-item">
            <div class="time-col">
              <span class="time">10:00</span>
              <span class="duration">45 min</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>Grand Opening & Welcome Keynote</strong>
              <p>Opening remarks, historical overview, and introduction of the platform roadmap at the Scottsdale Celebration Center.</p>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="time-col">
              <span class="time">11:30</span>
              <span class="duration">60 min</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>100th Birthday Ceremony & Luncheon</strong>
              <p>Honoring a century of engineering achievement with family guest presentations and a seated luncheon.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time-col">
              <span class="time">14:00</span>
              <span class="duration">90 min</span>
            </div>
            <div class="marker"></div>
            <div class="event-details">
              <strong>Interactive Memory Showcase</strong>
              <p>Digital gallery exhibition of archival projects, live tunnel demonstrations, and community photo wall.</p>
            </div>
          </div>
        </div>
        <p class="usage">Limit to five–seven slots for readability. Mark the current or featured session with the active state. Times should be 24-hour or consistently formatted; durations help attendees plan transitions.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .schedule-block { background: #fff; border: 0.5px solid #e2e8f0; border-radius: 4px; padding: 8px; }
      .sched-header { margin-bottom: 6px; border-bottom: 0.5px solid #f1f5f9; padding-bottom: 4px; }
      .sched-date { font-size: small; font-weight: 800; color: #6d28d9; letter-spacing: 0.4px; display: block; margin-bottom: 2px; }
      .sched-header h3 { font-size: medium; color: var(--ace-foreground, #0f172a); font-weight: 800; }
      .timeline { display: flex; flex-direction: column; gap: 5px; margin-bottom: 5px; }
      .timeline-item { display: flex; align-items: flex-start; gap: 5px; }
      .time-col { min-width: 28px; text-align: right; }
      .time-col .time { font-size: small; font-weight: 800; color: #6d28d9; display: block; }
      .time-col .duration { font-size: small; color: var(--ace-bg, #94a3b8); }
      .marker { width: 6px; height: 6px; border-radius: 50%; background: #cbd5e1; margin-top: 3px; flex-shrink: 0; }
      .timeline-item.active .marker { background: #8b5cf6; box-shadow: 0 0 0 2px rgba(139,92,246,0.25); }
      .event-details { flex: 1; background: #f8fafc; padding: 4px; border-radius: 3px; border-left: 2px solid #cbd5e1; }
      .timeline-item.active .event-details { border-left-color: #8b5cf6; background: #f5f3ff; }
      .event-details strong { font-size: small; color: var(--ace-foreground, #0f172a); display: block; margin-bottom: 1px; }
      .event-details p { font-size: small; color: var(--ace-comment, #64748b); line-height: 1.3; margin: 0; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'catalog-lookbook-fullwidth-image',
		title: 'Lookbook Fullwidth Photo Frame',
		styleVariant: 'Minimalist Photo Frame',
		description: 'Minimalist full-width image frame with caption and technical metadata. Designed for architecture diagrams, topology maps, product photography, and any visual that needs a clean presentation with provenance information.',
		htmlContent: `
      <div class="lookbook-container">
        <div class="photo-frame">
          <div class="img-placeholder">
            <span class="icon">🗺</span>
            <span>[ HIGH-RESOLUTION TOPOLOGY MAP ]</span>
          </div>
          <span class="photo-tag">DIAGRAM 4.2</span>
        </div>
        <div class="caption-bar">
          <div class="caption-content">
            <h4>Cloudflare Tunnel & SOCKS5 Architecture</h4>
            <p>Direct peer-connection topology routing WebSocket traffic through double-reverse-proxy instances with zero inbound ports on the origin host.</p>
          </div>
          <div class="meta-tag">
            <span>PNG · 3840 × 2160 · sRGB</span>
          </div>
        </div>
        <p class="usage">Replace the placeholder with the actual asset. Keep the diagram number and file metadata accurate for archival and reprint purposes. Caption should describe the visual, not market it.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .lookbook-container { background: #fff; border: 0.5px solid #cbd5e1; border-radius: 4px; padding: 6px; }
      .photo-frame { position: relative; border-radius: 3px; overflow: hidden; margin-bottom: 5px; }
      .img-placeholder { height: 48px; background: #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--ace-comment, #64748b); gap: 3px; }
      .img-placeholder .icon { font-size: large; }
      .img-placeholder span { font-size: small; font-weight: 700; letter-spacing: 0.4px; }
      .photo-tag { position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.8); color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .caption-bar { display: flex; justify-content: space-between; align-items: flex-end; gap: 8px; margin-bottom: 4px; }
      .caption-content h4 { font-size: medium; color: var(--ace-foreground, #0f172a); font-weight: 800; margin-bottom: 2px; }
      .caption-content p { font-size: small; color: var(--ace-comment, #64748b); line-height: 1.3; margin: 0; }
      .meta-tag span { font-size: small; color: var(--ace-bg, #94a3b8); font-weight: 600; white-space: nowrap; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'brochure-map-location-block',
		title: 'Venue Location & Interactive Map',
		styleVariant: 'Venue Location Card',
		description: 'Compact venue card pairing a stylized map placeholder with address and schedule details. Use for event invitations, conference programs, and any print or digital piece that must communicate “where and when” at a glance.',
		htmlContent: `
      <div class="venue-card">
        <div class="map-view">
          <div class="pin">
            <span class="pin-icon">📍</span>
            <span class="pin-label">Scottsdale Celebration Center</span>
          </div>
        </div>
        <div class="venue-details">
          <div class="info-group">
            <h5>EVENT VENUE</h5>
            <p class="address">7500 E McCormick Pkwy<br>Scottsdale, AZ 85258</p>
          </div>
          <div class="info-group right">
            <h5>DATE & TIME</h5>
            <p class="time-str">24 Oct 2026 · 10:00 AM</p>
            <p class="note">Doors open 09:30 · Valet available</p>
          </div>
        </div>
        <p class="usage">Replace the map placeholder with an embedded static map or QR code linking to directions. Keep address and time on a single visual plane so attendees never have to search for either piece of information.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .venue-card { background: #f8fafc; border: 0.5px solid #cbd5e1; border-radius: 4px; padding: 6px; }
      .map-view { height: 36px; background: #cbd5e1; border-radius: 3px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; border: 0.5px solid #94a3b8; }
      .pin { background: #fff; border: 0.5px solid #0f172a; padding: 2px 6px; border-radius: 12px; display: flex; align-items: center; gap: 3px; box-shadow: 0 2px 4px rgba(0,0,0,0.12); }
      .pin-icon { font-size: medium; }
      .pin-label { font-size: small; font-weight: 800; color: var(--ace-foreground, #0f172a); }
      .venue-details { display: flex; justify-content: space-between; align-items: flex-start; background: #fff; padding: 5px; border-radius: 3px; border: 0.5px solid #e2e8f0; margin-bottom: 4px; }
      .info-group h5 { font-size: small; color: var(--ace-comment, #64748b); font-weight: 800; letter-spacing: 0.3px; margin-bottom: 2px; }
      .address { font-size: small; color: var(--ace-foreground, #0f172a); font-weight: 600; line-height: 1.3; margin: 0; }
      .right { text-align: right; }
      .time-str { font-size: small; color: #2563eb; font-weight: 800; margin: 0 0 1px 0; }
      .note { font-size: small; color: var(--ace-comment, #64748b); margin: 0; }
      .usage { font-size: small; color: var(--ace-bg, #94a3b8); font-style: italic; line-height: 1.3; margin: 0; }
    `
	},
	{
		id: 'catalog-stats-overview-dashboard',
		title: 'Catalog Key Metrics & Stat Highlights',
		styleVariant: 'Analytics Dashboard',
		description: 'Dark analytics strip showing three key infrastructure metrics with growth indicators. Use on product pages, investor one-pagers, and internal status dashboards where numerical proof must be absorbed in under three seconds.',
		htmlContent: `
      <div class="metrics-panel">
        <header class="panel-head">
          <span class="sub">PERFORMANCE MATRIX</span>
          <h3>Network Infrastructure Analytics</h3>
        </header>
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-title">TOTAL TUNNELS</span>
            <div class="metric-value">1,420 <span class="growth">+12 %</span></div>
            <span class="metric-sub">Active Cloudflare connections</span>
          </div>
          <div class="metric-card">
            <span class="metric-title">LATENCY</span>
            <div class="metric-value">4.2 ms <span class="growth positive">−0.8 ms</span></div>
            <span class="metric-sub">Global average response</span>
          </div>
          <div class="metric-card">
            <span class="metric-title">REPOSITORIES</span>
            <div class="metric-value">86 <span class="growth">TS</span></div>
            <span class="metric-sub">Lumino & Activity apps</span>
          </div>
        </div>
        <p class="usage">All figures must be current and reproducible. Growth indicators are optional but recommended when the trend is favorable. Keep labels uppercase and short; the number is the hero.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .metrics-panel { background: var(--ace-foreground, #1e293b); color: var(--ace-bg, #fff); padding: 8px; border-radius: 4px; border: 0.5px solid #334155; }
      .panel-head { margin-bottom: 6px; }
      .panel-head .sub { font-size: small; color: #38bdf8; font-weight: 800; letter-spacing: 0.5px; display: block; }
      .panel-head h3 { font-size: medium; color: var(--ace-bg, #f8fafc); font-weight: 800; }
      .metrics-grid { display: flex; gap: 5px; margin-bottom: 5px; }
      .metric-card { flex: 1; background: var(--ace-foreground, #0f172a); padding: 5px; border-radius: 3px; border: 0.5px solid #334155; }
      .metric-title { font-size: small; color: var(--ace-bg, #94a3b8); font-weight: 800; letter-spacing: 0.3px; display: block; margin-bottom: 2px; }
      .metric-value { font-size: large; font-weight: 900; color: var(--ace-bg, #fff); display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2px; }
      .growth { font-size: small; font-weight: 800; color: #38bdf8; }
      .growth.positive { color: #4ade80; }
      .metric-sub { font-size: small; color: var(--ace-comment, #64748b); display: block; }
      .usage { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; border-top: 0.5px solid #334155; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'brochure-testimonial-quote-block',
		title: 'Brochure Testimonial Quote Banner',
		styleVariant: 'Quote Banner',
		description: 'Attributed customer or internal testimonial card. Large opening quotation mark, italic quote body, avatar initials, name, and role. Use on brochure interiors, case-study pages, and social-proof sections to humanize technical claims.',
		htmlContent: `
      <div class="quote-card">
        <div class="quote-mark">“</div>
        <p class="quote-text">The integration of WebSockets with local SOCKS5 proxy workers completely redefined how we share local workspace environments in real time. Setup that used to take an afternoon now takes under a minute—and the state survives every reload.</p>
        <div class="author-row">
          <div class="avatar-ph">BC</div>
          <div class="author-meta">
            <span class="name">Brian Cullinan</span>
            <span class="title">Lead Systems Architect · pryor.games</span>
          </div>
        </div>
        <p class="usage">Quotes must be real and attributable. Keep length under 50 words for print. Avatar can be initials or a photo; role line should include company or project for credibility.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .quote-card { background: #f0fdf4; border: 0.5px solid #86efac; border-radius: 4px; padding: 8px; position: relative; }
      .quote-mark { font-size: large; line-height: 0.8; color: #16a34a; opacity: 0.25; position: absolute; top: 4px; left: 6px; font-family: Georgia, serif; }
      .quote-text { font-size: medium; color: #14532d; font-style: italic; line-height: 1.4; margin-bottom: 6px; position: relative; z-index: 2; padding-left: 8px; }
      .author-row { display: flex; align-items: center; gap: 5px; padding-left: 8px; margin-bottom: 4px; }
      .avatar-ph { width: 16px; height: 16px; border-radius: 50%; background: #16a34a; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      .author-meta { display: flex; flex-direction: column; }
      .author-meta .name { font-size: small; font-weight: 800; color: var(--ace-foreground, #0f172a); }
      .author-meta .title { font-size: small; color: #15803d; }
      .usage { font-size: small; color: #4d7c0f; font-style: italic; border-top: 0.5px solid #bbf7d0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	}
];

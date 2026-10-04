import type { ITemplateItem } from "./template";

export const CATALOG_BROCHURE_TEMPLATES: ITemplateItem[] = [
	{
		id: 'catalog-three-column-products',
		title: '3-Column product grid catalog',
		styleVariant: '3-Up Catalog',
		htmlContent: `
      <div class="cat-grid">
        <div class="item"><div class="img-ph">[IMG]</div><h4>Item #101</h4><span>$29.99</span></div>
        <div class="item"><div class="img-ph">[IMG]</div><h4>Item #102</h4><span>$49.99</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .cat-grid { display: flex; gap: 3px; }
      .item { flex: 1; border: 0.5px solid #e2e8f0; padding: 2px; text-align: center; }
      .img-ph { height: 16px; background: #f1f5f9; font-size: 2.8px; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
      h4 { font-size: 3.2px; margin: 1px 0; color: #0f172a; }
      span { font-size: 3px; font-weight: bold; color: #16a34a; }
    `
	},
	{
		id: 'brochure-trifold-panel-layout',
		title: 'Trifold brochure three panels',
		styleVariant: 'Trifold Panels',
		htmlContent: `
      <div class="trifold">
        <div class="pnl"><h5>PANEL 1</h5><p>Inside Flap</p></div>
        <div class="pnl"><h5>PANEL 2</h5><p>Back Cover</p></div>
        <div class="pnl main"><h5>PANEL 3</h5><p>Front Cover</p></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .trifold { display: flex; gap: 2px; }
      .pnl { flex: 1; border: 0.5px dashed #94a3b8; padding: 3px; background: #f8fafc; font-size: 3px; text-align: center; }
      .pnl.main { background: #1e293b; color: #fff; border-style: solid; }
      h5 { font-size: 3.5px; margin: 0 0 2px 0; }
    `
	},
	{
		id: 'catalog-horizontal-spec-list',
		title: 'Spec sheet product list',
		styleVariant: 'Spec Sheet',
		htmlContent: `
      <div class="spec-row">
        <div class="name">GGUF Model #1</div>
        <div class="specs">Q6_K_L &bull; 14B Params</div>
      </div>
    `,
		cssContent: `
      * { font-family: monospace; box-sizing: border-box; padding: 4px; }
      .spec-row { display: flex; justify-content: space-between; border-bottom: 0.5px solid #cbd5e1; padding: 2px 0; font-size: 3.2px; }
      .name { font-weight: bold; color: #0369a1; }
      .specs { color: #64748b; }
    `
	},
	{
		id: 'brochure-hero-splash-cover',
		title: 'Brochure hero splash page',
		styleVariant: 'Splash Cover',
		htmlContent: `
      <div class="splash">
        <h1>ANNUAL SHOWCASE</h1>
        <p>2026 Edition</p>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', sans-serif; box-sizing: border-box; padding: 8px; background: #000; color: #fff; text-align: center; }
      h1 { font-size: 7px; font-weight: 900; letter-spacing: 1px; color: #f43f5e; margin: 0; }
      p { font-size: 3.5px; color: #fda4af; margin-top: 2px; }
    `
	},
	{
		id: 'catalog-pricing-tier-matrix',
		title: 'Pricing tiers catalog card',
		styleVariant: 'Pricing Card',
		htmlContent: `
      <div class="price-card">
        <h3>PRO TIER</h3>
        <span class="cost">$49/mo</span>
        <p>Full API Access</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; text-align: center; border: 1px solid #2563eb; border-radius: 3px; background: #eff6ff; }
      h3 { font-size: 3.8px; color: #1e3a8a; margin: 0; }
      .cost { font-size: 6px; font-weight: 900; color: #2563eb; display: block; margin: 2px 0; }
      p { font-size: 3px; color: #1d4ed8; margin: 0; }
    `
	},
	{
		id: 'brochure-contact-information-footer',
		title: 'Brochure contact panel',
		styleVariant: 'Contact Panel',
		htmlContent: `
      <div class="contact-pnl">
        <h4>GET IN TOUCH</h4>
        <p>Email: contact@pryor.games &bull; Web: pryor.games</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #0f172a; color: #fff; text-align: center; }
      h4 { font-size: 3.5px; color: #38bdf8; margin: 0; }
      p { font-size: 3px; color: #94a3b8; margin-top: 2px; }
    `
	},
	{
		id: 'catalog-featured-item-spotlight',
		title: 'Featured item spotlight card',
		styleVariant: 'Spotlight Card',
		htmlContent: `
      <div class="spotlight">
        <span class="tag">FEATURED</span>
        <h3>Lumino Layout Engine</h3>
        <p>Advanced window layout management for TypeScript apps.</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #fef3c7; border: 0.5px solid #f59e0b; }
      .tag { background: #d97706; color: #fff; font-size: 2.8px; font-weight: bold; padding: 1px 3px; }
      h3 { font-size: 4px; color: #78350f; margin: 2px 0 1px 0; }
      p { font-size: 3.2px; color: #92400e; margin: 0; }
    `
	},
	{
		id: 'brochure-event-schedule-grid',
		title: 'Event schedule timeline block',
		styleVariant: 'Event Schedule',
		htmlContent: `
      <div class="sched">
        <div class="slot"><span>10:00 AM</span><strong>Keynote Address</strong></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .slot { display: flex; gap: 4px; font-size: 3.4px; border-left: 2px solid #8b5cf6; padding-left: 3px; }
      span { color: #6d28d9; font-weight: bold; }
      strong { color: #0f172a; }
    `
	},
	{
		id: 'catalog-lookbook-fullwidth-image',
		title: 'Lookbook fullwidth photo frame',
		styleVariant: 'Lookbook Frame',
		htmlContent: `
      <div class="lookbook">
        <div class="img-frame">[ FULLWIDTH PHOTO ]</div>
        <p class="cap">Figure 4.2 &bull; Cloudflared Topology</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; text-align: center; }
      .img-frame { height: 25px; background: #cbd5e1; font-size: 3px; color: #475569; display: flex; align-items: center; justify-content: center; }
      .cap { font-size: 3px; font-style: italic; color: #64748b; margin-top: 2px; }
    `
	},
	{
		id: 'brochure-map-location-block',
		title: 'Venue location & map placeholder',
		styleVariant: 'Venue Map',
		htmlContent: `
      <div class="map-pnl">
        <div class="map-ph">[ MAP VIEW ]</div>
        <p>Scottsdale Celebration Center &bull; Oct 24, 2026</p>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #f1f5f9; text-align: center; }
      .map-ph { height: 18px; background: #cbd5e1; font-size: 3px; display: flex; align-items: center; justify-content: center; color: #475569; }
      p { font-size: 3.2px; font-weight: bold; color: #334155; margin-top: 2px; }
    `
	}
];

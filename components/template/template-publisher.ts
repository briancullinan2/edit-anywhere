import type { ITemplateItem } from './template';

export const PUBLISHER_TEMPLATES: ITemplateItem[] = [
	// 1. Arrows Quick Publication
	{
		id: 'pub-arrows',
		title: 'Arrows quick publication',
		styleVariant: 'Publisher Arrows',
		htmlContent: `
      <header class="arrows-hdr">
        <div class="image-placeholder">
          <div class="icon-frame">&#128444;</div>
        </div>
        <h1>Heading Title</h1>
        <div class="arrow-accent"></div>
      </header>
      <main class="arrows-body">
        <p>Place your main text or publication message here. This template features a distinctive arrow accent rule beneath the main header.</p>
        <section class="info-block">
          <h2>Organization Name</h2>
          <p>Contact Details &bull; Phone &bull; Email Address</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, Helvetica, sans-serif; }
      .arrows-hdr { text-align: center; margin-bottom: 6px; }
      .image-placeholder { background: #f0f0f0; border: 1px dashed #ccc; height: 35px; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; }
      .icon-frame { font-size: 10px; color: #aaa; }
      .arrows-hdr h1 { font-size: 10px; font-weight: bold; color: #111; margin-bottom: 2px; }
      .arrow-accent { width: 100%; height: 0; border-top: 2px solid #8d6e63; position: relative; margin: 3px 0 6px 0; }
      .arrow-accent::after { content: ''; position: absolute; right: 0; top: -4px; width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 6px solid #8d6e63; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .info-block { border-top: 0.5px solid #ccc; padding-top: 3px; margin-top: 6px; text-align: center; }
      .info-block h2 { font-size: 4.5px; font-weight: bold; color: #8d6e63; }
    `
	},

	// 2. Bounce Quick Publication
	{
		id: 'pub-bounce',
		title: 'Bounce quick publication',
		styleVariant: 'Publisher Bounce',
		htmlContent: `
      <header class="bounce-hdr">
        <div class="top-banner"></div>
        <div class="bounce-circle"></div>
        <h1>Heading Title</h1>
      </header>
      <main class="bounce-body">
        <div class="photo-box">
          <p>[ Main Publication Image ]</p>
        </div>
        <p>Dynamic and energetic layout designed for announcements, event flyers, and quick updates.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Trebuchet MS', sans-serif; }
      .bounce-hdr { position: relative; padding-top: 8px; margin-bottom: 6px; }
      .top-banner { position: absolute; top: -10px; left: -10px; right: -10px; height: 12px; background: #fb8c00; }
      .bounce-circle { width: 12px; height: 12px; background: #e65100; border-radius: 50%; position: absolute; top: -2px; left: 10px; border: 1.5px solid #fff; }
      .bounce-hdr h1 { font-size: 9.5px; font-weight: bold; color: #e65100; margin-top: 8px; }
      .photo-box { background: #fff3e0; border: 0.5px solid #ffe0b2; height: 30px; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; font-size: 3.5px; color: #ef6c00; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 3. Brocade Quick Publication
	{
		id: 'pub-brocade',
		title: 'Brocade quick publication',
		styleVariant: 'Publisher Brocade',
		htmlContent: `
      <header class="brocade-hdr">
        <div class="border-frame">
          <h1>HEADING TITLE</h1>
          <div class="sub-rule"></div>
        </div>
      </header>
      <main class="brocade-body">
        <div class="ornate-box">
          <p>Formal and elegant layout suitable for ceremonial notices, certificates, and classical announcements.</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .border-frame { border: 1.5px double #5d4037; padding: 5px; text-align: center; margin-bottom: 6px; background: #fbe9e7; }
      .border-frame h1 { font-size: 8.5px; letter-spacing: 0.5px; color: #3e2723; font-weight: bold; }
      .sub-rule { width: 30px; height: 1px; background: #5d4037; margin: 3px auto 0 auto; }
      .ornate-box { border-left: 2px solid #5d4037; padding-left: 4px; }
      p { font-size: 3.8px; color: #2b1d0c; line-height: 1.4; }
    `
	},

	// 4. Color Band Quick Publication
	{
		id: 'pub-color-band',
		title: 'Color band quick publication',
		styleVariant: 'Publisher Color Band',
		htmlContent: `
      <div class="color-band-hero">
        <h1>Heading Title</h1>
      </div>
      <main class="band-body">
        <div class="img-frame">
          <p>[ Image Placeholder ]</p>
        </div>
        <p>Clean corporate template featuring a bold horizontal color band header for high visibility.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; }
      .color-band-hero { background: #0288d1; color: #fff; padding: 8px; margin: -10px -10px 6px -10px; border-bottom: 2px solid #01579b; }
      .color-band-hero h1 { font-size: 9.5px; font-weight: bold; color: #ffffff; }
      .img-frame { background: #e1f5fe; border: 0.5px solid #b3e5fc; height: 32px; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; font-size: 3.5px; color: #0288d1; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 5. Marker Quick Publication
	{
		id: 'pub-marker',
		title: 'Marker quick publication',
		styleVariant: 'Publisher Marker',
		htmlContent: `
      <header class="marker-hdr">
        <div class="marker-block"></div>
        <h1>Heading Title</h1>
      </header>
      <main class="marker-body">
        <p>Modern editorial design utilizing a bold solid marker block in the top corner to draw reader focus.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .marker-hdr { position: relative; padding-top: 6px; margin-bottom: 6px; }
      .marker-block { position: absolute; top: -10px; right: -10px; width: 16px; height: 16px; background: #212121; }
      .marker-hdr h1 { font-size: 9.5px; font-weight: bold; color: #212121; border-bottom: 1.5px solid #212121; padding-bottom: 2px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 6. Modular Quick Publication
	{
		id: 'pub-modular',
		title: 'Modular quick publication',
		styleVariant: 'Publisher Modular',
		htmlContent: `
      <header class="mod-hdr">
        <div class="dark-bar">
          <h1>Heading</h1>
        </div>
      </header>
      <main class="mod-body">
        <div class="grid-modules">
          <div class="module">
            <p><strong>Module A:</strong> Feature Overview</p>
          </div>
          <div class="module">
            <p><strong>Module B:</strong> Quick Metrics</p>
          </div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; }
      .mod-hdr { margin-bottom: 6px; }
      .dark-bar { background: #37474f; color: #fff; padding: 4px 6px; margin: -10px -10px 4px -10px; }
      .dark-bar h1 { font-size: 9px; font-weight: bold; color: #fff; }
      .grid-modules { display: flex; gap: 4px; }
      .module { flex: 1; background: #eceff1; padding: 4px; border: 0.5px solid #cfd8dc; font-size: 3.5px; color: #263238; }
    `
	},

	// 7. Perforation Quick Publication
	{
		id: 'pub-perforation',
		title: 'Perforation quick publication',
		styleVariant: 'Publisher Perforation',
		htmlContent: `
      <header class="perf-hdr">
        <h1>Heading Title</h1>
      </header>
      <main class="perf-body">
        <p>Standard publication section above the dashed coupon cutoff.</p>
        <div class="dotted-perforation">
          <p class="coupon-title">CUT HERE FOR COUPON / VOUCHER</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; }
      .perf-hdr h1 { font-size: 9px; font-weight: bold; color: #8e24aa; margin-bottom: 4px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .dotted-perforation { border: 1px dashed #8e24aa; padding: 4px; margin-top: 8px; background: #f3e5f5; text-align: center; }
      .coupon-title { font-size: 3.5px; font-weight: bold; color: #6a1b9a; }
    `
	},

	// 8. PhotoScope Quick Publication
	{
		id: 'pub-photoscope',
		title: 'PhotoScope quick publication',
		styleVariant: 'Publisher PhotoScope',
		htmlContent: `
      <header class="ps-hdr">
        <div class="photo-banner">
          <p>[ PhotoScope Hero Graphic ]</p>
        </div>
        <h1>Heading Title</h1>
      </header>
      <main class="ps-body">
        <p>Image-first publication format optimized for product showcases, property listings, and visual reports.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .photo-banner { background: #455a64; color: #fff; height: 35px; display: flex; align-items: center; justify-content: center; margin: -10px -10px 4px -10px; font-size: 3.5px; }
      .ps-hdr h1 { font-size: 9px; font-weight: bold; color: #263238; border-bottom: 1px solid #455a64; padding-bottom: 2px; margin-bottom: 4px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 9. Simple Divider Quick Publication
	{
		id: 'pub-simple-divider',
		title: 'Simple divider quick publication',
		styleVariant: 'Publisher Simple Divider',
		htmlContent: `
      <header class="sd-hdr">
        <h1>Heading Title</h1>
        <div class="dashed-divider"></div>
      </header>
      <main class="sd-body">
        <p>Minimalist layout featuring subtle dashed dividers to separate headers, body paragraphs, and contact footers.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; }
      .sd-hdr h1 { font-size: 9.5px; font-weight: bold; color: #111; text-align: center; margin-bottom: 3px; }
      .dashed-divider { width: 100%; height: 0; border-top: 0.8px dashed #757575; margin: 3px 0 6px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 10. Accent Box Quick Publication
	{
		id: 'pub-accent-box',
		title: 'Accent box quick publication',
		styleVariant: 'Publisher Accent Box',
		htmlContent: `
      <div class="accent-outer-frame">
        <header class="ab-hdr">
          <h1>Heading Title</h1>
        </header>
        <main class="ab-body">
          <p>Framed publication style with a colored inner margin accent box enclosing all body copy.</p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; }
      .accent-outer-frame { border: 1.5px solid #e65100; padding: 6px; background: #fff8e1; min-height: 100%; }
      .ab-hdr h1 { font-size: 9px; font-weight: bold; color: #e65100; border-bottom: 0.5px solid #ffb74d; padding-bottom: 2px; margin-bottom: 4px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	}
];

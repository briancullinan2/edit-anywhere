import type { ITemplateItem } from './template';

export const ZEN_TEMPLATES: ITemplateItem[] = [
	// 1. Apothecary - Alchemical Elixir & Potion Shop
	{
		id: 'zen-apothecary-potions',
		title: 'Apothecary potion shop',
		styleVariant: 'Vintage Apothecary',
		htmlContent: `
      <div class="zen-apothecary">
        <header class="apoth-hdr">
          <span class="sub-heading">&mdash; EST. 1842 &mdash;</span>
          <h1>Ye Olde Mind Apothecary</h1>
          <div class="bottle-icon">&#9878;</div>
        </header>
        <main class="apoth-body">
          <section class="item-card">
            <h2>Liquid Courage No. 9</h2>
            <p class="desc">A distilled tincture of crushed star-anise, mandrake root, and bottled lightning.</p>
            <div class="price-tag">33 Silver Florins &bull; <em>In Stock</em></div>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Georgia, serif; box-sizing: border-box; }
      .zen-apothecary { background: #f7f3e8; border: 1.5px solid #4a3b2c; padding: 8px; color: #362819; }
      .apoth-hdr { text-align: center; border-bottom: 1px solid #4a3b2c; padding-bottom: 4px; margin-bottom: 6px; }
      .sub-heading { font-size: 3px; font-weight: bold; letter-spacing: 1px; color: #8c6d46; }
      .apoth-hdr h1 { font-size: 8.5px; font-weight: bold; color: #211508; margin: 2px 0; font-style: italic; }
      .bottle-icon { font-size: 8px; color: #4a3b2c; }
      .item-card { background: #efe8d5; border: 0.5px solid #b8a686; padding: 4px; }
      .item-card h2 { font-size: 4.5px; font-weight: bold; color: #211508; margin-bottom: 1px; }
      .desc { font-size: 3.5px; line-height: 1.3; color: #4a3b2c; }
      .price-tag { font-size: 3.2px; font-weight: bold; color: #8c6d46; margin-top: 3px; border-top: 0.5px dashed #b8a686; padding-top: 2px; }
    `
	},

	// 2. Under the Sea! - Deep Ocean Bioluminescent Fish Emporium
	{
		id: 'zen-under-the-sea',
		title: 'Bioluminescent sea store',
		styleVariant: 'Under The Sea',
		htmlContent: `
      <div class="zen-ocean">
        <header class="ocean-hdr">
          <div class="squid-icon">&#129425;</div>
          <h1>Abyssal Creatures & Aquatics</h1>
        </header>
        <main class="ocean-body">
          <div class="species-grid">
            <div class="fish-card">
              <h3>Vampire Squid Egg</h3>
              <p>Thrives at 3,000 meters below sea level. Requires pressurized ambient tank.</p>
            </div>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .zen-ocean { background: linear-gradient(180deg, #d4e6f1 0%, #a9cce3 30%, #1f618d 70%, #0b2545 100%); color: #e0f2fe; padding: 8px; border-radius: 3px; }
      .ocean-hdr { text-align: center; margin-bottom: 6px; background: rgba(255,255,255,0.2); padding: 4px; border-radius: 2px; border: 0.5px solid #7fb3d5; }
      .squid-icon { font-size: 10px; }
      .ocean-hdr h1 { font-size: 8px; font-weight: bold; color: #0b2545; text-shadow: 0 0 2px #fff; }
      .fish-card { background: rgba(11,37,69,0.85); border: 0.5px solid #3498db; padding: 4px; border-radius: 2px; }
      .fish-card h3 { font-size: 4px; font-weight: bold; color: #73c6b6; margin-bottom: 1px; }
      .fish-card p { font-size: 3.4px; line-height: 1.3; color: #d4e6f1; }
    `
	},

	// 3. Steel - Industrial Salvage & Cybernetic Scrap Blog
	{
		id: 'zen-steel-industrial',
		title: 'Industrial salvage blog',
		styleVariant: 'Steel & Dark Alloy',
		htmlContent: `
      <div class="zen-steel">
        <header class="steel-hdr">
          <span class="plate">TAG: #SCRAP_77</span>
          <h1>STEEL & ALLOY RECOVERY</h1>
        </header>
        <main class="steel-body">
          <article class="post">
            <h2>Unearthing Titan Hull Plates in Sector 4</h2>
            <p>Today's excavation yielded 14 metric tons of reinforced carbon steel plating suitable for atmospheric re-entry shields.</p>
          </article>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', monospace; box-sizing: border-box; }
      .zen-steel { background: #121212; color: #e0e0e0; padding: 6px; border: 2px solid #424242; }
      .steel-hdr { background: #212121; padding: 4px; border-bottom: 1.5px solid #616161; margin-bottom: 5px; }
      .plate { font-size: 3px; background: #ff6f00; color: #000; padding: 1px 2px; font-weight: bold; }
      .steel-hdr h1 { font-size: 8px; font-weight: bold; color: #ffffff; margin-top: 2px; letter-spacing: 0.5px; }
      .post { background: #1a1a1a; border-left: 2px solid #ff6f00; padding: 4px; }
      .post h2 { font-size: 4.2px; font-weight: bold; color: #ff8f00; margin-bottom: 2px; }
      .post p { font-size: 3.5px; color: #bdbdbd; line-height: 1.35; }
    `
	},

	// 4. A Robot Named Jimmy - Vintage Toy & Automaton Store
	{
		id: 'zen-robot-jimmy',
		title: 'Automaton & robot shop',
		styleVariant: 'Robot Named Jimmy',
		htmlContent: `
      <div class="zen-jimmy">
        <header class="jimmy-hdr">
          <div class="bot-badge">&#129302;</div>
          <h1>A Robot Named Jimmy</h1>
          <p class="tagline">Clockwork Companions & Tin Toys</p>
        </header>
        <main class="jimmy-body">
          <div class="toy-card">
            <h3>Model-3 Windup Brass Beetle</h3>
            <p>Fitted with a dual-escapement spring coil. Walks up to 12 feet on smooth hardwood floors.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; }
      .zen-jimmy { background: #f0f4f8; border: 1px solid #bccadc; padding: 6px; color: #334e68; }
      .jimmy-hdr { text-align: center; border-bottom: 1.5px solid #486581; padding-bottom: 4px; margin-bottom: 5px; }
      .bot-badge { font-size: 10px; }
      .jimmy-hdr h1 { font-size: 8.5px; font-weight: bold; color: #102a43; }
      .tagline { font-size: 3.2px; color: #627d98; font-style: italic; }
      .toy-card { background: #ffffff; border: 0.5px solid #d9e2ec; padding: 4px; border-radius: 2px; }
      .toy-card h3 { font-size: 4px; font-weight: bold; color: #243b53; margin-bottom: 1px; }
      .toy-card p { font-size: 3.5px; color: #486581; line-height: 1.3; }
    `
	},

	// 5. Fountain Kiss - Exotic Perfume & Scent Memory Vault
	{
		id: 'zen-fountain-kiss',
		title: 'Scent & perfume vault',
		styleVariant: 'Fountain Kiss',
		htmlContent: `
      <div class="zen-fountain">
        <header class="fountain-hdr">
          <h1>Fountain Kiss Fragrances</h1>
          <span class="sub">Olfactory Memories Preserved in Glass</span>
        </header>
        <main class="fountain-body">
          <div class="scent-card">
            <h2>No. 104: Petrichor After Midnight</h2>
            <p>Notes of wet pavement, ozone, blooming jasmine, and distant woodsmoke.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Trebuchet MS', sans-serif; box-sizing: border-box; }
      .zen-fountain { background: linear-gradient(135deg, #4a154b 0%, #290b2a 100%); color: #f3e5f5; padding: 8px; border-radius: 2px; }
      .fountain-hdr { text-align: center; border-bottom: 1px solid #ab47bc; padding-bottom: 4px; margin-bottom: 6px; }
      .fountain-hdr h1 { font-size: 8.5px; font-weight: bold; color: #ea80fc; letter-spacing: 0.5px; }
      .sub { font-size: 3.2px; color: #ce93d8; font-style: italic; }
      .scent-card { background: rgba(255,255,255,0.05); border: 0.5px solid #ba68c8; padding: 4px; border-radius: 2px; }
      .scent-card h2 { font-size: 4.2px; font-weight: bold; color: #f3e5f5; margin-bottom: 1px; }
      .scent-card p { font-size: 3.5px; color: #e1bee7; line-height: 1.35; }
    `
	},

	// 6. Garments - Tailored Outfits for Time Travelers
	{
		id: 'zen-garments-time-travel',
		title: 'Time traveler tailor',
		styleVariant: 'Garments Minimal',
		htmlContent: `
      <div class="zen-garments">
        <header class="garments-hdr">
          <span class="era">PERFECT ERA MATCHING</span>
          <h1>GARMENTS FOR CHRONONAUTS</h1>
        </header>
        <main class="garments-body">
          <div class="outfit-row">
            <p><strong>1880s Victorian Waistcoat:</strong> Hand-stitched silk with hidden Faraday cage lining for temporal dampening.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Helvetica, Arial, sans-serif; box-sizing: border-box; }
      .zen-garments { background: #ffffff; border: 1px solid #e0e0e0; padding: 8px; color: #111111; }
      .garments-hdr { border-bottom: 2px solid #000000; padding-bottom: 4px; margin-bottom: 6px; }
      .era { font-size: 3px; font-weight: bold; letter-spacing: 1.5px; color: #757575; }
      .garments-hdr h1 { font-size: 8.5px; font-weight: 900; letter-spacing: -0.2px; margin-top: 1px; }
      .outfit-row { border-left: 2px solid #000000; padding-left: 4px; font-size: 3.6px; line-height: 1.35; color: #333333; }
    `
	},

	// 7. Verde Moderna - Rare Carnivorous & Exotic Plant Nursery
	{
		id: 'zen-verde-moderna',
		title: 'Exotic plant nursery',
		styleVariant: 'Verde Moderna',
		htmlContent: `
      <div class="zen-verde">
        <header class="verde-hdr">
          <h1>Verde Moderna Nursery</h1>
          <p class="tag">Carnivorous Flora & Rare Botanicals</p>
        </header>
        <main class="verde-body">
          <div class="plant-card">
            <h3>Nepenthes Rajah (Giant Pitcher)</h3>
            <p>Capable of trapping small insects and collecting rainwater in montane cloud forests.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .zen-verde { background: #e8f5e9; border: 1.5px solid #a5d6a7; padding: 6px; color: #1b5e20; }
      .verde-hdr { background: #2e7d32; color: #ffffff; padding: 4px; margin: -6px -6px 5px -6px; text-align: center; }
      .verde-hdr h1 { font-size: 8.5px; font-weight: bold; color: #ffffff; }
      .tag { font-size: 3.2px; color: #c8e6c9; }
      .plant-card { background: #ffffff; border: 0.5px solid #c8e6c9; padding: 4px; border-radius: 2px; }
      .plant-card h3 { font-size: 4px; font-weight: bold; color: #1b5e20; margin-bottom: 1px; }
      .plant-card p { font-size: 3.5px; color: #388e3c; line-height: 1.3; }
    `
	},

	// 8. Screen Filler - Retro Arcade & Glitch Art Blog
	{
		id: 'zen-screen-filler',
		title: 'Arcade & glitch art blog',
		styleVariant: 'Screen Filler',
		htmlContent: `
      <div class="zen-screen">
        <header class="screen-hdr">
          <h1>THE SCREEN FILLER</h1>
          <span class="glitch-text">[CRT MEMORY DUMP]</span>
        </header>
        <main class="screen-body">
          <article class="entry">
            <h2>Corrupting Vector Graphics on Vectrex</h2>
            <p>Overclocking the DAC chip created mesmerizing geometric bloom patterns along the display borders.</p>
          </article>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Impact', sans-serif; box-sizing: border-box; }
      .zen-screen { background: #f06292; color: #ffffff; padding: 6px; border: 2px solid #880e4f; }
      .screen-hdr { background: #ad1457; padding: 4px; border-bottom: 2px solid #880e4f; margin: -6px -6px 5px -6px; }
      .screen-hdr h1 { font-size: 9px; font-weight: 900; letter-spacing: 0.5px; color: #ffffff; }
      .glitch-text { font-family: monospace; font-size: 3px; color: #ff80ab; font-weight: bold; }
      .entry { background: #ffffff; color: #880e4f; padding: 4px; border-radius: 2px; }
      .entry h2 { font-size: 4.5px; font-weight: bold; color: #880e4f; margin-bottom: 1px; }
      .entry p { font-family: sans-serif; font-size: 3.5px; color: #212121; line-height: 1.3; }
    `
	},

	// 9. Mid Century Modern - Atomic Era Furniture & Decor Blog
	{
		id: 'zen-mid-century-modern',
		title: 'Atomic era furniture blog',
		styleVariant: 'Mid Century Modern',
		htmlContent: `
      <div class="zen-midmod">
        <header class="midmod-hdr">
          <div class="atomic-star">&#10024;</div>
          <h1>Mid-Century Atomic Living</h1>
        </header>
        <main class="midmod-body">
          <div class="feature-box">
            <h2>The Eames Lounge & Atomic Motifs</h2>
            <p>Exploring molded plywood, starburst wall clocks, and kidney-shaped coffee tables from 1955.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Century Gothic', sans-serif; box-sizing: border-box; }
      .zen-midmod { background: #fdfefe; border: 1.5px solid #d35400; padding: 6px; color: #2c3e50; }
      .midmod-hdr { background: #e67e22; color: #ffffff; padding: 4px; margin: -6px -6px 5px -6px; text-align: center; }
      .atomic-star { font-size: 8px; }
      .midmod-hdr h1 { font-size: 8.5px; font-weight: bold; color: #ffffff; margin-top: 1px; }
      .feature-box { background: #fae5d3; border-left: 3px solid #d35400; padding: 4px; }
      .feature-box h2 { font-size: 4.2px; font-weight: bold; color: #a04000; margin-bottom: 1px; }
      .feature-box p { font-size: 3.5px; color: #5d4037; line-height: 1.35; }
    `
	},

	// 10. OceanGarden - Deep Sea Coral & Anemone Sanctuary
	{
		id: 'zen-ocean-garden',
		title: 'Coral sanctuary store',
		styleVariant: 'OceanGarden Blue',
		htmlContent: `
      <div class="zen-oceangarden">
        <header class="og-hdr">
          <h1>OceanGarden Coral Sanctuary</h1>
          <p class="sub">Sustainably Farmed Reefs & Anemones</p>
        </header>
        <main class="og-body">
          <div class="coral-card">
            <h3>Fluorescent Bubble-Tip Anemone</h3>
            <p>Displays brilliant neon green hue under 450nm actinic reef LED lighting.</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; }
      .zen-oceangarden { background: #0d47a1; color: #e3f2fd; padding: 8px; border-radius: 2px; }
      .og-hdr { text-align: center; border-bottom: 1px solid #42a5f5; padding-bottom: 4px; margin-bottom: 6px; }
      .og-hdr h1 { font-size: 8.5px; font-weight: bold; color: #ffffff; }
      .sub { font-size: 3.2px; color: #90caf9; font-style: italic; }
      .coral-card { background: #1565c0; border: 0.5px solid #64b5f6; padding: 4px; border-radius: 2px; }
      .coral-card h3 { font-size: 4px; font-weight: bold; color: #80d8ff; margin-bottom: 1px; }
      .coral-card p { font-size: 3.5px; color: #e3f2fd; line-height: 1.3; }
    `
	}
];

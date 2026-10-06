import type { ITemplateItem } from './template';

export const EXOTIC_TEMPLATES: ITemplateItem[] = [
	// 1. Cyberpunk HUD & Augmented Reality Diagnostic Overlay
	{
		id: 'exotic-cyberpunk-hud',
		title: 'Cyberpunk AR HUD',
		styleVariant: 'Augmented HUD',
		htmlContent: `
      <div class="hud-container">
        <header class="hud-hdr">
          <span class="hud-status">&#9673; SYSTEM_DIAGNOSTIC_ACTIVE</span>
          <span class="hud-time">2077.10.24 // 04:20:09</span>
        </header>
        <main class="hud-main">
          <div class="hud-reticle">
            <div class="crosshair"></div>
            <h1>TARGET_NODE: LUMINO_CORE</h1>
          </div>
          <div class="hud-grid">
            <div class="hud-card">
              <h3>NEURAL_LINK</h3>
              <p>BANDWIDTH: 10 Gbps<br>SYNC_RATE: 99.8%</p>
            </div>
            <div class="hud-card warning">
              <h3>MEM_POOL</h3>
              <p>HEAP_USAGE: 84%<br>STATUS: HIGH_LOAD</p>
            </div>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', monospace; box-sizing: border-box; }
      .hud-container { background: var(--ace-foreground, #050a0e); color: var(--ace-green, #00f0ff); border: 1px solid #00f0ff; padding: 6px; box-shadow: inset 0 0 10px rgba(0,240,255,0.2); }
      .hud-hdr { display: flex; justify-content: space-between; font-size: 3px; border-bottom: 0.5px solid #00f0ff; padding-bottom: 2px; margin-bottom: 4px; }
      .hud-status { color: var(--ace-green, #00f0ff); font-weight: bold; }
      .hud-time { color: #ff0055; }
      .hud-reticle { text-align: center; border: 0.5px dashed #00f0ff; padding: 4px; margin-bottom: 4px; position: relative; }
      .hud-reticle h1 { font-size: 7px; font-weight: bold; letter-spacing: 1px; color: var(--ace-green, #00f0ff); text-shadow: 0 0 4px #00f0ff; }
      .hud-grid { display: flex; gap: 3px; }
      .hud-card { flex: 1; background: rgba(0,240,255,0.05); border: 0.5px solid #00f0ff; padding: 3px; }
      .hud-card.warning { border-color: #ff0055; color: #ff0055; background: rgba(255,0,85,0.05); }
      .hud-card h3 { font-size: 3.5px; font-weight: bold; margin-bottom: 1px; }
      .hud-card p { font-size: 3px; line-height: 1.2; }
    `
	},

	// 2. Medieval Illuminated Manuscript with Drop-Cap Initials
	{
		id: 'exotic-illuminated-manuscript',
		title: 'Illuminated manuscript',
		styleVariant: 'Medieval Codex',
		htmlContent: `
      <div class="manuscript-wrapper">
        <header class="ms-hdr">
          <h1>Chronicles of the Digital Realm</h1>
        </header>
        <main class="ms-body">
          <p class="illuminated-p">
            <span class="drop-cap">I</span>n the early age of compute, before the great cloud migration, scribes of the silicon order documented their algorithms upon scrolls of magnetic tape. Great frameworks rose and fell like empires of old.
          </p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'UnifrakturMaguntia', Georgia, serif; }
      .manuscript-wrapper { background: var(--ace-bg, #f4ecd8); border: 2.5px double #5d4037; padding: 8px; color: var(--ace-foreground, #2b1d0c); box-shadow: inset 0 0 15px rgba(120,80,40,0.15); }
      .ms-hdr h1 { text-align: center; font-size: 9px; font-weight: bold; color: #8d021f; border-bottom: 1px solid #8d021f; padding-bottom: 3px; margin-bottom: 6px; }
      .illuminated-p { font-size: 3.8px; line-height: 1.45; text-align: justify; }
      .drop-cap { float: left; font-size: 18px; line-height: 14px; padding-top: 1px; padding-right: 3px; padding-left: 1px; color: #8d021f; font-weight: bold; background: var(--ace-bg, #fff8e1); border: 1px solid #b78103; margin-right: 2px; }
    `
	},

	// 3. Sci-Fi Starship Captain's Log Terminal
	{
		id: 'exotic-starship-log',
		title: "Starship captain's log",
		styleVariant: 'Sci-Fi Terminal',
		htmlContent: `
      <div class="log-screen">
        <header class="log-hdr">
          <div class="badge">U.S.S. LUMINO // NCC-1701-D</div>
          <h1>STARDATE 10242026.4</h1>
        </header>
        <main class="log-body">
          <section class="entry">
            <h2>CAPTAIN'S LOG: SUPPLEMENTAL</h2>
            <p>We have arrived in orbit around the offscreen canvas worker cluster. Sensors indicate high throughput, but localized frame drops persist near the border boundaries.</p>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', sans-serif; box-sizing: border-box; }
      .log-screen { background: var(--ace-foreground, #000000); color: #ff9900; padding: 6px; border-radius: 4px; border-left: 6px solid #ff9900; }
      .log-hdr { border-bottom: 1px solid #cc6600; padding-bottom: 3px; margin-bottom: 4px; }
      .badge { background: #cc6600; color: var(--ace-foreground, #000); font-size: 3px; font-weight: bold; display: inline-block; padding: 1px 3px; border-radius: 2px; }
      .log-hdr h1 { font-size: 8.5px; font-weight: 900; color: #ff9900; margin-top: 2px; letter-spacing: 0.5px; }
      .log-body h2 { font-size: 4.2px; font-weight: bold; color: #ffcc00; margin-bottom: 2px; }
      p { font-size: 3.8px; color: #ffaa00; line-height: 1.35; }
    `
	},

	// 4. Retro Synthwave / Outrun 80s Cyber Card
	{
		id: 'exotic-synthwave-card',
		title: 'Synthwave 80s poster',
		styleVariant: 'Outrun Neon',
		htmlContent: `
      <div class="synth-card">
        <header class="synth-hdr">
          <h1>NEON NIGHTS</h1>
          <p class="sub">SYNTHWAVE SOUNDTRACK 2026</p>
        </header>
        <div class="wireframe-grid">
          <div class="sun"></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Impact', sans-serif; box-sizing: border-box; }
      .synth-card { background: linear-gradient(180deg, #0d0221 0%, #261447 50%, #ff3864 100%); color: var(--ace-bg, #fff); padding: 8px; text-align: center; overflow: hidden; position: relative; }
      .synth-hdr h1 { font-size: 12px; font-weight: 900; letter-spacing: 1.5px; color: var(--ace-green, #2de2e6); text-shadow: 0 0 5px #2de2e6, 0 0 10px #ff3864; font-style: italic; }
      .sub { font-family: sans-serif; font-size: 3.2px; letter-spacing: 1px; color: #ff6c11; font-weight: bold; }
      .wireframe-grid { height: 25px; margin-top: 6px; border-top: 1px solid #2de2e6; background: linear-gradient(0deg, rgba(45,226,230,0.2) 1px, transparent 1px); background-size: 100% 4px; position: relative; }
      .sun { width: 16px; height: 16px; background: linear-gradient(180deg, #ffe600 0%, #ff3864 100%); border-radius: 50%; position: absolute; top: -10px; left: 50%; transform: translateX(-50%); box-shadow: 0 0 8px #ff3864; }
    `
	},

	// 5. Architectural Blueprint Schematic & Technical Blueprint
	{
		id: 'exotic-architectural-blueprint',
		title: 'Architectural blueprint',
		styleVariant: 'Cyanotype Blueprint',
		htmlContent: `
      <div class="blueprint-frame">
        <header class="bp-hdr">
          <span class="rev">REV: 4.2.0</span>
          <h1>SCHEMATIC: VIRTUAL_SCROLLER_MODULE</h1>
        </header>
        <main class="bp-body">
          <div class="diagram-grid">
            <p>[ CROSS-SECTION: DOM_POOL_BUFFER ]</p>
          </div>
          <div class="title-block">
            <p><strong>SCALE:</strong> 1:1 &bull; <strong>DRAWN BY:</strong> B. CULLINAN</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', monospace; box-sizing: border-box; }
      .blueprint-frame { background: #003366; color: var(--ace-bg, #ffffff); border: 1.5px solid #66b2ff; padding: 6px; }
      .bp-hdr { border-bottom: 0.8px solid #66b2ff; padding-bottom: 3px; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center; }
      .bp-hdr h1 { font-size: 7.5px; font-weight: bold; letter-spacing: 0.5px; color: var(--ace-bg, #ffffff); }
      .rev { font-size: 3px; background: #004080; padding: 1px 2px; border: 0.5px solid #66b2ff; }
      .diagram-grid { border: 0.5px dashed #66b2ff; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 3.5px; color: var(--ace-bg, #b3d9ff); background: rgba(255,255,255,0.03); margin-bottom: 4px; }
      .title-block { border-top: 0.8px solid #66b2ff; padding-top: 2px; font-size: 3.2px; text-align: right; color: var(--ace-bg, #b3d9ff); }
    `
	},

	// 6. Vintage Recipe Card with Stained Craft Paper Texture
	{
		id: 'exotic-vintage-recipe',
		title: 'Vintage recipe card',
		styleVariant: 'Kitchen Craft',
		htmlContent: `
      <div class="recipe-card">
        <header class="rec-hdr">
          <span class="cat">GRANDMA'S KITCHEN</span>
          <h1>Homemade Cinnamon Rolls</h1>
        </header>
        <main class="rec-body">
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <p>&bull; 4 cups flour &bull; 1/2 cup sugar &bull; 1 tbsp yeast</p>
          </div>
          <div class="prep-time">
            <p><strong>PREP:</strong> 20 Mins &bull; <strong>BAKE:</strong> 25 Mins</p>
          </div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', Georgia, serif; box-sizing: border-box; }
      .recipe-card { background: var(--ace-bg, #fdf6e3); border: 1px solid #d33682; padding: 6px; color: var(--ace-blue, #268bd2); border-radius: 2px; box-shadow: inset 0 0 10px rgba(181,137,0,0.1); }
      .rec-hdr { border-bottom: 1px dashed #d33682; padding-bottom: 3px; margin-bottom: 4px; }
      .cat { font-size: 3px; font-weight: bold; color: #b58900; letter-spacing: 0.5px; }
      .rec-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-pink, #cb4b16); margin-top: 1px; }
      .ingredients h3 { font-size: 4px; font-weight: bold; color: var(--ace-purple, #d33682); margin-bottom: 1px; }
      p { font-size: 3.6px; color: var(--ace-comment, #657b83); line-height: 1.3; }
      .prep-time { border-top: 0.5px solid #859900; padding-top: 2px; margin-top: 4px; font-size: 3.2px; color: #859900; font-weight: bold; }
    `
	},

	// 7. Graphic Novel / Comic Book Story Panel Page
	{
		id: 'exotic-comic-book-page',
		title: 'Comic book story panel',
		styleVariant: 'Graphic Novel',
		htmlContent: `
      <div class="comic-page">
        <div class="speech-bubble">
          <p>"BEHOLD! THE VIRTUAL SCROLLER IS COMPLETE!"</p>
        </div>
        <div class="panel-grid">
          <div class="panel p1"><span class="pow">POW!</span></div>
          <div class="panel p2"></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Impact', 'Arial Black', sans-serif; box-sizing: border-box; }
      .comic-page { background: #ffeb3b; border: 2px solid #000; padding: 5px; }
      .speech-bubble { background: var(--ace-bg, #fff); border: 1.5px solid #000; border-radius: 8px; padding: 3px; text-align: center; margin-bottom: 4px; position: relative; }
      .speech-bubble p { font-size: 3.8px; font-weight: bold; color: var(--ace-foreground, #000); }
      .panel-grid { display: flex; gap: 3px; height: 35px; }
      .panel { flex: 1; border: 1.5px solid #000; background: var(--ace-bg, #fff); position: relative; display: flex; align-items: center; justify-content: center; }
      .panel.p1 { background: #ff5722; }
      .panel.p2 { background: #2196f3; }
      .pow { font-size: 10px; color: #ffeb3b; text-shadow: 1px 1px 0 #000, -1px -1px 0 #000; transform: rotate(-12deg); }
    `
	},

	// 8. Classified Secret Government Dossier File
	{
		id: 'exotic-classified-dossier',
		title: 'Classified secret dossier',
		styleVariant: 'Top Secret Dossier',
		htmlContent: `
      <div class="dossier-wrapper">
        <div class="stamp-top">TOP SECRET // EYES ONLY</div>
        <header class="dos-hdr">
          <h1>SUBJECT: PROJECT LUMINO</h1>
          <p class="file-no">FILE NO: #9941-CLASSIFIED</p>
        </header>
        <main class="dos-body">
          <p>Operative <span class="redacted">Brian Cullinan</span> has deployed the <span class="redacted">offscreen canvas worker</span> payload behind municipal firewall protocols.</p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', monospace; box-sizing: border-box; }
      .dossier-wrapper { background: var(--ace-bg, #f2efe9); border: 1px solid #9e9e9e; padding: 6px; position: relative; }
      .stamp-top { font-size: 4px; font-weight: bold; color: var(--ace-pink, #d32f2f); border: 1px solid #d32f2f; padding: 1px 4px; display: inline-block; transform: rotate(-3deg); margin-bottom: 4px; }
      .dos-hdr h1 { font-size: 8px; font-weight: bold; color: var(--ace-foreground, #212121); }
      .file-no { font-size: 3.2px; color: var(--ace-comment, #616161); margin-bottom: 4px; }
      p { font-size: 3.8px; color: var(--ace-foreground, #212121); line-height: 1.4; }
      .redacted { background: var(--ace-foreground, #000); color: var(--ace-foreground, #000); padding: 0 2px; }
    `
	},

	// 9. Retro Macintosh System 7 Window & Desktop UI
	{
		id: 'exotic-retro-mac-window',
		title: 'Retro Mac System 7 window',
		styleVariant: 'System 7 GUI',
		htmlContent: `
      <div class="mac-window">
        <header class="mac-titlebar">
          <div class="close-box"></div>
          <span class="title">Document 1</span>
        </header>
        <main class="mac-body">
          <p>Welcome to Macintosh System 7 Desktop Authoring.</p>
          <div class="mac-btn">OK</div>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Geneva', 'Chicago', sans-serif; box-sizing: border-box; }
      .mac-window { background: var(--ace-bg, #ffffff); border: 1px solid #000000; box-shadow: 1.5px 1.5px 0 #000000; padding: 1px; }
      .mac-titlebar { background: linear-gradient(180deg, #fff 0%, #ccc 100%); border-bottom: 1px solid #000; height: 10px; display: flex; align-items: center; padding: 0 2px; position: relative; }
      .close-box { width: 5px; height: 5px; border: 1px solid #000; background: var(--ace-bg, #fff); margin-right: 4px; }
      .title { font-size: 3.5px; font-weight: bold; color: var(--ace-foreground, #000); margin: 0 auto; }
      .mac-body { padding: 5px; font-size: 3.8px; color: var(--ace-foreground, #000); }
      .mac-btn { border: 1.5px solid #000; border-radius: 3px; padding: 1px 6px; display: inline-block; font-size: 3.5px; font-weight: bold; margin-top: 4px; box-shadow: 1px 1px 0 #000; }
    `
	},

	// 10. Futuristic Holographic Sci-Fi HUD Data Card
	{
		id: 'exotic-holographic-data-card',
		title: 'Holographic sci-fi card',
		styleVariant: 'Holo HUD',
		htmlContent: `
      <div class="holo-card">
        <header class="holo-hdr">
          <span class="holo-glow">HOLO_INTERFACE_v3</span>
          <h1>QUANTUM CORE ACTIVE</h1>
        </header>
        <main class="holo-body">
          <div class="stat-bar">
            <div class="fill"></div>
          </div>
          <p>STABILITY: 99.99% // REACTION_OK</p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .holo-card { background: rgba(0, 255, 170, 0.05); border: 1px solid #00ffaa; padding: 6px; border-radius: 4px; backdrop-filter: blur(2px); box-shadow: 0 0 10px rgba(0,255,170,0.2); }
      .holo-hdr .holo-glow { font-size: 3px; color: var(--ace-green, #00ffaa); font-weight: bold; letter-spacing: 1px; text-shadow: 0 0 3px #00ffaa; }
      .holo-hdr h1 { font-size: 8px; font-weight: 800; color: var(--ace-bg, #ffffff); text-shadow: 0 0 5px #00ffaa; margin-top: 1px; }
      .stat-bar { height: 4px; background: rgba(0,255,170,0.2); border-radius: 2px; margin: 4px 0 2px 0; overflow: hidden; }
      .fill { width: 85%; height: 100%; background: #00ffaa; box-shadow: 0 0 5px #00ffaa; }
      p { font-size: 3.2px; color: var(--ace-green, #00ffaa); font-family: monospace; }
    `
	}
];

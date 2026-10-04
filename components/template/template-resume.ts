import type { ITemplateItem } from './template';

export const RESUME_TEMPLATES: ITemplateItem[] = [
	// 1. Swiss (Bold Typography & Asymmetric Layout)
	{
		id: 'resume-swiss',
		title: 'Resume',
		styleVariant: 'Swiss',
		htmlContent: `
      <header class="swiss-hdr">
        <h1>ALEXANDER<br>NOVA</h1>
        <p class="tagline">PRINCIPAL SYSTEMS ARCHITECT</p>
      </header>
      <div class="swiss-grid">
        <aside class="swiss-side">
          <section>
            <h2>CONTACT</h2>
            <p>alex@domain.io</p>
            <p>+1.555.0199</p>
            <p>Zurich, CH</p>
          </section>
          <section>
            <h2>CORE</h2>
            <p>&bull; C++ / Rust</p>
            <p>&bull; WebAssembly</p>
            <p>&bull; Lumino UI</p>
          </section>
        </aside>
        <main class="swiss-main">
          <section>
            <h2>EXPERIENCE</h2>
            <article class="entry">
              <h3>Lead Engineer &mdash; Helios Labs</h3>
              <p class="meta">2022 &ndash; PRESENT</p>
              <p>Architected high-throughput browser runtimes and canvas virtualization engines.</p>
            </article>
            <article class="entry">
              <h3>Senior Developer &mdash; Apex AG</h3>
              <p class="meta">2018 &ndash; 2022</p>
              <p>Designed modular component libraries and WebGL state managers.</p>
            </article>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .swiss-hdr { border-bottom: 2px solid #000; padding-bottom: 4px; margin-bottom: 6px; }
      .swiss-hdr h1 { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 900; line-height: 0.95; letter-spacing: -0.5px; color: #000; }
      .tagline { font-size: 4px; font-weight: bold; color: #e53935; margin-top: 3px; letter-spacing: 0.5px; }
      .swiss-grid { display: flex; gap: 8px; }
      .swiss-side { width: 30%; border-right: 1px solid #000; padding-right: 4px; }
      .swiss-side h2 { font-size: 5px; font-weight: 900; color: #000; margin-bottom: 2px; }
      .swiss-side p { font-size: 4px; color: #333; line-height: 1.3; }
      .swiss-main { width: 70%; }
      .swiss-main h2 { font-size: 5.5px; font-weight: 900; color: #000; border-bottom: 1px solid #000; margin-bottom: 3px; }
      .entry h3 { font-size: 4.8px; font-weight: bold; color: #111; }
      .meta { font-size: 3.8px; color: #666; font-weight: bold; margin-bottom: 1px; }
      p { font-size: 4px; color: #222; }
    `
	},

	// 2. Serif (Classic Editorial & Academic Elegance)
	{
		id: 'resume-serif',
		title: 'Resume',
		styleVariant: 'Serif',
		htmlContent: `
      <header class="serif-hdr">
        <h1>ELEANOR VANE</h1>
        <p class="title">Professor of Software Engineering & Author</p>
        <div class="divider"></div>
      </header>
      <main class="serif-body">
        <section>
          <h2>Academic Appointments</h2>
          <article>
            <h3>Department Chair &mdash; Cambridge University</h3>
            <p class="period">2020 &ndash; Present</p>
            <p>Directing research on interactive compiler tooling and document structure parsers.</p>
          </article>
        </section>
        <section>
          <h2>Selected Publications</h2>
          <article>
            <h3>"Virtualizing Large-Scale Visual Canvases"</h3>
            <p class="period">Journal of Web Engineering, 2024</p>
          </article>
        </section>
      </main>
    `,
		cssContent: `
      .serif-hdr { text-align: center; margin-bottom: 6px; }
      .serif-hdr h1 { font-family: Georgia, 'Times New Roman', serif; font-size: 11px; font-weight: normal; letter-spacing: 1px; color: #111; }
      .title { font-family: Georgia, serif; font-size: 4.2px; font-style: italic; color: #555; margin-top: 1px; }
      .divider { width: 30px; height: 0.5px; background: #888; margin: 4px auto 0 auto; }
      .serif-body h2 { font-family: Georgia, serif; font-size: 5.5px; color: #1a237e; border-bottom: 0.5px solid #c5cae9; margin: 5px 0 2px 0; }
      .serif-body h3 { font-family: Georgia, serif; font-size: 4.8px; color: #111; }
      .period { font-size: 3.8px; color: #777; font-style: italic; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 3. Coral (Warm Left Column Strip)
	{
		id: 'resume-coral',
		title: 'Resume',
		styleVariant: 'Coral',
		htmlContent: `
      <div class="coral-frame">
        <aside class="coral-sidebar">
          <div class="avatar-ph">JL</div>
          <h2>Contact</h2>
          <p>jordan@lee.design</p>
          <p>San Francisco, CA</p>
          <h2>Skills</h2>
          <p>&bull; UI/UX Motion</p>
          <p>&bull; Figma Tokens</p>
          <p>&bull; CSS Architecture</p>
        </aside>
        <main class="coral-main">
          <header>
            <h1>JORDAN LEE</h1>
            <p class="sub">Lead Product Designer</p>
          </header>
          <section>
            <h2>Biography</h2>
            <p>Specializing in modern publishing apps, typography systems, and web presence builders.</p>
          </section>
          <section>
            <h2>Work History</h2>
            <article>
              <h3>Staff Designer &mdash; Studio Graph</h3>
              <p>Designed scalable layout galleries and template customization interfaces.</p>
            </article>
          </section>
        </main>
      </div>
    `,
		cssContent: `
      .coral-frame { display: flex; height: 100%; margin: -10px; }
      .coral-sidebar { width: 36%; background: #fff3e0; padding: 8px 6px; border-right: 1.5px solid #ffab91; }
      .avatar-ph { width: 18px; height: 18px; background: #e07a5f; color: #fff; font-size: 6px; font-weight: bold; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px; }
      .coral-sidebar h2 { font-size: 4.8px; color: #d84315; font-weight: bold; margin-top: 4px; text-transform: uppercase; }
      .coral-sidebar p { font-size: 3.8px; color: #4e342e; }
      .coral-main { width: 64%; padding: 8px 6px; }
      .coral-main h1 { font-size: 10px; color: #d84315; font-weight: bold; }
      .sub { font-size: 4.2px; color: #8d6e63; font-weight: bold; margin-bottom: 5px; }
      .coral-main h2 { font-size: 5.5px; color: #d84315; border-bottom: 0.5px solid #ffccbc; margin: 4px 0 2px 0; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 4. Spearmint (Clean Top Banner & Green Accents)
	{
		id: 'resume-spearmint',
		title: 'Resume',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="mint-banner">
        <h1>CAMERON RIVERS</h1>
        <p>Full-Stack Engineer &bull; Open Source Contributor</p>
      </header>
      <main class="mint-body">
        <section>
          <h2>Technical Expertise</h2>
          <div class="pill-group">
            <span class="pill">TypeScript</span>
            <span class="pill">Node.js</span>
            <span class="pill">Docker</span>
            <span class="pill">GraphQL</span>
          </div>
        </section>
        <section>
          <h2>Experience</h2>
          <article>
            <h3>Senior Systems Developer &mdash; Mintware</h3>
            <p class="date">2021 &ndash; Present</p>
            <p>Maintained cloud services, automated microservices, and client-side rendering runtimes.</p>
          </article>
        </section>
      </main>
    `,
		cssContent: `
      .mint-banner { background: #e8f5e9; border-left: 3px solid #2e7d32; padding: 6px 8px; margin: -10px -10px 6px -10px; }
      .mint-banner h1 { font-size: 9.5px; color: #1b5e20; font-weight: bold; }
      .mint-banner p { font-size: 4px; color: #388e3c; }
      .mint-body h2 { font-size: 5.5px; color: #2e7d32; border-bottom: 0.5px solid #a5d6a7; margin: 4px 0 2px 0; }
      .pill-group { display: flex; gap: 2px; margin-bottom: 4px; }
      .pill { background: #c8e6c9; color: #1b5e20; font-size: 3.5px; padding: 1px 3px; border-radius: 2px; font-weight: bold; }
      .date { font-size: 3.8px; color: #666; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 5. Modern Writer (Minimalist Monospace Theme)
	{
		id: 'resume-modern-writer',
		title: 'Resume',
		styleVariant: 'Modern Writer',
		htmlContent: `
      <header class="writer-hdr">
        <h1>MARCUS_VANCE.TXT</h1>
        <p>// Tech Lead & Systems Programmer</p>
      </header>
      <main class="writer-body">
        <section>
          <h2>> EXPERIENCE</h2>
          <article>
            <h3>[01] Kernel Engineer @ ByteCorp</h3>
            <p class="timeline">2020 -> PRESENT</p>
            <p>- Optimized virtual memory allocators and file stream parsers.</p>
          </article>
        </section>
        <section>
          <h2>> STACK</h2>
          <p>C, Assembly, Rust, WebAssembly, Bash, Linux Kernel</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, monospace; }
      .writer-hdr h1 { font-size: 9px; font-weight: bold; color: #212121; }
      .writer-hdr p { font-size: 4px; color: #616161; margin-bottom: 6px; }
      .writer-body h2 { font-size: 5px; font-weight: bold; background: #e0e0e0; padding: 1px 3px; color: #000; margin: 4px 0 2px 0; }
      .writer-body h3 { font-size: 4.5px; font-weight: bold; color: #111; }
      .timeline { font-size: 3.8px; color: #757575; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 6. Modern Minimal (Ultra-Clean Centered Header)
	{
		id: 'resume-modern-minimal',
		title: 'Resume',
		styleVariant: 'Modern Minimal',
		htmlContent: `
      <header class="min-hdr">
        <h1>SOPHIA CHEN</h1>
        <p>UX Engineer &bull; Interactive Media Designer</p>
        <p class="contact">sophia.design &bull; hello@sophia.dev</p>
      </header>
      <main class="min-body">
        <section>
          <h2>WORK EXPERIENCE</h2>
          <article>
            <h3>Design Systems Lead &mdash; Canvas Labs</h3>
            <p class="loc">New York, NY | 2022 &ndash; Present</p>
            <p>Engineered responsive web components and browser accessibility engines.</p>
          </article>
        </section>
      </main>
    `,
		cssContent: `
      .min-hdr { text-align: center; border-bottom: 0.5px solid #ccc; padding-bottom: 4px; margin-bottom: 6px; }
      .min-hdr h1 { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 300; letter-spacing: 1px; color: #111; }
      .min-hdr p { font-size: 4px; color: #555; }
      .contact { font-size: 3.8px; color: #888; margin-top: 1px; }
      .min-body h2 { font-size: 5px; font-weight: 600; letter-spacing: 0.5px; color: #444; margin: 4px 0 2px 0; }
      .min-body h3 { font-size: 4.5px; font-weight: 600; color: #111; }
      .loc { font-size: 3.8px; color: #777; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 7. Executive (Corporate Slate & Navy Blue)
	{
		id: 'resume-executive',
		title: 'Resume',
		styleVariant: 'Executive',
		htmlContent: `
      <header class="exec-hdr">
        <div class="name-block">
          <h1>DAVID MONTGOMERY</h1>
          <p>Chief Technology Officer</p>
        </div>
      </header>
      <main class="exec-body">
        <section>
          <h2>EXECUTIVE SUMMARY</h2>
          <p>Technology executive with 15+ years experience driving digital transformation, scaling cloud architecture, and leading global engineering groups.</p>
        </section>
        <section>
          <h2>LEADERSHIP & EXPERIENCE</h2>
          <article>
            <h3>Chief Technology Officer &mdash; Enterprise Global</h3>
            <p class="span">2019 &ndash; Present</p>
            <p>Overseeing 120+ software engineers across 4 international tech hubs.</p>
          </article>
        </section>
      </main>
    `,
		cssContent: `
      .exec-hdr { background: #1a237e; color: #fff; padding: 8px; margin: -10px -10px 6px -10px; }
      .exec-hdr h1 { font-size: 9.5px; font-weight: bold; letter-spacing: 0.5px; color: #ffffff; }
      .exec-hdr p { font-size: 4px; color: #9fa8da; text-transform: uppercase; }
      .exec-body h2 { font-size: 5.2px; font-weight: bold; color: #1a237e; border-bottom: 1px solid #1a237e; margin: 4px 0 2px 0; }
      .exec-body h3 { font-size: 4.5px; font-weight: bold; color: #111; }
      .span { font-size: 3.8px; color: #555; font-style: italic; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 8. Creative Dark Header (Vibrant High-Contrast Layout)
	{
		id: 'resume-creative-dark',
		title: 'Resume',
		styleVariant: 'Creative',
		htmlContent: `
      <header class="dark-hdr">
        <h1>ZAKARY VANCE</h1>
        <p class="badge">GAME DEVELOPER & CANVAS SPECIALIST</p>
      </header>
      <main class="dark-body">
        <section>
          <h2>PORTFOLIO HIGHLIGHTS</h2>
          <article>
            <h3>HTML5 Canvas Render Engine</h3>
            <p>Built 60FPS 2D sprite renderer with custom particle engines.</p>
          </article>
          <article>
            <h3>BIONICLE Web Experience</h3>
            <p>Interactive 3D mask viewer built with Three.js and Lumino Widgets.</p>
          </article>
        </section>
      </main>
    `,
		cssContent: `
      .dark-hdr { background: #212121; color: #fff; padding: 8px; margin: -10px -10px 6px -10px; }
      .dark-hdr h1 { font-size: 10px; color: #00e676; font-family: sans-serif; font-weight: 900; }
      .badge { font-size: 3.8px; background: #00e676; color: #000; font-weight: bold; display: inline-block; padding: 1px 3px; border-radius: 2px; margin-top: 2px; }
      .dark-body h2 { font-size: 5.2px; color: #212121; border-bottom: 1.5px solid #00e676; margin: 4px 0 2px 0; font-weight: bold; }
      .dark-body h3 { font-size: 4.5px; color: #111; font-weight: bold; }
      p { font-size: 4px; color: #333; }
    `
	},

	// 9. Minimal Grid (Two Equal Column Boxed Layout)
	{
		id: 'resume-minimal-grid',
		title: 'Resume',
		styleVariant: 'Grid',
		htmlContent: `
      <header class="grid-hdr">
        <h1>MIA THORNE</h1>
        <p>Data Scientist & Machine Learning Specialist</p>
      </header>
      <div class="equal-cols">
        <div class="col-box">
          <h2>Education</h2>
          <p><strong>Ph.D. Statistics</strong><br>MIT (2021)</p>
          <p><strong>B.S. Math</strong><br>UC Berkeley (2017)</p>
        </div>
        <div class="col-box">
          <h2>Experience</h2>
          <p><strong>AI Researcher</strong><br>Open AI Labs</p>
          <p>Trained large language models and reasoning filters.</p>
        </div>
      </div>
    `,
		cssContent: `
      .grid-hdr { border-bottom: 1px solid #424242; padding-bottom: 4px; margin-bottom: 6px; }
      .grid-hdr h1 { font-size: 10px; font-weight: bold; color: #212121; }
      .grid-hdr p { font-size: 4px; color: #616161; }
      .equal-cols { display: flex; gap: 6px; }
      .col-box { flex: 1; background: #f5f5f5; padding: 5px; border-radius: 3px; border: 0.5px solid #e0e0e0; }
      .col-box h2 { font-size: 5px; color: #1565c0; margin-bottom: 3px; border-bottom: 0.5px solid #1565c0; }
      p { font-size: 3.8px; color: #333; line-height: 1.3; }
    `
	},

	// 10. Elegant Border (Framed Border Margin Style)
	{
		id: 'resume-elegant-border',
		title: 'Resume',
		styleVariant: 'Elegant',
		htmlContent: `
      <div class="frame-border">
        <header>
          <h1>ISABELLA ROSSI</h1>
          <p class="subtitle">Art Director & Editorial Designer</p>
        </header>
        <section>
          <h2>Exhibitions & Features</h2>
          <article>
            <h3>Milan Design Week &mdash; Installation Lead</h3>
            <p class="year">2025</p>
            <p>Curated interactive typography displays and physical document layouts.</p>
          </article>
        </section>
      </div>
    `,
		cssContent: `
      .frame-border { border: 1px solid #b0bec5; padding: 6px; height: 100%; box-sizing: border-box; }
      header { text-align: center; border-bottom: 0.5px solid #b0bec5; padding-bottom: 4px; margin-bottom: 4px; }
      header h1 { font-family: Georgia, serif; font-size: 9.5px; color: #37474f; font-weight: normal; letter-spacing: 0.5px; }
      .subtitle { font-size: 4px; color: #78909c; font-style: italic; }
      section h2 { font-family: Georgia, serif; font-size: 5px; color: #37474f; margin: 4px 0 2px 0; text-transform: uppercase; }
      article h3 { font-size: 4.2px; font-weight: bold; color: #263238; }
      .year { font-size: 3.6px; color: #90a4ae; }
      p { font-size: 4px; color: #37474f; }
    `
	}
];

import type { ITemplateItem } from './template';

export const RESUME_TEMPLATES: ITemplateItem[] = [
	// 1. Swiss
	{
		id: 'resume-swiss',
		title: 'Resume',
		styleVariant: 'Swiss',
		description: 'Bold International Style resume with heavy black rules, red accent tagline, and strict two-column asymmetry. Ideal for senior engineers and architects who want maximum visual authority and minimal ornament.',
		htmlContent: `
      <header class="swiss-hdr">
        <h1>ALEXANDER<br>NOVA</h1>
        <p class="tagline">PRINCIPAL SYSTEMS ARCHITECT</p>
      </header>
      <div class="swiss-grid">
        <aside class="swiss-side">
          <section>
            <h2>CONTACT</h2>
            <p>alex@novasystems.io</p>
            <p>+41 79 555 0199</p>
            <p>Zurich, Switzerland</p>
            <p>linkedin.com/in/anov</p>
          </section>
          <section>
            <h2>CORE</h2>
            <p>• C++ / Rust</p>
            <p>• WebAssembly</p>
            <p>• Lumino UI</p>
            <p>• Edge Proxies</p>
            <p>• TypeScript</p>
          </section>
          <section>
            <h2>LANGUAGES</h2>
            <p>English · German · French</p>
          </section>
        </aside>
        <main class="swiss-main">
          <section>
            <h2>EXPERIENCE</h2>
            <article class="entry">
              <h3>Lead Engineer — Helios Labs</h3>
              <p class="meta">2022 – PRESENT · Zurich</p>
              <p>Architected high-throughput browser runtimes and canvas virtualization engines serving 2 M+ daily sessions. Reduced cold-start latency 40 % and eliminated an entire class of memory regressions.</p>
            </article>
            <article class="entry">
              <h3>Senior Developer — Apex AG</h3>
              <p class="meta">2018 – 2022 · Basel</p>
              <p>Designed modular component libraries and WebGL state managers used across three product lines. Mentored a team of six and established the internal architecture review process.</p>
            </article>
          </section>
          <section>
            <h2>EDUCATION</h2>
            <p><strong>MSc Computer Science</strong> — ETH Zürich, 2018</p>
          </section>
        </main>
      </div>
      <p class="usage">Keep the name stacked and ultra-bold. Red is used only for the tagline. Left column is strictly metadata and skills; right column carries narrative experience. No icons, no color beyond black/red/gray.</p>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .swiss-hdr { border-bottom: 2.5px solid #000; padding-bottom: 5px; margin-bottom: 8px; }
      .swiss-hdr h1 { font-size: large; font-weight: 900; line-height: 0.95; letter-spacing: -0.6px; color: #000; margin: 0; }
      .tagline { font-size: small; font-weight: 800; color: #e53935; margin: 4px 0 0 0; letter-spacing: 0.6px; }
      .swiss-grid { display: flex; gap: 10px; margin-bottom: 6px; }
      .swiss-side { width: 30%; border-right: 1px solid #000; padding-right: 6px; }
      .swiss-side h2 { font-size: small; font-weight: 900; color: #000; margin: 0 0 3px 0; }
      .swiss-side section { margin-bottom: 8px; }
      .swiss-side p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 1px 0; }
      .swiss-main { width: 70%; }
      .swiss-main h2 { font-size: medium; font-weight: 900; color: #000; border-bottom: 1px solid #000; margin: 0 0 4px 0; padding-bottom: 2px; }
      .entry { margin-bottom: 6px; }
      .entry h3 { font-size: small; font-weight: 800; color: #111; margin: 0 0 1px 0; }
      .meta { font-size: small; color: #666; font-weight: 700; margin: 0 0 2px 0; }
      .swiss-main p { font-size: small; color: #222; margin: 0 0 2px 0; line-height: 1.35; }
      .usage { font-size: small; color: #757575; font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin: 0; line-height: 1.3; }
    `
	},

	// 2. Serif
	{
		id: 'resume-serif',
		title: 'Resume',
		styleVariant: 'Serif',
		description: 'Classic academic and editorial CV with centered serif letterhead and restrained navy section rules. Best for professors, researchers, authors, and senior individual contributors in scholarly or publishing environments.',
		htmlContent: `
      <header class="serif-hdr">
        <h1>ELEANOR VANE</h1>
        <p class="title">Professor of Software Engineering & Author</p>
        <div class="divider"></div>
        <p class="contact">eleanor.vane@cam.ac.uk · Cambridge, UK · orcid.org/0000-0002-1825-0097</p>
      </header>
      <main class="serif-body">
        <section>
          <h2>Academic Appointments</h2>
          <article>
            <h3>Department Chair — University of Cambridge</h3>
            <p class="period">2020 – Present</p>
            <p>Directing research on interactive compiler tooling, document-structure parsers, and large-scale layout virtualization. Supervise eight doctoral candidates and lead a £2.4 M EPSRC grant.</p>
          </article>
          <article>
            <h3>Reader in Programming Languages — University of Edinburgh</h3>
            <p class="period">2015 – 2020</p>
            <p>Established the Program Analysis Group and published the foundational papers on incremental type-checking for live programming environments.</p>
          </article>
        </section>
        <section>
          <h2>Selected Publications</h2>
          <article>
            <h3>“Virtualizing Large-Scale Visual Canvases”</h3>
            <p class="period">Journal of Web Engineering, 2024</p>
          </article>
          <article>
            <h3>“Deterministic Layout Recovery in Browser Engines”</h3>
            <p class="period">ACM TOPLAS, 2022</p>
          </article>
        </section>
        <section>
          <h2>Education</h2>
          <p><strong>PhD Computer Science</strong> — University of Cambridge, 2012</p>
        </section>
      </main>
      <p class="usage">Center the name and keep the italic title. Navy rules under section headings are the only color accent. Publications should list title, venue, and year—nothing more on the first page.</p>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; padding: 4px; }
      .serif-hdr { text-align: center; margin-bottom: 8px; }
      .serif-hdr h1 { font-size: large; font-weight: 400; letter-spacing: 1.2px; color: #111; margin: 0 0 2px 0; }
      .title { font-size: small; font-style: italic; color: #555; margin: 0 0 4px 0; }
      .divider { width: 36px; height: 0.5px; background: #888; margin: 0 auto 4px auto; }
      .contact { font-size: small; color: #666; margin: 0; }
      .serif-body h2 { font-size: medium; color: #1a237e; border-bottom: 0.5px solid #c5cae9; margin: 8px 0 4px 0; padding-bottom: 2px; }
      .serif-body h3 { font-size: small; color: #111; margin: 0 0 1px 0; }
      .period { font-size: small; color: #777; font-style: italic; margin: 0 0 2px 0; }
      p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.4; }
      .usage { font-size: small; color: #78909c; font-style: italic; border-top: 0.5px dashed #c5cae9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 3. Coral
	{
		id: 'resume-coral',
		title: 'Resume',
		styleVariant: 'Coral',
		description: 'Warm two-column resume with coral sidebar, avatar initials, and soft background. Excellent for product designers, UX leads, and creative technologists who want approachable professionalism.',
		htmlContent: `
      <div class="coral-frame">
        <aside class="coral-sidebar">
          <div class="avatar-ph">JL</div>
          <h2>Contact</h2>
          <p>jordan@lee.design</p>
          <p>San Francisco, CA</p>
          <p>lee.design · @jordanlee</p>
          <h2>Skills</h2>
          <p>• UI/UX Motion</p>
          <p>• Figma Tokens</p>
          <p>• CSS Architecture</p>
          <p>• Design Systems</p>
          <p>• Accessibility</p>
          <h2>Tools</h2>
          <p>Figma · Framer · Storybook · TypeScript</p>
        </aside>
        <main class="coral-main">
          <header>
            <h1>JORDAN LEE</h1>
            <p class="sub">Lead Product Designer</p>
          </header>
          <section>
            <h2>Biography</h2>
            <p>Specializing in modern publishing applications, typography systems, and web-presence builders. I focus on making complex layout engines feel simple and delightful for both designers and end users.</p>
          </section>
          <section>
            <h2>Work History</h2>
            <article>
              <h3>Staff Designer — Studio Graph</h3>
              <p class="meta">2021 – Present · San Francisco</p>
              <p>Designed scalable layout galleries and template customization interfaces used by 40 k+ creators. Established the studio’s first design-token system and reduced design-to-dev handoff time by 35 %.</p>
            </article>
            <article>
              <h3>Senior Product Designer — Pixel & Form</h3>
              <p class="meta">2018 – 2021 · Remote</p>
              <p>Led the redesign of the core authoring surface and introduced motion guidelines that became the company standard.</p>
            </article>
          </section>
        </main>
      </div>
      <p class="usage">Avatar initials are a deliberate soft personal touch. Keep the sidebar strictly contact + skills. Main column carries narrative. Coral is the sole accent color.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .coral-frame { display: flex; margin: -6px; min-height: 100%; }
      .coral-sidebar { width: 34%; background: #fff3e0; padding: 10px 6px; border-right: 2px solid #ffab91; }
      .avatar-ph { width: 22px; height: 22px; background: #e07a5f; color: var(--ace-bg, #fff); font-size: medium; font-weight: 800; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 6px; }
      .coral-sidebar h2 { font-size: small; color: #d84315; font-weight: 800; margin: 6px 0 2px 0; text-transform: uppercase; letter-spacing: 0.3px; }
      .coral-sidebar p { font-size: small; color: var(--ace-foreground, #4e342e); margin: 0 0 1px 0; line-height: 1.3; }
      .coral-main { width: 66%; padding: 10px 8px; }
      .coral-main h1 { font-size: large; color: #d84315; font-weight: 800; margin: 0 0 1px 0; }
      .sub { font-size: small; color: #8d6e63; font-weight: 700; margin: 0 0 6px 0; }
      .coral-main h2 { font-size: medium; color: #d84315; border-bottom: 0.5px solid #ffccbc; margin: 6px 0 3px 0; padding-bottom: 2px; }
      .coral-main h3 { font-size: small; color: #333; margin: 0 0 1px 0; font-weight: 700; }
      .meta { font-size: small; color: #8d6e63; margin: 0 0 2px 0; }
      .coral-main p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #bf360c; font-style: italic; border-top: 0.5px dashed #ffccbc; padding: 4px 8px 0 8px; margin: 6px 0 0 0; line-height: 1.3; }
    `
	},

	// 4. Spearmint
	{
		id: 'resume-spearmint',
		title: 'Resume',
		styleVariant: 'Spearmint',
		description: 'Fresh green-accent resume with left-border banner and skill pills. Clean, modern, and friendly—well suited to full-stack engineers, open-source maintainers, and developers who want a contemporary but still professional look.',
		htmlContent: `
      <header class="mint-banner">
        <h1>CAMERON RIVERS</h1>
        <p>Full-Stack Engineer · Open Source Contributor · Remote</p>
      </header>
      <main class="mint-body">
        <section>
          <h2>Technical Expertise</h2>
          <div class="pill-group">
            <span class="pill">TypeScript</span>
            <span class="pill">Node.js</span>
            <span class="pill">Docker</span>
            <span class="pill">GraphQL</span>
            <span class="pill">PostgreSQL</span>
            <span class="pill">React</span>
          </div>
        </section>
        <section>
          <h2>Experience</h2>
          <article>
            <h3>Senior Systems Developer — Mintware</h3>
            <p class="date">2021 – Present</p>
            <p>Own cloud services, automated microservices, and client-side rendering runtimes. Led the migration to a zero-downtime deployment pipeline and reduced average incident resolution time from 4 h to 45 min.</p>
          </article>
          <article>
            <h3>Software Engineer — Greenfield Labs</h3>
            <p class="date">2018 – 2021</p>
            <p>Built the original GraphQL gateway and the internal developer portal still used by 30+ teams.</p>
          </article>
        </section>
        <section>
          <h2>Open Source</h2>
          <p>Core contributor to three widely used TypeScript tooling projects (combined 12 k+ GitHub stars). Regular speaker at local meetups on edge computing and developer experience.</p>
        </section>
      </main>
      <p class="usage">The green left border is the visual signature. Skill pills should stay short. Experience bullets focus on impact, not responsibilities.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .mint-banner { background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 8px 10px; margin: -6px -6px 8px -6px; border-radius: 0 2px 2px 0; }
      .mint-banner h1 { font-size: large; color: #1b5e20; font-weight: 800; margin: 0 0 2px 0; }
      .mint-banner p { font-size: small; color: #388e3c; margin: 0; }
      .mint-body h2 { font-size: medium; color: #2e7d32; border-bottom: 0.5px solid #a5d6a7; margin: 6px 0 4px 0; padding-bottom: 2px; }
      .pill-group { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 6px; }
      .pill { background: #c8e6c9; color: #1b5e20; font-size: small; padding: 2px 6px; border-radius: 3px; font-weight: 700; }
      .date { font-size: small; color: #666; margin: 0 0 2px 0; }
      h3 { font-size: small; color: #1b5e20; margin: 0 0 1px 0; font-weight: 700; }
      p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #558b2f; font-style: italic; border-top: 0.5px dashed #a5d6a7; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 5. Modern Writer
	{
		id: 'resume-modern-writer',
		title: 'Resume',
		styleVariant: 'Modern Writer',
		description: 'Monospace, terminal-inspired resume for systems programmers, kernel engineers, and infrastructure specialists. Reads like a well-commented source file—precise, dense, and unmistakably technical.',
		htmlContent: `
      <header class="writer-hdr">
        <h1>MARCUS_VANCE.TXT</h1>
        <p>// Tech Lead & Systems Programmer · marcus@vance.dev · GitHub: @mvance</p>
      </header>
      <main class="writer-body">
        <section>
          <h2>> EXPERIENCE</h2>
          <article>
            <h3>[01] Kernel Engineer @ ByteCorp</h3>
            <p class="timeline">2020 -> PRESENT</p>
            <p>- Optimized virtual memory allocators and file-stream parsers under heavy concurrent load.<br>
            - Reduced page-fault latency 28 % on the production fleet.<br>
            - Authored the internal RFC for the new capability-based sandbox model.</p>
          </article>
          <article>
            <h3>[02] Systems Developer @ LowLevel Labs</h3>
            <p class="timeline">2016 -> 2020</p>
            <p>- Built the original WebAssembly runtime bindings used by three product teams.<br>
            - Maintained the continuous-fuzzing infrastructure for the core allocator.</p>
          </article>
        </section>
        <section>
          <h2>> STACK</h2>
          <p>C · Assembly · Rust · WebAssembly · Bash · Linux Kernel · eBPF</p>
        </section>
        <section>
          <h2>> EDUCATION</h2>
          <p>BSc Computer Science — University of Waterloo, 2016</p>
        </section>
      </main>
      <p class="usage">Monospace throughout is mandatory. Section headers use the “> ” prompt style. Experience entries are numbered. Keep descriptions terse and outcome-focused.</p>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, ui-monospace, monospace; box-sizing: border-box; padding: 4px; }
      .writer-hdr h1 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #212121); margin: 0 0 2px 0; }
      .writer-hdr p { font-size: small; color: #616161; margin: 0 0 8px 0; }
      .writer-body h2 { font-size: small; font-weight: 700; background: #e0e0e0; padding: 2px 5px; color: #000; margin: 6px 0 3px 0; }
      .writer-body h3 { font-size: small; font-weight: 700; color: #111; margin: 0 0 1px 0; }
      .timeline { font-size: small; color: #757575; margin: 0 0 2px 0; }
      p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: var(--ace-bg, #9e9e9e); font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 6. Modern Minimal
	{
		id: 'resume-modern-minimal',
		title: 'Resume',
		styleVariant: 'Modern Minimal',
		description: 'Ultra-clean centered resume with light letter-spacing and a single thin rule. Perfect for UX engineers, design-systems specialists, and anyone who wants the content to speak without visual noise.',
		htmlContent: `
      <header class="min-hdr">
        <h1>SOPHIA CHEN</h1>
        <p>UX Engineer · Interactive Media Designer</p>
        <p class="contact">sophia.design · hello@sophia.dev · New York, NY</p>
      </header>
      <main class="min-body">
        <section>
          <h2>WORK EXPERIENCE</h2>
          <article>
            <h3>Design Systems Lead — Canvas Labs</h3>
            <p class="loc">New York, NY · 2022 – Present</p>
            <p>Engineered the responsive component library and browser accessibility engine now used by every product surface. Reduced design-to-production time by 40 % and established the company’s first public contribution guidelines.</p>
          </article>
          <article>
            <h3>Senior UX Engineer — Frame & Form</h3>
            <p class="loc">Remote · 2019 – 2022</p>
            <p>Owned the interaction model for the core authoring canvas and introduced the motion and focus guidelines still in force today.</p>
          </article>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <p><strong>BFA Interaction Design</strong> — Parsons School of Design, 2019</p>
        </section>
      </main>
      <p class="usage">Light font weight and generous letter-spacing on the name are intentional. Do not bold the name or thicken the rule. Contact line stays on one line. Experience focuses on outcomes.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .min-hdr { text-align: center; border-bottom: 0.5px solid #ccc; padding-bottom: 6px; margin-bottom: 8px; }
      .min-hdr h1 { font-size: large; font-weight: 300; letter-spacing: 1.8px; color: #111; margin: 0 0 3px 0; }
      .min-hdr p { font-size: small; color: #555; margin: 0 0 1px 0; }
      .contact { font-size: small; color: #888; margin-top: 2px !important; }
      .min-body h2 { font-size: small; font-weight: 600; letter-spacing: 0.6px; color: #444; margin: 6px 0 3px 0; }
      .min-body h3 { font-size: small; font-weight: 600; color: #111; margin: 0 0 1px 0; }
      .loc { font-size: small; color: #777; margin: 0 0 2px 0; }
      p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: var(--ace-bg, #9e9e9e); font-style: italic; border-top: 0.5px dashed #e0e0e0; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 7. Executive
	{
		id: 'resume-executive',
		title: 'Resume',
		styleVariant: 'Executive',
		description: 'Corporate slate-and-navy executive resume. Deep indigo banner, formal section rules, and concise leadership narrative. Built for CTOs, VPs of Engineering, and senior technology leaders.',
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
          <p>Technology executive with 15+ years driving digital transformation, scaling cloud architecture, and leading global engineering organizations. Proven record of aligning technical strategy with commercial outcomes and building high-performing, distributed teams.</p>
        </section>
        <section>
          <h2>LEADERSHIP & EXPERIENCE</h2>
          <article>
            <h3>Chief Technology Officer — Enterprise Global</h3>
            <p class="span">2019 – Present</p>
            <p>Oversee 120+ software engineers across four international hubs. Own the multi-year platform roadmap, security posture, and vendor strategy. Delivered a 35 % reduction in infrastructure cost while improving global uptime to 99.99 %.</p>
          </article>
          <article>
            <h3>VP Engineering — CloudScale Inc.</h3>
            <p class="span">2015 – 2019</p>
            <p>Grew the engineering organization from 25 to 90. Established the architecture review board and the internal developer platform still in use today.</p>
          </article>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <p><strong>MBA</strong> — INSEAD · <strong>BSc Computer Science</strong> — Imperial College London</p>
        </section>
      </main>
      <p class="usage">The indigo banner is non-negotiable. Keep the executive summary under 60 words. Experience entries emphasize scope, team size, and measurable business impact.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .exec-hdr { background: #1a237e; color: var(--ace-bg, #fff); padding: 10px 8px; margin: -6px -6px 8px -6px; border-radius: 2px 2px 0 0; }
      .exec-hdr h1 { font-size: large; font-weight: 800; letter-spacing: 0.5px; color: var(--ace-bg, #fff); margin: 0 0 2px 0; }
      .exec-hdr p { font-size: small; color: var(--ace-bg, #9fa8da); text-transform: uppercase; letter-spacing: 0.4px; margin: 0; }
      .exec-body h2 { font-size: medium; font-weight: 800; color: #1a237e; border-bottom: 1.5px solid #1a237e; margin: 6px 0 3px 0; padding-bottom: 2px; }
      .exec-body h3 { font-size: small; font-weight: 700; color: #111; margin: 0 0 1px 0; }
      .span { font-size: small; color: #555; font-style: italic; margin: 0 0 2px 0; }
      p { font-size: small; color: #333; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #5c6bc0; font-style: italic; border-top: 0.5px dashed #c5cae9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 8. Creative Dark
	{
		id: 'resume-creative-dark',
		title: 'Resume',
		styleVariant: 'Creative',
		description: 'High-contrast dark header with neon accent for game developers, canvas specialists, and creative technologists. Portfolio-first structure that leads with shipped work rather than traditional job chronology.',
		htmlContent: `
      <header class="dark-hdr">
        <h1>ZAKARY VANCE</h1>
        <p class="badge">GAME DEVELOPER & CANVAS SPECIALIST</p>
        <p class="contact">zak@vance.dev · portfolio.vance.dev · GitHub @zvance</p>
      </header>
      <main class="dark-body">
        <section>
          <h2>PORTFOLIO HIGHLIGHTS</h2>
          <article>
            <h3>HTML5 Canvas Render Engine</h3>
            <p>Built a 60 FPS 2D sprite renderer with custom particle systems and deterministic replay. Used in three shipped browser games with combined 1.2 M plays.</p>
          </article>
          <article>
            <h3>BIONICLE Web Experience</h3>
            <p>Interactive 3D mask viewer built with Three.js and Lumino widgets. Featured on the official product site and covered by major gaming press.</p>
          </article>
          <article>
            <h3>Procedural Level Toolkit</h3>
            <p>Open-source library for generating playable 2D levels from simple constraint sets. 4.8 k GitHub stars and active community contributions.</p>
          </article>
        </section>
        <section>
          <h2>SKILLS</h2>
          <p>TypeScript · WebGL · Three.js · Canvas API · Rust · Game Design · Lumino</p>
        </section>
      </main>
      <p class="usage">Lead with portfolio pieces, not job titles. The neon green is the only accent—keep it. Contact line sits inside the dark header so it remains visible even when the page is scrolled.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .dark-hdr { background: var(--ace-foreground, #212121); color: var(--ace-bg, #fff); padding: 10px 8px; margin: -6px -6px 8px -6px; border-radius: 2px 2px 0 0; }
      .dark-hdr h1 { font-size: large; color: #00e676; font-weight: 900; margin: 0 0 3px 0; }
      .badge { font-size: small; background: #00e676; color: #000; font-weight: 800; display: inline-block; padding: 2px 6px; border-radius: 2px; margin: 0 0 4px 0; }
      .contact { font-size: small; color: var(--ace-bg, #bdbdbd); margin: 0; }
      .dark-body h2 { font-size: medium; color: var(--ace-foreground, #212121); border-bottom: 2px solid #00e676; margin: 6px 0 4px 0; padding-bottom: 2px; font-weight: 800; }
      .dark-body h3 { font-size: small; color: #111; font-weight: 800; margin: 0 0 2px 0; }
      p { font-size: small; color: #333; margin: 0 0 5px 0; line-height: 1.35; }
      .usage { font-size: small; color: #616161; font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 9. Minimal Grid
	{
		id: 'resume-minimal-grid',
		title: 'Resume',
		styleVariant: 'Grid',
		description: 'Equal two-column boxed layout that treats education and experience as peer information blocks. Clean, scannable, and especially effective for data scientists, researchers, and early-career candidates with strong academic credentials.',
		htmlContent: `
      <header class="grid-hdr">
        <h1>MIA THORNE</h1>
        <p>Data Scientist & Machine Learning Specialist · mia@thorne.ai · San Francisco</p>
      </header>
      <div class="equal-cols">
        <div class="col-box">
          <h2>Education</h2>
          <p><strong>Ph.D. Statistics</strong><br>MIT, 2021<br>Thesis: Scalable Bayesian inference for streaming data</p>
          <p><strong>B.S. Mathematics</strong><br>UC Berkeley, 2017<br>Highest honors</p>
        </div>
        <div class="col-box">
          <h2>Experience</h2>
          <p><strong>AI Researcher</strong><br>Open AI Labs · 2021 – Present</p>
          <p>Trained large language models and reasoning filters. Led the evaluation suite now used across three product teams.</p>
          <p><strong>Research Intern</strong><br>DeepMind · Summer 2020</p>
          <p>Contributed to the internal benchmarking platform for reinforcement-learning agents.</p>
        </div>
      </div>
      <section class="skills-row">
        <h2>Core Skills</h2>
        <p>Python · PyTorch · JAX · Probabilistic Programming · Experimental Design · Technical Writing</p>
      </section>
      <p class="usage">Columns are equal width by design—do not let one dominate. Keep each box self-contained so a reader can start on either side. Skills sit below as a single horizontal summary.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .grid-hdr { border-bottom: 1.5px solid #424242; padding-bottom: 5px; margin-bottom: 8px; }
      .grid-hdr h1 { font-size: large; font-weight: 800; color: var(--ace-foreground, #212121); margin: 0 0 2px 0; }
      .grid-hdr p { font-size: small; color: #616161; margin: 0; }
      .equal-cols { display: flex; gap: 8px; margin-bottom: 6px; }
      .col-box { flex: 1; background: #f5f5f5; padding: 6px; border-radius: 3px; border: 0.5px solid #e0e0e0; }
      .col-box h2 { font-size: small; color: #1565c0; margin: 0 0 4px 0; border-bottom: 0.5px solid #1565c0; padding-bottom: 2px; font-weight: 800; }
      .col-box p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .skills-row h2 { font-size: small; color: #1565c0; margin: 0 0 2px 0; font-weight: 800; }
      .skills-row p { font-size: small; color: #333; margin: 0; }
      .usage { font-size: small; color: #757575; font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 10. Elegant Border
	{
		id: 'resume-elegant-border',
		title: 'Resume',
		styleVariant: 'Elegant',
		description: 'Quietly framed resume with a continuous border and centered serif letterhead. Designed for art directors, editorial designers, and cultural-sector professionals who prefer understated elegance over bold hierarchy.',
		htmlContent: `
      <div class="frame-border">
        <header>
          <h1>ISABELLA ROSSI</h1>
          <p class="subtitle">Art Director & Editorial Designer</p>
          <p class="contact">isabella@rossi.studio · Milan · New York</p>
        </header>
        <section>
          <h2>Exhibitions & Features</h2>
          <article>
            <h3>Milan Design Week — Installation Lead</h3>
            <p class="year">2025</p>
            <p>Curated interactive typography displays and physical document layouts for the official Italian pavilion. Covered by Domus and Wallpaper*.</p>
          </article>
          <article>
            <h3>MoMA Design Store — Limited Edition Series</h3>
            <p class="year">2023</p>
            <p>Art-directed a twelve-piece stationery collection exploring the intersection of print and digital gesture.</p>
          </article>
        </section>
        <section>
          <h2>Selected Clients</h2>
          <p>Penguin Random House · The New York Times · Aesop · Vitra</p>
        </section>
        <section>
          <h2>Education</h2>
          <p><strong>MA Graphic Design</strong> — Royal College of Art, 2018</p>
        </section>
      </div>
      <p class="usage">The continuous border frames the entire résumé—keep padding consistent. Serif for name and section titles, quiet gray for secondary text. Lead with exhibitions and clients rather than a traditional chronological job list when the work is primarily project-based.</p>
    `,
		cssContent: `
      * { box-sizing: border-box; padding: 4px; }
      .frame-border { border: 1.5px solid #b0bec5; padding: 10px; min-height: 100%; }
      header { text-align: center; border-bottom: 0.5px solid #b0bec5; padding-bottom: 6px; margin-bottom: 6px; }
      header h1 { font-family: Georgia, serif; font-size: large; color: var(--ace-foreground, #37474f); font-weight: 400; letter-spacing: 0.8px; margin: 0 0 2px 0; }
      .subtitle { font-size: small; color: #78909c; font-style: italic; margin: 0 0 2px 0; }
      .contact { font-size: small; color: var(--ace-bg, #90a4ae); margin: 0; }
      section h2 { font-family: Georgia, serif; font-size: small; color: var(--ace-foreground, #37474f); margin: 6px 0 3px 0; text-transform: uppercase; letter-spacing: 0.4px; }
      article h3 { font-size: small; font-weight: 700; color: var(--ace-foreground, #263238); margin: 0 0 1px 0; }
      .year { font-size: small; color: var(--ace-bg, #90a4ae); margin: 0 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #37474f); margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #78909c; font-style: italic; border-top: 0.5px dashed #cfd8dc; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	}
];

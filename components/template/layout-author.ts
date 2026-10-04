import type { ITemplateItem } from "./template";

export const AUTHOR_LAYOUT_TEMPLATES: ITemplateItem[] = [
	{
		id: 'author-hero-card-avatar',
		title: 'Author hero profile with avatar',
		styleVariant: 'Hero Profile',
		htmlContent: `
      <div class="author-hero">
        <div class="avatar-ph">[PHOTO]</div>
        <div class="bio">
          <h3>Brian Cullinan</h3>
          <span class="role">Lead Systems Architect</span>
          <p>Specializes in high-throughput browser rendering and local WebSockets.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; }
      .author-hero { display: flex; gap: 4px; background: #f1f5f9; padding: 4px; border: 0.5px solid #cbd5e1; border-radius: 3px; }
      .avatar-ph { width: 18px; height: 18px; background: #94a3b8; color: #fff; font-size: 3px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
      .bio h3 { font-size: 4.5px; margin: 0; color: #0f172a; }
      .bio .role { font-size: 3px; color: #2563eb; font-weight: bold; display: block; }
      .bio p { font-size: 3.2px; color: #475569; margin-top: 2px; line-height: 1.2; }
    `
	},
	{
		id: 'author-minimal-editorial-footer',
		title: 'Minimalist editorial author bio',
		styleVariant: 'Classic Footer',
		htmlContent: `
      <div class="author-foot">
        <p><strong>ABOUT THE AUTHOR:</strong> Brian Cullinan is a developer focusing on full-stack web network configurations and local file streaming tools.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .author-foot { border-top: 1px solid #000; padding-top: 3px; font-size: 3.5px; color: #111; font-style: italic; }
      .author-foot strong { font-style: normal; font-family: sans-serif; font-size: 3px; letter-spacing: 0.5px; }
    `
	},
	{
		id: 'author-sidebar-mini-badge',
		title: 'Sidebar mini author badge',
		styleVariant: 'Sidebar Badge',
		htmlContent: `
      <aside class="author-badge">
        <div class="icon">&#128100;</div>
        <h4>WRITTEN BY</h4>
        <p>B. Cullinan</p>
      </aside>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; }
      .author-badge { background: #0f172a; color: #fff; padding: 4px; text-align: center; border-radius: 2px; }
      .icon { font-size: 6px; }
      .author-badge h4 { font-size: 2.8px; color: #94a3b8; letter-spacing: 0.5px; margin: 1px 0; }
      .author-badge p { font-size: 3.8px; font-weight: bold; color: #38bdf8; margin: 0; }
    `
	},
	{
		id: 'author-academic-credentials',
		title: 'Academic contributor block',
		styleVariant: 'Academic Credentials',
		htmlContent: `
      <div class="academic-author">
        <h3>Dr. Alex Mercer, PhD</h3>
        <p class="affil">Department of Computer Science &bull; Quantum Labs</p>
        <p class="summary">Author of over 40 papers on distributed state reconciliation.</p>
      </div>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', serif; box-sizing: border-box; padding: 4px; background: #fff; border-left: 2px solid #1e3a8a; }
      h3 { font-size: 4.5px; color: #1e3a8a; margin: 0; }
      .affil { font-size: 3px; font-weight: bold; color: #64748b; margin: 1px 0; }
      .summary { font-size: 3.2px; color: #334155; margin: 0; }
    `
	},
	{
		id: 'author-dual-coauthors',
		title: 'Dual co-authors side-by-side',
		styleVariant: 'Co-Authors Grid',
		htmlContent: `
      <div class="co-authors">
        <div class="col"><strong>J. Doe</strong><span>Frontend Lead</span></div>
        <div class="col"><strong>S. Smith</strong><span>Backend Engineer</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .co-authors { display: flex; gap: 4px; }
      .col { flex: 1; background: #f8fafc; border: 0.5px solid #e2e8f0; padding: 3px; }
      .col strong { font-size: 3.8px; display: block; color: #0f172a; }
      .col span { font-size: 3px; color: #64748b; }
    `
	},
	{
		id: 'author-social-links-card',
		title: 'Author card with social handles',
		styleVariant: 'Social Card',
		htmlContent: `
      <div class="social-author">
        <h4>Brian Cullinan</h4>
        <p>Web Developer & LLM Engineer</p>
        <div class="handles"><span>github/briancullinan</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #18181b; color: #fff; }
      h4 { font-size: 4px; color: #a1a1aa; margin: 0; }
      p { font-size: 3.2px; color: #71717a; margin: 1px 0; }
      .handles { font-size: 3px; color: #22c55e; font-family: monospace; }
    `
	},
	{
		id: 'author-book-jacket-flap',
		title: 'Book jacket flap bio',
		styleVariant: 'Jacket Flap',
		htmlContent: `
      <div class="jacket-bio">
        <p class="drop">B</p><p class="text">rian Cullinan resides in Arizona where he builds custom server orchestration systems.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; background: #fdf6e3; }
      .jacket-bio { display: flex; }
      .drop { font-size: 10px; font-weight: bold; color: #b58900; margin-right: 2px; line-height: 8px; }
      .text { font-size: 3.4px; color: #657b83; margin: 0; }
    `
	},
	{
		id: 'author-quote-banner',
		title: 'Author statement banner',
		styleVariant: 'Statement Banner',
		htmlContent: `
      <div class="author-quote">
        <p>&ldquo;Building software is about transforming complexity into clarity.&rdquo;</p>
        <span>&mdash; Brian Cullinan</span>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; background: #0284c7; color: #fff; text-align: center; }
      p { font-size: 3.8px; font-style: italic; margin: 0 0 2px 0; }
      span { font-size: 3px; font-weight: bold; text-transform: uppercase; }
    `
	},
	{
		id: 'author-compact-byline-avatar',
		title: 'Compact article byline',
		styleVariant: 'Compact Byline',
		htmlContent: `
      <div class="byline">
        <div class="dot"></div><span>By <strong>Brian Cullinan</strong> &bull; Oct 2026</span>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 2px 4px; }
      .byline { display: flex; align-items: center; gap: 3px; font-size: 3.2px; color: #64748b; }
      .dot { width: 4px; height: 4px; background: #16a34a; border-radius: 50%; }
    `
	},
	{
		id: 'author-team-grid-contributors',
		title: 'Multi-contributor grid',
		styleVariant: 'Team Grid',
		htmlContent: `
      <div class="team-grid">
        <div class="member">A. Smith</div><div class="member">B. Cullinan</div><div class="member">C. Jones</div>
      </div>
    `,
		cssContent: `
      * { font-family: sans-serif; box-sizing: border-box; padding: 4px; }
      .team-grid { display: flex; gap: 2px; }
      .member { flex: 1; background: #e2e8f0; font-size: 3px; text-align: center; padding: 2px; font-weight: bold; color: #334155; }
    `
	}
];

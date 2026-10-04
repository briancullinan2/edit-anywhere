import type { ITemplateItem } from './template';

export const LETTER_TEMPLATES: ITemplateItem[] = [
	// 1. Spearmint (Green Accent Bar & Modern Clean Typography)
	{
		id: 'letter-spearmint',
		title: 'Letter',
		styleVariant: 'Spearmint',
		htmlContent: `
      <header class="mint-header">
        <div class="accent-bar"></div>
        <h1>YOUR NAME</h1>
        <p class="sender-info">123 Innovation Way &bull; San Francisco, CA &bull; (555) 019-2831</p>
      </header>
      <div class="letter-meta">
        <p class="date">October 24, 2026</p>
        <p class="recipient"><strong>Hiring Committee</strong><br>Design Technologies Inc.<br>789 Tech Boulevard, Suite 400</p>
      </div>
      <main class="letter-body">
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my strong interest in the Lead Architect position. With extensive experience in modular TypeScript frameworks and virtualized UI engines, I have successfully delivered modern web presences.</p>
        <p>Throughout my career, I have focused on bridging high-performance canvas editors with rich document layouts.</p>
        <p class="closing">Sincerely,</p>
        <p class="signature"><strong>Your Name</strong></p>
      </main>
    `,
		cssContent: `
      .accent-bar { width: 100%; height: 2.5px; background: #2e7d32; margin-bottom: 4px; }
      .mint-header h1 { font-size: 10px; color: #1b5e20; font-weight: bold; letter-spacing: 0.5px; }
      .sender-info { font-size: 3.8px; color: #666; margin-top: 1px; }
      .letter-meta { margin: 6px 0; font-size: 4px; border-top: 0.5px solid #c8e6c9; padding-top: 4px; }
      .date { color: #2e7d32; font-weight: bold; margin-bottom: 3px; }
      .recipient { color: #333; line-height: 1.3; }
      .letter-body p { font-size: 4px; color: #222; margin-bottom: 4px; line-height: 1.4; }
      .closing { margin-top: 6px; }
      .signature { font-size: 4.5px; color: #1b5e20; margin-top: 2px; }
    `
	},

	// 2. Swiss (Bold Minimalist Asymmetric Layout)
	{
		id: 'letter-swiss',
		title: 'Letter',
		styleVariant: 'Swiss',
		htmlContent: `
      <header class="swiss-hdr">
        <h1>ALEXANDER NOVA</h1>
        <div class="thick-rule"></div>
      </header>
      <div class="swiss-layout">
        <aside class="swiss-meta">
          <p class="label">DATE</p>
          <p>2026-10-24</p>
          <p class="label">TO</p>
          <p>Acme Corp<br>Zurich, CH</p>
        </aside>
        <main class="swiss-content">
          <p>Dear Partners,</p>
          <p>Re: System Architecture Proposal</p>
          <p>Please review the enclosed specifications regarding our proposed component runtime. We have optimized memory allocation to support instantaneous multi-page virtualization.</p>
          <p>Regards,</p>
          <p class="sign">A. Nova</p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .swiss-hdr h1 { font-size: 11px; font-weight: 900; letter-spacing: -0.5px; color: #000; }
      .thick-rule { width: 100%; height: 2px; background: #000; margin: 3px 0 6px 0; }
      .swiss-layout { display: flex; gap: 8px; }
      .swiss-meta { width: 30%; border-right: 0.5px solid #000; padding-right: 4px; font-size: 3.8px; }
      .label { font-weight: 900; color: #e53935; margin-top: 3px; }
      .swiss-content { width: 70%; font-size: 4px; line-height: 1.35; color: #111; }
      .swiss-content p { margin-bottom: 4px; }
      .sign { font-weight: bold; margin-top: 4px; }
    `
	},

	// 3. Business Letter Geometric (Corporate Top Band & Column Info)
	{
		id: 'letter-geometric',
		title: 'Business letter',
		styleVariant: 'Geometric',
		htmlContent: `
      <div class="geo-banner">
        <div class="geo-shape"></div>
        <h1>NEXUS SOLUTIONS</h1>
      </div>
      <div class="geo-sub">
        <p>100 Enterprise Way, Suite 2B &bull; Austin, TX</p>
      </div>
      <main class="geo-body">
        <div class="geo-meta">
          <p><strong>DATE:</strong> October 24, 2026</p>
          <p><strong>SUBJECT:</strong> Strategic Partnership Agreement</p>
        </div>
        <p>Dear Mr. Davis,</p>
        <p>We are pleased to submit our formal business proposal for the upcoming fiscal year. Our engineering team has finalized the integration roadmap for your web application suite.</p>
        <p>We welcome the opportunity to discuss these terms in detail during our scheduled conference call next week.</p>
        <p>Sincerely,</p>
        <p class="geo-sig"><strong>Sarah Jenkins</strong><br>VP of Enterprise Operations</p>
      </main>
    `,
		cssContent: `
      .geo-banner { position: relative; background: #1a237e; color: #fff; padding: 8px; margin: -10px -10px 3px -10px; overflow: hidden; }
      .geo-shape { position: absolute; right: -8px; top: -8px; width: 30px; height: 30px; background: #3949ab; transform: rotate(45deg); }
      .geo-banner h1 { font-size: 9px; font-weight: bold; letter-spacing: 0.5px; }
      .geo-sub p { font-size: 3.5px; color: #5c6bc0; font-weight: bold; margin-bottom: 6px; }
      .geo-meta { background: #e8eaf6; padding: 4px; border-left: 2px solid #1a237e; margin-bottom: 6px; font-size: 3.8px; }
      .geo-body p { font-size: 4px; color: #222; margin-bottom: 4px; line-height: 1.35; }
      .geo-sig { margin-top: 6px; border-top: 0.5px solid #e0e0e0; padding-top: 3px; }
    `
	},

	// 4. Business Letter Modern Writer (Monospace Console/Formal Theme)
	{
		id: 'letter-modern-writer',
		title: 'Business letter',
		styleVariant: 'Modern Writer',
		htmlContent: `
      <header class="writer-hdr">
        <h1>[FORMAL_CORRESPONDENCE]</h1>
        <p>REF_NO: 2026-1024-X</p>
      </header>
      <main class="writer-body">
        <div class="addr-block">
          <p>FROM: DevOps Core Team</p>
          <p>TO: Infrastructure Committee</p>
          <p>DATE: 2026.10.24</p>
        </div>
        <p>REGARDING: Authorization of Serverless Worker Clusters</p>
        <p>This document serves as formal confirmation that all client-side PDF rendering workers have passed initial security audits and performance benchmarks.</p>
        <p>Memory footprints remain strictly contained under target thresholds during full-document exports.</p>
        <p>CONFIRMED BY,</p>
        <p class="stamp">> SYSTEM_ADMINISTRATOR</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, monospace; }
      .writer-hdr h1 { font-size: 8.5px; font-weight: bold; color: #212121; }
      .writer-hdr p { font-size: 3.5px; color: #757575; margin-bottom: 5px; }
      .addr-block { background: #f5f5f5; padding: 4px; border: 0.5px solid #bdbdbd; margin-bottom: 6px; font-size: 3.8px; }
      .writer-body p { font-size: 3.8px; color: #333; margin-bottom: 4px; line-height: 1.3; }
      .stamp { font-weight: bold; color: #2e7d32; margin-top: 6px; }
    `
	},

	// 5. Informal Letter Plum (Warm Pastel Left Bar & Handwritten Feel)
	{
		id: 'letter-plum',
		title: 'Informal letter',
		styleVariant: 'Plum',
		htmlContent: `
      <div class="plum-card">
        <header class="plum-hdr">
          <h1>Dearest Friends,</h1>
          <p class="plum-date">October 24, 2026</p>
        </header>
        <main class="plum-body">
          <p>I hope this letter finds you well! I am writing to share some exciting news regarding our upcoming autumn gathering in the mountains.</p>
          <p>We have reserved the lodge for the final weekend of the month, and we would love for you to join us for the celebrations.</p>
          <p>Please let us know if you can make it!</p>
          <p class="plum-closing">Warmest regards,</p>
          <p class="plum-sig">Clara & Family</p>
        </main>
      </div>
    `,
		cssContent: `
      .plum-card { background: #fdf7f9; border-left: 3px solid #8e24aa; padding: 8px; height: 100%; box-sizing: border-box; }
      .plum-hdr h1 { font-family: Georgia, serif; font-size: 9px; color: #6a1b9a; font-style: italic; }
      .plum-date { font-size: 3.8px; color: #ab47bc; margin-bottom: 6px; }
      .plum-body p { font-size: 4px; color: #4a148c; margin-bottom: 4px; line-height: 1.4; }
      .plum-closing { margin-top: 8px; }
      .plum-sig { font-family: Georgia, serif; font-size: 5px; font-style: italic; color: #8e24aa; font-weight: bold; }
    `
	},

	// 6. Coral Letter (Warm Coral Border & Left Accent Strip)
	{
		id: 'letter-coral',
		title: 'Letter',
		styleVariant: 'Coral',
		htmlContent: `
      <div class="coral-wrapper">
        <aside class="coral-bar">
          <div class="c-dot"></div>
          <p class="vertical-txt">OFFICIAL</p>
        </aside>
        <main class="coral-content">
          <header>
            <h1>JORDAN LEE</h1>
            <p class="subtitle">Creative Director & Author</p>
          </header>
          <p class="date-line">24 October 2026</p>
          <p>Dear Editorial Team,</p>
          <p>Enclosed please find the completed draft of the upcoming lore chapter. All illustrations and canvas component metadata have been formatted according to the style guide.</p>
          <p>Best regards,</p>
          <p class="c-sig">Jordan Lee</p>
        </main>
      </div>
    `,
		cssContent: `
      .coral-wrapper { display: flex; height: 100%; margin: -10px; }
      .coral-bar { width: 15%; background: #ff7043; padding: 6px 2px; display: flex; flex-direction: column; align-items: center; }
      .c-dot { width: 6px; height: 6px; background: #fff; border-radius: 50%; margin-bottom: 8px; }
      .vertical-txt { color: #fff; font-size: 3px; font-weight: bold; letter-spacing: 1px; writing-mode: vertical-rl; }
      .coral-content { width: 85%; padding: 8px; }
      .coral-content h1 { font-size: 9.5px; color: #d84315; font-weight: bold; }
      .subtitle { font-size: 3.8px; color: #ff7043; margin-bottom: 4px; }
      .date-line { font-size: 3.5px; color: #8d6e63; margin-bottom: 4px; }
      .coral-content p { font-size: 4px; color: #333; margin-bottom: 4px; }
      .c-sig { font-weight: bold; color: #d84315; margin-top: 6px; }
    `
	},

	// 7. Luxe Executive Letter (Gold Accent & Elegant Serif Header)
	{
		id: 'letter-luxe',
		title: 'Letter',
		styleVariant: 'Luxe',
		htmlContent: `
      <header class="luxe-hdr">
        <p class="brand">EXECUTIVE OFFICE</p>
        <h1>VANDERBILT & CO.</h1>
        <div class="gold-line"></div>
      </header>
      <main class="luxe-body">
        <p class="meta-date">OCTOBER 24, 2026</p>
        <p>Dear Shareholders,</p>
        <p>We are delighted to report exceptional results for the fourth quarter. Our investments in modern publishing engines have unlocked significant performance gains across all digital channels.</p>
        <p>Sincerely,</p>
        <p class="exec-name">E. Vanderbilt III</p>
        <p class="exec-title">Managing Director</p>
      </main>
    `,
		cssContent: `
      .luxe-hdr { text-align: center; margin-bottom: 6px; }
      .brand { font-size: 3.5px; letter-spacing: 1px; color: #c5a059; font-weight: bold; }
      .luxe-hdr h1 { font-family: Georgia, serif; font-size: 9px; color: #111; letter-spacing: 0.5px; margin: 1px 0; }
      .gold-line { width: 30px; height: 1px; background: #c5a059; margin: 0 auto; }
      .meta-date { font-size: 3.8px; color: #c5a059; font-weight: bold; margin-bottom: 4px; }
      .luxe-body p { font-family: Georgia, serif; font-size: 4px; color: #222; margin-bottom: 4px; line-height: 1.4; }
      .exec-name { font-weight: bold; margin-top: 6px; color: #111; }
      .exec-title { font-size: 3.5px; color: #666; }
    `
	},

	// 8. Modern Minimal Letter (Clean Centered Header & Subtle Divider)
	{
		id: 'letter-modern-minimal',
		title: 'Letter',
		styleVariant: 'Modern Minimal',
		htmlContent: `
      <header class="min-hdr">
        <h1>SOPHIA CHEN</h1>
        <p>sophia.chen@studio.dev &bull; +1 (555) 018-9920</p>
        <div class="thin-rule"></div>
      </header>
      <main class="min-body">
        <p class="date">24 October 2026</p>
        <p>Dear Client,</p>
        <p>Thank you for giving us the opportunity to present our digital publishing solutions. Enclosed is the complete project scope and timeline.</p>
        <p>Best regards,</p>
        <p class="sig">Sophia Chen</p>
      </main>
    `,
		cssContent: `
      .min-hdr { text-align: center; margin-bottom: 6px; }
      .min-hdr h1 { font-family: system-ui, sans-serif; font-size: 9.5px; font-weight: 300; letter-spacing: 1px; color: #212121; }
      .min-hdr p { font-size: 3.8px; color: #757575; margin-top: 1px; }
      .thin-rule { width: 100%; height: 0.5px; background: #e0e0e0; margin-top: 4px; }
      .date { font-size: 3.8px; color: #9e9e9e; margin-bottom: 4px; }
      .min-body p { font-size: 4px; color: #333; margin-bottom: 4px; line-height: 1.35; }
      .sig { font-weight: 500; color: #111; margin-top: 6px; }
    `
	},

	// 9. Tropic Letter (Teal Banner & Fresh Accent Colors)
	{
		id: 'letter-tropic',
		title: 'Letter',
		styleVariant: 'Tropic',
		htmlContent: `
      <div class="tropic-hdr">
        <h1>PACIFIC CREATIVE LABS</h1>
        <p>Honolulu &bull; San Francisco &bull; Tokyo</p>
      </div>
      <main class="tropic-body">
        <p class="t-date">October 24, 2026</p>
        <p>Dear Community Members,</p>
        <p>We are thrilled to announce the launch of our new open-source creative grant program. This initiative aims to support developers building accessible web interfaces.</p>
        <p>Warmly,</p>
        <p class="t-sig">The Pacific Labs Team</p>
      </main>
    `,
		cssContent: `
      .tropic-hdr { background: #00695c; color: #fff; padding: 6px 8px; margin: -10px -10px 6px -10px; }
      .tropic-hdr h1 { font-size: 8.5px; font-weight: bold; letter-spacing: 0.5px; color: #80cbc4; }
      .tropic-hdr p { font-size: 3.5px; color: #e0f2f1; }
      .t-date { font-size: 3.8px; color: #00695c; font-weight: bold; margin-bottom: 4px; }
      .tropic-body p { font-size: 4px; color: #222; margin-bottom: 4px; line-height: 1.35; }
      .t-sig { font-weight: bold; color: #00695c; margin-top: 6px; }
    `
	},

	// 10. Classic Serif Letter (Traditional Formal Style)
	{
		id: 'letter-classic-serif',
		title: 'Letter',
		styleVariant: 'Classic Serif',
		htmlContent: `
      <header class="classic-hdr">
        <h1>LAW OFFICES OF HARPER & ASSOCIATES</h1>
        <p>100 Court Street, Suite 500 &bull; Boston, MA 02108</p>
        <div class="double-rule"></div>
      </header>
      <main class="classic-body">
        <p class="date">October 24, 2026</p>
        <p>To Whom It May Concern,</p>
        <p>This letter serves to certify that all licensing agreements and intellectual property documents for the requested web framework have been reviewed and validated.</p>
        <p>Respectfully yours,</p>
        <p class="c-name">Arthur Harper, Esq.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; }
      .classic-hdr { text-align: center; margin-bottom: 6px; }
      .classic-hdr h1 { font-size: 8.5px; font-weight: normal; letter-spacing: 0.5px; color: #111; }
      .classic-hdr p { font-size: 3.5px; color: #555; }
      .double-rule { border-bottom: 1.5px double #333; margin-top: 4px; }
      .date { font-size: 3.8px; color: #666; margin-bottom: 4px; font-style: italic; }
      .classic-body p { font-size: 4px; color: #222; margin-bottom: 4px; line-height: 1.4; }
      .c-name { font-weight: bold; margin-top: 6px; }
    `
	}
];

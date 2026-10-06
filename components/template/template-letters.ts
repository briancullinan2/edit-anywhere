import type { ITemplateItem } from './template';

export const LETTER_TEMPLATES: ITemplateItem[] = [
	// 1. Spearmint
	{
		id: 'letter-spearmint',
		title: 'Letter',
		styleVariant: 'Spearmint',
		description: 'Clean professional letter with a strong green accent bar. Ideal for job applications, partnership inquiries, and formal outreach that still feels contemporary. The accent bar and green name create immediate visual identity without sacrificing readability.',
		htmlContent: `
      <header class="mint-header">
        <div class="accent-bar"></div>
        <h1>ALEX RIVERA</h1>
        <p class="sender-info">123 Innovation Way · San Francisco, CA 94107 · (555) 019-2831 · alex@rivera.dev</p>
      </header>
      <div class="letter-meta">
        <p class="date">24 October 2026</p>
        <p class="recipient">
          <strong>Hiring Committee</strong><br>
          Design Technologies Inc.<br>
          789 Tech Boulevard, Suite 400<br>
          Austin, TX 78701
        </p>
      </div>
      <main class="letter-body">
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my strong interest in the Lead Systems Architect position posted on your careers page. With eight years of experience designing modular TypeScript frameworks, edge-proxy orchestration layers, and virtualized UI engines, I have repeatedly delivered production systems that reduce operational latency while improving developer experience.</p>
        <p>In my current role I led the migration of a multi-region tunnel fleet to a zero-inbound-port architecture, cutting connection overhead by 40 % and eliminating an entire class of firewall-related incidents. I also authored the internal specification for deterministic tab-state recovery that is now used across three product lines.</p>
        <p>I would welcome the opportunity to discuss how these patterns could accelerate your platform roadmap. I am available for a conversation at your convenience and can provide detailed architecture decision records upon request.</p>
        <p class="closing">Sincerely,</p>
        <p class="signature"><strong>Alex Rivera</strong><br>Systems Architect · Available immediately</p>
      </main>
      <p class="usage">Keep the accent bar full-width and the name in the brand green. Body paragraphs should stay under 80 words each. Always include a concrete result in the second paragraph—hiring committees scan for evidence, not claims.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .accent-bar { width: 100%; height: 3px; background: #2e7d32; margin-bottom: 5px; border-radius: 1px; }
      .mint-header h1 { font-size: medium; color: #1b5e20; font-weight: 800; letter-spacing: 0.4px; margin: 0 0 2px 0; }
      .sender-info { font-size: small; color: #666; margin: 0; }
      .letter-meta { margin: 8px 0; border-top: 0.5px solid #c8e6c9; padding-top: 5px; }
      .date { font-size: small; color: #2e7d32; font-weight: 700; margin: 0 0 4px 0; }
      .recipient { font-size: small; color: var(--ace-foreground, #333); line-height: 1.35; margin: 0; }
      .letter-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.4; }
      .closing { margin-top: 8px; }
      .signature { font-size: small; color: #1b5e20; margin: 2px 0 0 0; }
      .usage { font-size: small; color: var(--ace-comment, #78909c); font-style: italic; border-top: 0.5px dashed #c8e6c9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 2. Swiss
	{
		id: 'letter-swiss',
		title: 'Letter',
		styleVariant: 'Swiss',
		description: 'Bold minimalist asymmetric layout inspired by Swiss International Style. Thick black rule, red labels, and a two-column meta/content split. Best for architecture proposals, formal partner correspondence, and any letter that must project precision and authority.',
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
          <p>Acme Corp<br>Architecture Board<br>Zurich, CH</p>
          <p class="label">REF</p>
          <p>SYS-ARCH-2026-Q4</p>
        </aside>
        <main class="swiss-content">
          <p>Dear Partners,</p>
          <p><strong>Re: System Architecture Proposal — Component Runtime v3</strong></p>
          <p>Please review the enclosed specifications for the proposed component runtime. We have optimized memory allocation to support instantaneous multi-page virtualization while keeping the resident set under the agreed 180 MB ceiling on reference hardware.</p>
          <p>The design eliminates the previous single-threaded bottleneck by introducing a lightweight worker pool that remains fully deterministic under concurrent layout operations. Benchmarks and the full decision record are attached.</p>
          <p>We look forward to your formal response by 7 November.</p>
          <p>Regards,</p>
          <p class="sign">A. Nova<br>Principal Architect</p>
        </main>
      </div>
      <p class="usage">The left column is reserved for structured metadata only—never body text. Keep the thick rule continuous under the name. Red labels are the sole accent; do not introduce additional color.</p>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .swiss-hdr h1 { font-size: large; font-weight: 900; letter-spacing: -0.4px; color: var(--ace-foreground, #000); margin: 0; }
      .thick-rule { width: 100%; height: 2.5px; background: var(--ace-foreground, #000); margin: 4px 0 8px 0; }
      .swiss-layout { display: flex; gap: 10px; margin-bottom: 6px; }
      .swiss-meta { width: 28%; border-right: 0.5px solid #000; padding-right: 6px; font-size: small; }
      .label { font-weight: 900; color: #e53935; margin: 5px 0 1px 0; font-size: small; }
      .swiss-meta p { margin: 0 0 2px 0; line-height: 1.3; color: var(--ace-foreground, #111); }
      .swiss-content { width: 72%; font-size: small; line-height: 1.4; color: var(--ace-foreground, #111); }
      .swiss-content p { margin: 0 0 5px 0; }
      .sign { font-weight: 700; margin-top: 6px; }
      .usage { font-size: small; color: var(--ace-comment, #757575); font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin: 0; line-height: 1.3; }
    `
	},

	// 3. Geometric
	{
		id: 'letter-geometric',
		title: 'Business letter',
		styleVariant: 'Geometric',
		description: 'Corporate letter with a deep indigo banner and geometric accent shape. Structured for formal business proposals, partnership agreements, and executive correspondence. The left-bordered meta box makes date and subject instantly scannable.',
		htmlContent: `
      <div class="geo-banner">
        <div class="geo-shape"></div>
        <h1>NEXUS SOLUTIONS</h1>
        <p class="banner-sub">Enterprise Integration · Edge Infrastructure</p>
      </div>
      <div class="geo-sub">
        <p>100 Enterprise Way, Suite 2B · Austin, TX 78701 · legal@nexussolutions.io</p>
      </div>
      <main class="geo-body">
        <div class="geo-meta">
          <p><strong>DATE:</strong> 24 October 2026</p>
          <p><strong>SUBJECT:</strong> Strategic Partnership Agreement — FY2027</p>
          <p><strong>REF:</strong> NS-PA-2026-1042</p>
        </div>
        <p>Dear Mr. Davis,</p>
        <p>We are pleased to submit our formal proposal for a multi-year strategic partnership covering edge-proxy orchestration, tunnel lifecycle management, and joint go-to-market activities in the North American enterprise segment.</p>
        <p>Our engineering team has finalized the integration roadmap, including shared SLA definitions, joint support escalation paths, and a co-branded status page. The complete term sheet and technical annex are enclosed.</p>
        <p>We welcome the opportunity to discuss these terms during our scheduled conference call on 3 November and remain flexible on the commercial structure.</p>
        <p>Sincerely,</p>
        <p class="geo-sig"><strong>Sarah Jenkins</strong><br>VP of Enterprise Operations<br>Nexus Solutions</p>
      </main>
      <p class="usage">The indigo banner is the primary brand signal—do not lighten it. Keep the meta box to three lines maximum. Signature block should include title and company for legal clarity.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .geo-banner { position: relative; background: #1a237e; color: var(--ace-bg, #fff); padding: 8px 6px; margin: -6px -6px 4px -6px; overflow: hidden; border-radius: 2px 2px 0 0; }
      .geo-shape { position: absolute; right: -10px; top: -10px; width: 32px; height: 32px; background: #3949ab; transform: rotate(45deg); }
      .geo-banner h1 { font-size: medium; font-weight: 800; letter-spacing: 0.4px; margin: 0 0 1px 0; position: relative; z-index: 1; }
      .banner-sub { font-size: small; color: var(--ace-bg, #9fa8da); margin: 0; position: relative; z-index: 1; }
      .geo-sub p { font-size: small; color: #5c6bc0; font-weight: 600; margin: 0 0 6px 0; }
      .geo-meta { background: #e8eaf6; padding: 5px; border-left: 3px solid #1a237e; margin-bottom: 6px; font-size: small; }
      .geo-meta p { margin: 0 0 2px 0; color: #1a237e; }
      .geo-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.4; }
      .geo-sig { margin-top: 8px; border-top: 0.5px solid #e0e0e0; padding-top: 4px; }
      .usage { font-size: small; color: var(--ace-comment, #78909c); font-style: italic; border-top: 0.5px dashed #c5cae9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 4. Modern Writer
	{
		id: 'letter-modern-writer',
		title: 'Business letter',
		styleVariant: 'Modern Writer',
		description: 'Monospace, console-inspired formal correspondence. Designed for internal technical authorizations, security clearances, and any document that should feel like an official system record rather than a traditional letter.',
		htmlContent: `
      <header class="writer-hdr">
        <h1>[FORMAL_CORRESPONDENCE]</h1>
        <p>REF_NO: 2026-1024-X · CLASSIFICATION: INTERNAL</p>
      </header>
      <main class="writer-body">
        <div class="addr-block">
          <p>FROM: DevOps Core Team · Platform Security</p>
          <p>TO: Infrastructure Committee · Architecture Review Board</p>
          <p>DATE: 2026.10.24 · 14:32 UTC</p>
          <p>CC: Legal · Compliance</p>
        </div>
        <p><strong>REGARDING:</strong> Authorization of Serverless Worker Clusters for Client-Side PDF Rendering</p>
        <p>This document serves as formal confirmation that all client-side PDF rendering workers have passed initial security audits (OWASP Top 10, dependency scanning, and memory-safety review) and performance benchmarks under the agreed load profile.</p>
        <p>Memory footprints remain strictly contained under the 180 MB target threshold during full-document exports. No elevated privileges are required at runtime. The attached decision record (ADR-2026-47) contains the full threat model and residual-risk assessment.</p>
        <p>Authorization is requested to promote the worker pool to production effective 1 November 2026.</p>
        <p>CONFIRMED BY,</p>
        <p class="stamp">> SYSTEM_ADMINISTRATOR<br>> PLATFORM_SECURITY_LEAD</p>
      </main>
      <p class="usage">Use only for internal technical or compliance correspondence. Keep the monospace voice consistent. The stamp line should list the authorizing roles, not personal names, unless required by policy.</p>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, ui-monospace, monospace; box-sizing: border-box; padding: 4px; }
      .writer-hdr h1 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #212121); margin: 0 0 2px 0; }
      .writer-hdr p { font-size: small; color: var(--ace-comment, #757575); margin: 0 0 6px 0; }
      .addr-block { background: #f5f5f5; padding: 5px; border: 0.5px solid #bdbdbd; margin-bottom: 6px; font-size: small; }
      .addr-block p { margin: 0 0 2px 0; color: var(--ace-foreground, #333); }
      .writer-body p { font-size: small; color: var(--ace-foreground, #333); margin: 0 0 5px 0; line-height: 1.35; }
      .stamp { font-weight: 700; color: #2e7d32; margin-top: 8px; }
      .usage { font-size: small; color: var(--ace-comment, #9e9e9e); font-style: italic; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 5. Plum
	{
		id: 'letter-plum',
		title: 'Informal letter',
		styleVariant: 'Plum',
		description: 'Warm, personal letter with a soft plum left accent and italic serif greeting. Perfect for invitations, thank-you notes, personal announcements, and any correspondence that should feel handwritten and intimate rather than corporate.',
		htmlContent: `
      <div class="plum-card">
        <header class="plum-hdr">
          <h1>Dearest Friends,</h1>
          <p class="plum-date">24 October 2026</p>
        </header>
        <main class="plum-body">
          <p>I hope this letter finds you well and that the autumn light is treating you kindly. I am writing to share some exciting news: we have reserved the mountain lodge for the final weekend of the month, and we would be overjoyed if you could join us.</p>
          <p>The gathering will be small—just close friends and a few of the original team members from the early days. There will be good food, better conversation, and no agendas. Simply a chance to reconnect and celebrate how far everything has come.</p>
          <p>Please let us know by the 10th whether you can make it so we can plan the rooms. Travel details and a packing list will follow once we have numbers.</p>
          <p class="plum-closing">With warmest regards and looking forward to seeing you,</p>
          <p class="plum-sig">Clara & the family</p>
        </main>
      </div>
      <p class="usage">Keep the left accent bar and the italic greeting. Body text should sound like speech, not formal prose. Signature can be first names only—formality is deliberately lowered.</p>
    `,
		cssContent: `
      * { box-sizing: border-box; padding: 4px; }
      .plum-card { background: #fdf7f9; border-left: 4px solid #8e24aa; padding: 10px; }
      .plum-hdr h1 { font-family: Georgia, serif; font-size: medium; color: #6a1b9a; font-style: italic; margin: 0 0 2px 0; }
      .plum-date { font-size: small; color: #ab47bc; margin: 0 0 8px 0; }
      .plum-body p { font-size: small; color: #4a148c; margin: 0 0 5px 0; line-height: 1.45; }
      .plum-closing { margin-top: 10px; }
      .plum-sig { font-family: Georgia, serif; font-size: medium; font-style: italic; color: #8e24aa; font-weight: 700; margin: 2px 0 0 0; }
      .usage { font-size: small; color: #9c27b0; font-style: italic; border-top: 0.5px dashed #e1bee7; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 6. Coral
	{
		id: 'letter-coral',
		title: 'Letter',
		styleVariant: 'Coral',
		description: 'Creative professional letter with a warm coral vertical accent strip and “OFFICIAL” vertical label. Suited for editorial submissions, creative briefs, and correspondence from design or content directors.',
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
          <p>Enclosed please find the completed draft of the upcoming lore chapter together with the full set of canvas component metadata. All illustrations have been prepared at print resolution and tagged according to the current style guide (v4.2).</p>
          <p>I have also included a short production note describing the interactive elements that rely on the Lumino layout engine, should the digital edition require additional engineering coordination.</p>
          <p>Please let me know if any revisions are required before the 12 November lock date.</p>
          <p>Best regards,</p>
          <p class="c-sig">Jordan Lee<br>Creative Director</p>
        </main>
      </div>
      <p class="usage">The coral strip is non-negotiable—it is the visual signature. Keep the vertical “OFFICIAL” label; it signals that the letter is a formal submission even though the tone remains creative.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .coral-wrapper { display: flex; margin: -6px; min-height: 100%; }
      .coral-bar { width: 14%; background: #ff7043; padding: 8px 2px; display: flex; flex-direction: column; align-items: center; border-radius: 2px 0 0 2px; }
      .c-dot { width: 7px; height: 7px; background: #fff; border-radius: 50%; margin-bottom: 10px; }
      .vertical-txt { color: var(--ace-bg, #fff); font-size: small; font-weight: 800; letter-spacing: 1.2px; writing-mode: vertical-rl; }
      .coral-content { width: 86%; padding: 8px; }
      .coral-content h1 { font-size: medium; color: #d84315; font-weight: 800; margin: 0 0 1px 0; }
      .subtitle { font-size: small; color: #ff7043; margin: 0 0 5px 0; }
      .date-line { font-size: small; color: var(--ace-comment, #8d6e63); margin: 0 0 5px 0; }
      .coral-content p { font-size: small; color: var(--ace-foreground, #333); margin: 0 0 5px 0; line-height: 1.4; }
      .c-sig { font-weight: 700; color: #d84315; margin-top: 8px; }
      .usage { font-size: small; color: #bf360c; font-style: italic; border-top: 0.5px dashed #ffccbc; padding-top: 4px; margin: 6px 8px 0 8px; line-height: 1.3; }
    `
	},

	// 7. Luxe
	{
		id: 'letter-luxe',
		title: 'Letter',
		styleVariant: 'Luxe',
		description: 'Elegant executive letter with gold accent line and centered serif header. Reserved for shareholder communications, board letters, and high-stakes formal correspondence where gravitas is required.',
		htmlContent: `
      <header class="luxe-hdr">
        <p class="brand">EXECUTIVE OFFICE</p>
        <h1>VANDERBILT & CO.</h1>
        <div class="gold-line"></div>
      </header>
      <main class="luxe-body">
        <p class="meta-date">24 OCTOBER 2026</p>
        <p>Dear Shareholders,</p>
        <p>We are delighted to report exceptional results for the fourth quarter. Our sustained investment in modern publishing engines and edge-native infrastructure has unlocked measurable performance gains across every digital channel while simultaneously reducing operational cost.</p>
        <p>Full audited figures, the capital-allocation summary, and the forward guidance for FY2027 are enclosed. We remain committed to disciplined growth and transparent communication with the ownership group.</p>
        <p>Sincerely,</p>
        <p class="exec-name">E. Vanderbilt III</p>
        <p class="exec-title">Managing Director</p>
      </main>
      <p class="usage">Center the header and keep the gold rule short and precise. Body text stays in serif for continuity with the letterhead. Signature block should be name + title only—no additional contact details on this formal variant.</p>
    `,
		cssContent: `
      * { box-sizing: border-box; padding: 4px; }
      .luxe-hdr { text-align: center; margin-bottom: 8px; }
      .brand { font-size: small; letter-spacing: 1.2px; color: #c5a059; font-weight: 800; margin: 0 0 2px 0; }
      .luxe-hdr h1 { font-family: Georgia, serif; font-size: medium; color: var(--ace-foreground, #111); letter-spacing: 0.5px; margin: 0 0 4px 0; }
      .gold-line { width: 36px; height: 1px; background: #c5a059; margin: 0 auto; }
      .meta-date { font-size: small; color: #c5a059; font-weight: 700; margin: 0 0 5px 0; }
      .luxe-body p { font-family: Georgia, serif; font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.45; }
      .exec-name { font-weight: 700; margin-top: 8px; color: var(--ace-foreground, #111); }
      .exec-title { font-size: small; color: #666; margin: 0; }
      .usage { font-size: small; color: #a1887f; font-style: italic; border-top: 0.5px dashed #d7ccc8; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 8. Modern Minimal
	{
		id: 'letter-modern-minimal',
		title: 'Letter',
		styleVariant: 'Modern Minimal',
		description: 'Ultra-clean centered letterhead with light weight typography and a single thin rule. Ideal for freelancers, independent consultants, and any correspondence that should feel calm, contemporary, and uncluttered.',
		htmlContent: `
      <header class="min-hdr">
        <h1>SOPHIA CHEN</h1>
        <p>sophia.chen@studio.dev · +1 (555) 018-9920 · studio.dev/sophia</p>
        <div class="thin-rule"></div>
      </header>
      <main class="min-body">
        <p class="date">24 October 2026</p>
        <p>Dear Client,</p>
        <p>Thank you for the opportunity to present our digital publishing solutions. Enclosed you will find the complete project scope, phased timeline, and transparent fee structure for the engagement we discussed last week.</p>
        <p>I am available to walk through any section in detail and can adjust the delivery milestones to align with your internal review cycles. Please do not hesitate to reply with questions or requested revisions.</p>
        <p>Best regards,</p>
        <p class="sig">Sophia Chen<br>Independent Design Systems Consultant</p>
      </main>
      <p class="usage">The light letter-spacing and centered alignment are deliberate. Do not bold the name or thicken the rule. Contact line should stay on one line; body text remains short and direct.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .min-hdr { text-align: center; margin-bottom: 8px; }
      .min-hdr h1 { font-size: medium; font-weight: 300; letter-spacing: 1.5px; color: var(--ace-foreground, #212121); margin: 0 0 2px 0; }
      .min-hdr p { font-size: small; color: var(--ace-comment, #757575); margin: 0; }
      .thin-rule { width: 100%; height: 0.5px; background: #e0e0e0; margin-top: 5px; }
      .date { font-size: small; color: var(--ace-comment, #9e9e9e); margin: 0 0 5px 0; }
      .min-body p { font-size: small; color: var(--ace-foreground, #333); margin: 0 0 5px 0; line-height: 1.4; }
      .sig { font-weight: 500; color: var(--ace-foreground, #111); margin-top: 8px; }
      .usage { font-size: small; color: var(--ace-comment, #9e9e9e); font-style: italic; border-top: 0.5px dashed #e0e0e0; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 9. Tropic
	{
		id: 'letter-tropic',
		title: 'Letter',
		styleVariant: 'Tropic',
		description: 'Fresh teal banner letter for community announcements, open-source program launches, and multi-office creative studios. The banner carries the organizational identity; the body stays warm and accessible.',
		htmlContent: `
      <div class="tropic-hdr">
        <h1>PACIFIC CREATIVE LABS</h1>
        <p>Honolulu · San Francisco · Tokyo</p>
      </div>
      <main class="tropic-body">
        <p class="t-date">24 October 2026</p>
        <p>Dear Community Members,</p>
        <p>We are thrilled to announce the launch of our new open-source creative grant program. This initiative is designed to support independent developers and small studios who are building accessible, high-performance web interfaces and educational tools.</p>
        <p>Grants range from $5,000 to $25,000 and include mentorship from our core engineering and design teams. Applications open 1 November and close 15 December. Full criteria and the submission portal are live on our website.</p>
        <p>We cannot wait to see what you create.</p>
        <p class="t-sig">The Pacific Labs Team</p>
      </main>
      <p class="usage">The teal banner is the brand block—keep city names in a single line. Body tone should stay encouraging and inclusive. Signature can be collective (“The Team”) rather than an individual name.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .tropic-hdr { background: #00695c; color: var(--ace-bg, #fff); padding: 8px; margin: -6px -6px 8px -6px; border-radius: 2px 2px 0 0; }
      .tropic-hdr h1 { font-size: medium; font-weight: 800; letter-spacing: 0.4px; color: #80cbc4; margin: 0 0 2px 0; }
      .tropic-hdr p { font-size: small; color: var(--ace-bg, #e0f2f1); margin: 0; }
      .t-date { font-size: small; color: #00695c; font-weight: 700; margin: 0 0 5px 0; }
      .tropic-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.4; }
      .t-sig { font-weight: 700; color: #00695c; margin-top: 8px; }
      .usage { font-size: small; color: #4db6ac; font-style: italic; border-top: 0.5px dashed #b2dfdb; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 10. Classic Serif
	{
		id: 'letter-classic-serif',
		title: 'Letter',
		styleVariant: 'Classic Serif',
		description: 'Traditional formal letter using full serif typography and a double rule under the letterhead. The correct choice for legal correspondence, certifications, and any document that must convey institutional permanence.',
		htmlContent: `
      <header class="classic-hdr">
        <h1>LAW OFFICES OF HARPER & ASSOCIATES</h1>
        <p>100 Court Street, Suite 500 · Boston, MA 02108 · +1 (617) 555-0140</p>
        <div class="double-rule"></div>
      </header>
      <main class="classic-body">
        <p class="date">24 October 2026</p>
        <p>To Whom It May Concern,</p>
        <p>This letter serves to certify that all licensing agreements and intellectual-property documents pertaining to the requested web framework have been reviewed, validated, and found to be in good standing as of the date above.</p>
        <p>No outstanding claims, liens, or restrictions have been identified that would impede the contemplated use. A complete schedule of the examined instruments is available upon written request.</p>
        <p>Respectfully yours,</p>
        <p class="c-name">Arthur Harper, Esq.<br>Partner</p>
      </main>
      <p class="usage">Serif throughout is mandatory. The double rule is the traditional separator—do not replace it with a single line. Closing should remain formal (“Respectfully yours” or “Very truly yours”).</p>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; padding: 4px; }
      .classic-hdr { text-align: center; margin-bottom: 8px; }
      .classic-hdr h1 { font-size: medium; font-weight: 400; letter-spacing: 0.5px; color: var(--ace-foreground, #111); margin: 0 0 2px 0; }
      .classic-hdr p { font-size: small; color: #555; margin: 0; }
      .double-rule { border-bottom: 2px double #333; margin-top: 5px; }
      .date { font-size: small; color: #666; margin: 0 0 5px 0; font-style: italic; }
      .classic-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.45; }
      .c-name { font-weight: 700; margin-top: 8px; }
      .usage { font-size: small; color: var(--ace-comment, #8d6e63); font-style: italic; border-top: 0.5px dashed #d7ccc8; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 11. NEW — Technical Memo
	{
		id: 'letter-tech-memo',
		title: 'Technical Memo',
		styleVariant: 'Tech Memo',
		description: 'Internal technical memorandum format with clear From/To/Date/Subject header block. Designed for architecture decision records, incident post-mortems, and formal internal recommendations that still need letter-like structure.',
		htmlContent: `
      <header class="memo-hdr">
        <h1>INTERNAL MEMORANDUM</h1>
        <div class="memo-rule"></div>
      </header>
      <div class="memo-meta">
        <p><strong>FROM:</strong> Platform Architecture · Brian Cullinan</p>
        <p><strong>TO:</strong> Engineering Leadership · Product</p>
        <p><strong>DATE:</strong> 24 October 2026</p>
        <p><strong>SUBJECT:</strong> Recommendation to Adopt Zero-Port Tunnel Mode as Default</p>
      </div>
      <main class="memo-body">
        <p>After three months of production validation across twelve regions, I recommend that zero-port tunnel mode become the default configuration for all new workspaces effective 15 November 2026.</p>
        <p>Observed benefits include complete elimination of inbound firewall tickets, a 40 % reduction in mean time to first successful connection, and zero security findings related to exposed ports in the most recent penetration test.</p>
        <p>Migration path for existing workspaces is non-breaking and can be completed via a single configuration flag. Full decision record and rollout checklist are attached.</p>
        <p>Please advise if any objections exist before the target date.</p>
        <p class="memo-sign">— Brian Cullinan<br>Lead Systems Architect</p>
      </main>
      <p class="usage">Header block must contain From, To, Date, and Subject. Body stays factual and recommendation-oriented. Attachments are referenced, not embedded.</p>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .memo-hdr h1 { font-size: medium; font-weight: 800; color: var(--ace-foreground, #0f172a); letter-spacing: 0.6px; margin: 0 0 3px 0; }
      .memo-rule { height: 2px; background: var(--ace-foreground, #0f172a); margin-bottom: 6px; }
      .memo-meta { background: #f1f5f9; padding: 5px; border-left: 3px solid #0f172a; margin-bottom: 6px; font-size: small; }
      .memo-meta p { margin: 0 0 2px 0; color: #334155; }
      .memo-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.4; }
      .memo-sign { margin-top: 8px; font-weight: 600; }
      .usage { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; border-top: 0.5px dashed #cbd5e1; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 12. NEW — Recommendation Letter
	{
		id: 'letter-recommendation',
		title: 'Recommendation Letter',
		styleVariant: 'Recommendation',
		description: 'Formal letter of recommendation with clear structure for academic or professional endorsement. Includes relationship context, specific achievements, and an unambiguous closing endorsement.',
		htmlContent: `
      <header class="rec-hdr">
        <h1>LETTER OF RECOMMENDATION</h1>
        <p class="rec-sub">Confidential · For Admissions / Hiring Use Only</p>
      </header>
      <main class="rec-body">
        <p class="date">24 October 2026</p>
        <p>To the Admissions Committee / Hiring Manager,</p>
        <p>I am writing to offer my strongest recommendation for Jordan Ellis, whom I supervised for three years as Lead Architect on the edge-proxy platform team.</p>
        <p>Jordan consistently demonstrated exceptional technical judgment, clear written communication, and the rare ability to translate complex distributed-systems constraints into simple, reliable interfaces. Under their leadership the team reduced mean tunnel provisioning time from 45 seconds to under 5 seconds while simultaneously improving reliability metrics.</p>
        <p>I recommend Jordan without reservation for any role that demands both deep systems expertise and collaborative leadership. Please contact me directly if further detail would be helpful.</p>
        <p>Sincerely,</p>
        <p class="rec-sig"><strong>Dr. Alex Mercer</strong><br>Principal Engineer · Former Manager<br>alex.mercer@pryorlabs.internal</p>
      </main>
      <p class="usage">Always state the relationship and duration early. Include at least one quantifiable achievement. Close with an unambiguous endorsement sentence. Mark the letter confidential when appropriate.</p>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .rec-hdr { text-align: center; margin-bottom: 8px; border-bottom: 1px solid #334155; padding-bottom: 5px; }
      .rec-hdr h1 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #0f172a); letter-spacing: 0.5px; margin: 0 0 2px 0; }
      .rec-sub { font-size: small; color: var(--ace-comment, #64748b); margin: 0; font-style: italic; }
      .date { font-size: small; color: var(--ace-comment, #64748b); margin: 0 0 5px 0; }
      .rec-body p { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 5px 0; line-height: 1.45; }
      .rec-sig { margin-top: 8px; }
      .usage { font-size: small; color: var(--ace-comment, #64748b); font-style: italic; border-top: 0.5px dashed #cbd5e1; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	}
];

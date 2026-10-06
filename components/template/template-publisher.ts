
import type { ITemplateItem } from './template';

export const PUBLISHER_TEMPLATES: ITemplateItem[] = [
	// 1. Arrows Quick Publication
	{
		id: 'pub-arrows',
		title: 'Arrows Quick Publication',
		description: 'Directional news and bulletin template. Features a full-width header image placeholder, a strong title, and a distinctive right-pointing arrow accent rule that pulls the eye into the body copy. Ideal for internal organizational updates, directional announcements, and fast-moving operational bulletins.',
		styleVariant: 'Publisher Arrows',
		htmlContent: `
      <header class="arrows-hdr">
        <div class="image-placeholder">
          <div class="icon-frame">🖼 HEADER IMAGE / LOGO</div>
        </div>
        <h1>Q4 Infrastructure Update</h1>
        <div class="arrow-accent"></div>
      </header>
      <main class="arrows-body">
        <p class="lead">Effective immediately, all production tunnel endpoints will route through the new multi-region Cloudflare edge pool. No action is required from individual developers; the control plane will migrate active sessions automatically during the next maintenance window.</p>
        <p>Key changes include automatic CNAME reconciliation, reduced connection overhead, and improved cross-region failover. Full technical notes are available in the internal runbook under section 4.2.</p>
        <section class="info-block">
          <h2>Platform Operations Team</h2>
          <p>ops@pryorlabs.internal · +1 (800) 555-0142 · Status page: status.pryorlabs.internal</p>
        </section>
        <p class="usage">Use this template for short directional bulletins. Keep the headline under eight words. The arrow rule is the visual signature—do not remove or recolor it. Place contact details in the bottom info block so readers know exactly who to escalate to.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, Helvetica, sans-serif; box-sizing: border-box; padding: 4px; }
      .arrows-hdr { text-align: center; margin-bottom: 6px; }
      .image-placeholder { background: #f0f0f0; border: 0.5px dashed #ccc; height: 28px; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; border-radius: 2px; }
      .icon-frame { font-size: small; color: #999; }
      .arrows-hdr h1 { font-size: medium; font-weight: 800; color: #111; margin: 0 0 3px 0; }
      .arrow-accent { width: 100%; height: 0; border-top: 2px solid #8d6e63; position: relative; margin: 0 0 6px 0; }
      .arrow-accent::after { content: ''; position: absolute; right: 0; top: -4px; width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 6px solid #8d6e63; }
      .lead { font-size: small; color: #222; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .info-block { border-top: 0.5px solid #ccc; padding-top: 4px; margin-top: 6px; text-align: center; }
      .info-block h2 { font-size: small; font-weight: 800; color: #8d6e63; margin: 0 0 2px 0; }
      .usage { font-size: small; color: #777; font-style: italic; border-top: 0.5px dashed #ddd; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 2. Bounce Quick Publication
	{
		id: 'pub-bounce',
		title: 'Bounce Quick Publication',
		description: 'High-energy promotional flyer template. Warm orange banner and circular accent create immediate visual energy. Best for event invitations, launch parties, community meet-ups, and any announcement that needs to feel lively and approachable.',
		styleVariant: 'Publisher Bounce',
		htmlContent: `
      <header class="bounce-hdr">
        <div class="top-banner"></div>
        <div class="bounce-circle"></div>
        <h1>Developer Meetup · Oct 18</h1>
      </header>
      <main class="bounce-body">
        <div class="photo-box">
          <p>[ EVENT PHOTO OR ILLUSTRATION ]</p>
        </div>
        <p class="lead">Join the Pryor Labs engineering community for an evening of live demos, tunnel architecture deep-dives, and informal networking. Food and drinks provided. All skill levels welcome.</p>
        <p><strong>When:</strong> Saturday, 18 October 2026 · 6:00 – 9:00 PM<br>
        <strong>Where:</strong> Downtown Innovation Hub · 4th Floor Studio<br>
        <strong>RSVP:</strong> events@pryorlabs.dev · Limited to 80 seats</p>
        <p class="usage">This template is built for energy. Keep the headline short and action-oriented. Replace the photo box with a real image or bold graphic. The orange banner and circle are the brand signature—retain them for visual consistency across event materials.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Trebuchet MS', sans-serif; box-sizing: border-box; padding: 4px; }
      .bounce-hdr { position: relative; padding-top: 10px; margin-bottom: 6px; }
      .top-banner { position: absolute; top: -6px; left: -6px; right: -6px; height: 10px; background: #fb8c00; border-radius: 2px 2px 0 0; }
      .bounce-circle { width: 14px; height: 14px; background: #e65100; border-radius: 50%; position: absolute; top: 0; left: 8px; border: 1.5px solid #fff; }
      .bounce-hdr h1 { font-size: medium; font-weight: 800; color: #e65100; margin: 8px 0 0 0; }
      .photo-box { background: #fff3e0; border: 0.5px solid #ffe0b2; height: 32px; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; font-size: small; color: #ef6c00; border-radius: 2px; }
      .lead { font-size: small; color: #333; line-height: 1.4; margin: 0 0 4px 0; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #888; font-style: italic; border-top: 0.5px dashed #ffcc80; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 3. Brocade Quick Publication
	{
		id: 'pub-brocade',
		title: 'Brocade Quick Publication',
		description: 'Formal, classical notice template. Double-line border, warm paper tone, and serif typography create a sense of ceremony and permanence. Use for certificates, official recognitions, formal policy announcements, and prestige communications.',
		styleVariant: 'Publisher Brocade',
		htmlContent: `
      <header class="brocade-hdr">
        <div class="border-frame">
          <h1>CERTIFICATE OF COMPLETION</h1>
          <div class="sub-rule"></div>
          <p class="subtitle">Advanced Systems Architecture Program</p>
        </div>
      </header>
      <main class="brocade-body">
        <div class="ornate-box">
          <p>This certifies that the named participant has successfully completed the full curriculum of the Advanced Systems Architecture Program, including practical modules on edge-proxy design, WebSocket orchestration, and deterministic state recovery.</p>
          <p class="meta">Issued this 5th day of October, 2026 · Pryor Labs Training Division</p>
        </div>
        <p class="usage">Reserve this template for formal or ceremonial documents. Keep the headline in full capitals. The double border and centered rule are non-negotiable design elements. Body text should remain concise and dignified; avoid casual language or emojis.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .border-frame { border: 1.5px double #5d4037; padding: 8px 6px; text-align: center; margin-bottom: 6px; background: #fbe9e7; border-radius: 1px; }
      .border-frame h1 { font-size: medium; letter-spacing: 0.8px; color: #3e2723; font-weight: 700; margin: 0 0 3px 0; }
      .sub-rule { width: 36px; height: 1px; background: #5d4037; margin: 0 auto 4px auto; }
      .subtitle { font-size: small; color: #5d4037; margin: 0; font-style: italic; }
      .ornate-box { border-left: 2px solid #5d4037; padding-left: 6px; margin-bottom: 5px; }
      p { font-size: small; color: #2b1d0c; line-height: 1.4; margin: 0 0 4px 0; }
      .meta { font-size: small; color: #5d4037; font-style: italic; }
      .usage { font-size: small; color: #8d6e63; font-style: italic; border-top: 0.5px dashed #d7ccc8; padding-top: 3px; margin: 0; }
    `
	},

	// 4. Color Band Quick Publication
	{
		id: 'pub-color-band',
		title: 'Color Band Quick Publication',
		description: 'Corporate news and executive summary template. A full-width saturated color band instantly establishes brand hierarchy and draws the eye to the headline. Structured for clear, scannable corporate communications and status reports.',
		styleVariant: 'Publisher Color Band',
		htmlContent: `
      <div class="color-band-hero">
        <h1>Q3 Platform Status Report</h1>
        <p class="band-sub">Confidential · Internal Distribution Only</p>
      </div>
      <main class="band-body">
        <div class="img-frame">
          <p>[ STATUS DASHBOARD SNAPSHOT OR CHART ]</p>
        </div>
        <p class="lead">All core services maintained 99.99 % uptime through the quarter. Tunnel provisioning latency dropped 40 % after the edge-pool migration. No severity-1 incidents were recorded.</p>
        <p>Next focus areas: multi-account federation, formal SLA instrumentation, and public status-page launch scheduled for early Q4.</p>
        <p class="usage">Ideal for executive summaries and recurring status reports. Keep the headline factual and date-stamped. The blue band is the primary brand signal—do not alter its color without design-system approval. Place any supporting graphic in the light-blue frame immediately under the band.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .color-band-hero { background: #0288d1; color: #fff; padding: 8px 6px; margin: -6px -6px 6px -6px; border-bottom: 2px solid #01579b; }
      .color-band-hero h1 { font-size: medium; font-weight: 800; color: #fff; margin: 0 0 2px 0; }
      .band-sub { font-size: small; color: #b3e5fc; margin: 0; }
      .img-frame { background: #e1f5fe; border: 0.5px solid #b3e5fc; height: 28px; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; font-size: small; color: #0288d1; border-radius: 2px; }
      .lead { font-size: small; color: #222; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #78909c; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 5. Marker Quick Publication
	{
		id: 'pub-marker',
		title: 'Marker Quick Publication',
		description: 'Critical-headline editorial template. A stark dark corner block and heavy underline force immediate attention. Designed for urgent notices, breaking operational alerts, and any message that must not be overlooked.',
		styleVariant: 'Publisher Marker',
		htmlContent: `
      <header class="marker-hdr">
        <div class="marker-block"></div>
        <h1>URGENT: Maintenance Window Extended</h1>
      </header>
      <main class="marker-body">
        <p class="lead">The scheduled maintenance window originally planned for 02:00–04:00 UTC has been extended to 06:00 UTC due to additional validation steps on the new edge routing tables.</p>
        <p>All active tunnels will remain available. New tunnel creation is temporarily paused until the window closes. No data loss is expected. Status updates will be posted every 30 minutes on the internal status channel.</p>
        <p class="usage">Use this template only for time-sensitive or high-severity notices. The black corner block and underline are deliberate attention devices—keep them. Headline should be imperative and specific. Body copy must answer “what / when / impact / next step” in the first two sentences.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .marker-hdr { position: relative; padding-top: 4px; margin-bottom: 6px; }
      .marker-block { position: absolute; top: -6px; right: -6px; width: 14px; height: 14px; background: #212121; border-radius: 0 2px 0 0; }
      .marker-hdr h1 { font-size: medium; font-weight: 800; color: #212121; border-bottom: 2px solid #212121; padding-bottom: 3px; margin: 0; }
      .lead { font-size: small; color: #111; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #666; font-style: italic; border-top: 0.5px dashed #ccc; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 6. Modular Quick Publication
	{
		id: 'pub-modular',
		title: 'Modular Quick Publication',
		description: 'Structured multi-part update template. Dark header bar followed by equal-width content modules. Perfect for analytical summaries, multi-topic digests, and any communication that needs clear visual separation of distinct information blocks.',
		styleVariant: 'Publisher Modular',
		htmlContent: `
      <header class="mod-hdr">
        <div class="dark-bar">
          <h1>Weekly Platform Digest · Week 40</h1>
        </div>
      </header>
      <main class="mod-body">
        <div class="grid-modules">
          <div class="module">
            <p><strong>Throughput</strong></p>
            <p>Average tunnel setup time improved to 3.8 s (↓ 22 % WoW). Peak concurrent sessions: 12 400.</p>
          </div>
          <div class="module">
            <p><strong>Reliability</strong></p>
            <p>Zero severity-1 incidents. Two severity-2 events resolved within SLA. Overall uptime 99.99 %.</p>
          </div>
        </div>
        <div class="grid-modules" style="margin-top:4px;">
          <div class="module">
            <p><strong>Releases</strong></p>
            <p>v2.4.1 shipped with SOCKS5 keep-alive improvements and Lumino state-recovery patches.</p>
          </div>
          <div class="module">
            <p><strong>Next Week</strong></p>
            <p>Focus: multi-region failover testing and public status-page soft launch.</p>
          </div>
        </div>
        <p class="usage">Use this layout when the message contains three or four discrete topics of equal importance. Each module should be scannable in under five seconds. The dark header bar establishes the document identity; keep module backgrounds light for contrast.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .mod-hdr { margin-bottom: 6px; }
      .dark-bar { background: #37474f; color: #fff; padding: 5px 6px; margin: -6px -6px 4px -6px; }
      .dark-bar h1 { font-size: medium; font-weight: 800; color: #fff; margin: 0; }
      .grid-modules { display: flex; gap: 4px; }
      .module { flex: 1; background: #eceff1; padding: 5px; border: 0.5px solid #cfd8dc; border-radius: 2px; }
      .module p { font-size: small; color: #263238; margin: 0 0 2px 0; line-height: 1.3; }
      .usage { font-size: small; color: #78909c; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 3px; margin-top: 5px; }
    `
	},

	// 7. Perforation Quick Publication
	{
		id: 'pub-perforation',
		title: 'Perforation Quick Publication',
		description: 'Coupon / voucher / ticket template. Main content sits above a dashed perforation line that signals a detachable stub. Designed for redeemable offers, event tickets, and any printed piece that requires a physical tear-off element.',
		styleVariant: 'Publisher Perforation',
		htmlContent: `
      <header class="perf-hdr">
        <h1>Exclusive Developer Preview Access</h1>
      </header>
      <main class="perf-body">
        <p class="lead">Present this voucher at the registration desk to receive complimentary Pro-tier access for 30 days, including unlimited tunnels and priority support.</p>
        <p>Offer valid for new accounts only. One voucher per team. Cannot be combined with other promotions. Expires 31 December 2026.</p>
        <div class="dotted-perforation">
          <p class="coupon-title">✂ CUT ALONG THIS LINE · REDEEM AT EVENTS DESK</p>
          <p class="code">CODE: PREVIEW-2026-Q4 · VALID UNTIL 31 DEC 2026</p>
        </div>
        <p class="usage">The dashed border and “cut here” language are essential. Keep the upper section informative and the lower stub scannable in two seconds. Print on heavier stock when physical tear-off is required. Digital versions can treat the stub as a distinct call-to-action block.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .perf-hdr h1 { font-size: medium; font-weight: 800; color: #8e24aa; margin: 0 0 5px 0; }
      .lead { font-size: small; color: #333; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .dotted-perforation { border: 1px dashed #8e24aa; padding: 6px 4px; margin-top: 8px; background: #f3e5f5; text-align: center; border-radius: 2px; }
      .coupon-title { font-size: small; font-weight: 800; color: #6a1b9a; margin: 0 0 2px 0; }
      .code { font-size: small; font-family: monospace; color: #4a148c; margin: 0; }
      .usage { font-size: small; color: #7b1fa2; font-style: italic; border-top: 0.5px dashed #ce93d8; padding-top: 3px; margin-top: 5px; }
    `
	},

	// 8. PhotoScope Quick Publication
	{
		id: 'pub-photoscope',
		title: 'PhotoScope Quick Publication',
		description: 'Visual-first showcase template. A dominant full-width hero graphic sits above a clean headline and supporting copy. Optimized for product launches, property or portfolio listings, visual case studies, and any message where the image carries primary weight.',
		styleVariant: 'Publisher PhotoScope',
		htmlContent: `
      <header class="ps-hdr">
        <div class="photo-banner">
          <p>[ HERO PRODUCT SHOT OR ARCHITECTURE DIAGRAM ]</p>
        </div>
        <h1>Introducing Edge-Native Workspace Sync</h1>
      </header>
      <main class="ps-body">
        <p class="lead">Local folder state, open tabs, and Git context now travel with the developer—encrypted, instant, and recoverable across any authorized browser.</p>
        <p>No more “works on my machine.” No more lost debugging sessions. Just open the published hostname and continue exactly where you left off.</p>
        <p class="usage">Lead with the strongest visual available. The dark banner is intentional—it frames the image and creates contrast with the white body. Keep the headline benefit-oriented and under ten words. Supporting copy should expand the promise, not repeat the headline.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .photo-banner { background: #455a64; color: #fff; height: 36px; display: flex; align-items: center; justify-content: center; margin: -6px -6px 5px -6px; font-size: small; border-radius: 2px 2px 0 0; }
      .ps-hdr h1 { font-size: medium; font-weight: 800; color: #263238; border-bottom: 1px solid #455a64; padding-bottom: 3px; margin: 0 0 5px 0; }
      .lead { font-size: small; color: #222; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #78909c; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 9. Simple Divider Quick Publication
	{
		id: 'pub-simple-divider',
		title: 'Simple Divider Quick Publication',
		description: 'Minimalist, quiet communication template. Subtle dashed rules separate headline, body, and footer without visual noise. Best for thoughtful internal notes, policy clarifications, and any message that benefits from calm, uncluttered presentation.',
		styleVariant: 'Publisher Simple Divider',
		htmlContent: `
      <header class="sd-hdr">
        <h1>Updated Contribution Guidelines</h1>
        <div class="dashed-divider"></div>
      </header>
      <main class="sd-body">
        <p class="lead">Effective 12 October 2026, all pull requests that touch the tunnel orchestration layer must include an updated architecture decision record and a short video walkthrough of the change.</p>
        <p>This requirement applies to both core maintainers and external contributors. Existing open PRs are grandfathered until 1 November. Full guidelines are published in the internal handbook under “Engineering Practices → Tunnel Layer.”</p>
        <div class="dashed-divider"></div>
        <p class="footer">Questions → architecture@pryorlabs.internal · Handbook revision 2026.10</p>
        <p class="usage">This template prioritizes readability over decoration. Keep the headline centered and under eight words. Use the dashed rules only to separate major structural sections. Avoid bold colors or heavy borders—calm is the goal.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .sd-hdr h1 { font-size: medium; font-weight: 800; color: #111; text-align: center; margin: 0 0 4px 0; }
      .dashed-divider { width: 100%; height: 0; border-top: 0.8px dashed #757575; margin: 4px 0 6px 0; }
      .lead { font-size: small; color: #222; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      .footer { font-size: small; color: #666; text-align: center; }
      .usage { font-size: small; color: #888; font-style: italic; border-top: 0.5px dashed #ccc; padding-top: 3px; margin-top: 4px; }
    `
	},

	// 10. Accent Box Quick Publication
	{
		id: 'pub-accent-box',
		title: 'Accent Box Quick Publication',
		description: 'Fully framed spotlight template. A warm orange border and soft background wash enclose the entire message, creating a self-contained “card” effect. Excellent for highlighted notices, featured updates, and any content that should feel distinct from surrounding page material.',
		styleVariant: 'Publisher Accent Box',
		htmlContent: `
      <div class="accent-outer-frame">
        <header class="ab-hdr">
          <h1>Featured: Zero-Port Tunnel Mode</h1>
        </header>
        <main class="ab-body">
          <p class="lead">You can now run production-grade tunnels without opening a single inbound port on the host machine. The agent initiates a pure outbound connection; Cloudflare handles the rest.</p>
          <p>Enable with one flag: <code>--zero-port</code>. Compatible with existing SOCKS5 and custom-subdomain workflows. Full migration guide available in the docs under “Advanced Networking.”</p>
          <p class="usage">The orange frame and warm background are the visual identity of this template. Keep all content inside the frame. Headline should be benefit-led. Use the code element sparingly for exact commands or flags. Ideal when the message needs to stand out from a denser surrounding page.</p>
        </main>
      </div>
    `,
		cssContent: `
      * { font-family: Arial, sans-serif; box-sizing: border-box; padding: 4px; }
      .accent-outer-frame { border: 1.5px solid #e65100; padding: 8px 6px; background: #fff8e1; border-radius: 3px; }
      .ab-hdr h1 { font-size: medium; font-weight: 800; color: #e65100; border-bottom: 0.5px solid #ffb74d; padding-bottom: 3px; margin: 0 0 5px 0; }
      .lead { font-size: small; color: #333; line-height: 1.4; margin: 0 0 4px 0; font-weight: 500; }
      p { font-size: small; color: #333; line-height: 1.35; margin: 0 0 4px 0; }
      code { font-family: monospace; background: #ffe0b2; padding: 0 3px; border-radius: 2px; font-size: small; }
      .usage { font-size: small; color: #ef6c00; font-style: italic; border-top: 0.5px dashed #ffcc80; padding-top: 3px; margin-top: 4px; }
    `
	}
];

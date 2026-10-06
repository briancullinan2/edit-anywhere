import type { ITemplateItem } from './template';

export const CALLOUTS_QUOTES_LISTS_TEMPLATES: ITemplateItem[] = [
	// -------------------------------------------------------------------------
	// CALLOUTS & ALERTS
	// -------------------------------------------------------------------------

	// 1. Info Callout Box
	{
		id: 'callout-info-note-blue',
		title: 'Information Callout Box',
		styleVariant: 'Info Callout',
		description: 'Clean, professional blue information banner with left accent border for technical notes, prerequisites, and system warnings.',
		htmlContent: `
      <div class="info-callout">
        <div class="callout-header">
          <span class="icon">ℹ️</span>
          <strong>IMPORTANT NOTE</strong>
        </div>
        <p>Ensure your local SOCKS5 proxy server is active and reachable on port 1080 before initiating the WebSocket client-worker tunnel.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .info-callout { background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; padding: 16px 20px; color: #1e3a8a; }
      .callout-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
      .icon { font-size: medium; }
      strong { font-size: medium font-weight: 800; color: #1d4ed8; letter-spacing: 0.8px; text-transform: uppercase; }
      p { font-size: medium; color: #1e40af; line-height: 1.5; }
    `
	},

	// 2. Pro Tip Callout Box
	{
		id: 'callout-success-tip-green',
		title: 'Pro Tip Callout Box',
		styleVariant: 'Pro Tip',
		description: 'Green rounded callout container highlighting best practices, performance tweaks, and workflow optimizations.',
		htmlContent: `
      <div class="tip-box">
        <div class="tip-header">
          <span class="badge">PRO TIP</span>
        </div>
        <p>Use Webpack compiler hooks with <code>spawnSync</code> buffer limits to automate GGUF file validation during early build passes.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .tip-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 18px 20px; color: #14532d; }
      .tip-header { margin-bottom: 8px; }
      .badge { background: #22c55e; color: #ffffff; font-size: medium font-weight: 800; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.5px; }
      p { font-size: medium; color: #166534; line-height: 1.5; }
      code { background: #dcfce7; color: #14532d; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: medium; }
    `
	},

	// 3. Error Alert Callout
	{
		id: 'callout-error-alert-red',
		title: 'Error Alert Callout',
		styleVariant: 'Error Alert',
		description: 'High-visibility red alert card for runtime exceptions, build failures, system errors, and breaking changes.',
		htmlContent: `
      <div class="err-alert">
        <div class="alert-title">
          <span class="alert-icon">⚠️</span>
          <strong>BUILD EXCEPTION ENCOUNTERED</strong>
        </div>
        <p class="alert-msg"><code>ENOBUFS</code> Buffer Overflow detected in <code>activity-ts</code> worker stream. Adjust maxBuffer limits in Webpack output config.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .err-alert { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px 20px; color: #7f1d1d; }
      .alert-title { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
      .alert-title strong { font-size: medium font-weight: 800; color: #dc2626; letter-spacing: 0.5px; }
      .alert-msg { font-size: medium; color: #991b1b; line-height: 1.5; }
      code { background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: medium; }
    `
	},

	// 4. Vibrant Gradient Highlight Box
	{
		id: 'callout-gradient-highlight-box',
		title: 'Vibrant Gradient Highlight Callout',
		styleVariant: 'Gradient Callout',
		description: 'Eye-catching purple gradient block for key technical architecture takeaways and high-priority platform announcements.',
		htmlContent: `
      <div class="grad-box">
        <span class="eyebrow">KEY ARCHITECTURE INSIGHT</span>
        <h3>Direct Local Tab Sharing</h3>
        <p>Combining WebSockets with double reverse proxies unlocks direct local directory tab-sharing without heavy cloud storage middle tiers.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .grad-box { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; padding: 24px; border-radius: 10px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25); }
      .eyebrow { font-size: medium font-weight: 800; color: #c7d2fe; letter-spacing: 1px; display: block; margin-bottom: 6px; }
      h3 { font-size: large; font-weight: 800; margin-bottom: 8px; color: #ffffff; }
      p { font-size: medium; color: #e0e7ff; line-height: 1.6; }
    `
	},

	// 5. Warning Caution Box
	{
		id: 'callout-warning-amber',
		title: 'Amber Warning & Caution Callout',
		styleVariant: 'Warning Callout',
		description: 'Amber-toned warning alert block for security risks, deprecation notices, and destructive action confirmations.',
		htmlContent: `
      <div class="warn-box">
        <div class="warn-header">
          <span class="warn-icon">⚡</span>
          <strong>SECURITY WARNING</strong>
        </div>
        <p>Exposing local SOCKS5 ports to external domain subdomains bypasses standard firewall checks. Verify TLS authentication tokens before deploying.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .warn-box { background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 16px 20px; color: #78350f; }
      .warn-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
      .warn-header strong { font-size: medium font-weight: 800; color: #d97706; letter-spacing: 0.8px; }
      p { font-size: medium; color: #92400e; line-height: 1.5; }
    `
	},

	// 6. Minimal Line Left Minimalist Callout
	{
		id: 'callout-minimal-slate',
		title: 'Minimalist Slate Accent Callout',
		styleVariant: 'Minimal Callout',
		description: 'Clean gray border-left callout ideal for technical documentation notes, API specs, and inline code explanations.',
		htmlContent: `
      <div class="slate-callout">
        <p><strong>Config Note:</strong> Ensure CNAME records pointing to Cloudflare tunnel endpoints have Proxy Status enabled in DNS management.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .slate-callout { background: #f8fafc; border-left: 3px solid #64748b; padding: 14px 18px; border-radius: 0 6px 6px 0; }
      p { font-size: medium; color: #334155; line-height: 1.5; }
      strong { color: #0f172a; font-weight: 700; }
    `
	},

	// 7. Security & Compliance Callout
	{
		id: 'callout-security-shield',
		title: 'Security & Verification Shield Callout',
		styleVariant: 'Security Shield',
		description: 'Dark-themed security callout block with shield iconography for privacy guarantees, identity verification, and encryption notices.',
		htmlContent: `
      <div class="sec-callout">
        <div class="sec-header">
          <span class="shield-icon">🛡️</span>
          <div>
            <h4>End-to-End Encryption Verified</h4>
            <span class="sub">TLS 1.3 &bull; SOCKS5 Tunnel Isolation</span>
          </div>
        </div>
        <p>All data streams bridged through tab browser WebSockets are encrypted end-to-end. Zero unencrypted payload logs are retained at edge proxies.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .sec-callout { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 20px; color: #f8fafc; }
      .sec-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
      .shield-icon { font-size: large; }
      h4 { font-size: medium; font-weight: 700; color: #38bdf8; }
      .sub { font-size: medium color: #64748b; font-weight: 600; text-transform: uppercase; }
      p { font-size: medium; color: #94a3b8; line-height: 1.6; }
    `
	},

	// 8. Terminal CLI Command Callout
	{
		id: 'callout-terminal-command',
		title: 'Terminal CLI Quick Copy Callout',
		styleVariant: 'Terminal Block',
		description: 'Dark monospaced command box styled like a bash terminal for quick terminal commands and shell execution scripts.',
		htmlContent: `
      <div class="terminal-callout">
        <div class="term-bar">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="term-title">bash -- cloudflared tunnel setup</span>
        </div>
        <pre><code>$ cloudflared tunnel run --url http://localhost:8080 pryor-tunnel</code></pre>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-sizing: border-box; margin: 0; padding: 0; }
      .terminal-callout { background: #111827; border: 1px solid #1f2937; border-radius: 8px; overflow: hidden; }
      .term-bar { background: #1f2937; padding: 8px 12px; display: flex; align-items: center; gap: 6px; }
      .dot { width: 10px; height: 10px; border-radius: 50%; }
      .red { background: #ef4444; } .yellow { background: #f59e0b; } .green { background: #10b981; }
      .term-title { font-size: medium color: #9ca3af; margin-left: 8px; }
      pre { padding: 16px; color: #34d399; font-size: medium; overflow-x: auto; }
      code { font-family: inherit; }
    `
	},

	// -------------------------------------------------------------------------
	// QUOTES & TESTIMONIALS
	// -------------------------------------------------------------------------

	// 9. Editorial Pull Quote with Borders
	{
		id: 'quote-large-pull-quote-border',
		title: 'Magazine Pull Quote with Borders',
		styleVariant: 'Editorial Pull Quote',
		description: 'Classic serif editorial pull quote with top and bottom rule borders for articles, blog posts, and thought leadership essays.',
		htmlContent: `
      <div class="pull-quote">
        <blockquote>&ldquo;Simplicity in design leads to resilience in production.&rdquo;</blockquote>
        <cite>&mdash; Architecture Principles, 2026 Edition</cite>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, Cambria, "Times New Roman", Times, serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pull-quote { border-top: 2px solid #0f172a; border-bottom: 2px solid #0f172a; padding: 24px 16px; text-align: center; max-width: 650px; margin: 0 auto; }
      blockquote { font-size: large; font-style: italic; color: #0f172a; line-height: 1.4; margin-bottom: 12px; }
      cite { font-size: medium; font-style: normal; font-family: system-ui, sans-serif; color: #64748b; font-weight: 600; letter-spacing: 0.5px; }
    `
	},

	// 10. Dark Slate Quote Block
	{
		id: 'quote-dark-slate-testimonial',
		title: 'Dark Slate Quote Block',
		styleVariant: 'Dark Slate Quote',
		description: 'Modern dark slate quote card featuring highlighted accent text, author attribution, and company title.',
		htmlContent: `
      <div class="dark-q">
        <blockquote>&ldquo;The Lumino integration solved our browser layout window management instantly. Our entire multi-tab workflow runs smoothly now.&rdquo;</blockquote>
        <div class="author">
          <strong>Brian Cullinan</strong>
          <span>Lead Systems Architect</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .dark-q { background: #1e293b; color: #f8fafc; border-radius: 8px; padding: 28px; border: 1px solid #334155; }
      blockquote { font-size: medium; font-style: italic; color: #38bdf8; line-height: 1.6; margin-bottom: 18px; }
      .author strong { display: block; font-size: medium; color: #f8fafc; font-weight: 700; }
      .author span { font-size: medium color: #94a3b8; }
    `
	},

	// 11. Speech Bubble Quote Container
	{
		id: 'quote-speech-bubble-tail',
		title: 'Speech Bubble Quote Container',
		styleVariant: 'Speech Bubble',
		description: 'Playful speech bubble testimonial card with pointer arrow tail for user feedback quotes and chat-style customer reviews.',
		htmlContent: `
      <div class="bubble-wrapper">
        <div class="bubble">
          <p>&ldquo;Setup took under 2 minutes. The Cloudflare tunnel API integration with custom subdomains is flawlessly executed.&rdquo;</p>
        </div>
        <div class="bubble-tail"></div>
        <div class="bubble-author">
          <span class="avatar">💻</span>
          <span class="name">DevOps Team Lead</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .bubble-wrapper { max-width: 480px; }
      .bubble { background: #e0f2fe; border-radius: 12px; padding: 20px; color: #0369a1; border: 1px solid #bae6fd; }
      .bubble p { font-size: medium; line-height: 1.5; font-style: italic; }
      .bubble-tail { width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 12px solid #e0f2fe; margin-left: 24px; }
      .bubble-author { display: flex; align-items: center; gap: 8px; margin-top: 8px; margin-left: 16px; }
      .avatar { font-size: large; }
      .name { font-size: medium; font-weight: 700; color: #334155; }
    `
	},

	// 12. Minimal Executive Testimonial Card
	{
		id: 'quote-executive-card',
		title: 'Executive Testimonial Card with Avatar',
		styleVariant: 'Executive Card',
		description: 'Clean executive testimonial block complete with star rating metrics, user title, and subtle brand attribution.',
		htmlContent: `
      <div class="exec-quote">
        <div class="stars">★★★★★</div>
        <p class="quote-text">&ldquo;Deploying SOCKS5 proxy systems directly from client tab tabs eliminated our remote debugging friction completely.&rdquo;</p>
        <div class="exec-profile">
          <div class="exec-info">
            <strong>Principal Engineer</strong>
            <span>Pryor Games Infrastructure</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .exec-quote { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .stars { color: #f59e0b; font-size: medium; margin-bottom: 12px; }
      .quote-text { font-size: medium; color: #1e293b; line-height: 1.6; margin-bottom: 16px; }
      .exec-profile { display: flex; align-items: center; gap: 12px; }
      .exec-info strong { display: block; font-size: medium; color: #0f172a; font-weight: 700; }
      .exec-info span { font-size: medium color: #64748b; }
    `
	},

	// 13. Centered Large Hero Quotation
	{
		id: 'quote-hero-centered',
		title: 'Centered Large Hero Quotation',
		styleVariant: 'Hero Quote',
		description: 'Large display quote layout with background quote icon styling designed for landing page section dividers.',
		htmlContent: `
      <div class="hero-quote">
        <span class="bg-mark">&ldquo;</span>
        <p class="hero-text">The fastest way to debug complex WebSocket setups is to make browser tabs act as first-class network workers.</p>
        <span class="hero-author">&mdash; Web Networking Whitepaper</span>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .hero-quote { position: relative; text-align: center; padding: 40px 20px; max-width: 720px; margin: 0 auto; }
      .bg-mark { font-size: x-large; color: #e2e8f0; position: absolute; top: -20px; left: 50%; transform: translateX(-50%); z-index: -1; line-height: 1; font-family: Georgia, serif; }
      .hero-text { font-size: large; font-weight: 700; color: #0f172a; line-height: 1.4; margin-bottom: 16px; }
      .hero-author { font-size: medium; color: #0284c7; font-weight: 600; letter-spacing: 0.5px; }
    `
	},

	// -------------------------------------------------------------------------
	// LISTS & BULLETS
	// -------------------------------------------------------------------------

	// 14. Green Checkmark Feature List
	{
		id: 'list-checkmarks-green-bullets',
		title: 'Green Checkmark Feature List',
		styleVariant: 'Checkmark Bullets',
		description: 'Clean feature verification list featuring custom SVG checkmark bullets and high-contrast text for product specs.',
		htmlContent: `
      <ul class="chk-bullets">
        <li>
          <span class="chk-icon">✓</span>
          <div>
            <strong>TypeScript Type Verification</strong>
            <p>Strict compiler checking with automated Webpack type flags.</p>
          </div>
        </li>
        <li>
          <span class="chk-icon">✓</span>
          <div>
            <strong>Automatic Subdomain Creation</strong>
            <p>Instant CNAME DNS propagation through Cloudflare API hooks.</p>
          </div>
        </li>
      </ul>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .chk-bullets { list-style: none; }
      .chk-bullets li { display: flex; gap: 12px; margin-bottom: 16px; align-items: flex-start; }
      .chk-icon { background: #dcfce7; color: #16a34a; font-weight: 900; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: medium flex-shrink: 0; margin-top: 2px; }
      strong { font-size: medium; color: #0f172a; font-weight: 700; display: block; margin-bottom: 2px; }
      p { font-size: medium; color: #64748b; line-height: 1.4; }
    `
	},

	// 15. Numbered Process Circle Steps
	{
		id: 'list-numbered-step-circles',
		title: 'Numbered Process Step Circles',
		styleVariant: 'Numbered Steps',
		description: 'Sequential step-by-step ordered list featuring custom numbered badge circles and connecting timeline lines.',
		htmlContent: `
      <ol class="num-steps">
        <li>
          <span class="step-num">1</span>
          <div class="step-content">
            <strong>Clone Repository & Install Dependencies</strong>
            <p>Execute <code>git clone</code> and run <code>npm install</code> to setup Lumino layouts.</p>
          </div>
        </li>
        <li>
          <span class="step-num">2</span>
          <div class="step-content">
            <strong>Configure Cloudflare Tunnel Secrets</strong>
            <p>Export your Cloudflare API tokens to the local environment config file.</p>
          </div>
        </li>
        <li>
          <span class="step-num">3</span>
          <div class="step-content">
            <strong>Run Production Build</strong>
            <p>Launch the Webpack build server to compile TypeScript worker targets.</p>
          </div>
        </li>
      </ol>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .num-steps { list-style: none; }
      .num-steps li { display: flex; gap: 16px; margin-bottom: 20px; position: relative; }
      .step-num { width: 32px; height: 32px; background: #2563eb; color: #ffffff; font-size: medium; font-weight: 800; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      .step-content strong { font-size: medium; color: #0f172a; display: block; margin-bottom: 2px; }
      .step-content p { font-size: medium; color: #64748b; line-height: 1.4; }
      code { background: #f1f5f9; color: #0f172a; padding: 2px 4px; border-radius: 4px; font-family: monospace; }
    `
	},

	// 16. Horizontal Pill Badge List
	{
		id: 'list-badge-pills-horizontal',
		title: 'Horizontal Pill Badge List',
		styleVariant: 'Pill Badges',
		description: 'Flex-wrap collection of rounded category pills and technology stack tags for project headers.',
		htmlContent: `
      <div class="pills-container">
        <span class="label">Tech Stack:</span>
        <div class="pills">
          <span class="p">TypeScript</span>
          <span class="p">Webpack 5</span>
          <span class="p">Lumino Framework</span>
          <span class="p">Cloudflare Tunnels</span>
          <span class="p">WebSockets</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pills-container { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
      .label { font-size: medium font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
      .pills { display: flex; gap: 8px; flex-wrap: wrap; }
      .p { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; font-size: medium font-weight: 700; padding: 4px 12px; border-radius: 999px; transition: all 0.2s; }
      .p:hover { background: #e2e8f0; color: #0f172a; }
    `
	},

	// 17. Comparison Bullet List (Pros vs Cons)
	{
		id: 'list-pros-cons-grid',
		title: 'Pros vs. Cons Split List',
		styleVariant: 'Pros Cons List',
		description: 'Two-column list layout comparing advantages against drawbacks with icon indicators.',
		htmlContent: `
      <div class="pros-cons-container">
        <div class="list-col pros">
          <h4>BENEFITS</h4>
          <ul>
            <li>✅ Zero local server configuration required</li>
            <li>✅ Automatic SSL certificate issuing</li>
            <li>✅ Multi-tab sync state restoration</li>
          </ul>
        </div>
        <div class="list-col cons">
          <h4>LIMITATIONS</h4>
          <ul>
            <li>❌ Requires active browser tab session</li>
            <li>❌ WebSockets payload overhead</li>
          </ul>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .pros-cons-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
      .list-col { padding: 18px; border-radius: 8px; }
      .pros { background: #f0fdf4; border: 1px solid #bbf7d0; }
      .cons { background: #fef2f2; border: 1px solid #fecaca; }
      h4 { font-size: medium font-weight: 800; margin-bottom: 12px; letter-spacing: 0.8px; }
      .pros h4 { color: #166534; } .cons h4 { color: #991b1b; }
      ul { list-style: none; }
      li { font-size: medium; margin-bottom: 8px; line-height: 1.4; }
      .pros li { color: #14532d; } .cons li { color: #7f1d1d; }
    `
	},

	// 18. Metric Impact List Item
	{
		id: 'list-metric-impact-rows',
		title: 'Key Metrics & Impact Rows',
		styleVariant: 'Impact Metrics List',
		description: 'Clean list layout with bold numerical statistics aligned opposite detailed metric descriptions.',
		htmlContent: `
      <div class="metric-list">
        <div class="metric-row">
          <span class="num">10x</span>
          <div class="desc">
            <strong>Faster Deployment Loops</strong>
            <p>Direct browser tab tunneling bypasses local firewall configuration stages.</p>
          </div>
        </div>
        <div class="metric-row">
          <span class="num">100%</span>
          <div class="desc">
            <strong>Type Safety Guarantee</strong>
            <p>Full TypeScript integration across Webpack builds and Lumino windows.</p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .metric-list { display: flex; flex-direction: column; gap: 12px; }
      .metric-row { display: flex; align-items: center; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
      .num { font-size: large; font-weight: 900; color: #0284c7; min-width: 80px; text-align: center; }
      .desc strong { font-size: medium; color: #0f172a; display: block; margin-bottom: 2px; }
      .desc p { font-size: medium color: #64748b; }
    `
	},

	// 19. Interactive Task Checklist
	{
		id: 'list-interactive-task-checklist',
		title: 'Interactive Feature Task List',
		styleVariant: 'Task Checklist',
		description: 'Styled UI checklist with completed and pending task indicators for progress tracking components.',
		htmlContent: `
      <div class="task-list">
        <div class="task-item completed">
          <input type="checkbox" checked disabled />
          <span>Resolve HookWebpackError type flag exceptions</span>
        </div>
        <div class="task-item completed">
          <input type="checkbox" checked disabled />
          <span>Implement WebSocket double reverse proxy</span>
        </div>
        <div class="task-item">
          <input type="checkbox" disabled />
          <span>Automate pryor.games subdomain creation API</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .task-list { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
      .task-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: medium; color: #334155; }
      .task-item:last-child { border-bottom: none; }
      .task-item.completed span { text-decoration: line-through; color: #94a3b8; }
      input[type="checkbox"] { accent-color: #2563eb; width: 16px; height: 16px; }
    `
	},

	// 20. Key-Value Feature Matrix List
	{
		id: 'list-key-value-spec-matrix',
		title: 'Key-Value Technical Specification List',
		styleVariant: 'Spec Key-Value',
		description: 'Structured metadata list aligning system property titles opposite technical value tags.',
		htmlContent: `
      <div class="spec-matrix">
        <div class="spec-row">
          <span class="key">Target Protocol</span>
          <span class="val">WebSocket / SOCKS5</span>
        </div>
        <div class="spec-row">
          <span class="key">DNS Management</span>
          <span class="val">Cloudflare Tunnel API</span>
        </div>
        <div class="spec-row">
          <span class="key">UI Framework</span>
          <span class="val">Lumino Window Manager</span>
        </div>
        <div class="spec-row">
          <span class="key">Build System</span>
          <span class="val">Webpack 5 + TypeScript</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .spec-matrix { border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
      .spec-row { display: flex; justify-content: space-between; padding: 12px 16px; background: #ffffff; border-bottom: 1px solid #e2e8f0; font-size: medium; }
      .spec-row:nth-child(even) { background: #f8fafc; }
      .spec-row:last-child { border-bottom: none; }
      .key { font-weight: 600; color: #64748b; }
      .val { font-weight: 700; color: #0f172a; font-family: monospace; }
    `
	},

	// -------------------------------------------------------------------------
	// ADDITIONAL EXPANDED TEMPLATES (21 - 30)
	// -------------------------------------------------------------------------

	// 21. Accordion Style FAQ Item
	{
		id: 'callout-faq-accordion-item',
		title: 'FAQ Question & Answer Callout',
		styleVariant: 'FAQ Item',
		description: 'Structured question and answer container for user onboarding, technical docs, and pricing FAQs.',
		htmlContent: `
      <div class="faq-item">
        <div class="faq-q">
          <span class="q-badge">Q</span>
          <h4>How does tab browser folder sharing work without cloud storage?</h4>
        </div>
        <div class="faq-a">
          <p>The host tab establishes a WebSocket client-worker bridge to our Cloudflare edge tunnel, serving folder chunks directly from memory via local browser APIs.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .faq-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; }
      .faq-q { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
      .q-badge { background: #0284c7; color: #fff; font-size: medium font-weight: 800; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
      .faq-q h4 { font-size: medium; font-weight: 700; color: #0f172a; }
      .faq-a p { font-size: medium; color: #475569; line-height: 1.5; padding-left: 32px; }
    `
	},

	// 22. Status Beacon Notification Bar
	{
		id: 'callout-status-beacon-bar',
		title: 'Live System Status Beacon Bar',
		styleVariant: 'Status Beacon',
		description: 'Subtle status strip with pulsing green indicator beacon for system uptime, server status, or live operational feeds.',
		htmlContent: `
      <div class="status-bar">
        <div class="beacon-group">
          <span class="beacon-dot"></span>
          <span class="status-text">ALL TUNNEL ENDPOINTS OPERATIONAL</span>
        </div>
        <span class="latency">Latency: <strong>24ms</strong></span>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .status-bar { background: #0f172a; border: 1px solid #1e293b; border-radius: 6px; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; }
      .beacon-group { display: flex; align-items: center; gap: 8px; }
      .beacon-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px #22c55e; }
      .status-text { font-size: medium font-weight: 800; color: #f8fafc; letter-spacing: 0.8px; }
      .latency { font-size: medium color: #64748b; }
      .latency strong { color: #38bdf8; }
    `
	},

	// 23. Code Syntax Highlighted Snippet Block
	{
		id: 'callout-code-snippet-highlight',
		title: 'Formatted Code Snippet Callout',
		styleVariant: 'Code Snippet',
		description: 'Formatted TypeScript snippet container with code syntax coloring and language header identifier.',
		htmlContent: `
      <div class="code-block">
        <div class="code-hdr">
          <span>tunnel.ts</span>
          <span class="lang">TypeScript</span>
        </div>
        <pre><code><span class="k">import</span> { TunnelWorker } <span class="k">from</span> <span class="s">'@lumino/networking'</span>;

<span class="k">const</span> worker = <span class="k">new</span> TunnelWorker({
  port: <span class="n">1080</span>,
  domain: <span class="s">'pryor.games'</span>
});</code></pre>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; box-sizing: border-box; margin: 0; padding: 0; }
      .code-block { background: #1e293b; border-radius: 8px; overflow: hidden; border: 1px solid #334155; }
      .code-hdr { background: #0f172a; padding: 8px 14px; display: flex; justify-content: space-between; font-size: medium color: #94a3b8; border-bottom: 1px solid #334155; }
      pre { padding: 16px; font-size: medium; color: #f8fafc; line-height: 1.5; overflow-x: auto; }
      .k { color: #38bdf8; } .s { color: #fde047; } .n { color: #4ade80; }
    `
	},

	// 24. Release Notes Version Changelog List
	{
		id: 'list-changelog-version-releases',
		title: 'Release Notes & Version Changelog List',
		styleVariant: 'Changelog List',
		description: 'Version update list with feature tag categorization (Added, Fixed, Improved) for software release logs.',
		htmlContent: `
      <div class="changelog">
        <div class="version-hdr">
          <h3>v2.4.0 Release Notes</h3>
          <span class="date">October 2026</span>
        </div>
        <ul class="change-items">
          <li><span class="tag add">ADDED</span> Lumino browser tab layout state restoration.</li>
          <li><span class="tag fix">FIXED</span> Resolved Webpack <code>HookWebpackError</code> flag exceptions.</li>
          <li><span class="tag imp">IMPROVED</span> Reduced WebSocket proxy tunnel connection latency by 35%.</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .changelog { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; }
      .version-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
      .version-hdr h3 { font-size: medium; color: #0f172a; font-weight: 700; }
      .date { font-size: medium color: #64748b; }
      .change-items { list-style: none; }
      .change-items li { font-size: medium; color: #334155; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
      .tag { font-size: medium; font-weight: 800; padding: 2px 6px; border-radius: 4px; letter-spacing: 0.5px; }
      .add { background: #dcfce7; color: #15803d; }
      .fix { background: #fee2e2; color: #b91c1c; }
      .imp { background: #e0f2fe; color: #0369a1; }
    `
	},

	// 25. High-Impact Numbered Statistics Grid
	{
		id: 'list-stats-counter-grid',
		title: 'High-Impact Numbered Statistics Grid',
		styleVariant: 'Stats Counter Grid',
		description: 'Multi-column numeric grid layout emphasizing high-scale statistics and operational metrics.',
		htmlContent: `
      <div class="stats-grid">
        <div class="stat-box">
          <span class="val">99.9%</span>
          <span class="lbl">Uptime SLA</span>
        </div>
        <div class="stat-box">
          <span class="val">50ms</span>
          <span class="lbl">Proxy Latency</span>
        </div>
        <div class="stat-box">
          <span class="val">100k+</span>
          <span class="lbl">Active Tunnels</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
      .stat-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; text-align: center; }
      .val { font-size: large; font-weight: 900; color: #2563eb; display: block; margin-bottom: 2px; }
      .lbl { font-size: medium font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
    `
	},

	// 26. Feature Comparison Checklist Card
	{
		id: 'list-feature-comparison-card',
		title: 'Feature Comparison Checklist Card',
		styleVariant: 'Feature Checklist',
		description: 'Bordered card container showcasing included platform features with styled checkmark icons.',
		htmlContent: `
      <div class="feat-card">
        <h4>Included in Pro Tier</h4>
        <ul class="feat-list">
          <li><span class="check">✓</span> Custom pryor.games Subdomains</li>
          <li><span class="check">✓</span> Unlimited WebSocket Worker Tunnels</li>
          <li><span class="check">✓</span> Automated Webpack Configuration Hooks</li>
          <li><span class="check">✓</span> Dedicated SOCKS5 Proxy Routing</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .feat-card { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; }
      .feat-card h4 { font-size: medium; color: #0369a1; margin-bottom: 12px; font-weight: 700; }
      .feat-list { list-style: none; }
      .feat-list li { font-size: medium; color: #0c4a6e; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
      .check { color: #0284c7; font-weight: 900; }
    `
	},

	// 27. Timeline Process Milestones List
	{
		id: 'list-timeline-vertical-milestones',
		title: 'Vertical Timeline Milestone List',
		styleVariant: 'Vertical Timeline',
		description: 'Chronological timeline layout showing development milestones or release history steps.',
		htmlContent: `
      <div class="timeline">
        <div class="t-item">
          <div class="t-dot"></div>
          <div class="t-body">
            <span class="t-date">Phase 1</span>
            <strong>SOCKS5 Proxy Architecture</strong>
            <p>Designed WebSocket-to-SOCKS5 tunnel protocol specifications.</p>
          </div>
        </div>
        <div class="t-item">
          <div class="t-dot"></div>
          <div class="t-body">
            <span class="t-date">Phase 2</span>
            <strong>Cloudflare API Automation</strong>
            <p>Integrated CNAME domain creation for pryor.games subdomains.</p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .timeline { padding-left: 12px; border-left: 2px solid #e2e8f0; margin-left: 8px; }
      .t-item { position: relative; margin-bottom: 20px; padding-left: 16px; }
      .t-dot { width: 10px; height: 10px; background: #2563eb; border-radius: 50%; position: absolute; left: -22px; top: 4px; }
      .t-date { font-size: medium font-weight: 700; color: #2563eb; text-transform: uppercase; }
      .t-body strong { font-size: medium; color: #0f172a; display: block; margin-top: 2px; }
      .t-body p { font-size: medium color: #64748b; margin-top: 2px; }
    `
	},

	// 28. Minimal Inline Warning Strip
	{
		id: 'callout-inline-strip-notice',
		title: 'Compact Inline System Strip Notice',
		styleVariant: 'Inline Notice',
		description: 'Ultra-compact single-line notification bar for inline warnings and status callouts within text content.',
		htmlContent: `
      <div class="inline-strip">
        <span class="strip-tag">NOTICE</span>
        <span class="strip-text">Webpack 5 compiler requires node engine version &gt;= 18.0.0.</span>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .inline-strip { background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; display: inline-flex; align-items: center; gap: 10px; font-size: medium; }
      .strip-tag { background: #475569; color: #fff; font-size: medium; font-weight: 800; padding: 2px 6px; border-radius: 4px; }
      .strip-text { color: #334155; font-weight: 500; }
    `
	},

	// 29. Author Bio Attribution Box
	{
		id: 'quote-author-bio-footer',
		title: 'Author Bio & Citation Footer Box',
		styleVariant: 'Author Bio',
		description: 'Content footer card displaying author credentials, avatar placeholder, and biography details.',
		htmlContent: `
      <div class="author-bio">
        <div class="avatar-box">🛠️</div>
        <div class="bio-details">
          <strong>Written by Brian Cullinan</strong>
          <p>Specializing in custom web networking, WebSockets, TypeScript, and Lumino layout management.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .author-bio { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; display: flex; gap: 14px; align-items: center; }
      .avatar-box { width: 42px; height: 42px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: large; flex-shrink: 0; }
      .bio-details strong { font-size: medium; color: #0f172a; display: block; margin-bottom: 2px; }
      .bio-details p { font-size: medium color: #64748b; line-height: 1.4; }
    `
	},

	// 30. Floating Glassmorphism Hero Callout
	{
		id: 'callout-glassmorphism-dark-hero',
		title: 'Glassmorphism Dark Accent Callout',
		styleVariant: 'Glassmorphism Callout',
		description: 'Modern translucent dark card featuring border highlights and glowing accent backdrop for high-end SaaS designs.',
		htmlContent: `
      <div class="glass-box">
        <span class="badge-glow">STABLE RELEASE</span>
        <h3>Zero CLI Tunnel Deployment</h3>
        <p>Expose browser folder structures securely over HTTP without configuring traditional port-forwarding rules on local routers.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
      .glass-box { background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(12px); padding: 24px; border-radius: 12px; color: #f8fafc; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
      .badge-glow { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); font-size: medium; font-weight: 800; padding: 3px 10px; border-radius: 999px; letter-spacing: 0.8px; display: inline-block; margin-bottom: 10px; }
      h3 { font-size: large; font-weight: 800; margin-bottom: 6px; color: #fff; }
      p { font-size: medium; color: #94a3b8; line-height: 1.6; }
    `
	}
];

import type { ITemplateItem } from './template';

export const TOC_FRONT_MATTER_TEMPLATES: ITemplateItem[] = [
	{
		id: 'toc-classic-leader-dots',
		title: 'Classic TOC with leader dots',
		styleVariant: 'Classic Editorial',
		description: 'A traditional editorial table of contents featuring precise dotted leader lines, indented hierarchical subsections, and right-aligned page citations ideal for formal books and reports.',
		htmlContent: `
      <div class="toc-container">
        <header class="toc-header">
          <h2>Table of Contents</h2>
          <p class="usage-note"><strong>Template Usage:</strong> Replace the chapter titles, section items, and page numbers below. Duplicate <code>&lt;li class="sub-item"&gt;</code> blocks for nested sub-headings.</p>
        </header>
        <ul class="toc-list">
          <li class="section-title">FRONT MATTER</li>
          <li><span class="ch-title">Preface &amp; Acknowledgments</span><span class="ch-dots"></span><span class="ch-pg">v</span></li>
          <li><span class="ch-title">Executive Summary</span><span class="ch-dots"></span><span class="ch-pg">ix</span></li>

          <li class="section-title">PART I: ARCHITECTURAL FOUNDATIONS</li>
          <li><span class="ch-title">Chapter 1: The First Spark &amp; Legacy Systems</span><span class="ch-dots"></span><span class="ch-pg">1</span></li>
          <li class="sub-item"><span class="ch-title">1.1 Historical Monolith Paradigms</span><span class="ch-dots"></span><span class="ch-pg">4</span></li>
          <li class="sub-item"><span class="ch-title">1.2 Identifying System Bottlenecks</span><span class="ch-dots"></span><span class="ch-pg">9</span></li>
          <li><span class="ch-title">Chapter 2: Architectural Foundations</span><span class="ch-dots"></span><span class="ch-pg">14</span></li>
          <li class="sub-item"><span class="ch-title">2.1 Decoupling Service Boundaries</span><span class="ch-dots"></span><span class="ch-pg">18</span></li>
          <li class="sub-item"><span class="ch-title">2.2 Protocol Buffers &amp; Interface Design</span><span class="ch-dots"></span><span class="ch-pg">27</span></li>

          <li class="section-title">PART II: DISTRIBUTED EXECUTION</li>
          <li><span class="ch-title">Chapter 3: Asynchronous Systems &amp; Event Loops</span><span class="ch-dots"></span><span class="ch-pg">42</span></li>
          <li class="sub-item"><span class="ch-title">3.1 Non-Blocking I/O Pipelines</span><span class="ch-dots"></span><span class="ch-pg">49</span></li>
          <li class="sub-item"><span class="ch-title">3.2 Event-Driven Messaging Queues</span><span class="ch-dots"></span><span class="ch-pg">61</span></li>
          <li><span class="ch-title">Chapter 4: Edge Networks &amp; Cloud Tunnels</span><span class="ch-dots"></span><span class="ch-pg">78</span></li>
          <li><span class="ch-title">Chapter 5: State Reconciliation &amp; Consistency</span><span class="ch-dots"></span><span class="ch-pg">102</span></li>

          <li class="section-title">BACK MATTER</li>
          <li><span class="ch-title">Appendix A: Performance Benchmarks</span><span class="ch-dots"></span><span class="ch-pg">125</span></li>
          <li><span class="ch-title">Index &amp; Glossary of Terms</span><span class="ch-dots"></span><span class="ch-pg">138</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; }
      .toc-container { background: #ffffff; padding: 10px; border: 1px solid #d1d5db; max-width: 100%; }
      .toc-header h2 { font-size: 7px; font-weight: bold; border-bottom: 1.5px solid #000000; padding-bottom: 2px; margin: 0 0 3px 0; text-transform: uppercase; letter-spacing: 0.5px; }
      .usage-note { font-size: 2.8px; color: #4b5563; background: #f3f4f6; padding: 2px 4px; border-left: 2px solid #3b82f6; margin-bottom: 6px; font-family: system-ui, sans-serif; line-height: 1.3; }
      .toc-list { list-style: none; padding: 0; margin: 0; }
      .section-title { font-size: 3.5px; font-weight: 800; color: #111827; margin: 6px 0 3px 0; text-transform: uppercase; letter-spacing: 0.3px; border-bottom: 0.5px solid #e5e7eb; padding-bottom: 1px; }
      .toc-list li { display: flex; align-items: baseline; font-size: 3.5px; margin-bottom: 2.5px; }
      .toc-list li.sub-item { padding-left: 8px; font-size: 3.1px; color: #374151; }
      .ch-title { white-space: nowrap; font-weight: 500; }
      .sub-item .ch-title { font-style: italic; }
      .ch-dots { flex: 1; border-bottom: 0.8px dotted #9ca3af; margin: 0 3px; }
      .ch-pg { font-family: ui-monospace, monospace; font-size: 3.2px; font-weight: 700; color: #111827; }
    `
	},
	{
		id: 'toc-modern-grid-tiles',
		title: 'Modern grid block TOC',
		styleVariant: 'Grid Tiles',
		description: 'A dark-mode responsive grid layout grouping chapters into structured visual tiles with prominent section numbering and topic sub-lists.',
		htmlContent: `
      <div class="toc-tiles-container">
        <header>
          <h1>SYSTEM MANUAL CONTENTS</h1>
          <p class="instructions">Instructions: Populate grid cards with module names, page references, and key sub-topics. CSS Grid automatically balances layout rows.</p>
        </header>
        <div class="tile-grid">
          <div class="tile">
            <div class="tile-head"><span class="num">01</span><span class="pg">P. 01</span></div>
            <h3>Introduction &amp; Setup</h3>
            <ul>
              <li>System Prerequisites</li>
              <li>Toolchain Installation</li>
              <li>Initial Configuration</li>
            </ul>
          </div>
          <div class="tile">
            <div class="tile-head"><span class="num">02</span><span class="pg">P. 18</span></div>
            <h3>Core Engineering</h3>
            <ul>
              <li>Memory Allocators</li>
              <li>Concurrency Primitives</li>
              <li>Thread Synchronization</li>
            </ul>
          </div>
          <div class="tile">
            <div class="tile-head"><span class="num">03</span><span class="pg">P. 44</span></div>
            <h3>Network Protocol Layer</h3>
            <ul>
              <li>WebSocket Handshakes</li>
              <li>SOCKS5 Proxies</li>
              <li>Tunnel Forwarding</li>
            </ul>
          </div>
          <div class="tile">
            <div class="tile-head"><span class="num">04</span><span class="pg">P. 72</span></div>
            <h3>Distributed Storage</h3>
            <ul>
              <li>State Delta Sync</li>
              <li>WAL Persistence</li>
              <li>Snapshot Generation</li>
            </ul>
          </div>
          <div class="tile">
            <div class="tile-head"><span class="num">05</span><span class="pg">P. 98</span></div>
            <h3>Security Architecture</h3>
            <ul>
              <li>TLS Encryption</li>
              <li>Token Verification</li>
              <li>Access Controls</li>
            </ul>
          </div>
          <div class="tile">
            <div class="tile-head"><span class="num">06</span><span class="pg">P. 120</span></div>
            <h3>System Appendices</h3>
            <ul>
              <li>CLI Parameter Reference</li>
              <li>Error Code Index</li>
              <li>Glossary of Terms</li>
            </ul>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .toc-tiles-container { background: #0f172a; color: #ffffff; padding: 8px; border-radius: 2px; }
      header h1 { font-size: 6px; letter-spacing: 0.8px; color: #38bdf8; margin: 0 0 2px 0; font-weight: 800; }
      header .instructions { font-size: 2.6px; color: #94a3b8; margin: 0 0 6px 0; border-bottom: 0.5px solid #334155; padding-bottom: 3px; line-height: 1.3; }
      .tile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
      .tile { background: #1e293b; padding: 4px; border-left: 2px solid #38bdf8; border-radius: 1px; }
      .tile-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
      .num { font-size: 4.5px; font-weight: 900; color: #38bdf8; }
      .pg { font-size: 2.8px; font-weight: 700; color: #f43f5e; background: #881337; padding: 0.5px 2px; border-radius: 1px; }
      .tile h3 { font-size: 3.5px; color: #f8fafc; margin: 0 0 2px 0; font-weight: 700; }
      .tile ul { margin: 0; padding-left: 8px; font-size: 2.6px; color: #94a3b8; line-height: 1.35; }
    `
	},
	{
		id: 'toc-timeline-vertical',
		title: 'Vertical timeline TOC',
		styleVariant: 'Vertical Line',
		description: 'A modern timeline-inspired structure connecting book parts or milestones along a continuous vertical central node guide.',
		htmlContent: `
      <div class="toc-timeline">
        <div class="guide-banner">
          <h2>GUIDE ROADMAP</h2>
          <p>Usage: Edit timeline steps to reflect major parts or chronological milestones. Add <code>.sub-step</code> divs inside <code>.info</code> for chapter breakdowns.</p>
        </div>
        <div class="timeline-item">
          <div class="node">1</div>
          <div class="info">
            <h3>Part I: System Genesis</h3>
            <p class="meta">Pages 1–32 &bull; 3 Chapters</p>
            <div class="sub-step">&bull; Ch 1: Problem Statement &amp; Design Goals</div>
            <div class="sub-step">&bull; Ch 2: Core Constraints &amp; Technology Stack</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="node">2</div>
          <div class="info">
            <h3>Part II: Execution Framework</h3>
            <p class="meta">Pages 33–84 &bull; 4 Chapters</p>
            <div class="sub-step">&bull; Ch 3: Runtime Thread Management</div>
            <div class="sub-step">&bull; Ch 4: Non-blocking Data Storage</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="node">3</div>
          <div class="info">
            <h3>Part III: Production Scaling</h3>
            <p class="meta">Pages 85–128 &bull; 3 Chapters</p>
            <div class="sub-step">&bull; Ch 5: Distributed Reverse Proxies</div>
            <div class="sub-step">&bull; Ch 6: Load Balancing &amp; Failover</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="node">4</div>
          <div class="info">
            <h3>Part IV: Maintenance &amp; Operations</h3>
            <p class="meta">Pages 129–160 &bull; 2 Chapters</p>
            <div class="sub-step">&bull; Ch 7: Telemetry &amp; Log Monitoring</div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .toc-timeline { padding: 6px; position: relative; background: #ffffff; }
      .guide-banner h2 { font-size: 5px; margin: 0; color: #0f172a; font-weight: 800; letter-spacing: 0.4px; }
      .guide-banner p { font-size: 2.6px; color: #64748b; margin: 1px 0 6px 0; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 2px; }
      .toc-timeline::before { content: ''; position: absolute; left: 10px; top: 22px; bottom: 12px; width: 1px; background: #cbd5e1; }
      .timeline-item { display: flex; align-items: flex-start; margin-bottom: 5px; position: relative; z-index: 1; }
      .node { width: 9px; height: 9px; background: #2563eb; color: #ffffff; border-radius: 50%; font-size: 3.2px; font-weight: bold; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; margin-top: 1px; }
      .info h3 { font-size: 3.8px; font-weight: bold; color: #0f172a; margin: 0; }
      .info .meta { font-size: 2.8px; color: #2563eb; font-weight: 600; margin: 0 0 2px 0; }
      .info .sub-step { font-size: 2.8px; color: #475569; line-height: 1.3; }
    `
	},
	{
		id: 'toc-magazine-sidebar-feature',
		title: 'Magazine sidebar TOC',
		styleVariant: 'Editorial Magazine',
		description: 'An asymmetrical editorial magazine layout featuring a dark identity sidebar paired with content entries, bold page badges, and descriptive article teasers.',
		htmlContent: `
      <div class="toc-mag">
        <aside class="sidebar">
          <h2>THIS ISSUE</h2>
          <span class="vol">VOL. 42</span>
          <p class="side-note">Usage Instructions: Adjust volume details in the sidebar. Duplicate <code>.entry</code> blocks in the main content list for additional feature stories.</p>
        </aside>
        <div class="main-list">
          <div class="entry">
            <span class="pg">12</span>
            <div>
              <h4>THE FUTURE OF WEB COMPUTING</h4>
              <p>An in-depth analysis of next-generation browser rendering engines, WebAssembly runtimes, and local-first software architecture.</p>
            </div>
          </div>
          <div class="entry">
            <span class="pg">28</span>
            <div>
              <h4>DECENTRALIZED TUNNEL ROUTING</h4>
              <p>How Cloudflare edge tunnels and SOCKS5 proxy chains are reshaping custom web networking and self-hosted server visibility.</p>
            </div>
          </div>
          <div class="entry">
            <span class="pg">45</span>
            <div>
              <h4>MASTERING MONOREPO TOOLING</h4>
              <p>Best practices for configuring TypeScript type flags, Webpack build hooks, and automated git workflow hooks across massive teams.</p>
            </div>
          </div>
          <div class="entry">
            <span class="pg">64</span>
            <div>
              <h4>PRODUCTIVITY SYSTEMS IN PRACTICE</h4>
              <p>Evaluating rapid mental-workload management techniques designed to clear complex developer to-do items under 5 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Arial, sans-serif; box-sizing: border-box; }
      .toc-mag { display: flex; gap: 6px; padding: 6px; background: #f8fafc; border: 0.5px solid #e2e8f0; }
      .sidebar { background: #0f172a; color: #ffffff; padding: 4px; text-align: center; width: 28px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; }
      .sidebar h2 { font-size: 4px; font-weight: 900; margin: 0; letter-spacing: 0.5px; }
      .sidebar .vol { font-size: 3px; color: #ef4444; font-weight: 800; margin-bottom: 4px; display: block; }
      .sidebar .side-note { font-size: 2.2px; color: #94a3b8; text-align: left; line-height: 1.3; border-top: 0.5px solid #334155; padding-top: 3px; margin: 0; }
      .main-list { flex: 1; display: flex; flex-direction: column; gap: 4px; }
      .entry { display: flex; gap: 4px; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 3px; }
      .entry:last-child { border-bottom: none; }
      .pg { font-size: 5.5px; font-weight: 900; color: #ef4444; width: 10px; flex-shrink: 0; text-align: right; line-height: 1; }
      .entry h4 { font-size: 3.5px; font-weight: 800; margin: 0 0 1px 0; color: #0f172a; letter-spacing: 0.2px; }
      .entry p { font-size: 2.7px; color: #64748b; margin: 0; line-height: 1.35; }
    `
	},
	{
		id: 'toc-accordion-hierarchical',
		title: 'Hierarchical nested TOC',
		styleVariant: 'Nested Tree',
		description: 'A developer-centric monospace nested tree format for technical manuals, system specs, and software API documentation.',
		htmlContent: `
      <div class="toc-tree">
        <header class="tree-header">
          <h3>SYSTEM SPECIFICATION CONTENTS</h3>
          <p class="usage">Usage: Organize technical chapters using <code>.section-head</code> headers and nested <code>.sub-tree</code> unordered lists.</p>
        </header>

        <div class="section-head">01. ENVIRONMENT CONFIGURATION</div>
        <ul class="sub-tree">
          <li><span>1.1 Node.js Runtime Dependencies</span> <span>p. 04</span></li>
          <li><span>1.2 Webpack Compiler Hook Flags</span> <span>p. 09</span></li>
          <li><span>1.3 TypeScript Strict Type System</span> <span>p. 15</span></li>
        </ul>

        <div class="section-head">02. NETWORKING &amp; PROXY ARCHITECTURE</div>
        <ul class="sub-tree">
          <li><span>2.1 Cloudflare Tunnel Configuration</span> <span>p. 22</span></li>
          <li><span>2.2 WebSocket SOCKS5 Proxy Pipeline</span> <span>p. 28</span></li>
          <li><span>2.3 CNAME DNS Subdomain Routing</span> <span>p. 36</span></li>
        </ul>

        <div class="section-head">03. UI FRAMEWORK INTEGRATION</div>
        <ul class="sub-tree">
          <li><span>3.1 Lumino DockPanel Layout Managers</span> <span>p. 45</span></li>
          <li><span>3.2 Browser State Restoration Loops</span> <span>p. 53</span></li>
        </ul>

        <div class="section-head">04. SYSTEM DIAGNOSTICS &amp; ERROR CODES</div>
        <ul class="sub-tree">
          <li><span>4.1 SpawnSync ENOBUFS Buffer Handling</span> <span>p. 68</span></li>
          <li><span>4.2 Git Rebase Conflict Resolution</span> <span>p. 75</span></li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; box-sizing: border-box; }
      .toc-tree { padding: 6px; background: #f8fafc; border: 1px solid #cbd5e1; }
      .tree-header h3 { font-size: 4.5px; margin: 0; color: #0f172a; font-weight: 800; }
      .tree-header .usage { font-size: 2.6px; color: #64748b; margin: 1px 0 5px 0; border-bottom: 0.5px solid #cbd5e1; padding-bottom: 2px; line-height: 1.3; }
      .section-head { font-size: 3.5px; font-weight: bold; background: #e2e8f0; padding: 2px 4px; color: #1e293b; border-left: 2px solid #0284c7; margin-top: 3px; }
      .sub-tree { list-style: none; padding-left: 6px; margin: 2px 0 4px 0; }
      .sub-tree li { font-size: 3px; color: #334155; display: flex; justify-content: space-between; margin-bottom: 1.5px; border-bottom: 0.5px dotted #e2e8f0; padding-bottom: 1px; }
      .sub-tree li span:last-child { color: #0284c7; font-weight: bold; }
    `
	},
	{
		id: 'toc-two-column-index',
		title: 'Two-column balanced TOC',
		styleVariant: 'Dual Column',
		description: 'A clean, multi-column compact index layout designed to present comprehensive chapter lists efficiently within a single page view.',
		htmlContent: `
      <div class="toc-dual">
        <header>
          <h2>CONTENTS OVERVIEW</h2>
          <p class="instructions">How to use: Distribute content entries evenly across both <code>.col</code> containers to maintain visual balance.</p>
        </header>
        <div class="cols">
          <div class="col">
            <div class="col-head">PART I: CORE CONCEPTS</div>
            <p><strong>01</strong> System Overview <em>p. 1</em></p>
            <p><strong>02</strong> Development Setup <em>p. 8</em></p>
            <p><strong>03</strong> Architecture Models <em>p. 16</em></p>
            <p><strong>04</strong> State Containers <em>p. 25</em></p>
            <p><strong>05</strong> Event Pipelines <em>p. 34</em></p>
            <p><strong>06</strong> Data Persistence <em>p. 42</em></p>
          </div>
          <div class="col">
            <div class="col-head">PART II: ADVANCED CONCEPTS</div>
            <p><strong>07</strong> Network Proxies <em>p. 55</em></p>
            <p><strong>08</strong> Cloud Tunnels <em>p. 68</em></p>
            <p><strong>09</strong> Security Layers <em>p. 82</em></p>
            <p><strong>10</strong> WebPack Hooks <em>p. 96</em></p>
            <p><strong>11</strong> Lumino Windows <em>p. 110</em></p>
            <p><strong>12</strong> Appendices <em>p. 128</em></p>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .toc-dual { padding: 6px; border: 0.5px solid #d1d5db; background: #ffffff; }
      .toc-dual header h2 { font-size: 5px; text-align: center; margin: 0; font-weight: 800; letter-spacing: 0.5px; color: #111827; }
      .toc-dual header .instructions { font-size: 2.6px; color: #6b7280; text-align: center; margin: 1px 0 5px 0; border-bottom: 0.5px solid #e5e7eb; padding-bottom: 2px; }
      .cols { display: flex; gap: 8px; }
      .col { flex: 1; }
      .col-head { font-size: 3.2px; font-weight: 800; color: #1e40af; border-bottom: 1px solid #bfdbfe; margin-bottom: 3px; padding-bottom: 1px; }
      .col p { font-size: 3.1px; margin: 0 0 2.5px 0; display: flex; justify-content: space-between; border-bottom: 0.5px solid #f3f4f6; padding-bottom: 1px; }
      .col strong { color: #2563eb; width: 6px; }
      .col em { font-style: normal; color: #4b5563; font-weight: 600; }
    `
	},
	{
		id: 'toc-minimalist-sans',
		title: 'Minimalist Swiss TOC',
		styleVariant: 'Swiss Minimal',
		description: 'An understated typographic style using heavy dividers, bold sans-serif titles, and strict grid alignments inspired by Swiss graphic design.',
		htmlContent: `
      <div class="toc-swiss">
        <header class="swiss-head">
          <h1>INDEX</h1>
          <span>SWISS DESIGN SYSTEM / 2026 EDITION</span>
          <p class="usage-note">Template Guide: Edit the text elements inside each <code>.row</code> div. Maintain 3-digit page formatting (e.g. 003, 012) for visual alignment.</p>
        </header>
        <div class="row"><span>01</span><h3>PREAMBLE &amp; MANIFESTO</h3><span>003</span></div>
        <div class="row"><span>02</span><h3>FOUNDATIONAL LAYOUT GRID</h3><span>012</span></div>
        <div class="row"><span>03</span><h3>TYPOGRAPHIC HIERARCHY</h3><span>028</span></div>
        <div class="row"><span>04</span><h3>COLOR THEORY &amp; CONTRAST</h3><span>045</span></div>
        <div class="row"><span>05</span><h3>SYSTEM COMPONENT LIBRARY</h3><span>062</span></div>
        <div class="row"><span>06</span><h3>RESPONSIVE BREAKPOINTS</h3><span>089</span></div>
        <div class="row"><span>07</span><h3>ACCESSIBILITY STANDARDS</h3><span>114</span></div>
        <div class="row"><span>08</span><h3>DOCUMENTATION &amp; EXPORTS</h3><span>130</span></div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Arial, sans-serif; box-sizing: border-box; }
      .toc-swiss { padding: 8px; background: #ffffff; color: #000000; }
      .swiss-head { border-bottom: 2px solid #000000; padding-bottom: 3px; margin-bottom: 4px; }
      .swiss-head h1 { font-size: 8px; font-weight: 900; margin: 0; letter-spacing: -0.3px; }
      .swiss-head span { font-size: 2.8px; font-weight: 700; color: #dc2626; letter-spacing: 0.5px; display: block; }
      .swiss-head .usage-note { font-size: 2.5px; color: #4b5563; margin: 2px 0 0 0; font-weight: 400; line-height: 1.3; }
      .row { display: flex; justify-content: space-between; align-items: center; border-bottom: 0.8px solid #000000; padding: 3px 0; }
      .row span { font-size: 3.2px; font-weight: 800; color: #4b5563; }
      .row h3 { font-size: 3.8px; font-weight: 900; margin: 0; letter-spacing: 0.3px; flex: 1; padding: 0 6px; }
    `
	},
	{
		id: 'toc-thumbnail-preview',
		title: 'Visual thumbnail TOC',
		styleVariant: 'Image Previews',
		description: 'A image-first table of contents ideal for visual art books, photography portfolios, and design showcases.',
		htmlContent: `
      <div class="toc-thumbs">
        <header class="thumb-head">
          <h2>VISUAL CATALOG</h2>
          <p class="usage">Instructions: Replace <code>.img-ph</code> placeholder text with HTML <code>&lt;img&gt;</code> tags or visual elements for portfolio previews.</p>
        </header>
        <div class="thumb-grid">
          <div class="item">
            <div class="img-ph">LANDSCAPE</div>
            <div class="meta"><h4>01. MOUNTAIN SCAPES</h4><p>Page 14 &bull; 12 Plates</p></div>
          </div>
          <div class="item">
            <div class="img-ph">ARCH</div>
            <div class="meta"><h4>02. URBAN STRUCTURES</h4><p>Page 28 &bull; 8 Plates</p></div>
          </div>
          <div class="item">
            <div class="img-ph">PORTRAIT</div>
            <div class="meta"><h4>03. STUDIO PORTRAITS</h4><p>Page 42 &bull; 15 Plates</p></div>
          </div>
          <div class="item">
            <div class="img-ph">MACRO</div>
            <div class="meta"><h4>04. NATURE &amp; TEXTURE</h4><p>Page 58 &bull; 20 Plates</p></div>
          </div>
          <div class="item">
            <div class="img-ph">ABSTRACT</div>
            <div class="meta"><h4>05. DIGITAL PATTERNS</h4><p>Page 74 &bull; 10 Plates</p></div>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .toc-thumbs { padding: 6px; background: #ffffff; }
      .thumb-head h2 { font-size: 5px; font-weight: 800; margin: 0; color: #0f172a; }
      .thumb-head .usage { font-size: 2.6px; color: #64748b; margin: 1px 0 5px 0; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 2px; }
      .thumb-grid { display: flex; flex-direction: column; gap: 3.5px; }
      .item { display: flex; gap: 5px; align-items: center; background: #f8fafc; padding: 3px; border: 0.5px solid #e2e8f0; border-radius: 1px; }
      .img-ph { width: 18px; height: 12px; background: #334155; font-size: 2.2px; font-weight: bold; display: flex; align-items: center; justify-content: center; color: #f8fafc; flex-shrink: 0; border-radius: 1px; }
      .meta h4 { font-size: 3.5px; margin: 0 0 1px 0; color: #0f172a; font-weight: 700; }
      .meta p { font-size: 2.6px; color: #64748b; margin: 0; }
    `
	},
	{
		id: 'toc-chapter-summary-blocks',
		title: 'Expanded synopsis TOC',
		styleVariant: 'Expanded Synopsis',
		description: 'A detailed literary chapter index pairing formal titles with italicized narrative synopses and key topic bullet points.',
		htmlContent: `
      <div class="toc-synopsis">
        <header class="syn-head">
          <h2>CHAPTER SYNOPSES</h2>
          <p class="usage-instructions">Usage: Replace the paragraph text with descriptive narrative summaries for each chapter or case study.</p>
        </header>

        <div class="ch-block">
          <div class="hdr"><span>CHAPTER ONE: THE ARCHITECTURAL IGNITION</span> <strong>P. 1</strong></div>
          <p>An examination of early structural paradigms, legacy monolithic traps, and the core motivation for decoupled web architectures.</p>
        </div>

        <div class="ch-block">
          <div class="hdr"><span>CHAPTER TWO: PROTOCOLS AND ASYNCHRONY</span> <strong>P. 24</strong></div>
          <p>Exploring non-blocking event loops, WebSocket protocol handshakes, and low-latency client-worker proxies.</p>
        </div>

        <div class="ch-block">
          <div class="hdr"><span>CHAPTER THREE: EDGE ROUTING &amp; CLOUDFLARE</span> <strong>P. 58</strong></div>
          <p>Analyzing double reverse proxy setups, custom CNAME subdomain generation, and secure edge tunnel management.</p>
        </div>

        <div class="ch-block">
          <div class="hdr"><span>CHAPTER FOUR: PRODUCTIVITY AND WORKFLOWS</span> <strong>P. 92</strong></div>
          <p>Implementing low-effort mental workload management strategies to streamline software execution and task tracking.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; }
      .toc-synopsis { padding: 6px; background: #fffbf5; }
      .syn-head h2 { font-size: 5.5px; font-weight: bold; margin: 0; color: #78350f; border-bottom: 1px solid #fde68a; padding-bottom: 2px; }
      .syn-head .usage-instructions { font-size: 2.6px; color: #92400e; margin: 1px 0 6px 0; font-family: system-ui, sans-serif; line-height: 1.3; }
      .ch-block { border-left: 1.5px solid #b45309; padding-left: 5px; margin-bottom: 5px; }
      .hdr { display: flex; justify-content: space-between; font-size: 3.5px; font-weight: bold; color: #78350f; }
      .hdr strong { font-family: ui-monospace, monospace; color: #b45309; }
      .ch-block p { font-size: 2.9px; color: #451a03; margin: 1.5px 0 0 0; font-style: italic; line-height: 1.35; }
    `
	},
	{
		id: 'toc-numbered-index-banner',
		title: 'Banner header TOC',
		styleVariant: 'Header Banner',
		description: 'A modern corporate or report index framed by a dark navy title banner and dashed item separators.',
		htmlContent: `
      <div class="toc-banner">
        <div class="top-bar">DOCUMENT TABLE OF CONTENTS</div>
        <div class="guide-text">Usage Instructions: Customize the top banner title. Duplicate <code>.line</code> items to expand the table of contents list.</div>
        <div class="list">
          <div class="line"><span>01 &bull; EXECUTIVE SUMMARY &amp; OBJECTIVES</span><em>PAGE 03</em></div>
          <div class="line"><span>02 &bull; SYSTEM ARCHITECTURE OVERVIEW</span><em>PAGE 12</em></div>
          <div class="line"><span>03 &bull; CLOUDFLARE TUNNEL CONFIGURATION</span><em>PAGE 28</em></div>
          <div class="line"><span>04 &bull; WEBSOCKET &amp; SOCKS5 PROXY PIPELINES</span><em>PAGE 45</em></div>
          <div class="line"><span>05 &bull; LUMINO FRONTEND LAYOUT INTEGRATION</span><em>PAGE 62</em></div>
          <div class="line"><span>06 &bull; PERFORMANCE BENCHMARKS &amp; METRICS</span><em>PAGE 84</em></div>
          <div class="line"><span>07 &bull; SECURITY &amp; COMPLIANCE AUDITS</span><em>PAGE 102</em></div>
          <div class="line"><span>08 &bull; APPENDIX A: ERROR CODE GLOSSARY</span><em>PAGE 120</em></div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .toc-banner { border: 1px solid #1e3a8a; background: #ffffff; }
      .top-bar { background: #1e3a8a; color: #ffffff; font-size: 4.5px; font-weight: 800; padding: 3px 6px; text-align: center; letter-spacing: 0.5px; }
      .guide-text { font-size: 2.5px; color: #475569; background: #eff6ff; padding: 2px 6px; border-bottom: 0.5px solid #bfdbfe; line-height: 1.3; }
      .list { padding: 6px; display: flex; flex-direction: column; gap: 2px; }
      .line { display: flex; justify-content: space-between; font-size: 3.2px; font-weight: 600; color: #1e293b; border-bottom: 0.5px dashed #93c5fd; padding: 2.5px 0; }
      .line span { letter-spacing: 0.2px; }
      .line em { font-style: normal; color: #1e3a8a; font-weight: 800; font-family: ui-monospace, monospace; }
    `
	}
];

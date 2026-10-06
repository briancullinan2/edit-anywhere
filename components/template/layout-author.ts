
import type { ITemplateItem } from "./template";

export const AUTHOR_LAYOUT_TEMPLATES: ITemplateItem[] = [
	// =========================================================================
	// FRONT MATTER & LEGAL / RELEASE TEXT
	// =========================================================================
	{
		id: 'frontmatter-copyright-page',
		title: 'Copyright & Edition Notice Block',
		styleVariant: 'Legal Front Matter',
		description: 'Standard publisher copyright page for technical monographs. Place on the verso of the title page. Contains edition, ISBN, CIP data, rights reservation, and printing control string. Use exactly as shown for legal completeness.',
		htmlContent: `
      <div class="pub-copyright">
        <p class="title-line"><strong>ADVANCED SYSTEMS ARCHITECTURE</strong></p>
        <p class="subtitle">A Practical Guide to Distributed Hyperstructures, Edge Proxies & Browser-Native Orchestration</p>
        <p>Copyright &copy; 2026 by Pryor Press Publishing House, LLC. All rights reserved.</p>
        <p>Printed in the United States of America. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without the prior written permission of the publisher, except for brief quotations used in critical reviews.</p>
        <div class="legal-details">
          <p><strong>First Edition:</strong> October 2026</p>
          <p><strong>ISBN-13:</strong> 978-0-123456-78-9</p>
          <p><strong>ISBN-10:</strong> 0-123456-78-X</p>
          <p><strong>Library of Congress Control Number:</strong> 2026901234</p>
          <p><strong>Cataloging-in-Publication Data</strong> available from the publisher upon request.</p>
        </div>
        <p class="usage">This block is the formal legal front-matter required for every printed or digital edition. Insert it immediately after the title page. Do not alter the rights reservation language without legal review. The descending numeral string at the bottom is the printer’s control line and must remain sequential.</p>
        <p class="printer-string">10 9 8 7 6 5 4 3 2 1</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 6px; }
      .title-line { font-size: medium; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; color: #0f172a; margin: 0 0 2px 0; }
      .subtitle { font-size: small; color: #475569; margin: 0 0 4px 0; line-height: 1.3; }
      p { font-size: small; color: #334155; margin: 0 0 3px 0; line-height: 1.35; }
      .legal-details { margin: 5px 0; padding-top: 4px; border-top: 0.5px solid #cbd5e1; }
      .legal-details p { margin: 1px 0; }
      .usage { font-size: small; color: #64748b; font-style: italic; margin-top: 4px; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; }
      .printer-string { font-family: monospace; font-size: small; letter-spacing: 2px; text-align: center; margin-top: 5px; color: #64748b; }
    `
	},
	{
		id: 'frontmatter-dedication-block',
		title: 'Formal Book Dedication',
		styleVariant: 'Front Matter Dedication',
		description: 'Centered, italic dedication page placed after the copyright notice and before the table of contents. Keep the tone personal yet restrained. This template demonstrates both the emotional register expected and the typographic restraint required.',
		htmlContent: `
      <div class="dedication-wrapper">
        <p class="dedication-text">For those who debug at 3 AM,<br>and for Sarah—who makes the quiet hours worthwhile.</p>
        <p class="instruction">This page exists solely to carry a short personal dedication. Center the text vertically and horizontally on an otherwise blank leaf. Use a single short paragraph or two brief lines. Avoid explanatory footnotes or additional matter. The dedication is the first human voice the reader encounters after the legal formalities; treat it with quiet gravity.</p>
      </div>
    `,
		cssContent: `
      * { box-sizing: border-box; padding: 8px; }
      .dedication-wrapper { text-align: center; font-family: Georgia, serif; }
      .dedication-text { font-size: medium; font-style: italic; color: #1e293b; line-height: 1.5; margin: 0 0 6px 0; }
      .instruction { font-size: small; color: #64748b; line-height: 1.35; margin: 0; max-width: 90%; margin-left: auto; margin-right: auto; border-top: 0.5px solid #e2e8f0; padding-top: 4px; }
    `
	},
	{
		id: 'frontmatter-half-title-header',
		title: 'Half-Title Page Display',
		styleVariant: 'Minimalist Front Matter',
		description: 'Ultra-minimal half-title leaf that precedes the full title page. Shows only volume designation and main title. No author, no subtitle, no ornament beyond a single rule. Demonstrates the correct hierarchy for multi-volume technical works.',
		htmlContent: `
      <div class="half-title-block">
        <span class="volume">VOLUME II</span>
        <h1>DISTRIBUTED HYPERSTRUCTURES</h1>
        <div class="rule"></div>
        <p class="note">This is the half-title page. Its sole purpose is to announce the volume number and primary title before the reader reaches the full title page. Omit author name, imprint, and all secondary text. The thin rule below the title is the only permitted ornament. Place this leaf immediately after the endpapers and before the full title page.</p>
      </div>
    `,
		cssContent: `
      * { box-sizing: border-box; text-align: center; padding: 8px; }
      .half-title-block { font-family: Georgia, serif; }
      .volume { font-size: small; letter-spacing: 1px; color: #64748b; font-family: sans-serif; display: block; margin-bottom: 3px; }
      h1 { font-size: medium; letter-spacing: 1.5px; color: #0f172a; margin: 0 0 4px 0; font-weight: 400; }
      .rule { width: 20px; height: 0.5px; background: #94a3b8; margin: 0 auto 6px auto; }
      .note { font-size: small; color: #64748b; line-height: 1.35; margin: 0; max-width: 85%; margin-left: auto; margin-right: auto; }
    `
	},

	// =========================================================================
	// RESEARCH, ANNOTATIONS & FOOTNOTES
	// =========================================================================
	{
		id: 'research-citation-footnote-stack',
		title: 'Academic Footnotes & Citations Stack',
		styleVariant: 'Academic Citation',
		description: 'Bottom-of-page footnote block for scholarly technical monographs. Supports numbered superscripts in the body, primary-source citations, and cross-references. Demonstrates correct hanging-indent style and the proper length for a first-reference note versus a subsequent note.',
		htmlContent: `
      <div class="footnote-stack">
        <hr class="fn-divider" />
        <ol class="fn-list">
          <li id="fn-1">
            <span class="fn-num">1.</span>
            Cullinan, B. J. (2025). <em>State Synchronization via Low-Latency WebSockets</em>. Journal of Systems Architecture, 42(3), 112–129. https://doi.org/10.1016/j.sysarch.2025.03.004. This is the first full citation; subsequent references to the same work may be shortened.
          </li>
          <li id="fn-2">
            <span class="fn-num">2.</span>
            See also Mercer &amp; Vance (2024) for counter-arguments regarding browser loop-back constraints and the practical limits of pure client-side reconciliation.
          </li>
          <li id="fn-3">
            <span class="fn-num">3.</span>
            Place this entire stack at the foot of the page on which the corresponding superscripts appear. Keep each note concise; move extended discussion to endnotes or a separate “Notes” section if length exceeds three lines.
          </li>
        </ol>
        <p class="instruction">This template is the standard academic footnote apparatus. Number notes consecutively throughout each chapter. Use the short form after the first full citation. The thin rule above the list is mandatory and should never exceed one-quarter page width.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .fn-divider { width: 25%; margin: 0 0 4px 0; border: none; border-top: 0.5px solid #475569; }
      .fn-list { padding-left: 0; margin: 0 0 4px 0; list-style: none; }
      .fn-list li { font-size: small; line-height: 1.3; margin-bottom: 3px; text-indent: -8px; padding-left: 8px; color: #334155; }
      .fn-num { font-weight: 700; margin-right: 2px; }
      .instruction { font-size: small; color: #64748b; font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'research-sidebar-annotation',
		title: 'Marginal Annotation & Commentary',
		styleVariant: 'Marginalia / Sidenote',
		description: 'Narrow margin note intended to sit beside body text. Used for primary-source call-outs, quick definitions, or reader guidance. Demonstrates the correct visual weight and length for a true sidenote rather than a full sidebar.',
		htmlContent: `
      <aside class="sidenote-block">
        <span class="sidenote-label">NOTE 4.2 · PRIMARY SOURCE</span>
        <p>The original RFC 6455 specification was drafted prior to widespread adoption of HTTP/3 stream multiplexing. Consequently many early WebSocket implementations still assume a single bidirectional stream per connection.</p>
        <p class="usage">Place this block in the outer margin aligned with the paragraph it annotates. Keep the text under 40 words. Use the label line to identify the note type (PRIMARY SOURCE, DEFINITION, CAUTION, CROSS-REF). Never let a sidenote exceed the height of the paragraph it comments upon.</p>
      </aside>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 3px; }
      .sidenote-block { border-left: 2px solid #0284c7; padding: 3px 0 3px 5px; background: #f0f9ff; }
      .sidenote-label { font-size: small; font-weight: 800; color: #0369a1; letter-spacing: 0.3px; display: block; margin-bottom: 2px; }
      .sidenote-block p { font-size: small; color: #334155; margin: 0 0 3px 0; line-height: 1.3; }
      .usage { font-size: small; color: #64748b; font-style: italic; margin: 0; border-top: 0.5px solid #bae6fd; padding-top: 2px; }
    `
	},

	// =========================================================================
	// REFERENCE MATERIAL & BIBLIOGRAPHIC DATA
	// =========================================================================
	{
		id: 'reference-bibliography-entry',
		title: 'APA/Chicago Bibliography Block',
		styleVariant: 'Bibliographic Reference',
		description: 'Hanging-indent bibliographic entry for the formal Works Cited or References section. Demonstrates full APA-style citation with DOI and the required hanging indent. Use one entry per work; never combine multiple works in a single block.',
		htmlContent: `
      <div class="biblio-list">
        <div class="biblio-entry">
          <p class="citation">Cullinan, B. J., &amp; Smith, A. R. (2026). <em>Local Directory Tunneling via Cloudflare Edge Networks</em> (2nd ed.). Tech Publishing.</p>
          <span class="doi">https://doi.org/10.1016/j.sysarch.2026.09.001</span>
        </div>
        <p class="instruction">This is a single bibliographic entry. Apply a hanging indent of approximately 0.5 em so that the second and subsequent lines are indented under the first. List entries alphabetically by the first author’s surname. Include the DOI when available; otherwise supply a stable URL. Place the complete list under the heading “References” or “Works Cited” at the end of the volume.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .biblio-entry { margin-bottom: 4px; }
      .citation { font-size: small; margin: 0; line-height: 1.35; color: #0f172a; padding-left: 10px; text-indent: -10px; }
      .doi { font-size: small; color: #2563eb; font-family: monospace; padding-left: 10px; display: block; margin-top: 1px; }
      .instruction { font-size: small; color: #64748b; font-style: italic; margin: 4px 0 0 0; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; line-height: 1.3; }
    `
	},
	{
		id: 'reference-index-quick-finder',
		title: 'Index & Keyword Cross-Reference',
		styleVariant: 'Reference Index Column',
		description: 'Two-column alphabetized index block linking key technical terms to page ranges. Demonstrates correct locator style (single pages, ranges, and multiple locators). Place at the very end of the volume after the bibliography.',
		htmlContent: `
      <div class="index-grid">
        <div class="index-item"><span class="term">Asynchronous I/O</span> <span class="pages">14, 88–92</span></div>
        <div class="index-item"><span class="term">Binary Buffers</span> <span class="pages">104, 210</span></div>
        <div class="index-item"><span class="term">Cloudflare Tunnels</span> <span class="pages">45–51, 302</span></div>
        <div class="index-item"><span class="term">DNS CNAME Records</span> <span class="pages">12, 19</span></div>
        <div class="index-item"><span class="term">Edge Computing</span> <span class="pages">7, 33–38, 201</span></div>
        <div class="index-item"><span class="term">WebSocket Keep-Alive</span> <span class="pages">67, 71–74</span></div>
      </div>
      <p class="instruction">This is the back-of-book index. Alphabetize by main entry. Use an en-dash for page ranges. Separate multiple locators with commas. Sub-entries (if needed) are indented under the main term. The index is the final element of the volume; nothing follows it except blank leaves or the colophon.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .index-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 8px; background: #fafafa; border: 0.5px solid #e5e5e5; padding: 4px; margin-bottom: 4px; }
      .index-item { font-size: small; display: flex; justify-content: space-between; border-bottom: 0.5px dotted #ccc; padding-bottom: 1px; }
      .term { color: #171717; font-weight: 500; }
      .pages { color: #525252; font-family: monospace; }
      .instruction { font-size: small; color: #64748b; font-style: italic; margin: 0; line-height: 1.3; }
    `
	},

	// =========================================================================
	// AUTHOR BIOS, PROFILES & CREDITS
	// =========================================================================
	{
		id: 'author-hero-card-avatar',
		title: 'Author Hero Profile with Avatar',
		styleVariant: 'Hero Profile',
		description: 'Primary author showcase used on the about-the-author page or dust-jacket flap. Includes avatar placeholder, formal title, and a short professional biography. Demonstrates the expected length and tone for a technical monograph author note.',
		htmlContent: `
      <div class="author-hero">
        <div class="avatar-ph">[PHOTO]</div>
        <div class="bio">
          <h3>Brian Cullinan</h3>
          <span class="role">Lead Systems Architect · Pryor Labs</span>
          <p>Brian Cullinan designs high-throughput browser rendering pipelines and local-first WebSocket orchestration systems. He has shipped production edge-proxy stacks for three Fortune-500 engineering platforms and is the principal author of the Lumino layout specification. This volume consolidates five years of production benchmarks and architectural decision records into a single reference.</p>
          <p class="usage">Use this card on the “About the Author” page or the rear dust-jacket flap. Replace the [PHOTO] placeholder with a high-resolution headshot. Keep the biography between 60 and 90 words. The role line should reflect the author’s primary professional identity at the time of publication.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .author-hero { display: flex; gap: 6px; background: #f1f5f9; border: 0.5px solid #cbd5e1; border-radius: 3px; }
      .avatar-ph { width: 28px; height: 28px; background: #94a3b8; color: #fff; font-size: small; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0; }
      .bio h3 { font-size: medium; margin: 0 0 1px 0; color: #0f172a; }
      .bio .role { font-size: small; color: #2563eb; font-weight: 700; display: block; margin-bottom: 3px; }
      .bio p { font-size: small; color: #475569; margin: 0 0 3px 0; line-height: 1.3; }
      .usage { font-size: small; color: #64748b; font-style: italic; border-top: 0.5px solid #e2e8f0; padding-top: 3px; }
    `
	},
	{
		id: 'author-minimal-editorial-footer',
		title: 'Minimalist Editorial Author Bio',
		styleVariant: 'Classic Footer',
		description: 'Short serif author signature placed at the end of a chapter or article. Demonstrates the restrained editorial voice expected in technical journals and monographs.',
		htmlContent: `
      <div class="author-foot">
        <p><strong>ABOUT THE AUTHOR</strong> Brian Cullinan is a systems architect specializing in full-stack network configurations, local-directory streaming, and browser-native orchestration. He currently leads the edge-proxy research group at Pryor Labs. This chapter is adapted from internal decision records originally circulated in 2025.</p>
        <p class="usage">Place this block at the close of a chapter or long-form article. Keep the text under 50 words. The bold label “ABOUT THE AUTHOR” is mandatory; the remainder is set in italic. Do not include contact information or social links in this variant.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .author-foot { border-top: 1px solid #0f172a; padding-top: 4px; }
      .author-foot p { font-size: small; color: #111; font-style: italic; margin: 0 0 3px 0; line-height: 1.35; }
      .author-foot strong { font-style: normal; font-family: system-ui, sans-serif; font-size: small; letter-spacing: 0.4px; }
      .usage { font-size: small; color: #64748b; font-style: italic; border-top: 0.5px dashed #e2e8f0; padding-top: 3px; }
    `
	},
	{
		id: 'author-sidebar-mini-badge',
		title: 'Sidebar Mini Author Badge',
		styleVariant: 'Sidebar Badge',
		description: 'Compact dark badge for secondary columns or floating sidebars. Identifies the author of the adjacent content without interrupting reading flow. Demonstrates the correct visual weight for a non-intrusive credit.',
		htmlContent: `
      <aside class="author-badge">
        <div class="icon">👤</div>
        <h4>WRITTEN BY</h4>
        <p>B. Cullinan</p>
        <span class="note">Use this badge in sidebars or secondary columns only. Keep the name abbreviated. Do not expand into a full biography here; link to the main About page if further detail is required.</span>
      </aside>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .author-badge { background: #0f172a; color: #fff; text-align: center; border-radius: 3px; }
      .icon { font-size: medium; line-height: 1; margin-bottom: 2px; }
      .author-badge h4 { font-size: small; color: #94a3b8; letter-spacing: 0.5px; margin: 0 0 1px 0; }
      .author-badge p { font-size: medium; font-weight: 700; color: #38bdf8; margin: 0 0 3px 0; }
      .note { font-size: small; color: #64748b; display: block; line-height: 1.25; border-top: 0.5px solid #334155; padding-top: 3px; }
    `
	},
	{
		id: 'author-academic-credentials',
		title: 'Academic Contributor Block',
		styleVariant: 'Academic Credentials',
		description: 'Formal academic affiliation block for multi-author scholarly volumes. Lists degree, department, and research focus. Demonstrates the correct hierarchy and length for a contributor note in a technical proceedings or monograph.',
		htmlContent: `
      <div class="academic-author">
        <h3>Dr. Alex Mercer, PhD</h3>
        <p class="affil">Department of Computer Science · Quantum Labs</p>
        <p class="summary">Author of more than forty peer-reviewed papers on distributed state reconciliation, edge-proxy topology, and browser-native concurrency models. Principal investigator for the 2024–2026 NSF grant on low-latency client-side orchestration.</p>
        <p class="usage">Place one block per academic contributor on the Contributors page. Order alphabetically by surname or by chapter order as preferred by the series editor. Keep the summary under 60 words. The left border is the visual signature of this variant and must not be removed.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 5px; background: #fff; border-left: 2px solid #1e3a8a; }
      h3 { font-size: medium; color: #1e3a8a; margin: 0 0 1px 0; }
      .affil { font-size: small; font-weight: 700; color: #64748b; margin: 0 0 3px 0; }
      .summary { font-size: small; color: #334155; margin: 0 0 3px 0; line-height: 1.3; }
      .usage { font-size: small; color: #64748b; font-style: italic; margin: 0; border-top: 0.5px solid #e2e8f0; padding-top: 3px; line-height: 1.3; }
    `
	},
	{
		id: 'author-dual-coauthors',
		title: 'Dual Co-Authors Side-by-Side',
		styleVariant: 'Co-Authors Grid',
		description: 'Equal-weight two-column block for joint primary authors. Demonstrates balanced visual hierarchy when two individuals share equal credit. Use only when both authors are principal; otherwise prefer the multi-contributor grid.',
		htmlContent: `
      <div class="co-authors">
        <div class="col">
          <strong>J. Doe</strong>
          <span>Frontend Lead · Lumino Core</span>
          <p>Responsible for the window-manager specification and the public TypeScript API surface.</p>
        </div>
        <div class="col">
          <strong>S. Smith</strong>
          <span>Backend Engineer · Edge Proxies</span>
          <p>Designed the Cloudflare tunnel orchestration layer and the SOCKS5 integration path.</p>
        </div>
      </div>
      <p class="instruction">This template is reserved for two co-equal primary authors. Keep role lines parallel in structure. The short paragraph under each name should describe that author’s specific contribution to the present volume. Place the block on the title page verso or the Contributors page.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .co-authors { display: flex; gap: 4px; margin-bottom: 4px; }
      .col { flex: 1; background: #f8fafc; border: 0.5px solid #e2e8f0; padding: 4px; border-radius: 2px; }
      .col strong { font-size: medium; display: block; color: #0f172a; margin-bottom: 1px; }
      .col span { font-size: small; color: #2563eb; font-weight: 600; display: block; margin-bottom: 2px; }
      .col p { font-size: small; color: #475569; margin: 0; line-height: 1.25; }
      .instruction { font-size: small; color: #64748b; font-style: italic; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'author-social-links-card',
		title: 'Author Card with Social Handles',
		styleVariant: 'Social Card',
		description: 'Dark monospace developer card listing professional identity and public repository handles. Intended for digital editions and companion websites. Demonstrates the correct brevity and visual language for a technical-audience credit.',
		htmlContent: `
      <div class="social-author">
        <h4>Brian Cullinan</h4>
        <p>Web Developer &amp; LLM Systems Engineer</p>
        <div class="handles">github.com/briancullinan · @bcullinan</div>
        <p class="usage">Use this card on digital companion pages or in the colophon of electronic editions. Keep the handle list to a single line. Do not include personal email addresses. The dark background signals that this is a developer-facing rather than a general-reader credit.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 5px; background: #18181b; color: #fff; border-radius: 3px; }
      h4 { font-size: medium; color: #e4e4e7; margin: 0 0 1px 0; }
      p { font-size: small; color: #a1a1aa; margin: 0 0 3px 0; }
      .handles { font-size: small; color: #22c55e; font-family: monospace; margin-bottom: 4px; }
      .usage { font-size: small; color: #71717a; font-style: italic; border-top: 0.5px solid #3f3f46; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'author-book-jacket-flap',
		title: 'Book Jacket Flap Bio',
		styleVariant: 'Jacket Flap',
		description: 'Classic dust-jacket flap biography with decorative drop capital. Demonstrates the warm, slightly literary register expected on the physical jacket of a technical trade book.',
		htmlContent: `
      <div class="jacket-bio">
        <p class="drop">B</p>
        <div class="text">
          <p>rian Cullinan lives in Arizona, where he designs custom server-orchestration systems and local-first developer tooling. He previously led the edge-proxy team at a major cloud provider and is the originator of the Lumino window-layout specification. When not writing code or documentation he can usually be found walking desert trails with a notebook full of half-finished protocol diagrams.</p>
          <p class="usage">This text appears on the front or rear flap of the physical dust jacket. The drop capital is traditional; keep the total length under 100 words. The tone may be slightly more personal than the formal “About the Author” page inside the volume.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 5px; background: #fdf6e3; }
      .jacket-bio { display: flex; gap: 3px; }
      .drop { font-size: large; font-weight: 700; color: #b58900; line-height: 0.85; margin: 0; flex-shrink: 0; }
      .text p { font-size: small; color: #657b83; margin: 0 0 3px 0; line-height: 1.35; }
      .usage { font-size: small; color: #93a1a1; font-style: italic; border-top: 0.5px solid #eee8d5; padding-top: 3px; }
    `
	},
	{
		id: 'author-quote-banner',
		title: 'Author Statement Banner',
		styleVariant: 'Statement Banner',
		description: 'Full-width accent banner carrying a single author quotation or mission statement. Demonstrates the correct brevity and visual weight for a chapter-opening or section-divider quote.',
		htmlContent: `
      <div class="author-quote">
        <p>“Building software is about transforming complexity into clarity—one deterministic boundary at a time.”</p>
        <span>— Brian Cullinan, Preface</span>
        <p class="usage">Use this banner to open a major section or to close a chapter. Limit the quotation to one or two short sentences. The attribution line must include the source (Preface, Chapter title, or interview date). The banner is decorative; do not place critical instructional content inside it.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 6px; background: #0284c7; color: #fff; text-align: center; border-radius: 2px; }
      p { font-size: medium; font-style: italic; margin: 0 0 3px 0; line-height: 1.35; }
      span { font-size: small; font-weight: 700; text-transform: uppercase; letter-spacing: 0.4px; display: block; margin-bottom: 4px; }
      .usage { font-size: small; color: #bae6fd; font-style: normal; margin: 0; border-top: 0.5px solid rgba(255,255,255,0.25); padding-top: 3px; line-height: 1.3; }
    `
	},
	{
		id: 'author-compact-byline-avatar',
		title: 'Compact Article Byline',
		styleVariant: 'Compact Byline',
		description: 'Single-line article byline with live-status indicator. Used at the head of short technical articles, blog posts, or documentation pages. Demonstrates the minimal metadata required for digital publication.',
		htmlContent: `
      <div class="byline">
        <div class="dot"></div>
        <span>By <strong>Brian Cullinan</strong> · Systems Architect · 5 October 2026 · 12 min read</span>
      </div>
      <p class="usage">Place this line immediately under the article title. The green dot indicates the author is currently active on the platform; omit it for archival pieces. Keep the metadata to name, role, date, and estimated reading time. Do not expand into a full biography.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 3px; }
      .byline { display: flex; align-items: center; gap: 4px; font-size: small; color: #64748b; margin-bottom: 3px; }
      .dot { width: 6px; height: 6px; background: #16a34a; border-radius: 50%; flex-shrink: 0; }
      strong { color: #0f172a; }
      .usage { font-size: small; color: #94a3b8; font-style: italic; margin: 0; line-height: 1.3; }
    `
	},
	{
		id: 'author-team-grid-contributors',
		title: 'Multi-Contributor Grid',
		styleVariant: 'Team Grid',
		description: 'Horizontal grid of secondary contributors, reviewers, or editors. Demonstrates equal visual weight for a list of names that share credit but are not primary authors. Place on the Acknowledgements or Contributors page.',
		htmlContent: `
      <div class="team-grid">
        <div class="member">A. Smith<br><span>Technical Review</span></div>
        <div class="member">B. Cullinan<br><span>Primary Author</span></div>
        <div class="member">C. Jones<br><span>Copy Edit</span></div>
        <div class="member">D. Lee<br><span>Index</span></div>
      </div>
      <p class="instruction">List every secondary contributor who materially improved the manuscript. Keep role labels consistent in length. Order alphabetically or by contribution type. This grid is never used for the primary author; that credit belongs on the title page or the main About block.</p>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .team-grid { display: flex; gap: 3px; margin-bottom: 4px; }
      .member { flex: 1; background: #e2e8f0; font-size: small; text-align: center; padding: 4px 2px; font-weight: 700; color: #334155; border-radius: 2px; line-height: 1.25; }
      .member span { font-weight: 400; color: #64748b; display: block; margin-top: 1px; }
      .instruction { font-size: small; color: #64748b; font-style: italic; margin: 0; line-height: 1.3; }
    `
	},

	// =========================================================================
	// BACK MATTER, PROMOTION & RELEASE DATA
	// =========================================================================
	{
		id: 'backmatter-colophon-block',
		title: 'Typography & Production Colophon',
		styleVariant: 'Colophon Notice',
		description: 'Production colophon describing typefaces, paper, software, and manufacturing details. Demonstrates the traditional closing statement of a carefully produced technical volume. Place on the final printed leaf.',
		htmlContent: `
      <div class="colophon-block">
        <h5>COLOPHON</h5>
        <p>This volume was composed in EB Garamond for the body text and Inter for headings and interface specimens. Page layout was generated with a custom Webpack pipeline and the Lumino window-manager engine. The first printing was produced on 70-lb. natural cream stock at a facility certified to ISO 14001 environmental standards.</p>
        <p class="usage">The colophon is the last textual element of the physical book. It records the production facts that future bibliographers and designers will need. Keep the tone factual and restrained. Include typeface names, software toolchain, paper specification, and any environmental or accessibility certifications.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 6px; }
      .colophon-block { background: #fafafa; border: 0.5px solid #e2e8f0; text-align: center; border-radius: 2px; }
      h5 { font-size: small; letter-spacing: 1px; color: #64748b; margin: 0 0 4px 0; font-weight: 700; }
      p { font-size: small; color: #334155; margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #64748b; font-style: italic; border-top: 0.5px solid #e2e8f0; padding-top: 3px; margin: 0; }
    `
	},
	{
		id: 'backmatter-promo-teaser-card',
		title: 'Related Volume Promotion Teaser',
		styleVariant: 'Publisher Promo Card',
		description: 'Back-of-book promotional card for the author’s next title or related volumes in the series. Demonstrates the correct commercial voice and the required call-to-action elements for a publisher’s catalog insert.',
		htmlContent: `
      <div class="promo-card">
        <span class="badge">ALSO BY THIS AUTHOR</span>
        <h4>BECOMING AN ARCHITECT</h4>
        <p>A field manual for mastering distributed WebSockets, edge-proxy topology, and the practical discipline of turning complex systems into clear, maintainable boundaries. Continues the architectural narrative begun in the present volume.</p>
        <div class="cta">Available Spring 2027 · Pre-order now</div>
        <p class="usage">Place this card on the final right-hand page or on a separate publisher insert. Keep the descriptive paragraph under 50 words. The call-to-action must include both the availability window and a concrete next step (pre-order, catalog link, or ISBN). Do not use this block for the current title.</p>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; box-sizing: border-box; padding: 6px; }
      .promo-card { background: #0f172a; color: #fff; border-radius: 3px; }
      .badge { font-size: small; color: #38bdf8; font-weight: 800; letter-spacing: 0.5px; display: block; margin-bottom: 3px; }
      h4 { font-size: medium; margin: 0 0 3px 0; color: #f8fafc; }
      p { font-size: small; color: #94a3b8; margin: 0 0 4px 0; line-height: 1.3; }
      .cta { font-size: small; font-weight: 700; background: #2563eb; color: #fff; padding: 3px 6px; display: inline-block; border-radius: 2px; margin-bottom: 4px; }
      .usage { font-size: small; color: #64748b; font-style: italic; border-top: 0.5px solid #334155; padding-top: 3px; margin: 0; line-height: 1.3; }
    `
	}
];

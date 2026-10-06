import type { ITemplateItem } from "./template";

export const BACK_PANEL_REVIEWS_TEMPLATES: ITemplateItem[] = [
	{
		id: 'review-star-rating-block',
		title: 'Editorial review with star rating',
		styleVariant: 'Star Review',
		description: 'A classic literary or technical trade editorial snippet complete with five-star emblem rating, bold pull-quotes, and formal publication attribution.',
		htmlContent: `
      <div class="review-block">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <blockquote class="quote">&ldquo;A masterpiece of modern software engineering literature. The definitive manual on distributed systems and client-side architecture for the next decade.&rdquo;</blockquote>
        <div class="reviewer-meta">
          <span class="source">&mdash; Tech Publishing Weekly</span>
          <span class="reviewer-title">Featured Lead Review</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; }
      .review-block { background: var(--ace-bg, #fffcf8); border-top: 2px solid #ea580c; border-bottom: 2px solid #ea580c; padding: 12px 16px; margin: 8px 0; }
      .stars { color: #f59e0b; font-size: medium; margin-bottom: 6px; letter-spacing: 2px; }
      .quote { font-size: medium; color: var(--ace-foreground, #431407); margin: 0 0 8px 0; font-style: italic; line-height: 1.4; }
      .reviewer-meta { display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid #fed7aa; padding-top: 6px; }
      .source { font-size: small; font-family: system-ui, sans-serif; font-weight: bold; color: #ea580c; }
      .reviewer-title { font-size: small; font-family: system-ui, sans-serif; color: var(--ace-pink, #9a3412); font-style: normal; }
    `
	},
	{
		id: 'blurb-press-quotes-stack',
		title: 'Stacked press blurbs',
		styleVariant: 'Press Stack',
		description: 'A stacked series of high-impact quotes from major trade periodicals, designed for prominent back cover placement.',
		htmlContent: `
      <div class="press-stack">
        <div class="stack-header">CRITICAL ACCLAIM</div>
        <div class="quote-item">
          <p>&ldquo;Brilliant code execution combined with clear, engaging technical prose. A rare triumph.&rdquo;</p>
          <span class="publication">&mdash; Code Magazine International</span>
        </div>
        <div class="quote-item">
          <p>&ldquo;Fast, lightweight, and wildly practical. Mandatory reading for every senior engineer.&rdquo;</p>
          <span class="publication">&mdash; Modern Developer Review</span>
        </div>
        <div class="quote-item">
          <p>&ldquo;Unpacks complex browser performance patterns with effortless grace and precision.&rdquo;</p>
          <span class="publication">&mdash; Software Architecture Journal</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 0; margin: 0; }
      .press-stack { background: var(--ace-bg, #f8fafc); padding: 14px; border-left: 3px solid #0284c7; }
      .stack-header { font-size: small; font-weight: 800; letter-spacing: 1.5px; color: var(--ace-blue, #0284c7); margin-bottom: 10px; text-transform: uppercase; }
      .quote-item { border-bottom: 0.5px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 8px; }
      .quote-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
      .quote-item p { font-size: small; font-style: italic; color: var(--ace-foreground, #0f172a); margin-bottom: 4px; line-height: 1.35; }
      .quote-item .publication { font-size: small; font-weight: 600; color: var(--ace-comment, #64748b); font-style: normal; }
    `
	},
	{
		id: 'backpanel-isbn-barcode-block',
		title: 'Back panel barcode & publisher mark',
		styleVariant: 'ISBN Barcode',
		description: 'Authentic publisher colophon mark paired with standard EAN/ISBN barcode layout block for print publication covers.',
		htmlContent: `
      <div class="back-bar">
        <div class="pub-mark">
          <span class="logo">&#9670;</span>
          <span class="publisher-name">LUMINO PRESS CHICAGO</span>
        </div>
        <div class="barcode-container">
          <div class="barcode-lines">||| | ||||| |||| || |||||| | ||||| |||| |</div>
          <div class="isbn-numbers">ISBN 978-0-123456-78-9</div>
        </div>
        <div class="price-tag">US $29.99 / CAN $38.99</div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Courier New', Courier, monospace; box-sizing: border-box; text-align: center; }
      .back-bar { background: var(--ace-bg, #ffffff); border: 1px solid #1e293b; padding: 10px; color: var(--ace-foreground, #0f172a); }
      .pub-mark { font-size: small; font-weight: bold; margin-bottom: 8px; letter-spacing: 1px; }
      .logo { color: var(--ace-blue, #0284c7); margin-right: 4px; font-size: medium; }
      .barcode-container { background: var(--ace-bg, #ffffff); border: 0.5px solid #cbd5e1; padding: 6px; display: inline-block; margin-bottom: 4px; }
      .barcode-lines { font-size: large; font-weight: 900; letter-spacing: 2px; color: var(--ace-foreground, #000000); font-family: monospace; }
      .isbn-numbers { font-size: small; color: var(--ace-foreground, #1e293b); margin-top: 2px; font-weight: 600; }
      .price-tag { font-size: small; font-family: system-ui, sans-serif; color: var(--ace-comment, #64748b); margin-top: 4px; }
    `
	},
	{
		id: 'review-praise-grid-2x2',
		title: '2x2 Praise grid',
		styleVariant: '2x2 Grid',
		description: 'A compact 2x2 grid highlighting high-impact single-word or short sentence praise quotes from prominent critics.',
		htmlContent: `
      <div class="praise-grid">
        <div class="grid-title">WHAT CRITICS ARE SAYING</div>
        <div class="grid-body">
          <div class="cell">
            <span class="quote">&ldquo;An absolute masterpiece.&rdquo;</span>
            <span class="author">&mdash; London Tech Review</span>
          </div>
          <div class="cell">
            <span class="quote">&ldquo;Unstoppable innovation.&rdquo;</span>
            <span class="author">&mdash; Silicon Digest</span>
          </div>
          <div class="cell">
            <span class="quote">&ldquo;Essential reading for all.&rdquo;</span>
            <span class="author">&mdash; Frontend Monthly</span>
          </div>
          <div class="cell">
            <span class="quote">&ldquo;Redefines the domain.&rdquo;</span>
            <span class="author">&mdash; Computing Today</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .praise-grid { background: var(--ace-foreground, #0f172a); padding: 12px; border-radius: 4px; }
      .grid-title { font-size: small; font-weight: 700; color: var(--ace-blue, #38bdf8); text-align: center; margin-bottom: 10px; letter-spacing: 1px; }
      .grid-body { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .cell { background: var(--ace-foreground, #1e293b); border: 0.5px solid #334155; padding: 8px; border-radius: 3px; display: flex; flex-direction: column; justify-content: center; text-align: center; }
      .quote { color: var(--ace-bg, #f8fafc); font-size: small; font-style: italic; margin-bottom: 4px; }
      .author { color: var(--ace-comment, #94a3b8); font-size: small; font-weight: 500; }
    `
	},
	{
		id: 'blurb-author-endorsement',
		title: 'Prominent author endorsement',
		styleVariant: 'Author Endorsement',
		description: 'High-profile endorsement banner highlighting a major recommendation quote from a bestselling author in the field.',
		htmlContent: `
      <div class="endorse">
        <div class="endorse-badge">BESTSELLING AUTHOR PRAISE</div>
        <p>&ldquo;I simply couldn't put it down. This work fundamentally changes everything we thought we knew about high-throughput web applications and local browser architectures.&rdquo;</p>
        <div class="author-info">
          <span class="author-name">&mdash; Dr. Jane Doe</span>
          <span class="author-cred">Author of <em>Modern Web Architecture</em> and <em>High-Performance Systems</em></span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; }
      .endorse { background: var(--ace-bg, #eff6ff); border-left: 4px solid #2563eb; padding: 14px; margin: 6px 0; }
      .endorse-badge { font-family: system-ui, sans-serif; font-size: small; font-weight: 800; color: var(--ace-blue, #1d4ed8); letter-spacing: 1px; margin-bottom: 6px; }
      p { font-size: medium; color: var(--ace-blue, #1e3a8a); margin: 0 0 10px 0; font-style: italic; line-height: 1.45; }
      .author-info { display: flex; flex-direction: column; }
      .author-name { font-size: small; font-family: system-ui, sans-serif; font-weight: bold; color: var(--ace-blue, #1d4ed8); }
      .author-cred { font-size: small; font-family: system-ui, sans-serif; color: var(--ace-blue, #3b82f6); font-style: normal; margin-top: 1px; }
    `
	},
	{
		id: 'backpanel-synopsis-summary',
		title: 'Back panel book synopsis',
		styleVariant: 'Back Synopsis',
		description: 'Deep-dive book jacket blurb complete with high-concept hook, overview narrative, and key bullet points for prospective readers.',
		htmlContent: `
      <div class="back-synopsis">
        <div class="synopsis-header">
          <span class="genre-tag">COMPUTING / WEB SYSTEMS</span>
          <h2>WHAT LIES WITHIN</h2>
        </div>
        <p class="lead-in">Unlock the secrets of building resilient, concurrent frontend architectures operating directly within browser tabs.</p>
        <p class="body-text">In this groundbreaking work, industry veteran Alex Vance demystifies web workers, memory isolation, and high-frequency messaging pipelines. Whether you are scaling real-time collaboration suites or building offline-first enterprise applications, this guide offers actionable blueprints for modern engineers.</p>
        <ul class="takeaways">
          <li>Master multi-threaded Javascript execution</li>
          <li>Optimize memory allocation and garbage collection</li>
          <li>Design self-healing browser service topologies</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .back-synopsis { background: var(--ace-foreground, #1e293b); color: var(--ace-bg, #ffffff); padding: 16px; border-radius: 4px; }
      .synopsis-header { margin-bottom: 8px; }
      .genre-tag { font-size: small; font-weight: 700; color: #f59e0b; letter-spacing: 1px; display: block; margin-bottom: 2px; }
      h2 { font-size: large; color: var(--ace-bg, #ffffff); margin: 0; font-weight: 800; letter-spacing: 0.5px; }
      .lead-in { font-size: medium; color: var(--ace-bg, #e2e8f0); font-weight: 600; margin: 8px 0; line-height: 1.35; border-bottom: 0.5px solid #475569; padding-bottom: 8px; }
      .body-text { font-size: small; color: var(--ace-bg, #cbd5e1); margin-bottom: 10px; line-height: 1.4; }
      .takeaways { margin: 0; padding-left: 16px; color: var(--ace-comment, #94a3b8); font-size: small; line-height: 1.4; }
      .takeaways li { margin-bottom: 3px; }
    `
	},
	{
		id: 'review-badge-highlight',
		title: 'Award badge callout',
		styleVariant: 'Award Badge',
		description: 'An elegant award emblem layout celebrating industry honors, literary awards, or annual publishing triumphs.',
		htmlContent: `
      <div class="award-block">
        <div class="wreath-icon">&#127894;</div>
        <div class="badge-content">
          <span class="award-title">WINNER</span>
          <span class="award-sub">NATIONAL TECHNOLOGY PUBLICATION AWARD</span>
          <p class="award-desc">Recognized for Outstanding Technical Literature & Industry Impact</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; text-align: center; }
      .award-block { background: var(--ace-bg, #fefce8); border: 1px solid #fef08a; padding: 14px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .wreath-icon { font-size: x-large; color: #ca8a04; margin-bottom: 4px; }
      .badge-content { display: flex; flex-direction: column; align-items: center; }
      .award-title { font-family: system-ui, sans-serif; font-size: medium; font-weight: 900; color: #854d0e; letter-spacing: 2px; }
      .award-sub { font-family: system-ui, sans-serif; font-size: small; font-weight: 700; color: #a16207; margin: 2px 0; letter-spacing: 0.5px; }
      .award-desc { font-size: small; color: #713f12; margin-top: 4px; font-style: italic; }
    `
	},
	{
		id: 'blurb-reader-testimonial-slider',
		title: 'Reader testimonial card',
		styleVariant: 'Testimonial Card',
		description: 'Authentic reader and practitioner feedback block featuring community quotes and verified handles.',
		htmlContent: `
      <div class="test-card">
        <div class="card-header">
          <span class="verified-tag">&#10003; VERIFIED PRACTITIONER</span>
          <span class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p>&ldquo;Finally! Solves my engineering team's daily Webpack build and memory leak headaches. We refactored our core infrastructure in two days using Chapter 4.&rdquo;</p>
        <div class="user-meta">
          <span class="user-name">Marcus Chen</span>
          <span class="user-handle">Principal Engineer @dev_user99</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .test-card { background: var(--ace-bg, #f1f5f9); border: 0.5px solid #cbd5e1; border-radius: 6px; padding: 12px; }
      .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
      .verified-tag { font-size: small; font-weight: 700; color: #166534; background: var(--ace-bg, #dcfce7); padding: 2px 6px; border-radius: 4px; }
      .rating { color: #eab308; font-size: small; }
      p { font-size: small; color: var(--ace-foreground, #334155); margin: 0 0 8px 0; line-height: 1.4; font-style: italic; }
      .user-meta { display: flex; flex-direction: column; }
      .user-name { font-size: small; font-weight: bold; color: var(--ace-foreground, #0f172a); }
      .user-handle { font-size: small; color: var(--ace-blue, #0284c7); }
    `
	},
	{
		id: 'backpanel-publisher-colophon',
		title: 'Publisher colophon block',
		styleVariant: 'Colophon Block',
		description: 'Traditional publishing colophon noting typeface selection, paper archival qualities, and edition printing credits.',
		htmlContent: `
      <div class="colophon">
        <div class="colophon-mark">&#9827;</div>
        <p class="credits">Typeset in Georgia and Helvetica Neue. Printed on acid-free 60lb archival stock by Lumino Digital Press, Chicago Offset Division.</p>
        <p class="copyright">&copy; 2026 Lumino Press LLC. All rights reserved.</p>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; box-sizing: border-box; text-align: center; }
      .colophon { padding: 10px; border-top: 0.5px solid #cbd5e1; color: var(--ace-comment, #64748b); margin-top: 10px; }
      .colophon-mark { font-size: medium; color: var(--ace-comment, #475569); margin-bottom: 4px; }
      .credits { font-size: small; font-style: italic; margin-bottom: 4px; line-height: 1.3; }
      .copyright { font-size: small; font-family: system-ui, sans-serif; color: var(--ace-comment, #94a3b8); margin: 0; }
    `
	},
	{
		id: 'review-critic-pull-quote',
		title: 'Large critic pull quote',
		styleVariant: 'Pull Quote',
		description: 'Bold, high-contrast headline banner quote designed to catch immediate visual attention on book displays.',
		htmlContent: `
      <div class="pull-q">
        <span class="quote-mark">&ldquo;</span>
        <h2>UNSTOPPABLE INNOVATION. A DEFINITIVE TRIUMPH FOR MODERN TECH LITERATURE.</h2>
        <div class="critic-tag">&mdash; THE TECH CHRONICLE INTERNATIONAL</div>
      </div>
    `,
		cssContent: `
      * { font-family: 'Helvetica Neue', Arial, sans-serif; box-sizing: border-box; text-align: center; }
      .pull-q { background: var(--ace-pink, #dc2626); color: var(--ace-bg, #ffffff); padding: 16px 12px; border-radius: 4px; position: relative; }
      .quote-mark { font-size: xx-large; line-height: 0.5; font-family: Georgia, serif; display: block; margin-bottom: 8px; opacity: 0.8; }
      h2 { font-size: medium; font-weight: 900; margin: 0 0 8px 0; letter-spacing: 0.5px; line-height: 1.3; text-transform: uppercase; }
      .critic-tag { font-size: small; font-weight: 700; letter-spacing: 1px; color: var(--ace-bg, #fecaca); }
    `
	},
	{
		id: 'author-bio-headshot-card',
		title: 'Author bio with portrait layout',
		styleVariant: 'Author Bio',
		description: 'Featured author profile block complete with portrait image placeholder, background narrative, and professional credentials.',
		htmlContent: `
      <div class="author-card">
        <div class="portrait-column">
          <div class="portrait-placeholder">AV</div>
        </div>
        <div class="bio-column">
          <span class="about-label">ABOUT THE AUTHOR</span>
          <h3>Alex Vance</h3>
          <p>Alex Vance is a lead infrastructure architect who has spent over fifteen years scaling distributed web clients and browser runtimes. A frequent keynote speaker at global frontend summits, Vance lives in Seattle with two golden retrievers.</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .author-card { background: var(--ace-bg, #f8fafc); border: 0.5px solid #e2e8f0; border-radius: 6px; padding: 12px; display: flex; gap: 12px; align-items: flex-start; }
      .portrait-column { flex-shrink: 0; }
      .portrait-placeholder { width: 50px; height: 50px; background: var(--ace-foreground, #334155); color: var(--ace-bg, #ffffff); border-radius: 50%; font-size: medium; font-weight: bold; display: flex; align-items: center; justify-content: center; border: 2px solid #0284c7; }
      .bio-column { flex-grow: 1; }
      .about-label { font-size: small; font-weight: 800; color: var(--ace-blue, #0284c7); letter-spacing: 1px; display: block; margin-bottom: 2px; }
      h3 { font-size: medium; color: var(--ace-foreground, #0f172a); margin: 0 0 4px 0; font-weight: 700; }
      p { font-size: small; color: var(--ace-comment, #475569); margin: 0; line-height: 1.35; }
    `
	},
	{
		id: 'author-other-books-list',
		title: 'Also by this author showcase',
		styleVariant: 'Author Works',
		description: 'A promotional back-jacket catalog section showcasing previous bestselling titles and companion volumes by the author.',
		htmlContent: `
      <div class="other-books">
        <div class="section-title">ALSO BY ALEX VANCE</div>
        <div class="books-grid">
          <div class="book-item">
            <span class="book-title">Building Micro-Frontends</span>
            <span class="book-year">(2023) &bull; Bestseller</span>
          </div>
          <div class="book-item">
            <span class="book-title">Concurrent JS in Practice</span>
            <span class="book-year">(2021) &bull; Tech Choice</span>
          </div>
          <div class="book-item">
            <span class="book-title">The Browser Engine Handbook</span>
            <span class="book-year">(2019) &bull; Classic</span>
          </div>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .other-books { background: var(--ace-bg, #fafaf9); border: 1px solid #e7e5e4; padding: 12px; border-radius: 4px; }
      .section-title { font-family: system-ui, sans-serif; font-size: small; font-weight: 800; color: var(--ace-foreground, #44403c); letter-spacing: 1.5px; text-align: center; margin-bottom: 10px; border-bottom: 0.5px solid #d6d3d1; padding-bottom: 4px; }
      .books-grid { display: flex; flex-direction: column; gap: 6px; }
      .book-item { display: flex; justify-content: space-between; align-items: center; }
      .book-title { font-size: small; font-weight: bold; color: var(--ace-foreground, #1c1917); font-style: italic; }
      .book-year { font-family: system-ui, sans-serif; font-size: small; color: var(--ace-comment, #78716c); }
    `
	},
	{
		id: 'author-q-and-a-snippet',
		title: 'Author Q&A spotlight interview',
		styleVariant: 'Author Q&A',
		description: 'Behind-the-book author interview spotlight sharing key motivation and takeaways directly from the creator.',
		htmlContent: `
      <div class="author-qa">
        <div class="qa-header">AUTHOR SPOTLIGHT</div>
        <div class="qa-item">
          <span class="question">Q: What motivated you to write this book?</span>
          <p class="answer">&ldquo;I saw dozens of engineering teams struggle with browser memory bottlenecks. I wanted to build the practical guide I wished I had five years ago.&rdquo;</p>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .author-qa { background: var(--ace-bg, #f0fdf4); border: 0.5px solid #bbf7d0; padding: 12px; border-radius: 4px; }
      .qa-header { font-size: small; font-weight: 800; color: #166534; letter-spacing: 1px; margin-bottom: 6px; }
      .question { font-size: small; font-weight: 700; color: var(--ace-foreground, #14532d); display: block; margin-bottom: 2px; }
      .answer { font-size: small; color: #166534; font-style: italic; margin: 0; line-height: 1.35; }
    `
	},
	{
		id: 'backpanel-target-audience-callout',
		title: 'Target reader audience checklist',
		styleVariant: 'Target Audience',
		description: 'Clear bulleted jacket criteria detailing precisely who will benefit most from reading this publication.',
		htmlContent: `
      <div class="target-card">
        <div class="card-title">THIS BOOK IS FOR YOU IF:</div>
        <ul class="audience-list">
          <li>&#10004; You engineer complex, single-page web applications.</li>
          <li>&#10004; You want to eliminate browser thread locks and latency.</li>
          <li>&#10004; You need battle-tested architectural design patterns.</li>
        </ul>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; }
      .target-card { background: var(--ace-bg, #fff7ed); border-left: 4px solid #f97316; padding: 12px; }
      .card-title { font-size: small; font-weight: 800; color: var(--ace-pink, #c2410c); letter-spacing: 1px; margin-bottom: 6px; }
      .audience-list { list-style: none; padding: 0; margin: 0; }
      .audience-list li { font-size: small; color: var(--ace-pink, #9a3412); margin-bottom: 4px; font-weight: 500; }
    `
	},
	{
		id: 'blurb-media-feature-logos',
		title: 'As featured in media banner',
		styleVariant: 'Media Feature',
		description: 'High-visibility press banner listing key television, podcast, and magazine feature appearances.',
		htmlContent: `
      <div class="media-banner">
        <span class="banner-label">AS FEATURED IN</span>
        <div class="logo-row">
          <span class="media-logo">TECH CRUNCH</span>
          <span class="bullet">&bull;</span>
          <span class="media-logo">WIRED</span>
          <span class="bullet">&bull;</span>
          <span class="media-logo">THE VERGE</span>
          <span class="bullet">&bull;</span>
          <span class="media-logo">SYNTAX PODCAST</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; text-align: center; }
      .media-banner { background: var(--ace-bg, #ffffff); border: 0.5px solid #e2e8f0; padding: 10px; border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
      .banner-label { font-size: small; font-weight: 800; color: var(--ace-comment, #64748b); letter-spacing: 1.5px; display: block; margin-bottom: 6px; }
      .logo-row { display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap; }
      .media-logo { font-size: small; font-weight: 900; color: var(--ace-foreground, #0f172a); letter-spacing: 0.5px; }
      .bullet { color: var(--ace-bg, #cbd5e1); font-size: small; }
    `
	},
	{
		id: 'author-signature-edition-note',
		title: 'Author note with signature mark',
		styleVariant: 'Author Note',
		description: 'Personal preface note from the author formatted with a signature script mark.',
		htmlContent: `
      <div class="author-note">
        <span class="note-header">A NOTE FROM THE AUTHOR</span>
        <p>&ldquo;Writing this book was a labor of love for the web development community. May these pages empower you to build faster, cleaner, and more resilient software.&rdquo;</p>
        <div class="signature-block">
          <span class="signature">&mdash; Alex Vance</span>
          <span class="location">Seattle, Washington</span>
        </div>
      </div>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; }
      .author-note { background: var(--ace-bg, #fdf4ff); border: 0.5px solid #f0abfc; padding: 14px; border-radius: 4px; }
      .note-header { font-family: system-ui, sans-serif; font-size: small; font-weight: 800; color: var(--ace-purple, #a21caf); letter-spacing: 1px; display: block; margin-bottom: 6px; }
      p { font-size: small; color: #701a75; font-style: italic; margin: 0 0 8px 0; line-height: 1.4; }
      .signature-block { display: flex; flex-direction: column; text-align: right; }
      .signature { font-size: medium; font-weight: bold; color: var(--ace-purple, #86198f); }
      .location { font-size: small; font-family: system-ui, sans-serif; color: var(--ace-bg, #c084fc); font-style: normal; }
    `
	}
];

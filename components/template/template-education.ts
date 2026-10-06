import type { ITemplateItem } from './template';

export const EDUCATION_TEMPLATES: ITemplateItem[] = [
	// 1. Essay - Playful
	{
		id: 'essay-playful',
		title: 'Essay',
		styleVariant: 'Playful',
		description: 'Bright, energetic student essay template with a dashed pink rule, drop-cap opening, and friendly typography. Ideal for middle-school or early high-school creative and literary essays where personality is encouraged.',
		htmlContent: `
      <header class="essay-hdr">
        <span class="type-tag">Essay</span>
        <h1>THE EVOLUTION OF MODERN LITERATURE</h1>
        <p class="author">By Alex Cullinan · English 101 · 24 October 2026</p>
      </header>
      <main class="essay-body">
        <p class="first-p">Literature has long served as a mirror reflecting societal transformations across generations. In this paper we explore how narrative structures adapt when stories move from fixed print pages into interactive digital environments, and what is gained—or lost—in the process.</p>
        <section>
          <h2>I. Historical Context</h2>
          <p>From oral epics to the codex, from mass-market paperbacks to hypertext fiction, every major shift in medium has forced writers to renegotiate the relationship between author, text, and reader. The core thematic concerns—identity, power, memory—remain surprisingly stable even as the delivery format changes.</p>
        </section>
        <section>
          <h2>II. Digital Disruption</h2>
          <p>Hyperlinks, branching narratives, and reader-driven endings challenge the linear authority that print once guaranteed. Yet the best digital literature still relies on the same craft tools: precise language, controlled pacing, and emotional honesty.</p>
        </section>
        <p class="usage">Use the drop-cap only on the opening paragraph. Keep section headings numbered with Roman numerals for a classic essay feel. The pink dashed rule and type-tag signal “student work with personality.”</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', 'Chalkboard SE', cursive, system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .essay-hdr { border-bottom: 2px dashed #ff4081; padding-bottom: 5px; margin-bottom: 6px; text-align: center; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #ff4081; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .essay-hdr h1 { font-size: medium; color: #c2185b; font-weight: 800; margin: 4px 0 2px 0; }
      .author { font-size: small; color: #e91e63; margin: 0; }
      .essay-body h2 { font-size: medium; color: #c2185b; margin: 6px 0 3px 0; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .first-p::first-letter { font-size: large; font-weight: 800; color: #c2185b; float: left; margin-right: 3px; line-height: 0.9; }
      .usage { font-size: small; color: #ad1457; font-style: italic; border-top: 0.5px dashed #f8bbd0; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 2. Essay - Paperback
	{
		id: 'essay-paperback',
		title: 'Essay',
		styleVariant: 'Paperback',
		description: 'Classic literary-essay template with warm serif typography, centered title, and first-line indentation. Evokes a printed paperback page—perfect for literature, philosophy, and humanities courses that value traditional academic presentation.',
		htmlContent: `
      <header class="pb-hdr">
        <span class="type-tag">Essay</span>
        <h1>ON THE NATURE OF NARRATIVE</h1>
        <p class="byline">A. J. CULLINAN</p>
      </header>
      <main class="pb-body">
        <p>The transition from oral tradition to the codex marked a fundamental shift in human cognitive architecture, establishing fixed textual artifacts that could be consulted, contested, and transmitted across generations without the continuous presence of a living narrator.</p>
        <p>Subsequent iterations of print culture further refined reading practices, codifying conventions of syntax, page composition, and thematic organization that still shape how we expect a serious argument to unfold on the page.</p>
        <p>In the digital age those same conventions are both challenged and renewed: hypertext can fracture linearity, yet the most persuasive scholarly essays continue to rely on the disciplined paragraph, the carefully placed citation, and the quiet authority of a well-chosen epigraph.</p>
        <p class="usage">Maintain first-line indentation on every body paragraph. Keep the title in small capitals or light weight. The brown rule and type-tag are the only modern concessions—everything else should feel like a traditional printed essay.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Book Antiqua', Palatino, Georgia, serif; box-sizing: border-box; padding: 4px; }
      .pb-hdr { text-align: center; border-bottom: 1px solid #795548; padding-bottom: 4px; margin-bottom: 8px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #795548; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .pb-hdr h1 { font-size: medium; font-weight: 400; letter-spacing: 0.6px; color: var(--ace-foreground, #3e2723); margin: 4px 0 2px 0; }
      .byline { font-size: small; letter-spacing: 1.2px; color: #5d4037; margin: 0; }
      p { font-size: small; color: var(--ace-foreground, #2b1d0c); text-indent: 12px; line-height: 1.45; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #8d6e63; font-style: italic; text-indent: 0; border-top: 0.5px dashed #d7ccc8; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 3. Report - Simple
	{
		id: 'report-simple',
		title: 'Report',
		styleVariant: 'Simple',
		description: 'Clean, no-nonsense research report template with a blue accent rule and numbered sections. Designed for laboratory write-ups, quarterly research summaries, and any technical report that prioritizes clarity over decoration.',
		htmlContent: `
      <header class="rpt-hdr">
        <span class="type-tag">Report</span>
        <h1>Quarterly Research Overview</h1>
        <p class="sub">Department of Computer Science · Flagstaff Institute · Q3 2026</p>
      </header>
      <main class="rpt-body">
        <section>
          <h2>1. Executive Summary</h2>
          <p>This report presents experimental performance benchmarks for browser-based document scrollers and off-screen canvas rendering passes conducted between July and September 2026. All tests were run on reference hardware under controlled network conditions.</p>
        </section>
        <section>
          <h2>2. Key Metrics</h2>
          <p>• Average sustained frame throughput: 60 FPS<br>
          • Peak DOM memory footprint: 12.4 MB<br>
          • Median time-to-interactive after cold load: 180 ms<br>
          • Zero severity-1 regressions observed</p>
        </section>
        <section>
          <h2>3. Recommendations</h2>
          <p>Continue investment in virtualized scroller pooling and worker-thread measurement passes. A follow-up study on multi-document concurrent rendering is scheduled for Q4.</p>
        </section>
        <p class="usage">Number every major section. Keep the executive summary under 80 words. Metrics should be presented as a compact bullet list so readers can extract numbers in under ten seconds.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .rpt-hdr { border-bottom: 2px solid #1976d2; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #1976d2; color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .rpt-hdr h1 { font-size: medium; font-weight: 800; color: #0d47a1; margin: 4px 0 2px 0; }
      .sub { font-size: small; color: #1565c0; margin: 0; }
      .rpt-body h2 { font-size: medium; color: #1565c0; margin: 6px 0 2px 0; font-weight: 700; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #546e7a; font-style: italic; border-top: 0.5px dashed #bbdefb; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 4. Report - Luxe
	{
		id: 'report-luxe',
		title: 'Report',
		styleVariant: 'Luxe',
		description: 'Prestigious academic symposium report with gold accent rule and formal serif typography. Reserved for annual reviews, keynote proceedings, and high-visibility institutional publications.',
		htmlContent: `
      <header class="luxe-hdr">
        <span class="type-tag">Report</span>
        <div class="gold-accent"></div>
        <h1>ANNUAL ACADEMIC SYMPOSIUM</h1>
        <p class="tagline">INSTITUTE FOR ADVANCED COMPUTING · 2026 PROCEEDINGS</p>
      </header>
      <main class="luxe-body">
        <section class="lead-box">
          <p><strong>ABSTRACT.</strong> A comprehensive evaluation of modern web-document architectures, focusing on memory isolation, layout virtualization, and the practical limits of single-threaded rendering under dense interactive workloads.</p>
        </section>
        <section>
          <h2>Primary Objectives</h2>
          <p>1. Benchmark multi-threaded off-screen canvas workers against main-thread baselines.<br>
          2. Quantify the benefit of virtualized scroller DOM pooling under continuous scroll load.<br>
          3. Establish reproducible measurement protocols for future comparative studies.</p>
        </section>
        <section>
          <h2>Principal Findings</h2>
          <p>Worker-thread measurement passes reduced main-thread blocking time by 62 %. Virtualized pooling maintained 60 FPS with documents exceeding 50 000 nodes. Full methodology and raw data appear in the appendix.</p>
        </section>
        <p class="usage">Center the title block and keep the gold rule short. The abstract box is mandatory for symposium-style reports. Section headings remain formal and unnumbered unless the series style guide requires otherwise.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, 'Cinzel', serif; box-sizing: border-box; padding: 4px; }
      .luxe-hdr { text-align: center; border-bottom: 1px solid #b78103; padding-bottom: 5px; margin-bottom: 8px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #b78103; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .gold-accent { width: 28px; height: 1.5px; background: #b78103; margin: 0 auto 4px auto; }
      .luxe-hdr h1 { font-size: medium; font-weight: 700; letter-spacing: 0.8px; color: var(--ace-foreground, #1a1a1a); margin: 0 0 2px 0; }
      .tagline { font-family: system-ui, sans-serif; font-size: small; letter-spacing: 1px; color: #b78103; margin: 0; }
      .lead-box { background: #fffdf5; border-left: 3px solid #b78103; padding: 5px; margin-bottom: 6px; font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; }
      .luxe-body h2 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #1a1a1a); margin: 6px 0 3px 0; border-bottom: 0.5px solid #e0e0e0; padding-bottom: 2px; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #a1887f; font-style: italic; border-top: 0.5px dashed #d7ccc8; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 5. Report - MLA
	{
		id: 'report-mla',
		title: 'Report',
		styleVariant: 'MLA',
		description: 'Strict MLA-style student paper header and first page. Includes the classic four-line identification block, centered title, and first-line-indented body with parenthetical citation. Use for literature, history, and humanities courses that require MLA format.',
		htmlContent: `
      <header class="mla-hdr">
        <span class="type-tag">Report · MLA</span>
        <div class="mla-head">
          <p class="page-num">Cullinan 1</p>
          <p>Brian James Cullinan</p>
          <p>Professor Smith</p>
          <p>Computer Science 401</p>
          <p>24 October 2026</p>
        </div>
        <h1>Virtualized DOM Rendering in Modern Web Browsers</h1>
      </header>
      <main class="mla-body">
        <p class="mla-p">The implementation of virtual scrollers requires precise height estimation prior to viewport insertion. According to recent benchmarks, off-screen measurement passes significantly reduce main-thread execution time while preserving visual fidelity (Cullinan 42).</p>
        <p class="mla-p">Further experiments demonstrate that batching DOM writes inside a single animation frame eliminates the majority of layout thrashing previously observed under continuous scroll load. These findings align with established performance guidance published by the browser vendors themselves.</p>
        <p class="usage">The four-line header block is mandatory and must appear in this exact order. Page number sits at the top right. Title is centered and unformatted. Body paragraphs receive a first-line indent; do not add extra space between paragraphs.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; box-sizing: border-box; padding: 4px; }
      .mla-hdr { margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: var(--ace-foreground, #424242); color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .mla-head { font-size: small; color: var(--ace-foreground, #000); line-height: 1.35; margin-bottom: 6px; }
      .mla-head p { margin: 0; }
      .page-num { text-align: right; }
      .mla-hdr h1 { font-size: medium; text-align: center; font-weight: 400; margin: 6px 0; }
      .mla-p { font-size: small; text-indent: 16px; line-height: 1.5; color: var(--ace-foreground, #000); margin: 0 0 0 0; }
      .usage { font-size: small; color: #616161; font-style: italic; text-indent: 0; border-top: 0.5px dashed #bdbdbd; padding-top: 4px; margin-top: 8px; line-height: 1.3; }
    `
	},

	// 6. Report - APA 6th ed.
	{
		id: 'report-apa-6th',
		title: 'Report',
		styleVariant: 'APA 6th ed.',
		description: 'APA 6th-edition title page and abstract block. Includes the running head, centered title block, and a formal Abstract section. Use when an instructor or journal still requires the older APA 6 format.',
		htmlContent: `
      <header class="apa-hdr">
        <span class="type-tag">Report · APA 6</span>
        <div class="running-head">
          <p>Running head: VIRTUALIZED GRAPHICS PIPELINE</p>
        </div>
        <div class="title-block">
          <h1>Virtualized Graphics Pipeline Architecture for High-Throughput Document Rendering</h1>
          <p class="author">Brian James Cullinan</p>
          <p class="affil">Department of Computer Science, University Engineering</p>
        </div>
      </header>
      <main class="apa-body">
        <section>
          <h2>Abstract</h2>
          <p>This paper evaluates high-throughput DOM virtualization techniques for client-side document authoring applications. Controlled experiments demonstrate that off-screen measurement combined with worker-thread layout calculation reduces main-thread blocking by more than 60 % while maintaining visual consistency across major browser engines. Implications for interactive educational software are discussed.</p>
        </section>
        <p class="usage">The running head must appear on every page in a full manuscript. On the title page it is prefixed with “Running head:”. Abstract is a single unindented paragraph. Keywords may be added immediately after the abstract if required by the target venue.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; box-sizing: border-box; padding: 4px; }
      .apa-hdr { margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: var(--ace-foreground, #37474f); color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .running-head { font-size: small; text-transform: uppercase; color: var(--ace-foreground, #333); border-bottom: 0.5px solid #ccc; padding-bottom: 2px; margin-bottom: 8px; }
      .title-block { text-align: center; margin: 8px 0; }
      .title-block h1 { font-size: medium; font-weight: 700; margin: 0 0 4px 0; }
      .author, .affil { font-size: small; color: var(--ace-foreground, #222); margin: 0 0 2px 0; }
      .apa-body h2 { font-size: medium; font-weight: 700; text-align: center; margin: 6px 0 4px 0; }
      p { font-size: small; line-height: 1.45; color: var(--ace-foreground, #111); margin: 0 0 4px 0; }
      .usage { font-size: small; color: #607d8b; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 7. Report - APA 7th ed.
	{
		id: 'report-apa-7th',
		title: 'Report',
		styleVariant: 'APA 7th ed.',
		description: 'APA 7th-edition student title page. Page number only (no running head for student papers), centered title block with author, affiliation, course, instructor, and due date. Body begins with a level-1 heading and first-line-indented paragraphs.',
		htmlContent: `
      <header class="apa7-hdr">
        <span class="type-tag">Report · APA 7</span>
        <div class="header-num"><p>1</p></div>
        <div class="title-block">
          <h1>Performance Optimization in Browser Layout Engines: A Comparative Study of Virtualization Strategies</h1>
          <p class="author">Brian James Cullinan</p>
          <p class="meta">Department of Computer Science, Flagstaff Institute</p>
          <p class="meta">CS 501: Advanced Systems Engineering</p>
          <p class="meta">Dr. Elena Vargas</p>
          <p class="meta">24 October 2026</p>
        </div>
      </header>
      <main class="apa7-body">
        <section>
          <h2>Introduction</h2>
          <p>Modern web-based authoring environments require scalable layout architectures capable of supporting dense document structures without compromising frame rates or responsiveness. This study examines three virtualization strategies under identical load conditions and reports both quantitative performance data and qualitative observations from professional users.</p>
        </section>
        <p class="usage">Student papers omit the running head; only the page number appears. The title block must include author, department/university, course number and name, instructor, and assignment due date—each on its own line. Level-1 headings are bold and centered (or left-aligned depending on the exact 7th-edition preference of the instructor).</p>
      </main>
    `,
		cssContent: `
      * { font-family: Calibri, 'Times New Roman', sans-serif; box-sizing: border-box; padding: 4px; }
      .apa7-hdr { margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: var(--ace-foreground, #263238); color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .header-num { text-align: right; font-size: small; color: #555; margin-bottom: 6px; }
      .title-block { text-align: center; margin: 6px 0 8px 0; }
      .title-block h1 { font-size: medium; font-weight: 700; color: var(--ace-foreground, #000); margin: 0 0 5px 0; }
      .author { font-size: small; font-weight: 600; color: var(--ace-foreground, #222); margin: 0 0 2px 0; }
      .meta { font-size: small; color: #444; margin: 0 0 1px 0; }
      .apa7-body h2 { font-size: medium; font-weight: 700; margin: 6px 0 3px 0; color: var(--ace-foreground, #000); }
      p { font-size: small; line-height: 1.45; color: var(--ace-foreground, #222); text-indent: 14px; margin: 0 0 0 0; }
      .usage { font-size: small; color: #546e7a; font-style: italic; text-indent: 0; border-top: 0.5px dashed #b0bec5; padding-top: 4px; margin-top: 8px; line-height: 1.3; }
    `
	},

	// 8. Report - Playful
	{
		id: 'report-playful',
		title: 'Report',
		styleVariant: 'Playful',
		description: 'Bright science-fair style report with a cyan banner and dashed hypothesis card. Perfect for elementary or middle-school project write-ups where enthusiasm and clear results matter more than formal academic tone.',
		htmlContent: `
      <header class="rpt-play-hdr">
        <span class="type-tag">Report</span>
        <h1>SCIENCE FAIR PROJECT REPORT</h1>
        <p class="sub">Building a Virtual Document Engine!</p>
      </header>
      <main class="rpt-play-body">
        <div class="card-box">
          <p><strong>Hypothesis:</strong> Using Web Workers will make document scrolling at least 2× faster without making the page feel laggy.</p>
        </div>
        <section>
          <h2>Experiment Results</h2>
          <p>• Test 1 – Standard DOM scrolling → average 30 FPS, frequent jank<br>
          • Test 2 – Virtualized DOM + workers → solid 60 FPS, no visible stutter<br>
          • Memory stayed under 15 MB in both cases</p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>The hypothesis was supported! Virtualization plus workers kept the scroll buttery smooth. Next step: try the same idea with a much bigger document.</p>
        </section>
        <p class="usage">Keep the hypothesis card prominent. Results should be short bullet points that a judge can scan in seconds. Tone stays excited and first-person-friendly.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .rpt-play-hdr { background: #00bcd4; color: var(--ace-bg, #fff); padding: 8px; margin: -6px -6px 6px -6px; text-align: center; position: relative; border-radius: 2px 2px 0 0; }
      .type-tag { position: absolute; top: 4px; right: 4px; background: #fff; color: #00838f; font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .rpt-play-hdr h1 { font-size: medium; font-weight: 800; margin: 0 0 2px 0; }
      .sub { font-size: small; color: var(--ace-bg, #e0f7fa); margin: 0; }
      .card-box { background: #e0f7fa; border: 1.5px dashed #00acc1; padding: 5px; border-radius: 3px; margin-bottom: 5px; font-size: small; color: #006064; }
      .rpt-play-body h2 { font-size: medium; color: #00838f; margin: 5px 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #333); margin: 0 0 4px 0; line-height: 1.35; }
      .usage { font-size: small; color: #00838f; font-style: italic; border-top: 0.5px dashed #80deea; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 9. Book Report - Reading Rainbow
	{
		id: 'book-report-reading-rainbow',
		title: 'Book report',
		styleVariant: 'Reading Rainbow',
		description: 'Colorful book-report template inspired by classic reading programs. Gradient header, star rating, and clear summary section. Designed for elementary and middle-school reading responses.',
		htmlContent: `
      <header class="rr-hdr">
        <span class="type-tag">Reading Rainbow</span>
        <h1>BOOK REPORT REVIEW</h1>
        <p class="book-title">“The Art of Computer Programming”</p>
      </header>
      <main class="rr-body">
        <div class="meta-card">
          <p><strong>Author:</strong> Donald Knuth · <strong>Student:</strong> Alex Cullinan · <strong>Class:</strong> CS Explorers</p>
          <p><strong>Rating:</strong> ★★★★★ (5/5 Stars) · Would recommend to a friend</p>
        </div>
        <section>
          <h2>Summary & Key Takeaways</h2>
          <p>This foundational text explores fundamental algorithms, data structures, and memory-management strategies in extraordinary detail. Even the early chapters changed how I think about writing efficient code and about the beauty of well-chosen data structures.</p>
        </section>
        <section>
          <h2>My Favorite Part</h2>
          <p>The discussion of how small changes in algorithm choice can produce huge differences in running time. It made the abstract idea of “Big-O” feel concrete and exciting.</p>
        </section>
        <p class="usage">Always include author, student name, and a clear star rating. Keep the summary under 80 words so a teacher can read it quickly. The gradient header is the visual signature—do not flatten it.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .rr-hdr { background: linear-gradient(135deg, #ff1744, #ff9100, #2979ff); color: var(--ace-bg, #fff); padding: 8px; margin: -6px -6px 6px -6px; position: relative; border-radius: 2px 2px 0 0; }
      .type-tag { position: absolute; top: 4px; right: 4px; background: #fff; color: #d50000; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .rr-hdr h1 { font-size: medium; font-weight: 900; letter-spacing: 0.4px; margin: 0 0 2px 0; }
      .book-title { font-size: small; font-style: italic; color: var(--ace-bg, #fff); margin: 0; }
      .meta-card { background: #fff8e1; border-left: 3px solid #ffc107; padding: 5px; font-size: small; margin-bottom: 5px; color: #5d4037; }
      .meta-card p { margin: 0 0 2px 0; }
      .rr-body h2 { font-size: medium; color: #2979ff; font-weight: 800; margin: 5px 0 2px 0; border-bottom: 0.5px solid #82b1ff; padding-bottom: 1px; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #1565c0; font-style: italic; border-top: 0.5px dashed #90caf9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 10. Class Notes - Luxe
	{
		id: 'class-notes-luxe',
		title: 'Class notes',
		styleVariant: 'Luxe',
		description: 'Elegant lecture-note template with a slate accent and structured topic boxes. Suited for upper-level or graduate courses where notes are expected to be polished and review-ready.',
		htmlContent: `
      <header class="cn-luxe-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>LECTURE NOTES: ALGORITHMS</h1>
        <p class="meta">CS 401 · Prof. Smith · 24 October 2026 · Lecture 12</p>
      </header>
      <main class="cn-luxe-body">
        <section class="topic-box">
          <h2>Topic: Virtual DOM Trees & Diffing</h2>
          <p>• Key Concept 1 — Differential tree comparison (diffing) identifies the minimal set of DOM mutations required after a state change.<br>
          • Key Concept 2 — Batching those mutations inside requestAnimationFrame prevents layout thrashing and keeps the main thread free for input handling.<br>
          • Key Concept 3 — Keys on list children are essential for correct reconciliation when items are reordered or filtered.</p>
        </section>
        <section>
          <h2>Follow-up Action Items</h2>
          <p>[ ] Review Lumino layout widget event loops before next lab<br>
          [ ] Re-read the original React reconciliation paper (cited in slides)<br>
          [ ] Sketch a mini diff algorithm on paper for the quiz</p>
        </section>
        <p class="usage">Date and lecture number belong in the meta line. Topic boxes keep related bullets together. Action items should be concrete and checkable so the notes remain useful for exam review.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .cn-luxe-hdr { border-bottom: 1.5px solid #455a64; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #455a64; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .cn-luxe-hdr h1 { font-size: medium; color: var(--ace-foreground, #263238); font-weight: 700; margin: 4px 0 2px 0; }
      .meta { font-family: system-ui, sans-serif; font-size: small; color: #607d8b; margin: 0; }
      .topic-box { background: #eceff1; border-left: 3px solid #455a64; padding: 5px; margin-bottom: 5px; }
      .topic-box h2 { font-size: medium; color: var(--ace-foreground, #263238); font-weight: 700; margin: 0 0 3px 0; }
      .cn-luxe-body h2 { font-size: medium; color: var(--ace-foreground, #37474f); font-weight: 700; margin: 5px 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #222); line-height: 1.4; margin: 0 0 3px 0; }
      .usage { font-size: small; color: #607d8b; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 11. Class Notes - Playful
	{
		id: 'class-notes-playful',
		title: 'Class notes',
		styleVariant: 'Playful',
		description: 'Fun, colorful class-note template for younger students or creative electives. Purple accent and casual bullet style keep the page inviting while still organizing main concepts clearly.',
		htmlContent: `
      <header class="cn-play-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>HISTORY 101 NOTES</h1>
        <p class="sub">Unit 3 · The Industrial Revolution · 24 Oct 2026</p>
      </header>
      <main class="cn-play-body">
        <section>
          <h2>Main Concepts</h2>
          <p>• Steam engine invention (James Watt, 1765–1776 improvements)<br>
          • Shift from agrarian to manufacturing economies<br>
          • Rise of factories and new social classes<br>
          • Urbanization and the growth of industrial cities</p>
        </section>
        <section>
          <h2>Why It Matters</h2>
          <p>The Industrial Revolution changed how people worked, where they lived, and even how they measured time. Many of the systems we still use today—factories, railroads, time zones—started in this period.</p>
        </section>
        <p class="usage">Keep the tone light and the bullets short. A “Why It Matters” section helps younger students connect facts to bigger ideas. The purple rule and type-tag give the page a friendly identity.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .cn-play-hdr { border-bottom: 2px solid #7c4dff; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #7c4dff; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .cn-play-hdr h1 { font-size: medium; color: #651fff; font-weight: 800; margin: 4px 0 2px 0; }
      .sub { font-size: small; color: #b388ff; margin: 0; }
      .cn-play-body h2 { font-size: medium; color: #651fff; margin: 5px 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #7c4dff; font-style: italic; border-top: 0.5px dashed #d1c4e9; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 12. Class Notes - Paperback
	{
		id: 'class-notes-paperback',
		title: 'Class notes',
		styleVariant: 'Paperback',
		description: 'Quiet, book-like note template for philosophy, literature, and seminar courses. Serif typography and restrained brown accents encourage careful reading and reflection rather than rapid bullet capture.',
		htmlContent: `
      <header class="cn-pb-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>PHILOSOPHY & ETHICS</h1>
        <p class="date">24 OCTOBER 2026 · SEMINAR 7</p>
      </header>
      <main class="cn-pb-body">
        <section>
          <h2>I. Epistemological Inquiry</h2>
          <p>Examining the boundaries of empiricism versus rationalism in scientific methodology. Descartes’ insistence on clear and distinct ideas is set against Locke’s emphasis on sensory experience as the origin of all knowledge.</p>
        </section>
        <section>
          <h2>II. Ethical Implications</h2>
          <p>If knowledge is always mediated by human cognitive limits, what obligations follow for researchers and engineers who deploy systems that affect large populations? The discussion turned to responsibility and the precautionary principle.</p>
        </section>
        <p class="usage">Roman-numeral section headings preserve a contemplative, book-like rhythm. Avoid dense bullet lists; prefer short reflective paragraphs that can be re-read before the next seminar.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; box-sizing: border-box; padding: 4px; }
      .cn-pb-hdr { border-bottom: 1px solid #5d4037; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #5d4037; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .cn-pb-hdr h1 { font-size: medium; color: var(--ace-foreground, #3e2723); font-weight: 400; letter-spacing: 0.5px; margin: 4px 0 2px 0; }
      .date { font-family: system-ui, sans-serif; font-size: small; color: #8d6e63; margin: 0; }
      .cn-pb-body h2 { font-size: medium; color: var(--ace-foreground, #3e2723); margin: 5px 0 2px 0; font-weight: 700; }
      p { font-size: small; color: var(--ace-foreground, #2b1d0c); line-height: 1.45; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #8d6e63; font-style: italic; border-top: 0.5px dashed #d7ccc8; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 13. Lesson Plan - Reading Rainbow
	{
		id: 'lesson-plan-reading-rainbow',
		title: 'Lesson plan',
		styleVariant: 'Reading Rainbow',
		description: 'Vibrant elementary lesson-plan template with gradient header and clear objective box. Structured for literacy blocks that combine guided reading, vocabulary, and oral presentation.',
		htmlContent: `
      <header class="lp-rr-hdr">
        <span class="type-tag">Reading Rainbow</span>
        <h1>LESSON PLAN: INTERACTIVE READING</h1>
        <p class="grade">GRADE LEVEL: 4TH – 6TH · LITERACY BLOCK · 55 MIN</p>
      </header>
      <main class="lp-rr-body">
        <div class="obj-box">
          <p><strong>Objective:</strong> Students will identify three key narrative themes in the selected text and present a 60-second oral summary to a partner using evidence from the page.</p>
        </div>
        <section>
          <h2>Activity Outline</h2>
          <p>1. 10 min – Warm-up: prediction journal & vocabulary preview<br>
          2. 15 min – Group guided reading (teacher models think-aloud)<br>
          3. 20 min – Interactive vocabulary mapping on chart paper<br>
          4. 10 min – Partner oral summaries + exit ticket</p>
        </section>
        <section>
          <h2>Materials & Assessment</h2>
          <p>Text sets, chart paper, markers, exit-ticket slips. Formative assessment via oral summary rubric (ideas, evidence, clarity).</p>
        </section>
        <p class="usage">State the objective in student-friendly language. Time-box every activity so the plan is usable by a substitute. Keep the gradient header—it signals “elementary literacy” at a glance.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .lp-rr-hdr { background: linear-gradient(90deg, #00c853, #00b0ff); color: var(--ace-bg, #fff); padding: 8px; margin: -6px -6px 6px -6px; position: relative; border-radius: 2px 2px 0 0; }
      .type-tag { position: absolute; top: 4px; right: 4px; background: #fff; color: #00c853; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .lp-rr-hdr h1 { font-size: medium; font-weight: 900; margin: 0 0 2px 0; }
      .grade { font-size: small; color: var(--ace-bg, #e1f5fe); margin: 0; }
      .obj-box { background: #e8f5e9; border-left: 3px solid #00c853; padding: 5px; font-size: small; margin-bottom: 5px; color: #1b5e20; line-height: 1.35; }
      .lp-rr-body h2 { font-size: medium; color: #00b0ff; font-weight: 800; margin: 5px 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #00838f; font-style: italic; border-top: 0.5px dashed #80deea; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 14. Lesson Plan - Playful
	{
		id: 'lesson-plan-playful',
		title: 'Lesson plan',
		styleVariant: 'Playful',
		description: 'High-energy elementary lesson plan for hands-on subjects such as art, math manipulatives, or maker activities. Orange accent and casual lists keep the plan approachable for both teacher and substitute.',
		htmlContent: `
      <header class="lp-play-hdr">
        <span class="type-tag">Lesson Plan</span>
        <h1>FUN WITH MATH & SHAPES!</h1>
        <p class="sub">Elementary Geometry · Grades 1–2 · 40 minutes</p>
      </header>
      <main class="lp-play-body">
        <section>
          <h2>Materials Needed</h2>
          <p>• Colored construction paper (pre-cut squares, triangles, circles)<br>
          • Safety scissors and glue sticks<br>
          • Shape sorting mats<br>
          • Example posters of real-world shapes</p>
        </section>
        <section>
          <h2>Lesson Flow</h2>
          <p>1. 5 min – Shape hunt around the room (find circles, squares…)<br>
          2. 15 min – Build a picture using only geometric shapes<br>
          3. 10 min – Share and name the shapes used<br>
          4. 10 min – Clean-up and exit ticket (draw one shape and label it)</p>
        </section>
        <p class="usage">List every material so a substitute can set up without guessing. Keep activity steps numbered and time-boxed. The playful typeface and orange accent tell students “this will be fun.”</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, system-ui, sans-serif; box-sizing: border-box; padding: 4px; }
      .lp-play-hdr { border-bottom: 2px solid #ff6d00; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #ff6d00; color: var(--ace-bg, #fff); font-family: system-ui, sans-serif; font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .lp-play-hdr h1 { font-size: medium; color: #dd2c00; font-weight: 800; margin: 4px 0 2px 0; }
      .sub { font-size: small; color: #ff9e80; margin: 0; }
      .lp-play-body h2 { font-size: medium; color: #dd2c00; margin: 5px 0 2px 0; }
      p { font-size: small; color: var(--ace-foreground, #333); line-height: 1.4; margin: 0 0 4px 0; }
      .usage { font-size: small; color: #e64a19; font-style: italic; border-top: 0.5px dashed #ffccbc; padding-top: 4px; margin-top: 6px; line-height: 1.3; }
    `
	},

	// 15. Lesson Plan - Simple
	{
		id: 'lesson-plan-simple',
		title: 'Lesson plan',
		styleVariant: 'Simple',
		description: 'Straightforward weekly curriculum table for secondary subjects. Clean header and compact three-column schedule. Ideal when the primary need is a scannable day-by-day plan rather than narrative description.',
		htmlContent: `
      <header class="lp-sim-hdr">
        <span class="type-tag">Lesson Plan</span>
        <h1>Weekly Curriculum Plan</h1>
        <p class="sub">Subject: Physics 101 · Unit 4 · Kinematics & Forces · Week of 20 Oct 2026</p>
      </header>
      <main class="lp-sim-body">
        <table class="lp-table">
          <thead>
            <tr><th>Day</th><th>Topic</th><th>Assignment / Lab</th></tr>
          </thead>
          <tbody>
            <tr><td>Mon</td><td>Kinematics review & free-fall</td><td>Ch. 3 problems 1–12</td></tr>
            <tr><td>Tue</td><td>Vectors in 2D motion</td><td>Worksheet 4A</td></tr>
            <tr><td>Wed</td><td>Force & Newton’s laws</td><td>Lab Report 2 (due Fri)</td></tr>
            <tr><td>Thu</td><td>Friction & inclined planes</td><td>Practice set 4B</td></tr>
            <tr><td>Fri</td><td>Quiz + lab discussion</td><td>Read Ch. 5 for Monday</td></tr>
          </tbody>
        </table>
        <p class="usage">Keep the table to five instructional days. Topic and assignment columns should be specific enough that a student (or substitute) knows exactly what is expected. Add a short notes row beneath the table only if there are special materials or room changes.</p>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box; padding: 4px; }
      .lp-sim-hdr { border-bottom: 2px solid #37474f; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: var(--ace-foreground, #37474f); color: var(--ace-bg, #fff); font-size: small; font-weight: 800; padding: 1px 5px; border-radius: 2px; }
      .lp-sim-hdr h1 { font-size: medium; color: var(--ace-foreground, #263238); font-weight: 800; margin: 4px 0 2px 0; }
      .sub { font-size: small; color: #546e7a; margin: 0; }
      .lp-table { width: 100%; border-collapse: collapse; font-size: small; margin: 4px 0 6px 0; }
      .lp-table th { background: #eceff1; text-align: left; padding: 3px 4px; font-weight: 800; color: var(--ace-foreground, #263238); }
      .lp-table td { border-bottom: 0.5px solid #e0e0e0; padding: 3px 4px; color: var(--ace-foreground, #333); }
      .usage { font-size: small; color: #546e7a; font-style: italic; border-top: 0.5px dashed #b0bec5; padding-top: 4px; margin: 0; line-height: 1.3; }
    `
	}
];

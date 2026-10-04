import type { ITemplateItem } from './template';

export const EDUCATION_TEMPLATES: ITemplateItem[] = [
	// 1. Essay - Playful
	{
		id: 'essay-playful',
		title: 'Essay',
		styleVariant: 'Playful',
		htmlContent: `
      <header class="essay-hdr">
        <span class="type-tag">Essay</span>
        <h1>THE EVOLUTION OF MODERN LITERATURE</h1>
        <p class="author">By Alex Cullinan &bull; English 101</p>
      </header>
      <main class="essay-body">
        <p class="first-p">Literature has long served as a mirror reflecting societal transformations across generations. In this paper, we explore how narrative structures adapt to modern digital environments.</p>
        <section>
          <h2>I. Historical Context</h2>
          <p>From print media to modern hypertext, narrative progression continues to evolve while maintaining core thematic principles.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif; }
      .essay-hdr { border-bottom: 2px dashed #ff4081; padding-bottom: 4px; margin-bottom: 5px; text-align: center; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #ff4081; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .essay-hdr h1 { font-size: 8.5px; color: #c2185b; font-weight: bold; margin-top: 2px; }
      .author { font-size: 3.5px; color: #e91e63; }
      .essay-body h2 { font-size: 4.8px; color: #c2185b; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.4; }
      .first-p::first-letter { font-size: 7px; font-weight: bold; color: #c2185b; float: left; margin-right: 2px; line-height: 1; }
    `
	},

	// 2. Essay - Paperback
	{
		id: 'essay-paperback',
		title: 'Essay',
		styleVariant: 'Paperback',
		htmlContent: `
      <header class="pb-hdr">
        <span class="type-tag">Essay</span>
        <h1>ON THE NATURE OF NARRATIVE</h1>
        <p class="byline">A. J. CULLINAN</p>
      </header>
      <main class="pb-body">
        <p>The transition from oral tradition to codex marked a fundamental shift in human cognitive architecture, establishing fixed textual artifacts.</p>
        <p>Subsequent iterations of print culture further refined reading practices, codifying conventions of syntax, page composition, and thematic organization.</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Book Antiqua', Palatino, Georgia, serif; }
      .pb-hdr { text-align: center; border-bottom: 1px solid #795548; padding-bottom: 3px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #795548; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .pb-hdr h1 { font-size: 8.5px; font-weight: normal; letter-spacing: 0.5px; color: #3e2723; }
      .byline { font-size: 3.2px; letter-spacing: 1px; color: #5d4037; margin-top: 2px; }
      p { font-size: 3.8px; color: #2b1d0c; text-indent: 8px; line-height: 1.4; margin-bottom: 2px; }
    `
	},

	// 3. Report - Simple
	{
		id: 'report-simple',
		title: 'Report',
		styleVariant: 'Simple',
		htmlContent: `
      <header class="rpt-hdr">
        <span class="type-tag">Report</span>
        <h1>Quarterly Research Overview</h1>
        <p class="sub">Department of Computer Science &bull; 2026</p>
      </header>
      <main class="rpt-body">
        <section>
          <h2>1. Executive Summary</h2>
          <p>This report details experimental performance benchmarks across browser-based document scrollers and canvas rendering passes.</p>
        </section>
        <section>
          <h2>2. Key Metrics</h2>
          <p>&bull; Average frame throughput: 60 FPS<br>&bull; DOM memory footprint: 12.4 MB</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; }
      .rpt-hdr { border-bottom: 1.5px solid #1976d2; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #1976d2; color: #fff; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .rpt-hdr h1 { font-size: 9px; font-weight: 700; color: #0d47a1; }
      .sub { font-size: 3.5px; color: #1565c0; }
      .rpt-body h2 { font-size: 4.8px; color: #1565c0; margin: 4px 0 1px 0; font-weight: 600; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 4. Report - Luxe
	{
		id: 'report-luxe',
		title: 'Report',
		styleVariant: 'Luxe',
		htmlContent: `
      <header class="luxe-hdr">
        <span class="type-tag">Report</span>
        <div class="gold-accent"></div>
        <h1>ANNUAL ACADEMIC SYMPOSIUM</h1>
        <p class="tagline">INSTITUTE FOR ADVANCED COMPUTING</p>
      </header>
      <main class="luxe-body">
        <section class="lead-box">
          <p><strong>ABSTRACT:</strong> A comprehensive evaluation of modern web document architectures, focusing on memory isolation and layout virtualization.</p>
        </section>
        <section>
          <h2>Primary Objectives</h2>
          <p>1. Benchmark multi-threaded offscreen canvas workers.</p>
          <p>2. Optimize virtualized scroller DOM pooling.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Cinzel', Georgia, serif; }
      .luxe-hdr { text-align: center; border-bottom: 1px solid #b78103; padding-bottom: 4px; margin-bottom: 6px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #b78103; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .gold-accent { width: 20px; height: 1.5px; background: #b78103; margin: 0 auto 3px auto; }
      .luxe-hdr h1 { font-size: 8px; font-weight: bold; letter-spacing: 0.8px; color: #1a1a1a; }
      .tagline { font-family: sans-serif; font-size: 3px; letter-spacing: 1px; color: #b78103; margin-top: 2px; }
      .lead-box { background: #fffdf5; border-left: 2px solid #b78103; padding: 4px; margin-bottom: 4px; font-size: 3.6px; color: #333; }
      .luxe-body h2 { font-size: 4.5px; font-weight: bold; color: #1a1a1a; margin: 3px 0 1px 0; border-bottom: 0.5px solid #e0e0e0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 5. Report - MLA (Add-on)
	{
		id: 'report-mla',
		title: 'Report',
		styleVariant: 'MLA',
		htmlContent: `
      <header class="mla-hdr">
        <span class="type-tag">Report &bull; Add-on</span>
        <div class="mla-head">
          <p>Cullinan 1</p>
          <p>Brian James Cullinan</p>
          <p>Professor Smith</p>
          <p>Computer Science 401</p>
          <p>24 October 2026</p>
        </div>
        <h1>Virtualized DOM Rendering in Modern Web Browsers</h1>
      </header>
      <main class="mla-body">
        <p class="mla-p">The implementation of virtual scrollers requires precise height estimation prior to viewport insertion. According to recent benchmarks, offscreen measurement passes significantly reduce main-thread execution time (Cullinan 42).</p>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; }
      .mla-hdr { margin-bottom: 4px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #424242; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .mla-head { font-size: 3.5px; color: #000; line-height: 1.2; margin-bottom: 4px; }
      .mla-head p:first-child { text-align: right; }
      .mla-hdr h1 { font-size: 7.5px; text-align: center; font-weight: normal; margin: 4px 0; }
      .mla-p { font-size: 3.8px; text-indent: 12px; line-height: 1.5; color: #000; }
    `
	},

	// 6. Report - APA 6th ed.
	{
		id: 'report-apa-6th',
		title: 'Report',
		styleVariant: 'APA 6th ed.',
		htmlContent: `
      <header class="apa-hdr">
        <span class="type-tag">Report</span>
        <div class="running-head">
          <p>Running head: VIRTUALIZED GRAPHICS PIPELINE</p>
        </div>
        <div class="title-block">
          <h1>Virtualized Graphics Pipeline Architecture</h1>
          <p class="author">Brian James Cullinan</p>
          <p class="affil">Department of Computer Science, University Engineering</p>
        </div>
      </header>
      <main class="apa-body">
        <section>
          <h2>Abstract</h2>
          <p>This paper evaluates high-throughput DOM virtualization techniques for client-side document authoring applications.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Times New Roman', Times, serif; }
      .apa-hdr { margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #37474f; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .running-head { font-size: 3.2px; text-transform: uppercase; color: #333; border-bottom: 0.5px solid #ccc; padding-bottom: 1px; margin-bottom: 6px; }
      .title-block { text-align: center; margin: 6px 0; }
      .title-block h1 { font-size: 7.5px; font-weight: bold; margin-bottom: 2px; }
      .author, .affil { font-size: 3.5px; color: #222; }
      .apa-body h2 { font-size: 4.5px; font-weight: bold; text-align: center; margin: 4px 0 2px 0; }
      p { font-size: 3.8px; line-height: 1.4; color: #111; }
    `
	},

	// 7. Report - APA 7th ed.
	{
		id: 'report-apa-7th',
		title: 'Report',
		styleVariant: 'APA 7th ed.',
		htmlContent: `
      <header class="apa7-hdr">
        <span class="type-tag">Report</span>
        <div class="header-num"><p>1</p></div>
        <div class="title-block">
          <h1>Performance Optimization in Browser Layout Engines</h1>
          <p class="author">Brian James Cullinan</p>
          <p class="meta">Department of Computer Science, Flagstaff Institute</p>
          <p class="meta">CS 501: Advanced Systems Engineering</p>
          <p class="meta">October 24, 2026</p>
        </div>
      </header>
      <main class="apa7-body">
        <section>
          <h2>Introduction</h2>
          <p>Modern web-based authoring environments require scalable layout architectures to support dense document structures without compromising frame rates.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Calibri, 'Times New Roman', sans-serif; }
      .apa7-hdr { margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #263238; color: #fff; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .header-num { text-align: right; font-size: 3.5px; color: #555; margin-bottom: 4px; }
      .title-block { text-align: center; margin: 4px 0 6px 0; }
      .title-block h1 { font-size: 8px; font-weight: bold; color: #000; margin-bottom: 3px; }
      .author { font-size: 3.8px; font-weight: 600; color: #222; }
      .meta { font-size: 3.4px; color: #444; }
      .apa7-body h2 { font-size: 4.8px; font-weight: bold; margin: 4px 0 2px 0; color: #000; }
      p { font-size: 3.8px; line-height: 1.4; color: #222; text-indent: 10px; }
    `
	},

	// 8. Report - Playful
	{
		id: 'report-playful',
		title: 'Report',
		styleVariant: 'Playful',
		htmlContent: `
      <header class="rpt-play-hdr">
        <span class="type-tag">Report</span>
        <h1>SCIENCE FAIR PROJECT REPORT</h1>
        <p class="sub">Building a Virtual Document Engine!</p>
      </header>
      <main class="rpt-play-body">
        <div class="card-box">
          <p><strong>Hypothesis:</strong> Using Web Workers will make document scrolling 2x faster!</p>
        </div>
        <section>
          <h2>Experiment Results</h2>
          <p>&bull; Test 1: Standard DOM &rarr; 30 FPS</p>
          <p>&bull; Test 2: Virtualized DOM &rarr; 60 FPS!</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, sans-serif; }
      .rpt-play-hdr { background: #00bcd4; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; text-align: center; position: relative; }
      .type-tag { position: absolute; top: 2px; right: 2px; background: #fff; color: #00838f; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .rpt-play-hdr h1 { font-size: 8.5px; font-weight: bold; }
      .sub { font-size: 3.5px; color: #e0f7fa; }
      .card-box { background: #e0f7fa; border: 1px dashed #00acc1; padding: 4px; border-radius: 3px; margin-bottom: 4px; font-size: 3.8px; color: #006064; }
      .rpt-play-body h2 { font-size: 4.8px; color: #00838f; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; }
    `
	},

	// 9. Book Report (Reading Rainbow Branding)
	{
		id: 'book-report-reading-rainbow',
		title: 'Book report',
		styleVariant: 'Reading Rainbow',
		htmlContent: `
      <header class="rr-hdr">
        <span class="type-tag">Reading Rainbow</span>
        <h1>BOOK REPORT REVIEW</h1>
        <p class="book-title">"The Art of Computer Programming"</p>
      </header>
      <main class="rr-body">
        <div class="meta-card">
          <p><strong>Author:</strong> Donald Knuth &bull; <strong>Student:</strong> Alex Cullinan</p>
          <p><strong>Rating:</strong> &#9733;&#9733;&#9733;&#9733;&#9733; (5/5 Stars)</p>
        </div>
        <section>
          <h2>Summary & Key Takeaways</h2>
          <p>This foundational text explores fundamental algorithms, data structures, and memory management strategies in detail.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .rr-hdr { background: linear-gradient(135deg, #ff1744, #ff9100, #2979ff); color: #fff; padding: 6px; margin: -10px -10px 5px -10px; position: relative; }
      .type-tag { position: absolute; top: 2px; right: 2px; background: #fff; color: #d50000; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .rr-hdr h1 { font-size: 8px; font-weight: 900; letter-spacing: 0.5px; }
      .book-title { font-size: 3.8px; font-style: italic; color: #fff; }
      .meta-card { background: #fff8e1; border-left: 2px solid #ffc107; padding: 3px; font-size: 3.6px; margin-bottom: 4px; color: #5d4037; }
      .rr-body h2 { font-size: 4.5px; color: #2979ff; font-weight: bold; margin: 3px 0 1px 0; border-bottom: 0.5px solid #82b1ff; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 10. Class Notes - Luxe
	{
		id: 'class-notes-luxe',
		title: 'Class notes',
		styleVariant: 'Luxe',
		htmlContent: `
      <header class="cn-luxe-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>LECTURE NOTES: ALGORITHMS</h1>
        <p class="meta">CS 401 &bull; PROF. SMITH &bull; OCT 24, 2026</p>
      </header>
      <main class="cn-luxe-body">
        <section class="topic-box">
          <h2>Topic: Virtual DOM Trees</h2>
          <p>&bull; Key Concept 1: Differential tree comparisons (diffing).</p>
          <p>&bull; Key Concept 2: Batching DOM writes via requestAnimationFrame.</p>
        </section>
        <section>
          <h2>Follow-up Action Items</h2>
          <p>[ ] Review Lumino layout widget event loops.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .cn-luxe-hdr { border-bottom: 1px solid #455a64; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #455a64; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .cn-luxe-hdr h1 { font-size: 8px; color: #263238; font-weight: bold; }
      .meta { font-family: sans-serif; font-size: 3.2px; color: #607d8b; }
      .topic-box { background: #eceff1; border-left: 2px solid #455a64; padding: 4px; margin-bottom: 4px; }
      .topic-box h2 { font-size: 4.2px; color: #263238; font-weight: bold; margin-bottom: 2px; }
      .cn-luxe-body h2 { font-size: 4.5px; color: #37474f; font-weight: bold; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #222; line-height: 1.35; }
    `
	},

	// 11. Class Notes - Playful
	{
		id: 'class-notes-playful',
		title: 'Class notes',
		styleVariant: 'Playful',
		htmlContent: `
      <header class="cn-play-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>HISTORY 101 NOTES</h1>
        <p class="sub">Unit 3: The Industrial Revolution</p>
      </header>
      <main class="cn-play-body">
        <section>
          <h2>Main Concepts</h2>
          <p>&bull; Steam Engine invention (1765)</p>
          <p>&bull; Shift from agrarian to manufacturing economies</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, sans-serif; }
      .cn-play-hdr { border-bottom: 2px solid #7c4dff; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #7c4dff; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .cn-play-hdr h1 { font-size: 8.5px; color: #651fff; font-weight: bold; }
      .sub { font-size: 3.5px; color: #b388ff; }
      .cn-play-body h2 { font-size: 4.8px; color: #651fff; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 12. Class Notes - Paperback
	{
		id: 'class-notes-paperback',
		title: 'Class notes',
		styleVariant: 'Paperback',
		htmlContent: `
      <header class="cn-pb-hdr">
        <span class="type-tag">Class Notes</span>
        <h1>PHILOSOPHY & ETHICS</h1>
        <p class="date">OCTOBER 24, 2026</p>
      </header>
      <main class="cn-pb-body">
        <section>
          <h2>I. Epistemological Inquiry</h2>
          <p>Examining the boundaries of empiricism versus rationalism in scientific methodology.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .cn-pb-hdr { border-bottom: 1px solid #5d4037; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #5d4037; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .cn-pb-hdr h1 { font-size: 8px; color: #3e2723; font-weight: normal; letter-spacing: 0.5px; }
      .date { font-family: sans-serif; font-size: 3px; color: #8d6e63; }
      .cn-pb-body h2 { font-size: 4.5px; color: #3e2723; margin: 3px 0 1px 0; font-weight: bold; }
      p { font-size: 3.8px; color: #2b1d0c; line-height: 1.35; }
    `
	},

	// 13. Lesson Plan - Reading Rainbow (Add-on)
	{
		id: 'lesson-plan-reading-rainbow',
		title: 'Lesson plan',
		styleVariant: 'Reading Rainbow',
		htmlContent: `
      <header class="lp-rr-hdr">
        <span class="type-tag">Reading Rainbow</span>
        <h1>LESSON PLAN: INTERACTIVE READING</h1>
        <p class="grade">GRADE LEVEL: 4TH - 6TH GRADE</p>
      </header>
      <main class="lp-rr-body">
        <div class="obj-box">
          <p><strong>Objective:</strong> Students will identify key narrative themes and present oral summaries.</p>
        </div>
        <section>
          <h2>Activity Outline</h2>
          <p>1. 15 Min: Group Guided Reading</p>
          <p>2. 20 Min: Interactive Vocabulary Mapping</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .lp-rr-hdr { background: linear-gradient(90deg, #00c853, #00b0ff); color: #fff; padding: 6px; margin: -10px -10px 5px -10px; position: relative; }
      .type-tag { position: absolute; top: 2px; right: 2px; background: #fff; color: #00c853; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .lp-rr-hdr h1 { font-size: 8px; font-weight: 900; }
      .grade { font-size: 3.5px; color: #e1f5fe; }
      .obj-box { background: #e8f5e9; border-left: 2px solid #00c853; padding: 3px; font-size: 3.6px; margin-bottom: 4px; color: #1b5e20; }
      .lp-rr-body h2 { font-size: 4.5px; color: #00b0ff; font-weight: bold; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 14. Lesson Plan - Playful
	{
		id: 'lesson-plan-playful',
		title: 'Lesson plan',
		styleVariant: 'Playful',
		htmlContent: `
      <header class="lp-play-hdr">
        <span class="type-tag">Lesson Plan</span>
        <h1>FUN WITH MATH & SHAPES!</h1>
        <p class="sub">Elementary Geometry</p>
      </header>
      <main class="lp-play-body">
        <section>
          <h2>Materials Needed</h2>
          <p>&bull; Colored Construction Paper<br>&bull; Safety Scissors & Glue</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: 'Comic Sans MS', cursive, sans-serif; }
      .lp-play-hdr { border-bottom: 2px solid #ff6d00; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #ff6d00; color: #fff; font-family: sans-serif; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .lp-play-hdr h1 { font-size: 8.5px; color: #dd2c00; font-weight: bold; }
      .sub { font-size: 3.5px; color: #ff9e80; }
      .lp-play-body h2 { font-size: 4.8px; color: #dd2c00; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 15. Lesson Plan - Simple
	{
		id: 'lesson-plan-simple',
		title: 'Lesson plan',
		styleVariant: 'Simple',
		htmlContent: `
      <header class="lp-sim-hdr">
        <span class="type-tag">Lesson Plan</span>
        <h1>Weekly Curriculum Plan</h1>
        <p class="sub">Subject: Physics 101 &bull; Unit 4</p>
      </header>
      <main class="lp-sim-body">
        <table class="lp-table">
          <tr><th>Day</th><th>Topic</th><th>Assignment</th></tr>
          <tr><td>Mon</td><td>Kinematics</td><td>Ch. 3 Problems</td></tr>
          <tr><td>Wed</td><td>Force & Motion</td><td>Lab Report 2</td></tr>
        </table>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .lp-sim-hdr { border-bottom: 1.5px solid #37474f; padding-bottom: 3px; margin-bottom: 5px; position: relative; }
      .type-tag { position: absolute; top: 0; right: 0; background: #37474f; color: #fff; font-size: 3px; font-weight: bold; padding: 1px 3px; border-radius: 2px; }
      .lp-sim-hdr h1 { font-size: 8.5px; color: #263238; font-weight: 700; }
      .sub { font-size: 3.5px; color: #546e7a; }
      .lp-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-top: 4px; }
      .lp-table th { background: #eceff1; text-align: left; padding: 2px; font-weight: bold; color: #263238; }
      .lp-table td { border-bottom: 0.5px solid #e0e0e0; padding: 2px; }
    `
	}
];

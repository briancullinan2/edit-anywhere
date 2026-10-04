import type { ITemplateItem } from './template';

export const HR_TEMPLATES: ITemplateItem[] = [
	// 1. Formal Job Offer Letter (HR to Employee - Zenefits)
	{
		id: 'hr-offer-letter-zenefits',
		title: 'Job offer letter',
		styleVariant: 'Zenefits',
		htmlContent: `
      <header class="hr-hdr">
        <span class="hr-badge">Zenefits Add-on</span>
        <h1>EMPLOYMENT OFFER LETTER</h1>
        <p class="subtitle">CONFIDENTIAL &bull; STAGE: OFFER EXTENDED</p>
      </header>
      <main class="hr-body">
        <p class="salutation">Dear [Candidate Name],</p>
        <p>On behalf of <strong>Acme Corporation</strong>, I am thrilled to extend an offer for the position of <strong>Senior Systems Engineer</strong>. We were immensely impressed by your background and technical capabilities.</p>
        <div class="terms-grid">
          <div class="term-card">
            <p class="lbl">START DATE</p>
            <p class="val">Nov 1, 2026</p>
          </div>
          <div class="term-card">
            <p class="lbl">BASE SALARY</p>
            <p class="val">$145,000 / Yr</p>
          </div>
          <div class="term-card">
            <p class="lbl">REPORTING TO</p>
            <p class="val">Director of Engineering</p>
          </div>
        </div>
        <section class="clause">
          <h2>Benefits & Equity</h2>
          <p>Full healthcare coverage, 401(k) matching up to 4%, and an initial grant of 10,000 ISO stock options subject to 4-year vesting.</p>
        </section>
        <div class="sig-block">
          <div class="sig-line"><p>HR Manager Signature</p></div>
          <div class="sig-line"><p>Candidate Acceptance Signature</p></div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, -apple-system, sans-serif; }
      .hr-hdr { border-bottom: 1.5px solid #2e7d32; padding-bottom: 3px; margin-bottom: 5px; }
      .hr-badge { background: #e8f5e9; color: #1b5e20; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .hr-hdr h1 { font-size: 8.5px; color: #1b5e20; font-weight: 800; margin-top: 2px; }
      .subtitle { font-size: 3.5px; color: #666; }
      .salutation { font-size: 4px; font-weight: bold; color: #222; margin-bottom: 3px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .terms-grid { display: flex; gap: 3px; margin: 5px 0; }
      .term-card { flex: 1; background: #f1f8e9; border-left: 2px solid #2e7d32; padding: 3px; }
      .term-card .lbl { font-size: 3px; color: #388e3c; font-weight: bold; }
      .term-card .val { font-size: 4px; color: #1b5e20; font-weight: bold; margin-top: 1px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #1b5e20; margin: 3px 0 1px 0; border-bottom: 0.5px solid #c8e6c9; }
      .sig-block { display: flex; gap: 8px; margin-top: 6px; }
      .sig-line { flex: 1; border-top: 0.5px solid #333; padding-top: 2px; }
      .sig-line p { font-size: 3.2px; color: #666; text-align: center; }
    `
	},

	// 2. Job Promotion Letter (HR to Employee - Zenefits)
	{
		id: 'hr-promotion-letter-zenefits',
		title: 'Job promotion letter',
		styleVariant: 'Zenefits',
		htmlContent: `
      <header class="hr-hdr">
        <span class="hr-badge">Zenefits Add-on</span>
        <h1>NOTICE OF JOB PROMOTION</h1>
      </header>
      <main class="hr-body">
        <p class="salutation">Dear [Employee Name],</p>
        <p>It is with great pleasure that Human Resources confirms your official promotion to <strong>Principal Software Architect</strong>, effective <strong>November 1, 2026</strong>.</p>
        <div class="promo-box">
          <p><strong>NEW COMPENSATIONAL GRADE:</strong> Grade L6</p>
          <p><strong>REVISED BASE SALARY:</strong> $175,000 / Year</p>
          <p><strong>BONUS ELIGIBILITY:</strong> 15% Annual Target Performance Bonus</p>
        </div>
        <section>
          <h2>Role & Responsibilities</h2>
          <p>In this expanded role, you will lead the technical architecture for core client-side rendering engines, layout scrollers, and offscreen canvas workers.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .hr-hdr { background: #00695c; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .hr-badge { background: #80cbc4; color: #004d40; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .hr-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .salutation { font-size: 4px; font-weight: bold; margin-bottom: 3px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .promo-box { background: #e0f2f1; border-left: 2px solid #00695c; padding: 4px; margin: 4px 0; font-size: 3.8px; color: #004d40; }
      section h2 { font-size: 4.5px; font-weight: bold; color: #00695c; border-bottom: 0.5px solid #b2dfdb; margin: 3px 0 1px 0; }
    `
	},

	// 3. Employment Verification Letter (HR to External Third Party - Zenefits)
	{
		id: 'hr-employment-verification-zenefits',
		title: 'Employment verification letter',
		styleVariant: 'Zenefits',
		htmlContent: `
      <header class="ver-hdr">
        <span class="hr-badge">Zenefits</span>
        <h1>STATEMENT OF EMPLOYMENT VERIFICATION</h1>
        <p class="ref">HR-REF-2026-991</p>
      </header>
      <main class="ver-body">
        <p><strong>TO WHOM IT MAY CONCERN:</strong></p>
        <p>This letter serves as official confirmation from the Human Resources Department that <strong>Alex Johnson</strong> is currently employed with <strong>Acme Systems Inc.</strong></p>
        <table class="ver-table">
          <tr><th>Employment Status:</th><td>Full-Time Regular</td></tr>
          <tr><th>Current Job Title:</th><td>Lead Frontend Developer</td></tr>
          <tr><th>Original Hire Date:</th><td>March 15, 2022</td></tr>
          <tr><th>Annual Gross Salary:</th><td>$135,000 USD</td></tr>
        </table>
        <p class="footer-note">If you require further verification or details, please contact HR Ops at hr-ops@acme.com.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .ver-hdr { border-bottom: 1px solid #1a237e; padding-bottom: 3px; margin-bottom: 5px; }
      .hr-badge { font-family: sans-serif; background: #1a237e; color: #fff; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .ver-hdr h1 { font-size: 8px; color: #1a237e; font-weight: bold; margin-top: 2px; }
      .ref { font-family: sans-serif; font-size: 3.2px; color: #666; }
      p { font-size: 3.8px; color: #222; line-height: 1.35; }
      .ver-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin: 5px 0; }
      .ver-table th { text-align: left; background: #e8eaf6; padding: 2px 4px; font-weight: bold; width: 40%; color: #1a237e; }
      .ver-table td { padding: 2px 4px; border-bottom: 0.5px solid #e0e0e0; }
      .footer-note { font-family: sans-serif; font-size: 3.2px; color: #666; font-style: italic; margin-top: 6px; }
    `
	},

	// 4. Performance Improvement Plan (PIP) (HR & Management to Employee)
	{
		id: 'hr-pip-notice',
		title: 'Performance improvement plan (PIP)',
		styleVariant: 'BambooHR',
		htmlContent: `
      <header class="pip-hdr">
        <span class="pip-tag">BambooHR Add-on</span>
        <h1>PERFORMANCE IMPROVEMENT PLAN (PIP)</h1>
        <p class="meta">CONFIDENTIAL &bull; DURATION: 60 DAYS</p>
      </header>
      <main class="pip-body">
        <div class="employee-meta">
          <p><strong>Employee:</strong> Jordan Miller &bull; <strong>Title:</strong> QA Engineer</p>
          <p><strong>Manager:</strong> Sam Taylor &bull; <strong>Date Issued:</strong> Oct 24, 2026</p>
        </div>
        <section class="clause">
          <h2>1. Identified Performance Gaps</h2>
          <p>Deficiencies identified in test automation coverage for offscreen canvas scroller components.</p>
        </section>
        <section class="clause">
          <h2>2. Specific Objectives & Timeline</h2>
          <p>&bull; <strong>30-Day Goal:</strong> Complete automated test suite for Template Gallery schema load.<br>&bull; <strong>60-Day Goal:</strong> Achieve 95% pass rate on integration test suites.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .pip-hdr { border-bottom: 2px solid #e65100; padding-bottom: 3px; margin-bottom: 5px; }
      .pip-tag { background: #fff3e0; color: #e65100; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border: 0.5px solid #ffe0b2; border-radius: 1px; }
      .pip-hdr h1 { font-size: 8.5px; color: #e65100; font-weight: 800; margin-top: 2px; }
      .meta { font-size: 3.5px; color: #ef6c00; font-weight: bold; }
      .employee-meta { background: #fff3e0; padding: 4px; border-left: 2px solid #e65100; font-size: 3.8px; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #e65100; border-bottom: 0.5px solid #ffe0b2; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 5. Structured Candidate Interview Scorecard (For HR Operations)
	{
		id: 'hr-interview-scorecard',
		title: 'Candidate interview scorecard',
		styleVariant: 'Workday',
		htmlContent: `
      <header class="sc-hdr">
        <span class="wd-tag">Workday</span>
        <h1>CANDIDATE INTERVIEW SCORECARD</h1>
      </header>
      <main class="sc-body">
        <div class="candidate-info">
          <p><strong>Candidate:</strong> Taylor Reed &bull; <strong>Role:</strong> Senior UX Designer</p>
          <p><strong>Interviewer:</strong> Morgan Lee &bull; <strong>Date:</strong> Oct 24, 2026</p>
        </div>
        <table class="score-table">
          <thead>
            <tr><th>Competency Category</th><th>Rating (1-5)</th><th>Interviewer Comments</th></tr>
          </thead>
          <tbody>
            <tr><td>Technical Architecture</td><td><strong>4 / 5</strong></td><td>Strong grasp of CSS grids & layout bounds.</td></tr>
            <tr><td>System Design</td><td><strong>5 / 5</strong></td><td>Excellent understanding of DOM virtualization.</td></tr>
            <tr><td>Culture & Collaboration</td><td><strong>4 / 5</strong></td><td>Clear communication; aligns with team values.</td></tr>
          </tbody>
        </table>
        <div class="recommendation-box">
          <p><strong>OVERALL RECOMMENDATION:</strong> <span class="hire">STRONG HIRE</span></p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .sc-hdr { background: #0277bd; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .wd-tag { background: #b3e5fc; color: #01579b; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .sc-hdr h1 { font-size: 8.5px; font-weight: bold; color: #fff; margin-top: 2px; }
      .candidate-info { font-size: 3.8px; background: #e1f5fe; padding: 3px; border-radius: 2px; margin-bottom: 4px; }
      .score-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-bottom: 5px; }
      .score-table th { background: #b3e5fc; color: #01579b; text-align: left; padding: 2px; }
      .score-table td { border-bottom: 0.5px solid #e0e0e0; padding: 2px; }
      .recommendation-box { background: #e8f5e9; padding: 4px; border: 0.5px solid #a5d6a7; text-align: center; font-size: 4px; }
      .hire { color: #2e7d32; font-weight: bold; }
    `
	},

	// 6. Paid Time Off (PTO) / Leave Request Form (To HR)
	{
		id: 'hr-pto-request-form',
		title: 'Paid time off (PTO) request',
		styleVariant: 'Gusto',
		htmlContent: `
      <header class="pto-hdr">
        <span class="gusto-badge">Gusto</span>
        <h1>PAID TIME OFF (PTO) REQUEST</h1>
      </header>
      <main class="pto-body">
        <table class="pto-table">
          <tr><th>Employee Name:</th><td>Casey Bennett</td></tr>
          <tr><th>Department:</th><td>Frontend Engineering</td></tr>
          <tr><th>Leave Type:</th><td>Vacation / Personal PTO</td></tr>
          <tr><th>Dates Requested:</th><td>Nov 10, 2026 to Nov 18, 2026 (6 Days)</td></tr>
        </table>
        <section class="coverage">
          <h2>Coverage & Handover Plan</h2>
          <p>Alex will handle on-call engineering escalations and template schema PR reviews during this window.</p>
        </section>
        <div class="approval-status">
          <p>STATUS: <span class="appr">&check; APPROVED BY MANAGER & HR</span></p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .pto-hdr { border-bottom: 1.5px solid #ff6f00; padding-bottom: 3px; margin-bottom: 5px; }
      .gusto-badge { background: #fff8e1; color: #ff6f00; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border: 0.5px solid #ffe082; border-radius: 1px; }
      .pto-hdr h1 { font-size: 8.5px; color: #ff6f00; font-weight: 800; margin-top: 2px; }
      .pto-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin-bottom: 4px; }
      .pto-table th { text-align: left; background: #fff8e1; padding: 2px 4px; width: 35%; color: #ff6f00; font-weight: bold; }
      .pto-table td { padding: 2px 4px; border-bottom: 0.5px solid #ffe082; }
      .coverage h2 { font-size: 4.5px; font-weight: bold; color: #ff6f00; margin: 3px 0 1px 0; border-bottom: 0.5px solid #ffe082; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .approval-status { background: #e8f5e9; padding: 3px; border: 0.5px solid #a5d6a7; text-align: center; font-size: 3.8px; margin-top: 5px; }
      .appr { color: #2e7d32; font-weight: bold; }
    `
	},

	// 7. Workplace Incident / Grievance Report Form (To HR)
	{
		id: 'hr-incident-report',
		title: 'Workplace incident report',
		styleVariant: 'HR Operations',
		htmlContent: `
      <header class="ir-hdr">
        <h1>WORKPLACE INCIDENT REPORT FORM</h1>
        <p class="sub">FOR SUBMISSION TO HUMAN RESOURCES & SAFETY OFFICER</p>
      </header>
      <main class="ir-body">
        <div class="incident-meta">
          <p><strong>Incident ID:</strong> INC-2026-882 &bull; <strong>Date of Incident:</strong> Oct 22, 2026</p>
          <p><strong>Location:</strong> Main Campus, Building B, Room 302</p>
        </div>
        <section class="clause">
          <h2>1. Description of Event</h2>
          <p>Detailed factual summary of the safety or workplace policy incident observed.</p>
        </section>
        <section class="clause">
          <h2>2. Immediate Corrective Actions Taken</h2>
          <p>First aid or administrative action implemented prior to HR escalation.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .ir-hdr { border-bottom: 2px solid #c62828; padding-bottom: 3px; margin-bottom: 5px; }
      .ir-hdr h1 { font-size: 8.5px; font-weight: 800; color: #c62828; }
      .sub { font-size: 3.2px; color: #e53935; font-weight: bold; }
      .incident-meta { background: #ffebee; padding: 3px; border-left: 2px solid #c62828; font-size: 3.8px; color: #b71c1c; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: #c62828; border-bottom: 0.5px solid #ffcdd2; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 8. Employee Handbook Policy Acknowledgment (HR Policy)
	{
		id: 'hr-policy-acknowledgment',
		title: 'Employee handbook policy',
		styleVariant: 'BambooHR',
		htmlContent: `
      <header class="hb-hdr">
        <span class="bamboo-badge">BambooHR</span>
        <h1>COMPANY POLICY & HANDBOOK ACKNOWLEDGMENT</h1>
      </header>
      <main class="hb-body">
        <p>I hereby acknowledge that I have received, read, and understand the contents of the <strong>Acme Employee Handbook (2026 Edition)</strong>.</p>
        <section class="policy-list">
          <h2>Key Policy Acknowledged</h2>
          <p>&bull; Remote Work & Equipment Usage Policy<br>&bull; Information Security & IP Protection Policy<br>&bull; Equal Employment & Anti-Harassment Policy</p>
        </section>
        <div class="ack-sign">
          <p>Employee Digital Signature & Timestamp</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .hb-hdr { border-bottom: 1.5px solid #2e7d32; padding-bottom: 3px; margin-bottom: 5px; }
      .bamboo-badge { background: #e8f5e9; color: #2e7d32; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .hb-hdr h1 { font-size: 8px; color: #1b5e20; font-weight: bold; margin-top: 2px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .policy-list h2 { font-size: 4.5px; font-weight: bold; color: #1b5e20; border-bottom: 0.5px solid #a5d6a7; margin: 3px 0 1px 0; }
      .ack-sign { border: 0.5px dashed #2e7d32; padding: 4px; text-align: center; font-size: 3.5px; color: #1b5e20; margin-top: 6px; background: #f1f8e9; }
    `
	},

	// 9. New Hire Onboarding Checklist (From HR to Hiring Manager/Employee)
	{
		id: 'hr-onboarding-checklist',
		title: 'New hire onboarding checklist',
		styleVariant: 'Zenefits',
		htmlContent: `
      <header class="onb-hdr">
        <span class="hr-badge">Zenefits</span>
        <h1>30-60-90 DAY ONBOARDING CHECKLIST</h1>
      </header>
      <main class="onb-body">
        <section class="phase">
          <h2>Day 1 to 30: Orientation & Setup</h2>
          <p>&check; Complete Form I-9 & tax withholding setup<br>&check; Configure development environment & Lumino repo access</p>
        </section>
        <section class="phase">
          <h2>Day 31 to 60: Core Execution</h2>
          <p>&square; Submit first PR to Template Gallery widget<br>&square; Shadow lead architect during scroller performance review</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .onb-hdr { background: #4a148c; color: #fff; padding: 6px; margin: -10px -10px 5px -10px; }
      .hr-badge { background: #ea80fc; color: #4a148c; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .onb-hdr h1 { font-size: 8px; font-weight: bold; color: #fff; margin-top: 2px; }
      .phase h2 { font-size: 4.5px; font-weight: bold; color: #4a148c; border-bottom: 0.5px solid #e1bee7; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
    `
	},

	// 10. Separation / Termination Notice (HR to Employee)
	{
		id: 'hr-termination-notice',
		title: 'Separation notice',
		styleVariant: 'Zenefits',
		htmlContent: `
      <header class="sep-hdr">
        <span class="hr-badge">Zenefits</span>
        <h1>NOTICE OF SEPARATION & EXIT TERMS</h1>
        <p class="conf">STRICTLY CONFIDENTIAL</p>
      </header>
      <main class="sep-body">
        <p class="salutation">Dear [Employee Name],</p>
        <p>This letter confirms that your employment with <strong>Acme Corporation</strong> will terminate effective <strong>October 31, 2026</strong>.</p>
        <section class="terms">
          <h2>1. Final Compensation & COBRA</h2>
          <p>Your final paycheck, including accrued unused PTO balance, will be issued on the regular pay cycle. COBRA enrollment documents will follow via email.</p>
        </section>
        <section class="terms">
          <h2>2. Company Property Return</h2>
          <p>Please return all company hardware, access badges, and security tokens to HR by 5:00 PM on your final date.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .sep-hdr { border-bottom: 1.5px solid #37474f; padding-bottom: 3px; margin-bottom: 5px; }
      .hr-badge { background: #cfd8dc; color: #263238; font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .sep-hdr h1 { font-size: 8px; color: #263238; font-weight: bold; margin-top: 2px; }
      .conf { font-size: 3.2px; color: #78909c; font-weight: bold; }
      .salutation { font-size: 4px; font-weight: bold; margin-bottom: 3px; }
      p { font-size: 3.8px; color: #333; line-height: 1.35; }
      .terms h2 { font-size: 4.5px; font-weight: bold; color: #263238; border-bottom: 0.5px solid #cfd8dc; margin: 3px 0 1px 0; }
    `
	}
];

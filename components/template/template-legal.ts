import type { ITemplateItem } from './template';

export const LEGAL_TEMPLATES: ITemplateItem[] = [
	// 1. General Release of Liability (UpCounsel)
	{
		id: 'release-liability-upcounsel',
		title: 'General release of liability',
		styleVariant: 'UpCounsel',
		htmlContent: `
      <header class="legal-hdr">
        <span class="brand-badge">UpCounsel Add-on</span>
        <h1>GENERAL RELEASE OF LIABILITY & WAIVER</h1>
        <p class="subtitle">FORM REF: LEGAL-REL-2026-A</p>
      </header>
      <main class="legal-body">
        <p class="preamble">FOR AND IN CONSIDERATION of the covenants and agreements contained herein, the Releasor hereby releases, waives, and forever discharges the Releasee from any and all claims, demands, damages, and causes of action.</p>
        <section class="clause">
          <h2>1. Releasor & Releasee Identification</h2>
          <p><strong>RELEASOR:</strong> Individual or Entity releasing claims.</p>
          <p><strong>RELEASEE:</strong> Company, Facility, or Individual being released.</p>
        </section>
        <section class="clause">
          <h2>2. Scope of Waiver</h2>
          <p>This Waiver extends to all known and unknown claims arising out of participation in activities or usage of software platforms.</p>
        </section>
        <div class="sig-section">
          <div class="sig-box">
            <div class="line"></div>
            <p>Releasor Signature & Date</p>
          </div>
          <div class="sig-box">
            <div class="line"></div>
            <p>Releasee Signature & Date</p>
          </div>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; }
      .legal-hdr { text-align: center; border-bottom: 1.5px double #111; padding-bottom: 4px; margin-bottom: 5px; }
      .brand-badge { font-family: sans-serif; background: #0d47a1; color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; display: inline-block; margin-bottom: 2px; }
      .legal-hdr h1 { font-size: 8px; font-weight: bold; color: var(--ace-foreground, #111); letter-spacing: 0.3px; }
      .subtitle { font-family: sans-serif; font-size: 3.5px; color: #666; margin-top: 1px; }
      .preamble { font-size: 3.8px; font-style: italic; color: var(--ace-foreground, #333); margin-bottom: 4px; line-height: 1.35; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #000); border-bottom: 0.5px solid #ccc; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
      .sig-section { display: flex; gap: 8px; margin-top: 6px; }
      .sig-box { flex: 1; }
      .line { width: 100%; height: 0.5px; background: var(--ace-foreground, #000); margin-bottom: 2px; }
      .sig-box p { font-family: sans-serif; font-size: 3.2px; color: var(--ace-foreground, #555); text-align: center; }
    `
	},

	// 2. Software Licensing Agreement (EULA / SaaS UpCounsel)
	{
		id: 'software-license-upcounsel',
		title: 'Software licensing agreement',
		styleVariant: 'UpCounsel',
		htmlContent: `
      <header class="legal-hdr">
        <span class="brand-badge">UpCounsel Add-on</span>
        <h1>END USER SOFTWARE LICENSE AGREEMENT (EULA)</h1>
      </header>
      <main class="legal-body">
        <div class="notice-box">
          <p><strong>IMPORTANT:</strong> READ CAREFULLY BEFORE INSTALLING OR USING THIS SOFTWARE.</p>
        </div>
        <section class="clause">
          <h2>1. Grant of License</h2>
          <p>Licensor grants Licensee a non-exclusive, non-transferable right to execute the software binary and embed layout widgets.</p>
        </section>
        <section class="clause">
          <h2>2. Restrictions</h2>
          <p>Licensee shall not reverse engineer, decompile, or dissemble the core rendering modules except as expressly permitted by law.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, 'Times New Roman', serif; }
      .legal-hdr { border-bottom: 1px solid #1565c0; padding-bottom: 3px; margin-bottom: 5px; }
      .brand-badge { font-family: sans-serif; background: #0d47a1; color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .legal-hdr h1 { font-size: 8px; color: var(--ace-blue, #0d47a1); font-weight: bold; margin-top: 2px; }
      .notice-box { background: var(--ace-bg, #e3f2fd); border-left: 2px solid #1565c0; padding: 3px; margin-bottom: 4px; font-size: 3.6px; color: var(--ace-blue, #0d47a1); }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #111); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
    `
	},

	// 3. Privacy Policy (GDPR / CCPA UpCounsel)
	{
		id: 'privacy-policy-upcounsel',
		title: 'Privacy policy',
		styleVariant: 'UpCounsel',
		htmlContent: `
      <header class="legal-hdr">
        <span class="brand-badge">UpCounsel</span>
        <h1>PRIVACY POLICY & DATA PROTECTION</h1>
        <p class="updated">LAST UPDATED: OCTOBER 2026</p>
      </header>
      <main class="legal-body">
        <section class="clause">
          <h2>1. Information We Collect</h2>
          <p>We collect telemetry data necessary for maintaining real-time canvas state and virtualized viewport rendering.</p>
        </section>
        <section class="clause">
          <h2>2. Use of Data & Cookies</h2>
          <p>User layout configurations are cached locally using IndexedDB and ChatStorageEngine endpoints.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .legal-hdr { border-bottom: 1px solid #37474f; padding-bottom: 3px; margin-bottom: 5px; }
      .brand-badge { background: var(--ace-foreground, #37474f); color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .legal-hdr h1 { font-size: 8.5px; font-weight: 700; color: var(--ace-foreground, #263238); margin-top: 2px; }
      .updated { font-size: 3.5px; color: var(--ace-comment, #78909c); }
      .clause h2 { font-size: 4.5px; font-weight: 600; color: var(--ace-foreground, #37474f); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 4. Terms of Use / Terms of Service (UpCounsel)
	{
		id: 'terms-of-use-upcounsel',
		title: 'Terms of use',
		styleVariant: 'UpCounsel',
		htmlContent: `
      <header class="legal-hdr">
        <span class="brand-badge">UpCounsel</span>
        <h1>TERMS OF USE AGREEMENT</h1>
      </header>
      <main class="legal-body">
        <p class="intro">Welcome to our web presence platform. By accessing or using our Lumino widget services, you agree to be bound by these terms.</p>
        <section class="clause">
          <h2>1. User Content & Canvas Rights</h2>
          <p>You retain full ownership of all documents, templates, and vector graphics generated inside the editor.</p>
        </section>
        <section class="clause">
          <h2>2. Termination of Service</h2>
          <p>We reserve the right to suspend accounts violating system integrity or security protocols.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: system-ui, sans-serif; }
      .legal-hdr { border-bottom: 1.5px solid #263238; padding-bottom: 3px; margin-bottom: 5px; }
      .brand-badge { background: var(--ace-foreground, #263238); color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .legal-hdr h1 { font-size: 8.5px; font-weight: 700; color: var(--ace-foreground, #263238); margin-top: 2px; }
      .intro { font-size: 3.8px; color: var(--ace-comment, #546e7a); margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: 600; color: var(--ace-foreground, #263238); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #333); line-height: 1.35; }
    `
	},

	// 5. Independent Contractor Agreement (Work-for-Hire)
	{
		id: 'contractor-agreement',
		title: 'Independent contractor agreement',
		styleVariant: 'LegalZoom',
		htmlContent: `
      <header class="legal-hdr">
        <span class="badge">LegalZoom</span>
        <h1>INDEPENDENT CONTRACTOR AGREEMENT</h1>
      </header>
      <main class="legal-body">
        <section class="clause">
          <h2>1. Engagement & Services</h2>
          <p>Company hereby engages Contractor to perform software development services involving Lumino widgets and Fabric.js canvas components.</p>
        </section>
        <section class="clause">
          <h2>2. Work for Hire & IP Ownership</h2>
          <p>All deliverables, code modifications, and custom template schemas created under this Agreement shall constitute a "work made for hire."</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .legal-hdr { text-align: center; border-bottom: 1px solid #111; padding-bottom: 3px; margin-bottom: 5px; }
      .badge { font-family: sans-serif; background: var(--ace-pink, #d32f2f); color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .legal-hdr h1 { font-size: 8px; font-weight: bold; color: var(--ace-foreground, #111); margin-top: 2px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #111); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
    `
	},

	// 6. Power of Attorney (General / Limited)
	{
		id: 'power-of-attorney',
		title: 'Power of attorney',
		styleVariant: 'Formal Legal',
		htmlContent: `
      <header class="legal-hdr">
        <h1>GENERAL POWER OF ATTORNEY</h1>
        <div class="double-line"></div>
      </header>
      <main class="legal-body">
        <p class="grant">KNOW ALL MEN BY THESE PRESENTS, that the Principal hereby appoints the Agent as attorney-in-fact to act in Principal's name, place, and stead.</p>
        <section class="clause">
          <h2>1. Granted Powers</h2>
          <p>To execute contracts, manage financial accounts, and handle legal correspondence on behalf of Principal.</p>
        </section>
        <div class="witness-box">
          <p><strong>WITNESS WHEREOF:</strong> Executed this 24th day of October, 2026.</p>
          <div class="w-line"></div>
          <p>Notary Public / Witness Signature</p>
        </div>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .legal-hdr { text-align: center; margin-bottom: 5px; }
      .legal-hdr h1 { font-size: 8.5px; font-weight: bold; letter-spacing: 0.5px; color: var(--ace-foreground, #000); }
      .double-line { border-bottom: 1.5px double #000; margin-top: 2px; }
      .grant { font-size: 3.8px; font-style: italic; color: var(--ace-foreground, #222); margin-bottom: 4px; line-height: 1.35; }
      .clause h2 { font-size: 4.5px; font-weight: bold; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
      .witness-box { margin-top: 6px; border: 0.5px solid #000; padding: 4px; font-size: 3.5px; }
      .w-line { width: 100%; height: 0.5px; background: var(--ace-foreground, #000); margin: 4px 0 1px 0; }
    `
	},

	// 7. Residential Lease Agreement
	{
		id: 'residential-lease',
		title: 'Residential lease agreement',
		styleVariant: 'Standard Lease',
		htmlContent: `
      <header class="legal-hdr">
        <h1>RESIDENTIAL LEASE AGREEMENT</h1>
      </header>
      <main class="legal-body">
        <div class="lease-parties">
          <p><strong>LANDLORD:</strong> Property Management Group LLC</p>
          <p><strong>TENANT:</strong> Individual Resident</p>
          <p><strong>PREMISES:</strong> 100 Innovation Drive, Apt 4B</p>
        </div>
        <section class="clause">
          <h2>1. Term & Monthly Rent</h2>
          <p>Lease commences Nov 1, 2026. Monthly rent of $2,200 due on the first day of each calendar month.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .legal-hdr { text-align: center; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 5px; }
      .legal-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-foreground, #000); }
      .lease-parties { background: var(--ace-bg, #f5f5f5); padding: 4px; border: 0.5px solid #ccc; font-size: 3.8px; margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
    `
	},

	// 8. Cease and Desist Notice (Formal Legal Warning)
	{
		id: 'cease-and-desist',
		title: 'Cease and desist letter',
		styleVariant: 'Formal Notice',
		htmlContent: `
      <header class="cd-hdr">
        <h1>CEASE AND DESIST DEMAND</h1>
        <p class="warning">VIA CERTIFIED MAIL &bull; RETURN RECEIPT REQUESTED</p>
      </header>
      <main class="cd-body">
        <p class="salutation">Dear Recipient,</p>
        <p>This letter serves as formal notice that your unauthorized usage of our trademarked design assets constitutes copyright infringement.</p>
        <section class="clause">
          <h2>Demand Notice</h2>
          <p>You are hereby commanded to immediately CEASE AND DESIST all further distribution of infringing materials within 10 business days.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .cd-hdr { border-bottom: 2px solid #b71c1c; padding-bottom: 3px; margin-bottom: 5px; }
      .cd-hdr h1 { font-size: 8.5px; font-weight: bold; color: var(--ace-pink, #b71c1c); }
      .warning { font-family: sans-serif; font-size: 3.5px; color: var(--ace-pink, #d32f2f); font-weight: bold; }
      .salutation { font-size: 4px; font-weight: bold; margin-bottom: 3px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-pink, #b71c1c); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.35; }
    `
	},

	// 9. Bill of Sale (Equipment & Personal Property)
	{
		id: 'bill-of-sale',
		title: 'Bill of sale',
		styleVariant: 'Standard Legal',
		htmlContent: `
      <header class="legal-hdr">
        <h1>BILL OF SALE & ASSIGNMENT</h1>
      </header>
      <main class="legal-body">
        <p>FOR VALUE RECEIVED, the undersigned Seller hereby sells, transfers, and conveys to Buyer the following property:</p>
        <table class="item-table">
          <thead><tr><th>Item Description</th><th>Serial / ID</th><th>Price</th></tr></thead>
          <tbody>
            <tr><td>High-End Workstation Server</td><td>SN-9982-X</td><td>$3,500</td></tr>
          </tbody>
        </table>
        <p>Seller warrants that the property is sold free and clear of all liens and encumbrances.</p>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .legal-hdr { text-align: center; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 5px; }
      .legal-hdr h1 { font-size: 8.5px; font-weight: bold; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
      .item-table { width: 100%; border-collapse: collapse; font-size: 3.8px; margin: 4px 0; }
      .item-table th { border-bottom: 1px solid #000; text-align: left; padding: 2px; }
      .item-table td { border-bottom: 0.5px solid #ccc; padding: 2px; }
    `
	},

	// 10. LLC Operating Agreement (Member-Managed Corporate Governance)
	{
		id: 'llc-operating-agreement',
		title: 'LLC operating agreement',
		styleVariant: 'Corporate Legal',
		htmlContent: `
      <header class="legal-hdr">
        <span class="badge">LegalZoom</span>
        <h1>LIMITED LIABILITY COMPANY OPERATING AGREEMENT</h1>
      </header>
      <main class="legal-body">
        <p class="intro">This Operating Agreement is adopted by the Members of <strong>Studio Systems LLC</strong>, a Delaware Limited Liability Company.</p>
        <section class="clause">
          <h2>Article I: Capital Contributions</h2>
          <p>Members shall contribute capital as set forth in Schedule A attached hereto. Capital accounts shall be maintained accordingly.</p>
        </section>
        <section class="clause">
          <h2>Article II: Management & Voting</h2>
          <p>Management of the Company shall be vested in the Members in proportion to their percentage ownership interest.</p>
        </section>
      </main>
    `,
		cssContent: `
      * { font-family: Georgia, serif; }
      .legal-hdr { text-align: center; border-bottom: 1.5px double #000; padding-bottom: 3px; margin-bottom: 5px; }
      .badge { font-family: sans-serif; background: var(--ace-pink, #d32f2f); color: var(--ace-bg, #fff); font-size: 3.5px; font-weight: bold; padding: 1px 3px; border-radius: 1px; }
      .legal-hdr h1 { font-size: 8px; font-weight: bold; color: var(--ace-foreground, #000); margin-top: 2px; }
      .intro { font-size: 3.8px; font-style: italic; color: var(--ace-foreground, #333); margin-bottom: 4px; }
      .clause h2 { font-size: 4.5px; font-weight: bold; color: var(--ace-foreground, #000); margin: 3px 0 1px 0; }
      p { font-size: 3.8px; color: var(--ace-foreground, #222); line-height: 1.3; }
    `
	}
];

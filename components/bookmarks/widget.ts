import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import { WidgetSearchBar } from '../art/widget-search';

export interface IBookmarkNode
{
	id: string;
	title: string;
	url?: string;
	folderPath: string; // e.g. "Bookmarks Bar/Dev/Tools"
	addDate?: Date;
	icon?: string;
	sourceFileId: string;
	status: 'normal' | 'duplicate' | 'misfit' | 'missing';
	misfitReason?: string;
}

export interface IBookmarkFileSource
{
	id: string;
	fileName: string;
	droppedAt: Date;
	itemCount: number;
}


export type BookmarksDeltaFilter = 'all' | 'duplicate' | 'misfit' | 'missing';


export class BookmarksWidget extends Widget
{
	public readonly exportTriggered = new Signal<this, string>(this);

	private fileSources: IBookmarkFileSource[] = [];
	private allBookmarks: IBookmarkNode[] = [];
	private targetFolderTree: string[] = ['Bookmarks Bar', 'Bookmarks Bar/Dev', 'Other Bookmarks'];
	private activeFilter: BookmarksDeltaFilter = 'all';
	private viewMode: 'cards' | 'grid' = 'cards';
	private selectedBookmark: IBookmarkNode | null = null;
	public _toggleBtn?: HTMLElement | HTMLDivElement;

	constructor(title: string = 'Visual Bookmark Diff & Merge')
	{
		super();
		this.id = 'lumino-bookmark-manager';
		this.title.label = title;
		this.title.iconClass = 'bx bx-bookmarks';
		this.addClass('bm-manager-widget');
	}

	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		this.renderLayout();
		WidgetSearchBar.attachToggleIcon(this, this.renderToggleBtn, this.clickToggleBtn);
	}


	protected override onBeforeDetach(msg: Message): void
	{
		if(this._toggleBtn)
		{
			this._toggleBtn?.remove();
			this._toggleBtn = undefined;
		}
		super.onBeforeDetach(msg);
	}

	protected renderToggleBtn(toggle: HTMLElement)
	{
		toggle.innerHTML = `<i class="bx ${this.viewMode === 'grid' ? 'bx-list' : 'bx-grid'}"></i>`;
		toggle.title = this.viewMode === 'grid' ? 'List View' : 'Cards View';
	}


	protected clickToggleBtn()
	{
		this.viewMode = this.viewMode === 'grid' ? 'cards' : 'grid';
		this.renderLayout();
		this.fit();
		this.update();
	}

	/**
	 * Main DOM Shell Construction
	 */
	private renderLayout(): void
	{
		this.node.innerHTML = '';

		const container = document.createElement('div');
		container.className = 'bm-container';

		// Main Split Content View (Left Controls/Schema - Right Visual Grid)
		const bodySplit = document.createElement('div');
		bodySplit.className = 'bm-body-split';

		bodySplit.appendChild(this.createControlPanel());
		bodySplit.appendChild(this.createMainViewGrid());

		container.appendChild(bodySplit);
		this.node.appendChild(container);

		this.setupDragAndDrop();
	}

	/**
	 * Header Toolbar with Quick Stats, PDF Export & Netscape File Export
	 */
	private createTopToolbar(): HTMLElement
	{
		const toolbar = document.createElement('div');
		toolbar.className = 'bm-toolbar';

		const actions = document.createElement('div');
		actions.className = 'bm-toolbar-actions';

		// Export Netscape HTML File
		const btnExport = document.createElement('button');
		btnExport.className = 'bm-btn bm-btn-primary';
		btnExport.innerHTML = `<i class="bx bx-arrow-in-up-square-half"></i> Export Merged`;
		btnExport.onclick = () => this.handleExportHTML();

		// Print / Save to PDF
		const btnPdf = document.createElement('button');
		btnPdf.className = 'bm-btn bm-btn-secondary';
		btnPdf.innerHTML = `📄 Save as PDF`;
		btnPdf.onclick = () => window.print();

		// View Toggle Buttons (Cards vs Grid)
		// const btnCards = document.createElement('button');
		// btnCards.className = `bm-btn bm-btn-icon ${this.viewMode === 'cards' ? 'active' : ''}`;
		// btnCards.innerText = '🔲 Grid';
		// btnCards.onclick = () => { this.viewMode = 'cards'; this.renderLayout(); };

		// const btnGrid = document.createElement('button');
		// btnGrid.className = `bm-btn bm-btn-icon ${this.viewMode === 'grid' ? 'active' : ''}`;
		// btnGrid.innerText = '☰ List';
		// btnGrid.onclick = () => { this.viewMode = 'grid'; this.renderLayout(); };

		actions.appendChild(btnPdf);
		actions.appendChild(btnExport);
		// actions.appendChild(btnCards);
		// actions.appendChild(btnGrid);

		toolbar.appendChild(actions);

		return toolbar;
	}

	/**
	 * Left Control Sidebar: Multi-file Dropzone, Schema JSON Textbox, Diff Filter Controls
	 */
	private createControlPanel(): HTMLElement
	{
		const panel = document.createElement('div');
		panel.className = 'bm-sidebar';

		// 1. File Drop Zone
		const dropzone = document.createElement('div');
		dropzone.className = 'bm-dropzone';
		dropzone.id = 'bm-dropzone-target';
		dropzone.innerHTML = `
      <div class="bm-dropzone-icon">📁</div>
      <div class="bm-dropzone-text"><strong>Drag & Drop HTML / Chrome JSON Bookmarks</strong></div>
      <div class="bm-dropzone-sub">Drop multiple files to calculate temporal merges & diffs</div>
    `;

		// 2. Dropped Files Timeline List
		const fileListSection = document.createElement('div');
		fileListSection.className = 'bm-sidebar-section';
		fileListSection.innerHTML = `<div class="bm-section-title">Files Tracked (${this.fileSources.length})</div>`;
		const fileUl = document.createElement('ul');
		fileUl.className = 'bm-file-list';

		this.fileSources.forEach((src) =>
		{
			const li = document.createElement('li');
			li.className = 'bm-file-item';
			li.innerHTML = `
        <span class="bm-file-name">${src.fileName}</span>
        <span class="bm-file-badge">${src.itemCount} items</span>
      `;
			fileUl.appendChild(li);
		});
		fileListSection.appendChild(fileUl);

		// 3. Schema JSON Target Textbox
		const schemaSection = document.createElement('div');
		schemaSection.className = 'bm-sidebar-section';
		schemaSection.innerHTML = `
      <div class="bm-section-title">Target Folder Tree (JSON)</div>
      <div class="bm-section-sub">All bookmarks will attempt to match these folder paths:</div>
    `;

		const schemaInput = document.createElement('textarea');
		schemaInput.className = 'bm-schema-textarea';
		schemaInput.value = JSON.stringify(this.targetFolderTree, null, 2);
		schemaInput.onchange = () =>
		{
			try
			{
				this.targetFolderTree = JSON.parse(schemaInput.value);
				this.recalculateStatuses();
				this.renderLayout();
			} catch(err)
			{
				alert('Invalid JSON folder structure provided.');
			}
		};

		schemaSection.appendChild(schemaInput);

		// 4. Status Legend / Filter Buttons
		const filterSection = document.createElement('div');
		filterSection.className = 'bm-sidebar-section';
		filterSection.innerHTML = `<div class="bm-section-title">Filter Diff Statuses</div>`;

		const filterGroup = document.createElement('div');
		filterGroup.className = 'bm-filter-group';

		const filters: Array<{ label: string; key: BookmarksDeltaFilter; cssClass: string; }> = [
			{ label: 'All Items', key: 'all', cssClass: 'filter-all' },
			{ label: 'Duplicates', key: 'duplicate', cssClass: 'filter-dupe' },
			{ label: 'Misfits', key: 'misfit', cssClass: 'filter-misfit' },
			{ label: 'Missing Tree', key: 'missing', cssClass: 'filter-missing' }
		];

		filters.forEach((f) =>
		{
			const btn = document.createElement('button');
			btn.className = `bm-filter-btn ${f.cssClass} ${this.activeFilter === f.key ? 'selected' : ''}`;
			btn.innerText = f.label;
			btn.onclick = () =>
			{
				this.activeFilter = f.key;
				this.renderLayout();
			};
			filterGroup.appendChild(btn);
		});

		filterSection.appendChild(filterGroup);

		// Top Action Toolbar
		panel.appendChild(this.createTopToolbar());
		panel.appendChild(dropzone);
		panel.appendChild(fileListSection);
		panel.appendChild(schemaSection);
		panel.appendChild(filterSection);

		return panel;
	}

	/**
	 * Main View: Chrome-Style Bookmark Grid / Expanding Inspector View
	 */
	private createMainViewGrid(): HTMLElement
	{
		const mainView = document.createElement('div');
		mainView.className = 'bm-main-view';

		const filtered = this.allBookmarks.filter((b) =>
		{
			if(this.activeFilter === 'all') return true;
			return b.status === this.activeFilter;
		});

		if(filtered.length === 0)
		{
			mainView.innerHTML = `
        <div class="bm-empty-state">
          <h3>No Bookmarks Loaded or Filtered</h3>
          <p>Drop one or more HTML / Chrome Bookmarks JSON files into the dropzone to visualize and diff.</p>
        </div>
      `;
			return mainView;
		}

		const gridWrapper = document.createElement('div');
		gridWrapper.className = this.viewMode === 'cards' ? 'bm-cards-grid' : 'bm-expanding-grid';

		filtered.forEach((bm) =>
		{
			const card = document.createElement('div');
			card.className = `bm-card bm-status-${bm.status} ${this.selectedBookmark?.id === bm.id ? 'active-selected' : ''}`;

			const iconUrl = bm.icon || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';

			card.innerHTML = `
        <div class="bm-card-header">
          <img class="bm-card-icon" src="${iconUrl}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'16\\' height=\\'16\\'><circle cx=\\'8\\' cy=\\'8\\' r=\\'7\\' fill=\\'%23ccc\\'/></svg>'" />
          <div class="bm-card-title">${this.escapeHtml(bm.title)}</div>
          <span class="bm-status-badge badge-${bm.status}">${bm.status.toUpperCase()}</span>
        </div>
        <div class="bm-card-body">
          <div class="bm-card-url">${this.escapeHtml(bm.url || 'No URL')}</div>
          <div class="bm-card-meta">
            <span class="bm-meta-path">📁 ${this.escapeHtml(bm.folderPath)}</span>
            <span class="bm-meta-date">${bm.addDate ? bm.addDate.toLocaleDateString() : 'N/A'}</span>
          </div>
          ${bm.misfitReason ? `<div class="bm-card-warning">${bm.misfitReason}</div>` : ''}
        </div>
      `;

			card.onclick = () =>
			{
				this.selectedBookmark = bm;
				this.renderLayout();
			};

			gridWrapper.appendChild(card);
		});

		mainView.appendChild(gridWrapper);

		// Inspector Side Sheet for Detailed Inspections & Download/PDF triggers
		if(this.selectedBookmark)
		{
			mainView.appendChild(this.createInspectorPanel(this.selectedBookmark));
		}

		return mainView;
	}

	/**
	 * Bookmark Inspector Panel (Extra details, single item export, PDF print snippet)
	 */
	private createInspectorPanel(bm: IBookmarkNode): HTMLElement
	{
		const inspector = document.createElement('div');
		inspector.className = 'bm-inspector-panel';

		inspector.innerHTML = `
      <div class="bm-inspector-header">
        <h4>Bookmark Details</h4>
        <button class="bm-close-btn">&times;</button>
      </div>
      <div class="bm-inspector-content">
        <label>Title</label>
        <input type="text" value="${this.escapeHtml(bm.title)}" readonly />

        <label>URL</label>
        <input type="text" value="${this.escapeHtml(bm.url || '')}" readonly />

        <label>Folder Target Path</label>
        <input type="text" value="${this.escapeHtml(bm.folderPath)}" readonly />

        <label>Diff Status Classification</label>
        <div class="bm-status-pill pill-${bm.status}">${bm.status.toUpperCase()}</div>

        <div class="bm-inspector-actions">
          <a href="${bm.url}" target="_blank" class="bm-btn bm-btn-primary">Open Link</a>
          <button id="btn-inspector-pdf" class="bm-btn bm-btn-secondary">Export Record</button>
        </div>
      </div>
    `;

		inspector.querySelector('.bm-close-btn')?.addEventListener('click', () =>
		{
			this.selectedBookmark = null;
			this.renderLayout();
		});

		return inspector;
	}

	/**
	 * Drag & Drop event listener setups for multiple HTML/JSON parsing
	 */
	private setupDragAndDrop(): void
	{
		const dropzone = this.node.querySelector('#bm-dropzone-target');
		if(!dropzone) return;

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) =>
		{
			dropzone.addEventListener(eventName, (e) =>
			{
				e.preventDefault();
				e.stopPropagation();
			});
		});

		dropzone.addEventListener('dragover', () => dropzone.classList.add('bm-dropzone-hover'));
		dropzone.addEventListener('dragleave', () => dropzone.classList.remove('bm-dropzone-hover'));

		dropzone.addEventListener('drop', async (e: Event) =>
		{
			dropzone.classList.remove('bm-dropzone-hover');
			const dragEvent = e as DragEvent;
			const files = dragEvent.dataTransfer?.files;

			if(files && files.length > 0)
			{
				for(let i = 0; i < files.length; i++)
				{
					await this.processDroppedFile(files[i]);
				}
				this.recalculateStatuses();
				this.renderLayout();
			}
		});
	}

	/**
	 * Process individual dropped HTML or JSON bookmark export file
	 */
	private async processDroppedFile(file: File): Promise<void>
	{
		const content = await file.text();
		const sourceId = `file-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`;

		let newItems: IBookmarkNode[] = [];

		if(file.name.endsWith('.json') || content.trim().startsWith('{'))
		{
			newItems = this.parseChromeJson(content, sourceId);
		} else
		{
			newItems = this.parseNetscapeHtml(content, sourceId);
		}

		this.fileSources.push({
			id: sourceId,
			fileName: file.name,
			droppedAt: new Date(),
			itemCount: newItems.length
		});

		this.allBookmarks = [...this.allBookmarks, ...newItems];
	}

	/**
	 * Parser for NETSCAPE-Bookmark-file HTML
	 */
	private parseNetscapeHtml(html: string, sourceId: string): IBookmarkNode[]
	{
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const links = Array.from(doc.querySelectorAll('a'));

		return links.map((a, idx) =>
		{
			// Determine folder path by looking at parents
			let parent = a.parentElement;
			const folders: string[] = [];
			while(parent)
			{
				if(parent.tagName === 'DL')
				{
					const prevHeader = parent.previousElementSibling;
					if(prevHeader && (prevHeader.tagName === 'H3' || prevHeader.tagName === 'H2'))
					{
						folders.unshift(prevHeader.textContent || 'Unsorted');
					}
				}
				parent = parent.parentElement;
			}

			const folderPath = folders.length > 0 ? folders.join('/') : 'Bookmarks Bar';
			const addDateUnix = a.getAttribute('add_date');

			return {
				id: `bm-${sourceId}-${idx}`,
				title: a.textContent || 'Untitled Bookmark',
				url: a.getAttribute('href') || '',
				folderPath,
				addDate: addDateUnix ? new Date(parseInt(addDateUnix, 10) * 1000) : new Date(),
				icon: a.getAttribute('icon') || undefined,
				sourceFileId: sourceId,
				status: 'normal'
			};
		});
	}

	/**
	 * Parser for Chrome Bookmarks JSON format
	 */
	private parseChromeJson(jsonStr: string, sourceId: string): IBookmarkNode[]
	{
		const results: IBookmarkNode[] = [];
		try
		{
			const data = JSON.parse(jsonStr);
			const roots = data.roots || { bookmark_bar: data };

			const traverse = (node: any, currentPath: string) =>
			{
				if(node.type === 'url')
				{
					results.push({
						id: `bm-${sourceId}-${results.length}`,
						title: node.name || 'Untitled',
						url: node.url,
						folderPath: currentPath,
						addDate: node.date_added ? new Date(parseInt(node.date_added, 10) / 1000) : new Date(),
						sourceFileId: sourceId,
						status: 'normal'
					});
				} else if(node.children)
				{
					const nextPath = currentPath ? `${currentPath}/${node.name}` : node.name || 'Bookmarks Bar';
					node.children.forEach((child: any) => traverse(child, nextPath));
				}
			};

			Object.keys(roots).forEach((key) => traverse(roots[key], key));
		} catch(e)
		{
			console.error('Failed parsing Chrome JSON Bookmarks', e);
		}
		return results;
	}

	/**
	 * Recalculates diff flags (Duplicate = Green, Misfit = Blue, Missing = Red)
	 */
	private recalculateStatuses(): void
	{
		const urlMap = new Map<string, number>();

		// Count URLs for duplicates
		this.allBookmarks.forEach((b) =>
		{
			if(b.url)
			{
				urlMap.set(b.url, (urlMap.get(b.url) || 0) + 1);
			}
		});

		this.allBookmarks.forEach((b) =>
		{
			// 1. Duplicate check
			if(b.url && (urlMap.get(b.url) || 0) > 1)
			{
				b.status = 'duplicate';
				return;
			}

			// 2. Misfit check against user JSON schema
			const matchesSchema = this.targetFolderTree.some(
				(targetPath) => targetPath.toLowerCase() === b.folderPath.toLowerCase()
			);

			if(!matchesSchema && this.targetFolderTree.length > 0)
			{
				b.status = 'misfit';
				b.misfitReason = `Path "${b.folderPath}" not in target JSON schema`;
				return;
			}

			b.status = 'normal';
		});
	}

	/**
	 * Export Merged Bookmarks back into standard Netscape HTML format
	 */
	private handleExportHTML(): void
	{
		let htmlContent = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file. -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks Bar</H1>
<DL><p>\n`;

		this.allBookmarks.forEach((b) =>
		{
			const dateUnix = b.addDate ? Math.floor(b.addDate.getTime() / 1000) : '';
			htmlContent += `    <DT><A HREF="${b.url}" ADD_DATE="${dateUnix}">${this.escapeHtml(b.title)}</A>\n`;
		});

		htmlContent += `</DL><p>\n`;

		// Download file trigger
		const blob = new Blob([htmlContent], { type: 'text/html' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `merged_bookmarks_${Date.now()}.html`;
		a.click();
		URL.revokeObjectURL(url);

		this.exportTriggered.emit(htmlContent);
	}

	private escapeHtml(str: string): string
	{
		return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
}

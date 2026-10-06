// menu.ts
import { Menu, MenuBar, DockPanel, Panel, Widget } from '@lumino/widgets';
import { CommandRegistry } from '@lumino/commands';
import { RepositoryToolbar } from './menu-repos';
import { ScriptToolbar } from './menu-script';
import { ApplicationToolbar } from './menu-app';
import { FileToolbar } from './menu-file';
import { SettingsToolbar } from './menu-settings';
import { HistoryToolbar } from './menu-history';
import { LayoutAdjuster } from './lumino-widget';
import { loadAndInstantiate } from './babel-compile';
import { OUTLINE_WIDGET_TYPES, updateModifierPressed } from './lumino-resize';
import { FileManager } from './lumino-files';
import type { GlobalToolbarsWindow, LuminoMenuWindow, RepositorySettingsWindow } from './menu.d';
import type { LuminoLayoutWindow } from './lumino.d';
import type { EditorWindow } from '../editor/widget.d';
import { EditToolbar } from './menu-edit';
import { ViewToolbar } from './menu-view';
import { LayoutToolbar } from './menu-layout';


const menuSelf: RepositorySettingsWindow & LuminoMenuWindow & LuminoLayoutWindow & GlobalToolbarsWindow & EditorWindow = self as unknown as any;


export interface TopBarComponents
{
	headerRow: Panel;
	menuBar: MenuBar;
}


export interface TerminalFilter
{
	id: string;
	label: string;
}



export interface ComponentRoute
{
	key?: string;
	label: string;
	url?: string;
	className?: string;
	iconClass: string; // The specific Boxicons layout string tokens
	description?: string;
	subtext?: string;
}

// 1. Unified metadata tree tracking every panel type and icon token
export const MODULE_REGISTRY: Record<string, ComponentRoute> = {
	'collapse': {
		label: 'Collapse',
		iconClass: 'bx bx-arrow-in-left-square-half',
		subtext: 'Requires Lumino DockPanel container references and UI state layout persistence.',
		description: 'Collapses active sidebars or secondary workspace panels to maximize primary viewing space across media and storage widgets.'
	},
	'writer': {
		label: 'Content Writer',
		url: './components/writer/widget.ts',
		className: 'WriterWidget',
		iconClass: 'bx bx-code-alt',
		subtext: 'Requires rich-text editor bindings, markdown parsers, and live document state signals.',
		description: 'Provides a distraction-free environment for drafting, editing, and formatting structured content with real-time preview tools.'
	},
	'layout': {
		label: 'Layout Manager',
		url: './components/template/template.bundle.js',
		className: 'TemplateWidget',
		iconClass: 'bx bx-scroll',
		subtext: 'Requires Lumino Widget lifecycle management and pre-built layout template definitions.',
		description: 'Generates and organizes structured page layouts, allowing fast selection and rendering of multi-section document templates.'
	},
	'theme': {
		label: 'Theme Writer',
		url: './components/content/widget-theme.ts',
		className: 'ThemeWidget',
		iconClass: 'bx bx-brightness-half',
		subtext: 'Requires CSS variable injection engines and workspace-wide color palette state.',
		description: 'Customizes application visual themes, typography, and styling variables dynamically across all active workspace widgets.'
	},
	'database': {
		label: 'Secure Storage',
		url: './components/filelist/widget-database.ts',
		className: 'DatabaseListWidget',
		iconClass: 'bx bx-database',
		subtext: 'Requires IndexedDB or local database connection providers and encryption handlers.',
		description: 'Manages encrypted local datasets, stored credentials, and structured records with secure query and retrieval features.'
	},
	'shop': {
		label: 'Merchant Tools',
		url: './components/shop/widget.ts',
		className: 'MerchantWidget',
		iconClass: 'bx bx-store',
		subtext: 'Requires commerce API integration hooks and product catalog schema definitions.',
		description: 'Facilitates product listings, store management, transaction tracking, and inventory sync for content creator storefronts.'
	},
	'backups': {
		label: 'Backups/Export',
		url: './components/backups/widget.ts',
		className: 'BackupsWidget',
		iconClass: 'bx bx-hard-drive',
		subtext: 'Requires file system compression utilities and scheduled snapshot background handlers.',
		description: 'Handles complete workspace data backups, automated snapshots, and bulk exports in standardized file formats.'
	},
	'tools': {
		label: 'Writing Tools',
		url: './components/tools/widget.ts',
		className: 'ToolsWidget',
		iconClass: 'bx bx-note-book',
		subtext: 'Requires clipboard management services and text transformation helper utilities.',
		description: 'Offers utility helpers including string formatters, word counters, text clean-up scripts, and quick reference notes.'
	},
	'chat': {
		label: 'Curation',
		url: './components/chat/widget.ts',
		className: 'ChatWidget',
		iconClass: 'bx bx-robot',
		subtext: 'Requires LLM API client interfaces and prompt pipeline state synchronization.',
		description: 'Provides AI-assisted content curation, automated brainstorming, and interactive context-aware document generation.'
	},
	'searchlist': {
		label: 'Search Files',
		url: './components/filelist/widget-search.ts',
		className: 'SearchListWidget',
		iconClass: 'bx bx-search',
		subtext: 'Requires full-text search indexing engines and fuzzy matching query routines.',
		description: 'Executes rapid full-text queries across stored documents, metadata tags, and file directory structures.'
	},
	//'filelist': {
	//	label: 'Secure Storage',
	//	url: './components/filelist/widget.ts',
	//	className: 'FileListWidget',
	//	iconClass: 'bi bi-database-lock',
	//	subtext: 'Requires file system access tokens and cryptographic key management.',
	//	description: 'Browse, lock, and organize protected document archives with cryptographic access controls.'
	//},

	'terminal-container': {
		label: 'Show Console',
		url: './components/terminal/widget.ts',
		className: 'TerminalWidget',
		iconClass: 'bx bx-terminal',
		subtext: 'Requires virtual terminal emulators (xterm.js) and command execution sockets.',
		description: 'Renders an embedded interactive terminal console for running workspace scripts, CLI tools, and system diagnostics.'
	},
	'graph': {
		label: 'Workflow Graph',
		url: './components/graph/widget.ts',
		className: 'LightGraphWidget',
		iconClass: 'bx bx-chart-stacked-rows',
		subtext: 'Requires canvas rendering engines (LiteGraph) and node-link data structures.',
		description: 'Visualizes document dependencies, automated content pipelines, and node-based logic flows in an interactive graph canvas.'
	},
};


menuSelf.MODULE_REGISTRY = MODULE_REGISTRY;

export const TOOLS_REGISTRY: Record<string, ComponentRoute> = {
	'settings': {
		label: 'Edit Settings',
		url: './components/editor/widget-settings.ts',
		className: 'SettingsWidget',
		iconClass: 'bx bx-gear',
		subtext: 'Requires local storage key-value stores and user preference synchronization.',
		description: 'Configures application runtime behaviors, key bindings, auto-save intervals, and external service credentials.'
	},
	'bookmarks': {
		label: 'Bookmark Merge',
		url: './components/bookmarks/widget.ts',
		className: 'BookmarksWidget',
		iconClass: 'bx bx-bookmarks',
		subtext: 'Requires multi-file drag-and-drop parsers, Netscape HTML/Chrome JSON decoders, and schema diff algorithms.',
		description: 'Visualizes, diffs, and merges bookmark structures across temporal exports with custom target folder schema matching, PDF generation, and color-coded status tracking.'
	},
	'queue': {
		label: 'Download & PDF Queue',
		url: './components/queue/widget.ts',
		className: 'QueueWidget',
		iconClass: 'bx bx-archive-arrow-down',
		subtext: 'Requires background web worker threads, headless print engines, and blob download batching queues.',
		description: 'Manages automated document conversions, PDF generation pipelines, and bulk file downloads with real-time progress tracking, priority reordering, and retry controls.'
	},
	'analytics': {
		label: 'Analytics',
		url: './components/analytics/widget.ts',
		className: 'AnalyticsWidget',
		iconClass: 'bx bx-chart-trend',
		subtext: 'Requires telemetry event listeners and chart aggregation libraries.',
		description: 'Tracks document engagement, content production metrics, and system activity trends via interactive visual summaries.'
	},
	'analysis': {
		label: 'Content Analysis',
		url: './components/analysis/widget.ts',
		className: 'AnalysisWidget',
		iconClass: 'bx bx-calendar-heart',
		subtext: 'Requires natural language processing routines and readability scoring engines.',
		description: 'Evaluates text complexity, sentiment, tone consistency, and key phrase distribution across active writing projects.'
	},
	'scraper': {
		label: 'Web Scraper',
		url: './components/scraper/widget.ts',
		className: 'ScraperWidget',
		iconClass: 'bx bx-radar',
		subtext: 'Requires DOM parsing drivers, selector engine matching, CORS proxies, and batch crawl queues.',
		description: 'Extracts structured data, metadata tags, and linked assets from web pages using custom CSS selectors, regex patterns, and proxy pipeline integration.'
	},
	'targets': {
		label: 'Publishing Targets',
		url: './components/targets/widget.ts',
		className: 'TargetsWidget',
		iconClass: 'bx bx-share',
		subtext: 'Requires platform authentication adapters, OAuth credential stores, and API payload transformers.',
		description: 'Centralized control panel for configuring, authenticating, and mapping external content syndication targets including Patreon, Medium, and wikiHow.'
	},
	'addons': {
		label: 'Plugins & Addons',
		url: './components/addons/widget.ts',
		className: 'AddonsWidget',
		iconClass: 'bx bx-extension',
		subtext: 'Requires dynamic ES module loaders, Lumino widget registry hooks, and cross-platform manifest parsers.',
		description: 'Procures, installs, and manages external Lumino-compatible widgets and extension bundles from remote repositories and connected creator platforms.'
	},
	'keystore': {
		label: 'Encrypted Keystore',
		url: './components/keystore/widget.ts',
		className: 'KeystoreWidget',
		iconClass: 'bx bx-key',
		subtext: 'Requires Web Crypto API algorithms (AES-GCM), master passphrase derivation (PBKDF2), and secure memory storage.',
		description: 'Secure vault for storing, encrypting, and injecting API keys, access tokens, and sensitive platform credentials without exposing raw values in plain text or local storage.'
	},
	'integrations': {
		label: 'Workflow Integrations',
		url: './components/integrations/widget.ts',
		className: 'IntegrationsWidget',
		iconClass: 'bx bx-git-merge',
		subtext: 'Requires OAuth2 connection managers, webhook listeners, and bi-directional API payload transformers.',
		description: 'Connects external productivity and task management tools like Notion, Evernote, and Jira directly into your publishing workflow to sync drafts, sync ticket states, and trigger content releases.'
	},
	'server-status': {
		label: 'Server & Proxy Status',
		url: './components/server/widget.ts',
		className: 'ServerStatusWidget',
		iconClass: 'bx bx-server',
		subtext: 'Requires HTTP ping probes, Cloudflare tunnel diagnostic APIs, and CORS proxy health checks.',
		description: 'Monitors real-time HTTP server connectivity, verifies proxy status, and tests Cloudflare tunnel configurations to ensure uninterrupted outbound requests and publishing workflows.'
	},
};


menuSelf.TOOLS_REGISTRY = TOOLS_REGISTRY;


export const TERMINAL_REGISTRY: TerminalFilter[] = [
	// Log Levels & Diagnostics
	{ id: 'all', label: 'All Logs' },
	{ id: 'error', label: 'Errors' },
	{ id: 'warn', label: 'Warnings' },

	// Core UI & Systems
	{ id: 'soft', label: 'CLI Render' },    // Matches your custom terminal viewport / frame limiter
	{ id: 'build', label: 'Build' },        // Compiler, AST parsers, build chains
	{ id: 'runtime', label: 'Runtime Dev' }, // Main loop, tasks, orchestration

	// Network & Background
	{ id: 'network', label: 'Network' },    // Custom meshes, P2P syncing, OAuth channels
	{ id: 'console', label: 'Console' },    // Standard fallback stdout / logging intercepts
	{ id: 'ai', label: 'AI Integration' }   // Local models, WebGPU memory, inference steps
];


menuSelf.TERMINAL_REGISTRY = TERMINAL_REGISTRY;


export async function triggerPanelRoute(panelId: string, mainDock: DockPanel, noHide: boolean = false): Promise<void>
{
	const route = MODULE_REGISTRY[panelId] ?? TOOLS_REGISTRY[panelId];
	/*TODO: this applied only to file open
	if(panelId === 'viewport-frame')
	{
		const preferredRenderer = SettingsManager.get('toji', 'preferredRenderer');
		if(preferredRenderer === 'nunu')
		{
			route = MODULE_REGISTRY['nunu'];
		}
	}*/
	if(!route || !route.url)
	{
		console.log('Panel route not found: ' + panelId);
		return; // Skip routes without code targets (like collapse)
	}

	try
	{
		// 1. Gather active DOM widgets
		const currentDOMWidgets = Array.from(mainDock.widgets());

		// 2. Identify target instances stored in memory
		let targetMemoryWidgets: Widget[] = [];

		if(route.className === 'TerminalWidget')
		{
			targetMemoryWidgets = menuSelf.terminalWidgets || [];
		} else if(route.className && OUTLINE_WIDGET_TYPES.includes(route.className))
		{
			targetMemoryWidgets = (menuSelf.fileListWidgets || []).filter(
				(w: any) => w.constructor.name === route.className
			);
		}

		// Find if a matching widget is mounted in the DOM dock
		const matchingDOMWidget = currentDOMWidgets.find(
			domWidget => domWidget.constructor.name === route.className
		);

		// 3. Handle toggling and activation
		if(targetMemoryWidgets.length > 0)
		{
			console.log('Panel route already loaded in memory: ' + panelId);

			if(matchingDOMWidget && !noHide)
			{
				// Lumino check: Widget is active on top if it's currently selected in its dock tab area
				// and its root node isn't hidden by display: none
				const selectedWidgets = typeof (mainDock as any).selectedWidgets === 'function'
					? Array.from((mainDock as any).selectedWidgets())
					: [];

				const isTabSelectedOnTop = selectedWidgets.includes(matchingDOMWidget) ||
					(matchingDOMWidget.isVisible && matchingDOMWidget.node.style.display !== 'none');

				if(isTabSelectedOnTop)
				{
					// Already active and visible on top -> Collapse/Hide
					collapseWidgets(mainDock, true, route);
				} else
				{
					// Mounted in DOM, but hidden behind another tab -> Activate & bring to top
					mainDock.activateWidget(matchingDOMWidget);
					if(typeof matchingDOMWidget.activate === 'function')
					{
						matchingDOMWidget.activate();
					}
				}
			} else
			{
				// Exists in memory but completely removed/detached from DOM -> Expand/Restore
				collapseWidgets(mainDock, false, route);

				targetMemoryWidgets.forEach(w =>
				{
					if(typeof w.show === 'function') w.show();
				});

				mainDock.activateWidget(targetMemoryWidgets[0]);
				if(typeof targetMemoryWidgets[0].activate === 'function')
				{
					targetMemoryWidgets[0].activate();
				}
			}
			return;
		}


		if(matchingDOMWidget)
		{
			console.log('Panel route already loaded: ' + panelId);
			matchingDOMWidget.show();
			mainDock.activateWidget(matchingDOMWidget);
			matchingDOMWidget.activate();
			return;
		}


		const widgetInstance = await loadAndInstantiate(route);
		if(widgetInstance.constructor.name === 'TerminalWidget')
		{
			LayoutAdjuster.addOptimalWidgetLayout(mainDock, widgetInstance, {
				type: 'terminal',
				projectId: widgetInstance.constructor.name
			});
		}
		else if(OUTLINE_WIDGET_TYPES.includes(widgetInstance.constructor.name))
		{
			LayoutAdjuster.addOptimalWidgetLayout(mainDock, widgetInstance, {
				type: 'outline',
				projectId: widgetInstance.constructor.name
			});
		} else
		{
			LayoutAdjuster.addOptimalWidgetLayout(mainDock, widgetInstance, {
				type: 'editor',
				projectId: widgetInstance.constructor.name
			});
		}

		await new Promise(resolve =>
		{
			window.requestAnimationFrame(resolve);
		});
	} catch(err)
	{
		console.error(`Module initialization fault on pathway [${panelId}]:`, err);
	}
}


menuSelf.triggerPanelRoute = triggerPanelRoute;


function initializeTabsMenu(commands: CommandRegistry, mainDock: DockPanel, viewMenu: Menu)
{

	// 0. setup tabs menu
	commands.addCommand('select-tab', {
		iconClass: 'bx bx-tabs',
		label: (args) =>
		{
			return Array.from(mainDock.widgets()).find(w =>
			{
				return w.id === args.value;
			})?.title.label
				?? (args.label as string) ?? 'Select Tab';
		},
		execute: (args: any) =>
		{
			Array.from(mainDock.widgets()).forEach(w =>
			{
				if(w.id === args.value)
				{
					mainDock.activateWidget(w);
					w.activate();
				}
			});
		}
	});

	commands.addCommand('next-tab', {
		label: 'Next Tab',
		iconClass: 'bx bx-chevron-right-square',
		isEnabled: () =>
		{
			return true;
			// Optional: don't switch tabs if the user is typing in a text field
			//const active = document.activeElement;
			//const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
			//return !isTyping;
		},
		execute: () =>
		{
			if(!menuSelf.lastInteractedWidget)
			{
				return;
			}
			const widgets = Array.from(mainDock.widgets());
			const currentWidgetIndex = widgets.indexOf(menuSelf.lastInteractedWidget);
			if(currentWidgetIndex === widgets.length - 1)
			{
				menuSelf.lastInteractedWidget = widgets[0];
				mainDock.activateWidget(widgets[0]);
				widgets[0].activate();
			} else
			{
				menuSelf.lastInteractedWidget = widgets[currentWidgetIndex + 1];
				mainDock.activateWidget(widgets[currentWidgetIndex + 1]);
				widgets[currentWidgetIndex + 1].activate();
			}
			return false;
		}
	});
	commands.addCommand('previous-tab', {
		label: 'Previous Tab',
		iconClass: 'bx bx-chevron-left-square',
		isEnabled: () =>
		{
			return true;
			//const active = document.activeElement;
			//const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
			//return !isTyping;
		},
		execute: () =>
		{
			if(!menuSelf.lastInteractedWidget)
			{
				return;
			}
			const widgets = Array.from(mainDock.widgets());
			const currentWidgetIndex = widgets.indexOf(menuSelf.lastInteractedWidget);
			if(currentWidgetIndex === 0)
			{
				menuSelf.lastInteractedWidget = widgets[widgets.length - 1];
				mainDock.activateWidget(widgets[widgets.length - 1]);
				widgets[widgets.length - 1].activate();
			} else
			{
				menuSelf.lastInteractedWidget = widgets[currentWidgetIndex - 1];
				mainDock.activateWidget(widgets[currentWidgetIndex - 1]);
				widgets[currentWidgetIndex - 1].activate();
			}
		}
	});

	commands.addKeyBinding({
		command: 'previous-tab',
		keys: ['Alt N'],
		selector: '*'
	});
	commands.addKeyBinding({
		command: 'next-tab',
		keys: ['Alt M'],
		selector: '*'
	});

	const tabsMenu = new Menu({ commands });
	tabsMenu.title.label = 'Open Tabs';
	tabsMenu.title.iconClass = 'bx bx-tabs';
	menuSelf.tabsMenu = tabsMenu;
	viewMenu.addItem({ type: 'submenu', submenu: tabsMenu });
	viewMenu.addItem({ type: 'separator' });
	tabsMenu.addItem({ type: 'separator' });
	tabsMenu.addItem({ command: 'next-tab' });
	tabsMenu.addItem({ command: 'previous-tab' });


}




/**
 * System Context Initialization
 */
export function initializeMenus(commands: CommandRegistry, menuBar: MenuBar, mainDock: DockPanel, toolbarNode: HTMLElement): void
{
	document.addEventListener('keydown', (event: KeyboardEvent) =>
	{
		commands.processKeydownEvent(event);
		updateModifierPressed(event);

	}, true);
	document.addEventListener('keyup', (event: KeyboardEvent) =>
	{
		commands.processKeyupEvent(event);
		updateModifierPressed(event);

	}, true);

	const viewMenu = new Menu({ commands });
	viewMenu.title.label = 'Window';

	initializeTabsMenu(commands, mainDock, viewMenu);

	// 1. Render the HTML list structural tree directly inside the left toolbar container node
	const ul = document.createElement('ul');
	Object.entries(MODULE_REGISTRY).forEach(([id, route]) =>
	{
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.setAttribute('href', `#${id}`);
		a.setAttribute('title', route.label);
		a.className = route.iconClass;

		// Set 'active' style override state specifically for your engine files entry point
		if(id === 'filelist')
		{
			a.classList.add('active');
		}

		li.appendChild(a);
		ul.appendChild(li);

		// 2. Map standard commands to Top Menu Bar targets (skipping collapse navigation)
		if(route.url)
		{
			const commandId = `spawn-panel:${id}`;
			commands.addCommand(commandId, {
				label: route.label,
				iconClass: route.iconClass, // <-- Add this line to attach the Boxicon classes to the command
				execute: () => triggerPanelRoute(id, mainDock)
			});
			viewMenu.addItem({ command: commandId });
		}
	});

	toolbarNode.appendChild(ul);
	menuBar.addMenu(viewMenu);

	// 3. Isolated internal event capture handling bounded to the toolbar container
	toolbarNode.addEventListener('click', mainModuleHandler.bind(toolbarNode, mainDock, toolbarNode));
}


function mainModuleHandler(mainDock: DockPanel, toolbarNode: HTMLElement, event: MouseEvent)
{
	const anchor = (event.target as HTMLElement).closest('a');
	if(!anchor) return;

	const href = anchor.getAttribute('href');
	if(href && href.startsWith('#'))
	{
		event.preventDefault();
		const panelId = href.substring(1);

		// Manage localized highlight toggle styles across the sidebar icons
		toolbarNode.querySelectorAll('a').forEach(el => el.classList.remove('active'));
		if(panelId !== 'collapse')
		{
			anchor.classList.add('active');
		} else
		{
			const shouldCollapse = (menuSelf.fileListWidgets && menuSelf.fileListWidgets.length > 0)
				|| (menuSelf.terminalWidgets && menuSelf.terminalWidgets.length > 0);
			if(!shouldCollapse)
			{
				return;
			}
			console.log('Panel singleton toggle: ' + panelId);
			if(toolbarNode.classList.contains('collapsed'))
			{
				toolbarNode.classList.remove('collapsed');
				collapseWidgets(mainDock, false);
			} else
			{
				toolbarNode.classList.add('collapsed');
				collapseWidgets(mainDock, true);
			}
			return;
		}

		triggerPanelRoute(panelId, mainDock);
	}
}


function collapseWidgets(mainDock: DockPanel, collapse: boolean, route?: ComponentRoute)
{
	if(menuSelf.fileListWidgets && menuSelf.fileListWidgets.length > 0
		&& (!route || route.className && OUTLINE_WIDGET_TYPES.includes(route.className))
	)
	{
		if(collapse)
		{
			for(let widget of menuSelf.fileListWidgets)
			{
				widget.hide();
				widget.parent = null;
			}
		} else
		{
			for(let widget of menuSelf.fileListWidgets)
			{
				LayoutAdjuster.addOptimalWidgetLayout(mainDock, widget, {
					type: 'outline',
					projectId: widget.constructor.name
				});
			}
		}
	}

	if(menuSelf.terminalWidgets && menuSelf.terminalWidgets.length > 0
		&& (!route || route.className && route.className === 'TerminalWidget')
	)
	{
		if(collapse)
		{
			for(let widget of menuSelf.terminalWidgets)
			{
				widget.hide();
				widget.parent = null;
			}
		} else
		{
			for(let widget of menuSelf.terminalWidgets)
			{
				LayoutAdjuster.addOptimalWidgetLayout(mainDock, widget, {
					type: 'terminal',
					projectId: widget.constructor.name
				});
			}
		}
	}

	window.requestAnimationFrame(() =>
	{
		menuSelf.resizeHandler?.();
		setTimeout(() =>
		{
			menuSelf.resizeHandler?.();
		}, 200);
	});
}





/**
 * Main export to assemble and return the unified top header row.
 */
export function createTopBar(commands: CommandRegistry): TopBarComponents
{
	// 3. Assemble the base MenuBar
	const menuBar = new MenuBar({
		overflowMenuOptions: {
			isVisible: false
		}
	});
	menuSelf.globalMenuBar = menuBar;
	menuBar.id = 'top-menubar';

	const headerRow = new Panel();
	headerRow.id = 'app-top-header-row';
	headerRow.node.style.minHeight = '30px';

	// 4. Build the inline toolbar segment
	const repositoryToolbar = RepositoryToolbar.getInstance().initialize(commands);
	menuSelf.repositoryToolbar = repositoryToolbar;
	const scriptToolbar = ScriptToolbar.getInstance().initialize(commands);
	menuSelf.scriptToolbar = scriptToolbar;
	const appToolbar = ApplicationToolbar.getInstance().initialize(commands);
	menuSelf.appToolbar = appToolbar;
	const fileToolbar = FileToolbar.getInstance().initialize(commands);
	menuSelf.fileToolbar = fileToolbar;
	const editToolbar = EditToolbar.getInstance().initialize(commands);
	menuSelf.editToolbar = editToolbar;
	const viewToolbar = ViewToolbar.getInstance().initialize(commands);
	menuSelf.viewToolbar = viewToolbar;
	const layoutToolbar = LayoutToolbar.getInstance().initialize(commands);
	menuSelf.layoutToolbar = layoutToolbar;
	const historyToolbar = HistoryToolbar.getInstance().initialize(commands);
	menuSelf.historyToolbar = historyToolbar;
	const settingsToolbar = SettingsToolbar.getInstance().initialize(commands);
	menuSelf.settingsToolbar = settingsToolbar;

	headerRow.addWidget(menuBar);
	headerRow.addWidget(repositoryToolbar);
	headerRow.addWidget(scriptToolbar);
	headerRow.addWidget(appToolbar);
	headerRow.addWidget(fileToolbar);
	headerRow.addWidget(editToolbar);
	headerRow.addWidget(viewToolbar);
	headerRow.addWidget(layoutToolbar);
	headerRow.addWidget(historyToolbar);
	headerRow.addWidget(settingsToolbar);

	return { headerRow, menuBar };
}


let hashDebounceTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Parses and dispatches hash navigation routes.
 */
export async function renderHashCommand(targetHashName: string, noBounce: boolean = false): Promise<void>
{
	const rawTarget = (targetHashName || '').trim().replace(/^#/, '');

	if(hashDebounceTimer)
	{
		clearTimeout(hashDebounceTimer);
		hashDebounceTimer = null;
	}

	if(!noBounce)
	{
		hashDebounceTimer = setTimeout(() =>
		{
			renderHashCommand(rawTarget, true);
		}, 200);
		return;
	}

	if(!rawTarget || rawTarget.length === 0) return;
	menuSelf.previousHashLineNumber = null;
	try
	{
		menuSelf.renderingHashCommand = true;
		const matchedRoute = MODULE_REGISTRY[rawTarget] ?? TOOLS_REGISTRY[rawTarget];
		if(matchedRoute)
		{
			// Activate registered panel/widget via your main dock panel router
			if(menuSelf.mainDock)
			{
				await triggerPanelRoute(rawTarget, menuSelf.mainDock, true);
			}
			return;
		}

		const matchedTerminal = TERMINAL_REGISTRY.find(t => t.id === rawTarget);
		if(matchedTerminal)
		{
			if(menuSelf.mainDock)
			{
				await triggerPanelRoute('terminal-container', menuSelf.mainDock, true);
			}

			const currentDOMWidgets = Array.from(menuSelf.mainDock?.widgets() ?? []);

			// Locate any active TerminalWidget whose filterId or DOM element ID matches target
			const existingTerminalWidget = currentDOMWidgets.find((w: any) =>
				w.constructor?.name === 'TerminalWidget' &&
				(w.filterId === rawTarget || w.id === `terminal-panel-${rawTarget}` || w.id === rawTarget)
			);

			if(existingTerminalWidget)
			{
				// Activate and bring tab to front immediately
				menuSelf.mainDock?.activateWidget(existingTerminalWidget);
				existingTerminalWidget.activate();
				return;
			}
		}

		await FileManager.navigateFile(rawTarget);
	} catch(err)
	{
		console.error(`[HashRouter] Failed to resolve target file path for hash #${rawTarget}:`, err);
	} finally
	{
		menuSelf.renderingHashCommand = false;
	}
}

// ─── POPSTATE LISTENER BINDING ───
if(typeof window !== 'undefined')
{
	window.addEventListener('popstate', () =>
	{
		const activeHash = window.location.hash.substring(1);
		renderHashCommand(activeHash);
	});

	window.addEventListener('mousemove', (e: MouseEvent) =>
	{
		const globalTooltip = document.getElementById('global-tooltip');

		if(!globalTooltip) return;

		const target = e.target as HTMLElement;

		let targetEl: HTMLElement | null = null;
		let targetText: string | null | undefined = "";

		// 1. ISOLATED CHECK: Look for attributes assigned dynamically by our native plugin layer
		const aceContainer = target?.closest('.ace_editor') as HTMLElement;
		if(aceContainer)
		{
			// Pull error string markers
			targetText ||= aceContainer.getAttribute('data-compiler-error');

			// Pull code reference definition markers
			let navSymbol = aceContainer.getAttribute('data-navigation-target');
			if(navSymbol)
			{
				targetText = `Go to reference for definition: "${navSymbol}"`;
			}

			if(targetText)
			{
				targetEl = aceContainer;
			}
		}

		// 2. STANDARD MINIPAINT DOM ATTR FALLBACKS
		if(!targetText)
		{
			targetText ||= target.getAttribute('placeholder');
			targetText ||= target.getAttribute('alt');
			targetText ||= target.getAttribute('data-tooltip');
			targetText ||= target.getAttribute('title');
			if(targetText)
			{
				targetEl = target;
			}
		}

		if(!targetText && target.parentElement)
		{
			targetText ||= target.parentElement.getAttribute('placeholder');
			targetText ||= target.parentElement.getAttribute('alt');
			targetText ||= target.parentElement.getAttribute('data-tooltip');
			targetText ||= target.parentElement.getAttribute('title');
			if(targetText)
			{
				targetEl = target.parentElement;
			}
		}

		const closest = target.closest('[placeholder],[alt],[data-tooltip],[title],.pk_tb .pk_btn') as HTMLElement;
		if(!targetText && closest)
		{
			targetText ||= closest.getAttribute('placeholder');
			targetText ||= closest.getAttribute('alt');
			targetText ||= closest.getAttribute('data-tooltip');
			targetText ||= closest.getAttribute('title');
			targetText ||= closest.querySelector('span')?.innerText;
			if(targetText)
			{
				targetEl = closest;
			}
		}

		if(targetEl && targetEl.style.display === 'contents')
		{
			targetEl = targetEl.children[0] as HTMLElement;
		}


		if(!targetEl || !targetText)
		{
			globalTooltip.style.display = 'none';
			globalTooltip.style.opacity = '0';
			globalTooltip.style.zIndex = '-1';
			return;
		}

		if(!targetText) return;

		const hideAceErrors = document.querySelector('#global-editor-tooltip') as HTMLElement;
		if(hideAceErrors)
		{
			hideAceErrors.style.display = 'none';
		}

		globalTooltip.innerText = targetText;
		globalTooltip.style.display = 'block';
		globalTooltip.style.opacity = '1';
		globalTooltip.style.visibility = 'visible';
		globalTooltip.style.zIndex = '1000';

		// Fluid position layout tracking for tracking paths cleanly under cursor coordinates
		if(aceContainer)
		{
			globalTooltip.style.top = (e.clientY + 15) + 'px';
			globalTooltip.style.left = Math.min(e.clientX + 10, window.innerWidth - globalTooltip.clientWidth - 20) + 'px';
		} else
		{
			const rect = targetEl.getBoundingClientRect();
			globalTooltip.style.top = (rect.top + targetEl.clientHeight) + 'px';
			globalTooltip.style.left = Math.min(rect.left + targetEl.clientWidth, window.innerWidth - globalTooltip.clientWidth - 20) + 'px';
		}
	});
}


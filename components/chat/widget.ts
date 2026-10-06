import { Widget, PanelLayout, DockPanel, SplitPanel } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { ChatStorageEngine } from './widget-storage';
import { ThreadListWidget } from "./widget-threads";
import { ChatMessageWidget } from './widget-message';
import type { LuminoLayoutWindow } from '../bundle/lumino.d';
import type { GlobalToolbarsWindow } from "../bundle/menu.d";


// ============================================================================
// Types & Interfaces
// ============================================================================

const widgetSelf: LuminoLayoutWindow & GlobalToolbarsWindow = self as unknown as any;

export type MessageRole = 'user' | 'assistant' | 'system';

export interface IChatMessage
{
	mode: number;
	path: string;
	role: MessageRole;
	contents: string;
	timestamp: number;
	parent?: string;
}

export interface IThreadMeta
{
	mode: number;
	path: string;
	contents: string;
	timestamp: number;
	modified: number;
	size: number;
	parent?: string;
}

export interface IChatWidgetOptions
{
	environment?: string;
	modelName?: string;
	workerUrl?: string;
}

// ============================================================================
// Main Container Widget
// ============================================================================

export class ChatWidget extends Widget
{
	private threadListWidget: ThreadListWidget;
	private chatWidget: ChatMessageWidget;
	private storage: ChatStorageEngine;

	constructor(env?: string, options: IChatWidgetOptions = {})
	{
		super();
		this.id = 'lumino-chat-manager-panel';
		this.addClass('lm-ChatManagerPanel');

		// Lumino Title properties for tab managers (DockPanel, TabBar, etc.)
		this.title.label = 'Curation';
		this.title.iconClass = 'fa fa-comments';
		this.title.closable = true;

		// Set top-level PanelLayout to hold the inner SplitPanel
		const layout = new PanelLayout();
		this.layout = layout;

		this.storage = new ChatStorageEngine(env);

		this.threadListWidget = new ThreadListWidget(this.storage);
		this.chatWidget = new ChatMessageWidget(this.storage, options);

		this.bindSignals();
	}

	protected override onAfterShow(msg: Message): void
	{
		super.onAfterShow(msg);
		this.openThreads();
	}

	private openThreads()
	{
		const that = this;
		setTimeout(() =>
		{
			if(widgetSelf.mainDock && widgetSelf.LayoutAdjuster && that.threadListWidget)
			{
				if(!this.threadListWidget?.isAttached)
				{
					widgetSelf.LayoutAdjuster?.addOptimalWidgetLayout(widgetSelf.mainDock, that.threadListWidget, {
						type: 'outline',
						projectId: that.threadListWidget?.constructor.name
					});
				}
			}
		}, 300);
	}

	public processMessage(msg: Message): void
	{
		if(msg.type === 'close-request')
		{
			this.threadListWidget?.close();
		}

		super.processMessage(msg);
	}

	protected override onBeforeHide(msg: Message): void
	{
		this.threadListWidget?.close();
		super.onBeforeHide(msg);
	}


	protected override onBeforeDetach(msg: Message): void
	{
		this.threadListWidget?.close();
		super.onBeforeDetach(msg);
	}


	/**
	 * Lumino Lifecycle Hook: Triggered once the widget is attached to the DOM.
	 */
	protected onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		if(!this.chatWidget.isAttached)
		{
			Widget.attach(this.chatWidget, this.node);
		}
		if(!this.threadListWidget.isAttached)
		{
			this.openThreads();
		}

		// Initialize storage & state asynchronously after attach
		this.init().catch((err) =>
		{
			console.error('Failed to initialize ChatManagerPanel:', err);
		});
	}

	/**
	 * Lumino Lifecycle Hook: Ensures internal split layouts recalculate on resize.
	 */
	protected onResize(msg: Widget.ResizeMessage): void
	{
		super.onResize(msg);

	}

	private async init(): Promise<void>
	{
		await this.storage.init();
		const threads = await this.storage.getAllThreads();

		if(threads.length > 0)
		{
			await this.chatWidget.loadThread(threads[0].path);
			await this.threadListWidget.refresh(threads[0].path);
		}
		else
		{
			const newId = await this.chatWidget.createNewThread();
			await this.threadListWidget.refresh(newId);
		}
	}

	private bindSignals(): void
	{
		// Select Thread
		this.threadListWidget.threadSelected.connect(async (_, threadId) =>
		{
			await this.chatWidget.loadThread(threadId);
		});

		// New Thread Request
		this.threadListWidget.newThreadRequested.connect(async () =>
		{
			const newId = await this.chatWidget.createNewThread();
			await this.threadListWidget.refresh(newId);
		});

		// Delete Thread
		this.threadListWidget.threadDeleted.connect(async (_, threadId) =>
		{
			await this.storage.deleteThread(threadId);
			const threads = await this.storage.getAllThreads();
			if(threads.length > 0)
			{
				await this.chatWidget.loadThread(threads[0].path);
				await this.threadListWidget.refresh(threads[0].path);
			}
			else
			{
				const newId = await this.chatWidget.createNewThread();
				await this.threadListWidget.refresh(newId);
			}
		});

		// Chat Updates -> Refresh List
		this.chatWidget.threadUpdated.connect(async (_, meta) =>
		{
			await this.threadListWidget.refresh(meta.path);
		});
	}
}

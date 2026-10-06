import { Widget } from '@lumino/widgets';
import { Message } from '@lumino/messaging';
import { Signal } from '@lumino/signaling';
import { CellEditorWidget } from './widget-editor';
import type { ICellModel } from './widget.d';
import type { WriterWidget } from './widget';

const scrollerSelf: {
	WriterWidget: typeof WriterWidget;
} = self as unknown as any;

/**
 * Two-pass Virtualized Document Scroller:
 * Pass 1: Mounts hidden cell instances sequentially to calculate pixel heights.
 * Pass 2: Manages a fixed DOM cell pool rendering only items within viewport buffer bounds.
 */
export class VirtualWriterScrollerWidget extends Widget
{
	public readonly cellActionTriggered = new Signal<this, { action: string; cellId: string; }>(this);

	private _cells: ICellModel[] = [];
	private _scrollContainer: HTMLDivElement;
	private _phantomSpacer: HTMLDivElement;
	private _poolContainer: HTMLDivElement;

	private _cellHeights: Map<string, number> = new Map();
	private _activeWidgetPool: Map<string, CellEditorWidget> = new Map();
	private _defaultCellHeight = 160;
	private _bufferPx = 400;
	public static hiddenOffscreen: HTMLDivElement;

	constructor()
	{
		super();
		this.addClass('lm-VirtualWriterScroller');
		this.node.style.cssText = '';

		// Outer scroll viewport
		this._scrollContainer = document.createElement('div');
		this._scrollContainer.classList.add('lm-VirtualWriterScroller-container');

		// Phantom height expander
		this._phantomSpacer = document.createElement('div');
		this._phantomSpacer.classList.add('lm-VirtualWriterScroller-spacer');

		// Active DOM pool container
		this._poolContainer = document.createElement('div');
		this._poolContainer.classList.add('lm-VirtualWriterScroller-pool');

		this._scrollContainer.appendChild(this._phantomSpacer);
		this._scrollContainer.appendChild(this._poolContainer);
		this.node.appendChild(this._scrollContainer);

		this._scrollContainer.onscroll = () =>
		{
			this.updateVirtualViewport();
			this.micromanageTinyMCE();
		};
		this.node.addEventListener('keyup', () => this.recalculateCurrentView());
		this.node.addEventListener('keypress', () => this.recalculateCurrentView());
	}


	private recalculateCurrentView()
	{
		const activeId = scrollerSelf.WriterWidget.activeEditor?.bodyElement?.id;
		if(activeId)
		{
			const cell = Array.from(this._activeWidgetPool.values()).find(w => w._contentNode?.children[0].id === activeId);
			cell?.measureAndEmitHeight();
		}
		this.recalculateTotalHeight();
		this.updateVirtualViewport();
	}


	public setCells(cells: ICellModel[]): void
	{
		this._cells = cells ?? [];
		this.discoverHeightsPass().then(() =>
		{
			this.recalculateTotalHeight();
			this.updateVirtualViewport();
		});
	}

	/**
	 * Lumino Lifecycle Hook: Triggers measurement & pool mounting once attached to active DOM.
	 */
	protected override onAfterAttach(msg: Message): void
	{
		super.onAfterAttach(msg);
		if(this._cells.length > 0)
		{
			this.recalculateTotalHeight();
			this.updateVirtualViewport();
		}
	}

	/**
	 * Pass 1: Measure dimensions of unknown pages sequentially in background.
	 */
	private async discoverHeightsPass(): Promise<void>
	{
		if(!VirtualWriterScrollerWidget.hiddenOffscreen)
		{
			VirtualWriterScrollerWidget.hiddenOffscreen = document.createElement('div');
			VirtualWriterScrollerWidget.hiddenOffscreen.id = 'hidden-writer-container';
			VirtualWriterScrollerWidget.hiddenOffscreen.style.cssText = `position: absolute; visibility: hidden; width: ${this.node.clientWidth || 800}px; top: -9999px; left: -9999px; pointer-events: none;`;
			document.body.appendChild(VirtualWriterScrollerWidget.hiddenOffscreen);
		}

		for(const cell of this._cells)
		{
			if(this._cellHeights.has(cell.id))
			{
				continue;
			}

			const tempWidget = new CellEditorWidget(cell);
			Widget.attach(tempWidget, VirtualWriterScrollerWidget.hiddenOffscreen);

			await new Promise((res) => requestAnimationFrame(res));

			const measured = await Promise.race([
				new Promise((res) =>
				{
					const sub = (_: any, h: number) =>
					{
						tempWidget.heightMeasured.disconnect(sub);
						res(h);
					};
					tempWidget.heightMeasured.connect(sub);
				}),
				new Promise((res) => setTimeout(res, 300))
					.then(() =>
					{
						const measured = tempWidget.node.getBoundingClientRect().height || this._defaultCellHeight;
						return measured;
					})
			]) as number;

			this._cellHeights.set(cell.id, Math.max(measured, 60));
			cell.height = this._cellHeights.get(cell.id);

			if(tempWidget.isAttached)
			{
				Widget.detach(tempWidget);
			}
			tempWidget.dispose();
		}

		// if(document.body.contains(hiddenOffscreen))
		// {
		// 	document.body.removeChild(hiddenOffscreen);
		// }
	}

	private recalculateTotalHeight(): void
	{
		let total = 0;
		for(const cell of this._cells)
		{
			total += this._cellHeights.get(cell.id) || this._defaultCellHeight;
		}
		total += (this.node.parentElement?.clientHeight ?? this.node.clientHeight) * 0.6;
		this._phantomSpacer.style.height = `${total}px`;
	}

	/**
	 * Pass 2: Position pool items matching active scroll window.
	 */
	private updateVirtualViewport(): void
	{
		if(!this.isAttached || this._cells.length === 0) return;

		const scrollTop = this._scrollContainer.scrollTop;
		const viewportHeight = this._scrollContainer.clientHeight || 720;
		const viewTop = Math.max(0, scrollTop - this._bufferPx);
		const viewBottom = scrollTop + viewportHeight + this._bufferPx;

		let currentY = 0;
		const visibleCellIds = new Set<string>();

		for(const cell of this._cells)
		{
			const cellHeight = this._cellHeights.get(cell.id) || this._defaultCellHeight;
			const cellBottom = currentY + cellHeight;

			// Check if cell intersects buffer window
			if(cellBottom >= viewTop && currentY <= viewBottom)
			{
				visibleCellIds.add(cell.id);

				let widget = this._activeWidgetPool.get(cell.id);
				if(!widget)
				{
					widget = new CellEditorWidget(cell);
					widget.heightMeasured.connect((_, h) =>
					{
						if(h > 0 && this._cellHeights.get(cell.id) !== h)
						{
							this._cellHeights.set(cell.id, h);
							this.recalculateTotalHeight();
						}
					});
					widget.actionRequested.connect((_, evt) =>
					{
						this.cellActionTriggered.emit(evt);
					});

					this._activeWidgetPool.set(cell.id, widget);
					Widget.attach(widget, this._poolContainer);
					widget.fit();
					widget.update();
				}

				// Translate cell into relative viewport coordinates
				widget.node.style.transform = `translate3d(0, ${currentY}px, 0)`;
			}

			currentY += cellHeight;
		}

		// Recycle off-screen cell widgets
		for(const [id, widget] of this._activeWidgetPool.entries())
		{
			if(!visibleCellIds.has(id))
			{
				// if(scrollerSelf.WriterWidget.activeEditor?.bodyElement === widget._contentNode?.children[0])
				// {
				// 	scrollerSelf.WriterWidget.activeEditor.hide();
				// }
				Widget.detach(widget);
				widget.dispose();
				this._activeWidgetPool.delete(id);
			}
		}
	}


	private micromanageTinyMCE()
	{
		if(scrollerSelf.WriterWidget.activeEditor
			&& typeof scrollerSelf.WriterWidget.activeEditor.bodyElement !== 'undefined')
		{
			// 1. Check if active cell scrolled out of view
			const cellRect = scrollerSelf.WriterWidget.activeEditor.bodyElement.getBoundingClientRect();
			const containerRect = this.node.getBoundingClientRect();

			const isVisible = (
				cellRect.bottom > containerRect.top &&
				cellRect.top < containerRect.bottom
			);

			if(!isVisible)
			{
				// Hide toolbar or blur editor if scrolled out of bounds
				scrollerSelf.WriterWidget.activeEditor.bodyElement.blur();
				//scrollerSelf.WriterWidget.activeEditor.hide();
			} else
			{
				// 2. Force TinyMCE to recalculate toolbar floating coordinates
				scrollerSelf.WriterWidget.activeEditor.show();
				scrollerSelf.WriterWidget.activeEditor.nodeChanged();
			}
		}
	}


	protected override onResize(msg: Widget.ResizeMessage): void
	{
		super.onResize(msg);
		this.recalculateTotalHeight();
		this.updateVirtualViewport();
		this.micromanageTinyMCE();
	}
}

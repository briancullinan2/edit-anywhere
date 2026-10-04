import { Widget } from '@lumino/widgets';

declare global
{
	interface Window
	{
		__webpack_public_path__?: string;
		__next_f?: any[];
	}
}

export class ChatWidget extends Widget
{
	private _isLoaded: boolean = false;
	private _containerNode: HTMLDivElement;

	constructor()
	{
		super();
		this.id = 'webllm-chat-widget';
		this.title.label = 'Chat';
		this.title.closable = true;
		this.addClass('jp-WebLLMChatWidget');

		// Root layout setup
		this.node.style.display = 'flex';
		this.node.style.flexDirection = 'column';
		this.node.style.width = '100%';
		this.node.style.height = '100%';
		this.node.style.overflow = 'hidden';
		this.node.style.backgroundColor = '#151515';

		// Isolated container element for Next.js mounting target
		this._containerNode = document.createElement('div');
		this._containerNode.id = '__next';
		this._containerNode.style.width = '100%';
		this._containerNode.style.height = '100%';
		this._containerNode.style.display = 'flex';
		this._containerNode.style.flexDirection = 'column';
		this._containerNode.style.flex = '1';

		this.node.appendChild(this._containerNode);
	}

	protected onAfterAttach(): void
	{
		if(this._isLoaded)
		{
			return;
		}
		this._isLoaded = true;
		this._bootstrapApp();
	}

	private _bootstrapApp(): void
	{
		const baseUrl = ''; //'https://chat.webllm.ai';
		const chunkBasePath = `../components/chat/chunks/`;

		// 1. Override Webpack Chunk Path to prevent 404s on lazy chunks
		window.__webpack_public_path__ = chunkBasePath;

		// 2. Load Stylesheets into main document head safely
		const stylesheets = [
			'/components/chat/css/c60bb326c291e53d.css',
			'/components/chat/css/6c935766a069c1dd.css'
		];

		stylesheets.forEach((href) =>
		{
			const fullHref = `${baseUrl}${href}`;
			if(!document.querySelector(`link[href="${CSS.escape(fullHref)}"]`))
			{
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = fullHref;
				document.head.appendChild(link);
			}
		});

		// 3. Render Loading UI inside the dedicated Next.js mount container
		const loadingDiv = document.createElement('div');
		loadingDiv.className = 'home_loading-content__7_JjP no-dark';
		loadingDiv.innerHTML = `
      <div class="home_loading-content-logo__piZKe no-dark mlc-icon">
        <svg viewBox="74.634 123.585 98.962 106.718" width="98.962" height="106.718" xmlns="http://www.w3.org/2000/svg" style="fill:var(--mlc-icon-color);clip-rule:evenodd;fill-rule:evenodd">
          <path class="mlc_svg__st0" d="M170.895 171.103h-42.1c-1.4 0-2.6 1.2-2.6 2.6v18.4c1.7-.2 3.3.1 4.7.9V175.803h37.9v49.9h-37.9v-15.7c-1.1.8-2.3 1.4-3.4 2-.4.2-.8.4-1.2.5v15.2c0 1.4 1.2 2.6 2.6 2.6h42.1c1.4 0 2.6-1.1 2.6-2.6v-54.2c-.1-1.2-1.3-2.4-2.7-2.4zm-44.6 38.5c-3 1.4-8.3 2.7-11.5 3.4-3.6.8-14.2 3.2-15.1-2.5-.7-4.7 11.6-9.9 14.8-11.3 2.9-1.3 5.9-2.4 8.8-3.6 3.2-1.2 6.6-1.7 8.2 2.3.7 1.7.9 3.2.9 5v.4c-.4 3.1-3.4 5.1-6.1 6.3zm10.6-51.3c1.4-.1 2.7.9 2.8 2.4l.4 4.9c.1 1.4-.9 2.7-2.4 2.8-1.4.1-2.7-.9-2.8-2.4l-.4-4.9c-.1-1.4 1-2.6 2.4-2.8zm18.8 10.9c0-2.9-.2-5.7-.4-8.4l-.3-2.7V157.803c-.5-3.3-1.1-6.6-1.9-10-.8-3.3-3.7-5.4-7-5.5-6.1-.1-12.3-.2-18.4 0-1-1.9-4.2-3.1-7.9-2.9l-4.2-9.5c.8-.7 1.2-1.8 1.1-3-.2-2-1.9-3.5-3.9-3.3-2 .2-3.5 1.9-3.3 3.9.2 1.9 1.7 3.3 3.6 3.3l4 9c-2.6.7-4.6 2.2-5.1 3.9-5.8.8-11.5 2-17.2 3.1-.7.1-1.3.4-1.9.6-6.4 1.6-13 5.1-13 5.1-.1.8-.2 1.7-.2 2.5.3-.1.6-.1 1-.2 5-.4 9.6 4.7 10.2 11.5.6 6.8-3 12.7-8 13.1h-1.1c.2.9.4 1.8.7 2.6 4.2 2.3 9.9 3.8 13.4 4.6.8.3 1.7.5 2.6.5 8.6.2 17.3.3 25.9-.5h.3v-6.3c-5.8.5-11.8.5-20.8.3-1.7 0-2.9-1.1-3.4-2.5-2-7.2-2.5-14.8-2-22.9.1-1.5 1.2-2.8 2.9-3.1 1.6-.3 3.2-.6 4.6-.9.7-.1 2.5-.5 3.8-.7 1-.2 2.1-.4 3.1-.6 3.3.6 5.6 5.4 10.5 4.6 5-.1 6.4-5.2 9.5-6.3 2.3 0 4.6 0 6.9.1 1.1 0 2.1 0 3.9.1 1.7 0 3 1 3.4 2.5.4 1.6.7 3.2 1 4.8.6 5.4.9 9.8.8 13.2h6.8zm-75.1-7.8c2-.2 3.8 2.5 4.1 6 .3 3.5-1 6.4-3 6.6-1 .1-1.9-.5-2.6-1.5.4.3.9.5 1.3.4 1.5-.1 2.6-2.5 2.3-5.3-.2-2.8-1.7-5-3.2-4.8-.5 0-.9.3-1.2.7.5-1.3 1.3-2.1 2.3-2.1zm42.5-16.1c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9-.1-1.6 1.3-2.9 2.9-2.9zm-10.3 15.2c1.4-.1 2.7.9 2.8 2.4l.4 4.9c.1 1.4-.9 2.7-2.4 2.8-1.4.1-2.7-.9-2.8-2.4l-.4-4.9c-.1-1.4 1-2.7 2.4-2.8zm-32.2-3.1c3.7-.3 7.1 3.9 7.6 9.4s-2.1 10.2-5.9 10.6c-3.7.3-7.1-3.9-7.6-9.4-.5-5.6 2.1-10.3 5.9-10.6zm43.7 66.1c-3.9-1-7.3-3.6-8.8-7.9 2.7-.6 5.9-1.3 8.8-2.3zm-10.9-26.8-.7-7.3 11.6-.6v3.6c-.6.2-1.3.4-1.9.6-3 1.1-6 2.3-8.9 3.6zm-13.1-.2c3.5-2.6 7.9-2.5 9.8.1.3.4.5.8.6 1.3-4.3 1.9-10.3 5-12.6 8.8-.3-.2-.6-.5-.8-.8-1.9-2.6-.6-6.8 3-9.4zm48.6 10.7c.7-.2 1.4-.1 2.1 0l.8-1.4.3.1c.7.2 1.3.6 1.9 1.1l.3.2-.8 1.4c.2.3.4.5.6.8.2.3.3.6.4.9h1.6l.1.4c.1.7.1 1.5 0 2.2l-.1.4h-1.6c-.2.7-.6 1.3-1 1.8l.8 1.4-.3.2c-.3.2-.6.5-.9.6-.3.2-.6.3-1 .5l-.3.1-.8-1.4c-.7.1-1.4.1-2.1 0l-.8 1.4-.3-.1c-.7-.3-1.3-.6-1.9-1.1l-.3-.2.8-1.4c-.2-.3-.4-.5-.6-.8-.2-.3-.3-.6-.4-.9h-1.6l-.1-.4c-.1-.7-.1-1.5 0-2.2l.1-.4h1.6c.2-.7.6-1.3 1-1.8l-.8-1.4.3-.2c.3-.2.6-.5.9-.6.3-.2.6-.3 1-.5l.3-.1zm-14.4-26.4h29.9v3.2h-29.9Zm0 7.2h12.1v3.2h-12.1Zm0 7.3h9.7v3.2h-9.7l-.1-.3v-2.9zm25.7-4.8c.9.3 1.7.8 2.5 1.4l1.9-1.1.3.4c.7.8 1.2 1.7 1.5 2.6l.2.5-1.9 1.1c.1.5.2.9.2 1.4 0 .5-.1 1-.2 1.4l1.9 1.1-.2.5c-.3.9-.9 1.8-1.5 2.6l-.3.4-1.9-1.1c-.7.6-1.5 1.1-2.5 1.4v2.2l-.5.1c-.5.1-1 .1-1.5.1s-1 0-1.5-.1l-.5-.1v-2.2c-.9-.3-1.7-.8-2.5-1.4l-1.9 1.1-.3-.4c-.6-.8-1.2-1.7-1.5-2.6l-.2-.5 1.9-1.1c-.1-.5-.2-.9-.2-1.4 0-.5.1-.9.2-1.4l-1.9-1.1.2-.5c.3-.9.9-1.8 1.5-2.6l.3-.4 1.9 1.1c.7-.6 1.5-1.1 2.5-1.4v-2.2l.5-.1c.5-.1 1-.1 1.5-.1s1 0 1.5.1l.5.1zm-2 3c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-1.8-1.5-3.3-3.3-3.3zm-9.5 16.3c-1.2.7-1.6 2.2-.9 3.3.7 1.2 2.2 1.6 3.3.9 1.2-.7 1.6-2.2.9-3.3-.7-1.2-2.1-1.6-3.3-.9z"></path>
        </svg>
      </div>
    `;
		this._containerNode.appendChild(loadingDiv);

		// 4. Clean and Initialize Next.js Hydration Flight Queue
		window.__next_f = [];
		window.__next_f.push([0]);
		window.__next_f.push([2, null]);
		window.__next_f.push([
			1,
			`1:HL["${baseUrl}/components/chat/css/c60bb326c291e53d.css","style",{"crossOrigin":""}]\n0:"$L2"\n`
		]);
		window.__next_f.push([
			1,
			`3:HL["${baseUrl}/components/chat/css/6c935766a069c1dd.css","style",{"crossOrigin":""}]\n`
		]);
		window.__next_f.push([
			1,
			`4:I[3728,[],""]\n6:I[9928,[],""]\n7:I[6954,[],""]\n8:I[7264,[],""]\n`
		]);
		window.__next_f.push([
			1,
			`b:I[2819,["2333","${chunkBasePath}fbe89ba5-ba1860d8f8a4385e.js","8252","${chunkBasePath}4b1a69f1-9a3b1483ad1c9551.js","954","${chunkBasePath}954-9de91e720144fdb0.js","700","${chunkBasePath}700-956954bcc8c8f0fa.js","1931","${chunkBasePath}app/page-f399abcd9a51484a.js"],"Home"]\na:["$","$Lb",null,{}]\n`
		]);
		window.__next_f.push([
			1,
			`5:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"WebLLM Chat"}]]\n`
		]);
		window.__next_f.push([1, '9:null\n']);

		// 5. Sequentially Load External Script Chunks
		const scripts = [
			'/components/chat/chunks/webpack-34414e72d23fbf06.js',
			'/components/chat/chunks/fd9d1056-8b5226b76bc29df9.js',
			'/components/chat/chunks/5517-fa83b3c255de2ec5.js',
			'/components/chat/chunks/main-app-7a940b49cbb5b2fe.js',
			'/components/chat/chunks/fbe89ba5-ba1860d8f8a4385e.js',
			'/components/chat/chunks/4b1a69f1-9a3b1483ad1c9551.js',
			'/components/chat/chunks/954-9de91e720144fdb0.js',
			'/components/chat/chunks/700-956954bcc8c8f0fa.js',
			'/components/chat/chunks/app/page-f399abcd9a51484a.js'
		];

		this._loadExternalScriptsInSequence(baseUrl, scripts);
	}

	private _loadExternalScriptsInSequence(
		baseUrl: string,
		scriptPaths: string[]
	): void
	{
		scriptPaths
			.reduce((promise, path) =>
			{
				return promise.then(() =>
				{
					return new Promise<void>((resolve) =>
					{
						const src = `${baseUrl}${path}`;

						if(document.querySelector(`script[src="${CSS.escape(src)}"]`))
						{
							resolve();
							return;
						}

						const script = document.createElement('script');
						script.src = src;
						script.crossOrigin = 'anonymous';
						script.onload = () => resolve();
						script.onerror = () =>
						{
							console.warn(`Failed to load WebLLM bundle script: ${path}`);
							resolve();
						};
						document.head.appendChild(script);
					});
				});
			}, Promise.resolve())
			.catch((err) => console.error('Error during script loading sequence:', err));
	}
}

// ============================================================================
// IndexedDB Engine (Per-Environment DB, Per-Thread Store)
// ============================================================================

import type { IChatMessage, IThreadMeta } from "./widget";

export class ChatStorageEngine
{
	private env: string;
	private dbName: string;
	private db: IDBDatabase | null = null;
	private static META_STORE = '_threads_meta';

	constructor(env = 'development')
	{
		this.env = env;
		this.dbName = `llm_chat_${this.env}`;
	}

	/**
	 * Opens or upgrades the DB. Automatically ensures object stores exist.
	 */
	public async init(): Promise<void>
	{
		const version = await this.getHighestVersionNeeded();
		return new Promise((resolve, reject) =>
		{
			const req = indexedDB.open(this.dbName, version);
			req.onupgradeneeded = (e: IDBVersionChangeEvent) =>
			{
				const db = req.result;
				if(!db.objectStoreNames.contains(ChatStorageEngine.META_STORE))
				{
					db.createObjectStore(ChatStorageEngine.META_STORE, { keyPath: 'id' });
				}
			};
			req.onsuccess = () =>
			{
				this.db = req.result;
				resolve();
			};
			req.onerror = () => reject(req.error);
		});
	}

	private async getHighestVersionNeeded(): Promise<number>
	{
		return new Promise((resolve) =>
		{
			const req = indexedDB.open(this.dbName);
			req.onsuccess = () =>
			{
				const db = req.result;
				const ver = db.version;
				db.close();
				resolve(ver || 1);
			};
			req.onerror = () => resolve(1);
		});
	}

	/**
	 * Dynamic schema update to ensure a dedicated object store for a thread exists.
	 */
	public async ensureThreadStore(threadId: string): Promise<void>
	{
		const storeName = `thread_${threadId}`;
		if(this.db && this.db.objectStoreNames.contains(storeName))
		{
			return;
		}
		const currentVersion = this.db ? this.db.version : 1;
		if(this.db)
		{
			this.db.close();
		}

		return new Promise((resolve, reject) =>
		{
			const req = indexedDB.open(this.dbName, currentVersion + 1);
			req.onupgradeneeded = () =>
			{
				const db = req.result;
				if(!db.objectStoreNames.contains(ChatStorageEngine.META_STORE))
				{
					db.createObjectStore(ChatStorageEngine.META_STORE, { keyPath: 'id' });
				}
				if(!db.objectStoreNames.contains(storeName))
				{
					db.createObjectStore(storeName, { keyPath: 'id' });
				}
			};
			req.onsuccess = () =>
			{
				this.db = req.result;
				resolve();
			};
			req.onerror = () => reject(req.error);
		});
	}

	// --- Thread Metadata Operations ---

	public async getAllThreads(): Promise<IThreadMeta[]>
	{
		return new Promise((resolve, reject) =>
		{
			if(!this.db) return resolve([]);
			const tx = this.db.transaction(ChatStorageEngine.META_STORE, 'readonly');
			const store = tx.objectStore(ChatStorageEngine.META_STORE);
			const req = store.getAll();
			req.onsuccess = () =>
			{
				const threads: IThreadMeta[] = req.result || [];
				threads.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
				resolve(threads);
			};
			req.onerror = () => reject(req.error);
		});
	}

	public async saveThreadMeta(meta: IThreadMeta): Promise<void>
	{
		await this.ensureThreadStore(meta.id);
		return new Promise((resolve, reject) =>
		{
			if(!this.db) return reject('DB not open');
			const tx = this.db.transaction(ChatStorageEngine.META_STORE, 'readwrite');
			const store = tx.objectStore(ChatStorageEngine.META_STORE);
			const req = store.put(meta);
			req.onsuccess = () => resolve();
			req.onerror = () => reject(req.error);
		});
	}

	public async deleteThread(threadId: string): Promise<void>
	{
		return new Promise((resolve, reject) =>
		{
			if(!this.db) return resolve();
			const tx = this.db.transaction(ChatStorageEngine.META_STORE, 'readwrite');
			const store = tx.objectStore(ChatStorageEngine.META_STORE);
			const req = store.delete(threadId);
			req.onsuccess = () => resolve();
			req.onerror = () => reject(req.error);
		});
	}

	// --- Message Store Operations ---

	public async getMessages(threadId: string): Promise<IChatMessage[]>
	{
		const storeName = `thread_${threadId}`;
		if(!this.db || !this.db.objectStoreNames.contains(storeName))
		{
			return [];
		}
		return new Promise((resolve, reject) =>
		{
			const tx = this.db!.transaction(storeName, 'readonly');
			const store = tx.objectStore(storeName);
			const req = store.getAll();
			req.onsuccess = () =>
			{
				const msgs: IChatMessage[] = req.result || [];
				msgs.sort((a, b) => a.timestamp - b.timestamp);
				resolve(msgs);
			};
			req.onerror = () => reject(req.error);
		});
	}

	public async saveMessage(threadId: string, message: IChatMessage): Promise<void>
	{
		await this.ensureThreadStore(threadId);
		const storeName = `thread_${threadId}`;
		return new Promise((resolve, reject) =>
		{
			const tx = this.db!.transaction(storeName, 'readwrite');
			const store = tx.objectStore(storeName);
			const req = store.put(message);
			req.onsuccess = () => resolve();
			req.onerror = () => reject(req.error);
		});
	}

	public async saveAllMessages(threadId: string, messages: IChatMessage[]): Promise<void>
	{
		await this.ensureThreadStore(threadId);
		const storeName = `thread_${threadId}`;
		return new Promise((resolve, reject) =>
		{
			const tx = this.db!.transaction(storeName, 'readwrite');
			const store = tx.objectStore(storeName);
			store.clear();
			for(const m of messages)
			{
				store.put(m);
			}
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}

	public async deleteMessage(threadId: string, messageId: string): Promise<void>
	{
		const storeName = `thread_${threadId}`;
		if(!this.db || !this.db.objectStoreNames.contains(storeName)) return;
		return new Promise((resolve, reject) =>
		{
			const tx = this.db!.transaction(storeName, 'readwrite');
			const store = tx.objectStore(storeName);
			const req = store.delete(messageId);
			req.onsuccess = () => resolve();
			req.onerror = () => reject(req.error);
		});
	}
}

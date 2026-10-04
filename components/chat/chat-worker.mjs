import { WebWorkerMLCEngineHandler } from "./mlc.mjs";

// A handler that resides in the worker thread
const handler = new WebWorkerMLCEngineHandler();
/**
 *
 * @param {MessageEvent} msg
 */
self.onmessage = (msg) =>
{
	handler.onmessage(msg);
};

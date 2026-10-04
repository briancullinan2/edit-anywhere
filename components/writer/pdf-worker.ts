/**
 * Off-thread Web Worker for generating high-resolution PDF/Print bundles.
 * Receives complete HTML document strings and optional canvas background layers.
 */
self.onmessage = async (e: MessageEvent) =>
{
	const { title, cellsHtml, options } = e.data;

	// Build standalone printable document markup
	const printDocumentHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 0; color: #111; }
          .page-break { page-break-after: always; }
          .cell-container { position: relative; width: 100%; margin-bottom: 2rem; }
          .canvas-bg-layer { position: absolute; top:0; left:0; width:100%; height:100%; z-index: -1; }
        </style>
      </head>
      <body>
        ${cellsHtml}
      </body>
    </html>
  `;

	// Create downloadable Blob URL or payload
	const blob = new Blob([printDocumentHtml], { type: 'text/html' });

	self.postMessage({
		type: 'PDF_READY',
		title,
		blobUrl: URL.createObjectURL(blob),
		rawHtml: printDocumentHtml
	});
};

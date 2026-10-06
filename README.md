
# Edit Anywhere

## 1. Core Vision Statement

**Edit Anywhere** transforms the passive web into an open, structured database and canvas. Instead of interacting with static, opinionated site layouts, users activate an overlay directly inside any browser tab to extract, query, and restyle web content in real time.

By coupling **Client-Side Semantic Parsing** (DOM structure + text context analysis) with an **Inline Editing Engine (TinyMCE in Inline Mode)**, the tool converts messy HTML into structured schemas (JSON/Tables) and projects them back onto the page as custom, re-themeable components.

```
+-------------------------------------------------------------------------+
|                              ANY WEBPAGE                                |
+-------------------------------------------------------------------------+
                                    │
                                    ▼
+-------------------------------------------------------------------------+
|                  Semantic Extraction Engine (Overlay)                   |
|   - Pattern Matching & Auto-Classification (Lists, Products, Cards)     |
|   - DOM Element Normalization                                            |
+-------------------------------------------------------------------------+
                                    │
                                    ▼
+-------------------------------------------------------------------------+
|                  Structured Local Store (Mini DB/Sheet)                 |
|   - Rows & Columns / JSON Schema                                        |
|   - Field Mapping (Title, Price, Date, Body, Image, Metadata)           |
+-------------------------------------------------------------------------+
                                    │
               ┌────────────────────┴────────────────────┐
               ▼                                         ▼
+-----------------------------+           +-----------------------------+
|    Inline Editing Engine    |           |    Template & Restyler      |
|  (TinyMCE Inline Mode)      |           |  (Grid, Card, Clean Reader, |
|  - On-page content tweaks   |           |   Custom Tailwind / CSS)    |
+-----------------------------+           +-----------------------------+

```

---

## 2. Core Architecture & Workflow

### A. Semantic Extraction & DOM Parsing

* **Automated Structure Recognition:** Detects repeating patterns on pages (e.g., e-commerce lists, blog posts, search results, forum threads, directory listings).
* **Field Mapping Engine:** Uses heuristic models and semantic HTML tags (`<article>`, `<header>`, `aria-*`, microdata, Open Graph) to map visual clusters into structured attributes:
* `Title` | `Author` | `Date` | `Image URL` | `Price` | `Body Text` | `Link`


* **Custom Selection Mode:** Point-and-click selector allowing users to highlight a section and auto-expand selection to similar sibling elements across the DOM.

### B. The Dual-State Model (Sheet $\leftrightarrow$ View)

* **Local Tab Database:** Extracted elements populate an in-memory tabular storage engine (supporting filter, sort, search, export to CSV/JSON).
* **Bi-directional Binding:**
* Modifying data in the table updates the rendered HTML view dynamically.
* Editing inline content directly on the page updates the underlying database row.



### C. On-Page Editing & Restyling Engine

* **TinyMCE Inline Integration:** Floating context-aware toolbar attached directly to focused text/media nodes, allowing direct text editing, style adjustments, and image swaps without breaking page layout.
* **Layout Remixer:** Replace original page layouts with customizable render templates:
* **Reader Mode:** Clean typography, zero ads/distractions.
* **Grid / Kanban:** Converts repeating list items into interactive cards.
* **Comparison Table:** Side-by-side data matrix built directly from scraped listings.


* **Persistent Styles & Rules:** Save custom DOM transformations per domain or URL pattern to automatically apply when revisiting pages.

---

## 3. Key Feature Modules

| Module | Description | Technical Details |
| --- | --- | --- |
| **In-Page Injector** | Extension overlay that embeds without iframe isolation or layout distortion. | Shadow DOM encapsulation for controls; inherited CSS resets for target elements. |
| **Semantic Parser** | Auto-indexes DOM trees into structured record sets. | Tree-walking algorithms, CSS selector matching, and heuristic pattern detection. |
| **Inline Editor** | Live inline editing on any parsed DOM element. | TinyMCE in `inline: true` mode attached dynamically to focusable elements. |
| **Tab Database** | In-memory spreadsheet interface for browsing extracted data. | Tabular grid component with instant filtering, sorting, and export capabilities. |
| **Template Engine** | Restyles parsed data back into custom HTML layouts. | Templating engine applying custom CSS/Tailwind themes over scraped data rows. |

---

## 4. Technical Stack Strategy

* **Extension Frame:** Web Extensions API (Chrome / Firefox / Edge) with Content Script injection.
* **UI Overlay Component:** Shadow DOM to isolate the curation UI from page CSS conflicts.
* **Editor Core:** TinyMCE (Inline Mode) configured with minimal, non-disruptive toolbar plugins.
* **Data Storage & Sync:** IndexedDB / LocalStorage for offline rule persistence and custom template storage.


## 5 Project History

### 10/5/2026

![alt text](<Screenshot 2026-10-04 214018.png>) ![alt text](<Screenshot 2026-10-04 214028.png>) ![alt text](<Screenshot 2026-10-04 214222.png>) ![alt text](<Screenshot 2026-10-05 214126.png>)

Basic concept is an editor for everything you've bookmarked.
The main widget opens like a document editor.
The other panels are for organizing the data in those documents.

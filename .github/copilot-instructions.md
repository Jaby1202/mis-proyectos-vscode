## Purpose
This file helps AI coding assistants become productive quickly in this small static website project (DevJobs). It documents the application architecture, how pages are wired, key patterns, examples to reference, and a few discoverable issues.

## Quick start (no build)
- The site is a static client-side project. Open `empleos.html` (jobs listings page) in a browser or serve the folder over a local HTTP server.
- Example quick server (PowerShell):
  - `python -m http.server 8000` (then open http://localhost:8000/empleos.html)
  - or `npx http-server .` if you prefer Node-based servers.

## Big-picture architecture
- Static client-side website (no bundler): HTML + CSS + ES modules.
- Entry points:
  - `empleos.html` — loads `main.js` via `<script type="module" src="main.js"></script>` and is the jobs/results page.
  - `index.html` — landing page (does not load `main.js`).
  - `react.html` — a small React experiment that loads React from CDN (esm.sh).
- Module imports: `main.js` imports `fetch-data.js`, `filters.js`, `apply-button.js`, and `devjobs-avatar-element.js`. These modules run in the browser as ES modules.

## Data flow and runtime behavior (concrete examples)
- Data source: `data.json` — an array of job objects. Example fields: `titulo`, `empresa`, `descripcion`, `ubicacion`, `tipo`, `cargo`, and nested `data` with `technology`, `modalidad`, `nivel`, `contrato`.
- Rendering (see `fetch-data.js`):
  - `fetch('./data.json')` → forEach job → create `<article class="job-listing-card">` and set filterable fields as `data-*` attributes, e.g. `article.dataset.modalidad = job.data.modalidad`.
  - If `job.data.technology` is an array it is joined into a comma string before storing in `data-technology`.
- Filtering (see `filters.js`):
  - Filters read dataset attributes from `.job-listing-card` elements and toggle the `is-hidden` class.
  - Search is a substring match on the `data-titulo` value.
  - Technology matching uses `String.includes` on the comma-joined `data-technology` value.
- Apply button (see `apply-button.js`):
  - Uses event delegation on `.jobs-listings`. When `.button-apply-job` is clicked, the button text becomes `Aplicado`, it gets `is-applied` and is disabled.

## Project-specific conventions & gotchas
- ES modules in browser: code uses `import './fetch-data.js'` style imports. Keep using `type="module"` in HTML and avoid bundling unless adding an explicit build step.
- Data/filter normalization: `data.json` entries have inconsistent casing (e.g., `Postgresql` vs `postgresql`) and some typos (`doker`) that can break exact matches. Filters do substring matches, but normalizing to lowercase at render or in data is recommended when modifying code.
- `technology` handling: arrays are joined to a comma string before being used in filters — add tests/normalization if you add complex matching logic.
- Multiple pages:
  - `empleos.html` is the jobs page and is the primary consumer of `main.js`.
  - `index.html` is a marketing/landing page and does not include `main.js`.
  - `react.html` is a separate experiment and is not wired into the main job-listing flow.

## Known issues discovered in source
- `react.html` contains `React.creatElement` (typo) — should be `React.createElement` if the file is intended to run.
- `data.json` has inconsistent values (capitalization and spelling). Examples: `Postgresql`, `doker`. These may cause filter mismatches.

## Files to inspect when making changes
- `fetch-data.js` — creates DOM job cards and maps `data.json` -> elements. Primary place for rendering logic.
- `filters.js` — filter logic and search behavior; updates visibility by toggling `is-hidden` on `.job-listing-card`.
- `apply-button.js` — apply button interaction via event delegation.
- `main.js` — module entry that imports the modules above. Included in `empleos.html`.
- `empleos.html` — the jobs page; contains filter controls and the container `.jobs-listings`.
- `data.json` — canonical sample data; update carefully when changing filter behavior.

## Guidance for AI changes (concise, project-specific)
- When adding new filterable fields: add them to `data.json`, set `article.dataset.*` in `fetch-data.js`, and update `filters.js` to read that dataset key and include it in the `isShown` predicate.
- Prefer DOM dataset attributes + toggling `is-hidden` over removing/adding nodes; this keeps pagination/positioning simple.
- When changing `technology` matching, remember the code currently stores arrays as CSV strings — either keep that format or update both `fetch-data.js` and `filters.js` together.
- Avoid introducing a build step unless you also add a README and `package.json` describing the new workflow.

## When you're unsure
- If a change affects multiple files, run the site in a local server and verify `empleos.html` behaves (filters, job listing, apply button) in a browser.

---
If anything here is unexpected or you'd like the file expanded with automated test examples or a tiny local-run script, tell me which area to expand.

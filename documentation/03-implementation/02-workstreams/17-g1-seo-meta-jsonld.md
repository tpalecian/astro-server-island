---
title: Workstream G1 — SEO meta + JSON-LD utilities
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/04-seo-and-routing.md
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
tags: [implementation, workstream, seo]
---

# Workstream G1 — SEO meta + JSON-LD utilities

**Ticket:** `03-tickets/g1-seo-meta-jsonld.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add utilities in `src/lib/` to build meta tags (title, description, og) and JSON-LD from page data; layout consumes page-provided meta and JSON-LD and renders them in `<head>`; page passes data to layout; no sitemap/redirects/404/500 here.
- **Exact file name(s) and paths:** Create `apps/website/src/lib/meta.ts` and `apps/website/src/lib/jsonld.ts` (or equivalent). Edit `apps/website/src/layouts/` to accept meta + jsonld props and render `<title>`, `<meta>`, `<script type="application/ld+json">`. No other paths.
- **Exact props/API/types:** Meta utility: input (e.g. title, description, ogImage, canonical); output or render `<title>`, `<meta name="description">`, `<meta property="og:...">`. JSON-LD utility: input (page type, data); output or render `<script type="application/ld+json">` with structured data. Layout: receives meta + jsonld from page; renders in head.
- **Exact mapping/key:** N/A (no block mapping). Layout is the single consumer; pages pass meta + jsonld.
- **Legacy/reference behaviour:** 2022-site pages/layout for meta and head; nuxt.config head defaults. Match meta and JSON-LD behaviour.

## 1. Allowed paths
- `apps/website/src/layouts/`, `apps/website/src/lib/` (meta.ts, jsonld.ts)

## 2. Blocking dependencies
- A4.

## 3. Unblocks
- G2, G3, G4.

## 4. Contract / API
- **Meta:** Utilities to build title, description, og tags from page data. Layout renders `<title>`, `<meta name="description">`, `<meta property="og:...">`; page passes data to layout. **JSON-LD:** Utility to build structured data; layout renders `<script type="application/ld+json">` in head.

## 5. Data source & shape
- Page provides title, description, og, structured data; layout consumes and renders in head.

## 6. Out of scope / Don't do
- Sitemap (G2), redirects (G3), 404/500 (G4). Meta/JSON-LD only.

## 7. Steps (ordered)
1. Add utilities for meta + JSON-LD in src/lib (or utils).
2. Layout consumes page-provided meta and JSON-LD; render in head.

## 8. Done criteria
- Meta and JSON-LD render from page data in layout.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Meta utilities exist; layout renders title, description, og. |
| AC2 | JSON-LD utility exists; layout renders ld+json script. |

## 10. Validation
- Inspect head on a page; meta and ld+json present.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/04-seo-and-routing.md`
- Solution: `documentation/02-solution/seo-sitemap-redirects-error-pages-plan.md`

## 12. Old code (2022-site)
- 2022-site pages/layout for meta and head; nuxt.config head defaults.

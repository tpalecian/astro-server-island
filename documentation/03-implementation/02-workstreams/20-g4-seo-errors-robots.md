---
title: Workstream G4 — SEO error pages + robots
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

# Workstream G4 — SEO error pages + robots

**Ticket:** `03-tickets/g4-seo-errors-robots.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add custom 404 and 500 Astro pages in `src/pages/`, styled to match design; add `public/robots.txt` that references the sitemap URL (e.g. https://site.com/sitemap.xml); no meta/sitemap/redirects here.
- **Exact file name(s) and paths:** Create `apps/website/src/pages/404.astro`, `apps/website/src/pages/500.astro`; create `apps/website/public/robots.txt`. No other paths.
- **Exact props/API/types:** 404/500: static or minimal props; render layout + message. robots.txt: static file with line `Sitemap: <absolute sitemap URL>`. Document sitemap URL (e.g. from env or config).
- **Exact mapping/key:** Routes `/404` and `/500` (or framework convention); `/robots.txt` static. No block mapping.
- **Legacy/reference behaviour:** 2022-site error layout or error.vue; styled 404/500; robots with sitemap.

## 1. Allowed paths

- `apps/website/src/pages/404.astro`, `500.astro`; `apps/website/public/robots.txt`

## 2. Blocking dependencies

- A4. G2 (sitemap URL for robots.txt) recommended.

## 3. Unblocks

- J (QA: 404/500 and robots validated).

## 4. Contract / API

- **404/500:** Custom Astro pages; styled to match design. **robots.txt:** In public/; reference sitemap URL (e.g. https://site.com/sitemap.xml).

## 5. Data source & shape

- Static pages; robots.txt static content.

## 6. Out of scope / Don't do

- Meta (G1), sitemap (G2), redirects (G3). Errors and robots only.

## 7. Steps (ordered)

1. Add 404.astro and 500.astro in src/pages/; style per design.
2. Add public/robots.txt; include Sitemap: <sitemap URL>.

## 8. Done criteria

- 404 and 500 pages render; robots.txt exists and references sitemap.

## 9. Acceptance criteria

| #   | Criterion                                  |
| --- | ------------------------------------------ |
| AC1 | 404.astro and 500.astro exist and render.  |
| AC2 | robots.txt in public/; references sitemap. |

## 10. Validation

- Hit /nonexistent (404); trigger 500 if possible; fetch /robots.txt.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/04-seo-and-routing.md`
- Solution: `documentation/02-solution/seo-sitemap-redirects-error-pages-plan.md`

## 12. Old code (2022-site)

- 2022-site error layout or error.vue.

---
title: Workstream G2 — SEO sitemap
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/04-seo-and-routing.md
  - 01-discovery/migration-map.md
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
tags: [implementation, workstream, seo]
---

# Workstream G2 — SEO sitemap

**Ticket:** `03-tickets/g2-seo-sitemap.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** At build time, call getRoutes() from @rotate/cms; build a sitemap XML from the returned path list (allCategories, allThinkings, allWorks, allStudios, infoPage); write to `public/sitemap.xml` or serve via Astro endpoint; no meta/redirects/errors here.
- **Exact file name(s) and paths:** Build script or Astro endpoint that calls getRoutes(); output `apps/website/public/sitemap.xml` or `apps/website/src/pages/sitemap.xml.ts` (endpoint). No other paths.
- **Exact props/API/types:** getRoutes() returns shape from types-dato (e.g. allCategories, allThinkings, allWorks, allStudios, infoPage with paths). Build URL list; output valid sitemap XML (urlset, url, loc, lastmod if available). Document exact getRoutes() shape in workstream or solution.
- **Exact mapping/key:** N/A. Sitemap URL list derived from getRoutes() only.
- **Legacy/reference behaviour:** `2022-site/services/routes.js` — path list source; sitemap contains all public routes.

## 1. Allowed paths

- `apps/website/public/sitemap.xml` or Astro endpoint; build script that calls getRoutes().

## 2. Blocking dependencies

- A4 (getRoutes()). E (routes implemented) recommended.

## 3. Unblocks

- J (deployment/QA validate sitemap).

## 4. Contract / API

- **Sitemap:** Generate at build from getRoutes(). Use allCategories, allThinkings, allWorks, allStudios, infoPage to build URL list. Output sitemap.xml (static or endpoint). See migration-map for getRoutes() output shape.

## 5. Data source & shape

- getRoutes() from @rotate/cms; shape in discovery migration-map.

## 6. Out of scope / Don't do

- Meta (G1), redirects (G3), errors (G4). Sitemap only.

## 7. Steps (ordered)

1. At build, call getRoutes().
2. Build sitemap XML from path list; write to public/sitemap.xml or serve via endpoint.

## 8. Done criteria

- sitemap.xml generated from getRoutes(); all expected paths included.

## 9. Acceptance criteria

| #   | Criterion                                             |
| --- | ----------------------------------------------------- |
| AC1 | sitemap.xml exists and is generated from getRoutes(). |
| AC2 | All route paths from getRoutes() included.            |

## 10. Validation

- Fetch sitemap; validate URLs; check coverage.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/04-seo-and-routing.md`, `documentation/01-discovery/migration-map.md`
- Solution: `documentation/02-solution/seo-sitemap-redirects-error-pages-plan.md`

## 12. Old code (2022-site)

- `2022-site/services/routes.js` — path list source.

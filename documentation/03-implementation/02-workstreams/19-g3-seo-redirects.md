---
title: Workstream G3 — SEO redirects (build)
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

# Workstream G3 — SEO redirects (build)

**Ticket:** `03-tickets/g3-seo-redirects-build.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** At build time, call getRedirects() from @rotate/cms; map each redirect to host format (Vercel: source, destination, permanent); write to `vercel.json` or inject into config; build-time only; no runtime redirect server; no meta/sitemap/errors here.
- **Exact file name(s) and paths:** Build script or Astro integration that calls getRedirects(); output or merge into `apps/website/vercel.json` (redirects array). No other paths.
- **Exact props/API/types:** getRedirects() returns array with source, destination, redirectType (301/302 or equivalent). Map to Vercel: `{ source, destination, permanent: true|false }`. Document exact field names from getRedirects() in implementation.
- **Exact mapping/key:** N/A. Redirect list from getRedirects() only; no block mapping.
- **Legacy/reference behaviour:** 2022-site nuxt.config or redirect config; map 301/302 correctly.

## 1. Allowed paths
- `apps/website/vercel.json` (or host redirect config); build script that calls getRedirects().

## 2. Blocking dependencies
- A4 (getRedirects()).

## 3. Unblocks
- J (deployment validates redirects).

## 4. Contract / API
- **Redirects:** Call getRedirects() at build; output in host format. Vercel: `vercel.json` with `redirects` array (source, destination, permanent). Map Dato redirectType (301/302) to permanent true/false. Document exact field names in implementation.

## 5. Data source & shape
- getRedirects() from @rotate/cms; source, destination, redirectType (or equivalent).

## 6. Out of scope / Don't do
- Runtime redirect server. Build-time config only. Meta (G1), sitemap (G2), errors (G4).

## 7. Steps (ordered)
1. At build, call getRedirects().
2. Map to Vercel (or host) redirect format; write vercel.json or inject into config.

## 8. Done criteria
- Redirects generated at build; host config applied; redirectType mapped.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | getRedirects() at build produces redirect config. |
| AC2 | Vercel (or host) redirects applied; 301/302 correct. |

## 10. Validation
- Test redirect URLs in staging.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/04-seo-and-routing.md`
- Solution: `documentation/02-solution/seo-sitemap-redirects-error-pages-plan.md`

## 12. Old code (2022-site)
- 2022-site nuxt.config or redirect config.

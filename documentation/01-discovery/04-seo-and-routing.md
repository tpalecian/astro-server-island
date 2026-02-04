---
title: Discovery — SEO and routing
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs: []
tags: [discovery, seo, routing, redirects]
---

# Discovery — SEO and routing

## 1. Outcome & Business Value (why)

**Purpose:** Preserve SEO equity and routing behavior during migration.

**Value:** Prevents traffic loss, maintains indexing, and ensures user experience continuity.

**Success criteria:**
- Meta and structured data render correctly.
- Redirects are applied from Dato.
- 404/500 pages are styled.

## 2. Context & Scope (what/where)

**Current state:** 2022-site provides meta, JSON‑LD, redirects, and error pages.

**In scope:** Meta/JSON‑LD placement, redirects source, error pages, sitemap and robots strategy.

**Out of scope:** Exact build tooling or host configuration implementation.

**Assumptions:**
- Redirect data comes from Dato.

**Risks & mitigations:**
- Risk: SEO regressions. Mitigation: keep meta and JSON‑LD in layout and verify in QA.

## 3. Ideas, options & references

**Ideas / options explored:**
- Build-time vs. runtime redirects (build-time preferred for platform/caching).
- Meta and JSON‑LD in layout vs. per-page (layout with page-provided data for consistency).
- Custom 404/500 vs. default host pages (custom for branding and UX).

**References & further reading:**
- 2022-site meta, JSON‑LD, redirect config, and error pages.
- Astro metadata and redirects; sitemap and robots patterns.

**Old code (2022-site) — current state / prior art:**

| What | Path (2022-site) |
|------|-------------------|
| Route list (sitemap source) | `2022-site/services/routes.js` |
| Pages (meta, head) | `2022-site/pages/` (e.g. `index.vue`, `_category/_slug.vue` — where meta/JSON-LD are set) |
| Nuxt config (redirects, head defaults) | `2022-site/nuxt.config.js` (or equivalent) |
| Error pages | 2022-site error layout or `error.vue` (404/500) |

Use these paths when auditing how the 2022-site handles meta, redirects, and error pages; the new solution uses getters `getRoutes()` and `getRedirects()` and layout-based meta/JSON-LD.

**Key information:**
- Redirect source (Dato); `redirectType` mapping (301/302) and host syntax; sitemap path list source.

---

For the exact approach, meta/redirects/error pages, and delivery → see `02-solution/seo-sitemap-redirects-error-pages-plan.md`.

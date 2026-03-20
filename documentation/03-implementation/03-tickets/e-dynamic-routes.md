---
title: Ticket E — dynamic routes
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-21
depends_on: [CMS getters + exports, app container (homepage + module)]
tags: [implementation, ticket, routing]
---

# Ticket E — dynamic routes

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/pages/` (optionally containers/components). Add dynamic routes per migration map: **[category]/index.astro** → category landing (getCategoryBySlug, getCategoryCards); **[category]/[slug].astro** → article/project (getPageBySlug); **info.astro** → getInfo(). Categories: work | thinking | studio. Server-rendered; no getStaticPaths. Pages/containers call getters only; modules receive props only. Do not edit packages/service-dato or 2022-site. Content blocks (F) and SEO meta in layout (G) are out of scope here.

**Outcome:** All dynamic routes from migration map exist; server-rendered; data from getters; no getters in modules.

**Value:** Full route coverage for category landings and article/project pages.

**Acceptance criteria:**

| #   | Criterion                                                                                    | Done |
| --- | -------------------------------------------------------------------------------------------- | ---- |
| AC1 | Dynamic routes [category], [category]/[slug], info exist per migration map; server-rendered. | ✓    |
| AC2 | Category landing uses getCategoryBySlug + getCategoryCards; article uses getPageBySlug.      | ✓    |
| AC3 | Containers/server call getters only; modules receive props only.                             | ✓    |
| AC4 | Styleguide route decision documented.                                                        | ✓    |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container (homepage + module).  
**Unblocks:** Sitemap; deployment + QA.

**Dependencies / risks:** Use getRoutes(), getPageBySlug(category, slug), getCategoryBySlug(category), getCategoryCards(category), getInfo() for data.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Navigate each route; confirm data renders. Use getRoutes() to sanity-check paths.

---

## Design & References

**Figma / design:** N/A

---

## Notes

**Implementation (completed 2026-03-21):**

- `pages/[category]/index.astro` — `getCategoryBySlug`, `getCategoryCards` (slug map `work`→`works`, etc. per `migration-map.md`), `prerender = false`, unknown `[category]` segment **or** missing CMS category → `Astro.rewrite('/404')` (see `pages/404.astro`; URL stays canonical for SEO).
- `pages/[category]/[slug].astro` — `getPageBySlug(category, slug)`; unknown `[category]` **or** no CMS page for `[slug]` → `Astro.rewrite('/404')` (same 404 page and status as other not-found cases).
- `pages/info.astro` — `getInfo()`; missing CMS info record → `Astro.rewrite('/404')` (placeholder until real content in ticket F).
- Shared helpers: `lib/index.ts` re-exports `site-category-url-params` only; Dato adapters live under `lib/dato/` (import `@/lib/dato`). Pages use `BaseLayout` (`title`, `headerStyle="default"`); homepage keeps overlay header.

**AC4 — Styleguide (`/styleguide/*`):** No Astro routes added. **Decision:** out of scope for this migration slice; 2022 Nuxt styleguide is not ported until explicitly scheduled — see `documentation/01-discovery/migration-map.md` (row: `/styleguide/*` → TBD). Optional future: static dev-only route or Storybook, not part of Ticket E.

**HTTP 404:** The app **`Astro.rewrite('/404')`** (browser URL unchanged vs redirect) when: invalid `[category]` segment, missing category landing data, **unknown or missing article/project slug** (`getPageBySlug` returns nothing), or missing info record. `404.astro` renders the not-found UI and sets **`Astro.response.status = 404`**. Further branding is ticket **G4**.

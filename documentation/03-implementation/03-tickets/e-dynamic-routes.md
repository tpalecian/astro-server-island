---
title: Ticket E — dynamic routes
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
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
| AC1 | Dynamic routes [category], [category]/[slug], info exist per migration map; server-rendered. |      |
| AC2 | Category landing uses getCategoryBySlug + getCategoryCards; article uses getPageBySlug.      |      |
| AC3 | Containers/server call getters only; modules receive props only.                             |      |
| AC4 | Styleguide route decision documented.                                                        |      |

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

Steps: (1) Add [category]/index.astro — getCategoryBySlug, getCategoryCards. (2) Add [category]/[slug].astro — getPageBySlug(category, slug). (3) Add or update info.astro — getInfo(); path from getRoutes().infoPage if needed. (4) Document styleguide route (migrate or drop) per migration map.

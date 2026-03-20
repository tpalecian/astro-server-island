---
title: Ticket G2 — SEO sitemap
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, seo]
---

# Ticket G2 — SEO sitemap

---

## Description, Value & ACs

**Scope:** Edit `apps/website/public/sitemap.xml` or Astro endpoint; build script that calls getRoutes(). Generate sitemap at build from getRoutes(). Use allCategories, allThinkings, allWorks, allStudios, infoPage to build URL list. Output sitemap.xml (static or endpoint). Out of scope: meta, redirects, error pages.

**Outcome:** sitemap.xml generated from getRoutes(); all expected paths included.

**Value:** Sitemap for search engines.

**Acceptance criteria:**

| #   | Criterion                                             | Done |
| --- | ----------------------------------------------------- | ---- |
| AC1 | sitemap.xml exists and is generated from getRoutes(). |      |
| AC2 | All route paths from getRoutes() included.            |      |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports (getRoutes()). Dynamic routes implemented recommended.  
**Unblocks:** Deployment + QA (validate sitemap); error pages + robots (robots.txt can reference sitemap).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Fetch sitemap; validate URLs; check coverage.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Steps: (1) At build, call getRoutes(). (2) Build sitemap XML from path list; write to public/sitemap.xml or serve via endpoint.

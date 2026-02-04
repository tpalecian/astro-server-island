---
title: Ticket G1 — SEO meta + JSON-LD
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, seo]
---

# Ticket G1 — SEO meta + JSON-LD

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/layouts/` and `apps/website/src/lib/` (e.g. meta.ts, jsonld.ts). **Meta:** Utilities to build title, description, og tags from page data. Layout renders `<title>`, `<meta name="description">`, `<meta property="og:...">`; page passes data to layout. **JSON-LD:** Utility to build structured data; layout renders `<script type="application/ld+json">` in head. Page provides title, description, og, structured data; layout consumes and renders in head. Out of scope: sitemap, redirects, 404/500 pages.

**Outcome:** Meta and JSON-LD render from page data in layout.

**Value:** SEO meta and structured data for search and social.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Meta utilities exist; layout renders title, description, og. | |
| AC2 | JSON-LD utility exists; layout renders ld+json script. | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports.  
**Unblocks:** Sitemap; redirects; error pages + robots.

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Inspect head on a page; meta and ld+json present.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Steps: (1) Add utilities for meta + JSON-LD in src/lib (or utils). (2) Layout consumes page-provided meta and JSON-LD; render in head.

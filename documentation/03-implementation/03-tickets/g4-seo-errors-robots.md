---
title: Ticket G4 — SEO error pages + robots
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, seo]
---

# Ticket G4 — SEO error pages + robots

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/pages/404.astro`, `500.astro`; `apps/website/public/robots.txt`. **404/500:** Custom Astro pages; styled to match design. **robots.txt:** In public/; reference sitemap URL (e.g. https://site.com/sitemap.xml). Sitemap URL for robots.txt recommended (sitemap ticket). Out of scope: meta, sitemap, redirects.

**Outcome:** 404 and 500 pages render; robots.txt exists and references sitemap.

**Value:** User-friendly errors and crawler guidance.

**Acceptance criteria:**

| #   | Criterion                                  | Done |
| --- | ------------------------------------------ | ---- |
| AC1 | 404.astro and 500.astro exist and render.  |      |
| AC2 | robots.txt in public/; references sitemap. |      |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports. Sitemap (sitemap URL for robots.txt) recommended.  
**Unblocks:** Deployment + QA (404/500 and robots validated).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Hit /nonexistent (404); trigger 500 if possible; fetch /robots.txt.

---

## Design & References

**Figma / design:** [Add when available for 404/500 styling]

---

## Notes

Steps: (1) Add 404.astro and 500.astro in src/pages/; style per design. (2) Add public/robots.txt; include Sitemap: <sitemap URL>.

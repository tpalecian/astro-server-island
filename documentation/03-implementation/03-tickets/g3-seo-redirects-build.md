---
title: Ticket G3 — SEO redirects (build)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, seo]
---

# Ticket G3 — SEO redirects (build)

---

## Description, Value & ACs

**Scope:** Edit `apps/website/vercel.json` (or host redirect config); build script that calls getRedirects(). Call getRedirects() at build; output in host format. Vercel: `vercel.json` with `redirects` array (source, destination, permanent). Map Dato redirectType (301/302) to permanent true/false. Build-time config only; no runtime redirect server. Out of scope: meta, sitemap, error pages.

**Outcome:** Redirects generated at build; host config applied; redirectType mapped.

**Value:** Legacy URL redirects for SEO and bookmarks.

**Acceptance criteria:**

| #   | Criterion                                            | Done |
| --- | ---------------------------------------------------- | ---- |
| AC1 | getRedirects() at build produces redirect config.    |      |
| AC2 | Vercel (or host) redirects applied; 301/302 correct. |      |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports (getRedirects()).  
**Unblocks:** Deployment + QA (validates redirects).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Test redirect URLs in staging.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Steps: (1) At build, call getRedirects(). (2) Map to Vercel (or host) redirect format; write vercel.json or inject into config.

---
title: Ticket H — images and media
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, images]
---

# Ticket H — images and media

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/lib/` (images.ts or media.ts); optionally `apps/website/src/components/modules/` so media block modules use the helper. **Single URL helper:** getMediaUrl(asset, params?) in src/lib/images.ts or media.ts. Accepts Dato asset (or url + params); returns full URL for src. Dato CDN + query params; Bunny in front. All media modules must use helper; no raw asset.url in templates. Params per Dato CDN (w, h, fit, auto=format etc.); document in implementation. Core and media block modules should exist so they can use the helper. Out of scope: imgix/Cloudinary or new pipeline; no per-module URL logic.

**Outcome:** One shared URL helper; every media render path uses it; media loads via Dato + Bunny.

**Value:** Consistent, optimised media URLs; single place for CDN params.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | getMediaUrl exists; accepts asset and optional params. | |
| AC2 | All image/video modules use helper; no raw asset.url in templates. | |
| AC3 | Rendered media uses correct URL and params. | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports.  
**Unblocks:** Block modules (media_single, media multiple); deployment + QA.

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render page with media; confirm src uses helper; media loads.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Steps: (1) Implement getMediaUrl in src/lib/images.ts (or media.ts); signature and params per solution. (2) Update all modules that render images/video to use getMediaUrl; remove raw URL usage.

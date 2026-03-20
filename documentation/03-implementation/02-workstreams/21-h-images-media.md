---
title: Workstream H — Images and media
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/05-images-and-media.md
  - 02-solution/images-and-media.md
tags: [implementation, workstream, images]
---

# Workstream H — Images and media

**Ticket:** `03-tickets/h-images-media.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add a single URL helper `getMediaUrl(asset, params?)` in `src/lib/images.ts` (or media.ts) that accepts a Dato asset (or url + params) and returns the full URL for src (Dato CDN + query params, Bunny in front); all media modules must use it; no raw asset.url in templates; document params (w, h, fit, auto=format).
- **Exact file name(s) and paths:** Create or edit `apps/website/src/lib/images.ts` (or `media.ts`). Optionally edit media block modules to use getMediaUrl. No other paths.
- **Exact props/API/types:** getMediaUrl(asset: DatoAsset | { url: string }, params?: { w?, h?, fit?, auto? }): string. All modules that render images/video must call getMediaUrl; no direct asset.url. Params per Dato CDN; document in implementation or solution.
- **Exact mapping/key:** N/A. Single helper; no block mapping.
- **Legacy/reference behaviour:** 2022-site MediaCaption/MediaCarousel image URLs; Dato CDN + Bunny; one shared helper.

## 1. Allowed paths

- `apps/website/src/lib/` (images.ts or media.ts); `apps/website/src/components/modules/` (media block modules use helper)

## 2. Blocking dependencies

- A4. F1/FB1/FB2 (media modules exist) recommended so they can use helper.

## 3. Unblocks

- FB1, FB2 (media modules use getMediaUrl). J (QA media).

## 4. Contract / API

- **Single URL helper:** getMediaUrl(asset, params?) in src/lib/images.ts or media.ts. Accepts Dato asset (or url + params); returns full URL for src. Dato CDN + query params; Bunny in front. All media modules must use helper; no raw asset.url in templates. Params per Dato CDN (w, h, fit, auto=format etc.); document in implementation.

## 5. Data source & shape

- Dato asset (url, id); optional params. Dato CDN base URL + query params.

## 6. Out of scope / Don't do

- imgix/Cloudinary; new pipeline. No per-module URL logic.

## 7. Steps (ordered)

1. Implement getMediaUrl in src/lib/images.ts (or media.ts); signature and params per solution doc.
2. Update all modules that render images/video to use getMediaUrl; remove raw URL usage.

## 8. Done criteria

- One shared URL helper; every media render path uses it; media loads via Dato + Bunny.

## 9. Acceptance criteria

| #   | Criterion                                                          |
| --- | ------------------------------------------------------------------ |
| AC1 | getMediaUrl exists; accepts asset and optional params.             |
| AC2 | All image/video modules use helper; no raw asset.url in templates. |
| AC3 | Rendered media uses correct URL and params.                        |

## 10. Validation

- Render page with media; confirm src uses helper; media loads.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/05-images-and-media.md`
- Solution: `documentation/02-solution/images-and-media.md`

## 12. Old code (2022-site)

- `2022-site/components/Content/MediaCaption.vue`, MediaCarousel.vue; any shared image helper.

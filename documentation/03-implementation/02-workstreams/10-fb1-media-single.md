---
title: Workstream FB1 — Block Media Single
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
  - 02-solution/images-and-media.md
tags: [implementation, workstream, content-blocks]
---

# Workstream FB1 — Block Media Single

**Ticket:** `03-tickets/fb1-media-single.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one Astro module that receives the media_single block as props (ratio, isFullscreen, displayType, caption, media/asset) and renders the single image/asset using the design-system and getMediaUrl when available; no fetch; register in block mapping under `media_single`.
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/MediaSingle.astro` (or equivalent). Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL fragment `OnMediaSingleRecord`: `ratio`, `isFullscreen` (fullScreen), `displayType`, `caption`, `media` (asset with Media fragment). Use `getMediaUrl(media)` for `src` when images workstream is done; otherwise placeholder or raw url. Types: `MediaSingleRecord` or fragment type from types-dato.
- **Exact mapping/key:** `_modelApiKey === 'media_single'` → this component. Register in the same block map used by F1.
- **Legacy/reference behaviour:** Match behaviour of `2022-site/components/Content/MediaCaption.vue`: caption, ratio, displayType, fullScreen, single asset; design-system tokens only.

## 1. Allowed paths
- `apps/website/src/components/modules/`

## 2. Blocking dependencies
- A4, B, F1.

## 3. Unblocks
- —

## 4. Contract / API
- **Block:** `media_single` (_modelApiKey). Component: props only (caption, ratio, displayType, fullScreen, single asset). Use design-system; use getMediaUrl (H) for image src when H is done. No data fetching.

## 5. Data source & shape
- Block props from page/container; single asset + caption etc. Shape from GQL block fragment.

## 6. Out of scope / Don't do
- No fetch in component. No ad-hoc URL construction; use media helper when available (H).

## 7. Steps (ordered)
1. Create module component for media_single.
2. Map props to match legacy behaviour (caption, ratio, displayType, fullScreen, single asset).
3. Ensure module is used via block mapping by _modelApiKey.

## 8. Done criteria
- media_single block renders with props only; matches design intent.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | media_single module renders without data fetching. |
| AC2 | Props align with legacy component behaviour. |
| AC3 | Module uses design-system tokens (no ad-hoc styling). |

## 10. Validation
- Render block in page with mock CMS data; compare to legacy and Figma.

## 11. Solution / discovery links
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`, `documentation/02-solution/images-and-media.md`

## 12. Old code (2022-site)
- `2022-site/components/Content/MediaCaption.vue`

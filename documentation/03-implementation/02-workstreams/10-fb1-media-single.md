---
title: Workstream FB1 — Block Media Single
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-22
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
  - 02-solution/images-and-media.md
tags: [implementation, workstream, content-blocks]
---

# Workstream FB1 — Block Media Single

**Ticket:** `03-tickets/fb1-media-single.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add a **`media-single-block-container`** that receives the `media_single` block as props (via the page/content pipeline), maps fields in **`format-media-single.ts`** to **`packages/ui`** `MediaSingle` props, and renders with the design-system; optional **`getMediaUrl`** (ticket **H**) when available; register in **`block-container-loaders.ts`** under `media_single`.
- **Exact file name(s) and paths:** **`apps/website/src/components/blocks/media-single-block-container/`** (`index.astro`, `format-media-single.ts`, `media-single-img-sizes.ts`, …); presentational **`packages/ui/src/blocks/media-single/`** (`media-single.astro`, types); shared **`packages/ui/src/media/dato-asset.astro`**; reusable media **`packages/utilities/src/ui/`** (`media-utilities.ts`, `dato-asset-types.ts`, …); block map **`apps/website/src/lib/blocks/block-container-loaders.ts`**. (Supersedes older draft path `components/modules/MediaSingle.astro` — see F1 content-blocks pattern.)
- **Exact props/API/types:** Props match GQL fragment **`OnMediaSingleRecord`**: `ratio`, `isFullscreen` (`fullScreen`), `displayType`, `caption`, `media` (asset with **Media** fragment). Use **`getMediaUrl(media)`** for `src` when images workstream **H** is done; until then Dato URL + responsive helpers (`@rotate/utilities/ui`). Types from **types-dato** / formatter output aligned with **`MediaSingleProps`** in `packages/ui`.
- **Exact mapping/key:** `_modelApiKey === 'media_single'` → lazy loader in **`block-container-loaders.ts`** → `media-single-block-container`.
- **Legacy/reference behaviour:** Match **`2022-site/components/Content/MediaCaption.vue`**: caption, ratio, displayType, fullScreen, single asset; design-system tokens only.

## 1. Allowed paths

- **`apps/website/src/components/blocks/media-single-block-container/`** (formatter holds CMS-only mapping, e.g. displayType strings → layout)
- **`packages/ui/src/blocks/`**, **`packages/ui/src/media/`** (presentational)
- **`packages/utilities/src/ui/`** (reusable media + grid + Dato image helpers; barrel **`@rotate/utilities/ui`**)

## 2. Blocking dependencies

- A4, B, F1.

## 3. Unblocks

- —

## 4. Contract / API

- **Block:** `media_single` (\_modelApiKey). Component: props only (caption, ratio, displayType, fullScreen, single asset). Use design-system; use **getMediaUrl (H)** for image src when H is done. No data fetching.

## 5. Data source & shape

- Block props from page/container; single asset + caption etc. Shape from GQL block fragment.

## 6. Out of scope / Don't do

- No fetch in component. No ad-hoc URL construction; use media helper when available (H).

## 7. Steps (ordered)

1. Container + **`format-media-single.ts`** for `media_single`.
2. Map props to match legacy behaviour (caption, ratio, displayType, fullScreen, single asset).
3. Register **`media_single`** in **`block-container-loaders.ts`**.

## 8. Done criteria

- media_single block renders with props only; matches design intent.

## 9. Acceptance criteria

| #   | Criterion                                             |
| --- | ----------------------------------------------------- |
| AC1 | media_single module renders without data fetching.    |
| AC2 | Props align with legacy component behaviour.          |
| AC3 | Module uses design-system tokens (no ad-hoc styling). |

## 10. Validation

- Render block in page with mock CMS data; compare to legacy and Figma (`03-tickets/fb1-media-single.md` — Design & References).

## 11. Solution / discovery links

- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`, `documentation/02-solution/images-and-media.md`

## 12. Old code (2022-site)

- `2022-site/components/Content/MediaCaption.vue`

## Notes

**Implementation / completion (2026-03-22):** Delivered with ticket **`03-tickets/fb1-media-single.md`** (`status: completed`). See that ticket’s **Notes** for paths and summary.

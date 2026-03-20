---
title: Workstream FB2 — Block Media Multiple
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

# Workstream FB2 — Block Media Multiple

**Ticket:** `03-tickets/fb2-media-multiple.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one Astro module that receives the media multiple/carousel block as props (ratio, slideSize, caption, mediaSlides/assets) and renders a carousel of assets using getMediaUrl and design-system; no fetch; register in block mapping under `media_multiple` (or equivalent \_modelApiKey).
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/MediaMultiple.astro` (or MediaCarousel.astro). Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL fragment `OnMediaMultipleRecord`: `ratio`, `slideSize`, `caption`, `mediaSlides` (assets array with Media fragment). Use getMediaUrl per asset when images workstream is done. Types: MediaMultipleRecord or fragment type from types-dato.
- **Exact mapping/key:** `_modelApiKey === 'media_multiple'` (or CMS key for carousel) → this component. Register in same block map as F1.
- **Legacy/reference behaviour:** Match `2022-site/components/Content/MediaCarousel.vue`; multiple assets; design-system tokens only.

## 1. Allowed paths

- `apps/website/src/components/modules/`

## 2. Blocking dependencies

- A4, B, F1.

## 3. Unblocks

- —

## 4. Contract / API

- **Block:** media multiple/carousel (\_modelApiKey). Component: props only; multiple assets. Use getMediaUrl (H) for images. No data fetching. Design-system tokens.

## 5. Data source & shape

- Block props from page/container; multiple assets. Shape from GQL.

## 6. Out of scope / Don't do

- No fetch in component.

## 7. Steps (ordered)

1. Create module for media multiple/carousel.
2. Map props to legacy behaviour.
3. Wire into block mapping by \_modelApiKey.

## 8. Done criteria

- Block renders with props only; matches design.

## 9. Acceptance criteria

| #   | Criterion                                      |
| --- | ---------------------------------------------- |
| AC1 | Module renders without data fetching.          |
| AC2 | Props align with legacy; design-system tokens. |

## 10. Validation

- Render with mock data; compare to legacy.

## 11. Solution / discovery links

- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`, `documentation/02-solution/images-and-media.md`

## 12. Old code (2022-site)

- `2022-site/components/Content/MediaCarousel.vue`

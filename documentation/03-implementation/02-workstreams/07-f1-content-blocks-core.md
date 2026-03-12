---
title: Workstream F1 — content block core modules
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/02-content-blocks-and-rendering.md
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks]
---

# Workstream F1 — content block core modules

**Ticket:** `03-tickets/f1-content-blocks-core-modules.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add core block modules (Text, Quote, Media basics) in `apps/website/src/components/modules/`, each receiving block props only and mapped by `_modelApiKey`; implement the block map (e.g. Record<_modelApiKey, Component>) so the first block can be server-rendered; no fetch in modules; design-system tokens only.
- **Exact file name(s) and paths:** Create modules under `apps/website/src/components/modules/` (e.g. MediaSingle.astro, Quote.astro, TextLead.astro). Modules import core UI from `packages/ui`; website = logic binding only. One place (container or shared map) that maps `block._modelApiKey` → component.
- **Exact props/API/types:** Each module receives the block as props (shape from GQL fragment / types-dato, e.g. OnMediaSingleRecordFragment, QuoteRecord). No data fetching; props only. Block map: `Record<string, Component>` keyed by `_modelApiKey` (e.g. `media_single`, `quote`, `text_lead`).
- **Exact mapping/key:** `_modelApiKey` → component; same mapping used for first block (SSR) and later by ContentIsland (F3). Keys: per CMS block types (media_single, text_half, text_lead, quote, card_slider, stats, etc.).
- **Legacy/reference behaviour:** Match patterns from `2022-site/components/Content/` (MediaCaption, MediaCarousel, TextHalf, TextLead, TextQuote, CardSlider, Stats); props-only; design-system.

## 1. Allowed paths
- `apps/website/src/components/modules/` (block modules; import core UI from packages/ui)
- `packages/ui/` (add block-related primitives if needed, e.g. Image, Card)

## 2. Blocking dependencies
- A4, B.

## 3. Unblocks
- F2, F3.

## 4. Contract / API
- Core block modules (Text, Quote, Media basics) mapped by `_modelApiKey`. Props only; no data fetching. Use design-system tokens. Block mapping: _modelApiKey → component.

## 5. Data source & shape
- Block data from page getter (blocks array); each block has _modelApiKey and block-specific fields. GQL shape from service-dato.

## 6. Out of scope / Don't do
- No CMS/fetch in modules. No ContentIsland or below-fold fetch (F3). No structured-text inline blocks (F2).

## 7. Steps (ordered)
1. Implement core module components for basic blocks.
2. Wire props from containers; ensure block mapping by _modelApiKey.

## 8. Done criteria
- Core blocks render with props only; match block mapping.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Core modules exist and render without data fetching. |
| AC2 | Modules match block mapping by _modelApiKey. |

## 10. Validation
- Render block in page with mock CMS data.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/02-content-blocks-and-rendering.md`
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)
- `2022-site/components/Content/` — MediaCaption, MediaCarousel, TextHalf, TextLead, TextQuote, CardSlider, Stats.

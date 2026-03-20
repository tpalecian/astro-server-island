---
title: Workstream F3 — ContentIsland (below-fold blocks)
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

# Workstream F3 — ContentIsland (below-fold blocks)

**Ticket:** `03-tickets/f3-content-island-below-fold.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add a client-side ContentIsland (e.g. React/Vue island or Astro client component) that receives a page id/slug or a list of below-fold blocks; fetches blocks if needed and renders them using the **same** \_modelApiKey → component map as F1; first block stays server-rendered by the page; only remaining blocks go through the island.
- **Exact file name(s) and paths:** Create `apps/website/src/components/ContentIsland.tsx` (or .astro with client:load). Reuse block map from F1 (same Record<\_modelApiKey, Component>). Optionally edit page/layout to split first block vs rest and pass rest to island or trigger island fetch. No fetch inside block modules.
- **Exact props/API/types:** ContentIsland props: e.g. `pageId` or `slug` + `category`, or `blocks: Block[]`. If fetching: use getter or API that returns below-fold blocks (same shape as F1). Render with same block map as F1; block shape from types-dato/content query.
- **Exact mapping/key:** Same \_modelApiKey → component mapping as F1; no new mapping. Island only renders blocks; mapping is shared.
- **Legacy/reference behaviour:** 2022-site renders all blocks server-side; here first block SSR, rest via island; no hydration errors; same visual result.

## 1. Allowed paths

- `apps/website/src/components/` (ContentIsland: client island), `apps/website/src/components/modules/` (same block mapping as F1).

## 2. Blocking dependencies

- A4, B, F1.

## 3. Unblocks

- FB1–FB7 (block modules can be used in island).

## 4. Contract / API

- **ContentIsland:** Client island that receives page id/slug or block list; fetches or receives below-fold blocks; renders using same \_modelApiKey → component mapping as first block. First block server-rendered; remaining blocks loaded via this island.

## 5. Data source & shape

- Below-fold blocks: from fetch (by page id) or passed as props. Same block shape as F1. Mapping by \_modelApiKey.

## 6. Out of scope / Don't do

- Do not fetch in block modules themselves; fetch in island or page. First block stays server-rendered (not in island).

## 7. Steps (ordered)

1. Implement ContentIsland (client component) that receives page identifier or blocks.
2. Island fetches below-fold blocks (or receives from parent); renders with same block mapping as F1.
3. Page/layout: render first block server-side; pass rest to ContentIsland or trigger island fetch.

## 8. Done criteria

- First block SSR; remaining blocks load via ContentIsland; same mapping used.

## 9. Acceptance criteria

| #   | Criterion                                                        |
| --- | ---------------------------------------------------------------- |
| AC1 | First block server-rendered; remaining blocks via ContentIsland. |
| AC2 | ContentIsland uses same \_modelApiKey mapping as F1.             |

## 10. Validation

- Page with multiple blocks: first SSR, rest client-loaded; no hydration errors.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/02-content-blocks-and-rendering.md`
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)

- 2022-site renders all blocks server-side; new approach is first block SSR + island for rest.

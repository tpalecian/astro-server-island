---
title: Workstream F2 — content blocks structured text
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

# Workstream F2 — content blocks structured text

**Ticket:** `03-tickets/f2-content-blocks-structured-text.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add structured-text rendering in the app using @datocms/structured-text (or equivalent), with custom renderers for inline blocks (Tag, Emoji, Work, Thinking, Studio, MegaHeading); inline components receive block props only; no block-level rendering here; wire into blocks that have structured text (quote, text_lead, etc.).
- **Exact file name(s) and paths:** Create inline block components under `apps/website/src/components/modules/` (e.g. TagRecord.astro, EmojiRecord.astro, etc.); add or use a shared structured-text renderer that maps `_modelApiKey` / record type to component. No other paths.
- **Exact props/API/types:** Structured text field shape from GQL (value, links with inline blocks). Inline blocks: TagRecord, EmojiRecord, WorkRecord, ThinkingRecord, StudioRecord, MegaHeadingRecord — props from fragment types (OnTagRecord, etc.). Renderer: renderBlock / renderInlineRecord with map from record type to component.
- **Exact mapping/key:** Inline record types (e.g. `TagRecord`, `EmojiRecord`) → component. Used inside blocks that expose structured text (quote copy, text_lead copy, etc.).
- **Legacy/reference behaviour:** `2022-site/gql/fragments/inline-blocks.gql.js` (onTagRecord, onEmojiRecord, etc.); render structured text with inline blocks; no fetch in inline components.

## 1. Allowed paths

- `apps/website/src/components/modules/` (StructuredText inline renderers)

## 2. Blocking dependencies

- A4, F1.

## 3. Unblocks

- IB1–IB6 (inline block records).

## 4. Contract / API

- Structured text rendering with inline block support. Map inline record types (Tag, Emoji, Work, Thinking, Studio, MegaHeading) to components. Use @datocms/structured-text or equivalent; custom renderers for inline blocks.

## 5. Data source & shape

- Structured text field from GQL; inline blocks have \_modelApiKey (e.g. TagRecord, EmojiRecord). Shape from service-dato fragments.

## 6. Out of scope / Don't do

- No page-level block rendering in F2 (that is F1/FB). Inline only within structured text.

## 7. Steps (ordered)

1. Wire structured text renderer; support inline blocks.
2. Map inline record types to small components (or shared renderer).

## 8. Done criteria

- Structured text renders with inline blocks correctly mapped.

## 9. Acceptance criteria

| #   | Criterion                                                              |
| --- | ---------------------------------------------------------------------- |
| AC1 | Structured text renders; inline blocks use correct component per type. |
| AC2 | No data fetching inside inline components; props only.                 |

## 10. Validation

- Render page with structured text + inline blocks; compare to 2022-site.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/02-content-blocks-and-rendering.md`
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)

- `2022-site/gql/fragments/inline-blocks.gql.js` (onTagRecord, onEmojiRecord, etc.).

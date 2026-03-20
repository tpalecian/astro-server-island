---
title: Workstream FB5 — Block Quote
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks]
---

# Workstream FB5 — Block Quote

**Ticket:** `03-tickets/fb5-quote.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one Astro module that receives the quote block as props (name, info, copy/text as structured content) and renders the quote and optional attribution using the design-system; no fetch; register in block mapping under `quote`.
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/Quote.astro` (or `TextQuote.astro`). Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL fragment `OnQuoteRecord`: `name?: string | null`, `info?: string | null` (information), `copy?: { value, links }` (text as structured text). Component receives block as e.g. `block: OnQuoteRecordFragment` or `QuoteRecord` from types-dato. Render `copy` with the structured-text renderer (F2); render `name` and/or `info` as attribution.
- **Exact mapping/key:** `_modelApiKey === 'quote'` → this component. Register in the same block map used by F1 (e.g. `quote: Quote` or `Quote`).
- **Legacy/reference behaviour:** Match behaviour of `2022-site/components/Content/TextQuote.vue`: display quote text (structured) and attribution (name/information); use design-system tokens; no ad-hoc styling.

## 1. Allowed paths

- `apps/website/src/components/modules/`

## 2. Blocking dependencies

- A4, B, F1.

## 3. Unblocks

- —

## 4. Contract / API

- **Block:** quote (\_modelApiKey). Props only; design-system. No fetch.

## 5. Data source & shape

- Block props from page/container.

## 6. Out of scope / Don't do

- No fetch in component.

## 7. Steps (ordered)

1. Create module for quote.
2. Map props; wire into block mapping.

## 8. Done criteria

- Block renders with props only.

## 9. Acceptance criteria

| #   | Criterion                                      |
| --- | ---------------------------------------------- |
| AC1 | Module renders without data fetching.          |
| AC2 | Props align with legacy; design-system tokens. |

## 10. Validation

- Render with mock data.

## 11. Solution / discovery links

- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)

- `2022-site/components/Content/TextQuote.vue`

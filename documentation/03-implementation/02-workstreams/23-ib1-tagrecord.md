---
title: Workstream IB1 — Inline Block TagRecord
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks]
---

# Workstream IB1 — Inline Block TagRecord

**Ticket:** `03-tickets/ib1-tagrecord.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one small component that renders the TagRecord inline block inside structured text; props only (from GQL onTagRecord); wire as custom renderer in the F2 structured-text renderer; design-system; no fetch.
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/TagRecord.astro` (or .tsx if needed for inline). Register in F2 structured-text renderer as renderer for TagRecord. Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL onTagRecord fragment (exact fields from types-dato). Component receives record; render link or tag UI. Types: OnTagRecordFragment or equivalent from types-dato.
- **Exact mapping/key:** Inline record type `TagRecord` → this component in structured-text renderer map. No block-level mapping.
- **Legacy/reference behaviour:** 2022-site gql/fragments/inline-blocks.gql.js onTagRecord; match tag/link behaviour.

## 1. Allowed paths
- `apps/website/src/components/modules/` (StructuredText inline renderer)

## 2. Blocking dependencies
- A4, F2.

## 3. Unblocks
- —

## 4. Contract / API
- **Inline block:** TagRecord (_modelApiKey). Renders inside structured text. Props only; design-system. No fetch.

## 5. Data source & shape
- Inline block props from structured text; shape from GQL onTagRecord.

## 6. Out of scope / Don't do
- No fetch in component.

## 7. Steps (ordered)
1. Create inline component for TagRecord.
2. Map props to legacy behaviour; wire into F2 structured-text renderer.

## 8. Done criteria
- TagRecord renders inside structured text with props only.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | TagRecord module renders without data fetching. |
| AC2 | Props align with legacy; design-system tokens. |

## 10. Validation
- Render structured text with TagRecord; compare to legacy.

## 11. Solution / discovery links
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)
- `2022-site/gql/fragments/inline-blocks.gql.js` (onTagRecord)

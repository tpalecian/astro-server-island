---
title: Workstream IB2 — Inline Block EmojiRecord
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks]
---

# Workstream IB2 — Inline Block EmojiRecord

**Ticket:** `03-tickets/ib2-emojirecord.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one small component that renders the EmojiRecord inline block inside structured text; props only (from GQL onEmojiRecord); wire as custom renderer in the F2 structured-text renderer; design-system; no fetch.
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/EmojiRecord.astro` (or .tsx if needed). Register in F2 structured-text renderer. Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL onEmojiRecord fragment (exact fields from types-dato). Component receives record; render emoji/media UI. Types: OnEmojiRecordFragment or equivalent.
- **Exact mapping/key:** Inline record type `EmojiRecord` → this component in structured-text renderer map.
- **Legacy/reference behaviour:** 2022-site onEmojiRecord; match emoji behaviour.

## 1. Allowed paths

- `apps/website/src/components/modules/` (StructuredText inline)

## 2. Blocking dependencies

- A4, F2.

## 3. Unblocks

- —

## 4. Contract / API

- **Inline block:** EmojiRecord. Props only; design-system. No fetch.

## 5. Data source & shape

- Inline block props from structured text; GQL onEmojiRecord.

## 6. Out of scope / Don't do

- No fetch in component.

## 7. Steps (ordered)

1. Create inline component for EmojiRecord; wire into F2.
2. Map props; design-system tokens.

## 8. Done criteria

- EmojiRecord renders inside structured text.

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

- `2022-site/gql/fragments/inline-blocks.gql.js` (onEmojiRecord)

---
title: Workstream FB4 — Block Text Lead
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks]
---

# Workstream FB4 — Block Text Lead

**Ticket:** `03-tickets/fb4-text-lead.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add one Astro module that receives the text_lead block as props (pretitle, copy/text, size) and renders using the structured-text renderer and design-system; no fetch; register in block mapping under `text_lead`.
- **Exact file name(s) and paths:** Create `apps/website/src/components/modules/TextLead.astro`. Only under `apps/website/src/components/modules/`.
- **Exact props/API/types:** Props match GQL fragment `OnTextLeadRecord`: `pretitle`, `copy` (text with value, links), `size`. Use F2 structured-text renderer for copy. Types: TextLeadRecord or OnTextLeadRecordFragment from types-dato.
- **Exact mapping/key:** `_modelApiKey === 'text_lead'` → this component. Register in same block map as F1.
- **Legacy/reference behaviour:** Match `2022-site/components/Content/TextLead.vue`; lead text; design-system tokens.

## 1. Allowed paths
- `apps/website/src/components/modules/`

## 2. Blocking dependencies
- A4, B, F1.

## 3. Unblocks
- —

## 4. Contract / API
- **Block:** text_lead (_modelApiKey). Props only; design-system. No fetch.

## 5. Data source & shape
- Block props from page/container.

## 6. Out of scope / Don't do
- No fetch in component.

## 7. Steps (ordered)
1. Create module for text_lead.
2. Map props; wire into block mapping.

## 8. Done criteria
- Block renders with props only.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Module renders without data fetching. |
| AC2 | Props align with legacy; design-system tokens. |

## 10. Validation
- Render with mock data.

## 11. Solution / discovery links
- Solution: `documentation/02-solution/content-blocks-and-inline-blocks-plan.md`

## 12. Old code (2022-site)
- `2022-site/components/Content/TextLead.vue`

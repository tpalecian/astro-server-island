---
title: Ticket FB5 — block quote
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket FB5 — block quote

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/`. Implement **quote** block (\_modelApiKey). Props only; design-system. No fetch. Wire into block mapping by \_modelApiKey.

**Outcome:** Block renders with props only.

**Value:** Quote block.

**Acceptance criteria:**

| #   | Criterion                                      | Done |
| --- | ---------------------------------------------- | ---- |
| AC1 | Module renders without data fetching.          |      |
| AC2 | Props align with legacy; design-system tokens. |      |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container; core content block modules.  
**Unblocks:** —

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render with mock data.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Create module for quote. (2) Map props; wire into block mapping.

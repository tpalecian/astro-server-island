---
title: Ticket IB3 — inline block WorkRecord
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, structured text]
tags: [implementation, ticket, content-blocks]
---

# Ticket IB3 — inline block WorkRecord

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/` (StructuredText inline). Implement **WorkRecord** inline block. Props only; design-system. No fetch. Inline block props; GQL onWorkRecord. Wire into the structured-text renderer.

**Outcome:** WorkRecord renders inside structured text.

**Value:** Work reference inline in rich text.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Module renders without data fetching. | |
| AC2 | Props align with legacy; design-system tokens. | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; structured text.  
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

Steps: (1) Create inline component for WorkRecord; wire into the structured-text renderer. (2) Map props; design-system tokens.

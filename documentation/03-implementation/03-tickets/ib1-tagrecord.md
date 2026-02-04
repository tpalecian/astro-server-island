---
title: Ticket IB1 — inline block TagRecord
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, structured text]
tags: [implementation, ticket, content-blocks]
---

# Ticket IB1 — inline block TagRecord

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/` (StructuredText inline renderer). Implement **TagRecord** inline block (_modelApiKey). Renders inside structured text. Props only; design-system. No fetch. Inline block props from structured text; shape from GQL onTagRecord. Wire into the structured-text renderer.

**Outcome:** TagRecord renders inside structured text with props only.

**Value:** Tag inline in rich text.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | TagRecord module renders without data fetching. | |
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

Render structured text with TagRecord; compare to legacy.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Create inline component for TagRecord. (2) Map props to legacy behaviour; wire into the structured-text renderer.

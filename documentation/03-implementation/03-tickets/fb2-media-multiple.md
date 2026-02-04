---
title: Ticket FB2 — block media multiple / carousel
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket FB2 — block media multiple / carousel

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/`. Implement **media multiple/carousel** block (_modelApiKey). Component: props only; multiple assets. Use getMediaUrl (images/media helper) for images. No data fetching. Design-system tokens. Wire into block mapping by _modelApiKey.

**Outcome:** Block renders with props only; matches design.

**Value:** Carousel/multi-media block.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Module renders without data fetching. | |
| AC2 | Props align with legacy; design-system tokens. | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container; core content block modules.  
**Unblocks:** —

**Dependencies / risks:** Use getMediaUrl (images/media helper) when available.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render with mock data; compare to legacy.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Create module for media multiple/carousel. (2) Map props to legacy behaviour. (3) Wire into block mapping by _modelApiKey.

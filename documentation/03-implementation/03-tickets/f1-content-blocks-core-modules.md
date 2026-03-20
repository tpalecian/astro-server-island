---
title: Ticket F1 — content block core modules
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, app container]
tags: [implementation, ticket, content-blocks]
---

# Ticket F1 — content block core modules

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/` only. Implement core block modules (Text, Quote, Media basics) mapped by `_modelApiKey`. Props only; no data fetching. Use design-system tokens. Block mapping: \_modelApiKey → component. Block data comes from page getter (blocks array); each block has \_modelApiKey and block-specific fields. Do not add CMS/fetch in modules; structured-text inline blocks (F2) are out of scope here. **All blocks are server-rendered** (F3 ContentIsland superseded).

**Outcome:** Core blocks render with props only; match block mapping.

**Value:** Reusable block components for all content; consistent mapping.

**Acceptance criteria:**

| #   | Criterion                                            | Done |
| --- | ---------------------------------------------------- | ---- |
| AC1 | Core modules exist and render without data fetching. |      |
| AC2 | Modules match block mapping by \_modelApiKey.        |      |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container.  
**Unblocks:** Structured text (F2); full-page block rendering uses the same map (no separate F3).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render block in page with mock CMS data.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Implement core module components for basic blocks. (2) Wire props from containers; ensure block mapping by \_modelApiKey.

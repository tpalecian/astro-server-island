---
title: Ticket FB1 — block media_single
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket FB1 — block media_single

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/`. Implement **media_single** block (_modelApiKey). Component: props only (caption, ratio, displayType, fullScreen, single asset). Use design-system; use getMediaUrl (images/media helper) for image src when that helper is available. No data fetching; no ad-hoc URL construction. Wire into block mapping by _modelApiKey.

**Outcome:** media_single block renders with props only; matches design intent.

**Value:** Single-media block with caption and display options.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | media_single module renders without data fetching. | |
| AC2 | Props align with legacy component behaviour. | |
| AC3 | Module uses design-system tokens (no ad-hoc styling). | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container; core content block modules.  
**Unblocks:** —

**Dependencies / risks:** Use media helper (images/media) when available for URLs.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render block in page with mock CMS data; compare to legacy and Figma.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Create module component for media_single. (2) Map props to match legacy behaviour (caption, ratio, displayType, fullScreen, single asset). (3) Ensure module is used via block mapping by _modelApiKey.

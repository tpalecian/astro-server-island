---
title: Ticket F1 — content block core modules
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-21
depends_on: [CMS getters + exports, app container]
tags: [implementation, ticket, content-blocks]
---

# Ticket F1 — content block core modules

---

## Description, Value & ACs

**Scope:** Implement core block UI mapped by Dato block type (`_modelApiKey`, exposed as `type` on records via the `Type` fragment). Props only; no data fetching in presentational components. Use design-system tokens. Block data comes from the page getter (`content` blocks array). Structured-text inline blocks (F2) are implemented separately. **All blocks are server-rendered** (F3 ContentIsland superseded). **Implementation note:** Core UI lives in `packages/ui/src/blocks/`; website uses `*-block-container` folders under `apps/website/src/components/blocks/` (not `components/modules/`), per current website architecture rules.

**Outcome:** Core blocks render with props only; match block mapping.

**Value:** Reusable block components for all content; consistent mapping.

**Acceptance criteria:**

| #   | Criterion                                            | Done |
| --- | ---------------------------------------------------- | ---- |
| AC1 | Core modules exist and render without data fetching. | Yes  |
| AC2 | Modules match block mapping by \_modelApiKey.        | Yes  |

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

**Implementation / completion (2026-03-21):** Shipped server-only block rendering for **`media_single`**, **`quote`**, **`text_lead`**, **`text_half`**: `apps/website/src/components/blocks/*-block-container/` with colocated `format-*.ts`, `content-blocks-container/index.astro`, lazy `block-container-loaders.ts`, presentational `packages/ui/src/blocks/*.astro`, article page wiring in `apps/website/src/pages/[category]/[slug].astro`. Unknown block types show a dev-only notice (`unknown-block-container`). Additional types still present in GQL (`media_multiple`, `card_slider`, `stats`) are **not** in the map yet — track under FB2 / FB6 / FB7 or follow-up.

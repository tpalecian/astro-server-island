---
title: Ticket F3 — ContentIsland (below-fold blocks)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket F3 — ContentIsland (below-fold blocks)

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/` (ContentIsland: client island) and `apps/website/src/components/modules/` (same block mapping as the core content block modules). **ContentIsland:** Client island that receives page id/slug or block list; fetches or receives below-fold blocks; renders using same _modelApiKey → component mapping as first block. First block server-rendered; remaining blocks loaded via this island. Do not fetch in block modules; fetch in island or page. First block stays server-rendered (not in island).

**Outcome:** First block SSR; remaining blocks load via ContentIsland; same mapping used.

**Value:** Performance: first block fast; rest loaded client-side without blocking.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | First block server-rendered; remaining blocks via ContentIsland. | |
| AC2 | ContentIsland uses same _modelApiKey mapping as core content block modules. | |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container; core content block modules.  
**Unblocks:** Block modules (media_single, media multiple, text_half, text_lead, quote, card_slider, stats) can be used in island.

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Page with multiple blocks: first SSR, rest client-loaded; no hydration errors.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Implement ContentIsland (client component) that receives page identifier or blocks. (2) Island fetches below-fold blocks (or receives from parent); renders with same block mapping as core content block modules. (3) Page/layout: render first block server-side; pass rest to ContentIsland or trigger island fetch.

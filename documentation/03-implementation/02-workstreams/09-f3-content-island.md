---
title: Workstream F3 — ContentIsland (below-fold blocks) — superseded
phase: implementation
status: superseded
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: []
related_docs:
  - 01-discovery/02-content-blocks-and-rendering.md
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [implementation, workstream, content-blocks, superseded]
---

# Workstream F3 — ContentIsland (below-fold blocks) — **superseded**

**Ticket:** `03-tickets/f3-content-island-below-fold.md` — **superseded; do not implement.**

**Cancellation (2026-03-20):** ContentIsland is **out of scope**. Render the **full** blocks array on the server (same `_modelApiKey` map as F1 for every block). See solution doc and discovery amendment.

---

## Historical context (archived)

Previously: client-side island for below-fold blocks; first block SSR only; reuse F1 block map.

## 12. Old code (2022-site)

- 2022-site renders all blocks server-side; **current approach aligns with that** (full SSR). The island split is not implemented.

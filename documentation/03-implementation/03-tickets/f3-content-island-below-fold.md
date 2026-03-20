---
title: Ticket F3 — ContentIsland (below-fold blocks) — superseded
phase: implementation
status: superseded
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks, superseded]
---

# Ticket F3 — ContentIsland (below-fold blocks) — **superseded**

**Status:** **Superseded / cancelled (2026-03-20).** Do not implement. All content blocks are **server-rendered** in one response; see `02-solution/content-blocks-and-inline-blocks-plan.md` and discovery amendment in `01-discovery/02-content-blocks-and-rendering.md`. Reopen only if a future ticket explicitly rescopes deferred client block loading.

---

## Historical description (not in scope)

Previously scoped: client island for below-fold blocks, first block SSR, shared `_modelApiKey` map with F1.

**Original acceptance criteria (void):**

| #   | Criterion                                                                    | Done |
| --- | ---------------------------------------------------------------------------- | ---- |
| AC1 | First block server-rendered; remaining blocks via ContentIsland.             | N/A  |
| AC2 | ContentIsland uses same \_modelApiKey mapping as core content block modules. | N/A  |

---

## Notes

**Superseded:** Product/architecture choice — modest content, heavy cache; single SSR path preferred. Workstream `02-workstreams/09-f3-content-island.md` marked superseded.

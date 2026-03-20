---
title: Solution — Content blocks and inline blocks
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on:
  - 01-discovery/02-content-blocks-and-rendering.md
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, content-blocks, content-island, rendering]
---

# Solution — Content blocks and inline blocks

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/02-content-blocks-and-rendering.md`.

**This doc focuses on:** the **solution approach** and delivery shape for block rendering.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/02-content-blocks-and-rendering.md` (scope, constraints, decisions).

**In scope here:** rendering approach, module mapping, and delivery plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- First content block renders server‑side.
- Remaining blocks load via ContentIsland.
- Block mapping is deterministic via `_modelApiKey`.

**Proposed approach:**

- Server render the first content block.
- Render remaining blocks via **ContentIsland** (client island) with a separate fetch.

**System boundaries:**

- Blocks and inline blocks data live in `service-dato` (gql, models).
- Rendering happens in app modules, mapped by block type.

**Interfaces & data:**

- Block type discriminator is Dato `_modelApiKey`.
- ContentIsland receives a page identifier and fetches below‑fold blocks.

**Alternatives considered:**

- Server render all blocks. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Changing Dato schema or introducing new block types outside current CMS.

### References (exact)

**Informational (read before / during implementation):**

| What                           | Path or URL                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Discovery (scope, constraints) | `documentation/01-discovery/02-content-blocks-and-rendering.md`                                                 |
| Implementation tickets         | `documentation/03-implementation/03-tickets/f1-content-blocks-core-modules.md`, `f2-*`, `f3-*`, `fb1-*`–`fb7-*` |
| Astro islands                  | [Astro: Client-side Islands](https://docs.astro.build/en/guides/client-side-rendering/)                         |

**Planned locations (where to implement):**

| What                                            | Path                                                                                                                                                            |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block data (GQL, getters)                       | `packages/service-dato/src/gql/` (fragments e.g. blocks, inline-blocks), `packages/service-dato/src/handlers/` (page getter and per-type queries)               |
| App block modules (one per block type)          | `apps/website/src/components/modules/` (e.g. `MediaSingle.astro`, `CardSlider.astro`). Modules import core UI from `packages/ui`; website = logic binding only. |
| ContentIsland (client island, below-fold fetch) | `apps/website/src/components/` (e.g. `ContentIsland.tsx` or `.astro` + client fetch)                                                                            |

### Code examples (contract to implement)

**Block mapping — implement in app container or island.** Each block in the page content array has Dato `_modelApiKey` (e.g. `media_single`, `card_slider`). Map it to the component:

```ts
// _modelApiKey → component; implement this mapping
const blockComponents: Record<string, Component> = {
  media_single: MediaSingle,
  card_slider: CardSlider,
  text_lead: TextLead,
  // ... per CMS block types
}
const Block = blockComponents[block._modelApiKey]
```

**Rendering rule:** First block server-rendered; remaining blocks loaded via ContentIsland (client island fetches below-fold blocks by page id/slug and renders using the same mapping).

**Block data:** Implement block selection in service-dato GQL (fragments and page queries). Page getter returns blocks array; each item has `_modelApiKey`. Exact field list per block type is defined in implementation tickets.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Define block gql and models in `service-dato`.
2. Implement block modules in the app.
3. Implement ContentIsland fetch and rendering.

**Deliverables:**

- Block mapping by `_modelApiKey`.
- ContentIsland and below‑fold fetch.

**Validation:**

- First block SSR renders and remaining blocks render client‑side.

**Open questions / TBD:**

- None.

---
title: Solution — Content blocks and inline blocks
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-03-20
depends_on:
  - 01-discovery/02-content-blocks-and-rendering.md
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, content-blocks, rendering, full-ssr]
---

# Solution — Content blocks and inline blocks

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/02-content-blocks-and-rendering.md` (including **amendment 2026-03-20** — full SSR for all blocks).

**This doc focuses on:** the **solution approach** and delivery shape for block rendering.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/02-content-blocks-and-rendering.md` (scope, constraints, decisions).

**In scope here:** rendering approach, module mapping, and delivery plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- **All** content blocks for a page are server-rendered in the initial response (same `_modelApiKey` map for every block).
- Block mapping is deterministic via `_modelApiKey`.
- Pages are cache-friendly; no second client fetch for block HTML.

**Proposed approach:**

- Page or **`*-container`** loads the document from `@rotate/cms` once (blocks array already in the getter response).
- Map each block with a shared **Record** (or equivalent) `_modelApiKey` → Astro module; render in order on the server.

**System boundaries:**

- Blocks and inline blocks data live in `service-dato` (gql, models).
- Rendering happens in app modules, mapped by block type.

**Interfaces & data:**

- Block type discriminator is Dato `_modelApiKey`.
- No separate below-fold block API is required for v1.

**Alternatives considered:**

- **Client-deferred blocks (ContentIsland):** Explored in discovery; **cancelled for this phase** (2026-03-20). Rationale: modest content depth, ~99% cached responses, simpler ops and one code path. **May be revisited** only if product or metrics justify a second fetch/hydration pipeline.

**Non‑goals:**

- Changing Dato schema or introducing new block types outside current CMS.
- Implementing ContentIsland unless explicitly rescoped in a future ticket.

### References (exact)

**Informational (read before / during implementation):**

| What                           | Path or URL                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Discovery (scope, constraints) | `documentation/01-discovery/02-content-blocks-and-rendering.md`                                                 |
| Implementation tickets         | `documentation/03-implementation/03-tickets/f1-content-blocks-core-modules.md`, `f2-*`, `fb1-*`–`fb7-*` (F3 superseded — see ticket) |
| Astro (SSR / islands — optional future) | [Astro: Client-side Islands](https://docs.astro.build/en/guides/client-side-rendering/)                         |

**Planned locations (where to implement):**

| What                                            | Path                                                                                                                                                            |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block data (GQL, getters)                       | `packages/service-dato/src/gql/` (fragments e.g. blocks, inline-blocks), `packages/service-dato/src/handlers/` (page getter and per-type queries)               |
| App block modules (one per block type)          | `apps/website/src/components/modules/` (e.g. `MediaSingle.astro`, `CardSlider.astro`). Modules import core UI from `packages/ui`; website = logic binding only. |
| Block list render (server)                      | Page or `*-container`: iterate `blocks`, resolve component from map, pass props (no client fetch for block HTML).                                                |

### Code examples (contract to implement)

**Block mapping — implement in page or container.** Each block in the page content array has Dato `_modelApiKey` (e.g. `media_single`, `card_slider`). Map it to the component:

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

**Rendering rule:** **All** blocks server-rendered in order using the same map. No ContentIsland in the default architecture.

**Block data:** Implement block selection in service-dato GQL (fragments and page queries). Page getter returns blocks array; each item has `_modelApiKey`. Exact field list per block type is defined in implementation tickets.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Define block gql and models in `service-dato`.
2. Implement block modules in the app.
3. Wire page/container to **map and render the full blocks array** on the server.

**Deliverables:**

- Block mapping by `_modelApiKey`.
- Server-side rendering for the full block list per page.

**Validation:**

- Multi-block pages render complete HTML on first response; correct mapping for each `_modelApiKey`.

**Open questions / TBD:**

- Revisit client-deferred blocks only if a future initiative reopens F3 (superseded ticket) with new requirements.

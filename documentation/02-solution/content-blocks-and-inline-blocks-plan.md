---
title: Solution — Content blocks and inline blocks
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
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

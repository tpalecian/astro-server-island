---
title: Discovery — Content blocks and rendering
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [discovery, content-blocks, rendering, content-island]
---

# Discovery — Content blocks and rendering

## 1. Outcome & Business Value (why)

**Purpose:** Agree on how content blocks are rendered to balance performance and UX.

**Value:** Faster initial render, clearer separation of above/below‑fold content, and predictable module mapping.

**Success criteria:**
- First content block is server‑rendered.
- Remaining content loads via a client island.

## 2. Context & Scope (what/where)

**Current state:** 2022-site renders blocks server‑side; we want streaming for below‑fold content.

**In scope:** Rendering strategy, block mapping, and ContentIsland behavior.

**Out of scope:** Implementation details of each block module.

**Assumptions:**
- Blocks can be mapped by Dato `_modelApiKey`.

**Dependencies:** `02-solution/content-blocks-and-inline-blocks-plan.md`.

**Risks & mitigations:**
- Risk: performance regressions. Mitigation: server render first block only.

## 3. Solution Design (final decisions)

- **Viewport rule:** First content block above the fold (server). Remaining blocks below‑fold via ContentIsland.
- **ContentIsland:** Client island performs a separate fetch for below‑fold blocks.
- **Block mapping:** Use `_modelApiKey` to map blocks to modules (same as 2022-site).

**Alternatives considered:**
- Render all blocks server‑side. Rejected due to performance and streaming goals.

**Non‑goals:**
- Building new block types outside current CMS schema.

## 4. Delivery Plan (how)

- Document mapping and island behavior in the solution doc.
- Confirm any additional block types during implementation discovery.

**Open questions / TBD:**
- None.

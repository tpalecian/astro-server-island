---
title: Discovery — Content blocks and rendering
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs: []
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

## 3. Ideas, options & references

**Ideas / options explored:**

- Server-render all blocks vs. first block server + below-fold via client island (latter for performance and streaming).
- Block mapping by Dato `_modelApiKey` (same as 2022-site) vs. custom mapping (reuse existing key).

**References & further reading:**

- Astro islands and partial hydration; streaming / below-fold patterns.
- 2022-site block modules and `_modelApiKey` usage.

**Old code (2022-site) — current state / prior art:**

| What                         | Path (2022-site)                                                                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block components (Content)   | `2022-site/components/Content/` (e.g. `MediaCaption.vue`, `MediaCarousel.vue`, `TextHalf.vue`, `TextLead.vue`, `TextQuote.vue`, `CardSlider.vue`, `Stats.vue`)    |
| Inline block fragments (GQL) | `2022-site/gql/fragments/inline-blocks.gql.js` (e.g. `onTagRecord`, `onEmojiRecord`, `onWorkRecord`, `onThinkingRecord`, `onStudioRecord`, `onMegaHeadingRecord`) |
| Block fragments (GQL)        | `2022-site/gql/fragments/` (blocks used in page queries)                                                                                                          |

Use these paths when auditing how the 2022-site renders blocks; the new solution maps by `_modelApiKey` and uses first-block SSR + ContentIsland for below-fold.

**Key information:**

- Dato block types and `_modelApiKey` values; above/below-fold behaviour requirements.

---

For the exact approach, block mapping, and delivery → see `02-solution/content-blocks-and-inline-blocks-plan.md`.

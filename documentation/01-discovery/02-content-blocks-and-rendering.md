---
title: Discovery — Content blocks and rendering
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: []
related_docs: []
tags: [discovery, content-blocks, rendering, full-ssr]
---

# Discovery — Content blocks and rendering

## 1. Outcome & Business Value (why)

**Purpose:** Agree on how content blocks are rendered to balance performance and UX.

**Value:** Faster initial render, clearer separation of above/below‑fold content, and predictable module mapping.

**Success criteria:**

- **All** content blocks for a page are server‑rendered in the initial response.
- Block mapping by Dato `_modelApiKey` is deterministic.

**Amendment (2026-03-20):** Original discovery favoured **first block SSR + remaining blocks via a client island** for below‑fold streaming. **Implementation choice:** render **the full block list on the server** (one getter, one HTML response). Rationale: modest page size, aggressive edge caching, simpler architecture. A client **ContentIsland** (or equivalent) is **out of scope until explicitly reopened**; see `02-solution/content-blocks-and-inline-blocks-plan.md`.

## 2. Context & Scope (what/where)

**Current state:** 2022-site renders blocks server‑side; the new site matches that model (full SSR block list), without a separate below‑fold client fetch for v1.

**In scope:** Rendering strategy and block mapping (`_modelApiKey`).

**Out of scope:** Implementation details of each block module.

**Assumptions:**

- Blocks can be mapped by Dato `_modelApiKey`.

**Dependencies:** `02-solution/content-blocks-and-inline-blocks-plan.md`.

**Risks & mitigations:**

- Risk: large HTML payload. Mitigation: modest content set + CDN/cache; revisit deferred loading only if metrics require it.

## 3. Ideas, options & references

**Ideas / options explored:**

- Server-render all blocks vs. first block server + below-fold via client island (island path **not** pursued for v1; see amendment above).
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

Use these paths when auditing how the 2022-site renders blocks; the new solution maps by `_modelApiKey` and server-renders **all** blocks (see amendment).

**Key information:**

- Dato block types and `_modelApiKey` values; full SSR block list for v1.

---

For the exact approach, block mapping, and delivery → see `02-solution/content-blocks-and-inline-blocks-plan.md`.

---
title: Ticket F2 — content blocks structured text
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-21
depends_on: [CMS getters + exports, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket F2 — content blocks structured text

---

## Description, Value & ACs

**Scope:** Structured text with inline and link-to-record renderers. Map inline record types (Tag, Emoji, Work, Thinking, Studio, MegaHeading) to components. Use `@datocms/astro` `StructuredText` (equivalent to legacy `@datocms/structured-text` stack). Data from GQL `value` + `links`. No block-level page rendering here (F1 containers for blocks); inline/link only inside structured text. No data fetching inside inline/link components; href resolution uses pure helpers. **Implementation paths:** `apps/website/src/components/structured-text/` (not `components/modules/`), per website architecture.

**Outcome:** Structured text renders with inline blocks correctly mapped.

**Value:** Rich text with custom inline blocks (tags, emoji, work, thinking, studio, mega heading).

**Acceptance criteria:**

| #   | Criterion                                                              | Done |
| --- | ---------------------------------------------------------------------- | ---- |
| AC1 | Structured text renders; inline blocks use correct component per type. | Yes  |
| AC2 | No data fetching inside inline components; props only.                 | Yes  |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; core content block modules.  
**Unblocks:** Inline block modules (Tag, Emoji, Work, Thinking, Studio, MegaHeading).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render page with structured text + inline blocks; compare to 2022-site behaviour.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

**Implementation / completion (2026-03-21):** `cms-structured-text.astro` wraps `@datocms/astro` `StructuredText` with default inline/link component maps (`structured-text/inline/*`, `structured-text/link/*`). Helpers: `normalizeStructuredTextLinks`, `buildHrefForStructuredTextRecord` (+ `link-to-site-href` for Emoji links), exported from `apps/website/src/lib/dato/index.ts`. Wired from blocks that expose structured text (e.g. quote, text_lead, text_half). GQL inline record fragments updated in `packages/service-dato` (`inline-blocks.gql.ts`) for `__typename` and article `category.slug` where needed.

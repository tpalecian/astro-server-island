---
title: Ticket F2 — content blocks structured text
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket F2 — content blocks structured text

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/components/modules/` (StructuredText inline renderers). Implement structured text rendering with inline block support. Map inline record types (Tag, Emoji, Work, Thinking, Studio, MegaHeading) to components. Use @datocms/structured-text or equivalent; custom renderers for inline blocks. Data: structured text field from GQL; inline blocks have \_modelApiKey (e.g. TagRecord, EmojiRecord). No block-level rendering (core blocks or ContentIsland); inline only within structured text. No data fetching inside inline components; props only.

**Outcome:** Structured text renders with inline blocks correctly mapped.

**Value:** Rich text with custom inline blocks (tags, emoji, work, thinking, studio, mega heading).

**Acceptance criteria:**

| #   | Criterion                                                              | Done |
| --- | ---------------------------------------------------------------------- | ---- |
| AC1 | Structured text renders; inline blocks use correct component per type. |      |
| AC2 | No data fetching inside inline components; props only.                 |      |

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

Steps: (1) Wire structured text renderer; support inline blocks. (2) Map inline record types to small components (or shared renderer).

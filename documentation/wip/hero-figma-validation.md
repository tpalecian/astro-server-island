---
title: Hero Figma Validation
phase: implementation
status: draft
last_updated: 2025-03-19
tags: [hero, figma, validation, design-system]
---

**Figma source:** [Rotate-Library-WebsiteModules — Hero](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=15-116)

## Summary

| Area                             | Status | Notes                                                                                                                                                                                                                                        |
| -------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop headline size            | ✅     | `title-style1-hero-desktop` → size-1400 (128px), line-height 1.1, tracking title-style1/1000                                                                                                                                                 |
| Mobile headline size             | ✅     | `title-style1-900` → size-1200 (64px)                                                                                                                                                                                                        |
| Mobile tracking vs Figma export  | ⚠️     | Figma MCP pairs 64px copy with `letter-spacing/title-style1/800` (-0.96px); tokens use `title-style1-900` with -1.92px — align with design-system table if design confirms                                                                   |
| Vertical rhythm (headline ↔ CTA) | ⚠️     | Figma: in-flow `flex-col` + gap dimension-700 (80px) desktop / 500 (48px) mobile. Code: flex gap matches, but CTA uses `absolute bottom-0` inside `min-h-[50vh]` + `justify-center` — different vertical composition from strict Figma stack |
| Action link (ActionText)         | ✅     | `title-style1-200` + `link link-underline` → 14px, line-height 1.2, matches action-style1/200                                                                                                                                                |
| eCommerce row                    | ✅     | Mobile: “eC” + media + “m”; desktop adds “merce” — matches pattern                                                                                                                                                                           |
| Row gaps                         | ✅     | `gap-75` = 4px (Figma mobile dimension-75); `tablet:gap-100` = 8px (Figma desktop dimension-100)                                                                                                                                             |
| Section padding / spacers        | ✅     | `pt-800`/`pb-800` (96px) mobile; `tablet:pt-1000`/`pb-1000` (160px) — matches Figma spacer frames                                                                                                                                            |
| Inline media                     | ⚠️     | Figma uses fixed frame sizes (e.g. 94×144 desktop); implementation uses `em`-scaled square — intentional fluid behaviour; verify art direction                                                                                               |

---

## 1. Typography mapping

- **Desktop hero title:** Figma `size/size-1400` + `line-height: 1.1` + latin title-style1/1000 tracking → `title-style1-hero-desktop`.
- **Mobile hero title:** Figma `size/size-1200` (64px) → `title-style1-900` in code (line-height 1.2 in token vs Figma 1.1 on mock — minor).
- **CTA:** Figma `size/size-500` (14px) + title-style1/200 tracking → `title-style1-200` ✅

---

## 2. Layout & motion

- Word-cycle / 3D letter treatment is a documented port from legacy Vue; not fully specified in static Figma output — behaviour OK if motion matches product sign-off.
- `prefers-reduced-motion` handling is present in `hero.astro` styles ✅

---

## 3. Open follow-ups

1. Decide whether CTA should stay absolutely positioned at the bottom of the hero shell or move to normal flex flow for 1:1 Figma vertical spacing.
2. Confirm mobile tracking: Figma export vs `title-style1-900` token.
3. If hamburger/menu icons in header move to exported SVGs, consider the same discipline for any hero-specific vectors (project rule: prefer Figma assets over hand-drawn paths).

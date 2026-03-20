---
title: Header — Figma & design-system validation
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-03-20
related_docs:
  - documentation/03-implementation/03-tickets/c-layout-shell.md
tags: [header, figma, validation, design-system]
---

# Header — Figma & design-system validation

**Figma:** [Rotate-Library-WebsiteModules — NavigationHeader `15:88`](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=15-88)

**Implementation:**

| Layer | Path |
| ----- | ---- |
| UI | `packages/ui/src/header.astro` |
| Container | `apps/website/src/components/header-container/index.astro` |
| CMS → props | `apps/website/src/components/header-container/format-header-nav.ts` |
| Site href helper | `apps/website/src/lib/build-site-href-from-dato-link.ts` |
| Layout wiring | `apps/website/src/layouts/base-layout.astro` (`HeaderContainer`, `style`) |

**Signed off:** 2026-03-20 — implementation matches design-system and agreed Figma parity; optional follow-ups remain in §10. Move this file out of `documentation/wip` when you consolidate approved validation reports with the footer doc.

---

## Summary

| Area | Status | Notes |
| ---- | ------ | ----- |
| Layout structure | ✅ | Logo left, nav right; responsive |
| Dimensions | ✅ | `h-700` (80px) mobile, `tablet:h-1000` (160px) tablet+ |
| Padding | ✅ | `px-[var(--grid-default-margin)]` — 21px mobile, 80px desktop |
| Logo variants | ✅ | Full vs compact via `compactLogo`; `AnimatedLogo` scroll behaviour |
| Style variants | ✅ | `default` (bar background) vs `overlay` (transparent) |
| Desktop nav | ✅ | Primary pill + circular info control (~48×48) |
| Mobile nav | ✅ | Hamburger 20×20 (tokens + `class="icon"`); pill + icon hidden |
| Link resolution | ✅ | `buildSiteHrefFromDatoLink` for pill and circle links |
| Design-system | ✅ | Semantic colors, spacing, `tablet:` only, `btn` / `icon` patterns |

---

## Final validation (2026-03-20)

| Gate | Result | Evidence |
| ---- | ------ | -------- |
| Ticket C — container + CMS | ✅ | `getNavigationHeader` → `formatHeaderNav` → props only into `Header` |
| Ticket C — no CMS in UI | ✅ | `header.astro` has no `@rotate/cms` |
| Ticket C — design tokens | ✅ | Semantic colors, spacing, grid margin, typography, button/icon CSS |
| Breakpoints | ✅ | Only `tablet:` (768px); no `md:` / `lg:` |
| Figma heights / padding | ✅ | `h-700` / `tablet:h-1000`, `px-[var(--grid-default-margin)]` |
| Desktop 48×48 info control | ✅ | `btn-icon-padded` + 16px glyph (`data-icon-size="100"`) → ~48×48 |
| Mobile 20×20 menu control | ✅ | `data-icon-size="200"` + `size-[var(--icon-dimension-width)]` + SVG `class="icon"` |

**Residuals (not blockers):**

1. **Nav cluster gap** — Code uses `gap-300` (24px); some Figma exports show **0** between pill and icon. Confirm with design.
2. **Assets** — Inline SVGs for “i” and hamburger vs Figma exports; swap if pixel parity is required.
3. **`href: '#'`** — `format-header-nav.ts` uses `#` when circle UI exists but URL cannot be resolved; revisit with mobile menu / CMS rules.

These are **optional** polish items; they do not revoke approval of the current implementation.

---

## 1. Layout & structure

**Figma:** Logo left; desktop — primary pill + circular icon right; mobile — hamburger only.

**Code:** `flex` + `justify-between`, logo in `shrink-0`, `<nav class="… gap-300">`. Pill and icon: `tablet:inline-flex hidden`. Hamburger: `tablet:hidden`.

---

## 2. Dimensions

| Breakpoint | Figma | Implementation | Token |
| ---------- | ----- | -------------- | ----- |
| Mobile | 80px | `h-700` | `--spacing-700` |
| Tablet+ | 160px | `tablet:h-1000` | `--spacing-1000` |

---

## 3. Padding

Figma: grid margin 21px mobile / 80px desktop.

Code: `px-[var(--grid-default-margin)]` ✅

---

## 4. Logo variants

| Variant | Figma | Code |
| ------- | ----- | ---- |
| Full | Rotate° (R + OTATE) | `AnimatedLogo compact={false}` |
| Compact | R° | `AnimatedLogo compact={true}` |

Scroll-driven full → compact (when `compact={false}`) is an enhancement beyond static Figma frames ✅

---

## 5. Style variants

| Style | Figma | Code |
| ----- | ----- | ---- |
| `default` | Solid bar | `bg-background-default-primary-lightest` |
| `overlay` | Transparent | No background class on `<header>` |

---

## 6. Desktop nav elements

- **Pill:** `btn btn-primary btn-size-100 title-style1-200 btn-press` — ActionButton-style primary, size-100 ✅
- **Info control:** `btn btn-primary btn-icon btn-icon-padded` — outer **~48×48** (16px icon + `padding: var(--spacing-200)` per side) ✅
- **Icon:** `data-icon-size="100"` on anchor; SVG `class="icon"` ✅

---

## 7. Mobile nav — hamburger

Three bars, **20×20** control: button `data-icon-size="200"`, `size-[var(--icon-dimension-width)]`, inner SVG `class="icon"` + three `rect` elements ✅

---

## 8. Mobile header — detail

**Figma nodes:** `15:97` (default), `73:541` (overlay)

| Element | Figma | Code | Status |
| ------- | ----- | ---- | ------ |
| Container | `h-700`, grid margin | Same | ✅ |
| Logo | ~20px height, full wordmark width | `AnimatedLogo` responsive (see below) | ✅ |
| Hamburger | 20×20 right | Token control + `class="icon"`, `tablet:hidden` | ✅ |
| Primary pill | Hidden | `tablet:inline-flex hidden` | ✅ |
| Icon button | Hidden | `tablet:inline-flex hidden` | ✅ |

**Logo (mobile):** Figma ~20px × 84px full logo. Code: 20px height below 768px (R 14×20, OTATE 58×20); 26px height tablet+ ✅

**Hamburger:** `text-content-default-primary`, `fill="currentColor"` on SVG ✅

**Menu toggle:** `data-header-menu-toggle`, `aria-label="Open menu"`, `aria-expanded="false"` ✅

---

## 9. Link resolution

`format-header-nav.ts` resolves **`pillButtonLink`** and **`circleButtonLink`** with `buildSiteHrefFromDatoLink` (same pattern as footer / hero). Record-based links map to site hrefs when the helper supports the shape.

**Edge case:** `iconLink` is still emitted when `circleButtonIcon` exists without a resolvable `circleButtonLink` → `href: '#'` until menu behaviour is defined (see Residuals).

---

## 10. Figma MCP / export parity & follow-ups

**Last checked:** `get_design_context` on node `15:88` (file `AoKFGaJDETjoU1TRLSufQv`). Code Connect optional (`disableCodeConnect: true` for token-only pulls).

**Aligned with export:**

- `dimension-700` / `dimension-1000` bar heights + grid margin
- Default vs overlay backgrounds
- 48×48 desktop circular control + 20×20 mobile menu control (via tokens)

**Follow-ups:**

1. **Nav gap** — Export sometimes `gap` 0; implementation `gap-300`. Design confirmation.
2. **Pill + icon together** — Library frames may emphasise logo + icon only; CMS can show **pill + icon** — confirm combined layout in Figma when both exist.
3. **Assets** — Prefer Figma-exported SVGs over hand paths where parity matters.
4. **Code Connect** — Map components when you want design-to-code bindings in MCP output.

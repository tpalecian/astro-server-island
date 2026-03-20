---
title: Workstream C — layout shell (Header, Footer, Navigation)
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: []
related_docs:
  - 01-discovery/migration-map.md
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 03-implementation/vue-to-astro-migration.md
tags: [implementation, workstream, app-shell, layout, header, footer, navigation]
---

# Workstream C — layout shell (Header, Footer, Navigation)

**Ticket:** `03-tickets/c-layout-shell.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Implement the layout shell: Header (with nav links, pill button, circle button), Footer (with CTA, footer links, social links), and related subcomponents; **`*-container`** components fetch `getNavigationHeader` and `getNavigationFooter` from `@rotate/cms`; `packages/ui` receives props only; wire into base-layout.astro.
- **Exact file name(s) and paths:** Core UI (Header, Footer, NavLink, Button, etc.) in `packages/ui/`, grouped by domain. Website: `apps/website/src/components/header-container/index.astro` and `footer-container/index.astro` — containers fetch and pass to `packages/ui`. Edit `apps/website/src/layouts/base-layout.astro` to compose Header + slot + Footer. Website `components/` = **`*-container`** folders (+ optional thin wrappers); core UI = `packages/ui`.
- **Exact props/API/types:** Header: props from `NavigationHeaderQuery['navigation']` (pillButtonLink, circleButtonIcon, circleButtonLink). Footer: props from `NavigationFooterQuery['navigation']` (ctaCopy, ctaLink, footerNavigationLinks, socialLinks). Containers call `getNavigationHeader(options)` and `getNavigationFooter(options)`; pass typed result to `packages/ui`.
- **Exact mapping/key:** Layout composes: Header (top) → slot (page content) → Footer (bottom). Navigation data from `getNavigationHeader` / `getNavigationFooter` from `@rotate/cms`.
- **Legacy/reference behaviour:** 2022-site layout and homepage pattern; Header, Footer, nav from `2022-site/components/` or layout.

## 1. Allowed paths

- `apps/website/src/components/` (containers only — fetch and pass to packages/ui)
- `apps/website/src/layouts/base-layout.astro`
- `packages/ui/` (core UI: NavLink, Button, etc. — all primitives live here, grouped by domain)

## 2. Blocking dependencies

- A4 (getNavigationHeader, getNavigationFooter exported from @rotate/cms).

## 3. Unblocks

- B (homepage can use layout with Header/Footer); E (dynamic routes use same layout); all page-level work.

## 4. Contract / API

- **header-container:** Fetches `getNavigationHeader({ token })`; passes to Header in `packages/ui`.
- **Header** (packages/ui): Props: `NavigationHeaderQuery['navigation']` | null. Renders pill button, circle button, nav links.
- **footer-container:** Fetches `getNavigationFooter({ token })`; passes to Footer in `packages/ui`.
- **Footer** (packages/ui): Props: `NavigationFooterQuery['navigation']` | null. Renders CTA, footer nav links, social links.
- **BaseLayout:** Composes LayoutShell (Header + Footer) or Header + slot + Footer directly. Token from `import.meta.env.DATOCMS_API_KEY`.

## 5. Data source & shape

- `getNavigationHeader(options)` from @rotate/cms; return type `NavigationHeaderQuery['navigation']`. Fields: pillButtonLink (text, url, record), circleButtonIcon, circleButtonLink.
- `getNavigationFooter(options)` from @rotate/cms; return type `NavigationFooterQuery['navigation']`. Fields: ctaCopy, ctaLink, footerNavigationLinks[], socialLinks[].

## 6. Out of scope / Don't do

- No CMS/fetch in `packages/ui` (props only). No ContentIsland or below-fold logic. No tracking or cookie banner (I). Mobile menu / hamburger behaviour is in scope only if required for minimal layout; prefer CSS-first.

## 7. Steps (ordered)

1. Create `header-container/index.astro` — fetch getNavigationHeader; pass to Header.
2. Create `header.astro` in `packages/ui` — props only; compose Button from `packages/ui`.
3. ~~Create `footer-container/index.astro`~~ — **done** (see §7a).
4. ~~Create `footer.astro` in `packages/ui`~~ — **done** (see §7a).
5. Edit base-layout.astro — compose Header + slot + Footer. Ensure token passed to containers.
6. Validate: Header and Footer render with navigation data; layout wraps all pages.

### 7a. Footer — complete (signed off 2026-03-19)

**Status:** Done. Implementation and layout match agreed Figma refs (`documentation/wip/footer-figma-validation.md`); no further footer work required for this workstream unless design changes.

**Delivered paths:**

- `packages/ui/src/footer.astro`
- `apps/website/src/components/footer-container/index.astro`
- `apps/website/src/components/footer-container/format-footer-nav.ts`

**Remaining for workstream C:** Header steps (1–2), base-layout wiring (5–6), and joint acceptance criteria once Header is ready.

## 8. Done criteria

- Layout shell (Header, Footer) renders with data from getNavigationHeader and getNavigationFooter; base-layout composes them; no fetch in modules.
- **Design:** Figma links added for each component; implementation matches design (1:1 parity).

## 9. Acceptance criteria

| #   | Criterion                                                                                                                                                                                    |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC1 | HeaderContainer and FooterContainer fetch from @rotate/cms; pass props to modules.                                                                                                           |
| AC2 | Header and Footer modules receive props only; no CMS imports.                                                                                                                                |
| AC3 | BaseLayout composes Header + slot + Footer.                                                                                                                                                  |
| AC4 | Core UI (NavLink, Button, etc.) in packages/ui; Header/Footer modules import from packages/ui.                                                                                               |
| AC5 | Figma links documented for Header, Footer (incl. CTA ref), nav `link` / Action Default, Button, ButtonTitle; implementation matches design except agreed deviations (see footer validation). |

## 10. Validation

- `pnpm dev`, open `/` — Header and Footer render with navigation data. Layout wraps page content.

## 11. Solution / discovery links

- Migration: `documentation/03-implementation/vue-to-astro-migration.md` (Layout and shell phase)
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)

- `2022-site/components/` — Header, Footer, nav; layout components. Reference for structure and behaviour.

## 13. Design & Figma

Source of truth for parity checks: the links below (same references as `documentation/wip/header-figma-validation.md` and `documentation/wip/footer-figma-validation.md` where applicable). Use Figma MCP: fetch all component variables; ask for SVGs from Figma, never recreate.

| Component                          | Path / notes                                                                                    | Figma                                                                                                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header (`NavigationHeader`)        | `packages/ui/src/header.astro`                                                                  | [Rotate-Library-WebsiteModules — node 15:88](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=15-88&m=dev)            |
| Footer (main shell)                | `packages/ui/src/footer.astro`                                                                  | [Rotate-Library-WebsiteModules — node 48:754](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=48-754&m=dev)          |
| Footer CTA block                   | Composed inside footer; tokens + buttons                                                        | [node 59:1383](https://www.figma.com/design/DWfUHaVMjp8pMg4Dhj5lgb?node-id=59-1383&m=dev) (separate file — see footer validation doc for mobile layout caveat) |
| Nav text links (`link` utility)    | Header/footer secondary links; `packages/design-system/src/components/link.css`                 | [Action Default — node 4246:184](https://www.figma.com/design/FlWyqUG6r50kdIZjUQ160i?node-id=4246-184&m=dev)                                                   |
| Button (ActionButton, pill / icon) | `packages/design-system/src/components/button.css`; composed in `header.astro` / `footer.astro` | [ActionButton — node 27:151](https://www.figma.com/design/bvW6ZFFpRxTRrEH3sFMlF5/Rotate-Library-WebsiteComponents?node-id=27-151&m=dev)                        |
| ButtonTitle (label typography)     | `packages/design-system/src/components/button.css`                                              | [ButtonTitle — node 27:94](https://www.figma.com/design/bvW6ZFFpRxTRrEH3sFMlF5/Rotate-Library-WebsiteComponents?node-id=27-94&m=dev)                           |

**Before sign-off:** Run `get_design_context` and `get_screenshot` on the nodes above; confirm implementation matches design except where explicitly documented otherwise (e.g. footer mobile column layout in `documentation/wip/footer-figma-validation.md`).

### Header design spec (from Figma node 15-88)

**NavigationHeader variants:**

- `device`: desktop | mobile
- `layout`: default (full logo) | shortened (abbreviated R°)
- `style`: default (dark bg) | overlay (transparent over content)

**Dimensions:**
| Breakpoint | Height | Padding-x |
|------------|--------|-----------|
| Desktop | 160px (`--dimension-1000`) | 80px (`--grid/default/margin`) |
| Mobile | 80px (`--dimension-700`) | 21px (`--grid/default/margin`) |

**Layout:**

- **Left:** Logo — full "Rotate°" (default) or abbreviated "R°" (shortened)
- **Right (desktop):** Circular button (48×48px, white bg, black text) — info icon or pill link from CMS
- **Right (mobile):** Hamburger menu icon (20×20px)

**Colors:**

- Default: `--color-background-default-primary-lightest` (black)
- Overlay: transparent
- Circle button: `--color-background-action-primary` (white), `--color-content-action-primary` (#131313)

**Assets (from Figma MCP):** Logo full, Logo short, Hamburger icon — fetch via Figma MCP; do not recreate.

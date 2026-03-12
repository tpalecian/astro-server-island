---
title: Workstream C — layout shell (Header, Footer, Navigation)
phase: implementation
status: draft
owner: solutions-engineering
last_updated: 2026-03-12
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

- **Approach (one sentence):** Implement the layout shell: Header (with nav links, pill button, circle button), Footer (with CTA, footer links, social links), and related subcomponents; containers fetch `getNavigationHeader` and `getNavigationFooter` from `@rotate/cms`; modules receive props only; wire into BaseLayout.astro.
- **Exact file name(s) and paths:** Core UI (NavLink, PillButton, CircleButton, etc.) in `packages/ui/`, grouped by domain. Website: `Header.container.astro`, `Header.astro`, `Footer.container.astro`, `Footer.astro` in `apps/website/src/components/` — these compose from `packages/ui`. Edit `apps/website/src/layouts/BaseLayout.astro` to compose Header + slot + Footer. Website = logic binding only; core UI = `packages/ui`.
- **Exact props/API/types:** Header: props from `NavigationHeaderQuery['navigation']` (pillButtonLink, circleButtonIcon, circleButtonLink). Footer: props from `NavigationFooterQuery['navigation']` (ctaCopy, ctaLink, footerNavigationLinks, socialLinks). Containers call `getNavigationHeader(options)` and `getNavigationFooter(options)`; pass typed result to modules.
- **Exact mapping/key:** Layout composes: Header (top) → slot (page content) → Footer (bottom). Navigation data from `getNavigationHeader` / `getNavigationFooter` from `@rotate/cms`.
- **Legacy/reference behaviour:** 2022-site layout and homepage pattern; Header, Footer, nav from `2022-site/components/` or layout.

## 1. Allowed paths
- `apps/website/src/components/` (Header, Footer, containers — logic binding only)
- `apps/website/src/layouts/BaseLayout.astro`
- `packages/ui/` (core UI: NavLink, PillButton, CircleButton, etc. — all primitives live here, grouped by domain)

## 2. Blocking dependencies
- A4 (getNavigationHeader, getNavigationFooter exported from @rotate/cms).

## 3. Unblocks
- B (homepage can use layout with Header/Footer); E (dynamic routes use same layout); all page-level work.

## 4. Contract / API
- **HeaderContainer:** Fetches `getNavigationHeader({ token })`; passes to Header module.
- **Header:** Props: `NavigationHeaderQuery['navigation']` | null. Renders pill button, circle button, nav links.
- **FooterContainer:** Fetches `getNavigationFooter({ token })`; passes to Footer module.
- **Footer:** Props: `NavigationFooterQuery['navigation']` | null. Renders CTA, footer nav links, social links.
- **BaseLayout:** Composes LayoutShell (Header + Footer) or Header + slot + Footer directly. Token from `import.meta.env.DATOCMS_API_KEY`.

## 5. Data source & shape
- `getNavigationHeader(options)` from @rotate/cms; return type `NavigationHeaderQuery['navigation']`. Fields: pillButtonLink (text, url, record), circleButtonIcon, circleButtonLink.
- `getNavigationFooter(options)` from @rotate/cms; return type `NavigationFooterQuery['navigation']`. Fields: ctaCopy, ctaLink, footerNavigationLinks[], socialLinks[].

## 6. Out of scope / Don't do
- No CMS/fetch in modules. No ContentIsland or below-fold logic. No tracking or cookie banner (I). Mobile menu / hamburger behaviour is in scope only if required for minimal layout; prefer CSS-first.

## 7. Steps (ordered)
1. Create Header.container.astro — fetch getNavigationHeader; pass to Header.
2. Create Header.astro — props only; compose NavLink, PillButton, CircleButton from `packages/ui`. Add any missing primitives to `packages/ui` (grouped by domain).
3. Create Footer.container.astro — fetch getNavigationFooter; pass to Footer.
4. Create Footer.astro — props only; compose from `packages/ui` (e.g. NavLink, Button); render CTA, footer links, social links.
5. Edit BaseLayout.astro — compose Header + slot + Footer. Ensure token passed to containers.
6. Validate: Header and Footer render with navigation data; layout wraps all pages.

## 8. Done criteria
- Layout shell (Header, Footer) renders with data from getNavigationHeader and getNavigationFooter; BaseLayout composes them; no fetch in modules.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | HeaderContainer and FooterContainer fetch from @rotate/cms; pass props to modules. |
| AC2 | Header and Footer modules receive props only; no CMS imports. |
| AC3 | BaseLayout composes Header + slot + Footer. |
| AC4 | Core UI (NavLink, Button, etc.) in packages/ui; Header/Footer modules import from packages/ui. |

## 10. Validation
- `pnpm dev`, open `/` — Header and Footer render with navigation data. Layout wraps page content.

## 11. Solution / discovery links
- Migration: `documentation/03-implementation/vue-to-astro-migration.md` (Layout and shell phase)
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)
- `2022-site/components/` — Header, Footer, nav; layout components. Reference for structure and behaviour.

---
title: Ticket C — layout shell (Header, Footer, Navigation)
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: [CMS getters + exports]
tags: [implementation, ticket, app-shell, layout]
---

# Ticket C — layout shell (Header, Footer, Navigation)

---

## Description, Value & ACs

**Scope:** Implement the layout shell: Header (nav links, pill button, circle button) and Footer (CTA, footer links, social links) with their containers. Core UI (NavLink, Button with pill/circle variants, etc.) in `packages/ui`; Header/Footer modules in website import from `packages/ui` and bind props from containers. Wire Header + Footer into base-layout.astro. Website = logic binding only.

**Outcome:** Layout shell renders with navigation data; all pages use Header + slot + Footer. Containers fetch; modules render props only.

**Value:** Establishes the app shell (Header, Footer) used by all routes; completes the layout phase from migration.

**Acceptance criteria:**

| #   | Criterion                                                                             | Done                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| AC1 | HeaderContainer and FooterContainer fetch from @rotate/cms; pass props to modules.    | ✅                                                                                                                                   |
| AC2 | Header and Footer modules receive props only; no CMS imports.                         | ✅                                                                                                                                   |
| AC3 | BaseLayout composes Header + slot + Footer.                                           | ✅                                                                                                                                   |
| AC4 | Core UI in packages/ui; Header/Footer modules import from packages/ui.                | ✅ (`header.astro` / `footer.astro` — primitives from design-system utilities)                                                       |
| AC5 | Figma links added for each component; designs updated; implementation matches design. | ✅ Footer (`documentation/wip/footer-figma-validation.md`). ✅ Header (`documentation/wip/header-figma-validation.md`). |

**Completed (2026-03-20):** All ACs met; header and footer signed off (validation docs approved). Workstream `02-workstreams/05b-c-layout-shell.md` marked completed.

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports (getNavigationHeader, getNavigationFooter from @rotate/cms).  
**Unblocks:** Homepage (B) can use full layout; dynamic routes (E); all page-level work.

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Run `pnpm dev`, open `/` — Header and Footer render with navigation data. Layout wraps page content.

---

## Design & References

Figma sources (aligned with workstream `02-workstreams/05b-c-layout-shell.md` and `documentation/wip/*-figma-validation.md`):

| Component                                | Figma                                                                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Header (`15:88`)                         | [WebsiteModules](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=15-88&m=dev)   |
| Footer main (`48:754`)                   | [WebsiteModules](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=48-754&m=dev)  |
| Footer CTA (`59:1383`)                   | [Separate file](https://www.figma.com/design/DWfUHaVMjp8pMg4Dhj5lgb?node-id=59-1383&m=dev)                                |
| Nav `link` / Action Default (`4246:184`) | [Action Default](https://www.figma.com/design/FlWyqUG6r50kdIZjUQ160i?node-id=4246-184&m=dev)                              |
| Button (`27:151`)                        | [ActionButton](https://www.figma.com/design/bvW6ZFFpRxTRrEH3sFMlF5/Rotate-Library-WebsiteComponents?node-id=27-151&m=dev) |
| ButtonTitle (`27:94`)                    | [ButtonTitle](https://www.figma.com/design/bvW6ZFFpRxTRrEH3sFMlF5/Rotate-Library-WebsiteComponents?node-id=27-94&m=dev)   |

Use Figma MCP: fetch variables and assets. Match design except documented deviations (e.g. footer mobile layout — see `documentation/wip/footer-figma-validation.md`).

**Header design spec (Figma node 15-88):** device (desktop|mobile), layout (default|shortened), style (default|overlay). Desktop: h-160px, px-80px; Mobile: h-80px, px-21px. Left: Logo (full or R°). Right: desktop = 48×48 circle button (white); mobile = 20×20 hamburger. Default bg: black; overlay: transparent.

---

## Notes

**Implementation (completed):** `header-container` / `footer-container` under `apps/website/src/components/`; `packages/ui/header.astro` and `footer.astro`; `base-layout.astro` composes Header + slot + Footer; navigation via `getNavigationHeader` / `getNavigationFooter` from `@rotate/cms`. Figma validation: `documentation/wip/header-figma-validation.md`, `documentation/wip/footer-figma-validation.md`.

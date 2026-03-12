---
title: Ticket C — layout shell (Header, Footer, Navigation)
phase: implementation
status: draft
owner: solutions-engineering
last_updated: 2026-03-12
depends_on: [CMS getters + exports]
tags: [implementation, ticket, app-shell, layout]
---

# Ticket C — layout shell (Header, Footer, Navigation)

---

## Description, Value & ACs

**Scope:** Implement the layout shell: Header (nav links, pill button, circle button) and Footer (CTA, footer links, social links) with their containers. Core UI (NavLink, PillButton, CircleButton, etc.) in `packages/ui`; Header/Footer modules in website import from `packages/ui` and bind props from containers. Wire Header + Footer into BaseLayout.astro. Website = logic binding only.

**Outcome:** Layout shell renders with navigation data; all pages use Header + slot + Footer. Containers fetch; modules render props only.

**Value:** Establishes the app shell (Header, Footer) used by all routes; completes the layout phase from migration.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | HeaderContainer and FooterContainer fetch from @rotate/cms; pass props to modules. | |
| AC2 | Header and Footer modules receive props only; no CMS imports. | |
| AC3 | BaseLayout composes Header + slot + Footer. | |
| AC4 | Core UI in packages/ui; Header/Footer modules import from packages/ui. | |

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

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Add core UI (NavLink, PillButton, CircleButton) to packages/ui. (2) Create Header.container.astro + Header.astro; Footer.container.astro + Footer.astro — modules import from packages/ui. (3) Edit BaseLayout.astro to compose Header + slot + Footer.

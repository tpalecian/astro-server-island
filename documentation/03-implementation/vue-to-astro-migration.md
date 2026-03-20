---
title: Implementation — Vue to Astro migration
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/00-index.md
  - 02-solution/00-index.md
related_docs:
  - 03-implementation/00-index.md
tags: [implementation, migration]
---

# Vue to Astro + design-system migration

**Separate plan.** Do not merge with the CMS service pattern plan ([02-solution/cms-service-pattern-and-dato-centralisation.md](../02-solution/cms-service-pattern-and-dato-centralisation.md)). This doc covers only the phased migration of 2022-site to Astro (routes, components, design-system). CMS/data access follows the other plan.

**Status:** Active (Implementation).  
**Format:** SEL (Outcome → Context → Solution Design → Delivery Plan). See [.cursor/rules/planning.mdc](../../.cursor/rules/planning.mdc).

---

## Summary (leadership)

- **Purpose:** Migrate the existing Nuxt 2 site (2022-site) into the Astro app and shared packages so we run one stack, reuse the design-system and service-dato, and retire the Vue app.
- **Key decisions:**
  - Migration is phased: discovery/audit → layout/shell → homepage → static/list → dynamic routes → islands → redirects/SEO.
  - Data lives in **`*-container`** folders only; presentation in `packages/ui` (and thin website wrappers). All CMS access via `@rotate/cms` (alias to service-dato); no inline fetch in presentational components.
  - Styling aligns with `@rotate/design-system`; extend tokens only when the Vue design requires something new.
  - Client JS only where justified; prefer CSS-first and server-rendered content.
- **Impact & risks:** One codebase and one deploy; risk of regressions or missing routes — mitigated by a migration map, phased rollout, and visual/regression checks before cutover.

---

## Context (holistic)

- **In scope:** 2022-site routes, components, Vuex → Astro pages, `*-container` + `packages/ui`, service-dato; design-system token alignment; static generation and optional redirects/SEO.
- **Out of scope:** Rewriting product strategy; changing Dato schema or content workflows; new features not present in the Vue site.
- **Dependencies:** DatoCMS (unchanged); design-system and service-dato packages; architecture rule set (`*-container` / `packages/ui`, no data in presentational UI).
- **Assumptions:** 2022-site remains the source of truth for behaviour and content until cutover; Astro app can adopt the same env (DATO_API_KEY, etc.).

---

## Technical / execution (actionable)

### Source: 2022-site (Nuxt 2)

The Vue app lives at **2022-site/** (repo root). Nuxt 2, `target: 'static'`, DatoCMS, Vuex.

- **Routes:** `pages/index.vue` → `/`; `pages/info.vue` → `/info`; `pages/_category/index.vue` → `/[category]`; `pages/_category/_slug.vue` → `/[category]/[slug]`; `pages/styleguide/*.vue` → `/styleguide`. Dynamic route list from Dato: `2022-site/services/routes.js`.
- **Store:** Vuex (`store/index.js`, categories, filter, globalConfig). Migrate to server + `packages/service-dato`.
- **CMS:** Dato via `clients/datocms.js`, `gql/`, `models/` → `packages/service-dato`.
- **Layouts:** `layouts/default.vue`, `layouts/error.vue`.
- **Components:** Core (Footer, Header) → ui/; Hero, Content, Card, Filter → containers + modules; primitives → ui/ or design-system tokens.
- **Styling:** Tailwind 3, `assets/css/`. Align with `packages/design-system`.

### 1. Discovery: audit 2022-site

- **Routes:** Map each Nuxt route to `apps/website/src/pages/`: e.g. `index.astro`, `info.astro` or `[slug].astro`, `[category]/index.astro`, `[category]/[slug].astro`, `styleguide/*.astro`.
- **Components:** Layout (`base-layout.astro`) in website — binds composition. Core UI (buttons, NavLink, cards, etc.) in `packages/ui`, grouped by domain. Page-level/feature → **`*-container`** + `packages/ui` (and optional thin wrappers); containers pass props into UI. Website = logic binding only; core UI = `packages/ui`.
- **State and data:** Per store — server-only (`*-container` + service-dato) or client-only (small islands with justification). API/CMS → service-dato; callers = containers only.
- **Styling:** List global CSS, variables, Tailwind usage; map Vue styles to design-system tokens or “new token”.

**Deliverable:** Migration map (route → Astro page; component → `*-container` / `packages/ui` / wrapper; data → service-dato or island; styles → token or new).

### 2. Design-system alignment

- Import design-system in main layout (base-layout.astro): `@import "@rotate/design-system/design-system.css";`
- Add or extend tokens only when Vue design needs something not in base, color, dimension, grid, text, ddd.
- Keep Tailwind v4 + `@tailwindcss/vite` in the website; single pipeline that consumes design-system CSS.

### 3. Astro structure mapping (architecture)

| Vue concept            | Astro target                                                                                                             | Rule                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Route                  | File under `src/pages/`                                                                                                  | Static or dynamic route                                        |
| Page view              | Page composes **`*-container`** components; containers fetch and pass props to **`packages/ui`** (and optional wrappers) | `website-architecture.mdc`: containers = data, UI = props-only |
| Component with data    | `components/<feature>-container/index.astro` (fetch, validate, normalise) + optional `format-*.ts`                       | No CMS inside `packages/ui` or props-only views                |
| Component without data | Core UI in `packages/ui`; website composes from `@rotate/ui/*`                                                           | Zero JS by default (escalate per `website-behaviour.mdc`)      |
| Client-only behaviour  | Minimal islands; comment justification                                                                                   | See `.cursor/rules/website-behaviour.mdc`                      |
| Global state           | Prefer server-driven; if client-only, one small island                                                                   | Avoid broad client state                                       |

### 4. Data and CMS

- Centralise: `packages/service-dato` for CMS/backend; containers call it, no inline fetch.
- Presentational components receive only props from their container; no CMS/API/domain imports in `packages/ui` or props-only website views.

### 5. Phased migration execution

1. **Layout and shell** — Header, Footer, Navigation → `*-container` + `packages/ui`; base-layout.astro binds composition. See **Workstream C** (`02-workstreams/05b-c-layout-shell.md`). Core UI lives in `packages/ui`; website = logic binding only.
2. **Homepage** — `/` → `index.astro`; data-driven sections = `*-container` + UI; static sections = fragments or single presentational components.
3. **Static and list pages** — About, contact, list pages → `src/pages/`; containers only where data is needed.
4. **Dynamic routes** — e.g. `[category]/[slug]` following existing product page pattern: page → `*-container`(s) → `packages/ui`.
5. **Islands and client JS** — Only where necessary; minimal islands, justification comments; CSS-first.
6. **Redirects and SEO** — Preserve old URLs; meta and structured data as in Vue app.

### 6. Testing and cutover

- Visual and regression: compare to Vue site; check key flows.
- Performance: no unnecessary client JS; leverage Astro zero-JS and islands.
- Cutover: switch production to Astro app; retire Vue app when stable.

### Key files and references

- **Rules index:** [.cursor/rules/README.md](../../.cursor/rules/README.md)
- **Website architecture:** [.cursor/rules/website-architecture.mdc](../../.cursor/rules/website-architecture.mdc) — `*-container`, wrappers, `packages/ui`
- **Behaviour escalation:** [.cursor/rules/website-behaviour.mdc](../../.cursor/rules/website-behaviour.mdc) — server → islands → minimal JS → Alpine
- **Components (design system, Figma, packages/ui):** [.cursor/rules/components.mdc](../../.cursor/rules/components.mdc) — core UI in `packages/ui`; website = logic binding; Figma: fetch variables, ask for SVGs
- **Design system / Tailwind:** [.cursor/rules/design-system.mdc](../../.cursor/rules/design-system.mdc)
- **Service Dato:** [.cursor/rules/service-dato.mdc](../../.cursor/rules/service-dato.mdc)
- **Repo tooling:** [.cursor/rules/repo-tooling.mdc](../../.cursor/rules/repo-tooling.mdc)
- **Functional style:** [.cursor/rules/functional-style.mdc](../../.cursor/rules/functional-style.mdc) — pure functions, immutability, composition
- **Design-system entry:** `packages/design-system/src/design-system.css`
- **Layout:** `apps/website/src/layouts/base-layout.astro`
- **Data layer:** `packages/service-dato`; app imports via `@rotate/cms`; see [documentation/05-reference/dato-vue-to-service-review.md](../05-reference/dato-vue-to-service-review.md)

### Decisions (from discovery)

- **Redirects:** **Dato is the source of truth.** Implement a build step that fetches redirects (getRedirects()) and uses them the same way (e.g. output Vercel redirect config at build).
- **Styleguide:** We are creating a **new design-system**; components will have some changes in how they are rendered. Styleguide will reflect the new design-system (not a 1:1 copy of 2022-site).
- **Deployment:** **Vercel** for now. Document build command, env in CI, redirect/sitemap handling in DEPLOYMENT or cutover section.

### 7. Deployment and cutover (Vercel)

- **Host:** Vercel. Document in DEPLOYMENT.md or README: build command, env vars in CI (Dato, tracking, ENABLE_TRACKING, etc.), how redirects and sitemap are produced at build.
- **Rendering:** Pages are server-rendered; no getStaticPaths. Caching at Bunny CDN. Sitemap (G2) uses **getRoutes()** from `@rotate/cms` when generating sitemap.xml.
- **Pre-launch checklist:** A short checklist before cutover: all routes 200, meta/JSON-LD present, tracking fires (when ENABLE_TRACKING + consent), conversion fires, sitemap valid, redirects tested, 404 and 500 work.
- **Playwright e2e tests:** Implement **Playwright e2e tests** for key flows (e.g. homepage, navigation, key pages, footer CTA).
- **Design-matching tests:** Run tests to see how the new website matches the designs based on the old website; use **browser/Playwright** for visual or design comparison (e.g. screenshot diff, layout checks) so we can catch regressions before cutover.

### 8. Images and media (decided)

- **Strategy:** Use **Dato CDN + query params** with **Bunny CDN in front** (no imgix/Cloudinary). Implement URL building in app (e.g. `src/lib/images.ts`) for image and video URLs; Media/Picture/Video modules use this. Bunny CDN sits in front of Dato CDN for delivery.

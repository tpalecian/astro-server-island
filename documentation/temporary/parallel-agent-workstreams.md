# Parallel agent workstreams

Use this to run **multiple agents at the same time**. Each workstream is self-contained; agents should only edit files in their scope. Do not merge workstreams into one agent run.

**Reference plans:** [CMS service pattern](technical/cms-service-pattern-and-dato-centralisation.md) | [Vue to Astro migration](vue-to-astro-migration.md)

---

## Workstream A — service-dato package (types, gql, models, getters)

**Scope:** `packages/service-dato/` only. No app or 2022-site edits.

| # | Todo | Files / notes |
|---|------|----------------|
| A1 | Add CMS-agnostic types (Homepage, Page, Navigation, RouteList, Globals) | `packages/service-dato/src/types.ts` (or per-entity); export from index |
| A2 | Add `gql/` and `gql/fragments/`; migrate queries from 2022-site/gql | `packages/service-dato/src/gql/` — pages, navigation, routes, categories, fragments (meta, link, structured-text, content-blocks) |
| A3 | Add `models/`; migrate normalisers from 2022-site/models | `packages/service-dato/src/models/` — pure `(raw) => shape`; throw on invalid |
| A4 | Add direct getters: getHomepage, getPageBySlug, getRoutes, getNavigation, getGlobals | `packages/service-dato/src/api.ts` (or per-domain); use internal `get()`, gql, models; export only functions + types from package index; do not export client/gql/models |

**Handoff:** When A1–A4 are done, Workstream B can add the app alias and a container that calls getHomepage().

---

## Workstream B — app alias and one container+module

**Scope:** `apps/website/` only. Depends on Workstream A for getHomepage() existing; can start alias and layout once A1 exists.

| # | Todo | Files / notes |
|---|------|----------------|
| B1 | Add dependency `"@rotate/cms": "workspace:@rotate/service-dato"` | `apps/website/package.json` |
| B2 | Create one container that calls getHomepage() and passes props to modules | e.g. `apps/website/src/containers/HomePage.container.astro` — import getHomepage from '@rotate/cms'; await getHomepage(); pass to modules |
| B3 | Create one module that receives homepage props (no data fetch) | e.g. `apps/website/src/components/modules/HomeHero.astro` — props only, no CMS/API imports |
| B4 | Wire container + module into a page (or index) | e.g. `apps/website/src/pages/index.astro` uses container; container uses module |

**Handoff:** Uses service-dato public API only (getHomepage, etc.). No edits to packages/service-dato.

---

## Workstream C — 2022-site discovery / migration map

**Scope:** Read-only audit of 2022-site; output is a doc or spreadsheet. No code edits to packages or app (except adding the deliverable).

| # | Todo | Deliverable |
|---|------|-------------|
| C1 | Map Nuxt routes → Astro pages | List: route → `src/pages/` file (e.g. index.astro, [category]/[slug].astro) |
| C2 | Categorise 2022-site components | Layout/global → ui; page-level → container+module; primitives → ui or design-system |
| C3 | Map Vuex/store → server or islands | Per store: server (containers + service-dato) or client (small island with justification) |
| C4 | Map Vue styles → design-system tokens or “new token” | List: Vue CSS/Tailwind usage → token or “new” |

**Deliverable:** Single doc (e.g. `documentation/temporary/migration-map.md`) with route map, component map, state map, style map. No edits to 2022-site, service-dato, or app code (except creating the doc).

---

## Workstream D — design-system and layout shell

**Scope:** `apps/website/` layouts and styles; `packages/design-system/` only if new tokens needed. Can run in parallel with A/B/C.

| # | Todo | Files / notes |
|---|------|----------------|
| D1 | Import design-system in main layout | e.g. `apps/website/src/styles/global.css` or Base.astro: `@import "@rotate/design-system/design-system.css";` |
| D2 | Ensure Base.astro uses the same layout/shared shell for migrated pages | `apps/website/src/layouts/Base.astro` |
| D3 | (Optional) Add or extend design-system tokens only if Vue audit (C4) requires it | `packages/design-system/src/` — only when C4 says “new token” |

**Handoff:** D1–D2 can be done without waiting for C. D3 only after C4 or by agreement.

---

## Dependency order (minimal)

- **A and C and D** can run in parallel (no overlap).
- **B** can start B1 (alias) as soon as service-dato package exists; B2–B4 need A4 (getHomepage exported) to be useful.
- **C** is read-only; no one waits on C except for D3 (tokens from style map).

## How agents should use this

1. Pick **one workstream** (A, B, C, or D).
2. Work only on files listed in that workstream.
3. Do not edit the other workstreams’ files in the same run.
4. When done, mark todos in this file (e.g. add `[x]` or “Done”) or update the plan docs.

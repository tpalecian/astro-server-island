# CMS service pattern and Dato centralisation

**Separate plan.** Do not merge with the Vue-to-Astro migration plan ([vue-to-astro-migration.md](../temporary/vue-to-astro-migration.md)). This doc covers only the CMS/service-dato pattern and @rotate/cms alias.

**Overview:** Centralise all Dato implementation in packages/service-dato (types, queries, normalisers, client). No separate cms package; app imports from @rotate/cms (alias to service-dato) and uses getHomepage(), getPageBySlug(), etc. directly — no cms object. Swap to Sanity = new package + change alias. Architecture (containers compose existing functions only; modules props-only) is satisfied by containers calling getHomepage() etc. and passing props to modules.

---

## Goals

1. **All Dato implementation** lives in [packages/service-dato](packages/service-dato) (client, queries, normalisers, and public getters).
2. **App never depends on Dato by name:** containers import from `@rotate/cms` only; CMS swap is a package wiring change.
3. **Architecture compliance:** containers "compose existing functions only" — they call `getHomepage()`, `getPageBySlug(category, slug)`, etc.; no query strings, no normalisers, no CMS/domain knowledge in the app.

---

## 1. Where queries and functions live

**Answer: in `packages/service-dato`.**

| What | Location | Rationale |
|------|----------|-----------|
| Low-level client | `service-dato/src/client.ts` (existing) | request, get, isPreview |
| GraphQL queries + fragments | `service-dato/src/gql/` (new) | Migrate from [2022-site/gql](2022-site/gql); keep fragments (meta, link, structured-text, content-blocks, etc.) |
| Normalisers (models) | `service-dato/src/models/` (new) | Pure functions `(raw) => validatedShape`; migrate from [2022-site/models](2022-site/models) |
| High-level getters | `service-dato/src/api.ts` (or per-domain files) | `getHomepage()`, `getPageBySlug(category, slug)`, `getRoutes()`, `getNavigation()`, etc. Each calls `get({ query, model })` internally and returns typed data |
| Types | **service-dato** (same package) | CMS-agnostic types; app imports getters via alias @rotate/cms |

Containers in `apps/website` will **only** call the high-level getters and receive typed props; they will not import queries, models, or the Dato client.

---

## 2. Service pattern: @rotate/cms alias, direct getters

**Direct getters only:** no `cms` object. The app imports `getHomepage`, `getPageBySlug`, `getRoutes`, etc. from `@rotate/cms` and calls them directly.

- **No separate cms package.** Everything lives in [packages/service-dato](packages/service-dato): types, client, gql/, models/, and **direct exports** `getHomepage`, `getPageBySlug`, `getRoutes`, `getNavigation`, `getGlobals`, etc.
  - **App:** [apps/website/package.json](apps/website/package.json): `"@rotate/cms": "workspace:@rotate/service-dato"`. Containers: `import { getHomepage, getPageBySlug } from '@rotate/cms'` and call `getHomepage()`, `getPageBySlug(category, slug)` — no `cms` object, no wire file.
  - **Inside service-dato:** Package can use a default client internally and export direct functions so the public API is just getHomepage, getPageBySlug, etc.

- **Future swap:** Add `packages/service-sanity` exporting the same function names. In app: change alias to `"@rotate/cms": "workspace:@rotate/service-sanity"`. Container code unchanged (still `getHomepage()`, etc.).

---

## 3. Architecture alignment

Per [.cursor/rules/architecture.mdc](.cursor/rules/architecture.mdc):

- **Containers** must "compose existing functions only" and must not contain inline business logic or data-fetch implementation details.

| Before | After (this plan) |
|--------|-------------------|
| Container imports `get`, query, model from service-dato and app gql/models | Container imports only `getHomepage`, `getPageBySlug`, etc. from `@rotate/cms` |
| Container calls `get({ query, model })` | Container calls `getHomepage()`, `getPageBySlug(category, slug)` |
| Query + model live in app or service-dato | Query + model live **only** in service-dato; app has no query/model/CMS knowledge |

Containers become **purely compositional**: they call `getHomepage()`, `getPageBySlug()`, etc. and pass the result as props to modules. No GQL, no normalisers, no Dato/Sanity references — so changing CMS is a single alias change and stays within the rule set.

### Example: how architecture.mdc works with getHomepage()

**Container** (server-only, composes existing functions only, zero UI):

```astro
---
// apps/website/src/containers/HomePage.container.astro
import { getHomepage } from '@rotate/cms';
import HomeHero from '../modules/HomeHero.astro';
import ContentBlocks from '../modules/ContentBlocks.astro';

const homepage = await getHomepage({ preview: import.meta.env.DEV });
---
<HomeHero hero={homepage.hero} />
<ContentBlocks blocks={homepage.content} />
```

- **Rule:** Container fetches and prepares data; composes existing functions only. Here the only call is `getHomepage()` — no inline fetch, no query/model/CMS knowledge. Passes typed props to modules.

**Module** (HTML and styling only, props from container, no data/domain):

```astro
---
// apps/website/src/components/modules/HomeHero.astro
interface Props { hero: { title?: string; }; }
const { hero } = Astro.props;
---
<section class="hero">
  {hero?.title && <h1>{hero.title}</h1>}
</section>
```

- **Rule:** Module receives props only from its container; no data fetching, no CMS/API/domain imports. Referentially transparent (same props → same HTML).

**Flow:** Page → container calls `getHomepage()` from `@rotate/cms` → passes `homepage` as props → modules render. No `cms` object; no Dato/Sanity in app code.

---

## 4. Technical execution (concrete steps)

### Phase A: Types and getters in service-dato

1. **Types:** In `packages/service-dato/src/types.ts` (or per-entity files): define CMS-agnostic types `Homepage`, `Page`, `Navigation`, `RouteList`, `Globals`, etc. Export from package index.
2. **Queries:** Add `packages/service-dato/src/gql/` (and `gql/fragments/`). Migrate [2022-site/gql](2022-site/gql) (pages, navigation, routes, categories, fragments). Keep as TS/JS strings or imported fragments; ensure fragments resolve (e.g. meta, link, structured-text, content-blocks).
3. **Normalisers:** Add `packages/service-dato/src/models/`. Migrate [2022-site/models](2022-site/models) as pure functions; adjust to Dato raw shape and throw on invalid data. Return shapes matching the package types.
4. **Direct getters:** Add e.g. `service-dato/src/api.ts` (or per-domain files). Export **direct functions** `getHomepage`, `getPageBySlug`, `getRoutes`, `getNavigation`, `getGlobals`, etc. Each uses internal `get({ query, model })` + gql/models; do **not** export raw client, gql, or models. Public API = types + these functions only.

### Phase B: App alias and containers

5. **apps/website:** Add dependency `"@rotate/cms": "workspace:@rotate/service-dato"`. In containers, `import { getHomepage, getPageBySlug } from '@rotate/cms'` and call `getHomepage()`, `getPageBySlug(category, slug)`, etc. directly. No `cms` object, no wire file. No imports from `@rotate/service-dato` by name.

### Phase C: Docs and cleanup

6. **Documentation:** Update [documentation/technical/dato-vue-to-service-review.md](dato-vue-to-service-review.md) to state that all Dato implementation lives in service-dato and the app uses `@rotate/cms` (alias) with direct getters `getHomepage()`, etc. Add a short note on alias and future Sanity swap.

---

## 5. File and dependency summary

| Package | New/updated | Purpose |
|---------|-------------|---------|
| `packages/service-dato` | Updated | Types, client, gql/, models/, and **direct exports** getHomepage, getPageBySlug, getRoutes, etc. No separate cms package. |
| `apps/website` | Updated | Dependency `"@rotate/cms": "workspace:@rotate/service-dato"`; containers import and call getHomepage(), getPageBySlug(), etc. directly. |

**Swap path (later):** Add `packages/service-sanity` exporting same function names; in app change alias to `"@rotate/cms": "workspace:@rotate/service-sanity"`; container code unchanged.

---

## 6. Open decisions

- **Naming of getters:** Confirm names (e.g. `getPageBySlug(category, slug)` vs `getArticle(category, slug)`) and full list from the 2022-site usage map (homepage, info, category landing, article/project, navigation, footer, globals, routes).
- **Preview:** Whether getters accept an optional `preview?: boolean` and pass it through to the client (for draft content); likely yes for parity with current Dato usage.
- **Fragments in service-dato:** Migrate 2022-site fragments as-is (JS template strings or small TS modules) so GQL stays valid and maintainable.

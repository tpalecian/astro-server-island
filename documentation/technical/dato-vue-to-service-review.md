# Dato CMS usage in Vue (2022-site) → service-dato

Technical review: how Dato was used in the Vue app and how `@rotate/service-dato` replaces it. Canonical location; package README points here.

## How Dato was used in Vue

### 1. Two entry points

| Entry point | Location | Used by | Purpose |
|-------------|----------|---------|---------|
| **Nuxt plugin** | `plugins/dato.js` | Pages, layout components (Header, Footer, Layout) | `$dato.get({ query, model })` — POST query, then normalize with a model function |
| **Standalone client** | `clients/datocms.js` | `services/routes.js`, `services/redirects.js` | `request({ query, variables, endpoint })` — POST with optional variables, returns raw `data` |

### 2. Plugin API (`$dato`)

- **`get({ query, model })`**
  - POSTs `query` to `env.datoApiUrl` with `Authorization: Bearer env.datoApiKey`.
  - On success: `model(response.data.data)` is applied; returns `{ raw, data }`.
  - On error: throws if `response.data.errors` is present.
- **`isPreview`**  
  - `true` when `datoApiUrl` contains `/preview`.

### 3. Standalone client API

- **`request({ query, variables = {}, endpoint })`**
  - POSTs `query` and `variables` to `endpoint` (default `https://graphql.datocms.com`).
  - Uses `process.env.DATO_API_KEY` for auth.
  - Returns `data.data`; throws if `data.errors` is present.
  - No model step — callers use the raw GraphQL response.

### 4. Environment

- **Vue / Nuxt:** `DATO_API_KEY`, `DATO_API_URL` (e.g. `https://graphql.datocms.com` or `https://graphql.datocms.com/preview`).
- **Netlify:** `DATO_API_URL="https://graphql.datocms.com/preview"` in `netlify.toml`.

### 5. Usage map (where Dato is called)

| Caller | Query source | Model | Purpose |
|--------|--------------|--------|---------|
| `pages/index.vue` | `gql/pages/home.gql` | `models/pages/home` | Homepage (hero, content) |
| `pages/info.vue` | `gql/pages/info.gql` | `models/pages/info` | Info page |
| `pages/_category/index.vue` | `gql/categories.gql` (categoryBySlug) + `gql/categoryCards.gql` | `models/categories` + `models/categoryCards` | Category landing + cards |
| `pages/_category/_slug.vue` | `gql/pages/slug.gql` (work/thinking/studio) | `models/pages/slug` (per category) | Article/project page |
| `components/Core/Header/index.vue` | `gql/navigation/header.gql` | `models/navigation/header` | Header nav (pill + circle link) |
| `components/Core/Footer.vue` | `gql/navigation/footer.gql` | `models/navigation/footer` | Footer (CTA, nav links, social) |
| `components/Layout/index.vue` | `gql/globals.gql` | `models/globals` | Globals (popup, homepage backgroundColor) |
| `services/routes.js` | `gql/routes.gql` | — | All routes for static generation |
| `services/redirects.js` | inline GQL | — | Redirects for Netlify |

### 6. Query + model pattern

- **Queries:** Live in `2022-site/gql/` (and `gql/fragments/`). Many are built from fragments (meta, link, structured-text, content-blocks, blocks, models).
- **Models:** Live in `2022-site/models/`. Each is a function `(data) => normalizedShape`. They often pluck one root key (e.g. `data.navigation`, `data.homepage`) and sometimes validate or throw.

---

## How to use `@rotate/service-dato`

### Role of the package

- **Single place** for calling Dato: auth, endpoint (delivery vs preview), and error handling.
- **No queries or models inside the package** — queries and normalisation stay in the app (or a future gql/models package). Containers in `apps/website` pass query strings and optional model functions into the service.

### API (see package `src/client.ts`)

Aligned with [.cursor/rules/architecture.mdc](../../.cursor/rules/architecture.mdc): containers compose `get({ query, model })` only; no inline fetch or business logic.

1. **`request(options)`**  
   - `options`: `{ query: string, variables?: object, preview?: boolean }`  
   - Uses `DATO_API_KEY` and `DATO_API_URL` (or derives endpoint from `preview`).  
   - Returns the GraphQL `data` object. Throws on `errors`.

2. **`get(options)`**  
   - `options`: `{ query: string, model: (data: unknown) => T, variables?: object }`  
   - Same as Vue’s `$dato.get`: runs `request`, then returns `{ data: model(data), raw }`.  
   - Use this in Astro containers when you have an existing “model” normaliser.

### Where to put queries and models for Astro

- **Option A (recommended for migration):** Copy or move `2022-site/gql` and `2022-site/models` into `apps/website` (e.g. `src/gql`, `src/models`). Containers import query + model and call `get({ query, model })` from `@rotate/service-dato`.
- **Option B:** Later, move shared queries/models into a dedicated package (e.g. `@rotate/gql-dato`) and keep only page-specific pieces in the app.

### Example (Astro container)

```ts
// apps/website/src/containers/HomePage.container.astro (conceptual)
import { get } from '@rotate/service-dato'
import homepageQuery from '../gql/pages/home.gql'
import homepageModel from '../models/pages/home'

const { data } = await get({ query: homepageQuery, model: homepageModel })
// use data in module props
```

---

## Summary

| Vue | Astro + service-dato |
|-----|----------------------|
| `$dato.get({ query, model })` | `get({ query, model })` from `@rotate/service-dato` |
| `request({ query, variables, endpoint })` in services | `request({ query, variables, preview })` from `@rotate/service-dato` |
| Queries in `2022-site/gql/` | Queries in app (or shared package); passed into service |
| Models in `2022-site/models/` | Models in app (or shared package); passed into service |
| `DATO_API_KEY`, `DATO_API_URL` | Same env vars; service reads them |

The package does **not** contain Dato-specific queries or types; it only provides the HTTP client and optional `get` wrapper so that all Dato access goes through one place and respects env and preview behaviour.

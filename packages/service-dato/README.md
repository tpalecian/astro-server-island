# @rotate/service-dato

DatoCMS GraphQL client for server-side use. Consumed **only by Astro containers** in the website app; no UI or framework code.

## Type generation (codegen)

Types are generated from your GraphQL queries and the Dato schema. Use a **read-only** API token only.

1. Set `DATOCMS_API_KEY` (read-only token; do not commit full-access tokens).
2. Run from the package: `pnpm codegen`.
3. This overwrites `src/types-dato.ts` with schema-based types. Getters use these types for type-safe results.

## Architecture alignment

Per [.cursor/rules/architecture.mdc](../../.cursor/rules/architecture.mdc):

- **Containers** must “compose existing functions only” (no inline business logic).
- Data access belongs in containers; they call this package, not inline fetch.

So containers **do not** implement Dato fetch or normalisation. They import:

1. **`get`** (or `request`) from `@rotate/service-dato`
2. **Query** from app `gql/` (or shared package)
3. **Model** from app `models/` (pure normaliser: `(data) => validatedShape`)

and call one function: `get({ query, model, variables? })`. That satisfies “composes existing functions only.”

## API

### `request(options)`

Low-level: POST `query` (+ optional `variables`) to Dato, return raw GraphQL `data`. Throws on `errors`.

- **options:** `{ query: string, variables?: object, preview?: boolean, endpoint?: string }`
- **env:** `DATO_API_KEY` (or `DATO_CMS_READ_ONLY_API_TOKEN`), optional `DATO_API_URL`

### `get(options)`

Request + normalise: runs `request()`, then applies `model(data)`.

- **options:** `{ query: string, model: (data) => T, variables?: object, preview?: boolean, endpoint?: string }`
- **returns:** `{ data: T, raw: Record<string, unknown> }`

Use in containers when you have a query and a model (normaliser). No inline fetch or business logic.

### `isPreview()`

Returns whether `DATO_API_URL` points to the preview endpoint (draft content).

## Example (container)

```ts
// apps/website/src/containers/HomePage.container.astro
import { get } from "@rotate/service-dato";
import homepageQuery from "../gql/pages/home.gql";
import homepageModel from "../models/pages/home";

const { data } = await get({ query: homepageQuery, model: homepageModel });
// Pass data as props to module components only.
```

Queries and models live in the app (or a shared package); this package only provides the client and `get` wrapper.

## Documentation

- **Vue → service-dato review (canonical):** [documentation/technical/dato-vue-to-service-review.md](../../documentation/technical/dato-vue-to-service-review.md) — how Dato was used in 2022-site and how this package replaces it. Per [.cursor/rules/planning.mdc](../../.cursor/rules/planning.mdc), scoped docs live under `/documentation`.

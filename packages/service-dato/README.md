# @rotate/service-dato

DatoCMS GraphQL client for server-side use. Consumed **only by website `*-container`** components (`apps/website/src/components/<feature>-container/index.astro`); no UI or framework code in this package. The package exposes **getters** and **types** only; queries and client are internal.

## How to use

**1. Alias in the app**

Resolve `@rotate/cms` to this package (e.g. Vite `resolve.alias` or tsconfig `paths`). Ensure the app has `DATOCMS_API_KEY` (read-only token) in env.

**2. Call getters from containers**

Import getters and types from `@rotate/cms`. Every getter requires `{ token }` (and optional `preview`). The app is responsible for reading the token from env and passing it in.

```ts
// apps/website/src/components/hero-container/index.astro (frontmatter)
import { getHomepage, type HomeQuery } from '@rotate/cms'

const token = import.meta.env.DATOCMS_API_KEY
const homepage = await getHomepage({ token })
// homepage: HomeQuery['homepage'] | null — pass as props to @rotate/ui components
```

```ts
// Dynamic page: [category]/[slug].astro
import { getPageBySlug } from '@rotate/cms'

const token = import.meta.env.DATOCMS_API_KEY
const page = await getPageBySlug(Astro.params.category, Astro.params.slug, { token })
// page: work | thinking | studio record or null
```

```ts
// Category landing or cards
import { getAllCategories, getCategoryBySlug, getCategoryCards } from '@rotate/cms'

const token = import.meta.env.DATOCMS_API_KEY
const category = await getCategoryBySlug('thinkings', { token })
const categories = await getAllCategories({ token })
const cards = await getCategoryCards('thinkings', { token }) // 'thinkings' | 'works' | 'studios' | 'everything'
```

```ts
// Routes, redirects, navigation, globals, info
import {
  getGlobals,
  getInfo,
  getNavigationFooter,
  getNavigationHeader,
  getRedirects,
  getRoutes,
} from '@rotate/cms'

const token = import.meta.env.DATOCMS_API_KEY
const routes = await getRoutes({ token })
const redirects = await getRedirects({ token })
const navHeader = await getNavigationHeader({ token })
const navFooter = await getNavigationFooter({ token })
const globals = await getGlobals({ token })
const infoPage = await getInfo({ token })
```

**3. Preview (draft content)**

Pass `preview: true` when you want draft content (e.g. from a preview URL or env).

```ts
const homepage = await getHomepage({ token, preview: true })
```

## Public API

| Getter                                   | Returns                                            | Use                               |
| ---------------------------------------- | -------------------------------------------------- | --------------------------------- |
| `getHomepage(options)`                   | `HomeQuery['homepage'] \| null`                    | Homepage hero, SEO, content       |
| `getPageBySlug(category, slug, options)` | Work / Thinking / Studio record or null            | Article pages                     |
| `getCategoryBySlug(slug, options)`       | `CategoryBySlugQuery['category']`                  | Category meta (e.g. filter text)  |
| `getAllCategories(options)`              | `AllCategoriesQuery['allCategories']`              | List of categories                |
| `getCategoryCards(slug, options)`        | Cards for thinkings / works / studios / everything | Category card grids               |
| `getRoutes(options)`                     | `RoutesQuery`                                      | All slugs for routing/sitemap     |
| `getRedirects(options)`                  | `RedirectsQuery['allRedirects']`                   | Redirect rules                    |
| `getNavigationHeader(options)`           | `NavigationHeaderQuery['navigation']`              | Header nav                        |
| `getNavigationFooter(options)`           | `NavigationFooterQuery['navigation']`              | Footer nav                        |
| `getGlobals(options)`                    | `GlobalsQuery`                                     | Globals (e.g. popup, homepage bg) |
| `getInfo(options)`                       | `InfoQuery['infoPage']`                            | Info page                         |

**Options:** `GetterOptions = { token: string; preview?: boolean }`

**Types:** All query result types are exported (e.g. `HomeQuery`, `RoutesQuery`, `WorkBySlugQuery`) for use in containers and components.

## Type generation (codegen)

Types are generated from the package’s GraphQL queries and the Dato schema. Use a **read-only** API token only.

1. Set `DATOCMS_API_KEY` (read-only token; do not commit full-access tokens).
2. Run from the package: `pnpm codegen`.
3. This overwrites `src/types-dato.ts`. Getters use these types for type-safe results.

## Architecture

- **Containers** call getters only; no Dato client or queries in the app. Data access lives in this package.
- **App** imports from `@rotate/cms` (or `@rotate/service-dato`) only — getters and types. Do not import from package internals (`handlers`, `gql`, `client`, `types-dato` by path).
- Queries and fragments live in `packages/service-dato/src/gql/` and are not part of the public API.

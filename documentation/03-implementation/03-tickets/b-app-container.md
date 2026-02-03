---
title: Task B — app alias and one page + module (homepage)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4]
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - .cursor/rules/architecture.mdc
tags: [implementation, ticket, app-shell]
---

# Task B — app alias and one page + module (homepage)

**Ticket:** B  
**Phase:** 1  
**Scope (files/dirs you may edit):** `apps/website/` only. No edits to `packages/service-dato/` or 2022-site.

**Dependencies (blocking):** A4 (getHomepage exported from @rotate/cms).  
**Unblocks:** E, F1, F2, F3 and all page-level work that reuses page → getter + module pattern.

---

## 1. Outcome & Business Value (why)

**Description:**  
Wire the website app to the CMS via the `@rotate/cms` alias and prove the data flow with one page. In scope: add alias in apps/website, one page (e.g. index.astro) that calls getHomepage() in frontmatter and passes data as props to a module; one module that receives props only (no fetch). Out of scope: multiple pages, content blocks, design-system tokens, 2022-site edits.

**Outcome we expect:**  
Visiting the homepage (or index) shows content driven by getHomepage(). Page is server-only, calls getHomepage() in frontmatter, passes result as props to module(s). Module is props-only, no CMS/API imports. App uses service-dato public API only (getHomepage, etc.).

**Value (user / business):**  
Proves the architecture (page → getter, module → props) and unblocks all future pages that follow the same pattern. Delivers first user-visible page backed by Dato.

---

## 2. Context & Scope (what/where)

**Scope:** `apps/website/` only. No edits to `packages/service-dato/` or 2022-site.

**Dependencies:** A4 (getHomepage exported).

**Unblocks:** E, F1, F2, F3 and all page-level work that reuses page → getter + module pattern.

**Contract / API:**
- **Alias:** App resolves `@rotate/cms` to `packages/service-dato` (via Vite/TS path alias). Import only: `getHomepage`, `GetterOptions`, and types such as `HomeQuery` from `@rotate/cms`.
- **Page:** `src/pages/index.astro` (or `src/pages/home.astro`). In frontmatter: calls `await getHomepage({ token, preview? })`, receives `HomeQuery['homepage']`; passes result as props to module(s). No container component.
- **Module:** One Astro component, e.g. `src/components/modules/HomeHero.astro`. Props only: e.g. `title`, `heroWords`, `heroVideo`, etc. (subset of homepage shape). No imports from `@rotate/cms` or any CMS/API.

**Data source & shape:**
- **Source:** `getHomepage(options: GetterOptions)` from `@rotate/cms`. Options: `{ token: string, preview?: boolean }`. Token from env in page frontmatter (e.g. `import.meta.env.DATOCMS_API_KEY`).
- **Shape:** Return type `HomeQuery['homepage']` from `@rotate/cms`. Key fields for a minimal hero: `slug`, `title`, `heroWords` (array of `{ word }`), `heroVideo` (media), `content` (array of blocks). Full shape is defined by the Home query in service-dato.

**Out of scope / Don't do:**
- Do not add or change getters in service-dato.
- Do not import from `packages/service-dato` paths (e.g. `handlers`, `gql`, `client`, `types-dato`) in the app; use only `@rotate/cms` and its public exports.
- Do not put data fetching or CMS imports in the module; module is props-only.
- Do not implement multiple pages, content block rendering, or design-system tokens in this task.

**Risks & mitigations:**  
None beyond env (token) being set for dev/build.

---

## 3. Delivery Plan (how)

**Steps:**
1. Add `@rotate/cms` alias in app: depend on `@rotate/service-dato` (workspace) and resolve `@rotate/cms` to that package (e.g. Vite `resolve.alias` or tsconfig `paths`). Ensure app has `DATOCMS_API_KEY` (or equivalent) in env for getter token.
2. Create one module: `src/components/modules/HomeHero.astro` — accept homepage props (e.g. title, heroWords, heroVideo); render minimal hero; no fetch, no CMS imports.
3. Create index page: `src/pages/index.astro` — in frontmatter call `await getHomepage({ token })`, pass homepage data as props to HomeHero; render HomeHero in body.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | apps/website resolves @rotate/cms to service-dato; no direct service-dato path imports in app code | ✓ |
| AC2 | Page (index.astro) calls getHomepage() in frontmatter and passes props to module(s) | ✓ |
| AC3 | One module exists that receives homepage props only; no data fetch in module | ✓ |
| AC4 | One page (index.astro) uses getHomepage and renders the module with props | ✓ |
| AC5 | No imports of client/gql/handlers in app; only getHomepage and types from @rotate/cms | ✓ |

## 4. Validation & Testing

**Validation:**  
- Run `pnpm build` from repo root (or `pnpm build` in `apps/website`) — build must succeed.  
- Run `pnpm dev` in `apps/website`, open `/` — page must load; content should come from getHomepage (e.g. title or hero visible).  
- Require `DATOCMS_API_KEY` (or app env used for token) set in `.env` or environment.

**Tests:**  
Optional: simple render test for the module with mock props. Not required for ACs.

---

## 5. References

- `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`
- `.cursor/rules/architecture.mdc` — pages (or containers) compose getters only; modules props only.

---

## 6. Notes

- Page: `src/pages/index.astro` — import getHomepage from `@rotate/cms`; in frontmatter: `await getHomepage({ token })`; pass result as props to HomeHero.
- Module: `src/components/modules/HomeHero.astro` — props only (e.g. title, heroWords, heroVideo); no CMS/API imports.
- Token: read from `import.meta.env.DATOCMS_API_KEY` (or equivalent) in page frontmatter; do not hardcode.


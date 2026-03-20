---
title: Solution — Deployment and QA
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on:
  - 01-discovery/06-deployment-and-qa.md
related_docs:
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
  - 02-solution/external-services-and-tracking-plan.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, deployment, qa, vercel, testing]
---

# Solution — Deployment and QA

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/06-deployment-and-qa.md`.

**This doc focuses on:** the **solution approach** and delivery shape for deployment and QA.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/06-deployment-and-qa.md` (scope, constraints, decisions).

**In scope here:** deployment approach, QA strategy, and validation plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- Deployment host is Vercel with documented env requirements.
- Pre‑launch checklist is defined and used.
- Playwright e2e and visual checks are part of release validation.

**Proposed approach:**

- **Host:** Vercel.
- **Validation:** Pre‑launch checklist + automated tests.
- **Testing:** Playwright e2e and visual comparison against old site.
- **Env:** Single `.env.example` including Dato and all tracking vars.

**Interfaces & data:**

- Vercel build uses environment variables and build‑time outputs (sitemap, redirects).

**Alternatives considered:**

- Hosting elsewhere. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Changing CI provider or build system beyond what Vercel requires.

### References (exact)

**Informational (read before / during implementation):**

| What                                   | Path or URL                                                                                                                                        |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Discovery (scope, constraints)         | `documentation/01-discovery/06-deployment-and-qa.md`                                                                                               |
| Tracking env vars (align .env.example) | `documentation/02-solution/external-services-and-tracking-plan.md`                                                                                 |
| Vercel build and env                   | [Vercel: Build configuration](https://vercel.com/docs/build-step), [Environment Variables](https://vercel.com/docs/projects/environment-variables) |
| Playwright e2e                         | [Playwright](https://playwright.dev/)                                                                                                              |
| Implementation ticket                  | `documentation/03-implementation/03-tickets/j-deployment-qa.md`                                                                                    |

**Planned locations (where to implement):**

| What                                          | Path                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| App config (output, adapter)                  | `apps/website/astro.config.mjs`, `apps/website/package.json`                                                 |
| Env template (list all vars: Dato + tracking) | `apps/website/.env.example`                                                                                  |
| E2e tests                                     | `apps/website/e2e/` or `tests/` (per repo convention)                                                        |
| Pre-launch checklist                          | Document in `documentation/03-implementation/` or `documentation/04-operations/` (e.g. `j-deployment-qa.md`) |

### Code examples (contract to implement)

**Implement in `apps/website/.env.example`** — minimum vars (exact names):

```env
DATOCMS_API_KEY="YOUR_DATO_API_KEY"
ENABLE_TRACKING="false"
# Plus all PUBLIC_* tracking vars — list in 02-solution/external-services-and-tracking-plan.md
```

**Vercel build:** Use `@astrojs/vercel` adapter; build command and output directory per `apps/website/package.json`. No custom build step unless documented in this solution doc.

**Validation:** Implement Playwright e2e (e.g. `pnpm test:e2e` or `npx playwright test`); define and complete pre-launch checklist before cutover.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Document Vercel build and env requirements.
2. Define pre‑launch checklist.
3. Implement Playwright e2e and visual checks.

**Deliverables:**

- Deployment notes (host, env, build).
- QA checklist and automated test plan.

**Validation:**

- Tests pass; checklist completed prior to cutover.

**Open questions / TBD:**

- None.

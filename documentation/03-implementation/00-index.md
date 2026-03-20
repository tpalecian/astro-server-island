---
title: Implementation index
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-03-20
depends_on:
  - 01-discovery/00-index.md
  - 02-solution/00-index.md
related_docs:
  - 03-implementation/01-plan-of-attack.md
  - 03-implementation/02-workstreams/
  - 03-implementation/03-tickets/
tags: [implementation, index]
---

# Implementation index

## Quick links

- Plan of attack: `03-implementation/01-plan-of-attack.md`
- **Implementation context (for agents):** `03-implementation/02-workstreams/00-implementation-context-requirements.md`
- Workstreams: `03-implementation/02-workstreams/` (01–30)
- Tickets: `03-implementation/03-tickets/` (30 tickets: a1–a4, b, c, e, f1–f3, fb1–fb7, g1–g4, h, i, ib1–ib6, j)

## Workstreams = full context for AI (30)

Workstreams contain **all** rules and context for AI: allowed paths, contract, data shape, out of scope, steps, done criteria, acceptance criteria, validation, solution/discovery links, old code (2022-site).

| #     | Workstream                             | Doc                                                                      |
| ----- | -------------------------------------- | ------------------------------------------------------------------------ |
| 0     | Context requirements (read first)      | `02-workstreams/00-implementation-context-requirements.md`               |
| 1     | A1 — client + base types               | `02-workstreams/01-a1-client-types.md`                                   |
| 2     | A2 — GQL + fragments                   | `02-workstreams/02-a2-gql-fragments.md`                                  |
| 3     | A3 — models (superseded)               | `02-workstreams/03-a3-models.md`                                         |
| 4     | A4 — getters + exports                 | `02-workstreams/04-a4-getters-exports.md`                                |
| 5     | B — app container (homepage)           | `02-workstreams/05-b-app-container.md`                                   |
| 5b    | C — layout shell (Header, Footer, Nav) | `02-workstreams/05b-c-layout-shell.md`                                   |
| 6     | E — dynamic routes                     | `02-workstreams/06-e-dynamic-routes.md`                                  |
| 7     | F1 — content blocks core               | `02-workstreams/07-f1-content-blocks-core.md`                            |
| 8     | F2 — structured text                   | `02-workstreams/08-f2-structured-text.md`                                |
| 9     | F3 — ContentIsland (**superseded**)    | `02-workstreams/09-f3-content-island.md`                                 |
| 10–16 | FB1–FB7 — block modules                | `02-workstreams/10-fb1-media-single.md` … `16-fb7-stats-block.md`        |
| 17–20 | G1–G4 — SEO                            | `02-workstreams/17-g1-seo-meta-jsonld.md` … `20-g4-seo-errors-robots.md` |
| 21    | H — images and media                   | `02-workstreams/21-h-images-media.md`                                    |
| 22    | I — tracking and CookieBanner          | `02-workstreams/22-i-tracking-cookie-banner.md`                          |
| 23–28 | IB1–IB6 — inline blocks                | `02-workstreams/23-ib1-tagrecord.md` … `28-ib6-megaheadingrecord.md`     |
| 29    | J — deployment and QA                  | `02-workstreams/29-j-deployment-qa.md`                                   |

## Tickets = linear, no AI context (30)

Each ticket points to its workstream. Same count as workstreams (30 and 30). **Read the workstream for full context before implementing.**

| Ticket  | Workstream                                       |
| ------- | ------------------------------------------------ |
| a1–a4   | 01-a1-client-types … 04-a4-getters-exports       |
| b       | 05-b-app-container                               |
| c       | 05b-c-layout-shell                               |
| e       | 06-e-dynamic-routes                              |
| f1–f3   | 07-f1-content-blocks-core … 09-f3-content-island (**F3 superseded**)    |
| fb1–fb7 | 10-fb1-media-single … 16-fb7-stats-block         |
| g1–g4   | 17-g1-seo-meta-jsonld … 20-g4-seo-errors-robots  |
| h       | 21-h-images-media                                |
| i       | 22-i-tracking-cookie-banner                      |
| ib1–ib6 | 23-ib1-tagrecord … 28-ib6-megaheadingrecord      |
| j       | 29-j-deployment-qa                               |

## Archive

Previous detailed ticket content (before linear conversion): `03-tickets/archive/`. TASK-TEMPLATE: `03-tickets/archive/TASK-TEMPLATE.md`.

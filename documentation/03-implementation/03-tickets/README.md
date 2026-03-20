---
title: Tickets (linear)
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-03-21
depends_on: []
tags: [implementation, tickets, linear]
---

# Tickets (linear)

There are **29 tickets**. Each ticket is **self-contained** for use in Linear (or similar): no references to other documents; scope, acceptance criteria, and validation are inlined in the ticket. Workstreams in `02-workstreams/` hold the same context in repo for AI/agents that have access to the repo.

## Ticket status lifecycle

Front matter **`status`:** `draft` → `in-review` → **`approved`** (ready to implement) → **`completed`** once delivery matches the ACs.

When work is done, set **`status: completed`**, update **`last_updated`**, and record what shipped in **Notes** (see `TASK-TEMPLATE.md`). Update the matching **`02-workstreams/`** file to **`completed`** when one exists. Full convention: **`.cursor/rules/planning.mdc`** (Implementation tickets).

## Ticket list (29)

| ID      | Ticket                                              |
| ------- | --------------------------------------------------- |
| A1      | `a1-service-dato-client-types.md`                   |
| A2      | `a2-service-dato-gql-fragments.md`                  |
| A3      | `a3-service-dato-models.md` (superseded)            |
| A4      | `a4-service-dato-getters-exports.md`                |
| B       | `b-app-container.md`                                |
| E       | `e-dynamic-routes.md`                               |
| F1      | `f1-content-blocks-core-modules.md`                 |
| F2      | `f2-content-blocks-structured-text.md`              |
| F3      | `f3-content-island-below-fold.md`                   |
| FB1–FB7 | `fb1-media-single.md` … `fb7-stats-block.md`        |
| G1–G4   | `g1-seo-meta-jsonld.md` … `g4-seo-errors-robots.md` |
| H       | `h-images-media.md`                                 |
| I       | `i-tracking-cookie-banner.md`                       |
| IB1–IB6 | `ib1-tagrecord.md` … `ib6-megaheadingrecord.md`     |
| J       | `j-deployment-qa.md`                                |

## Archive

Previous ticket content (before self-contained conversion): `03-tickets/archive/`.

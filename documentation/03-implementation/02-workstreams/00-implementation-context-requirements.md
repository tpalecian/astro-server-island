---
title: Implementation context requirements (for agents)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
related_docs: [03-implementation/03-tickets/README.md]
tags: [implementation, workstreams, agents, context]
---

# Implementation context requirements (for agents)

**Purpose:** **Workstreams** hold all rules and context for AI (and developers). **Tickets** are linear task pointers that reference a workstream. There are **29 workstreams** and **29 tickets** (1:1). Read the **workstream** for full context before implementing.

## Agent coordination

**Another agent may be working on this.** Before starting implementation, check whether the ticket (or its workstream) is already assigned or in progress. Do not start the same ticket in parallel; pick a different ticket or wait. When assigning work, make it clear which ticket/workstream is in progress so other agents avoid conflicts.

## Workstreams = full context for AI

Each workstream doc in `02-workstreams/` (01–29) must contain **all** information needed to implement — **exactly** the following — so an agent can implement **without guessing** or opening solution/discovery docs:

| # | Required | What |
|---|----------|------|
| 0 | **Exact implementation idea** | One place that states: (1) **Approach** — one sentence: what we are building and how. (2) **Exact file name(s) and paths** — files to create or edit (e.g. `Quote.astro` in `src/components/modules/`). (3) **Exact props/API/types** — prop names and types, or "same as GQL fragment X / `types-dato` type Y". (4) **Exact mapping/key** — e.g. `_modelApiKey` value, handler name, or route path. (5) **Legacy/reference behaviour** — what to match from old code or design (or N/A). No inference required. |
| 1 | **Allowed paths** | Exact dirs/files that may be created or edited. Nothing outside these paths. |
| 2 | **Blocking dependencies** | Other workstream(s) or steps that must be done first. |
| 3 | **Unblocks** | Which workstream(s) or steps are unlocked when this is done. |
| 4 | **Contract / API** | Function names, export surface, types, props, file names. Enough to implement without inferring. |
| 5 | **Data source & shape** | Where data comes from (getter, query, prop) and expected shape (type name or key fields). |
| 6 | **Out of scope / Don't do** | Explicit list of what is not in scope. |
| 7 | **Steps (ordered)** | Ordered implementation steps; each testable or demonstrable. |
| 8 | **Done criteria** | When the workstream is complete (testable). |
| 9 | **Acceptance criteria** | Numbered, testable criteria. |
| 10 | **Validation** | Command(s) (e.g. `pnpm codegen`, `pnpm test`) or manual steps to verify. |
| 11 | **Solution / discovery links** | Links to `02-solution/` and `01-discovery/` docs that define approach and contracts. |
| 12 | **Old code (2022-site)** | Paths in `2022-site/` for prior art / current state (from discovery). |

## Tickets = linear, self-contained, no cross-references in body

- Each ticket in `03-tickets/` is **self-contained** for Linear: scope, acceptance criteria, and validation are inlined; no references to other documents.
- **Do not reference other tickets by ID anywhere in the ticket.** Use **descriptive names** in description, scope, notes, **Blocking**, **Unblocks**, and **depends_on** (e.g. "CMS getters + exports", "core content block modules", "structured text"). Linear tickets are self-contained; no internal ticket IDs.
- **Ticket scoping:** Scope each ticket so it **does not conflict** with others: strict allowed paths, explicit out-of-scope, no overlapping edit areas. Two agents on two different tickets must not touch the same files or responsibilities.
- Ticket count = workstream count (29 and 29).

## Agent behaviour

- **Before implementing:** Read the **workstream** for the ticket (e.g. a1 → `02-workstreams/01-a1-client-types.md`). Confirm the workstream satisfies the checklist above.
- **During implementation:** Stay within allowed paths; follow the stated contract; do not do anything listed under "Out of scope".
- **After implementation:** Run the validation steps from the workstream and tick acceptance criteria.

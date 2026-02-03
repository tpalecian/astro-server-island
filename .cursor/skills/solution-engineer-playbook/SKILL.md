---
name: solution-engineer-playbook
description: Create and maintain a Solutions Engineering project playbook: generate the standard discovery → solution → implementation documentation structure, ask the core project questions, and update docs with the answers.
---

# Solution Engineer Playbook

Use this skill when starting a new project or resetting documentation structure. The workflow is **generate first, then ask questions, then update docs**.

## Workflow

1. **Generate the standard structure** (if missing) under `/documentation`:
   - `00-start-here/`
   - `01-discovery/` (feature-based)
   - `02-solution/` (feature-based)
   - `03-implementation/` (workstreams + ticket templates)
   - `05-reference/`
   - `wip/`
   - `99-archive/`

2. **Create starter docs** using the SEL format and front‑matter.
3. **Ask the core questions** below.
4. **Update the docs** with the answers, keeping Discovery = decisions/constraints and Solution = approach/delivery.
5. **Ensure the index docs** are up to date.

## Core Questions (generic)

Ask these in order and keep them concise:

1. **Project overview**
   - Goal in one sentence
   - Primary user/customer
   - Success criteria

2. **Scope & constraints**
   - In scope / out of scope
   - Hard constraints (timeline, budget, platforms, compliance)
   - Key risks/unknowns

3. **Systems & integrations**
   - Dependencies (CMS, APIs, auth, analytics, third‑party services)
   - Data sources

4. **Delivery & ownership**
   - Target timeline or milestones
   - Decision owner(s)
   - Implementation team/roles

5. **Design & UX**
   - Design system location (if any)
   - Figma or design source links (if any)

6. **Implementation preferences**
   - Preferred stack / repo constraints
   - Must‑follow architecture rules

## Document Rules

- **Discovery** = final decisions, scope, constraints, risks.
- **Solution** = approach, interfaces, delivery plan, success criteria.
- **Implementation** = workstreams + tickets; split large tickets into smaller subtasks.

## SEL Format (required)

Every plan doc should include:

1. Outcome & Business Value (why)
2. Context & Scope (what/where)
3. Solution Design (how, high level)
4. Delivery Plan (how, practical)

## Front‑matter (required)

```yaml
---
title: ...
phase: discovery | solution-design | implementation | operations | archived
status: draft | in-review | approved | superseded
owner: ...
last_updated: YYYY-MM-DD
depends_on: [...]
related_docs: [...]
tags: [...]
---
```

## Index Updates

Always update:
- `documentation/README.md`
- `documentation/00-start-here/handover-next-steps.md`
- `documentation/01-discovery/00-index.md`
- `documentation/02-solution/00-index.md`
- `documentation/03-implementation/00-index.md`

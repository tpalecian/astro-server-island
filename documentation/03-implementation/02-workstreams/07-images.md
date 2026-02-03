---
title: Workstream — Images and media
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/images-and-media.md
related_docs:
  - 03-implementation/03-tickets/h-images-media.md
tags: [implementation, workstream, images]
---

# Workstream — Images and media

## Scope
- Allowed paths: `apps/website/src/lib/`, media modules

## Dependencies
- Content blocks modules exist.

## Steps
1. Add shared image URL helper.
2. Update modules to use helper.

## Done criteria
- Media URLs consistently use Dato + Bunny strategy.

## Risks / gotchas
- Avoid module‑specific URL logic.


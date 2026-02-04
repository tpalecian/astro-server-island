---
title: Ticket A3 — service-dato models (superseded)
phase: implementation
status: superseded
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
tags: [implementation, ticket, cms]
---

# Ticket A3 — service-dato models (superseded)

---

## Description, Value & ACs

**Scope:** This ticket is **superseded**. No normaliser layer will be implemented; getters return typed query results directly from `types-dato.ts`. No separate "models" layer.

**Outcome:** N/A — workstream skipped.

**Value:** N/A.

**Acceptance criteria:** N/A.

---

## Feasibility & Dependencies

**Blocking:** None.  
**Unblocks:** None.

**Dependencies / risks:** Do not implement a normaliser or models layer; codegen and getters are sufficient.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Original scope was to migrate models from 2022-site; decision: no normaliser; getters return query results directly.

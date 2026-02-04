---
title: Discovery — Images and media
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs: []
tags: [discovery, images, media, cdn]
---

# Discovery — Images and media

## 1. Outcome & Business Value (why)

**Purpose:** Define the media delivery strategy for performance and consistency.

**Value:** Faster delivery and predictable image handling across modules.

**Success criteria:**
- All media URLs follow a single strategy.

## 2. Context & Scope (what/where)

**Current state:** 2022-site uses Dato media URLs.

**In scope:** CDN strategy and URL construction approach.

**Out of scope:** Specific image component implementation.

**Assumptions:**
- Media is served via Dato CDN.

**Risks & mitigations:**
- Risk: inconsistent URL params. Mitigation: single utility function in implementation.

## 3. Ideas, options & references

**Ideas / options explored:**
- Dato CDN + query params vs. imgix/Cloudinary (current infra: Dato + Bunny CDN).
- Single URL construction utility vs. ad-hoc per module (single utility for consistency).

**References & further reading:**
- Dato media API and URL formats; Bunny CDN docs.
- 2022-site media usage and CDN setup.

**Old code (2022-site) — current state / prior art:**

| What | Path (2022-site) |
|------|-------------------|
| Content components that render images/video | `2022-site/components/Content/` (e.g. `MediaCaption.vue`, `MediaCarousel.vue` — how Dato media URLs and params are used) |
| Any shared image/asset helper | 2022-site `plugins/`, `utils/`, or component imports (base URL, query params) |

Use these paths when auditing how the 2022-site builds media URLs (Dato + Bunny); the new solution uses a single URL helper in the app.

**Key information:**
- Dato media base URL and query params; CDN placement (Bunny in front of Dato).

---

For the exact approach, CDN/URL strategy, and delivery → see `02-solution/images-and-media.md`.

---
title: Solution — Images and media
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on:
  - 01-discovery/05-images-and-media.md
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [solution, images, media, cdn]
---

# Solution — Images and media

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/05-images-and-media.md`.

**This doc focuses on:** the **solution approach** and delivery shape for media handling.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/05-images-and-media.md` (scope, constraints, decisions).

**In scope here:** CDN usage pattern and URL construction approach.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- All media URLs use Dato CDN with standard params.
- Bunny CDN fronts all media delivery.
- Media modules rely on a shared URL helper.


**Proposed approach:**

- Use **Dato CDN + query params**, with **Bunny CDN** in front.
- Provide a single URL helper used by all media modules.

**Interfaces & data:**

- Media URL builder accepts Dato asset and returns optimized URL with standard params.

**Alternatives considered:**

- Imgix/Cloudinary. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Building a new media pipeline or custom CDN stack.

### References (exact)

**Informational (read before / during implementation):**

| What | Path or URL |
|------|--------------|
| Discovery (scope, constraints) | `documentation/01-discovery/05-images-and-media.md` |
| Dato CDN / Image API (params, base URL) | [Dato: Assets / external URL](https://www.datocms.com/docs/content-management-api/assets#external-url) |
| Bunny CDN | Document base URL and any rewrite rules in implementation ticket. |
| Implementation tickets | `documentation/03-implementation/03-tickets/h-images-media.md`, `fb1-media-single.md`, `fb2-media-multiple.md` |

**Planned locations (where to implement):**

| What | Path |
|------|------|
| URL helper (single place; all media modules use it) | `apps/website/src/lib/images.ts` or `apps/website/src/lib/media.ts` |
| Media modules (blocks that render images/video) | `apps/website/src/components/modules/` |

### Code examples (contract to implement)

**Implement a single URL helper** that accepts a Dato asset (or URL + params) and returns the full URL for `src`. All media modules must call this helper; no ad-hoc URL construction in templates.

```ts
// Implement in apps/website/src/lib/images.ts (or media.ts)
// Signature — exact params from Dato CDN docs; document in implementation ticket
export function getMediaUrl(asset: { url: string } | string, params?: { w?: number; h?: number; fit?: string }): string {
  const base = typeof asset === 'string' ? asset : asset.url
  // Append query params per Dato CDN; if Bunny fronts, same URL or rewritten per implementation
  return base
}
```

**Rule:** Every component that renders an image or video must use `getMediaUrl(block.image)` (or equivalent); no raw `block.image.url` in templates.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Define URL helper in app (e.g. `src/lib/images.ts`).
2. Update media modules to use the helper.

**Deliverables:**

- Shared URL builder and module usage documented.

**Validation:**

- Sample media renders with correct params and loads via Bunny CDN.

**Open questions / TBD:**

- None.

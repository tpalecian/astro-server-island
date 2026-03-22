---
title: Ticket FB1 — block media_single
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-22
depends_on: [CMS getters + exports, app container, core content block modules]
tags: [implementation, ticket, content-blocks]
---

# Ticket FB1 — block media_single

---

## Description, Value & ACs

**Scope (paths — F1 container pattern):** Implement **media_single** (`_modelApiKey`) using a **`*-block-container`** under `apps/website/src/components/blocks/`, a colocated **`format-*.ts`** (CMS shape → UI props), and presentational components in **`packages/ui`**. Register the block in **`apps/website/src/lib/blocks/block-container-loaders.ts`** under the key `media_single`. Block-specific **`sizes`** / layout wiring lives in **`media-single-block-container`** (e.g. `media-single-img-sizes.ts`); generic Dato aspect-ratio helpers and **`DatoAssetMedia`** live in **`packages/utilities`** (`@rotate/utilities/ui`, e.g. `media-utilities.ts`); CMS-only strings (e.g. displayType → layout) stay in the formatter. **No** data fetching inside the container; **no** ad-hoc URL construction in templates — use Dato CDN helpers (`buildDatoSrcset` / ticket **H** `getMediaUrl` when that ships). Use design-system tokens in UI.

**Outcome:** media_single block renders with props only; matches design intent.

**Value:** Single-media block with caption and display options.

**Acceptance criteria:**

| #   | Criterion                                             | Done |
| --- | ----------------------------------------------------- | ---- |
| AC1 | media_single module renders without data fetching.    | Yes  |
| AC2 | Props align with legacy component behaviour.          | Yes  |
| AC3 | Module uses design-system tokens (no ad-hoc styling). | Yes  |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports; app container; core content block modules.  
**Unblocks:** —

**Dependencies / risks:** Use media helper (images/media, ticket **H**) when available for URLs.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Render block in page with mock CMS data; compare to legacy and Figma (see Design & References).

---

## Design & References

**Figma (Rotate Presentation — Website layout, media block frame):** [Rotate Presentation WebsiteLayout — node 88-3545](https://www.figma.com/design/DWfUHaVMjp8pMg4Dhj5lgb/Rotate-Presentation-WebsiteLayout?node-id=88-3545&t=KEopb5HgFGqLQW5T-4)

**Implementation layout (reference):**

| Layer        | Location |
| ------------ | -------- |
| Container    | `apps/website/src/components/blocks/media-single-block-container/` (`index.astro`, `format-media-single.ts`, `media-single-img-sizes.ts`, `resolve-media-single-layout.ts`, …) |
| Shared helpers | `packages/utilities/src/ui/` (`media-utilities.ts`, `dato-asset-types.ts`, `grid-layout-tokens.ts`, `dato-responsive-image.ts`, …) |
| Core UI      | `packages/ui/src/blocks/media-single/` (`media-single.astro`, `media-single-types.ts`), `packages/ui/src/media/dato-asset.astro` |
| Block map    | `apps/website/src/lib/blocks/block-container-loaders.ts` → `media_single` |

---

## Notes

**Implementation / completion (2026-03-22):** Shipped **`media_single`** via `media-single-block-container` (formatter, CMS layout resolution, block-specific `sizes`), presentational **`packages/ui/src/blocks/media-single/`** + **`dato-asset`**, shared **`@rotate/utilities/ui`** (grid tokens, Dato srcset, `resolveMediaFrameAspectRatio`, `ratioToAspectRatioString`, `DatoAssetMedia`). Registered in **`block-container-loaders.ts`**. Figma reference in Design & References. Optional **`getMediaUrl`** (ticket **H**) remains a future alignment.

Steps: (1) Container + formatter map `media_single` block fields to `MediaSingleProps`. (2) Match legacy behaviour (caption, ratio, displayType, fullScreen, single asset) in the formatter + UI. (3) Register `media_single` in `block-container-loaders.ts`.

# Documentation

All plan-mode output and scoped documentation lives here. See `.cursor/rules/planning.mdc` for format rules.

## Current phase

We are in **Implementation**. This means:

- Source of truth lives in `03-implementation/` with references to Discovery and Solution.
- Discovery and Solution docs remain authoritative for decisions and design.

## Structure (lifecycle)

| Phase / Purpose | Location |
|---|---|
| Start here / entry point | `/documentation/00-start-here` |
| Discovery | `/documentation/01-discovery` |
| Solution design | `/documentation/02-solution` |
| Implementation | `/documentation/03-implementation` |
| Reference (supporting) | `/documentation/05-reference` |
| Work in progress | `/documentation/wip` |
| Archived / out of phase | `/documentation/99-archive` |

Plans use the SEL format: Outcome & Business Value → Context & Scope → Solution Design → Delivery Plan.

## Start here

- **Handover — next steps**: `00-start-here/handover-next-steps.md`
- **Cursor rules / agent guide**: `AGENTS.md` (project root), `.cursor/rules/`

## Discovery

- **Discovery index**: `01-discovery/00-index.md`
- **CMS and data**: `01-discovery/01-cms-and-data.md`
- **Content blocks and rendering**: `01-discovery/02-content-blocks-and-rendering.md`
- **Tracking and consent**: `01-discovery/03-tracking-and-consent.md`
- **SEO and routing**: `01-discovery/04-seo-and-routing.md`
- **Images and media**: `01-discovery/05-images-and-media.md`
- **Deployment and QA**: `01-discovery/06-deployment-and-qa.md`
- **Coverage checklist**: `01-discovery/07-coverage-checklist.md`

## Solution design

- **Solution design index**: `02-solution/00-index.md`
- **CMS service pattern and Dato centralisation**: `02-solution/cms-service-pattern-and-dato-centralisation.md`
- **Content blocks and inline blocks**: `02-solution/content-blocks-and-inline-blocks-plan.md`
- **External services and tracking**: `02-solution/external-services-and-tracking-plan.md`
- **SEO, sitemap, redirects, error pages**: `02-solution/seo-sitemap-redirects-error-pages-plan.md`
- **Images and media**: `02-solution/images-and-media.md`
- **Deployment and QA**: `02-solution/deployment-and-qa.md`

## Implementation

- **Implementation index**: `03-implementation/00-index.md`
- **Workstreams**: `03-implementation/02-workstreams/`
- **Ticket templates**: `03-implementation/03-tickets/`

## Reference

- **Dato Vue to service review**: `05-reference/dato-vue-to-service-review.md`

## Archive

Out-of-phase or superseded material belongs in `99-archive/`.

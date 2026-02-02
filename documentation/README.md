# Documentation

All plan-mode output and scoped documentation lives here. See [.cursor/rules/planning.mdc](.cursor/rules/planning.mdc).

## Structure

| Purpose               | Location                    |
|-----------------------|-----------------------------|
| Plans & docs (root)   | `/documentation`            |
| Drafts / in progress  | `/documentation/temporary`  |
| Final, grouped docs   | `/documentation/<group>`     |

- **temporary/** — Work in progress, drafts, unapproved. Move to a group when finalized.
- **technical/** — Technical specs, migration reviews, architecture-related docs.
- **overview/** — Holistic overviews, roadmap.
- **business/** — Business plans, strategy.

Plans use the STL format: Summary (leadership) → Context (holistic) → Technical/execution (actionable).

## Separate plans (do not merge)

These are **two distinct initiatives**. Keep them in separate documents; do not override or merge one into the other.

| Initiative | Document | Scope |
|------------|----------|--------|
| **CMS service pattern and Dato centralisation** | [technical/cms-service-pattern-and-dato-centralisation.md](technical/cms-service-pattern-and-dato-centralisation.md) | service-dato, @rotate/cms alias, getHomepage/getPageBySlug, architecture alignment |
| **Vue to Astro migration** | [temporary/vue-to-astro-migration.md](temporary/vue-to-astro-migration.md) | Phased migration of 2022-site to Astro (routes, components, design-system, containers/modules) |

The migration plan may reference the CMS pattern (e.g. "CMS access via @rotate/cms"); the CMS plan does not define the migration. Edit each doc only for its own scope.

## Parallel agents

To run **multiple agents at the same time**, use [temporary/parallel-agent-workstreams.md](temporary/parallel-agent-workstreams.md). It splits todos into four workstreams (A: service-dato package; B: app alias + container; C: 2022-site discovery; D: design-system + layout). Each agent picks one workstream and edits only those files; no overlap.

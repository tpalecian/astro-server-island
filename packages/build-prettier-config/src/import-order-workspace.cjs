/**
 * Shared import-order tail for Prettier (`@ianvs/prettier-plugin-sort-imports`).
 * Empty strings in `importOrder` = blank line between groups.
 *
 * **@rotate/*** (dependency-style stack — data → design tokens → UI → dev-only → any future scope):
 * 1. `@rotate/cms` — CMS / getters
 * 2. `@rotate/design-system/*` — tokens & global CSS paths
 * 3. `@rotate/ui/*` — presentational components
 * 4. `@rotate/utilities/*` — shared helpers (e.g. `ui/` subgroup)
 * 5. `@rotate/devtools/*` — dev-only
 * 6. `@rotate/*` — fallback for new workspace packages
 *
 * **@/*** (app alias — low-level → shell → features → anything else, e.g. pages):
 * 1. `@/lib` / `@/lib/*` — pure helpers (barrel + subpaths)
 * 2. `@/layouts/*` — layout entrypoints
 * 3. `@/components/*` — containers & local composition
 * 4. `@/*` — remaining app paths
 */

const rotatePackagesPrettier = [
	'^@rotate\\/cms(/.*)?$',
	'',
	'^@rotate\\/design-system/',
	'',
	'^@rotate\\/ui/',
	'',
	'^@rotate\\/utilities/',
	'',
	'^@rotate\\/devtools/',
	'',
	'^@rotate\\/',
	'',
]

const appAliasPrettier = [
	'^@\\/lib(/|$)',
	'',
	'^@\\/layouts\\/',
	'',
	'^@\\/components\\/',
	'',
	'^@\\/',
	'',
]

const relativePrettier = ['^[.]', '']

module.exports = {
	rotatePackagesPrettier,
	appAliasPrettier,
	relativePrettier,
}

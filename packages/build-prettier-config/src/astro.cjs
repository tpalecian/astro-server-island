/**
 * Astro Prettier configuration
 * Includes full plugin support for component and package.json formatting
 *
 * importOrder (output top → bottom):
 * 1. Builtins · 2. @astrojs/* + `astro` · 3. other node_modules
 * 4. @rotate/* (see `import-order-workspace.cjs`, includes `utilities`) · 5. @/* (lib → layouts → components → rest) · 6. relative
 * Empty strings = blank line between groups.
 */

const {
	rotatePackagesPrettier,
	appAliasPrettier,
	relativePrettier,
} = require('./import-order-workspace.cjs')
const { baseRules, baseOverrides } = require('./shared-rules.cjs')

const codeImports = [
	'<BUILTIN_MODULES>',
	'',
	'^@astrojs\\/',
	'^astro$',
	'',
	'<THIRD_PARTY_MODULES>',
	'',
	...rotatePackagesPrettier,
	...appAliasPrettier,
	...relativePrettier,
]

module.exports = {
	...baseRules,
	/** Single order for value + type imports so `@rotate/*` stays above `@/*` when both appear. */
	importOrder: [...codeImports],
	importOrderParserPlugins: ['typescript', 'jsx', 'explicitResourceManagement'],
	importOrderTypeScriptVersion: '5.8.2',
	plugins: [
		'prettier-plugin-astro',
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	overrides: baseOverrides,
}

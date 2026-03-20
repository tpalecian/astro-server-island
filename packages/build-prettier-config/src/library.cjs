/**
 * Library Prettier configuration
 * Minimal setup focused on code style consistency
 *
 * importOrder (output top → bottom), aligned with `astro.cjs`:
 * 1. Builtins · 2. other node_modules · 3. @rotate/* (split) · 4. @/* (split) · 5. relative
 * Single list so type-only and value imports share the same group order (matches ESLint `import/order`).
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
	'<THIRD_PARTY_MODULES>',
	'',
	...rotatePackagesPrettier,
	...appAliasPrettier,
	...relativePrettier,
]

module.exports = {
	...baseRules,
	importOrder: [...codeImports],
	importOrderParserPlugins: ['typescript', 'jsx', 'explicitResourceManagement'],
	importOrderTypeScriptVersion: '5.8.2',
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	overrides: baseOverrides,
}

/**
 * Base/Library Prettier configuration
 * Minimal setup with import sorting for TypeScript/JavaScript libraries
 */

const { baseRules, baseOverrides } = require('./shared-rules.cjs');

const codeImports = [
	'<BUILTIN_MODULES>',
	'<THIRD_PARTY_MODULES>',
	'',
	'^(@repo)(\\/.*)?$',
	'',
	// aliases
	'^~\\/', // ~/
	'^@\\/', // @/
	'',
	// Local (relative) imports
	'^[.]{2}$', // ..
	'^[.]{2}\\/', // ../
	'^[.]\\/(?!index)', // ./foo (but not ./index)
	'^[.]$', // .
	'^[.]\\/index$', // ./index
	'',
];

const typeImports = ['<TYPES>'].concat(
	codeImports.filter((i) => i !== '').map((i) => `<TYPES>${i}`),
);

module.exports = {
	...baseRules,
	importOrder: [...codeImports, ...typeImports],
	importOrderParserPlugins: ['typescript', 'jsx', 'explicitResourceManagement'],
	importOrderTypeScriptVersion: '5.8.2',
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	overrides: baseOverrides,
};

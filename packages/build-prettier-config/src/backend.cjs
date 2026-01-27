/**
 * Backend Prettier configuration
 * Tailored for Node.js and Cloudflare Workers with package.json formatting
 * Customized import sorting for backend services
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
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
	],
	overrides: baseOverrides,
};

/**
 * Shared Prettier configuration rules and overrides
 * Used as the base for all prettier-config variants
 * Import sorting rules are defined per-variant for customization
 */

const baseRules = {
	trailingComma: 'es5',
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	printWidth: 100,
	endOfLine: 'lf',
};

const baseOverrides = [
	{
		files: ['*.jsonc', '*.code-workspace'],
		options: {
			trailingComma: 'none',
		},
	},
	{
		files: 'Justfile',
		options: {
			useTabs: false,
		},
	},
	{
		files: '*.md',
		options: {
			useTabs: false,
		},
	},
	{
		files: ['mise.toml', '.mise.toml'],
		options: {
			alignEntries: true,
		},
	},
];

module.exports = {
	baseRules,
	baseOverrides,
};

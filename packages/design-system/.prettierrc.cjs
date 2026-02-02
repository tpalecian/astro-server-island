const config = require('@build/prettier-config/library')

module.exports = {
	...config,
	plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
}

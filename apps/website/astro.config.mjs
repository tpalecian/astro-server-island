import path from 'node:path'
import { fileURLToPath } from 'node:url'

import vercel from '@astrojs/vercel'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const websiteSrc = path.resolve(__dirname, 'src')
const monorepoRoot = path.resolve(__dirname, '../..')

/** Keep in sync with `apps/website/tsconfig.json` `compilerOptions.paths`. */
const websiteAliases = {
	'@': websiteSrc,
	'@rotate/cms': path.resolve(monorepoRoot, 'packages/service-dato/src/index.ts'),
	'@rotate/design-system': path.resolve(monorepoRoot, 'packages/design-system/src'),
	'@rotate/devtools': path.resolve(monorepoRoot, 'packages/devtools/src'),
	'@rotate/ui': path.resolve(monorepoRoot, 'packages/ui/src'),
	'@rotate/utilities': path.resolve(monorepoRoot, 'packages/utilities/src'),
}

export default defineConfig({
	output: 'server',
	adapter: vercel(),

	scopedStyleStrategy: 'where',

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: websiteAliases,
		},
	},
})

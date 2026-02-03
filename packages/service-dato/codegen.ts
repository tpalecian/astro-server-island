import { resolve } from 'path'
import { config as loadEnv } from 'dotenv'

import type { CodegenConfig } from '@graphql-codegen/cli'

const cwd = process.cwd()
loadEnv({ path: resolve(cwd, '.env') })
loadEnv({ path: resolve(cwd, '../../.env') })
loadEnv({ path: resolve(cwd, '../../apps/website/.env') })

const token = process.env.DATOCMS_API_KEY?.trim()
if (!token) {
	throw new Error(
		'DATOCMS_API_KEY is required for codegen. Set it in .env (e.g. apps/website/.env) or run: DATOCMS_API_KEY=your-readonly-token pnpm codegen'
	)
}

const config: CodegenConfig = {
	schema: [
		{
			'https://graphql.datocms.com': {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		},
	],
	documents: ['src/gql/**/*.graphql'],
	generates: {
		'src/types-dato.ts': {
			plugins: ['typescript', 'typescript-operations'],
			config: {
				skipTypename: true,
				enumsAsTypes: true,
			},
		},
	},
}

export default config

import { executeQuery as libExecuteQuery } from '@datocms/cda-client'
import type { DocumentNode } from 'graphql'

export type ExecuteQueryOptions = {
	token: string
	preview?: boolean
	[key: string]: unknown
}

/**
 * Execute a GraphQL query against Dato CDA.
 * Caller must pass `token` (app responsibility: read from env and pass).
 */
export async function executeQuery<T = unknown>(
	query: string | DocumentNode,
	options: ExecuteQueryOptions
): Promise<T> {
	const { token, preview, ...rest } = options
	return (await libExecuteQuery(query as DocumentNode, {
		...rest,
		token,
		includeDrafts: preview ?? false,
	})) as Promise<T>
}

import { executeQuery } from '../client'
import { QUERY_STUDIO_BY_SLUG, QUERY_THINKING_BY_SLUG, QUERY_WORK_BY_SLUG } from '../gql/queries'

import type {
	StudioBySlugQuery,
	ThinkingBySlugQuery,
	WorkBySlugQuery,
} from '../types-dato'
import type { GetterOptions } from '../types'

type PageBySlugResult =
	| WorkBySlugQuery['work']
	| ThinkingBySlugQuery['thinking']
	| StudioBySlugQuery['studio']

export async function getPageBySlug(
	category: string,
	slug: string,
	options: GetterOptions
): Promise<PageBySlugResult> {
	const variables = { slug }
	switch (category) {
		case 'work':
			return (
				(
					await executeQuery<WorkBySlugQuery>(QUERY_WORK_BY_SLUG, {
						...options,
						variables,
					})
				).work ?? null
			)
		case 'thinking':
			return (
				(
					await executeQuery<ThinkingBySlugQuery>(QUERY_THINKING_BY_SLUG, {
						...options,
						variables,
					})
				).thinking ?? null
			)
		case 'studio':
			return (
				(
					await executeQuery<StudioBySlugQuery>(QUERY_STUDIO_BY_SLUG, {
						...options,
						variables,
					})
				).studio ?? null
			)
		default:
			return null
	}
}

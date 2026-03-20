import { executeQuery } from '../client'
import { studioBySlugQuery, thinkingBySlugQuery, workBySlugQuery } from '../gql'
import type { GetterOptions } from '../types'
import type { StudioBySlugQuery, ThinkingBySlugQuery, WorkBySlugQuery } from '../types-dato'

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
					await executeQuery<WorkBySlugQuery>(workBySlugQuery, {
						...options,
						variables,
					})
				).work ?? null
			)
		case 'thinking':
			return (
				(
					await executeQuery<ThinkingBySlugQuery>(thinkingBySlugQuery, {
						...options,
						variables,
					})
				).thinking ?? null
			)
		case 'studio':
			return (
				(
					await executeQuery<StudioBySlugQuery>(studioBySlugQuery, {
						...options,
						variables,
					})
				).studio ?? null
			)
		default:
			return null
	}
}

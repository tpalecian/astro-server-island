import { executeQuery } from '../client'
import {
	QUERY_ALL_CATEGORIES,
	QUERY_ALL_STUDIOS_CATEGORY_CARDS,
	QUERY_ALL_THINKINGS_CATEGORY_CARDS,
	QUERY_ALL_WORKS_CATEGORY_CARDS,
	QUERY_CATEGORY_BY_SLUG,
	QUERY_HOMEPAGE_CARD_SLIDER,
} from '../gql/queries'

import type {
	AllCategoriesQuery,
	AllStudiosCategoryCardsQuery,
	AllThinkingsCategoryCardsQuery,
	AllWorksCategoryCardsQuery,
	CategoryBySlugQuery,
	HomepageCardSliderQuery,
} from '../types-dato'
import type { GetterOptions } from '../types'

export async function getCategoryBySlug(
	slug: string,
	options: GetterOptions
): Promise<CategoryBySlugQuery['category']> {
	const data = await executeQuery<CategoryBySlugQuery>(QUERY_CATEGORY_BY_SLUG, {
		...options,
		variables: { slug },
	})
	return data.category ?? null
}

export async function getAllCategories(
	options: GetterOptions
): Promise<AllCategoriesQuery['allCategories']> {
	const data = await executeQuery<AllCategoriesQuery>(QUERY_ALL_CATEGORIES, options)
	return data.allCategories ?? []
}

/** Category cards: "everything" = homepage card slider; else thinkings | works | studios. */
export async function getCategoryCards(
	slug: string,
	options: GetterOptions
): Promise<
	| HomepageCardSliderQuery['homepage']
	| AllThinkingsCategoryCardsQuery['allThinkings']
	| AllWorksCategoryCardsQuery['allWorks']
	| AllStudiosCategoryCardsQuery['allStudios']
	| null
> {
	if (slug === 'everything') {
		const data = await executeQuery<HomepageCardSliderQuery>(QUERY_HOMEPAGE_CARD_SLIDER, options)
		return data.homepage ?? null
	}
	switch (slug) {
		case 'thinkings':
			return (
				(
					await executeQuery<AllThinkingsCategoryCardsQuery>(
						QUERY_ALL_THINKINGS_CATEGORY_CARDS,
						options
					)
				).allThinkings ?? []
			)
		case 'works':
			return (
				(await executeQuery<AllWorksCategoryCardsQuery>(QUERY_ALL_WORKS_CATEGORY_CARDS, options))
					.allWorks ?? []
			)
		case 'studios':
			return (
				(
					await executeQuery<AllStudiosCategoryCardsQuery>(
						QUERY_ALL_STUDIOS_CATEGORY_CARDS,
						options
					)
				).allStudios ?? []
			)
		default:
			return null
	}
}

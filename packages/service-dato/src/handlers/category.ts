import { executeQuery } from '../client'
import {
	allCategoriesQuery,
	allStudiosCategoryCardsQuery,
	allThinkingsCategoryCardsQuery,
	allWorksCategoryCardsQuery,
	categoryBySlugQuery,
	homepageCardSliderQuery,
} from '../gql'
import type { GetterOptions } from '../types'
import type {
	AllCategoriesQuery,
	AllStudiosCategoryCardsQuery,
	AllThinkingsCategoryCardsQuery,
	AllWorksCategoryCardsQuery,
	CategoryBySlugQuery,
	HomepageCardSliderQuery,
} from '../types-dato'

export async function getCategoryBySlug(
	slug: string,
	options: GetterOptions
): Promise<CategoryBySlugQuery['category']> {
	const data = await executeQuery<CategoryBySlugQuery>(categoryBySlugQuery, {
		...options,
		variables: { slug },
	})
	return data.category ?? null
}

export async function getAllCategories(
	options: GetterOptions
): Promise<AllCategoriesQuery['allCategories']> {
	const data = await executeQuery<AllCategoriesQuery>(allCategoriesQuery, options)
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
		const data = await executeQuery<HomepageCardSliderQuery>(homepageCardSliderQuery, options)
		return data.homepage ?? null
	}
	switch (slug) {
		case 'thinkings':
			return (
				(
					await executeQuery<AllThinkingsCategoryCardsQuery>(
						allThinkingsCategoryCardsQuery,
						options
					)
				).allThinkings ?? []
			)
		case 'works':
			return (
				(await executeQuery<AllWorksCategoryCardsQuery>(allWorksCategoryCardsQuery, options))
					.allWorks ?? []
			)
		case 'studios':
			return (
				(await executeQuery<AllStudiosCategoryCardsQuery>(allStudiosCategoryCardsQuery, options))
					.allStudios ?? []
			)
		default:
			return null
	}
}

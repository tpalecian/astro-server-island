export {
	getCategoryBySlug,
	getAllCategories,
	getCategoryCards,
	getGlobals,
	getHomepage,
	getInfo,
	getNavigation,
	getNavigationHeader,
	getNavigationFooter,
	getPageBySlug,
	getRedirects,
	getRoutes,
} from './handlers'

export type { GetterOptions } from './types'

export type {
	AllCategoriesQuery,
	AllStudiosCategoryCardsQuery,
	AllThinkingsCategoryCardsQuery,
	AllWorksCategoryCardsQuery,
	CategoryBySlugQuery,
	GlobalsQuery,
	HomepageCardSliderQuery,
	HomeQuery,
	InfoQuery,
	NavigationFooterQuery,
	NavigationHeaderQuery,
	RedirectsQuery,
	RoutesQuery,
	StudioBySlugQuery,
	ThinkingBySlugQuery,
	WorkBySlugQuery,
} from './types-dato'

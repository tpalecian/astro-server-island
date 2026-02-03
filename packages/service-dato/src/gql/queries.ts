import blocks from './fragments/blocks.graphql?raw'
import inlineBlocks from './fragments/inline-blocks.graphql?raw'
import link from './fragments/link.graphql?raw'
import meta from './fragments/meta.graphql?raw'
import models from './fragments/models.graphql?raw'
import structuredText from './fragments/structured-text.graphql?raw'
import allCategories from './queries/all-categories.graphql?raw'
import allStudiosCards from './queries/all-studios-cards.graphql?raw'
import allThinkingsCards from './queries/all-thinkings-cards.graphql?raw'
import allWorksCards from './queries/all-works-cards.graphql?raw'
import categoryBySlug from './queries/category-by-slug.graphql?raw'
import globals from './queries/globals.graphql?raw'
import home from './queries/home.graphql?raw'
import homepageCardSlider from './queries/homepage-card-slider.graphql?raw'
import info from './queries/info.graphql?raw'
import navigationFooter from './queries/navigation-footer.graphql?raw'
import navigationHeader from './queries/navigation-header.graphql?raw'
import redirects from './queries/redirects.graphql?raw'
import routes from './queries/routes.graphql?raw'
import studioBySlug from './queries/studio-by-slug.graphql?raw'
import thinkingBySlug from './queries/thinking-by-slug.graphql?raw'
import workBySlug from './queries/work-by-slug.graphql?raw'

const FRAGMENTS = [meta, link, models, inlineBlocks, structuredText, blocks]
const withFragments = (query: string) => `${FRAGMENTS}\n${query}`

export const QUERY_HOME = withFragments(home)
export const QUERY_INFO = withFragments(info)
export const QUERY_ROUTES = withFragments(routes)
export const QUERY_GLOBALS = withFragments(globals)
export const QUERY_NAVIGATION_HEADER = withFragments(navigationHeader)
export const QUERY_NAVIGATION_FOOTER = withFragments(navigationFooter)
export const QUERY_ALL_CATEGORIES = withFragments(allCategories)
export const QUERY_CATEGORY_BY_SLUG = withFragments(categoryBySlug)
export const QUERY_HOMEPAGE_CARD_SLIDER = withFragments(homepageCardSlider)
export const QUERY_ALL_THINKINGS_CATEGORY_CARDS = withFragments(allThinkingsCards)
export const QUERY_ALL_WORKS_CATEGORY_CARDS = withFragments(allWorksCards)
export const QUERY_ALL_STUDIOS_CATEGORY_CARDS = withFragments(allStudiosCards)
export const QUERY_WORK_BY_SLUG = withFragments(workBySlug)
export const QUERY_THINKING_BY_SLUG = withFragments(thinkingBySlug)
export const QUERY_STUDIO_BY_SLUG = withFragments(studioBySlug)
export const QUERY_REDIRECTS = withFragments(redirects)

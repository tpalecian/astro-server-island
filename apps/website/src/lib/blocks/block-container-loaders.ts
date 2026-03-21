/**
 * Lazy loaders for `*-block-container` entries. Vite splits each import into its own chunk;
 * only loaders invoked for block types present on the page run for that request.
 */
/** Default export is an Astro component factory (typed loosely for dynamic import maps). */
export type BlockContainerModule = { default: unknown }

export const blockContainerLoaders: Record<string, () => Promise<BlockContainerModule>> = {
	media_single: () => import('@/components/blocks/media-single-block-container/index.astro'),
	quote: () => import('@/components/blocks/quote-block-container/index.astro'),
	text_lead: () => import('@/components/blocks/text-lead-block-container/index.astro'),
	text_half: () => import('@/components/blocks/text-half-block-container/index.astro'),
}

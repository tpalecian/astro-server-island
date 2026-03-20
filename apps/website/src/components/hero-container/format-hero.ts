import type { HomeQuery } from '@rotate/cms'

import type { HeroInlineVideo, HeroWord } from '@rotate/ui/hero/types'

import { buildSiteHrefFromDatoLink } from '@/lib/build-site-href-from-dato-link'
import { extractFirstCtaFromDatoHeroLink } from '@/lib/extract-first-cta-from-dato-hero-link'

const INLINE_VIDEO_FORMATS = ['mp4', 'webm', 'ogg', 'mov'] as const

const INLINE_VIDEO_URL_PATTERN = /\.(mp4|webm|ogg|mov)(\?|$)/i

const parseCyclingWordsForHero = (cyclingWords: string[]): HeroWord[] =>
	cyclingWords.flatMap((word) => {
		const value = word.trim()
		return value ? [{ value, letters: [...value] }] : []
	})

const isInlinePlayableVideo = (inlineVideo: HeroInlineVideo | null | undefined): boolean => {
	if (!inlineVideo?.url) return false
	const fmt = (inlineVideo.format ?? '').toLowerCase()
	return (
		(INLINE_VIDEO_FORMATS as readonly string[]).includes(fmt) ||
		INLINE_VIDEO_URL_PATTERN.test(inlineVideo.url)
	)
}

/**
 * Maps homepage hero fields to presentational props for `@rotate/ui` Hero: parsed cycling
 * `words`, inline video + playable flag, optional video link (PrimitiveLink), and primary CTA
 * from structured `heroLink` (not `heroVideoLink`).
 */
export function formatHero(homepage: HomeQuery['homepage']) {
	const rawWords = (homepage?.heroWords ?? []).flatMap((item) => {
		const word = item?.word ?? ''
		return word ? [word] : []
	})
	const words = parseCyclingWordsForHero(rawWords)

	const heroVideo = homepage?.heroVideo
	const inlineVideo =
		heroVideo?.url != null
			? {
					url: heroVideo.url,
					alt: heroVideo.alt ?? null,
					format: heroVideo.format ?? null,
				}
			: null

	const isInlineVideo = isInlinePlayableVideo(inlineVideo)

	const heroVideoLink = homepage?.heroVideoLink
	const videoLinkHref = buildSiteHrefFromDatoLink(heroVideoLink ?? null)
	const videoLink =
		videoLinkHref != null
			? {
					text: heroVideoLink?.text ?? 'Video',
					href: videoLinkHref,
				}
			: null

	const heroLink = homepage?.heroLink ?? null
	const action = extractFirstCtaFromDatoHeroLink(heroLink)

	return { words, isInlineVideo, inlineVideo, videoLink, action }
}

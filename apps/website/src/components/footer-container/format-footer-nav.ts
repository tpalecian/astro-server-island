import type { NavigationFooterQuery } from '@rotate/cms'

import { buildSiteHrefFromDatoLink } from '@/lib/build-site-href-from-dato-link'

/**
 * Parses CMS Typeform values into what the embed accepts: `form.typeform.com/to/{id}`,
 * a full `*.typeform.com/...` workspace URL, or a bare alphanumeric form id.
 */
function resolveTypeformPopupTarget(url: string | null | undefined): string | null {
	if (!url || typeof url !== 'string') return null
	const trimmed = url.trim()

	const toMatch = trimmed.match(/typeform\.com\/to\/([a-zA-Z0-9]+)/i)
	if (toMatch) return toMatch[1]

	if (/^https?:\/\/[a-z0-9-]+\.typeform\.com\/[a-zA-Z0-9-/]+/i.test(trimmed)) {
		return trimmed
	}

	if (/^[a-zA-Z0-9]{6,}$/.test(trimmed)) return trimmed

	return null
}

export function formatFooterNav(nav: NavigationFooterQuery['navigation']) {
	const footerLink = nav?.ctaLink
	const ctaHref = footerLink ? buildSiteHrefFromDatoLink(footerLink) : null
	const ctaTypeformTarget =
		resolveTypeformPopupTarget(footerLink?.url ?? null) ?? resolveTypeformPopupTarget(ctaHref)

	const ctaCopy = nav?.ctaCopy
	const cta =
		ctaCopy != null && (ctaHref != null || ctaTypeformTarget != null)
			? {
					copy: ctaCopy,
					link: {
						text: footerLink?.text ?? 'Get in touch',
						href: ctaHref ?? '#',
					},
					typeformTarget: ctaTypeformTarget,
				}
			: null

	const primaryLinks = (nav?.footerNavigationLinks ?? []).flatMap((link) => {
		const href = buildSiteHrefFromDatoLink(link)
		return href != null ? [{ text: link.text ?? 'Link', href }] : []
	})

	const secondaryLinks = (nav?.socialLinks ?? []).flatMap((link) => {
		const href = buildSiteHrefFromDatoLink(link)
		return href != null ? [{ text: link.text ?? href, href }] : []
	})

	return { cta, primaryLinks, secondaryLinks }
}

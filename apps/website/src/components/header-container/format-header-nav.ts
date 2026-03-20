import type { NavigationHeaderQuery } from '@rotate/cms'

import { buildSiteHrefFromDatoLink } from '@/lib/build-site-href-from-dato-link'

export function formatHeaderNav(nav: NavigationHeaderQuery['navigation']) {
	const pillLink = nav?.pillButtonLink
	const pillHref = pillLink ? buildSiteHrefFromDatoLink(pillLink) : null
	const primaryLink =
		pillLink != null && pillHref != null ? { text: pillLink.text ?? 'Link', href: pillHref } : null

	const circleLink = nav?.circleButtonLink
	const circleHref = circleLink ? buildSiteHrefFromDatoLink(circleLink) : null
	const hasCircleUi = circleLink != null || nav?.circleButtonIcon != null
	const iconLink = hasCircleUi
		? {
				href: circleHref ?? '#',
				ariaLabel: circleLink?.text ?? 'Link',
			}
		: null

	return { primaryLink, iconLink }
}

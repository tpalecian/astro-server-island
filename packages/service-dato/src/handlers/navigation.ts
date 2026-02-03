import { executeQuery } from '../client'
import { QUERY_NAVIGATION_FOOTER, QUERY_NAVIGATION_HEADER } from '../gql/queries'

import type { NavigationFooterQuery, NavigationHeaderQuery } from '../types-dato'
import type { GetterOptions } from '../types'

export async function getNavigationHeader(
	options: GetterOptions
): Promise<NavigationHeaderQuery['navigation']> {
	const data = await executeQuery<NavigationHeaderQuery>(QUERY_NAVIGATION_HEADER, options)
	return data.navigation ?? null
}

export async function getNavigationFooter(
	options: GetterOptions
): Promise<NavigationFooterQuery['navigation']> {
	const data = await executeQuery<NavigationFooterQuery>(QUERY_NAVIGATION_FOOTER, options)
	return data.navigation ?? null
}

export async function getNavigation(options: GetterOptions): Promise<{
	header: NavigationHeaderQuery['navigation']
	footer: NavigationFooterQuery['navigation']
}> {
	const [header, footer] = await Promise.all([
		getNavigationHeader(options),
		getNavigationFooter(options),
	])
	return { header, footer }
}

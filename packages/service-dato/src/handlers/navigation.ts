import { executeQuery } from '../client'
import { navigationFooterQuery, navigationHeaderQuery } from '../gql'
import type { GetterOptions } from '../types'
import type { NavigationFooterQuery, NavigationHeaderQuery } from '../types-dato'

export async function getNavigationHeader(
	options: GetterOptions
): Promise<NavigationHeaderQuery['navigation']> {
	const data = await executeQuery<NavigationHeaderQuery>(navigationHeaderQuery, options)
	return data.navigation ?? null
}

export async function getNavigationFooter(
	options: GetterOptions
): Promise<NavigationFooterQuery['navigation']> {
	const data = await executeQuery<NavigationFooterQuery>(navigationFooterQuery, options)
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

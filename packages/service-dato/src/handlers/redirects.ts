import { executeQuery } from '../client'
import { QUERY_REDIRECTS } from '../gql/queries'

import type { RedirectsQuery } from '../types-dato'
import type { GetterOptions } from '../types'

export async function getRedirects(
	options: GetterOptions
): Promise<RedirectsQuery['allRedirects']> {
	const data = await executeQuery<RedirectsQuery>(QUERY_REDIRECTS, options)
	return data.allRedirects ?? []
}

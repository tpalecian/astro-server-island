import { executeQuery } from '../client'
import { redirectsQuery } from '../gql'

import type { GetterOptions } from '../types'
import type { RedirectsQuery } from '../types-dato'

export async function getRedirects(
	options: GetterOptions
): Promise<RedirectsQuery['allRedirects']> {
	const data = await executeQuery<RedirectsQuery>(redirectsQuery, options)
	return data.allRedirects ?? []
}

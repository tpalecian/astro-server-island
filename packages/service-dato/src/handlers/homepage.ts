import { executeQuery } from '../client'
import { QUERY_HOME } from '../gql/queries'

import type { HomeQuery } from '../types-dato'
import type { GetterOptions } from '../types'

export async function getHomepage(options: GetterOptions): Promise<HomeQuery['homepage']> {
	const data = await executeQuery<HomeQuery>(QUERY_HOME, options)
	return data.homepage ?? null
}

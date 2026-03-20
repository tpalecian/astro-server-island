import { executeQuery } from '../client'
import { globalsQuery } from '../gql'
import type { GetterOptions } from '../types'
import type { GlobalsQuery } from '../types-dato'

export async function getGlobals(options: GetterOptions): Promise<GlobalsQuery> {
	return executeQuery<GlobalsQuery>(globalsQuery, options)
}

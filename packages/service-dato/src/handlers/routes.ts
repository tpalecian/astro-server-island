import { executeQuery } from '../client'
import { QUERY_ROUTES } from '../gql/queries'

import type { RoutesQuery } from '../types-dato'
import type { GetterOptions } from '../types'

export async function getRoutes(options: GetterOptions): Promise<RoutesQuery> {
	return executeQuery<RoutesQuery>(QUERY_ROUTES, options)
}

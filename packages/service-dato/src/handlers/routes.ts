import { executeQuery } from '../client'
import { routesQuery } from '../gql'

import type { GetterOptions } from '../types'
import type { RoutesQuery } from '../types-dato'

export async function getRoutes(options: GetterOptions): Promise<RoutesQuery> {
	return executeQuery<RoutesQuery>(routesQuery, options)
}

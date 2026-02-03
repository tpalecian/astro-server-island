import { executeQuery } from '../client'
import { QUERY_INFO } from '../gql/queries'

import type { InfoQuery } from '../types-dato'
import type { GetterOptions } from '../types'

export async function getInfo(options: GetterOptions): Promise<InfoQuery['infoPage']> {
	const data = await executeQuery<InfoQuery>(QUERY_INFO, options)
	return data.infoPage ?? null
}

import { executeQuery } from '../client'
import { infoQuery } from '../gql'

import type { GetterOptions } from '../types'
import type { InfoQuery } from '../types-dato'

export async function getInfo(options: GetterOptions): Promise<InfoQuery['infoPage']> {
	const data = await executeQuery<InfoQuery>(infoQuery, options)
	return data.infoPage ?? null
}

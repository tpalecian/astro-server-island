import { executeQuery } from '../client'
import { homeQuery } from '../gql'
import type { GetterOptions } from '../types'
import type { HomeQuery } from '../types-dato'

export async function getHomepage(options: GetterOptions): Promise<HomeQuery['homepage']> {
	const data = await executeQuery<HomeQuery>(homeQuery, options)
	return data.homepage ?? null
}

import { executeQuery } from "../client";
import { globalsQuery } from "../gql";
import type { GlobalsQuery } from "../types-dato";
import type { GetterOptions } from "../types";

export async function getGlobals(
	options: GetterOptions,
): Promise<GlobalsQuery> {
	return executeQuery<GlobalsQuery>(globalsQuery, options);
}

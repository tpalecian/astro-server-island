import { executeQuery } from "../client";
import { QUERY_GLOBALS } from "../gql/queries";
import type { GlobalsQuery } from "../types-dato";
import type { GetterOptions } from "../types";

export async function getGlobals(
	options: GetterOptions,
): Promise<GlobalsQuery> {
	return executeQuery<GlobalsQuery>(QUERY_GLOBALS, options);
}

/**
 * DatoCMS GraphQL client for server-side use.
 * Used by Astro containers only; no UI or framework code.
 *
 * Env: DATO_API_KEY (required), DATO_API_URL (optional, default delivery API).
 * Preview: pass preview: true or use DATO_API_URL that points to preview endpoint.
 */

const DEFAULT_ENDPOINT = "https://graphql.datocms.com";
const PREVIEW_ENDPOINT = "https://graphql.datocms.com/preview";

export type RequestOptions = {
	/** GraphQL query string */
	query: string;
	/** Optional variables for the query */
	variables?: Record<string, unknown>;
	/** Use preview API (draft content). Overrides endpoint if true. */
	preview?: boolean;
	/** Override endpoint (e.g. from env). If not set, uses DATO_API_URL or default. */
	endpoint?: string;
};

export type GraphQLResponse = {
	data?: Record<string, unknown>;
	errors?: Array<{ message: string; [key: string]: unknown }>;
};

/**
 * Whether the configured endpoint is the Dato preview API (draft content).
 * Derived from DATO_API_URL when it contains "/preview".
 */
export function isPreview(): boolean {
	const url = process.env.DATO_API_URL ?? "";
	return url.includes("/preview");
}

/**
 * Resolve the GraphQL endpoint from options and env.
 */
function resolveEndpoint(options: RequestOptions): string {
	if (options.endpoint) return options.endpoint;
	if (options.preview) return PREVIEW_ENDPOINT;
	const fromEnv = process.env.DATO_API_URL;
	if (fromEnv) return fromEnv;
	return DEFAULT_ENDPOINT;
}

/**
 * Low-level request: POST query to Dato, return raw GraphQL `data`.
 * Throws if the response contains `errors`.
 */
export async function request<T = Record<string, unknown>>(
	options: RequestOptions,
): Promise<T> {
	const endpoint = resolveEndpoint(options);
	const apiToken =
		process.env.DATO_API_KEY ?? process.env.DATO_CMS_READ_ONLY_API_TOKEN;
	if (!apiToken) {
		throw new Error(
			"Dato API token missing: set DATO_API_KEY or DATO_CMS_READ_ONLY_API_TOKEN",
		);
	}

	const body = JSON.stringify({
		query: options.query,
		variables: options.variables ?? {},
	});

	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiToken}`,
		},
		body,
	});

	if (!res.ok) {
		throw new Error(`Dato request failed: ${res.status} ${res.statusText}`);
	}

	const json = (await res.json()) as GraphQLResponse;
	if (json.errors?.length) {
		throw new Error(
			`Dato GraphQL errors: ${JSON.stringify(json.errors)}`,
		);
	}
	if (json.data == null) {
		throw new Error("Dato response missing data");
	}
	return json.data as T;
}

export type GetOptions<T> = {
	/** GraphQL query string */
	query: string;
	/** Normalise/validate raw response. Same props → same shape (referentially transparent). */
	model: (data: Record<string, unknown>) => T;
	/** Optional variables for the query */
	variables?: Record<string, unknown>;
	/** Use preview API */
	preview?: boolean;
	/** Override endpoint */
	endpoint?: string;
};

export type GetResult<T> = {
	/** Normalised data from model(data) */
	data: T;
	/** Raw GraphQL data (for debugging or further composition) */
	raw: Record<string, unknown>;
};

/**
 * Request + normalise: runs request(), then applies model(data).
 * Use in Astro containers: compose get() with app query and model only; no inline fetch or business logic.
 *
 * @example
 * // In a container (apps/website):
 * import { get } from '@rotate/service-dato'
 * import homepageQuery from '../gql/pages/home.gql'
 * import homepageModel from '../models/pages/home'
 * const { data } = await get({ query: homepageQuery, model: homepageModel })
 */
export async function get<T>(options: GetOptions<T>): Promise<GetResult<T>> {
	const raw = await request<Record<string, unknown>>({
		query: options.query,
		variables: options.variables,
		preview: options.preview,
		endpoint: options.endpoint,
	});
	const data = options.model(raw);
	return { data, raw };
}

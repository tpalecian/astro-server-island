import { gql } from 'graphql-tag'

export const redirectsQuery = gql(/* GraphQL */ `
	query Redirects {
		allRedirects {
			to
			from
			redirectType
		}
	}
`)

export default redirectsQuery

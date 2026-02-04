import { gql } from 'graphql-tag'

export const thinkingBySlugQuery = gql(/* GraphQL */ `
	query ThinkingBySlug($slug: String!) {
		thinking(filter: { slug: { eq: $slug } }) {
			slug
			title
		}
	}
`)

export default thinkingBySlugQuery

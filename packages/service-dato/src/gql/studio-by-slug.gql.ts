import { gql } from 'graphql-tag'

export const studioBySlugQuery = gql(/* GraphQL */ `
	query StudioBySlug($slug: String!) {
		studio(filter: { slug: { eq: $slug } }) {
			slug
			title
		}
	}
`)

export default studioBySlugQuery

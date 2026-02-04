import { gql } from 'graphql-tag'

export const categoryBySlugQuery = gql(/* GraphQL */ `
	query CategoryBySlug($slug: String!) {
		category(filter: { slug: { eq: $slug } }) {
			id
			slug
			filterText
			seoMetaTags: _seoMetaTags {
				attributes
				tag
				content
			}
		}
	}
`)

export default categoryBySlugQuery

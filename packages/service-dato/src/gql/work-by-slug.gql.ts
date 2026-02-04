import { gql } from 'graphql-tag'

export const workBySlugQuery = gql(/* GraphQL */ `
	query WorkBySlug($slug: String!) {
		work(filter: { slug: { eq: $slug } }) {
			slug
			title
		}
	}
`)

export default workBySlugQuery

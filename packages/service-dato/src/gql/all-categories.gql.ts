import { gql } from 'graphql-tag'

export const allCategoriesQuery = gql(/* GraphQL */ `
	query AllCategories {
		allCategories {
			id
			slug
			filterText
			filterOrder
		}
	}
`)

export default allCategoriesQuery

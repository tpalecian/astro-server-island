import { gql } from 'graphql-tag'

export const routesQuery = gql(/* GraphQL */ `
	query Routes {
		allThinkings(first: 100) {
			type: _modelApiKey
			slug
			category {
				slug
			}
		}
		allWorks(first: 100) {
			type: _modelApiKey
			slug
			category {
				slug
			}
		}
		allStudios(first: 100) {
			type: _modelApiKey
			slug
			category {
				slug
			}
		}
		infoPage {
			type: _modelApiKey
			slug
		}
		allCategories(first: 100) {
			type: _modelApiKey
			slug
		}
	}
`)

export default routesQuery

import { gql } from 'graphql-tag'

export const infoQuery = gql(/* GraphQL */ `
	query Info {
		infoPage {
			title
			slug
			seoMetaTags: _seoMetaTags {
				attributes
				tag
				content
			}
			heroTitle {
				value
			}
		}
	}
`)

export default infoQuery

import { print } from 'graphql'
import { gql } from 'graphql-tag'

import { MediaFragment } from './fragments'

export const categoryBySlugQuery = gql(/* GraphQL */ `
	query CategoryBySlug($slug: String!) {
		category(filter: { slug: { eq: $slug } }) {
			id
			slug
			filterText
			seo {
				title
				description
				image {
					...Media
				}
			}
			seoMetaTags: _seoMetaTags {
				attributes
				tag
				content
			}
		}
	}
	${print(MediaFragment)}
`)

export default categoryBySlugQuery

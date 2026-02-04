import { gql } from 'graphql-tag'

export const TypeFragment = gql(/* GraphQL */ `
	fragment Type on RecordInterface {
		id
		type: _modelApiKey
	}
`)

export const MediaFragment = gql(/* GraphQL */ `
	fragment Media on FileField {
		url
		alt
		width
		height
		format
		type: mimeType
		customData
	}
`)

export const SeoHomepageFragment = gql(/* GraphQL */ `
	fragment SeoHomepage on HomepageRecord {
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
`)

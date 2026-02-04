import { gql } from 'graphql-tag'

export const globalsQuery = gql(/* GraphQL */ `
	query Globals {
		homepage {
			backgroundColor {
				hex
			}
		}
		popUp {
			title
			ctaCopy
			ctaLink {
				text
				url
				record {
					... on CategoryRecord {
						slug
					}
					... on StudioRecord {
						category {
							slug
						}
						slug
					}
					... on ThinkingRecord {
						category {
							slug
						}
						slug
					}
					... on WorkRecord {
						category {
							slug
						}
						slug
					}
					... on InfoPageRecord {
						slug
					}
				}
			}
			popUpDelay
		}
	}
`)

export default globalsQuery

import { gql } from 'graphql-tag'

export const navigationFooterQuery = gql(/* GraphQL */ `
	query NavigationFooter {
		navigation {
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
			footerNavigationLinks {
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
			socialLinks {
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
		}
	}
`)

export default navigationFooterQuery

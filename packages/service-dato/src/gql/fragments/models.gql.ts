import { gql } from 'graphql-tag'

export const CardFragment = gql(/* GraphQL */ `
	fragment Card on CardRecord {
		id
		...Type
		cardType
		category {
			slug
		}
		title: heading {
			links {
				... on EmojiRecord {
					id
					type: __typename
					title
					media {
						...Media
					}
				}
			}
			value
		}
		subtitle: subHeading {
			links {
				... on EmojiRecord {
					id
					type: __typename
					title
					media {
						...Media
					}
				}
			}
			value
		}
		copy: description
		hasDarkText: darkText
		doubleWidth
		useHeroImage
		media {
			...Media
		}
		mediaHover {
			...Media
		}
		link {
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
`)

export const TagFragment = gql(/* GraphQL */ `
	fragment Tag on TagRecord {
		name
		cards {
			...Card
		}
	}
`)

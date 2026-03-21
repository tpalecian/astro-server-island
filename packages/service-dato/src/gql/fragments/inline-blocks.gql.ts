import { gql } from 'graphql-tag'

export const OnTagRecordFragment = gql(/* GraphQL */ `
	fragment OnTagRecord on TagRecord {
		id
		__typename
		name
		cards {
			...Card
		}
	}
`)

export const OnEmojiRecordFragment = gql(/* GraphQL */ `
	fragment OnEmojiRecord on EmojiRecord {
		id
		__typename
		title
		media {
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

export const OnWorkRecordFragment = gql(/* GraphQL */ `
	fragment OnWorkRecord on WorkRecord {
		id
		__typename
		slug
		title
		category {
			slug
		}
	}
`)

export const OnThinkingRecordFragment = gql(/* GraphQL */ `
	fragment OnThinkingRecord on ThinkingRecord {
		id
		__typename
		slug
		title
		category {
			slug
		}
	}
`)

export const OnStudioRecordFragment = gql(/* GraphQL */ `
	fragment OnStudioRecord on StudioRecord {
		id
		__typename
		slug
		title
		category {
			slug
		}
	}
`)

export const OnMegaHeadingRecordFragment = gql(/* GraphQL */ `
	fragment OnMegaHeadingRecord on MegaHeadingRecord {
		id
		__typename
		title
	}
`)

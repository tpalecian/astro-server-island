import { print } from 'graphql'
import { gql } from 'graphql-tag'

import {
	CardFragment,
	MediaFragment,
	OnCardSliderRecordFragment,
	OnEmojiRecordFragment,
	OnMediaMultipleRecordFragment,
	OnMediaSingleRecordFragment,
	OnMegaHeadingRecordFragment,
	OnQuoteRecordFragment,
	OnStatsRecordFragment,
	OnStudioRecordFragment,
	OnTagRecordFragment,
	OnTextHalfRecordFragment,
	OnTextLeadRecordFragment,
	OnThinkingRecordFragment,
	OnWorkRecordFragment,
	SeoHomepageFragment,
	TypeFragment,
} from './fragments'

export const homeQuery = gql(/* GraphQL */ `
	query Home {
		homepage {
			...SeoHomepage
			slug
			title
			backgroundColor {
				hex
			}
			heroWords {
				word
			}
			heroVideo {
				...Media
			}
			heroCursor
			heroVideoLink {
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
			heroLink {
				links {
					...OnWorkRecord
					...OnThinkingRecord
					...OnStudioRecord
				}
				value
			}
			content {
				... on QuoteRecord {
					...OnQuoteRecord
				}
				... on TextHalfRecord {
					...OnTextHalfRecord
				}
				... on TextLeadRecord {
					...OnTextLeadRecord
				}
				... on MediaSingleRecord {
					...OnMediaSingleRecord
				}
				... on MediaMultipleRecord {
					...OnMediaMultipleRecord
				}
				... on CardSliderRecord {
					...OnCardSliderRecord
				}
				... on StatsBlockRecord {
					...OnStatsRecord
				}
			}
		}
	}
	${print(TypeFragment)}
	${print(MediaFragment)}
	${print(SeoHomepageFragment)}
	${print(CardFragment)}
	${print(OnTagRecordFragment)}
	${print(OnEmojiRecordFragment)}
	${print(OnWorkRecordFragment)}
	${print(OnThinkingRecordFragment)}
	${print(OnStudioRecordFragment)}
	${print(OnMegaHeadingRecordFragment)}
	${print(OnQuoteRecordFragment)}
	${print(OnTextHalfRecordFragment)}
	${print(OnTextLeadRecordFragment)}
	${print(OnMediaSingleRecordFragment)}
	${print(OnMediaMultipleRecordFragment)}
	${print(OnCardSliderRecordFragment)}
	${print(OnStatsRecordFragment)}
`)

export default homeQuery

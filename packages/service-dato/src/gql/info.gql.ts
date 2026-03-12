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
	TypeFragment,
} from './fragments'

export const infoQuery = gql(/* GraphQL */ `
	query Info {
		infoPage {
			title
			slug
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
			heroTitle {
				links {
					...OnEmojiRecord
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

export default infoQuery

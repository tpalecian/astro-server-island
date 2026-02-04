import { gql } from 'graphql-tag'

export const OnQuoteRecordFragment = gql(/* GraphQL */ `
	fragment OnQuoteRecord on QuoteRecord {
		...Type
		name
		info: information
		copy: text {
			links {
				...OnTagRecord
				...OnEmojiRecord
				...OnThinkingRecord
				...OnWorkRecord
				...OnStudioRecord
				...OnMegaHeadingRecord
			}
			value
		}
	}
`)

export const OnTextHalfRecordFragment = gql(/* GraphQL */ `
	fragment OnTextHalfRecord on TextHalfRecord {
		...Type
		copy: text {
			links {
				...OnTagRecord
				...OnEmojiRecord
				...OnThinkingRecord
				...OnWorkRecord
				...OnStudioRecord
				...OnMegaHeadingRecord
			}
			value
		}
	}
`)

export const OnTextLeadRecordFragment = gql(/* GraphQL */ `
	fragment OnTextLeadRecord on TextLeadRecord {
		...Type
		pretitle
		copy: text {
			links {
				...OnTagRecord
				...OnEmojiRecord
				...OnThinkingRecord
				...OnWorkRecord
				...OnStudioRecord
				...OnMegaHeadingRecord
			}
			value
		}
		size
	}
`)

export const OnMediaSingleRecordFragment = gql(/* GraphQL */ `
	fragment OnMediaSingleRecord on MediaSingleRecord {
		...Type
		ratio
		isFullscreen: fullScreen
		displayType
		caption
		media: asset {
			...Media
		}
	}
`)

export const OnMediaMultipleRecordFragment = gql(/* GraphQL */ `
	fragment OnMediaMultipleRecord on MediaMultipleRecord {
		...Type
		ratio
		slideSize
		caption
		mediaSlides: assets {
			...Media
		}
	}
`)

export const OnCardSliderRecordFragment = gql(/* GraphQL */ `
	fragment OnCardSliderRecord on CardSliderRecord {
		...Type
		speed
		initialDirection
		cardSlides: cardSet {
			id
			title
			cards {
				...Card
			}
		}
	}
`)

export const OnStatsRecordFragment = gql(/* GraphQL */ `
	fragment OnStatsRecord on StatsBlockRecord {
		...Type
		stats {
			value
			unit
			label
		}
	}
`)

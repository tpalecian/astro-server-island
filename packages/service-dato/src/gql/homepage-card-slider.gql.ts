import { print } from 'graphql'
import { gql } from 'graphql-tag'

import {
	CardFragment,
	MediaFragment,
	OnCardSliderRecordFragment,
	SeoHomepageFragment,
	TypeFragment,
} from './fragments'

export const homepageCardSliderQuery = gql(/* GraphQL */ `
	query HomepageCardSlider {
		homepage {
			...SeoHomepage
			slug
			title
			content {
				... on CardSliderRecord {
					...OnCardSliderRecord
				}
			}
		}
	}
	${print(TypeFragment)}
	${print(MediaFragment)}
	${print(SeoHomepageFragment)}
	${print(CardFragment)}
	${print(OnCardSliderRecordFragment)}
`)

export default homepageCardSliderQuery

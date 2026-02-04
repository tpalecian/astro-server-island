import { print } from 'graphql'
import { gql } from 'graphql-tag'

import { CardFragment, MediaFragment, TypeFragment } from './fragments'

export const allWorksCategoryCardsQuery = gql(/* GraphQL */ `
	query AllWorksCategoryCards {
		allWorks(first: 100) {
			card {
				...Card
			}
		}
	}
	${print(TypeFragment)}
	${print(MediaFragment)}
	${print(CardFragment)}
`)

export default allWorksCategoryCardsQuery

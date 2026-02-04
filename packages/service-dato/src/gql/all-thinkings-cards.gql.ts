import { print } from 'graphql'
import { gql } from 'graphql-tag'

import { CardFragment, MediaFragment, TypeFragment } from './fragments'

export const allThinkingsCategoryCardsQuery = gql(/* GraphQL */ `
	query AllThinkingsCategoryCards {
		allThinkings(first: 100) {
			card {
				...Card
			}
		}
	}
	${print(TypeFragment)}
	${print(MediaFragment)}
	${print(CardFragment)}
`)

export default allThinkingsCategoryCardsQuery

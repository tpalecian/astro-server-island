import { print } from 'graphql'
import { gql } from 'graphql-tag'

import { MediaFragment, SeoHomepageFragment } from './fragments'

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
		}
	}
	${print(MediaFragment)}
	${print(SeoHomepageFragment)}
`)

export default homeQuery

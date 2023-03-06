import gql from 'graphql-tag';

import { media } from "../fragments/media";
export const homeAnimes = gql`
	query {
		trending: Page(page: 1, perPage: 6) {
			media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
				...media
			}
		}
		top: Page(page: 1, perPage: 10) {
			media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
				...media
			}
		}
	}
	${media}
`;

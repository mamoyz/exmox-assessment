import { mediaObject } from "../fragments/media";
export const searchAnimes = gql`
	query ($page: Int = 1, $search: String) {
		Page(page: $page, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				lastPage
				hasNextPage
			}
			media(search: $search,sort:SEARCH_MATCH) {
			${mediaObject}
			}
		}
	}
`;

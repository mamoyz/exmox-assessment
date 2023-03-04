import { media } from "../fragments/media";
export const animeByID = gql`
	query media($id: Int) {
		Media(id: $id) {
			...media
		}
	}
	${media}
`;

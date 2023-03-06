import kebabCase from "lodash/kebabCase";
export const slug = (title: string, id: string) => {
	return `/anime/${kebabCase(title)}/${id}/`;
};

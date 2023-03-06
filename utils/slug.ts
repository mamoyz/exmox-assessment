import kebabCase from "lodash/kebabCase";
export const slug = (title: string, id: number | string) => {
	return `/anime/${kebabCase(title)}/${id}/`;
};

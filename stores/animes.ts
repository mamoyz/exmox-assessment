import { defineStore, setActivePinia, createPinia } from "pinia";
setActivePinia(createPinia());
import { homeAnimes } from "~/graphql/queries/homeAnimes";
import { animeByID } from "~/graphql/queries/animeByID";
import { searchAnimes } from "~/graphql/queries/searchAnimes";

export const useAnimeStore = defineStore("useAnimeStore", () => {
	type Filters = {
		page: number;
		search: string;
	};

	type Response = {
		data: any;
		error: any;
	};
	const state = reactive({
		watchList: [],
	});

	const addToWatchList = (animeId: number) => {
		state.watchList.push(animeId);
	};

	const removeFromWatchList = (animeId: number) => {
		state.watchList = state.watchList.filter((item: number) => item !== animeId);
	};
	
	const getHomeAnimes = async () => {
		try {
			const { data, error } = (await useAsyncQuery(homeAnimes)) as Response;
			if (error.value) throw new Error(error.value as any);
			return data.value;
		} catch (error) {
			console.log(error);
		}
	};
	const getAnimeByID = async (animeId: number) => {
		try {
			const { data, error } = (await useAsyncQuery(animeByID, { id: animeId })) as Response;
			if (error.value) throw new Error(error.value as any);
			return data.value;
		} catch (error) {
			console.log(error);
		}
	};
	const searchInAnimes = async (filters: Filters) => {
		const { page, search } = filters;
		try {
			const { data, error } = (await useAsyncQuery(searchAnimes, {
				page,
				search,
			})) as Response;
			if (error.value) throw new Error(error.value as any);
			return { data };
		} catch (error) {
			console.log(error);
		}
	};
	return { state, getHomeAnimes, getAnimeByID, searchInAnimes, addToWatchList, removeFromWatchList };
});

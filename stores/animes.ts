import { defineStore, setActivePinia, createPinia } from "pinia";
setActivePinia(createPinia());
import { homeAnimes } from "~/graphql/queries/homeAnimes";
import { animeByID } from "~/graphql/queries/animeByID";
import { searchAnimes } from "~/graphql/queries/searchAnimes";

export const useAnimeStore = defineStore(
	"useAnimeStore",
	() => {
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

		const addToWatchList = (anime) => {
			state.watchList.push(anime);
		};

		const removeFromWatchList = (anime) => {
			state.watchList = state.watchList.filter((item) => item.id !== anime.id);
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
				return data?.value?.Page?.media
			} catch (error) {
				console.log(error);
			}
		};
		return { state, getHomeAnimes, getAnimeByID, searchInAnimes, addToWatchList, removeFromWatchList };
	},
	{
		persist: true,
	},
);

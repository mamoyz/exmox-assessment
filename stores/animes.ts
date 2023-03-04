import { defineStore, setActivePinia, createPinia } from "pinia";
setActivePinia(createPinia());

export const useAnimeStore = defineStore("useAnimeStore", {
	state: () => ({
		mamo: "mamo is the best",
	}),
	actions: {},
});

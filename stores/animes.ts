import { defineStore, setActivePinia, createPinia } from "pinia";
setActivePinia(createPinia());

export const useAnimeStore = defineStore("useAnimeStore", {
	state: () => ({}),
	actions: {},
});

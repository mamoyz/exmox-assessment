<template>
	<HomeHero :featuredAnime="featuredAnime" />
	<HomeAnimes :animes="animes" />
</template>

<script>
	import HomeHero from "~/components/HomeHero/index.vue";
	import HomeAnimes from "~/components/HomeAnimes/index.vue";
	import { useAnimeStore } from "~/stores/animes";
	export default {
		name: "HomePage",
		components: {
			HomeHero,
			HomeAnimes,
		},
		async setup() {
			const animeStore = useAnimeStore();
			const animes = ref({});
			const featuredAnime = ref({});
			const fetchHomeAnimes = async () => {
				const data = await animeStore.getHomeAnimes();
				animes.value = data;
				featuredAnime.value = data?.trending?.media[0];
			};
			await fetchHomeAnimes()
			return { animes, fetchHomeAnimes, featuredAnime };
		},
	};
</script>

<style lang="scss" scoped></style>

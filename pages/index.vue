<template>
	<div>
		<HomeHero :featuredAnime="featuredAnime" />
		<HomeAnimes />
	</div>
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
		setup() {
			const animeStore = useAnimeStore();
			const animes = ref();
			const fetchHomeAnimes = async () => {
				const homeAnimes = await animeStore.getHomeAnimes();
				animes.value = homeAnimes;
			};
			const featuredAnime = computed(() => {
				return animes.value?.data?.trending?.media[0];
			});
			onMounted(() => {
				setTimeout(() => {
					fetchHomeAnimes();
				}, 0);
			});

			return { animes, fetchHomeAnimes, featuredAnime };
		},
	};
</script>

<style lang="scss" scoped></style>

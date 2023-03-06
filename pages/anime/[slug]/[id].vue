<template>
	<section class="relative">
		<div class="container pt-48 pb-28">

			<nuxt-img class="image object-cover w-fit object-center h-full opacity-40 absolute z-0" :src="animeInfo?.coverImage.large || ' '" :width="1600" :height="600" />
			<h1 class="title">{{ animeInfo?.title?.english }}</h1>
			<div class="genres">
				{{ animeInfo?.genres?.join(", ") }}
			</div>
			<div class="score">
				{{ animeInfo?.averageScore }}
			</div>
			<div class="status">
				{{ animeInfo?.nextAiringEpisode.airingAt }}
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { useAnimeStore } from "~/stores/animes";
	import { useAsyncData } from "#imports";

	export default {
		name: "AnimePage",
		setup() {
			const route = useRoute();
			const animeInfo = ref();
			const { getAnimeByID } = useAnimeStore();
			const fetchAnimeInfo = async () => {
				const data = await getAnimeByID(+route.params.id);
				animeInfo.value = data.Media;
			};
			useAsyncData(fetchAnimeInfo);
			return {
				animeInfo,
				fetchAnimeInfo,
			};
		},
	};
</script>

<style scoped></style>

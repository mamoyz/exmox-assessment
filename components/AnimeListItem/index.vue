<template>
	<div class="text-white">
		<nuxt-link :to="animeSlug" class="text-white anime-link">
			<div class="img aspect-[3/4]">
				<nuxt-img class="image rounded-2xl" :src="image" />
			</div>
		</nuxt-link>

		<h4 class="title font-semibold text-lg mt-5">{{ title }}</h4>
		<p class="flex text-base text-gray-300 mt-1">
			Average Score
			<span class="score bg-indigo-600 rounded-full px-5 py-1 text-sm ml-2 font-bold">
				{{ averageScore }}
			</span>
		</p>
		<p class="text-base text-gray-300 mt-1">
			Genres:
			<span class="genres">
				{{ genres }}
			</span>
		</p>
		<p class="text-base text-gray-300 mt-1 status">
			{{ nextAiring }}
		</p>
		<FavoriteButton class="mt-3" :active="inWatchList" :id="id" />
	</div>
</template>

<script>
	import { slug } from "~/utils/slug";
	import { airing } from "~/utils/airing";
	import FavoriteButton from "~/components/FavoriteButton/index.vue";
	import { useAnimeStore } from "~/stores/animes";
	export default {
		name: "AnimeListItem",
		components: {
			FavoriteButton,
		},
		props: {
			anime: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			const { anime } = props;
			const id = anime.id;
			const image = anime.coverImage.large;
			const title = anime.title.english;
			const description = anime.description;
			const averageScore = anime.averageScore;
			const genres = anime.genres.join(", ");
			const nextAiring = computed(() => {
				return airing(anime);
			});
			const animeSlug = ref(slug(title, anime.id));
			const { state } = useAnimeStore();
			const inWatchList = computed(() => {
				return state.watchList.indexOf(id) > -1;
			});
			return {
				id,
				image,
				title,
				description,
				averageScore,
				genres,
				nextAiring,
				animeSlug,
				inWatchList,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.img {
		position: relative;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>

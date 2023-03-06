<template>
	<div class="text-white">
		<nuxt-link :to="animeSlug" class="text-white anime-link">
			<div class="img aspect-[3/4]">
				<nuxt-img class="image rounded-2xl" :src="image" />
			</div>
		</nuxt-link>

		<h4 class="title font-semibold text-lg mt-5">{{ title }}</h4>
		<p class="text-base text-gray-300 mt-1">
			Average Score:
			<span class="score">
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
		<FavoriteButton :active="inWatchList" />
	</div>
</template>

<script>
	import { slug } from "~/utils/slug";
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
			const image = anime.coverImage.large;
			const title = anime.title.english;
			const description = anime.description;
			const averageScore = anime.averageScore;
			const genres = anime.genres.join(", ");
			const nextAiring = computed(() => {
				const airingAt = (date) => {
					return "Airing at " + new Date(date * 1000).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
				};
				return anime.nextAiringEpisode ? airingAt(anime.nextAiringEpisode.airingAt) : "Not Airing";
			});
			const animeSlug = ref(slug(title, anime.id));
			const { state } = useAnimeStore();
			const inWatchList = computed(() => {
				return anime.id in state;
			});
			return {
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

<template>
	<nuxt-link :to="animeSlug" class="text-white anime-link">
		<div class="img">
			<nuxt-img class="image rounded-2xl" :src="image" />
		</div>
		<h4 class="title">{{ title }}</h4>
		<p class="score">{{ averageScore }}</p>
		<p class="genres">
			{{ genres }}
		</p>
		<p class="status">
			{{ nextAiring }}
		</p>
	</nuxt-link>
</template>

<script>
	import { slug } from "~/utils/slug";
	export default {
		name: "AnimeListItem",
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
				return anime.nextAiringEpisode ? anime.nextAiringEpisode.airingAt : "Not Airing";
			});
			const animeSlug = ref(slug(title, anime.id));
			return {
				image,
				title,
				description,
				averageScore,
				genres,
				nextAiring,
				animeSlug,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.image {
		width: 100%;
		height: 400px;
		position: relative;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>

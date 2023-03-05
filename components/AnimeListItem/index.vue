<template>
	<div>
		<nuxt-img class="image" :src="image" />
		<h4 class="title">{{ title }}</h4>
		<p class="description">{{ description }}</p>
		<p class="score">{{ averageScore }}</p>
		<p class="genres">
			{{ genres }}
		</p>
		<p class="status">
			{{ nextAiring }}
		</p>
	</div>
</template>

<script>
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
			return {
				image,
				title,
				description,
				averageScore,
				genres,
				nextAiring,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

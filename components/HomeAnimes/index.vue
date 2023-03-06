<template>
	<AnimeSlider title="Trending Animes" :animes="animes.trending?.media" />
	<AnimeSlider title="Top Animes" :animes="animes.top?.media" />
</template>

<script>
	import AnimeSlider from "~/components/AnimeSlider/index.vue";
	export default {
		name: "HomeAnimes",
		components: {
			AnimeSlider,
		},
		props: {
			animes: {
				type: Object,
				default: {
					trending: [],
					top: [],
				},
			},
		},

		setup(props) {
			const { trending, top } = toRefs(props.animes);
			return {
				trending,
				top,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

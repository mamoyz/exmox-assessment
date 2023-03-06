<template>
	<AnimeSlider />
	<AnimeSlider />
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

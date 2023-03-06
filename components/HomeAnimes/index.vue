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
		setup() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		<h2 class="title">{{ title }}</h2>
		<button class="prev"></button>
		<button class="next"></button>
		<AnimeListItem :key="item.id" v-for="item in animes" />
	</div>
</template>

<script>
	import AnimeListItem from "~/components/AnimeListItem/index.vue";
	export default {
		components: {
			AnimeListItem,
		},
		props: {
			title: {
				type: String,
				default: "",
			},
			animes: {
				type: Array,
				default: () => [],
			},
		},
		setup(props) {
			const { title, animes } = toRefs(props);

			return {
				title,
				animes,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

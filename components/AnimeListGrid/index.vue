<template>
	<div>
		<AnimeListItem :key="item.id" v-for="item in animes" />
	</div>
</template>

<script>
	import AnimeListItem from "~/components/AnimeListItem/index.vue";
	export default {
		name: "AnimeListGrid",
		components: {
			AnimeListItem,
		},
		props: {
			animes: {
				type: Array,
				default: () => [],
			},
		},
		setup(props) {
			const { animes } = toRefs(props);
			return {
				animes,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

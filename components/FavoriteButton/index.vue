<template>
	<button class="flex items-center favorite-button py-2 px-4 text-white rounded-full border border-white text-sm" :class="{ active }" @click.prevent="handleClick()">
		<svg class="mr-2" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve">
			<g><path :fill="active ? '#F9595F' : '#777'" d="M449.28 121.43a115.2 115.2 0 0 0-137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0-137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z"></path></g>
		</svg>
		<span v-if="!active">Add to Watchlist</span>
		<span v-else>Remove from Watchlist</span>
	</button>
</template>

<script>
	import { useAnimeStore } from "~/stores/animes";
	export default {
		name: "FavoriteButton",
		props: {
			active: {
				type: Boolean,
				default: false,
			},
			id: Number,
		},
		setup(props) {
			const { active, id } = toRefs(props);
			const { addToWatchList, removeFromWatchList } = useAnimeStore();
			const handleClick = () => {
				active.value ? removeFromWatchList(id.value) : addToWatchList(id.value);
			};
			return {
				active,
				handleClick,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

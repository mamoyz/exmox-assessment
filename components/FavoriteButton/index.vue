<template>
	<button class="favorite-button" :class="{ active }" @click.prevent="handleClick()">
		<span v-if="!active">Add to Watchlist</span>
		<span v-else>Remove from Watchlist</span>
	</button>
</template>

<script>
	import { useAnimeStore } from "~/stores/animes";
	export default {
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

<template>
	<section class="pt-48 pb-24">
		<div class="container">
			<h1 class="title text-5xl text-white font-bold">My Watchlist</h1>
			<div v-show="watchList?.length" class="flex flex-wrap -mx-3">
				<div class="w-full md:w-6/12 lg:w-3/12 px-3 mt-14" :key="item.id" v-for="item in watchList">
					<AnimeListItem :anime="item" />
				</div>
			</div>
			<div v-show="!watchList || watchList.length === 0" class="not-found mt-6">
				<h2 class="text-2xl text-white">No animes found in your watchlist</h2>
			</div>
		</div>
	</section>
</template>

<script>
	import { useAnimeStore } from "~/stores/animes";
	import AnimeListItem from "~/components/AnimeListItem/index.vue";
	export default {
		name: "MyWatchListPage",
		components: {
			AnimeListItem,
		},
		setup() {
			const { state } = useAnimeStore();
			const { watchList } = toRefs(state);
			return { watchList };
		},
	};
</script>

<style lang="scss" scoped></style>

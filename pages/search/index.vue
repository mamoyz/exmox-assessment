<template>
	<section class="pt-48 pb-24">
		<div class="container">
			<h1 class="title text-5xl text-white font-bold">Search Results for {{ keyword }}</h1>
			<div v-show="animes?.length" class="flex flex-wrap -mx-3">
				<div class="w-full md:w-6/12 lg:w-3/12 px-3 mt-14" :key="item.id" v-for="item in animes">
					<AnimeListItem :anime="item" />
				</div>
			</div>
			<div v-show="searched && animes?.length" class="text-center mt-16">
				<button @click.prevent="loadMore()" class="button">Load More</button>
			</div>
			<div v-show="searched && !animes?.length" class="not-found mt-6">
				<h2 class="text-2xl text-white">No animes found for {{ keyword }}</h2>
			</div>
		</div>
	</section>
</template>

<script>
	import AnimeListItem from "~/components/AnimeListItem/index.vue";
	import { useAnimeStore } from "~/stores/animes";

	export default {
		name: "SearchPage",
		components: {
			AnimeListItem,
		},
		setup() {
			const { searchInAnimes } = useAnimeStore();
			const route = useRoute();
			const keyword = computed(() => {
				return route.query.keyword;
			});
			const page = ref(1);
			const searched = ref(false);
			const animes = ref(null);
			const doSearch = async () => {
				const data = await searchInAnimes({
					search: keyword.value,
					page: page.value,
				});
				animes.value = data;
				searched.value = true;
			};
			const loadMore = async () => {
				page.value++;
				const data = await searchInAnimes({
					search: keyword.value,
					page: page.value,
				});
				animes.value = [...animes.value, ...data];
			};
			doSearch();
			return { animes, keyword, loadMore, searched };
		},
	};
</script>

<style lang="scss" scoped></style>

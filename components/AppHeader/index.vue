<template>
	<header class="z-50 pt-8 pb-16 fixed bg-transparent text-white top-0 w-full left-0 right-0">
		<div class="container">
			<div class="flex flex-row justify-between items-center">
				<div>
					<div id="app-logo" class="font-bold text-xl">
						<nuxt-link to="/">
							ExmoxAssessment
						</nuxt-link>
					</div>
				</div>
				<div class="flex items-center gap-10">
					<div>
						<form @submit.prevent="handleSearch(searchQuery)" id="search-bar" class="flex" novalidate>
							<input v-model="searchQuery" @focus="focus = true" @blur="focus = false" placeholder="Search Animes" :class="{ 'pr-24': focus }" class="px-6 py-2 outline-none text-black rounded-full transition-all" type="text" name="" id="" />
							<button id="submit-search" type="submit" class="p-4">
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 56.966 56.966" style="enable-background: new 0 0 512 512" xml:space="preserve">
									<g><path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#ffffff" data-original="#ffffff"></path></g>
								</svg>
							</button>
						</form>
					</div>
					<nuxt-link class="flex" to="/my-watchlist/" id="favorites-button">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="30" height="30" x="0" y="0" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve">
							<g><path fill="#F9595F" d="M449.28 121.43a115.2 115.2 0 0 0-137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0-137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z" data-original="#f9595f"></path></g>
						</svg>
						<span class="ml-2 text-red-400">My Watchlist ({{ watchList?.length }})</span>
					</nuxt-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import { useAnimeStore } from "~/stores/animes";

	export default {
		setup() {
			const router = useRouter();
			const focus = ref(false);
			const searchQuery = ref("");
			const { state } = useAnimeStore();
			const { watchList } = toRefs(state);
			const handleSearch = (keyword) => {
				if (!keyword || keyword.length < 3) return;
				router.push({
					path: "/search/",
					query: {
						keyword,
					},
				});
			};
			return {
				focus,
				watchList,
				handleSearch,
				searchQuery,
			};
		},
	};
</script>

<style lang="scss" scoped>
	header {
		background: rgb(0, 0, 0);
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%);
	}
</style>

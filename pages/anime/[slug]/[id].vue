<template>
	<section class="relative">
		<div class="container pt-48 pb-28">
			<div class="flex justify-between">
				<div class="w-4/12">
					<nuxt-img class="image aspect[2/3] rounded-xl" :src="animeInfo?.coverImage.large || ' '" :width="400" :height="600" />
				</div>
				<div class="w-7/12">
					<div class="flex justify-between items-start">
						<h1 class="title font-bold text-white text-4xl flex">{{ animeInfo?.title?.english }}</h1>
						<span class="flex items-center score text-white bg-green-600 text-2xl p-2 px-6 ml-4 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="19.96144433354753" x="0" y="0" viewBox="0 0 511.987 511" style="enable-background: new 0 0 512 512" xml:space="preserve">
								<g>
									<path
										d="M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0"
										fill="#ffffff"
										data-original="#ffffff"
									></path>
								</g>
							</svg>
							<span class="ml-2">
								{{ animeInfo?.averageScore }}
							</span>
						</span>
					</div>
					<div class="mt-8">
						<FavoriteButton :active="inWatchList" :anime="animeInfo" />
					</div>
					<div class="genres text-gray-300 text-lg mt-6">
						<span class="text-xs uppercase text-white bg-indigo-700 rounded-full mr-3 py-2 px-5 inline-block mt-3" v-for="genre in animeInfo?.genres" :key="genre">
							{{ genre }}
						</span>
					</div>
					<div v-html="animeInfo?.description" class="mt-8 text-gray-300 text-base" />

					<div class="status text-gray-300 font-bold mt-8">
						{{ airingAt }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { useAsyncData } from "#imports";
	import FavoriteButton from "~/components/FavoriteButton/index.vue";
	import { useAnimeStore } from "~/stores/animes";
	import { airing } from "~/utils/airing";

	export default {
		name: "AnimePage",
		components: {
			FavoriteButton,
		},
		setup() {
			const route = useRoute();
			const animeInfo = ref();
			const { getAnimeByID } = useAnimeStore();
			const { state } = useAnimeStore();

			const fetchAnimeInfo = async () => {
				const data = await getAnimeByID(+route.params.id);
				animeInfo.value = data.Media;
			};

			const inWatchList = computed(() => {
				return state.watchList.some((anime) => anime.id === animeInfo?.value?.id);
			});
			const airingAt = computed(() => {
				return airing(animeInfo?.value);
			});
			useAsyncData(fetchAnimeInfo);
			return {
				animeInfo,
				fetchAnimeInfo,
				inWatchList,
				airingAt,
			};
		},
	};
</script>

<style scoped></style>

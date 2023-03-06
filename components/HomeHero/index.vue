<template>
	<section class="relative">
		<nuxt-img class="object-cover w-fit object-center h-full opacity-40 absolute z-0" id="featured-anime-banner" :src="bannerImage || ' '" :width="1600" :height="600" />
		<div class="container pt-48 pb-28 relative z-10">
			<span class="block text-white text-sm uppercase tracking-widest">Featured Anime</span>
			<h1 class="text-white uppercase font-bold text-5xl mt-3" id="featured-anime-title">{{ title?.english }}</h1>
			<div class="text-gray-300 text-lg lg:max-w-4xl mt-5 leading-relaxed desc" id="featured-anime-description" v-html="description" />
			<nuxt-link
				class="button mt-8"
				id="hero-button"
				target="_blank"
				:to="{
					path: animeSlug,
				}"
			>
				More Info
			</nuxt-link>
		</div>
	</section>
</template>

<script lang="ts">
	import { slug } from "~/utils/slug";
	export default {
		name: "HomeHero",
		props: {
			featuredAnime: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			const { bannerImage, title, description, id } = toRefs(props.featuredAnime);
			const animeSlug = computed(() => slug(title?.value?.english, id?.value));
			return { bannerImage, title, description, animeSlug };
		},
	};
</script>

<style lang="scss" scoped>
	.desc {
		::v-deep(br) {
			display: none;
		}
	}
</style>

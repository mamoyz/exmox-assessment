<template>
	<div v-if="featuredAnime">
		<nuxt-img id="featured-anime-banner" :src="bannerImage || ' '" :width="1600" :height="600" />
		<h1 id="featured-anime-title">{{ title?.english }}</h1>
		<p id="featured-anime-description">{{ description }}</p>
		<nuxt-link id="hero-button" :to="`anime/${id}`">More Info</nuxt-link>
	</div>
</template>

<script lang="ts">
	export default {
		name: "HomeHero",
		props: {
			featuredAnime: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			if (!props.featuredAnime) return;
			console.log(props.featuredAnime);
			
			
			const { bannerImage, title, description, id } = toRefs(props.featuredAnime);
			return { bannerImage, title, description, id };
		},
	};
</script>

<style lang="scss" scoped></style>

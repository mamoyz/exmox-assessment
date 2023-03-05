<template>
	<div>
		<nuxt-img id="featured-anime-banner" :src="bannerImage" :width="1600" :height="600" />
		<h1 id="featured-anime-title">{{ title }}</h1>
		<p id="featured-anime-description">{{ description }}</p>
		<nuxt-link id="hero-button" :to="`anime/${id}`">More Info</nuxt-link>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			featuredAnime: {
				type: Object,
				required: true,
				default: {
					title: "Test Title",
					description: "Test Description",
					bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114129-ZsLDkdwaYeJY.jpg",
					id: "12345",
				},
			},
		},
		setup(props) {
			const { bannerImage, title, description, id } = toRefs(props.featuredAnime);
			return { bannerImage, title, description, id };
		},
	};
</script>

<style lang="scss" scoped></style>

<template>
	<section class="py-16 border-b border-gray-700">
		<div class="container relative">
			<h2 class="title text-3xl text-white mb-10">{{ title }}</h2>
			<button class="prev">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="50" height="50" x="0" y="0" viewBox="0 0 256 256" style="enable-background: new 0 0 512 512" xml:space="preserve">
					<g><path d="M207.093 30.187 176.907 0l-128 128 128 128 30.186-30.187L109.28 128z" fill="#FFFFFF" data-original="#000000"></path></g>
				</svg>
			</button>
			<button class="next">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="50" height="50" x="0" y="0" viewBox="0 0 256 256" style="enable-background: new 0 0 512 512" xml:space="preserve">
					<g><path d="M79.093 0 48.907 30.187 146.72 128l-97.813 97.813L79.093 256l128-128z" fill="#FFFFFF" data-original="#000000"></path></g>
				</svg>
			</button>
			<swiper-container v-bind="sliderSettings">
				<swiper-slide :key="item.id" v-for="item in animes">
					<AnimeListItem :anime="item" />
				</swiper-slide>
			</swiper-container>
		</div>
	</section>
</template>

<script>
	import { register } from "swiper/element/bundle";
	register();
	import AnimeListItem from "~/components/AnimeListItem/index.vue";
	export default {
		name: "AnimeSlider",
		components: {
			AnimeListItem,
		},
		props: {
			title: {
				type: String,
				default: "",
			},
			animes: {
				type: Array,
				default: () => [],
			},
		},
		setup(props) {
			const { title, animes } = toRefs(props);
			const sliderSettings = {
				slidesPerView: 1,
				spaceBetween: 40,
				navigation: {
					nextEl: ".next",
					prevEl: ".prev",
				},
				breakpoints: {
					1024: {
						slidesPerView: 4,
					},
				},
			};
			return {
				title,
				animes,
				sliderSettings,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.next,
	.prev {
		position: absolute;
		top:250px;
		z-index: 50;
	}
	.next {
		right: 0;
		transform: translate(120%, -50%);
	}
	.prev {
		left: 0;
		transform: translate(-120%, -50%);
	}
</style>

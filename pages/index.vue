<template>
	<div>
		<HomeHero />
		<HomeAnimes />
	</div>
</template>

<script>
	import HomeHero from "@/components/HomeHero/index.vue";
	import HomeAnimes from "@/components/HomeAnimes/index.vue";
	export default {
		components: {
			HomeHero,
			HomeAnimes,
		},
	};
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		<HomeHero />
		<HomeAnimes />
	</div>
</template>

<script>
	import HomeHero from "@/components/HomeHero";
	import HomeAnimes from "@/components/HomeAnimes";
	export default {
		components: {
			HomeHero,
			HomeAnimes,
		},
	};
</script>

<style lang="scss" scoped></style>

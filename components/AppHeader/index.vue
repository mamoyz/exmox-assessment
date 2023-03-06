<template>
	<header class="z-50 pt-8 pb-16 fixed bg-transparent text-white top-0 w-full left-0 right-0">
		<div class="container">
			<div class="flex flex-row justify-between items-center">
				<div>
					<div id="app-logo">ExmoxAssessment</div>
				</div>
				<div class="flex items-center gap-10">
					<div>
						<form id="search-bar">
							<input type="text" name="" id="" />
						</form>
					</div>
					<nuxt-link to="/" id="favorites-button">Favorites</nuxt-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		setup() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	header {
		background: rgb(0, 0, 0);
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%);
	}
</style>

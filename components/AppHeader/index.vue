<template>
	<header class="py-10 fixed bg-transparent text-white top-0 w-full left-0 right-0 border-b-2 border-gray-700">
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

<style lang="scss" scoped></style>

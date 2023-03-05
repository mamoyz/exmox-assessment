<template>
	<button class="favorite-button" :class="{ active }"></button>
</template>

<script>
	export default {
		props: {
			active: {
				type: Boolean,
				default: false,
			},
		},
		setup(props) {
			const { active } = toRefs(props);
			return {
				active,
			};
		},
	};
</script>

<style lang="scss" scoped></style>

<template>
	<div class="tooltip-container" :class="{ show }">{{ content }}</div>
</template>

<script>
export default {
	name: "Tooltip",
	props: {
		content: String,
		show: Boolean,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.tooltip-container {
	font-size: 0.75rem;
	font-weight: 600;
	padding: 8px 12px;
	color: $bg-color-main;
	border-radius: 4px;
	position: absolute;
	top: -40px;
	background-color: $font-color;
	opacity: 0;
	transition: opacity 0.2s ease;

	&.show {
		opacity: 1;
	}
}
</style>

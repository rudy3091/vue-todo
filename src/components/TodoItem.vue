<template>
	<div class="item-container">
		<div class="name">{{ name }}</div>
		<div class="due">{{ due }}</div>
	</div>
</template>

<script>
export default {
	name: "TodoItem",
	props: {
		name: String,
		due: String,
		done: Boolean,
	},
	data() {
		return {};
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.item-container {
	@include flex-center;

	font-size: 1.25rem;

	.due {
		margin-left: 30px;
	}
}
</style>

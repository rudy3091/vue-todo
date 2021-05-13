<template>
	<main class="body-container">
		<TodoItem name="go to sleep" due="210514" />
	</main>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
	name: "Body",
	components: {
		TodoItem,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.body-container {
	@include flex-center;
	flex-direction: column;
}
</style>

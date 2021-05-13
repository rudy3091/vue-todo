<template>
	<section class="todo-container">
		<TodoItem name="go to sleep" due="210514" />
	</section>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
	name: "TodoContainer",
	components: {
		TodoItem,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.todo-container {
	padding: 20px;
	border: 1px solid $font-color;
}
</style>

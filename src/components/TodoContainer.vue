<template>
	<section class="todo-container">
		<TodoItem name="go to sleep" due="210514" />
		<TodoItem name="finishing this project" due="210521" />
	</section>
	<section class="todo-create">
		<AddTodo />
	</section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
	name: "TodoContainer",
	components: {
		TodoItem,
		AddTodo,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.todo-container {
	width: 80vw;
	padding: 10px 20px;
}
</style>

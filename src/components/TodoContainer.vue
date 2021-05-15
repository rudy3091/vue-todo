<template>
	<LoadingSpinner
		v-bind:width="50"
		v-bind:height="50"
		v-bind:loading="loading"
	/>
	<section class="todo-container">
		<TodoItem
			v-for="todo in todos"
			v-bind:key="todo.id"
			v-bind:name="todo.content"
			v-bind:due="todo.due"
		/>
	</section>
	<section class="todo-create">
		<AddTodo />
	</section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import LoadingSpinner from "./LoadingSpinner.vue";

import axios from "axios";

export default {
	name: "TodoContainer",
	components: {
		TodoItem,
		AddTodo,
		LoadingSpinner,
	},
	data() {
		return {
			loading: true,
			todos: [],
		};
	},
	created() {
		axios
			.get("http://localhost:8081/api/todos")
			.then((res) => (this.todos = res.data))
			.then(() => (this.loading = false))
			.catch((err) => console.error(err));
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

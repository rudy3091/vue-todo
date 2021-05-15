<template>
	<section class="todo-container">
		<div v-for="todo in todos" v-bind:key="todo.id">
			<TodoItem v-bind:name="todo.content" v-bind:due="todo.due" />
		</div>
	</section>
	<section class="todo-create">
		<AddTodo />
	</section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import axios from "axios";

export default {
	name: "TodoContainer",
	components: {
		TodoItem,
		AddTodo,
	},
	data() {
		return {
			todos: [],
		};
	},
	methods: {
		fetchTodos() {
			axios
				.get("http://localhost:8081/api/todos")
				.then((res) => (this.todos = res.data));
		},
	},
	created() {
		axios
			.get("http://localhost:8081/api/todos")
			.then((res) => (this.todos = res.data));
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

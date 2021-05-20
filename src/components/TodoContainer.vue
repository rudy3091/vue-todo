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
			v-bind:tid="todo.id"
			v-bind:name="todo.content"
			v-bind:due="todo.due"
			v-bind:done="todo.done"
			@updated="updateProps($event)"
		/>
	</section>
	<section class="todo-create">
		<AddTodo @posted="render($event)" />
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
	methods: {
		sendGetRequest() {
			axios
				.get("http://localhost:8081/api/todos")
				.then((res) => (this.todos = res.data))
				.then(() => (this.loading = false))
				.catch((err) => console.error(err));
		},
		render(e) {
			this.todos.push(e);
		},
		updateProps($event) {
			const filtered = this.todos.filter(todo => todo.id === $event.id)[0];
			filtered.content = $event.content;
			filtered.due = $event.due;
			filtered.done = $event.done;
		}
	},
	created() {
		this.sendGetRequest();
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

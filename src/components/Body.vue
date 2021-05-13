<template>
	<main class="body-container">
		<TodoContainer />
	</main>
</template>

<script>
import TodoContainer from "./TodoContainer.vue";

export default {
	name: "Body",
	components: {
		TodoContainer,
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

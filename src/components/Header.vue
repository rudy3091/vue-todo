<template>
	<div>
		<h1>{{ hello }}</h1>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			hello: "Hello World!",
		};
	},
};
</script>

<style scoped lang="scss">
h1 {
	font-size: 5rem;
}
</style>

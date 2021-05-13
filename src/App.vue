<template>
	<Header />
	<Body />
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
	name: "App",
	components: {
		Header,
		Body,
	},
};
</script>

<style lang="scss">
@import "./styles/mixins.scss";

html,
body {
	margin: 0;
	width: 100%;
	height: 100%;

	@include flex-center;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>

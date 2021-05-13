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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;900&display=swap');
@import "./styles/mixins.scss";
@import "./styles/colors.scss";

html,
body {
	margin: 0;
	width: 100%;
	height: 100%;

	@include flex-center;
	background-color: $bg-color-main;
}

#app {
	font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>

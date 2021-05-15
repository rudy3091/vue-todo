<template>
	<header>
		<div class="time-container">
			<TimeIndicator hour="10" minute="10" isFormat24 isAm />
		</div>
		<h1>Good {{ greeting }} {{ name }}!</h1>
	</header>
</template>

<script>
import TimeIndicator from "./TimeIndicator.vue";

export default {
	name: "Header",
	components: {
		TimeIndicator,
	},
	data() {
		return {
			name: "rudy",
		};
	},
	computed: {
		greeting() {
			const date = new Date();
			const h = date.getHours();
			if (7 <= h && h <= 10) return "morning";
			else if (10 < h && h <= 17) return "afternoon";
			else if (17 < h && h <= 22) return "Evening";
			else return "night";
		},
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.time-container {
	@include flex-center;
	margin-top: 25vh;
}

h1 {
	font-size: 4rem;
	text-align: center;
	margin: 45px;
}
</style>

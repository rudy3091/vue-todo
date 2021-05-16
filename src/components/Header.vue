<template>
	<header>
		<div class="time-container">
			<TimeIndicator v-bind:date="date" />
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
			date: new Date(),
			tick: 0,
		};
	},
	computed: {
		greeting() {
			const h = this.date.getHours();
			if (7 <= h && h <= 10) return "morning";
			else if (10 < h && h <= 17) return "afternoon";
			else if (17 < h && h <= 22) return "Evening";
			else return "night";
		},
	},
	methods: {
		setTimer() {
			const self = this;
			this.tick = setInterval(() => {
				self.date = new Date();
			}, 1000);
		},
	},
	created() {
		this.setTimer();
	},
	beforeUnmount() {
		clearInterval(this.tick);
	}
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.time-container {
	@include flex-center;
	margin-top: 15vh;
}

h1 {
	font-size: 4rem;
	text-align: center;
	margin: 45px;
}
</style>

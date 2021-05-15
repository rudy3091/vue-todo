<template>
	<header>
		<div class="time-container">
			<div class="sun"></div>
			<div class="moon">
				<div class="moon-inner"></div>
			</div>
		</div>
		<h1>Good {{ greeting }} {{ name }}!</h1>
	</header>
</template>

<script>
export default {
	name: "Header",
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

	& > div {
		margin: 0 30px;
	}

	.sun {
		@include circle(50px, 50px, $font-color);
	}

	.moon {
		@include circle(50px, 50px, $font-color);

		.moon-inner {
			@include circle(25px, 25px, $bg-color-main);
		}
	}
}

h1 {
	font-size: 4rem;
	text-align: center;
	margin: 45px;
}
</style>

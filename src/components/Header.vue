<template>
	<header>
		<div class="time-container">
			<div class="circle"></div>
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
			name: "rudy"
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
		}
	}
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.time-container {
	@include flex-center;
	
	& > div {
		margin: 0 30px;
	}

	.circle {
		@include circle(50px, 50px, #f88);
	}

	.moon {
		@include circle(50px, 50px, #fd5);

		.moon-inner {
			@include circle(25px, 25px, #fff);
		}
	}
}

h1 {
	font-size: 4rem;
}
</style>

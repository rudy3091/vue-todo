<template>
	<div class="container">
		<div class="sun"></div>
		<div class="moon">
			<div class="moon-inner"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		hour: Number,
		minute: Number,
		isFormat24: Boolean,
		isAm: Boolean,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.container {
	@include flex-center;

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
</style>

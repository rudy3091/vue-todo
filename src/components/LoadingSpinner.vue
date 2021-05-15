<template>
	<div v-if="loading" class="container">
		<svg v-bind:width="width" v-bind:height="height" viewBox="0 0 100 100">
			<line class="line-1" x1="5" y1="0" x2="5" y2="100" />
			<line class="line-2" x1="25" y1="0" x2="25" y2="100" />
			<line class="line-3" x1="45" y1="0" x2="45" y2="100" />
			<line class="line-4" x1="65" y1="0" x2="65" y2="100" />
			<line class="line-5" x1="85" y1="0" x2="85" y2="100" />
		</svg>
	</div>
</template>

<script>
export default {
	props: {
		width: Number,
		height: Number,
		loading: Boolean,
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

@keyframes animate {
	0% {
		stroke-dashoffset: -100;
	}
	50% {
		stroke-dashoffset: -100;
	}
	100% {
		stroke-dashoffset: 0;
	}
}

svg {
	fill: none;
	stroke: $font-color;
	stroke-width: 10px;
}

@for $i from 1 through 5 {
	.line-#{$i} {
		stroke-dasharray: 100 1000;
		stroke-dashoffset: -100;
		animation: animate 1s alternate (0.2 * $i) + s infinite;
	}
}
</style>

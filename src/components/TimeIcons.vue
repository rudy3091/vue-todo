<template>
	<div class="container">
		<svg width="20" height="20" viewBox="0 0 100 100" class="full-sun">
			<circle cx="50" cy="50" r="25" />

			<g class="lines">
				<line x1="0" y1="50" x2="15" y2="50" />
				<line x1="100" y1="50" x2="85" y2="50" />
				<line x1="50" y1="0" x2="50" y2="15" />
				<line x1="50" y1="100" x2="50" y2="85" />
				<line x1="15" y1="15" x2="25" y2="25" />
				<line x1="85" y1="15" x2="75" y2="25" />
				<line x1="15" y1="85" x2="25" y2="75" />
				<line x1="85" y1="85" x2="75" y2="75" />
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: "TimeIcons",
	props: {
		h: String,
	},
	computed: {
		hour() {
			return parseInt(this.h);
		}
	}
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.container {
	width: 20px;
	height: 20px;
	margin: 0px 5px;

	.full-sun {
		fill: $font-color;
		stroke: none;

		& > g.lines {
			fill: none;
			stroke: $font-color;
			stroke-width: 10;
		}
	}
}
</style>

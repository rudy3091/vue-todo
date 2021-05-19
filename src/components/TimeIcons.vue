<template>
	<div class="icon-container">
		<svg
			v-if="isMorning || isEvening"
			width="20"
			height="20"
			viewBox="0 0 100 100"
			class="svg-container"
		>
			<circle cx="50" cy="60" r="30" />
			<rect x="0" y="70" width="100" height="50" class="sunrise" />
			<rect x="5" y="70" width="90" height="10" />
			<g class="lines">
				<line x1="0" y1="60" x2="15" y2="60" />
				<line x1="100" y1="60" x2="85" y2="60" />
				<line x1="50" y1="10" x2="50" y2="25" />
				<line x1="15" y1="25" x2="25" y2="35" />
				<line x1="85" y1="25" x2="75" y2="35" />

				<line x1="20" y1="90" x2="80" y2="90" style="stroke-width: 8px" />
			</g>
		</svg>

		<svg
			v-if="isAfternoon"
			width="20"
			height="20"
			viewBox="0 0 100 100"
			class="svg-container"
		>
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

		<svg
			v-if="isNight"
			width="20"
			height="20"
			viewBox="0 0 100 100"
			class="svg-container"
		>
			<circle cx="50" cy="50" r="40" />
			<circle cx="25" cy="25" r="25" class="moon" />
		</svg>
	</div>
</template>

<script>
export default {
	name: "TimeIcons",
	props: {
		h: String,
	},
	methods: {
		getIconName() {
			const h = this.h;
			if (7 <= h && h <= 10) return "morning";
			else if (10 < h && h <= 17) return "afternoon";
			else if (17 < h && h <= 22) return "evening";
			else return "night";
		},
	},
	computed: {
		isMorning() {
			if (this.getIconName() === "morning") return true;
			else return false;
		},
		isAfternoon() {
			if (this.getIconName() === "afternoon") return true;
			else return false;
		},
		isEvening() {
			if (this.getIconName() === "evening") return true;
			else return false;
		},
		isNight() {
			if (this.getIconName() === "night") return true;
			else return false;
		},
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.icon-container {
	width: 20px;
	height: 20px;
	margin: 0px 5px;

	.svg-container {
		fill: $font-color;
		stroke: none;

		& > g.lines {
			fill: none;
			stroke: $font-color;
			stroke-width: 10;
		}

		& > .moon {
			fill: $bg-color-main;
		}

		& > .sunrise {
			fill: $bg-color-main;
		}
	}
}
</style>

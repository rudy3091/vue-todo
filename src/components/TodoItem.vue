<template>
	<div
		v-if="!done"
		class="item-container"
		:class="{ hover: show }"
		@mouseover="showIcons"
		@mouseout="hideIcons"
	>
		<div :style="{ opacity: show ? 1 : 0 }" class="icon-container">
			<svg
				width="20"
				height="20"
				viewBox="0 0 50 50"
				class="hamburger"
				:class="{ clicked: menuClicked }"
				@click="toggleMenu"
			>
				<polyline class="line" points="0,5 50,5 45,5 0,45" />
				<polyline class="line" points="0,45 50,45 45,45 0,5" />
				<line class="line midline" x1="0" y1="25" x2="50" y2="25" />
			</svg>

			<div
				class="icons"
				:class="{ opened: menuClicked }"
				:style="{ opacity: menuClicked ? 1 : 0 }"
			>
				<svg width="20" height="20" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="43" />
					<polyline points="30,50 50,70 70,30" />
				</svg>

				<svg width="20" height="20" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="43" />
					<line x1="30" y1="70" x2="70" y2="30" />
				</svg>

				<svg width="20" height="20" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="43" />
					<line x1="30" y1="30" x2="70" y2="70" />
					<line x1="30" y1="70" x2="70" y2="30" />
				</svg>
			</div>
		</div>

		<div class="body-container" :style="{ opacity: menuClicked && show ? 0.3 : 1 }">
			<div class="name">{{ name }}</div>
			<div class="due">{{ due }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TodoItem",
	props: {
		name: String,
		due: String,
		done: Boolean,
	},
	data() {
		return {
			show: false,
			menuClicked: false,
		};
	},
	methods: {
		showIcons() {
			this.show = true;
		},
		hideIcons() {
			this.show = false;
		},
		toggleMenu() {
			this.menuClicked = !this.menuClicked;
		},
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.item-container {
	@include flex-center;

	font-size: 1.25rem;
	margin: 15px;
	transform: translateX(-35px);
	transition: transform 0.2s ease, opacity 0.2s ease;

	.body-container {
		@include flex-center;
	}

	&.hover {
		transform: translateX(0px);
	}

	.icon-container {
		@include flex-center;
		margin-right: 20px;
		transition: opacity 0.2s ease;
		position: relative;

		.icons {
			@include flex-center;
			flex-direction: column;
			position: absolute;
			left: -10px;
			transition: opacity 0.2s ease;

			&.opened > svg {
				&:nth-child(1) {
					transform: translateX(60px);
				}

				&:nth-child(2) {
					transform: translateX(90px);
				}

				&:nth-child(3) {
					transform: translateX(120px);
				}
			}

			& > svg {
				fill: $bg-color-main;
				stroke: $font-color;
				stroke-width: 10px;
				cursor: pointer;
				position: absolute;
				transform: translate(0px, 0px);
				transition: transform 0.3s ease;
			}
		}

		svg.hamburger {
			fill: none;
			stroke: black;
			stroke-width: 6px;
			cursor: pointer;
			position: relative;

			.line {
				stroke-dasharray: 50 100;
				stroke-dashoffset: 0;
				transition: stroke-dasharray 0.3s ease-in-out,
					stroke-dashoffset 0.3s ease-in-out;
			}

			&.clicked > .line {
				stroke-dasharray: 56.56 1000;
				stroke-dashoffset: -56.56;
			}

			&.clicked > .midline {
				stroke-dasharray: 1 1000;
				stroke-dashoffset: -20;
			}
		}
	}

	.due {
		margin-left: 30px;
	}
}
</style>

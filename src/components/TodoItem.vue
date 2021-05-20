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
				<div
					class="icon-wrapper"
					@mouseover="toggleDoneTooltip"
					@mouseout="toggleDoneTooltip"
				>
					<Tooltip content="Done" :show="showDoneTooltip" />
					<svg class="icon" width="20" height="20" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="43" />
						<polyline points="30,50 50,70 70,30" />
					</svg>
				</div>

				<div
					class="icon-wrapper"
					@mouseover="toggleEditTooltip"
					@mouseout="toggleEditTooltip"
				>
					<Tooltip content="Edit" :show="showEditTooltip" />
					<svg class="icon" width="20" height="20" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="43" />
						<line x1="30" y1="70" x2="70" y2="30" />
					</svg>
				</div>

				<div
					class="icon-wrapper"
					@mouseover="toggleDeleteTooltip"
					@mouseout="toggleDeleteTooltip"
				>
					<Tooltip content="Delete" :show="showDeleteTooltip" />
					<svg class="icon" width="20" height="20" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="43" />
						<line x1="30" y1="30" x2="70" y2="70" />
						<line x1="30" y1="70" x2="70" y2="30" />
					</svg>
				</div>
			</div>
		</div>

		<div
			class="body-container"
			:style="{ opacity: menuClicked && show ? 0.3 : 1 }"
		>
			<div class="name">{{ name }}</div>
			<div class="due">{{ due }}</div>
		</div>
	</div>
</template>

<script>
import Tooltip from "./Tooltip.vue";

export default {
	name: "TodoItem",
	components: {
		Tooltip,
	},
	props: {
		name: String,
		due: String,
		done: Boolean,
	},
	data() {
		return {
			show: false,
			menuClicked: false,
			showDoneTooltip: false,
			showEditTooltip: false,
			showDeleteTooltip: false,
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
		toggleDoneTooltip() {
			this.showDoneTooltip = !this.showDoneTooltip;
		},
		toggleEditTooltip() {
			this.showEditTooltip = !this.showEditTooltip;
		},
		toggleDeleteTooltip() {
			this.showDeleteTooltip = !this.showDeleteTooltip;
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
	transition: transform 0.2s ease;

	.body-container {
		@include flex-center;
		transition: opacity 0.2s ease;
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
			position: absolute;
			left: -10px;
			transition: opacity 0.2s ease;

			.icon-wrapper {
				@include flex-center;
				width: 20px;
				height: 20px;
				position: absolute;
				transform: translate(0px, 0px);
				transition: transform 0.3s ease;
				cursor: pointer;
				z-index: 9;
			}

			&.opened .icon-wrapper {
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

			& svg.icon {
				fill: $bg-color-main;
				stroke: $font-color;
				stroke-width: 10px;
			}
		}

		svg.hamburger {
			fill: none;
			stroke: black;
			stroke-width: 6px;
			cursor: pointer;
			position: relative;
			z-index: 9;

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

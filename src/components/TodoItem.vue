<template>
	<div
		v-if="!done && !destroyed"
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
					@click="makeItDone"
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
					@click="makeItEdited"
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
					@click="makeItDeleted"
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
			v-if="!edit"
			class="body-container"
			:style="{ opacity: menuClicked && show ? 0.3 : 1 }"
		>
			<div class="name">{{ name }}</div>
			<div class="due">{{ due }}</div>
		</div>

		<div v-if="edit" class="body-container edit-form">
			<div class="forms-container">
				<form action="none" @submit.prevent="handleEditSubmit">
					<input
						name="content"
						v-model="nameLocal"
						type="text"
						autocomplete="off"
					/>
				</form>

				<form action="none" @submit.prevent="handleEditSubmit">
					<input name="due" v-model="dueLocal" type="text" autocomplete="off" />
				</form>
			</div>

			<svg
				width="20"
				height="20"
				viewBox="0 0 100 100"
				class="cancel-edit"
				@click="cancelEdit"
			>
				<line x1="0" y1="0" x2="100" y2="100" />
				<line x1="100" y1="0" x2="0" y2="100" />
			</svg>
		</div>
	</div>
</template>

<script>
import Tooltip from "./Tooltip.vue";
import {
	handleDone,
	handleUpdate,
	handleDelete,
} from "../handlers/todoHandler.js";

export default {
	name: "TodoItem",
	components: {
		Tooltip,
	},
	props: {
		tid: Number,
		name: String,
		due: String,
		done: Boolean,
	},
	data() {
		return {
			nameLocal: this.name,
			dueLocal: this.due,
			doneLocal: this.done,

			lockHover: false,
			show: false,
			destroyed: false,
			edit: false,
			edited: false,
			menuClicked: false,

			showDoneTooltip: false,
			showEditTooltip: false,
			showDeleteTooltip: false,
		};
	},
	methods: {
		showIcons() {
			if (this.lockHover) return;
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
		unlockHover() {
			this.lockHover = false;
		},
		makeItDone() {
			handleDone(this.tid, {
				content: this.done,
				due: this.due,
				done: this.done,
			});
			this.destroyed = true;
		},
		makeItEdited() {
			this.edit = true;
			this.lockHover = true;
		},
		cancelEdit() {
			this.unlockHover();
			this.edit = false;
		},
		handleEditSubmit() {
			handleUpdate(this.tid, {
				content: this.nameLocal,
				due: this.dueLocal,
				done: this.doneLocal,
			});
			this.unlockHover();
			this.edit = false;
			this.edited = true;

			this.$emit("updated", {
				id: this.tid,
				content: this.nameLocal,
				due: this.dueLocal,
				done: this.doneLocal,
			});
		},
		makeItDeleted() {
			handleDelete(this.tid);
			this.destroyed = true;
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

	@include small {
		transform: translateX(-25px);
	}

	.body-container {
		@include flex-center;
		transition: opacity 0.2s ease;

		@include small {
			flex-direction: column;

			& > .due {
				margin: 0;
			}
		}
	}

	.edit-form {
		@include small {
			display: flex;
			flex-direction: row;
		}

		.forms-container {
			display: flex;
			flex-direction: row;

			@include small {
				flex-direction: column;
			}
		}

		& form {
			@include flex-center;

			& input {
				width: 80%;
				border: none;
				border-bottom: 3px solid $font-color;
				font-size: 1.25rem;
				margin-right: 10px;

				&:focus {
					outline: none;
				}
			}
		}

		.cancel-edit {
			fill: none;
			stroke: $font-color;
			stroke-width: 12px;
			cursor: pointer;
		}
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

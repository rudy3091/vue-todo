<template>
	<div class="container">
		<svg
			v-if="hidden"
			width="30"
			height="30"
			viewBox="0 0 100 100"
			@click="handleClick"
			class="svg"
		>
			<g>
				<line x1="50" y1="0" x2="50" y2="100"></line>
				<line x1="0" y1="50" x2="100" y2="50"></line>
			</g>
		</svg>

		<div v-show="!hidden" class="input-wrapper">
			<form action="none" @submit.prevent="handleSubmit">
				<input type="text" />
			</form>
			<svg width="20" height="20" viewBox="0 0 100 100" @click="handleClick">
				<g>
					<line x1="0" y1="0" x2="100" y2="100"></line>
					<line x1="0" y1="100" x2="100" y2="0"></line>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: "AddTodo",
	data() {
		return {
			hidden: true,
		};
	},
	methods: {
		handleClick() {
			this.hidden = !this.hidden;
		},
		handleSubmit(e) {
			const content = e.target.querySelector("input").value;
			console.log(content);
			this.hidden = !this.hidden;
		},
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.container {
	@include flex-center;
	flex-direction: column;
	width: 100%;
	color: $font-color;

	.svg {
		margin: 25px;
		@include fade-in(0.3s);

		& > g {
			fill: none;
			stroke-width: 15px;
			stroke: $font-color;
		}
	}

	.input-wrapper {
		width: 100%;
		height: 30px;
		margin: 25px;
		@include flex-center;
		@include fade-in(0.3s);

		svg {
			margin: 10px;

			& > g {
				fill: none;
				stroke-width: 15px;
				stroke: $font-color;
			}
		}

		input {
			width: 100%;
			height: 100%;
			border: none;
			background-color: transparent;
			border-bottom: 3px solid $font-color;
			font-size: 1.25rem;

			&:focus {
				outline: none;
			}
		}
	}
}
</style>

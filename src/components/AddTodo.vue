<template>
	<div class="container">
		<svg width="30" height="30" viewBox="0 0 100 100" @click="handleClick">
			<g>
				<line x1="50" y1="0" x2="50" y2="100"></line>
				<line x1="0" y1="50" x2="100" y2="50"></line>
			</g>
		</svg>

		<div class="input-wrapper" style="display: {{ isVisible }}">
			<input type="text" />
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
			console.log(this.hidden);
			this.hidden = !this.hidden;
		},
	},
	computed: {
		isVisible() {
			return this.hidden ? "none" : "block";
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

	svg {
		margin: 25px;
		& > g {
			fill: none;
			stroke-width: 15px;
			stroke: $font-color;
		}
	}

	.input-wrapper {
		width: 100%;
		height: 30px;

		input {
			width: 100%;
			height: 100%;
			border: none;
			background-color: #f2f2f2;
			border-radius: 4px;
		}
	}
}
</style>

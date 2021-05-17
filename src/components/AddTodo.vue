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
				<label for="content">Name ?</label>
				<input name="content" v-model="value" type="text" />
			</form>
			<svg
				class="form-close"
				width="20"
				height="20"
				viewBox="0 0 100 100"
				@click="handleClick"
			>
				<g>
					<line x1="0" y1="0" x2="100" y2="100"></line>
					<line x1="0" y1="100" x2="100" y2="0"></line>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "AddTodo",
	data() {
		return {
			hidden: true,
			value: "",
		};
	},
	methods: {
		handleClick() {
			this.value = "";
			this.hidden = !this.hidden;
		},
		handleSubmit() {
			this.createTodo();

			this.value = "";
			this.hidden = !this.hidden;
		},
		createTodo() {
			axios
				.post("http://localhost:8081/api/todos", {
					content: this.value,
					due: "test",
					done: false,
				})
				.then((res) => console.log(res.data))
				.catch((err) => console.error(err));
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
		cursor: pointer;

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
		align-items: flex-end;

		@include fade-in(0.3s);

		svg {
			margin-left: 30px;
			cursor: pointer;

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
			padding: 4px 8px;
			color: $font-color;

			&:focus {
				outline: none;
			}
		}

		.form-close {
			margin-bottom: 10px;
		}
	}
}
</style>

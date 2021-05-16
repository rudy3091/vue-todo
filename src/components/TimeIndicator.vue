<template>
	<section class="time-indicator">
		<div class="indicator-container">
			<div class="indicator-label">{{ hour }}:{{ minute }}:{{ second }}</div>
		</div>

		<svg class="pointer" width="15" height="15" viewBox="0 0 100 100">
			<polyline points="0,0 50,100 100,0" />
		</svg>

		<article class="container">
			<div
				class="rotator"
				v-for="time in times"
				:key="time"
				:style="{ transform: 'translate(-' + offset + 'px)' }"
			>
				<div class="spacer-wrapper">
					<div class="spacer"></div>
					<div class="spacer"></div>
					<div class="spacer"></div>
					<div class="spacer"></div>
					<div class="spacer"></div>
					<div class="spacer"></div>
				</div>
				<div>{{ time }}:00</div>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	data() {
		return {
			times: [],
			h: 0,
			offset: 0,
		};
	},
	props: {
		date: Date,
	},
	computed: {
		hour() {
			const h = this.date.getHours();
			return h > 9 ? h : `0${h}`;
		},
		minute() {
			const m = this.date.getMinutes();
			return m > 9 ? m : `0${m}`;
		},
		second() {
			const s = this.date.getSeconds();
			return s > 9 ? s : `0${s}`;
		},
	},
	methods: {
		format(t) {
			return t > 9 ? `${t}` : `0${t}`;
		},
	},
	created() {
		const h = this.date.getHours();

		this.times.push(this.format(h - 2));
		this.times.push(this.format(h - 1));
		this.times.push(this.format(h));
		this.times.push(this.format(h + 1));
		this.times.push(this.format(h + 2));

		const m = this.date.getMinutes();
		this.offset = (m / 60) * 600;
	},
	beforeUpdate() {
		const m = this.date.getMinutes();
		const s = this.date.getSeconds();

		if (m === 0 && s === 0) {
			this.offset = 600;
			const newHour = this.date.getHours();

			this.times = this.times.slice(1);
			this.offset = 0;

			this.times.push(this.format((newHour + 2) % 24));
		} else {
			this.offset = (m / 60) * 600;
		}
	},
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/colors.scss";

.time-indicator {
	@include flex-center;
	flex-direction: column;

	.pointer {
		fill: $font-color;
		stroke: none;
		margin-bottom: 5px;
	}
}

.container {
	@include flex-center;

	width: 100vw;
	overflow: hidden;

	.rotator {
		@include flex-center;
		flex-direction: column;
		font-size: 1.25rem;
		font-weight: 600;
		transition: transform 1s ease;
	}

	.spacer-wrapper {
		@include flex-center;
	}

	.spacer {
		width: 100px;
		height: 20px;
		border-right: 1px solid $font-color;

		@include flex-center;
		justify-content: flex-start;

		&::after {
			content: "";
			width: 50%;
			height: 50%;
			border-right: 1px solid $font-color;
		}
	}
}

.indicator-container {
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 10px;
}
</style>

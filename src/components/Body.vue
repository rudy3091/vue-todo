<template>
	<div class="body-container">
		<h1>this will be body</h1>
	</div>
</template>

<script>
export default {
	name: "Body",
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.body-container {
	@include flex-center;
	flex-direction: column;
}
</style>

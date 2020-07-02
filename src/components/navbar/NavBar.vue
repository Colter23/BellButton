<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped>
	.nav-bar{
		display: flex;
		top: 0;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}

	.left{
		width: var(--navbar-width);
	}

	.right{
		width: calc(var(--navbar-width)*2);
	}

	.center{
		flex: 1;
	}
</style>
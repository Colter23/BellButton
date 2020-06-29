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
		/*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);*/
	}

	.left,
	.right{
		width: 75px;
		/*background: #ff7552;*/
	}

	.center{
		flex: 1;
		/*background: #3dff6a;*/
	}
</style>
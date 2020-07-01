<template>
	<div class="bell-album">
		<div style="margin-bottom: 20px">Bell相册    敬请期待prpr</div>
		<img class=" bell-img" src="../../assets/img/bell.jpg" alt="">
	</div>
</template>

<script>
	export default {
		name: "BellAlbum"
	}
</script>

<style scoped>
	.bell-album{
		font-size: 25px;
		font-weight: bold;
	}
	.bell-img{
		width: 80%;
	}
	.box{
		display: inline-block;
		margin: 0 25px 50px 25px;
		background: var(--color-background);
		box-shadow: 6px 4px 24px rgba(136,165,191,.36), -8px -4px 16px hsla(0,0%,100%,.6);
		border-radius: 16px;
		transition: 0.5s;
		vertical-align: middle;
	}
	.box:hover{
		box-shadow: 6px 4px 30px rgba(136,165,191,.5), -8px -4px 16px hsla(0,0%,100%,.6);
		transform:translate(-3px, -3px);
		transition: 0.5s;
	}
</style>
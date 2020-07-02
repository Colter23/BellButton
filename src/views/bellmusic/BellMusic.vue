<template>
	<div class="bell-music">
		预览 未完成 只有界面，没有功能，没有自适应
		<div class="music-box">
			<div class="music-left">
				<music-list></music-list>
			</div>
			<div class="music-right">
				<music-player></music-player>
			</div>
		</div>
	</div>
</template>

<script>
	import MusicWave from "../../components/music/MusicWave";
	import MusicList from "../../components/music/MusicList";
	import MusicPlayer from "../../components/music/MusicPlayer";
	export default {
		name: "BellMusic",
		components: {MusicPlayer, MusicList, MusicWave}
	}
</script>

<style scoped>
	.bell-music{
		font-size: 25px;
		font-weight: bold;
	}
	.music-box{
		position: relative;
		width: 80vw;
		height: 80vh;
		min-width: 330px;
		margin: auto;
		margin-top: 10px;
		background: #fff;
		overflow: hidden;
		border-radius: 30px;
		box-shadow: -10px -10px 15px -5px rgba(255, 255, 255, 1),
								10px 10px 18px -5px rgba(0,0,0,0.4);
	}
	.music-left{
		position: absolute;
		top: 0;
		left: 0;
		width: 35%;
		min-width: 330px;
		height: 100%;
		background: #e4effe;
	}
	.music-right{
		position: absolute;
		top: 0;
		right: 0;
		width: 70%;
		height: 100%;
		background: #cde0f9;
		border-radius: 30px;
		box-shadow: -6px 0px 20px -2px rgba(0, 0, 0, 0.2);
	}
</style>
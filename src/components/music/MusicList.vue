<template>
	<div class="music-list">
		<div class="music-item" :class="playIndex===index?'music-item-play':''" v-for="(music, index) in musicList" :key="index">
			<div class="music-item-title">{{music.name}}</div>
			<span class="control-item">
				<i class="fas fa-play"></i>
			</span>
		</div>
	</div>
</template>

<script>
	import Music from "assets/musics.json"
	export default {
		name: "MusicList",
		data(){
			return{
				musicList: Music.groups[0].musiclist,
				playIndex: 1
			}
		}
	}
</script>

<style scoped>
	.music-item{
		margin: 10px;
		width: calc(100% - 20px);
		height: 60px;
		/*background: #fff;*/
		line-height: 60px;
	}
	.music-item-title {
		display: block;
		padding-left: 30px;
		float: left;
		font-size: 16px;
		width: calc(100% - 80px);
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.music-item span{
		float: right;
		display: inline-block;
		vertical-align: middle;
		margin: 10px 10px 0 0;
		padding: 0;
		line-height: 40px;
		width: 40px;
		height: 40px
	}
	.music-item span i{
		line-height: 20px;
		font-size: 20px;
		color: #6da6df;
	}
	.music-item-play{
		background: #cde0f9;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
	}
	.control-item{
		background: #d3e3f8;
		border-radius: 50%;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
		transition: 0.8s;
	}
	.control-item:hover {
		cursor: pointer;
		transition: 0.8s;
	}
	.control-item:active{
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.4);
		transition: 0.8s;
	}

	.fa-play{
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 40px;
	}
</style>
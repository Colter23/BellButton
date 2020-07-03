<template>
	<div class="music-list">
		<div class="music-item" :class="playIndex===index?'music-item-play':''" v-for="(music, index) in musicList" :key="index">
			<div class="music-item-title">
				{{music.name}}
			</div>
			<span class="control-item" @click="clickPlay(index)">
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
		},
		methods: {
			clickPlay(index){
				this.playIndex = index;
			}
		}
	}
</script>

<style scoped>
	.music-item{
		margin: 10px 20px;
		width: 80%;
		height: 60px;
		font-size: 20px;
		padding-right: 10px;
		/*background: #000;*/
		line-height: 60px;
		/*vertical-align: middle;*/
	}
	.music-item-title{
		vertical-align: middle;
		display: inline-block;
		width: 80%;
		height: 100%;
		padding: 0 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/*background: #000;*/
	}
	.music-item span{
		vertical-align: middle;
		display: inline-block;
		margin-top: -3px;
		/*margin-left: 20px;*/
		padding-left: 5px;
		line-height: 30px;
		width: 50px;
		height: 50px;
	}
	.music-item span i{
		line-height: 52px;
		font-size: 25px;
		color: #6da6df;
	}
	.music-item-play{
		background: #cde0f9;
		border-radius: 28px;
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
	/*.control-item:hover{*/
	/*	box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),*/
	/*	inset 6px 6px 10px -3px rgba(0,0,0,0.4);*/
	/*	transition: 0.8s;*/
	/*}*/
	.control-item:active{
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.4);
		transition: 0.8s;
	}

	.fa-play{
		color: #fff;
		font-size: 30px;
		text-align: center;
		line-height: 80px;
	}
</style>
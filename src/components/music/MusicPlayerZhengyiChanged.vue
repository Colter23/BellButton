<template>
	<div class="music-player" ref="musicplayer">
		<div class="music-title">
			{{musicName}}
		</div>

		<img src="../../assets/img/cover1.png" class="cover-img" alt="">

		<div class="progress-bar">
			<div class="progress"></div>
			<div class="now-time">2:00</div>
			<div class="count-time">{{audio.duration}}</div>
		</div>
		<div class="control-box" ref="controlbox">
			<div class="control-item pre-control"><i class="fas fa-step-backward"></i></div>
			<div class="control-item play-control" @click="audioSwitch">
				<i class="fas fa-play" v-show="!isPlay"></i>
				<i class="fas fa-pause" v-show="isPlay"></i>
			</div>
			<div class="control-item next-control"><i class="fas fa-step-forward"></i></div>
		</div>
		<audio></audio>
	</div>
</template>

<script>
	export default {
		name: "MusicPlayerZy",
		props: {
			playMusic: {}
		},
		data: ()=>({
			musicTitle:"勾指起誓 - Cover洛天依",
			cover: "",
			audioPath: this.musicPath();
			isPlay: false,

			//音频
			audio: Object,
			context: Object,
			//分析机
			analyser: Object,
			//音量节点
			volumeNode: Object,
		}),
		computed: {
			musicName(){
				return this.playMusic?this.playMusic.name:""
			},
			musicPath(){
				return this.playMusic?require("assets/audio/"+this.playMusic.path):""
			}
		},
		watch: {
			musicPath(val){

			}
		},
		methods: {
			//播放状态切换
			audioSwitch() {
				if (this.audio.paused) {
					this.audioPlay();
				} else {
					this.audioPause();
				}
			},
			audioPlay() {
				if (this.audio.paused) {
					if (this.context.resume()!=null){
						this.context.resume().then(() => {
							this.audio.play();
						});
					}else {
						this.audio.play();
					}
				}
				this.isPlay = true;
			},
			audioPause() {
				this.audio.pause();
				this.isPlay = false;
			},

			updateControlbBoxSize(){
				if (this.$refs.musicplayer.offsetWidth*0.6<=300){
					this.$refs.controlbox.style.left = "calc(50% - 40%)";
					this.$refs.controlbox.style.width = "80%";
				} else {
					this.$refs.controlbox.style.left = "calc(50% - 210px)";
					this.$refs.controlbox.style.width = "420px";
				}
				if (window.innerWidth<=600){
					this.$refs.controlbox.style.height = "60px";
				} else {
					this.$refs.controlbox.style.height = "100px";
				}

			}
		},
		mounted() {
			this.updateControlbBoxSize();
			window.addEventListener('resize',ev => {
				this.updateControlbBoxSize();
			})
		}
	}
</script>

<style scoped>
	.music-player{
		width: 100%;
		height: 100%;
		padding-top: 30px;
	}
	.music-title{
		font-size: var(--music-title-size);
	}

	.cover-img{
		width: var(--cover-img-size);
		height: var(--cover-img-size);
		margin: auto;
		margin-top: 40px;
		padding: 10px;
		border-radius: 50%;
		background: #fff;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
	}
	.progress-bar{
		position: absolute;
		bottom: var(--progress-bar-bottom);
		left: calc(50% - 40%);
		width: calc(80%);
		height: var(--progress-bar-height);
		font-size: var(--progress-num);
		background: #dce9f9;
		border-radius: 40px;
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.3);
	}
	.progress{
		position:absolute;
		bottom:0;
		left:0;
		width: calc(60%);
		height: var(--progress-bar-height);
		background: #b4d3fb;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
		z-index: 1;
	}
	.now-time{
		position:absolute;
		bottom:0;
		left:20px;
		color: #f3f3f3;
		z-index: 10;
	}
	.count-time{
		position:absolute;
		bottom:0;
		right: 20px;
		color: #98c6ff;
		z-index: 10;
	}

	.control-box{
		position: absolute;
		bottom: 50px;
		left: calc(50% - 30%);
		width: 60%;
		/*max-width: 420px;*/
		height: 100px;
		background: #dce9f9;
		border-radius: 40px;
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.3);
	}

	.control-item{
		background: #d3e3f8;
		border-radius: 50%;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.5),
		6px 6px 10px -3px rgba(0,0,0,0.3);
		transition: 0.8s;
	}
	.control-item:active{
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.4),
		inset 6px 6px 10px -3px rgba(0,0,0,0.2);
		transition: 0.8s;
	}
	.play-control{
		position: absolute;
		bottom: calc(50% - var(--play-control-size) / 2);
		left: calc(50% - var(--play-control-size) / 2);
		width: var(--play-control-size);
		height: var(--play-control-size);
	}
	.pre-control{
		position: absolute;
		bottom: calc(50% - var(--prenext-control-size) / 2);
		left: calc(50% - 35%);
		width: var(--prenext-control-size);
		height: var(--prenext-control-size);
	}
	.next-control{
		position: absolute;
		bottom: calc(50% - var(--prenext-control-size) / 2);
		right: calc(50% - 35%);
		width: var(--prenext-control-size);
		height: var(--prenext-control-size);
	}

	.fas{
		color: #fff;
		text-align: center;
		margin-left: 3px;
	}
	.fa-play,
	.fa-pause{
		font-size: 30px;
		line-height: calc(var(--play-control-size) + 2px);
	}
	.fa-step-backward,
	.fa-step-forward{
		font-size: 25px;
		line-height: calc(var(--prenext-control-size) + 2px);
	}


</style>
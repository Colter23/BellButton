<template>
	<div class="music-player" ref="musicplayer">
		<!--音乐标题-->
		<div class="music-title">
			{{musicName}}
		</div>

		<!--专辑图-->
		<div class="cover-box">
			<img src="http://img.mczhengyi.top/BellButton/img/cover1.png!web" class="cover-img turn" alt="" :class="isPlay?'running':'paused'">
		</div>

		<!--进度条-->
		<div class="progress-bar">
			<div @click="progressClick" ref="progressBar" class="progress-mask"></div>
			<div class="progress" ref="progress"></div>
			<div class="now-time">{{nowTime | formatTime}}</div>
			<div class="count-time">{{musicLength | formatTime}}</div>
		</div>

		<!--控制按钮-->
		<div class="control-box" ref="controlbox">
			<div class="control-item pre-control" @click="preMusic"><i class="fas fa-step-backward"></i></div>
			<div class="control-item play-control" @click="audioSwitch">
				<i class="fas fa-play" v-show="!isPlay"></i>
				<i class="fas fa-pause" v-show="isPlay"></i>
			</div>
			<div class="control-item next-control" @click="nextMusic"><i class="fas fa-step-forward"></i></div>
		</div>

		<audio @timeupdate="update" @loadedmetadata="loaded" @ended="ended" :src="musicPath" ref="audio" id="audio"></audio>
	</div>
</template>

<script>
	export default {
		name: "MusicPlayer",
		props: {
			playMusic: {}
		},
		data: ()=>({
			cover: "",
			isPlay: false,
			musicLength: 0,
			nowTime: 0,
			//计时器
			timer: Object,

			//音频
			audio: Object,
			context: Object,
			audioSrc: Object,
			//分析机
			analyser: Object,
			//音量节点
			volumeNode: Object,
		}),
		filters: {
			formatTime(val){
				return parseInt(val/60)+":"+(Math.round(val%60)<10?'0'+Math.round(val%60):Math.round(val%60));
			}
		},
		computed: {
			musicName(){
				return this.playMusic?this.playMusic.name:""
			},
			musicPath(){
				return this.playMusic?require("assets/music/"+this.playMusic.path):""
			}
		},
		watch: {
			musicPath(){
				this.audioPause();
				this.audioPlay();

				// if (this.timer) {
				// 	this.nowTime = 0;
				// 	clearInterval(this.timer);
				// }
				// this.timer = setInterval(this.updateProgress,1000);
			}
		},
		methods: {
			// 加载完成初始化
			loaded() {
				this.musicLength = this.audio.duration;
			},
			// 结束
			ended() {
				this.isPlay = false;
			},
			// 修改进度
			progressClick(e) {
				let clickPos = e.offsetX
				let allLen = this.$refs.progressBar.offsetWidth
				this.audio.currentTime = (clickPos / allLen) * this.musicLength
			},
			// 更新进度条
			update() {
				this.updateProgress()
			},
			//更新进度条
			updateProgress(){
				// if (this.audio.currentTime === this.musicLength) {
				// 	clearInterval(this.timer);
				// }
				this.nowTime = Math.round(this.audio.currentTime);
				this.$refs.progress.style.width = this.musicLength?
						(Math.round(this.audio.currentTime)/this.musicLength) *100 + "%":"0%";
			},
			//播放状态切换
			audioSwitch() {
				if (this.playMusic != null){
					if (this.audio.paused) {
						this.audioPlay();
					} else {
						this.audioPause();
					}
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

			preMusic(){
				this.$emit('preMusic')
			},
			nextMusic(){
				this.$emit('nextMusic')
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
			});

			//this.audio = new Audio(val);
			// this.audio = this.$refs.audio;
			this.audio = this.$refs.audio

			this.context = new(window.AudioContext || window.webkitAudioContext)();
			//创建媒体源
			this.audioSrc = this.context.createMediaElementSource(this.audio);
			//创建分析机
			this.analyser = this.context.createAnalyser();
			//创建音量节点
			this.volumeNode = this.context.createGain();
			//更改默认音量
			this.volumeNode.gain.value = 0.3;

			//媒体源与分析机连接
			this.audioSrc.connect(this.analyser);
			//分析机与音量节点连接
			this.analyser.connect(this.volumeNode);
			//音量节点与输出目标连接
			this.volumeNode.connect(this.context.destination);

			// this.audio.load();

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

	.cover-box{
		width: var(--cover-img-size);
		height: var(--cover-img-size);
		margin: auto;
		margin-top: 40px;
		background: #fff;
		border-radius: 50%;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
	}
	.cover-img{
		width: calc(var(--cover-img-size) - 20px);
		height: calc(var(--cover-img-size) - 20px);
		margin-top: 10px;
		border-radius: 50%;
	}
	.turn{
		animation:turn 7s linear infinite;
	}
	.running{
		animation-play-state:running;
	}
	.paused{
		animation-play-state:paused;
	}

	.progress-bar{
		overflow: hidden;
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
		width: 0%;
		height: var(--progress-bar-height);
		background: #b4d3fb;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
		transition: 1s;
		z-index: 1;
	}
	.progress-mask {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--progress-bar-height);
		border-radius: 40px;
		z-index: 11;
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

	@keyframes turn{
		0%{-webkit-transform:rotate(0deg);}
		25%{-webkit-transform:rotate(90deg);}
		50%{-webkit-transform:rotate(180deg);}
		75%{-webkit-transform:rotate(270deg);}
		100%{-webkit-transform:rotate(360deg);}
	}

</style>
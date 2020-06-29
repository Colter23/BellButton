<template>
	<div>
		<canvas ref="canvas"></canvas>
	</div>
</template>


<script>

	import wave from "./waveview.js";

	export default {
		name: "AudioWave",
		props: {
			isPlay: {
				type: Boolean,
				default(){
					return false
				}
			},
			width: {
				type: Number,
				default(){
						return 140
					}
				},
			height: {
				type: Number,
				default(){
					return 30
				}
			},
			audioSrc: {
				type: String,
				default(){
					return "assets/music/ふわふわ.mp3"
				}
			}
		},
		data(){
			return {
				//音频
				audio: Object,
				//动画
				anime: Object,
				//画布
				canvas: Object,
				//画布上下文
				ctx: Object,
				//分析机
				analyser: Object,
				//音量节点
				volumeNode: Object,

				voiceHeight: Object,
				animefun: Object,

			}
		},
		watch: {
			//是否播放
			isPlay(val){
				if(val && this.audio.paused) {
					this.audioPlay();
				}else{
					this.audioPause();
				}
			},
			//监测音量变化
			audioVolume(val){

				this.volumeNode.gain.value = val;
			},
			audioState(val){
				if (val) {
					this.$emit("playEnd");
					console.log("ss")
				}
			}
		},
		computed: {
			audioVolume(){
				return this.$store.state.audioVolume;
			},
			audioState(){
				//console.log(this.audio.ended);
				return this.audio.ended;
			}
		},
		methods: {
			//播放状态切换
			audioSwitch(isPlay){
				if (this.audio.paused) {
					this.audioPlay();
				}else{
					this.audioPause();
				}
			},
			audioPlay(){
				if (this.audio.paused) {
					this.anime = requestAnimationFrame(this.draw);
					this.audio.play();
				}
			},
			audioPause() {
				this.audio.pause();
				window.cancelAnimationFrame(this.anime);
				this.ctx.clearRect(0, 0, this.width, this.height);
			},
			/**
			 * 根据音乐律动计算一个摇摆幅度，并绘制 (待优化)
			 */
			draw() {
				this.analyser.getByteFrequencyData(this.voiceHeight);

				var sum = 0;
				var cont = 0;
				for (var i = 0; i < Math.floor(this.voiceHeight.length / 4); i += 1) {
					sum += this.voiceHeight[i];
					cont++;
				}
				for (var i = Math.floor(this.voiceHeight.length / 4); i < Math.floor(this.voiceHeight.length * (3 / 4)); i += 5) {
					sum += this.voiceHeight[i];
					cont++;
				}
				for (var i = Math.floor(this.voiceHeight.length * (3 / 4)); i < this.voiceHeight.length; i += 5) {
					sum += this.voiceHeight[i];
					cont++;
				}

				this.animefun.input(this.voiceHeight, sum / cont, 44100)

				this.anime = requestAnimationFrame(this.draw);
			}

		},
		mounted() {

			//加载媒体
			this.audio = new Audio(this.audioSrc);
			let context = new(window.AudioContext || window.webkitAudioContext)();

			//获取画布
			//this.canvas = document.querySelector(".wrap");
			this.canvas = this.$refs.canvas;
			this.ctx = this.canvas.getContext("2d");

			//设置画布大小
			this.canvas.width = this.width;
			this.canvas.height = this.height;

			//创建媒体源
			let audioSrc = context.createMediaElementSource(this.audio);
			//创建分析机
			this.analyser = context.createAnalyser();
			//创建音量节点
			this.volumeNode = context.createGain();
			//更改默认音量
			this.volumeNode.gain.value = 0.5;


			//媒体源与分析机连接
			audioSrc.connect(this.analyser);
			//分析机与音量节点连接
			this.analyser.connect(this.volumeNode);
			//音量节点与输出目标连接
			this.volumeNode.connect(context.destination);


			//确定频域的快速傅里叶变换参数  32-32768内的2的非零幂
			//决定voiceHeight数组的长度，数组是此值的一般
			this.analyser.fftSize = 1024;

			//创建动画函数
			this.animefun = new wave(this.ctx, this.width / 2, this.height / 2);
			//缓冲区
			this.voiceHeight = new Uint8Array(this.analyser.frequencyBinCount);

			//是否初始化图形
			//this.animefun.input(this.voiceHeight, 0, 44100);
		}
	}
</script>

<style scoped>

</style>
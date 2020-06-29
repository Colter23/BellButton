<template>
	<div>
<!--		<input type="button" @click="audioPlay()" value="播放" />-->
<!--		<input type="button" @click="audioPause()" value="暂停" />-->
		<canvas id="wrap" @click="audioSwitch()"></canvas>
	</div>

</template>


<script>

	import fn from "./class.js";

	export default {
		name: "test",
		props: {
			width: {
				type: Number,
				default(){
						return 150
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
					return "../assets/audio/demo.mp3"
				}
			},
			volumeValue: {
				type: Number,
				default(){
					return 0.03
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

				voiceHeight: Object,
				animefun: Object,

			}
		},
		methods: {
			audioSwitch(){
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
				//myReq = null;
			},
			draw() {
				//console.log("ddddddddddddd")
				this.analyser.getByteFrequencyData(this.voiceHeight);

				//var step = Math.round(voiceHeight.length / oW);

				//this.ctx.clearRect(0, 0, oW, oH);

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
				//console.log(sum)
				//console.log(Math.random(1, 1024) * 1000)
				this.animefun.input(this.voiceHeight, sum / cont, 44100)
				//var fn1 = new fn(ctx);

				this.anime = requestAnimationFrame(this.draw);
			}


		},
		mounted() {

			//加载媒体
			this.audio = new Audio(this.audioSrc);
			let context = new(window.AudioContext || window.webkitAudioContext)();

			this.canvas = document.getElementById("wrap");
			this.ctx = this.canvas.getContext("2d");

			this.canvas.width = this.width;
			this.canvas.height = this.height;

			//创建媒体源
			let audioSrc = context.createMediaElementSource(this.audio);
			//创建分析机
			this.analyser = context.createAnalyser();

			let volumeNode = context.createGain();
			volumeNode.gain.value = this.volumeValue;


			//媒体源与分析机连接
			audioSrc.connect(this.analyser);
			//分析机与音量节点连接
			this.analyser.connect(volumeNode);
			//音量节点与输出目标连接
			volumeNode.connect(context.destination);



			//确定频域的快速傅里叶变换参数  32-32768内的2的非零幂
			this.analyser.fftSize = 1024;


			this.animefun = new fn(this.ctx, this.width / 2, this.height / 2);
			//缓冲区
			this.voiceHeight = new Uint8Array(this.analyser.frequencyBinCount);

			this.animefun.input(this.voiceHeight, 0, 44100);
		}
	}
</script>

<style scoped>

</style>
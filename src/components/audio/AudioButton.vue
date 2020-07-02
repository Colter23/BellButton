<template>
	<div class="audioButton">
		<span class="audioText" v-show="!isEnd">
			{{audioInfo.translation[current_language]}}
		</span>
		<audio-wave :audio-src="audioPath" :is-play="isEnd" @playEnd="isEnd=false"
		            :width="audioInfo.width?audioInfo.width:130" :height="30"></audio-wave>
	</div>
</template>

<script>
	import AudioWave from "./AudioWave";

	export default {
		name: "AudioButton",
		components: {
			AudioWave
		},
		props: {
			isPlay: false,
			audioInfo: {
				type: Object,
				default(){
					return{
						src:require("assets/music/ふわふわ.mp3"),
						title:"demo"
					}
				}
			}
		},
		computed: {
			audioPath(){
				return require("assets/audio/"+this.audioInfo.path);
			},
			current_language(){
				return this.$i18n.locale
			}
		},
		data(){
			return{
				isEnd: false
			}
		},
		watch: {
			isPlay(val){
				this.isEnd = this.isPlay
			}
		}
	}
</script>

<style scoped>
	.audioButton{
		position: relative;
		display: inline-block;
		padding: 5px 0px 0 0px;
		/*按钮蓝紫渐变背景*/
		/*background: linear-gradient(to right, rgba(53,199,253,0.9), rgba(150, 96, 238, 0.9));*/
		background: linear-gradient(to right, rgba(var(--color-blue2), 0.7), rgba(var(--color-blue1),0.7));
		box-shadow: 3px 4px 10px 0 rgba(var(--color-blue1), 0.4);
		/*box-shadow: 3px 4px 10px 0 rgba(53,199,253, 0.7);*/
		border-radius: 20px;
		transition: 0.3s;
	}
	.audioText{
		cursor:default;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		line-height: 37px;

		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
	}
	.audioButton:hover{
		box-shadow: 3px 4px 15px 0 rgba(var(--color-blue1), 0.55);
		transform:translate(-3px, -3px);
		transition: 0.3s;
	}
</style>
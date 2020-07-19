<template>
	<div class="audioButton">
		<span ref="audioButton" class="audioText" v-show="!isEnd">
			{{audioInfo.translation[current_language]}}
		</span>
		<audio-wave :audio-src="audioPath" :is-play="isEnd" @playEnd="isEnd=false"
		            :width="buttonWidth" :height="buttonHeight"></audio-wave>
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
			audioInfo: {},
			// type: Object,
			// default(){
			// 	return{
			// 		src:"../../../public/musicfile/ふわふわ.mp3",
			// 		title:"demo"
			// 	}
			// }
		},
		computed: {
			audioPath(){
				return "audiofile/"+this.audioInfo.path;
			},
			current_language(){
				return this.$i18n.locale
			}
		},
		data(){
			return{
				isEnd: false,
				// 按钮宽度
				buttonWidth: 0,
				buttonHeight: 30
			}
		},
		watch: {
			isPlay(val){
				this.isEnd = this.isPlay
			},
			// 语言变更重新生成宽度
			current_language() {
				this.$nextTick(() => this.resizeButton())
			}
		},
		mounted() {
			this.resizeButton()
			// console.log(this.$refs.audioButton.offsetWidth);
		},
		methods: {
			resizeButton() {
				if (this.$refs.audioButton.offsetWidth>window.screen.width*0.8){
					this.buttonWidth = window.screen.width*0.8;
					this.buttonHeight = 60;
					console.log(this.buttonWidth+"  "+this.buttonHeight+"   1111")
				} else {
					this.buttonWidth = this.$refs.audioButton.offsetWidth;
					// console.log(window.screen.width+"   2222")
				}

			}
		}
	}
</script>

<style scoped>
	.audioButton{
		position: relative;
		display: inline-block;
		padding: 5px 0 0 0;
		background: linear-gradient(to right, rgba(var(--color-blue2), 0.7), rgba(var(--color-blue1),0.7));
		box-shadow: 3px 4px 10px 0 rgba(var(--color-blue1), 0.4);
		border-radius: 20px;
		transition: 0.3s;
	}
	.audioText{
		cursor:default;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		/*width: 100%;*/
		line-height: 37px;
		padding: 0 20px;

		color: #ffffff;
		font-size: 20px;
		font-weight: bold;

		/*强制不换行*/
		white-space: nowrap;
	}
	.audioButton:hover{
		box-shadow: 3px 4px 15px 0 rgba(var(--color-blue1), 0.55);
		transform:translate(-3px, -3px);
		transition: 0.3s;
	}
</style>
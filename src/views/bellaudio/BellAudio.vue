<template>
	<div class="bell-audio">
		<div class="bell-text">Bell按钮</div>
		<div class="bell-text-info">点一下，玩一年</div>
		<audio-volume class="audio-volume"></audio-volume>
		<div style="width: 100%;">
			<div class="card" v-for="(voice, index1) in voiceList" :key="index1">
				<p class="card-text">{{voice.translation[current_language]}}</p>
				<div class="audio-item" v-for="(item, index2) in voice.voicelist"  @click="clickItem(index1+''+index2)" :key="index2">
					<audio-button  :audio-info="item" :is-play="currentIndex===index1+''+index2"></audio-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import AudioVolume from "components/audio/AudioVolume";
	import Voices from "assets/voices.json";
	import AudioButton from "components/audio/AudioButton";


	export default {
		name: "BellAudio",
		components: {
			AudioButton,
			AudioVolume,
		},
		data(){
			return{
				voiceList: Voices.groups,
				currentIndex: -1
			}
		},
		methods: {
			clickItem(index){
				if (this.currentIndex === index) {
					this.currentIndex = -1;
				}else {
					this.currentIndex = index;
				}
			}
		},
		computed: {
			current_language(){
				return this.$i18n.locale
			}
		}
	}
</script>

<style scoped>
	.bell-audio{
		font-size: 25px;
		font-weight: bold;
		/*margin: 0 50px;*/
		/*height: 1000px;*/
	}
	.bell-text{
		margin-top: 100px;
		font-size: 50px;
		font-weight: bold;
	}
	.bell-text-info{

	}
	.audio-volume{
		margin: 50px;
	}
	.card{
		display: inline-block;
		padding: 10px 0 10px 20px;
		/*margin-bottom: 30px;*/
		margin: 0 20px 20px 20px;
		/*max-width: 500px;*/
		/*padding-bottom: 20px;*/
		background: linear-gradient(200.6deg,#fff 19.14%,#e9e9e9 154.68%);
		box-shadow: 6px 4px 24px rgba(136,165,191,.36), -8px -4px 16px hsla(0,0%,100%,.6);
		border-radius: 16px;
		transition: 0.5s;
	}
	.card-text{
		margin-top: 20px;
		margin-left: -20px;
		margin-bottom: 25px;
	}
	.card:hover{
		box-shadow: 6px 4px 30px rgba(136,165,191,.5), -8px -4px 16px hsla(0,0%,100%,.6);
		transform:translate(-3px, -3px);
		transition: 0.5s;
	}
	.audio-item{
		display: inline-block;
		margin-right: 20px;
		margin-bottom: 20px;
	}
</style>
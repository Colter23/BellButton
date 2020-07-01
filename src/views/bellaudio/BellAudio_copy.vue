<template>
	<div class="bell-audio">
		<div class="bell-text">Bell按钮</div>
		<div class="bell-text-info">点一下，玩一年</div>
		<audio-volume class="audio-volume"></audio-volume>
		<div style="width: 100%;">
			<div class="card" v-for="(voice, index) in voiceList" :key="index">
				<p class="card-text">{{voice.name}}</p>
				<main-audio :audio-info="voice.voicelist"></main-audio>
			</div>
		</div>
	</div>
</template>

<script>

	import MainAudio from "components/audio/MainAudio";
	import AudioVolume from "components/audio/AudioVolume";
	import Voices from "assets/audio/voices.json";

	export default {
		name: "BellAudio",
		components: {
			AudioVolume,
			MainAudio
		},
		data(){
			return{
				voiceList: Voices.groups,
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
</style>
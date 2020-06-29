<template>
	<div class="audioButton">
		<audio-wave v-for="(item, index) in audioSrc" :audio-src="item" :key="index"></audio-wave>
	</div>
</template>

<script>
	import AudioWave from "../components/AudioWave";

	export default {
		name: "AudioButton",
		components: {
			AudioWave
		},
		data(){
			return{
				audioSrc:[require("../assets/audio/demo.mp3"),
									require("../assets/audio/勾指起誓.mp3")]
			}
		}
	}
</script>

<style scoped>
.audioButton{
	display: inline-block;
	padding: 5px 0px 0 0px;
	background:  linear-gradient(to right, rgba(53,199,253,0.9), rgba(150, 96, 238, 0.9));
	border-radius: 20px;
}
</style>
<template>
	<div>
		<div class="audioItem" v-for="(item, index) in audioInfo"  @click="clickItem(index)">
			<audio-button  :audio-info="item" :is-play="currentIndex===index" :key="index"></audio-button>
		</div>
	</div>
</template>

<script>
	import AudioButton from "./AudioButton";
	export default {
		name: "MainAudio",
		components: {AudioButton},
		props:{
			audioInfo: {
				type: Array,
				default(){
					return [{src:require("audio/客人们H.mp3"),title:"客人们H~"}]
				}
			}
		},
		data(){
			return{
				currentIndex:-1,
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
		}
	}
</script>

<style scoped>
.audioItem{
	display: inline-block;
	margin-right: 20px;
	margin-bottom: 20px;
}
</style>
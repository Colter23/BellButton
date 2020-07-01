<template>
	<div class="music-list">
		<div class="music-item music-item-play" v-for="(music, index) in musicList" :key="index">
			{{music.name}}
			<span class="control-item">
				<i class="fas fa-play"></i>
			</span>
		</div>
	</div>
</template>

<script>
	import musiclist from "assets/musics.json"
	export default {
		name: "MusicList",
		data(){
			musicList: musiclist.groups[0].musiclist
		}
	}
</script>

<style scoped>

</style>
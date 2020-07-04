<template>
	<div class="bell-music">
<!--		预览 未完成 只有界面，没有功能，没有自适应-->
		<div class="music-box">

			<div class="phone-list-button" @click="showList">
				<i class="fas fa-align-left" style="color: #7cb5fe; line-height: 50px"></i>
			</div>

			<div v-if="isPhone" ref="phonelist" class="phone-list" >
				<music-list @currentMusic="changeMusic" @changeSucceed="musicChange=0" :musicChange="musicChange"></music-list>
			</div>

			<div v-else ref="musicleft" class="music-left" >
				<music-list @currentMusic="changeMusic" @changeSucceed="musicChange=0" :musicChange="musicChange"></music-list>
			</div>

			<div ref="musicright" class="music-right" >
				<music-player :playMusic="currentMusic" @preMusic="musicChange=-1" @nextMusic="musicChange=1"></music-player>
			</div>
		</div>
	</div>
</template>

<script>
	import MusicWave from "components/music/MusicWave";
	import MusicList from "components/music/MusicList";
	import MusicPlayer from "components/music/MusicPlayer";
	export default {
		name: "BellMusic",
		components: {MusicPlayer, MusicList, MusicWave},
		data: ()=>({
			currentMusic: null,
			musicChange: 0,
			isPhone: false,
			phoneListShow: false
		}),
		methods: {
			changeMusic(music){
				this.currentMusic = music;
				this.showList('false');
			},
			showList(val){
				if (val&&val==='false'){
					this.phoneListShow = false;
					this.$refs.phonelist.style.width = "0%";
				}else if (this.phoneListShow){
					this.phoneListShow = false;
					this.$refs.phonelist.style.width = "0%";
				} else {
					this.phoneListShow = true;
					this.$refs.phonelist.style.width = "100%";
				}

			},
			updateRightBoxSize(){
				if (this.$refs.musicleft){
					if (this.$refs.musicleft.offsetWidth<=330){
						this.$refs.musicright.style.width = "calc(100% - 290px)";
					} else {
						this.$refs.musicright.style.width = "71%";
					}
				}

				if (window.innerWidth<=900){
					this.$refs.musicright.style.width = "100%";
					this.isPhone = true;
				}
			}
		},
		mounted() {
			this.updateRightBoxSize();
			window.addEventListener('resize',ev => {
				this.updateRightBoxSize();
			})
		}
	}
</script>

<style scoped>
	.bell-music{
		font-size: 25px;
		font-weight: bold;
		margin-top: 100px;
		margin-bottom: 50px;
	}
	.music-box{
		position: relative;
		width: 80vw;
		height: 80vh;
		min-width: 330px;
		margin: auto;
		margin-top: 10px;
		background: #fff;
		overflow: hidden;
		border-radius: 30px;
		box-shadow: -10px -10px 15px -5px rgba(255, 255, 255, 1),
		10px 10px 18px -5px rgba(0,0,0,0.4);
	}

	.phone-list-button{
		display: var(--phone-list-display);
		position: absolute;
		top: 15px;
		left: 15px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #b6d4fb;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.5),
		6px 6px 10px -3px rgba(0,0,0,0.3);
		z-index: 30;
	}

	.phone-list{
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		/*max-width: 330px;*/
		/*min-width: 330px;*/
		height: 100%;
		background: #e4effe;
		/*transition: 0.2s;*/
		z-index: 20;
	}

	.music-left{
		position: absolute;
		top: 0;
		left: 0;
		display: var(--list-display);
		width: 32%;
		/*max-width: 330px;*/
		min-width: 330px;
		height: 100%;
		background: #e4effe;
	}
	.music-right{
		position: absolute;
		top: 0;
		right: 0;
		width: 72%;
		height: 100%;
		background: #cde0f9;
		border-radius: 30px;
		box-shadow: -6px 0px 20px -2px rgba(0, 0, 0, 0.2);
	}
</style>
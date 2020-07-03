<template>
	<div ref="player" class="music-player">
		<div ref="title" class="music-title">
			{{musicTitle}}
		</div>
		<img ref="coverImg" src="../../assets/img/cover1.png" class="cover-img" alt="">
		<div id="control-panel" ref="control">
			<div class="progress">

			</div>
			<div id="control-button-group">
				<div class="btn"></div>
				<div class="btn btn-play"></div>
				<div class="btn"></div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "MusicPlayer",
		data: ()=>({
			musicTitle:"勾指起誓 - Cover洛天依",
			cover: ""
		}),
		mounted() {
			this.changeCoverImgSize()
			window.addEventListener('resize', ev => {
				this.changeCoverImgSize()
			})
		},
		methods: {
			changeCoverImgSize() {
				let pw = this.$refs.player.offsetWidth;
				let ph = this.$refs.player.offsetHeight;
				let ch = this.$refs.control.offsetHeight
				let th = this.$refs.title.offsetHeight
				// if (pw <= 300) {
					this.$refs.coverImg.style.width = pw - 60 + 'px'
				// }
				// if (ph <= 540) {
					this.$refs.coverImg.style.width = ph - ch - th - 60 + 'px'
				// }
			}
		}
	}
</script>

<style scoped>
	button {
		outline: none;
	}
	.music-player {
		position: relative;
		padding: 30px 0 0 0;
		height: 100%;
	}
	#control-panel {
		position: absolute;
		width: 100%;
		padding: 10px 0 40px;
		bottom: 0;
		border-radius: 40px;
		background-color: #cde0f9;
	}
	#control-button-group {
		margin: 0 auto;
		padding: var(--button-group-padding);
		background: #dce9f9;
		box-shadow: inset 5px 5px 10px #848c95,
		inset -5px -5px 10px #ffffff;
		border-radius: var(--button-group-radius);
		width: var(--button-group-width);
		overflow: auto;
	}
	.music-title {
		font-size: 30px;
	}
	.cover-img {
		width: 300px;
		padding: 10px;
		background-color: #ffffff;
		border-radius: 50%;
		margin-top: 10px;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
	}
	.progress {
		bottom:0;
		left:0;
		margin: var(--progress-margin);
		height: var(--progress-height);
		background: #b4d3fb;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
		z-index: 1;
	}
	.btn {
		float: left;
		margin: var(--button-margin);
		width: var(--botton-size);
		height: var(--botton-size);
		border-radius: 50%;
		background: #d3e3f8;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
	}
	.btn-play {
		margin: var(--button-margin-big);
		width: var(--button-size-big);
		height: var(--button-size-big);
	}
	.now-time{
		position:absolute;
		bottom:0;
		left:20px;
		color: #f3f3f3;
		z-index: 10;
	}
	.count-time{
		position:absolute;
		bottom:0;
		right: 20px;
		color: #98c6ff;
		z-index: 10;
	}

</style>
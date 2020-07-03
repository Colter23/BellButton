<template>
	<div class="music-player">
		<div class="music-title">
			{{musicTitle}}
		</div>
		<div class="music-cover">
			<img src="../../assets/img/cover1.png" class="cover-img" alt="">
		</div>
		<div class="progress-bar">
			<div class="progress"></div>
			<div class="now-time">2:00</div>
			<div class="count-time">3:00</div>
		</div>
		<div class="control-box">
			<div class="control-item pre-control"></div>
			<div class="control-item play-control"><i class="fas fa-play"></i></div>
			<div class="control-item next-control"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MusicPlayer",
		data: ()=>({
			musicTitle:"勾指起誓 - Cover洛天依",
			cover: ""
		})
	}
</script>

<style scoped>
	.control-box{
		position: absolute;
		bottom: 50px;
		left: calc(50% - 210px);
		width: 420px;
		/*min-width: 330px;*/
		height: 100px;
		background: #dce9f9;
		border-radius: 40px;
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.3);
	}

	.control-item{
		background: #d3e3f8;
		border-radius: 50%;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
		transition: 0.8s;
	}
	.control-item:hover{
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.4);
		transition: 0.8s;
	}
	.play-control{
		position: absolute;
		bottom: calc(50% - 40px);
		left: calc(50% - 40px);
		width: 80px;
		height: 80px;
	}
	.pre-control{
		position: absolute;
		bottom: calc(50% - 30px);
		left: calc(50% - 35%);
		width: 60px;
		height: 60px;
	}
	.next-control{
		position: absolute;
		bottom: calc(50% - 30px);
		right: calc(50% - 35%);
		width: 60px;
		height: 60px;
	}

	.fa-play{
		color: #fff;
		font-size: 30px;
		text-align: center;
		line-height: 80px;
	}
	.music-title{
		font-size: 30px;
		margin-top: 30px;
	}
	.music-cover{
		width: 420px;
		height: 420px;
		margin: auto;
		margin-top: 40px;
		border-radius: 50%;
		background: #fff;
		box-shadow: -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		6px 6px 10px -3px rgba(0,0,0,0.4);
	}

	.cover-img{
		width: 400px;
		height: 400px;
		border-radius: 50%;
		margin-top: 10px
	}
	.progress-bar{
		position: absolute;
		bottom: 180px;
		left: calc(50% - 40%);
		width: calc(80%);
		/*min-width: 330px;*/
		height: 30px;
		background: #dce9f9;
		border-radius: 40px;
		box-shadow: inset -6px -6px 10px -3px rgba(255, 255, 255, 0.6),
		inset 6px 6px 10px -3px rgba(0,0,0,0.3);
	}
	.progress{
		position:absolute;
		bottom:0;
		left:0;
		width: 500px;
		height: 30px;
		background: #b4d3fb;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
		z-index: 1;
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
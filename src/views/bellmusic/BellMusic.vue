<template>
	<div class="bell-music">
		预览 只有界面，没有功能，没有自适应
		<div class="music-box">
			<div class="music-left">
				<music-list></music-list>
			</div>
			<div class="music-right">
				<div class="music-title">
					勾指起誓 - Cover洛天依
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
		</div>
	</div>
</template>

<script>
	import MusicWave from "../../components/music/MusicWave";
	import MusicList from "../../components/music/MusicList";
	export default {
		name: "BellMusic",
		components: {MusicList, MusicWave}
	}
</script>

<style scoped>
	.bell-music{
		font-size: 25px;
		font-weight: bold;
	}
	.music-box{
		position: relative;
		width: 80vw;
		height: 80vh;
		min-width: 330px;
		margin: auto;
		/*margin-top: 110px;*/
		margin-top: 10px;
		background: #fff;
		overflow: hidden;
		/*background: rgba(37, 65, 103, 0.0);*/
		border-radius: 30px;
		box-shadow: -10px -10px 15px -5px rgba(255, 255, 255, 1),
								10px 10px 18px -5px rgba(0,0,0,0.4);

	}
	.music-left{
		position: absolute;
		top: 0;
		left: 0;
		width: 35%;
		min-width: 330px;
		height: 100%;
		background: #e4effe;
	}
	.music-item{
		margin: 20px;
		width: 400px;
		height: 80px;
		/*background: #000;*/
		line-height: 80px;
	}
	.music-item span{
		display: inline-block;
		vertical-align: middle;
		margin-left: 20px;
		padding-left: 5px;
		line-height: 50px;
		width: 50px;
		height: 50px
	}
	.music-item span i{
		line-height: 52px;
		font-size: 25px;
		color: #6da6df;
	}
	.music-item-play{
		background: #cde0f9;
		border-radius: 40px;
		box-shadow: -6px -6px 5px -2px rgba(255, 255, 255, 0.3),
		6px 6px 5px -2px rgba(0,0,0,0.2);
	}



	.music-right{
		position: absolute;
		top: 0;
		right: 0;
		width: 70%;
		/*min-width: 330px;*/
		height: 100%;
		background: #cde0f9;
		border-radius: 30px;
		box-shadow: -6px 0px 20px -2px rgba(0, 0, 0, 0.2);
	}

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





	.shadow {
		position: relative;
		/*max-width: 150vh;*/
		box-shadow: 0px 1px 6px  rgba(0,0,0,0.2),
								0px 0px 20px  rgba(0,0,0,0.1),
								10px 5px 10px -5px rgba(0,0,0,0.2),
								-10px 5px 10px -5px rgba(0,0,0,0.2) ;
		/*box-shadow: 25px 10px 10px -15px rgba(0,0,0,0.3);*/
	}

	.shadow::before,
	.shadow::after {
		content:"";
		position:absolute;
		z-index:-1;
		bottom:15px;
		left:10px;
		width:50%;
		height:5%;
		box-shadow:-5px 15px 10px 2px rgba(0, 0, 0, 0.6);
		transform:rotate(-2deg);
	}

	.shadow::after{
		right:10px;
		left:auto;
		transform:rotate(2deg);
	}



	.box{
		display: inline-block;
		margin: 0 25px 50px 25px;
		background: var(--color-background);
		box-shadow: 6px 4px 24px rgba(136,165,191,.36), -8px -4px 16px hsla(0,0%,100%,.6);
		border-radius: 16px;
		transition: 0.5s;
		vertical-align: middle;
	}

	.box:hover{
		box-shadow: 6px 4px 30px rgba(136,165,191,.5), -8px -4px 16px hsla(0,0%,100%,.6);
		transform:translate(-3px, -3px);
		transition: 0.5s;
	}
</style>
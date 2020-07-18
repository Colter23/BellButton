<template>
	<div class="test">
		<div class="blur">
				<div style="height: 100%; width: 3000px;">

					<div class="bg-box1">

					</div>
					<div class="bg-box2">

					</div>
					<div class="bg-box2">

					</div>
<!--					<div class="img-box box1">-->
<!--						<img class="img img1" src="../../assets/img/album/bell01.jpg" alt="">-->
<!--					</div>-->

<!--					-->
<!--					<div class="img-box box2">-->
<!--						<img class="img img2" src="../../assets/img/album/財布ちゃん 001.jpg" alt="">-->
<!--					</div>-->

<!--					-->
<!--					<div class="img-box box2">-->
<!--						<img class="img img2" src="../../assets/img/album/財布ちゃん 001.jpg" alt="">-->
<!--					</div>-->

				</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "Test"
	}
</script>

<style scoped>
	.test{
		display: block;
		margin-top: -30px;
		width: 100%;
		height: 92vh;
		/*background: #000;*/
		background-attachment: fixed;
		/*z-index: 1000;*/
	}
	.blur{
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		/*background-attachment: fixed;*/
		/*overflow-y: hidden;*/
		/*overflow-x: scroll;*/
	}

	/*.bg-box1, .bg-box2, .bg-box3{*/
	/*	position: relative;*/
	/*	height: 100%;*/
	/*	width: 500px;*/
	/*	overflow: hidden;*/
	/*	background-position: left;*/
	/*	background-size:100%;*/
	/*	background-repeat: no-repeat;*/
	/*	background-attachment: fixed;*/
	/*}*/

	/*.bg-box1{*/
	/*	background-image: url("../../assets/img/album/bell01.jpg");*/

	/*}*/
	/*.bg-box2{*/
	/*	background: url("../../assets/img/album/財布ちゃん 001.jpg");*/
	/*}*/
	/*.bg-box3{*/
	/*	background: url("../../assets/img/album/財布ちゃん 001.jpg");*/
	/*}*/
	/*.bg-box3:scroll{*/
	/*	background: url("../../assets/img/album/財布ちゃん 001.jpg");*/
	/*}*/



	.bg-box1, .bg-box2, .bg-box3{
		/*float: left;*/
		display: inline-block;
		height: 100%;
		/*overflow: hidden;*/
		/*margin-left: -100px;*/

		/*background-position: -100px 0;*/
		background-size:100%;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	.bg-box1{
		width: 600px;
		margin-left: -1500px;
		background-image: url("../../../public/img/album/bell01.jpg");
	}
	.bg-box2{
		width: 300px;
		/*margin-left: -100px;*/
		/*background-position: -100px 0;*/
		background: url("../../../public/img/album/財布ちゃん 001.jpg");

	}

	.img-box{
		float: left;
		height: 100%;
		overflow: hidden;
		transform: skew(-10deg);
		box-shadow: -6px -6px 10px -3px rgba(0, 0, 0, 0.5),
		6px 6px 10px -3px rgba(0,0,0,0.5);
	}

	.box1{
		width: 900px;
		margin-left: -100px;
	}
	.box2{
		width: 400px;
		margin-left:100px;
	}



	.img{
		float: left;
		position: relative;
		height: 100%;
		transform: skew(10deg);
	}
	.img1{
		margin-left: -150px;


	}
	.img2{
		margin-left: -100px;

	}
	.box2::before{
		content: '';
		position: absolute;
		top: 0;
		left: -100px;
		height: 100%;
		width: 400px;
		background: url("../../../public/img/album/財布ちゃん 001.jpg") 0 50% no-repeat;
		background-size: 100%;
		/*background-attachment: fixed;*/
	}
</style>
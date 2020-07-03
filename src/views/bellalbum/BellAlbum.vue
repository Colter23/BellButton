<template>
	<div class="bell-album">
		<div style="margin-bottom: 20px">Bell相册  未完成  敬请期待prpr</div>
<!--		<img class=" bell-img" src="../../assets/img/bell01.jpg" alt="">-->

		<div class="grid" >
			<div class="grid-item" v-for="(item, index) in imges">
				<img :src="imgSrc(item.path)" style="width: 100%" alt="">
			</div>
		</div>


	</div>
</template>

<script>

	import imges from "assets/imges.json";
	import Masonry from "masonry-layout";
	export default {
		name: "BellAlbum",
		data: () => ({
			imges: imges.groups[0].imglist
		}),
		methods: {
			imgSrc(src){
				return require("assets/img/album/"+src);
			},
			updated() {

			}
		},
		updated() {
			var grid = document.querySelector(".grid");
			console.log(grid)
			var msnry = new Masonry(grid, {
				// options...
				columnWidth: 200,
				itemSelector: ".grid-item",
				// columnWidth: 200,
			});
			console.log(msnry)
		}

	}
</script>

<style scoped>
	.bell-album{
		font-size: 25px;
		font-weight: bold;
		/*column-count: 4;*/
		/*column-gap: 0;*/
	}
	.img-item{
		margin: 4px;
		font-family: Helvetica;

		/*width: 500px;*/
	}
	.img-item img{
		display: block;
		width: 100%;
		height: auto;
	}






	.bell-img{
		width: 80%;
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
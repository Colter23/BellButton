<template>
	<div class="bell-album">
		<div style="margin-bottom: 20px">Bell相册  未完成  敬请期待prpr</div>

		<div class="grid" >
			<div class="grid-item" v-for="(item, index) in imges" @mouseenter="showAuthor=true" @mouseleave="showAuthor=false">
				<img @load="updated" :src="imgSrc(item.path)" style="width: 100%;" alt="">
				<span class="author" v-show="showAuthor">{{item.author}}</span>
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
			imges: imges.groups[0].imglist,
			showAuthor: false
		}),
		methods: {
			imgSrc(src){
				return "http://img.mczhengyi.top/BellButton/img/album/" + src + "!web";
			},
			updated() {
				var grid = document.querySelector(".grid");
				var msnry = new Masonry(grid, {
					columnWidth: 0,
					itemSelector: ".grid-item",
				});
			}
		}
	}
</script>

<style scoped>
	.bell-album{
		font-size: 25px;
		font-weight: bold;
	}
	.grid {
		margin: 0 auto;
		overflow: hidden;
		width: 90%;
	}
	.img-item img{
		display: block;
		width: 100%;
		height: auto;
	}
	.grid-item {
		position: relative;
		padding: 10px 10px 0;
		float: left;
		width: var(--img-width);
	}

	.author{
		position: absolute;
		bottom: 5px;
		right: 10px;
		color: #75bbea;
		font-size: 20px;
	}
</style>
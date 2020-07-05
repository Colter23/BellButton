<template>
	<div class="bell-album">
		<div style="margin-bottom: 20px">Bell相册  未完成  敬请期待prpr</div>

		<div class="grid" >
			<div class="grid-item" v-for="(item, index) in imges" :key="index">
				<album-item @imgload="updated" :imgInfo="item"></album-item>
			</div>
		</div>

	</div>
</template>

<script>

	import imges from "assets/imges.json";
	import Masonry from "masonry-layout";
	import AlbumItem from "components/album/AlbumItem";

	export default {
		name: "BellAlbum",
		components: {AlbumItem},
		data: () => ({
			imges: imges.groups[0].imglist,
		}),
		methods: {
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
	.grid-item {
		position: relative;
		padding: 10px 10px 0;
		float: left;
		width: var(--img-width);
	}

</style>
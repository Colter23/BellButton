<template>
	<div class="img-item" @mouseenter="showAuthor=true" @mouseleave="showAuthor=false">
		<img @load="updated" :src="imgSrc" style="width: 100%;" alt="">
		<span class="author" v-show="showAuthor">
			<a :href="authorLink" style="color: #fff" target="_blank">B站 {{imgInfo.author}}</a>
		</span>
	</div>
</template>

<script>
	export default {
		name: "AlbumItem",
		props: {
			imgInfo: {},
		},
		data: ()=>({
			showAuthor: false
		}),
		methods:{
			updated(){
				this.$emit('imgload')
			}
		},
		computed: {
			imgSrc(){
				return "https://img.colter.top/album/" + this.imgInfo.path + "!web"
			},
			authorLink(){
				return "https://space.bilibili.com/" + this.imgInfo.BID
			}
		}
	}
</script>

<style scoped>
	.img-item{
		width: 100%;
		/*height: 100%;*/
	}

	.author{
		display: block;
		position: absolute;
		bottom: 5px;
		right: 10px;
		height: 50px;
		width: 100%;
		line-height: 50px;
		background: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.4));;
		color: #ffffff;
		font-size: 20px;
	}
</style>
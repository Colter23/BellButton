<template>
	<div class="about">
		<div class="text-box">
			<p>日语机翻</p>
			<p>日本語Google翻訳</p>
			<p>我不行了。。快弃坑了</p>
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell4"></use>
				</svg>
				prpr
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell4"></use>
				</svg>
			</p>
		</div>
		<div class="text-box">
			<p>{{$t("about.feedback")}}</p>
			<p>QQ{{$t("about.mail")}}:3375582524@qq.com</p>
			<p>{{$t("about.letter")}}:
				<a href="https://message.bilibili.com/#/whisper/mid32868931" target="_blank" style="color: #00a2ca">
					Colter_null
				</a>
			</p>
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell2"></use>
				</svg>
				prpr
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell2"></use>
				</svg>
			</p>
		</div>
		<div class="text-box">
			<p>{{$t("about.link")}}</p>
			<p>
				<a href="https://vtbbtn.org/" target="_blank" style="color: #00a2ca">
					{{$t("about.vtbbtn")}}
				</a>
			</p>
			<p>
				<a href="https://peko.top/" target="_blank" style="color: #00a2ca">
					{{$t("about.pekobtn")}}
				</a>
			</p>
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell5"></use>
				</svg>
				prpr
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell5"></use>
				</svg>
			</p>
		</div>
		<div class="text-box">
			<p>{{$t("about.author")}}:
				<a href="https://space.bilibili.com/32868931" target="_blank" style="color: #00a2ca">
					Colter_null
				</a>
			</p>
			<p>{{$t("about.partner")}}:
				<a href="https://space.bilibili.com/30734570" target="_blank" style="color: #00a2ca">
					正義desu-null
				</a>
			</p>
			<p>{{$t("about.copyright")}}</p>
			<a href="https://icp.gov.moe" target="_blank" style="color: #00a2ca">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=2020020222" target="_blank" style="color: #00a2ca"> 2020020222号</a>
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell3"></use>
				</svg>
				prpr
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bell3"></use>
				</svg>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About"
	}
</script>

<style scoped>
	.about{
		font-size: 25px;
		font-weight: bold;
		margin-top: 250px;
	}
	.text-box{
		display: inline-block;
		/*margin-right: 50px;*/
		/*margin-bottom: 50px;*/
		margin: 0 20px 30px 20px;
		padding: 20px;
		background: var(--color-background);
		box-shadow: 6px 4px 24px rgba(136,165,191,.36), -8px -4px 16px hsla(0,0%,100%,.6);
		border-radius: 16px;
		transition: 0.5s;
		vertical-align: middle;
	}
	.text-box p{
		margin-bottom: 10px;
	}
	.icon{
		margin: 0px 6px -5px 3px;
		font-size: 30px;
	}
</style>
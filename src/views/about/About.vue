<template>
	<div class="about">

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
				<a href="https://github.com/Colter23/BellButton" target="_blank" style="color: #00a2ca">
					GitHub仓库
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
			<p>
				music素材:
				<a href="https://space.bilibili.com/38288685" target="_blank" style="color: #00a2ca">
					PYyyyyi
				</a>
			</p>
			<p>
			<p>{{$t("about.translate")}}:
				<a href="https://space.bilibili.com/396322336" target="_blank" style="color: #00a2ca">
					リイン-シュバルツァ
				</a>
			</p>
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
			<p>
			<p>{{$t("about.copyright")}}</p>
			<a href="https://icp.gov.moe" target="_blank" style="font-size: 20px;color: #00a2ca">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=2020020222" target="_blank" style="font-size: 20px;color: #00a2ca"> 2020020222号</a>
			<p>
				<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" style="font-size: 17px;color: #00a2ca">本站由 <img style="width: 70px; margin-bottom: -11px" src="../../../public/img/又拍云_logo.png" alt="">提供CDN加速</a>
			</p>
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
		margin: 0 6px -5px 3px;
		font-size: 30px;
	}
</style>
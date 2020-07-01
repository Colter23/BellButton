<template>
	<div class="about">
		<div class="text-box">
			<p>新手不太会做 没有审美不会设计 大佬勿喷</p>
			<p>页面一些元素参考Coceki的pekobutton</p>
			<p>火狐，苹果可能会有Bug，咱也不会修。。</p>
			<p>IE???还有人用IE，不会吧不会吧</p>
			<p>可能会弃坑，后面工程量有点大</p>
			<p>最后</p>
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
			<p>建议，BUG，素材可以联系</p>
			<p>QQ邮箱:3375582524@qq.com</p>
			<p>B站私信:
				<a href="https://space.bilibili.com/32868931" target="_blank" style="color: #00a2ca">
					Colter_null
				</a>
			</p>
			<p>最好B站私信</p>
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
			<p>友情链接</p>
			<p>
				<a href="https://vtbbtn.org/" target="_blank" style="color: #00a2ca">
					VTuber语音按钮集合
				</a>
			</p>
			<p>
				<a href="https://peko.top/" target="_blank" style="color: #00a2ca">
					Peko按钮
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
			<p>作者:
				<a href="https://space.bilibili.com/32868931" target="_blank" style="color: #00a2ca">
					Colter_null
				</a>
			</p>
			<p>本站为舔食者创作，与ViViD官方无关</p>
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
<template>
	<div>
		<nav-bar class="nav-bar">
			<!--左插槽-->
			<div slot="left" class="back" @click="sideBarOn" style="width: 100%; font-size: 30px">
				<i class="fas fa-align-left" style="color: #f2f4f3"></i>
			</div>
			<!--中心插槽-->
			<div slot="center" class="link">
				<router-link to="/">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-bell3"></use>
					</svg>
					<span>BellInfo</span>
				</router-link>
				<router-link to="/audio">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-yinle"></use>
					</svg>
					<span>BellButton</span>
				</router-link>
				<router-link to="/album">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-album"></use>
					</svg>
					<span>BellAlbum</span>
				</router-link>
				<router-link to="/music">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-KTV"></use>
					</svg>
					<span>BellMusic</span>
				</router-link>
				<router-link to="/video">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-tvgame"></use>
					</svg>
					<span>BellVideo</span>
				</router-link>
			</div>
			<!--右插槽-->
			<div slot="right" class="link">
				<svg class="icon" :class="isLanguageBoxOn?'translate-box-active':''" aria-hidden="true" @click="switchLanguage" style="width: 50%; height: 49px; padding: 10px 0; color: #fff; margin: 0; vertical-align: middle;">
					<use xlink:href="#icon-ic_translate_px"></use>
				</svg>
				<!--语言切换-->
				<div class="translate-box" ref="language">
					<div class="ts-item top-radius ts-zh" @click="changeLanguage('zh')">简体中文</div>
					<div class="ts-item bottom-radius ts-ja" @click="changeLanguage('ja')">日本語</div>
				</div>
				<router-link to="/about" style="width: 50%; font-size: 18px; vertical-align: middle;">About</router-link>
			</div>
		</nav-bar>

		<!--侧边栏-->
		<div class="sidebar" ref="sidebar">
			<router-link to="/">
				<svg class="icon" style="font-size: 30px" aria-hidden="true">
					<use xlink:href="#icon-bell3"></use>
				</svg>
				<span>BellInfo</span>
			</router-link>
			<router-link to="/audio">
				<svg class="icon" style="font-size: 30px" aria-hidden="true">
					<use xlink:href="#icon-yinle"></use>
				</svg>
				<span>BellButton</span>
			</router-link>
			<router-link to="/album">
				<svg class="icon"  style="font-size: 30px" aria-hidden="true">
					<use xlink:href="#icon-album"></use>
				</svg>
				<span>BellAlbum</span>
			</router-link>
			<router-link to="/music">
				<svg class="icon"  style="font-size: 30px" aria-hidden="true">
					<use xlink:href="#icon-KTV"></use>
				</svg>
				<span>BellMusic</span>
			</router-link>
			<router-link to="/video">
				<svg class="icon"  style="font-size: 30px" aria-hidden="true">
					<use xlink:href="#icon-tvgame"></use>
				</svg>
				<span>BellVideo</span>
			</router-link>
		</div>

		<!--路由-->
		<div style="margin-top: 80px" @click="sideBarOff">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import NavBar from "components/navbar/NavBar";
	export default {
		name: "MainNavBar",
		components: {NavBar},
		data: ()=>({
			isSideBarOn: false,
			isLanguageBoxOn: false
		}),
		methods: {
			/**
			 * 开侧边栏
			 */
			sideBarOn() {
				if (this.isSideBarOn) {
					this.isSideBarOn = false;
					this.$refs.sidebar.style.width = "0%";
				} else {
					this.isSideBarOn = true;
					this.$refs.sidebar.style.width = "60%";
				}
			},
			/**
			 * 关侧边栏
			 */
			sideBarOff() {
				if (this.isSideBarOn) {
					this.isSideBarOn = false;
					this.$refs.sidebar.style.width = "0%";
				}
				if (this.isLanguageBoxOn){
					this.isLanguageBoxOn = false;
					this.$refs.language.style.display = "none";
				}
			},
			/**
			 * 语言box快关
			 */
			switchLanguage(){
				if (this.isLanguageBoxOn){
					this.isLanguageBoxOn = false;
					this.$refs.language.style.display = "none";
				} else {
					this.isLanguageBoxOn = true;
					this.$refs.language.style.display = "block";
				}
			},
			/**
			 * 切换语言
			 * @param type
			 */
			changeLanguage(type){
				localStorage.setItem('locale',type);
				this.$i18n.locale = type;
				this.isLanguageBoxOn = false;
				this.$refs.language.style.display = "none";
			}
		}
	}
</script>

<style scoped>
	.nav-bar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-blend-mode: normal,luminosity;
		backdrop-filter: blur(10px);
		background: linear-gradient(200.6deg,rgba(var(--color-blue1),.54) 19.14%,rgba(var(--color-blue2),.42) 154.68%);
		box-shadow: 3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6);/*rgba(104,102,255,.44)*/
		z-index: 10;
	}
	.link{
		position: relative;
		height: 50px;
	}
	.link a {
		display: inline-block;
		width: 20%;
		margin: 0;
		font-weight: bold;
		color: #f2f4f3;
		text-decoration: none;
	}
	.link a span{
		font-size: var(--font-text-size);
	}
	.link a.router-link-exact-active {
		height: 50px;
		background: rgba(var(--color-blue2),.42);
	}

	.icon{
		margin: 10px 6px 0 3px;
		font-size: var(--font-icon-size);
	}

	.translate-box{
		display: none;
		position: absolute;
		top: 60px;
		right: calc(var(--navbar-width) + var(--navbar-width)/2 - 60px);
		width: 120px;
		height: 100px;
		border-radius: 10px;
		background-blend-mode: normal,luminosity;
		backdrop-filter: blur(10px);
		background: linear-gradient(200.6deg,rgba(var(--color-blue1),.54) 19.14%,rgba(var(--color-blue2),.42) 154.68%);
		box-shadow: 3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6);/*rgba(104,102,255,.44)*/
		z-index: 10;
	}
	.translate-box::before{
		content: '';
		position: absolute;
		top: -24px;
		left: 50px;
		width: 0;
		height: 0;
		border: 12px solid transparent;
		border-bottom-color: rgba(var(--color-blue1),.62);
		z-index: 9;
	}
	.translate-box-active{
		background: rgba(var(--color-blue2),.42);
	}
	.ts-item{
		display: block;
		height: 50px;
		color: #fff;
		line-height: 50px;
		font-size: 20px;
		transition: 0.3s;
	}
	.ts-item:hover{
		background: rgba(var(--color-blue2),.42);
		transition: 0.3s;
	}
	.top-radius{
		border-radius: 10px 10px 0 0;
	}
	.bottom-radius{
		border-radius: 0 0 10px 10px;
	}

	.sidebar{
		position: fixed;
		top: 0;
		left: 0;
		width: 0%;
		max-width: 300px;
		height: 100%;
		margin-top: 50px;
		background-blend-mode: normal,luminosity;
		backdrop-filter: blur(10px);
		background: linear-gradient(200.6deg,rgba(var(--color-blue1),.54) 19.14%,rgba(var(--color-blue2),.42) 154.68%);
		box-shadow: 3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6);/*rgba(104,102,255,.44)*/
		overflow: hidden;
		transition: 0.6s;
		z-index: 100;
	}
	.sidebar a{
		display: block;
		width: 100%;
		height: 60px;
		font-size: 25px;
		line-height: 60px;
		font-weight: bold;
		color: #f2f4f3;
		text-decoration: none;
		vertical-align: middle;
		border-bottom: solid 1px #f2f4f3;
	}
</style>
<template>
	<div>
		<nav-bar class="nav-bar">
			<div slot="left" class="back" @click="sideBarOn" style="width: 100%; font-size: 30px">🔔</div>
			<div slot="center" class="link">
				<router-link to="/"><span>BellInfo</span>🔔</router-link>
				<router-link to="/audio"><span>BellButton</span>🎶</router-link>
				<router-link to="/album"><span>BellAlbum</span>🎨</router-link>
				<router-link to="/music"><span>BellMusic</span>🎤</router-link>
				<router-link to="/video"><span>BellVideo</span>📺</router-link>
			</div>
			<div slot="right" class="link">
				<router-link to="/about" style="width: 100%; font-size: 18px">关于</router-link>
			</div>
		</nav-bar>

		<div class="sidebar" ref="sidebar">
			<router-link to="/" style="margin-top: 5px">BellInfo🔔</router-link>
			<router-link to="/audio">BellButton🎶</router-link>
			<router-link to="/album">BellAlbum🎨</router-link>
			<router-link to="/music">BellMusic🎤</router-link>
			<router-link to="/video">BellVideo📺</router-link>
		</div>

		<div style="margin-top: 80px"  @click="sideBarOff">
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
		data() {
			return {
				isSideBarOn: false,
			}
		},
		methods: {
			sideBarOn() {
				if (this.isSideBarOn) {
					this.isSideBarOn = false;
					this.$refs.sidebar.style.width = "0%";
				} else {
					this.isSideBarOn = true
					this.$refs.sidebar.style.width = "60%";
				}
			},
			sideBarOff() {
				if (this.isSideBarOn) {
					this.isSideBarOn = false;
					this.$refs.sidebar.style.width = "0%";
				}
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
		height: 50px;
	}
	.link a {
		display: inline-block;
		width: 20%;
		margin: 0;
		font-size: var(--font-icon-size);
		font-weight: bold;
		color: #f2f4f3;
		text-decoration: none;
		vertical-align: middle;
	}
	.link a span{
		font-size: var(--font-text-size);
		vertical-align: middle;
	}
	.link a.router-link-exact-active {
		height: 50px;
		background: rgba(var(--color-blue2),.42);
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
		z-index: 5;
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
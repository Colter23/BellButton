<template>
	<div class="volume">
		<span class="volume-text">{{$t("button.volume")}}
			<svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Audio"></use>
			</svg>
		</span>
		<input class="range" ref="range" type="range"  value="50" min="0" max="100" step="1"  @mousemove="rangeChange()">
	</div>
</template>

<script>
	export default {
		name: "AudioVolume",
		data(){
			return{
			}
		},
		methods: {
			rangeChange(){
				let range = this.$refs.range;
				this.$store.commit("setAudioVolume", range.value/100);
				range.style.backgroundSize = range.value/1+"% 100%";
			}
		}
	}
</script>

<style scoped>
	.volume{
		display: inline-block;
		position: relative;
	}
	.volume-text{
		line-height: 25px;
		font-size: 25px;
		font-weight: bold;

	}
	.range{
		margin-top: -5px;
		margin-left: 2px;
		vertical-align: middle;
		-webkit-appearance: none;
		width: 200px;
		border-radius: 20px;
		background: linear-gradient(to right, rgba(var(--color-blue1), 0.7), rgba(var(--color-blue2),0.7)) no-repeat;
		background-size: 50% 100%;
	}
	.range::-webkit-slider-thumb { /*滑块*/
		-webkit-appearance: none;
		height: 30px;
		width: 20px;
		background: rgba(255, 255, 255, 0.0);
	}
	.range::-webkit-slider-runnable-track { /*轨道*/
		height: 30px;
		border-radius: 20px;
		box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em rgba(13, 17, 18, 0.6)
	}
	.range:focus {
		outline: none;
	}
</style>
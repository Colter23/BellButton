/**
 * 音频律动  算法来自 https://github.com/xiangyuecn/Recorder
 */

var wave = function(ctx, width, height) {

	this.ctx = ctx;
	this.set = {
		width: 400, //显示宽度
		height: 100, //显示高度
		scale: 2, //缩放系数，应为正整数，使用2(3? no!)倍宽高进行绘制，避免移动端绘制模糊
		speed: 14, //移动速度系数，越大越快

		lineWidth: 2, //线条基础粗细

		//渐变色配置：[位置，css颜色，...] 位置: 取值0.0-1.0之间
		linear1: [
			0,
			"rgba(150,96,238,1)",
			0.2,
			"rgb(170,79,249)",
			1,
			"rgba(53,199,253,1)",
		], //线条渐变色1，从左到右
		linear2: [0, "rgba(209,130,255,0.6)", 1, "rgba(53,199,255,0.6)"], //线条渐变色2，从左到右
		linearBg: [0, "rgba(255,255,255,0.2)", 1, "rgba(54,197,252,0.2)"], //背景渐变色，从上到下
	};

	this.scale = this.set.scale;
	this.width = (width ? width : this.set.width) * this.scale;
	this.height = (height ? height : this.set.height) * this.scale;

	this.linear1 = this.genLinear(this.width, this.set.linear1);
	this.linear2 = this.genLinear(this.width, this.set.linear2);
	this.linearBg = this.genLinear(this.height, this.set.linearBg, true);

	this._phase = 0;

};

/**
 * 设置渐变方案
 * @param size
 * @param colors
 * @param top
 * @returns {CanvasGradient}
 */
wave.prototype.genLinear = function(size, colors, top) {
	var rtv = this.ctx.createLinearGradient(0, 0, top ? 0 : size, top ? size : 0);
	for (var i = 0; i < colors.length;) {
		rtv.addColorStop(colors[i++], colors[i++]);
	}
	return rtv;
}

/**
 * 计算路径
 * @param frequency
 * @param amplitude
 * @param phase
 * @returns {[]}
 */
wave.prototype.genPath = function(frequency, amplitude, phase) {
	//曲线生成算法参考 https://github.com/HaloMartin/MCVoiceWave/blob/f6dc28975fbe0f7fc6cc4dbc2e61b0aa5574e9bc/MCVoiceWave/MCVoiceWaveView.m#L268
	var rtv = [];

	//var maxAmplitude = (this.height * this.scale) / 2;
	var maxAmplitude = this.height / 2;

	for (var x = 0; x < this.width; x += this.scale) {
		var scaling = (1 + Math.cos(Math.PI + (x / this.width) * 2 * Math.PI)) / 2;
		var y =
				scaling *
				maxAmplitude *
				amplitude *
				Math.sin(2 * Math.PI * (x / this.width) * frequency + phase) +
				maxAmplitude;
		rtv.push(y);
	}
	return rtv;
}

/**
 * 输入数据，绘制
 * @param pcmData 原数据
 * @param powerLevel 变值，摇摆幅度
 * @param sampleRate 码率
 */
wave.prototype.input = function(pcmData, powerLevel, sampleRate) {
	var speedx = (this.set.speed * pcmData.length) / sampleRate;
	var phase = (this._phase -= speedx); //位移速度
	var amplitude = powerLevel / 200;
	var path1 = this.genPath(2, amplitude, phase);
	var path2 = this.genPath(1.8, -amplitude, phase + speedx * 5);

	//开始绘制图形
	this.ctx.clearRect(0, 0, this.width, this.height);

	//绘制包围背景
	this.ctx.beginPath();
	for (var i = 0, x = 0; x < this.width; i++, x += this.scale) {
		if (x == 0) {
			this.ctx.moveTo(x, path1[i]);
		} else {
			this.ctx.lineTo(x, path1[i]);
		}
	}
	i--;
	for (var x = this.width - 1; x >= 0; i--, x -= this.scale) {
		this.ctx.lineTo(x, path2[i]);
	}

	this.ctx.closePath();
	this.ctx.fillStyle = this.linearBg;
	this.ctx.fill();

	//绘制线
	this.drawPath(path2, this.linear2);
	this.drawPath(path1, this.linear1);

}

/**
 * 绘制路径
 * @param path
 * @param linear
 */
wave.prototype.drawPath = function(path, linear) {
	this.ctx.beginPath();
	this.ctx.lineCap = "round";
	for (var i = 0, x = 0; x < this.width; i++, x += this.scale) {
		if (x == 0) {
			this.ctx.moveTo(x, path[i]);
		} else {
			this.ctx.lineTo(x, path[i]);
		}
	}
	this.ctx.lineWidth = this.set.lineWidth * this.scale;
	this.ctx.lineCap = "round";
	this.ctx.strokeStyle = linear;
	this.ctx.stroke();
}

module.exports = wave;
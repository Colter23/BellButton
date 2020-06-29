const path = require('path');//引入path模块
function resolve(dir){
	return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
	chainWebpack:(config)=>{
		config.resolve.alias
				.set('@',resolve('./src'))
				.set('components',resolve('./src/components'))
				.set('assets',resolve('./src/assets'))
				.set('common',resolve('./src/common'))
				.set('network',resolve('./src/network'))
				.set('views',resolve('./src/views'))
		//set第一个参数：设置的别名，第二个参数：设置的路径

	}
}
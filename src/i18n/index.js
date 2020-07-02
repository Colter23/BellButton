import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh from './config/zh.json'
import en from './config/en.json'
import ja from './config/ja.json'

Vue.use(VueI18n);

const i18n = new VueI18n({
	//默认语言
	locale: localStorage.getItem('locale') || 'zh',
	messages: {
		zh, //中文
		ja, //日文
		en, //英文
	}
})

export default i18n;

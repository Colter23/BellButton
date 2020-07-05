import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@fortawesome/fontawesome-free/css/all.css'
import 'assets/iconfont/iconfont'


Vue.config.productionTip = false

document.title = "猫芒ベル-Bell"

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

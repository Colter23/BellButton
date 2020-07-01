import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import 'assets/iconfont/iconfont'


Vue.config.productionTip = false

document.title = "猫芒ベル-Bell"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

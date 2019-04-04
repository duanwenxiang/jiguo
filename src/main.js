import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Observer from '../public/common/js/Observer'


Vue.prototype.Observer = Observer

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

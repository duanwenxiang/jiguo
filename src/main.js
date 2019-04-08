import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Observer from '../public/common/js/Observer'
import Header from './common/header'
import Loading from './common/loading'
import 'mint-ui/lib/style.css'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);
Vue.component("Header",Header)
Vue.component("Loading",Loading)
Vue.prototype.Observer = Observer

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import tryout from './tryout'
import newgoods from './newgoods'
import tys from './tys'
import youpin from './youpin'
import shop from './shop'
import connect from './connect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home",
    },
    home,
    tryout,
    newgoods,
    tys,
    youpin,
    shop,
    connect,
    {
      path:"/**/",
      redirect:"/home",
    }
  ]
})

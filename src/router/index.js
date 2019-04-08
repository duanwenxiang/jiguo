import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import tryout from './tryout'
import newgoods from './newgoods'
import phone from './phone'
import mall from './mall'
import search from './search'
import sale from './sale'
import bill from './bill'
import ty from './ty'

import tys from './tys'
import youpin from './youpin'
import shop from './shop'
import connect from './connect'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home",
    },
    home,
    tryout,
    newgoods,
    phone,
    mall,
    search,
    sale,
    bill,
    ty,
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

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next();
})

export default router;

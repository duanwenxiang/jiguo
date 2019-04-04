import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import tryout from './tryout'
import newgoods from './newgoods'
import sale from './sale'
import bill from './bill'
import ty from './ty'

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
    sale,
    bill,
    ty,
    {
      path:"/**/",
      redirect:"/home",
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import tryout from './tryout'
import newgoods from './newgoods'
import phone from './phone'

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

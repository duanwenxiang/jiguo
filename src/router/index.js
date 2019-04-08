import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import tryout from './tryout'
import newgoods from './newgoods'
<<<<<<< HEAD
import phone from './phone'
import mall from './mall'
import search from './search'
=======
import sale from './sale'
import bill from './bill'
import ty from './ty'
>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2

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
<<<<<<< HEAD
    phone,
    mall,
    search,
=======
    sale,
    bill,
    ty,
>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2
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

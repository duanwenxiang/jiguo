import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import Home from "./home"
import Tryout from './tryout'
import NewGoods from './newgoods'
import Search from './search'
=======
import Home from './home'
import Sale from './sale'
import Bill from './bill'
import Tyall from './tyall'
import Tyty from './tyty'
import Tyqty from './tyqty'
>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  modules:{
    Home,
    Tryout,
    NewGoods,
    Search
  }
=======
    modules:{
      Home,
      Sale,
      Bill,
      Tyall,
      Tyty,
      Tyqty
    }
>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2
})

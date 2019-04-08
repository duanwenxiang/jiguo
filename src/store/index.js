import Vue from 'vue'
import Vuex from 'vuex'
import Tryout from './tryout'
import NewGoods from './newgoods'
import Search from './search'
import Home from './home'
import Sale from './sale'
import Bill from './bill'
import Tyall from './tyall'
import Tyty from './tyty'
import Tyqty from './tyqty'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      Home,
      Tryout,
      NewGoods,
      Search,
      Sale,
      Bill,
      Tyall,
      Tyty,
      Tyqty
    }
})

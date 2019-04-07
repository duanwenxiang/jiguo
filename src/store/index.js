import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./home"
import Tryout from './tryout'
import NewGoods from './newgoods'
import Search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Home,
    Tryout,
    NewGoods,
    Search
  }
})

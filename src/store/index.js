import Vue from 'vue'
import Vuex from 'vuex'
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
      Sale,
      Bill,
      Tyall,
      Tyty,
      Tyqty
    }
})

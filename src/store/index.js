import Vue from 'vue'
import Vuex from 'vuex'
import registros from "../modules/insertRegister"

Vue.use(Vuex)

export default new Vuex.Store({
 state:{},
 modules:{
  registros:registros
 }
})

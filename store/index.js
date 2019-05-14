import Vue from 'vue'
import Vuex from 'vuex'

import market from './modules/market'
import mall from './modules/mall'
import calculator from './modules/calculator'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    market,
    mall,
    calculator
  },
})

export default store

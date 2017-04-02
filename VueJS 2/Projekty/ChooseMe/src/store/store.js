import Vue from 'vue'
import Vuex from 'vuex'
import soups from './dishes/soups'
import mains from './dishes/mains'
import { beverages, drinks, desserts } from './dishes/drinks-and-desserts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soups,
    mains,
    drinks,
    beverages,
    desserts,
    order: [],
    totalCost: 0,
    totalTime: 0
  },
  mutations: {
    testOrderMutation (state, payload) {
      state.order.push(payload)
      state.totalCost += payload.price
      state.totalTime += payload.prepTime
      console.log('mutation')
      console.log(state.order)
      console.log(payload)
    }
  },
  actions: {
    testOrder ({commit}, payload) {
      commit('testOrderMutation', payload)
      console.log('Action')
    }
  }
})

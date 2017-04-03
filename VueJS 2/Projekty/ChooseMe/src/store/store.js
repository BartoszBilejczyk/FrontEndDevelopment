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
    soupOrder (state, payload) {
      if (state.order.length) {
        for (let i = 0; i < state.order.length; i++) {
          if (state.order[i].name === payload.name) {
            state.order[i].quantity++
          } else {
            state.order.push(payload)
            state.totalCost += payload.price
            state.totalTime += payload.prepTime
            break
          }
        }
      } else {
        state.order.push(payload)
        state.totalCost += payload.price
        state.totalTime += payload.prepTime
      }
    },
    drinkDessertOrder (state, payload) {
      state.order.push(payload)
      state.totalCost += payload.price
      state.totalTime += payload.prepTime
    },
    mainCourseOrder (state, payload) {
      state.order.push(payload)
      state.totalCost += payload.price
      state.totalTime += payload.prepTime
    }
  },
  actions: {
    soupOrder ({commit}, payload) {
      commit('soupOrder', payload)
      console.log('Action')
    },
    drinkDessertOrder ({commit}, payload) {
      commit('drinkDessertOrder', payload)
    },
    mainCourseOrder ({commit}, payload) {
      commit('mainCourseOrder', payload)
    }
  }
})

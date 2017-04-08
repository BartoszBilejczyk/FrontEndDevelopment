import Vue from 'vue'
import Vuex from 'vuex'
import {soups, mains, drinks, mealTypes} from './meals'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mealTypes,
    soups,
    mains,
    drinks,
    order: [],
    subtotal: 0,
    totalTime: 0,
    totalCost: 0,
    shipping: 5,
    popupVisible: false,
    activeMeal: ''
  },
  mutations: {
    addItem (state, payload) {
      console.log(state.mealTypes)
      let found = false

      if (state.order.length) {
        for (let i = 0; i < state.order.length; i++) {
          if (state.order[i].name === payload.name) {
            found = true
            state.order[i].quantity++
            break
          }
        }
        if (!found) {
          state.order.push(payload)
          state.subtotal += payload.price
          state.totalTime += payload.prepTime
          state.totalCost = state.subtotal + state.shipping
        }
      } else {
        state.order.push(payload)
        state.subtotal += payload.price
        state.totalTime += payload.prepTime
        state.totalCost = state.subtotal + state.shipping
      }
    },
    openPopup (state, payload) {
      state.popupVisible = true
      state.activeMeal = payload.activeMeal
      console.log('passed')
    },
    closePopup (state) {
      state.popupVisible = false
    }
  },
  actions: {
    addItem ({commit}, payload) {
      commit('addItem', payload)
      console.log('Action')
    },
    openPopup ({commit}, payload) {
      commit('openPopup', payload)
    },
    closePopup ({commit}) {
      commit('closePopup')
    }
  }
})

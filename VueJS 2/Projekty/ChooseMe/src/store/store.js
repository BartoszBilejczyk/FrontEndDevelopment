import Vue from 'vue'
import Vuex from 'vuex'
import mealTypes from './meals'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mealTypes,
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
        }
      } else {
        state.order.push(payload)
      }
      state.subtotal += payload.price
      state.totalTime += payload.prepTime
      state.totalCost = state.subtotal + state.shipping
    },
    deleteItem (state, payload) {
      for (let i = 0; i < state.order.length; i++) {
        if (state.order[i].name === payload.name) {
          if (state.order[i].quantity > 1) {
            state.order[i].quantity--
            break
          } else {
            state.order.splice(i, 1)
          }
        }
      }
      state.subtotal -= payload.price
      state.totalTime -= payload.prepTime
      state.totalCost = state.subtotal + state.shipping
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
      console.log('Added')
    },
    deleteItem ({commit}, payload) {
      commit('deleteItem', payload)
      console.log('Deleted')
    },
    openPopup ({commit}, payload) {
      commit('openPopup', payload)
    },
    closePopup ({commit}) {
      commit('closePopup')
    }
  }
})

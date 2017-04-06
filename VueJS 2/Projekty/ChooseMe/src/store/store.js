import Vue from 'vue'
import Vuex from 'vuex'
import soups from './dishes/soups'
import mains from './dishes/mains'
import { beverages, drinks, desserts } from './dishes/drinks-and-desserts.js'
import mealTypes from './meals'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mealTypes,
    soups,
    mains,
    drinks,
    beverages,
    desserts,
    order: [],
    subtotal: 0,
    totalTime: 0,
    totalCost: 0,
    shipping: 5
  },
  // addItem: function (index) {
  //           this.total += this.price;
  //
  //           var item = this.products[index];
  //           var found = false;
  //           console.log(this.cart);
  //
  //           for (var i = 0; i < this.cart.length; i++) {
  //               // check if the product being added is already in the cart, so that it's not shown again
  //               if (this.cart[i].id === item.id) {
  //                   found = true;
  //                   this.cart[i].qty++;
  //                   break;
  //               }
  //           }
  //           if (!found) {
  //               // if it's not, add it to the cart
  //               this.cart.push({
  //                   id: item.id,
  //                   title: item.title,
  //                   qty: 1,
  //                   image: item.link,
  //                   price: this.price
  //               })
  //           }
  //       },
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
    }
  },
  actions: {
    addItem ({commit}, payload) {
      commit('addItem', payload)
      console.log('Action')
    }
  }
})

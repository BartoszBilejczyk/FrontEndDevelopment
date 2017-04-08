import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Meals from '../components/products/Meals.vue'
import MealDetails from '../components/products/MealDetails.vue'
import Checkout from '../components/order/Checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'main-category',
      path: '/:category',
      index: ':index',
      components: {
        'meals': Meals
      }
    },
    {
      name: 'details',
      path: '/:name',
      component: MealDetails
    },

    {
      name: 'checkout',
      path: '/checkout',
      components: {
        'checkout': Checkout
      }
    }
  ]
})

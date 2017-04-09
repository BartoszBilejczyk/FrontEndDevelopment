import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Meals from '../components/products/Meals.vue'
import MealDetails from '../components/products/MealDetails.vue'
import Checkout from '../components/order/Checkout.vue'
import Order from '../components/order/Order.vue'
import Shipping from '../components/order/Shipping.vue'
import Payment from '../components/order/Payment.vue'
import Confirmation from '../components/order/Confirmation.vue'

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
      path: '/checkout/order',
      components: {
        'checkout': Checkout
      },
      children: [
        {
          name: 'shipping',
          path: '/checkout/shipping',
          component: Shipping
        },
        {
          name: 'payment',
          path: '/checkout/payment',
          component: Payment
        },
        {
          name: 'confirmation',
          path: '/checkout/confirmation',
          component: Confirmation
        },
        {
          name: 'order',
          path: '/checkout/order',
          component: Order
        }
      ]
    }
  ]
})

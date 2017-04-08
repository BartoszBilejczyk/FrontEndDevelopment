import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Meals from '../components/products/Meals.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:category',
      index: ':index',
      name: 'main-category',
      component: Meals
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Soups from '../components/soup/Soups.vue'

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
      name: 'main-category',
      component: Soups
    }
  ]
})

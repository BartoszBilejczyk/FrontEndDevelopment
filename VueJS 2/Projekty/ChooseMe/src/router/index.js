import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import DrinkDessert from '../components/drinks/DrinkDessert.vue'
import MainCourse from '../components/main/MainCourse.vue'
import Soup from '../components/soup/Soup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/soup',
      name: 'soup',
      component: Soup
    },
    {
      path: '/main',
      name: 'main',
      component: MainCourse
    },
    {
      path: '/drink-and-dessert',
      name: 'drink',
      component: DrinkDessert
    }
  ]
})

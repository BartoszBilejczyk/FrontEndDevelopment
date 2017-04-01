import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stocks from '../components/stocks/Stocks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      component: Stocks
    }
  ]
})

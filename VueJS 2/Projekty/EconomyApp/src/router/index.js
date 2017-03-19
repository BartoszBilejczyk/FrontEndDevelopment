import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import CategoryList from '../components/CategoryList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        'list-view': Home
      }
    },
    {
      path: '/:category',
      name: 'main-category',
      components: {
        'list-view': CategoryList
      }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'main',
      path: '/',
      components: {
        'list-router-view': require('../components/Main.vue')
      }
    },
    {
      name: 'main-category',
      // :category will be used in params in router-view in html
      path: '/movies/:category',
      components: {
        'list-router-view': require('../components/MovieList.vue')
      }
    }
  ]
})

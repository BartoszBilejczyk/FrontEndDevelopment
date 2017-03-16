import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import MovieList from '../components/MovieList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'main',
      path: '/',
      components: {
        'list-router-view': Main
      }
    },
    {
      name: 'main-category',
      // :category will be used in params in router-view in html
      path: '/movies/:category',
      components: {
        'list-router-view': MovieList
      }
    },
    {
      name: 'search',
      path: '/search/:query',
      components: {
        'search-router-view': MovieList
      }
    }
  ]
})

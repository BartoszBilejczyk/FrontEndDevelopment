import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        main: Main,
        movies: Movies
      }
    }
  ]
})

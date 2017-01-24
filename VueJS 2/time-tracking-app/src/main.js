// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// to apply router and resource to our instance (before instance)

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// What components should routes use

router.map({
  '/hello': {
    component: Hello
  }
})

// If route is invalid, redirect it to home

router.redirect({
  '*': '/hello'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

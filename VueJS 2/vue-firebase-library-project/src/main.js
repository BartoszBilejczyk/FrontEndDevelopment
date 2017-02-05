// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'// npm install firebase vuefire --save - to install this. It makes binding vue and firebase easier

/* eslint-disable no-new */

Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

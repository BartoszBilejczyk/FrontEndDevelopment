// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */

export const CategoryBus = new Vue({

})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

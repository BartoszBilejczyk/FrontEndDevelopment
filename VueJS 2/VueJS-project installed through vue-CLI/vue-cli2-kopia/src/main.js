import Vue from 'vue'
import App from './App.vue'
import PaintGarage from './PaintGarage.vue' // It's imported so that we can use it ./ in the same folder for Webpack to find it.

Vue.component('car-color-changer', CarColor)  // create a component called '' from CarColor (imported Home from Home.vue)

new Vue({
  el: '#app',
  render: h => h(App)
})

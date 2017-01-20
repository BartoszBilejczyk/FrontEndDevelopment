import Vue from 'vue'
import App from './App.vue'
import CarColor from './CarColor.vue'
import PaintGarage from './PaintGarage.vue' // It's imported so that we can use it ./ in the same folder for Webpack to find it.

Vue.component('car-color-changer', PaintGarage)  // create a component called ''
// this car-color-changer component is used locally

new Vue({
  el: '#app',
  render: h => h(App)
})

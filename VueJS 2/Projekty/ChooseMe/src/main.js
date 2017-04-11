// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Materials from 'vue-materials'
import store from './store/store'

Vue.use(Materials)

Vue.config.productionTip = false

Vue.filter('card', function (value) {
  value = value.toString().replace(/[^0-9]/g, '').replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
  return value
//   $('#credit-card').on('keypress change', function () {
//    $(this).val(function (index, value) {
//        return value.replace(/[^0-9]/g, "").replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
//    });
// });
})

Vue.filter('capitalize', function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

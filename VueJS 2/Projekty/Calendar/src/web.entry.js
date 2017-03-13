import Vue from 'vue';
import './style.scss';
import App from './components/App.vue';

import moment from '../node_modules/moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });


new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  }
});

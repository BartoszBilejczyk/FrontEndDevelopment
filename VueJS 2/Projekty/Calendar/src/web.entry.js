import Vue from 'vue';
import './style.scss';

import store from './store'
import App from './components/App.vue';

import moment from '../node_modules/moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

//replace state object from index.js with object I provide here
let events = [
  { description: 'Do laundry', date: moment('2017-03-03', 'YYYY-MM-DD') },
  { description: 'Meeting with CEO', date: moment('2017-04-03', 'YYYY-MM-DD') },
  { description: `Standup in Jack's Cinema`, date: moment('2017-02-03', 'YYYY-MM-DD') }
]

// initialState merges store.state and then events is passed into it, and upon loading store.state.events is not empty anymore

let initialState = Object.assign({, store.state, { events }})
store.replaceState(initialState)

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});

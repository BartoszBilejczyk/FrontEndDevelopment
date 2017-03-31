import Vue from 'vue';
import './style.scss';

import store from './store'
import App from './components/App.vue';

import moment from '../node_modules/moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });


let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})


// initialState merges store.state and then events is passed into it, and upon loading store.state.events is not empty anymore

let initialState = Object.assign({}, store.state, { events })
console.log(initialState)
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

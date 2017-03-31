// server entry file

import Vue from 'vue';

import store from './store'

import moment from '../node_modules/moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';



export default function(events) {
  //replace state object from index.js with object I provide here
  // initialState merges store.state and then events is passed into it, and upon loading store.state.events is not empty anymore

  let initialState = Object.assign({}, store.state, { events })
  store.replaceState(initialState)

  return new Vue({
    data: {
      moment
    },
    components: {
      App
    },
    store,
    render(createElement) {
        return createElement(
        'div',
        { attrs: { id: 'app' } },
        [
          createElement('app')
        ]
      )
    }
  });
}

// this just includes things for the browser. Entry.js includes eveything for server-side rendering. This is client-entry file 

import './style.scss';

import moment from '../node_modules/moment-timezone'
moment.tz.setDefault('UTC')

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})

import VueCalendar from './entry.js'

VueCalendar(events).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC');

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentYear: moment().year(),
    currentMonth: moment().month() + 1,
    eventFormPositionX: 0,
    eventFormPositionY: 0,
    eventFormDate: moment(),
    eventFormActive: false,
    isDayActive: false,
    events: [
      { description: 'Do laundry', date: moment('2017-03-03', 'YYYY-MM-DD') },
      { description: 'Meeting with CEO', date: moment('2017-04-03', 'YYYY-MM-DD') },
      { description: `Standup in Jack's Cinema`, date: moment('2017-02-03', 'YYYY-MM-DD') }
    ]
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload
    },
    eventFormPosition(state, payload) {
      state.eventFormPositionX = payload.x
      state.eventFormPositionY = payload.y
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload
    },
    // this will send data to the server
    addEvent(state, payload) {
      let obj = {
        description: payload,
        date: state.eventFormDate
      }
      state.events.push(obj);
      axios.post('/add_event', obj)
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload
    },
    changeActiveDay(state, payload) {
      state.isDayActive = payload
    }
  }
})

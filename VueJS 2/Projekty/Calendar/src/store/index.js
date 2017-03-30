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
      state.events.push(payload);
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload
    },
    changeActiveDay(state, payload) {
      state.isDayActive = payload
    }
  },
  actions: {
    addEvent(context, payload) {
      return new Promise((resolve, reject) => {
        let obj = {
          description: payload,
          date: context.state.eventFormDate
        }
        // I don't want to commit the addEvent until I've got the response 200 from the server (use a promise)
        axios.post('/add_event', obj).then(response => {
          if (response.status === 200) {
            context.commit('addEvent', obj)
            resolve()
          } else {
            reject()
          }
        })
      })
    }
  }
})

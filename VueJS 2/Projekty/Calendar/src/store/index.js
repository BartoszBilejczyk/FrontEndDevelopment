import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentYear: 2017,
    currentMonth: 3,
    eventFormPositionX: 0,
    eventFormPositionY: 0
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
    }
  }
})

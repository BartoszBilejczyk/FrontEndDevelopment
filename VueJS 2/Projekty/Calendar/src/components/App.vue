<template>
  <div class="">
    <div id="header">
      <div>
        <h1>Vue.js Calendar</h1>
      </div>
      <div>
        <current-month></current-month>
      </div>
    </div>
    <div id="day-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div v-for="week in weeks" class="calendar-week">
        <calendar-day class="" v-for="day in week" :day="day"></calendar-day>
      </div>
    </div>
    <event-form></event-form>
  </div>

</template>

<script>
import CalendarDay from './CalendarDay.vue'
import CurrentMonth from './CurrentMonth.vue'
import EventForm from './EventForm.vue'

export default {
  computed: {
    month() {
      return this.$store.state.currentMonth
    },
    year() {
      return this.$store.state.currentYear
    },
    days() {

      const SUNDAY = 0
      const MONDAY = 1

      let days = [];
      // create the first day of the month
      let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D')
      do {
        days.push(currentDay);
        // this.$moment because it needs to be refreshed every time
        currentDay = this.$moment(currentDay).add(1, 'days')
        // month() is zero based that's why there is + 1
      } while ((currentDay.month() + 1) === this.month);

      // Add previous days to start of the month
      currentDay = this.$moment(days[0])
      if (currentDay.day() !== MONDAY) {
        do {
          currentDay = this.$moment(currentDay).subtract(1, 'days')
          days.unshift(currentDay)
          //sunday is equal to 0
        } while (currentDay.day() !== MONDAY )
      }

      // Add following days to end of the month
      currentDay = this.$moment(days[days.length - 1])
      if (currentDay.day() !== SUNDAY) {
        do {
          currentDay = this.$moment(currentDay).add(1, 'days');
          days.push(currentDay)
        } while (currentDay.day() !== SUNDAY)
      }
      return days
    },
    weeks() {
      let weeks = []
      let week = []
      // create 5 weeks (each has 7 days), create 1 after another, clear, another etc
      for (let day of this.days) {
        week.push(day)
        if (week.length === 7) {
          weeks.push(week);
          week = []
        }
      }
      return weeks;
    }
  },
  components: {
    CalendarDay,
    CurrentMonth,
    EventForm
  }
}







</script>

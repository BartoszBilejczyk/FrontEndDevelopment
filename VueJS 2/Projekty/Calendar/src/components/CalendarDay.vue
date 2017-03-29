<template lang="html">
  <div :class="classObject" @click="captureClick">
    <!-- this day is moment object so we can format it inside here -->
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events">{{ event.description }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['day'],
    computed: {
      // add today class to highlight the calendar pile that is today
      classObject() {
        return {
          day: true,
          today: this.day.isSame(this.$moment(), 'day'),
          past: this.day.isBefore(this.$moment(), 'day'),
          active: this.$store.state.eventFormDate.isSame(this.day, 'day') && this.$store.state.eventFormActive
        }
      },
      events() {
        // filter only these that should be displayed on the specific date
        return this.$store.state.events.filter(event => event.date.isSame((this.day), 'day'))
      }
    },
    methods: {
      captureClick(event) {
        this.$store.commit('eventFormActive', true)
        this.$store.commit('eventFormPosition', { x: event.clientX, y: event.clientY })
        this.$store.commit('eventFormDate', this.day),
        this.$store.commit('changeActiveDay', true)
      }
    }
  }
</script>

<style lang="scss">
</style>

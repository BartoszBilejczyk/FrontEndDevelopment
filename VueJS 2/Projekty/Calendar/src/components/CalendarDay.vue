<template lang="html">
  <div :class="classObject" @click="captureClick">
    <!-- this day is moment object so we can format it inside here -->
    {{ day.format('D') }}
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
          past: this.day.isBefore(this.$moment(), 'day')
        }
      }
    },
    methods: {
      captureClick(event) {
        this.$store.commit('eventFormPosition', {x: event.clientX, y: event.clientY })
      }
    }
  }
</script>

<style lang="scss">
</style>

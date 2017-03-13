<template>
  <div>
    <div class="" v-for="day in days">
      {{ day }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      month: 3,
      year: 2017
    }
  },
  computed: {
    days() {
      let days = [];
      let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
      do {
        days.push(currentDay);
        // this.$moment because it needs to be refreshed every time
        currentDay = this.$moment(currentDay).add(1, 'days')
      } while ((currentDay.month() + 1) === this.month);
      return days
    }
  },
}
</script>

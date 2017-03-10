<template lang="html">
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster" alt="Movie Poster">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{ movie.Title }}</h2>
        <span class="movie-rating"> {{ movie.Rated }}</span>
      </div>
      <div class="movie-sessions" >
        <div v-for="session in filteredSessions(sessions)" class="session-time-wrapper">
          <div class="session-time">
            {{ formatSessionTime(session.time) }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  // this is movie from v-for
  props: ['movie', 'sessions', 'day'],
  methods: {
    formatSessionTime(raw) {
      return this.$moment(raw).format('h:mm A')
    },
    filteredSessions(sessions) {
      // look at each session and then return true or false based on the day of the session and the day prop (currently selected day)
      return sessions.filter(session => this.$moment(session.time).isSame(this.day, 'day'));


    }
  }
}
</script>

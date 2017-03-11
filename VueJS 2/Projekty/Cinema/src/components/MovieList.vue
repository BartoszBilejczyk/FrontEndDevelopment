<template lang="html">
  <div id="movie-list" >
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie">
        <div class="movie-sessions" >
          <div v-for="session in filteredSessions(movie.sessions)" class="session-time-wrapper">
            <div class="session-time">
              {{ formatSessionTime(session.time) }}
            </div>
          </div>
        </div>
      </movie-item>
    </div>
    <div class="no-results" v-else-if="movies.length">
      <span>{{noResultsMsg}} </span>
    </div>
    <div id="loader" v-else>
    </div>
  </div>

</template>

<script>

import genres from '../util/genres'
import times from '../util/times'
import MovieItem from './MovieItem.vue'

export default {

// how props work: bind genre (something from the parent) to something Y. This Y will be passed to child as a prop and then can be used (name the same as prop's)
    props: ['genres', 'times', 'movies', 'day'],
    methods: {
      moviePassesGenreFilter(movie) {
        // logic: Look through genre array, if in genre array there is an item that matches movie's genre
        // e.g. there are action and adventure inside this.genre. Our film has Family genre - return false.
        // when length of genres is 0, keep every item to show list of movies. If it's not, check what movie should be displayed whether it's genre matches the genres that are checked.
        if (!this.genres.length) {
          return true;
        } else {
            let movieGenres = movie.movie.Genre.split(", ") // this will return an array of genres for a film
            let matched = true;
            // iterating through every genre, checking if EVERY genre of the film is present in the clicked genres array
            this.genres.forEach(genre => {
              if (movieGenres.indexOf(genre) === -1) {
                matched = false
              }
           });
           return matched;
         }
      },
      sessionsPassesTimeFilter(session) {

        if (!this.day.isSame(this.$moment(session.time), 'day')) {
          return false;
        }
        if (this.times.length === 0 || this.times.length === 2) {
          return true;
        } else if (this.times[0] === times.AFTER_6PM) {
          return this.$moment(session.time).hour() >= 18;
        } else {
          return this.$moment(session.time).hour() < 18;
        }
      },
      formatSessionTime(raw) {
        return this.$moment(raw).format('h:mm A')
      },
      filteredSessions(sessions) {
        // look at each session and then return true or false based on the day of the session and the day prop (currently selected day)
        return sessions.filter(this.sessionsPassesTimeFilter);
      }
    },
    computed: {
      filteredMovies() {
        // filter works like that: keep the element if it returns to true.

        return this.movies
            .filter(this.moviePassesGenreFilter)
            .filter(movie => movie.sessions.find(this.sessionsPassesTimeFilter));
      },
      noResultsMsg() {
        let timesMessage = this.times.join(', ');
        let genreMessage = this.genres.join(', ');
        return `No results for ${timesMessage} ${timesMessage.length && genreMessage.length ? ', ' : ''} ${genreMessage}`
      }
    },
    components: {
      MovieItem
    }
}
</script>

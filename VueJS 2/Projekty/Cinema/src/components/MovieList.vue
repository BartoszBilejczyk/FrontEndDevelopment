<template lang="html">
  <div id="movie-list" >
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie"></movie-item>
    </div>
    <div class="no-results" v-else-if="movies.length">
      <span >No results.</span>
    </div>
    <div id="loader">
    </div>
  </div>

</template>

<script>

import genres from '../util/genres'
import MovieItem from './MovieItem.vue'

export default {

// how props work: bind genre (something from the parent) to something Y. This Y will be passed to child as a prop and then can be used (name the same as prop's)
    props: ['genres', 'times', 'movies'],
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
      }
    },
    computed: {
      filteredMovies() {
        // filter works like that: keep the element if it returns to true.

        return this.movies.filter(this.moviePassesGenreFilter);
      }
    },
    components: {
      MovieItem
    }
}
</script>

<template lang="html">
  <div id="movie-list">
    <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
  </div>
</template>

<script>

import genres from '../util.genres'

export default {

// how props work: bind genre (something from the parent) to something Y. This Y will be passed to child as a prop and then can be used (name the same as prop's)
    props: ['genres', 'times'],
    data() {
      return {
        movies: [
          {title: 'Harry Potter 1', genre: genres.ACTION},
          {title: 'Harry Potter 2', genre: genres.FAMILY},
          {title: 'Harry Potter 3', genre: genres.ADVENTURE}
        ]
      }
    },
    methods: {
      moviePassesGenreFilter(movie) {
        // logic: Look through genre array, if in genre array there is an item that matches movie's genre
        // e.g. there are action and adventure inside this.genre. Our film has Family genre - return false.
        if (!this.genres.length) {
          return true;
        } else {
          return this.genres.find(genre => {return movie.genre === genre; });
        }
      }
    },
    computed: {
      filteredMovies() {
        // filter works like that: keep the element if it returns to true.
        // when length of genres is 0, keep every item to show list of movies. If it's not, check what movie should be displayed whether it's genre matches the genres that are checked.
        return this.movies.filter(this.moviePassesGenreFilter);
      }
    },
}
</script>

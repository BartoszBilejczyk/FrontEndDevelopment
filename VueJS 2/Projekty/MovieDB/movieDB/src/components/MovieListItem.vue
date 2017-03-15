<template lang="html">
  <div class="movie">
    <!-- it is iterated in MovieList.vue so the only thing I need to do is a callback to axios data -->
      <div class="movie-poster"><img :src="fetchPoster()" alt=""></div>
      <p class="movie-title">{{ movie.title }}</p>
      <!-- <p class="movie-desc">{{ movie.overview.substring(0,20) }}...</p> -->
  </div>

</template>

<script>
import axios from 'axios'
import stored from '../stored.js'

export default {
  props: ['movie'],
  data () {
    return {
      stored,
      config: {}
    }
  },
  methods: {
    fetchPoster () {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/w370_and_h556_bestv2${this.movie.poster_path}`
      }
    },
    fetchConfig () {
      var self = this
      axios.get(`https://api.themoviedb.org/3/configuration?api_key=${stored.apiKey}`)
        .then(function (response) {
          self.config = response.data
          console.log(self.config)
        })
    }
    // fetchPopular () {
    //   var self = this
    //   axios.get(`https://api.themoviedb.org/3/movie/popular?&api_key=${stored.apiKey}`)
    //     .then(function (response) {
    //       let data = response.data
    //       self.movieData.popular = data
    //       self.movieData.popular.results = self.movieData.popular.results.slice(0, 5)
    //       console.log(self.movieData.popular.results.slice(0, 5))
    //     })
    // }
    // fetchUpcoming () {
    // var self = this
    //   axios.get(`https://api.themoviedb.org/3/movie/upcoming?&api_key=${stored.apiKey}`)
    //     .then(function (response) {
    //       let data = response.data
    //       self.movieData.upcoming = data
    //       self.movieData.upcoming.results = self.movieData.upcoming.results.slice(0, 5)
    //       console.log(self.movieData.upcoming.results.slice(0, 5))
    //     })
    // }

    // for (var i = 0; i < stored.listTypes.length - 1; i++) {
    //   axios.get(`https://api.themoviedb.org/3/movie/${stored.listTypes[i].query}?api_key=${stored.apiKey}`)
    //     .then(function (response) {
    //       let data = response.data
    //       console.log(data)
    //     })
    // }
  },
  created () {
    // this.fetchConfig()
    // this.fetchPopular()
    // this.fetchUpcoming()
  }
}
</script>

<style lang="scss">

@import '../styles/media.scss';

.movie {
  padding: 15px;
  width: 20%;
  .movie-poster img {
    max-width: 100%;
  }
}

</style>

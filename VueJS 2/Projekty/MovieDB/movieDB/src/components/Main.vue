<template lang="html">
  <div class="main">
          <div class="movie-category-wrapper">
            <div class="movie" v-for="(popularMovie, index) in movieData.popular.results">
              <div class="movie-poster"><img :src="config.images.secure_base_url + config.images.poster_sizes[3] + movieData.popular.results[index].poster_path" alt=""></div>
              <p class="movie-title">{{ popularMovie.title }}</p>
            </div>
          </div>
  </div>

</template>

<script>
import axios from 'axios'
import stored from '../stored.js'

export default {
  data () {
    return {
      stored,
      movieData: {
        popular: []
      },
      config: []
    }
  },
  methods: {
    fetchConfig () {
      var self = this
      axios.get(`https://api.themoviedb.org/3/configuration?api_key=${stored.apiKey}`)
        .then(function (response) {
          self.config = response.data
          console.log(self.config)
        })
    },
    fetchPopular () {
      var self = this
      axios.get(`https://api.themoviedb.org/3/movie/popular?&api_key=${stored.apiKey}`)
        .then(function (response) {
          let data = response.data
          self.movieData.popular = data
          self.movieData.popular.results = self.movieData.popular.results.slice(0, 5)
          console.log(self.movieData.popular.results.slice(0, 5))
        })
    }

    // for (var i = 0; i < stored.listTypes.length - 1; i++) {
    //   axios.get(`https://api.themoviedb.org/3/movie/${stored.listTypes[i].query}?api_key=${stored.apiKey}`)
    //     .then(function (response) {
    //       let data = response.data
    //       console.log(data)
    //     })
    // }
  },
  created () {
    this.fetchConfig()
    this.fetchPopular()
  }
}
</script>

<style lang="scss">
$menu-dimensions: 80px;

.main {
    padding: $menu-dimensions 0 0;
    margin-left: $menu-dimensions;
    width: calc(100% - $menu-dimensions);
    height: 100%;
}

.movie-category-wrapper {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .movie {
      padding: 3rem;
      width: 342px;
      img {
        max-width: 100%;
      }
    }
}

</style>

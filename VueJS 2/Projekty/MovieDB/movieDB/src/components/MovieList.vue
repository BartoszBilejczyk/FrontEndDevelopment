<template lang="html">
  <div class="movie-category-wrapper">
    <div class="movies">
      <header class="movies-header">
        <span>{{ category }}</span>
        <span>{{ data.total_results }}</span>
      </header>
    </div>
    <div class="movie-list">
      <movie-list-item v-for="movie in movies" :movie="movie"></movie-list-item>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import stored from '../stored.js'
  import MovieListItem from './MovieListItem.vue'

  export default {
    props: ['type', 'mode', 'category', 'shortList'],
    data () {
      return {
        movies: {},
        pages: '',
        results: '',
        currentPage: 1,
        stored,
        data: {}
      }
    },
    components: {
      MovieListItem
    },
    methods: {
      // requestData () {
      //   let category = this.category
      //   return `https://api.themoviedb.org/3/movie/${category}?api_key=${stored.apiKey}&language=en-US&page=${this.currentPage}`
      // },

      // I will fetch the category, and the ${category} is sent back to main and iterated
      fetchCategory () {
        var self = this
        axios(`https://api.themoviedb.org/3/movie/${self.category}?api_key=${stored.apiKey}`)
          .then(function (response) {
            let data = response.data
            self.data = data
            self.movies = data.results.slice(0, 5)
            self.pages = 1
            self.results = 5
            console.log(data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      this.fetchCategory()
    }
}
</script>

<style lang="scss">

@mixin flexy ($align-items, $justify-content, $flex-wrap: wrap) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
  flex-wrap: $flex-wrap;
}

.movie-category-wrapper {
    width: 100%;
    padding: 30px;
    display: flex;
    .movie-list {
      @include flexy(center, center)
    }
}

</style>

<template lang="html">
  <div class="movie-category-wrapper">
    <header class="movies-header">
      <span>{{ title }}</span>
      <!-- <span>{{ data.total_results }}</span> -->
      <router-link v-if="shortList" :to="{name: 'main-category', params: {category: category}}">
          View All
      </router-link>
    </header>
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
    // To add to props so that it's not hardcoded 'category', 'shortList',
    props: ['type', 'mode', 'category', 'shortList', 'title'],
    data () {
      return {
        movies: {},
        pages: '',
        results: '',
        currentPage: 1,
        stored,
        isListLoaded: true
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
        axios(`https://api.themoviedb.org/3/movie/${self.category}?api_key=${stored.apiKey}&language=pl`)
          .then(function (response) {
            let data = response.data
            if (self.shortList) {
              self.movies = data.results.slice(0, 5)
              self.pages = 1
              self.results = 5
              console.log(data)
            } else {
              self.movies = data.results
              self.pages = data.total_pages
              self.results = data.total_results
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      this.fetchCategory()
      console.log(this.title)
    }
}
</script>

<style lang="scss">

@import '../styles/media.scss';

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
    flex-direction: column;
    border-bottom: 1px solid rgba(220,220,220, 0.5);
    // @include tablet-landscape-and-down {
    //   background-color: green;
    // }
    .movies-header {
      @include flexy(center, space-between, nowrap);
      font-weight: 400;
      padding: 0 30px
    }
    .movie-list {
      @include flexy(center, space-between, wrap)
    }
}

</style>

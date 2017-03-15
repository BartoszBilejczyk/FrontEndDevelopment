<template lang="html">
  <div class="movie-category-wrapper">
    <header class="movies-header">
      <span>{{ title }}</span>
      <!-- <span>{{ data.total_results }}</span> -->
      <router-link class="view-all" v-if="shortList" :to="{name: 'main-category', params: {category: category}}">
          <span>Zobacz wszystkie</span><i class="material-icons material-icons-go">call_made</i>
      </router-link>
    </header>
    <div class="movie-list">
      <movie-list-item v-for="movie in movies" :movie="movie"></movie-list-item>
    </div>
      <button type="button" name="button" @click="loadMore">LOAD MORE</button>
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
      requestData () {
        let category = this.category
        return `https://api.themoviedb.org/3/movie/${category}?api_key=${stored.apiKey}&language=pl&page=${this.currentPage}`
      },
      // I will fetch the category, and the ${category} is sent back to main and iterated
      fetchCategory () {
        var self = this
        axios(this.requestData())
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
      },
      loadMore () {
        var self = this
        this.currentPage++
        axios(this.requestData())
          .then(function (response) {
            let data = response.data
            let newData = self.movies.concat(data.results)
            self.movies = newData
            console.log(data)
            console.log(self.currentPage)
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
      padding: 0 15px;
      .view-all {
        color: #000;
        text-decoration: none;
      }
      .material-icons-go {
        transform: rotate(45deg);
        font-size: 10px;
        padding: 5px;
      }
    }
    .movie-list {
      @include flexy(flex-start, flex-start, wrap);
      .movie {
        width: 50%;
        @include tablet-portrait-and-up {
          width: 33.333333%;
        }
        @include tablet-landscape-and-up {
          width: 25%;
        }
        @include desktop-and-up {
          width: 20%;
        }
      }
    }
}

</style>

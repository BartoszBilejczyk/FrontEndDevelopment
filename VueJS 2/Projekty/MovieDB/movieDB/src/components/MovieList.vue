<template lang="html">
  <div>
      <div class="base loader" v-if="!isListLoaded">
        <div class="moving-clapper">
          <div class="rhombus1-left"></div>
          <div class="rhombus2-left"></div>
          <div class="rhombus3-left"></div>
          <div class="rhombus4-left"></div>
          <div class="rhombus5-left"></div>
        </div>
        <div class="base-head">
          <div class="rhombus1-right"></div>
          <div class="rhombus2-right"></div>
          <div class="rhombus3-right"></div>
          <div class="rhombus4-right"></div>
          <div class="rhombus5-right"></div>
        </div>
        <div class="text">
          <span>HOLLYWOOD</span>
        <div class="line"></div>
        <span>PODUCTION</span>
        <div class="line"></div>
        </div>
        <div class="details">
          <div>DATE<div class="line"></div></div>
          <div>SCENE<div class="line"></div></div>
          <div>TAKE<div class="line"></div></div>
        </div>
      </div>

    <div class="movie-category-wrapper" v-if="isListLoaded">
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
        <button type="button" name="button" @click="loadMore" v-if="isListLoaded">LOAD MORE</button>
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
        isListLoaded: false
      }
    },
    components: {
      MovieListItem
    },
    computed: {
      query () {
        return this.$route.params.query || ''
      }
      // requestData () {
      //   if (this.mode === 'search') {
      //     return `https://api.themoviedb.org/3/search/movie?api_key=${stored.apiKey}&language=en-US&query=${this.query}&page=${this.currentPage}`
      //   } else if (this.mode === 'collection') {
      //     let category = this.$route.params.category || this.category
      //     return `https://api.themoviedb.org/3/movie/${category}?api_key=${stored.apiKey}&language=en-US&page=${this.currentPage}`
      //   }
      // },
    },
    methods: {
      requestData () {
        if (this.mode === 'collection') {
          let category = this.category
          return `https://api.themoviedb.org/3/movie/${category}?api_key=${stored.apiKey}&language=pl&page=${this.currentPage}`
        } else if (this.mode === 'search') {
          return `https://api.themoviedb.org/3/search/movie/?api_key=${stored.apiKey}&language=pl&query=land&page=${this.currentPage}`
        }
      },
      // I will fetch the category, and the ${category} is sent back to main and iterated
      fetchCategory () {
        var self = this
        console.log(this.query)
        setTimeout(function () {
          axios(self.requestData())
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
                self.isListLoaded = true
              })
              .catch(function (error) {
                console.log(error)
              })
        }, 1000)
      },
      loadMore () {
        var self = this
        this.currentPage++
        axios(self.requestData())
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

.loader {
  font-size: 4px;
  color: #fff !important;
}

.base {
  width: 75px;
  height: 60px;
  background: #111;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 37.5px);
  .moving-clapper {
    position: absolute;
    width: 100%;
    background-color: #111;
    height: 15%;
    margin-top: -13%;
    border: 1px solid black;
    transform-origin: 0 50%;
    animation: 0.5s infinite alternate clapper;
  }
  .base-head {
    position: absolute;
    width: 100%;
    background-color: #111;
    height: 15%;
    z-index: 3;
    border: 1px solid black
  }
  .text {
  position: absolute;
  z-index: 2;
  margin-top: 18%;
  line-height: 10px;
  margin-left: 10%;
    .line {
      width: 60px;
    }
  }
  .details {
  position: absolute;
  width: 100%;
  @include flexy (center, space-around);
  margin-top: 60%;
  padding: 0 8%;
  }
}
.line {
  height: 1px;
  width: 100%;
  background-color: #fff;
}

@mixin rhombus {
  position: absolute;
  background-color: #fff;
  height: 100%;
  width: 10%;
}

@for $i from 1 through 5 {
  .rhombus#{$i}-left {
    @include rhombus;
    -webkit-transform: skew(20deg);
    margin-left: 20% * $i - 10%;
  }
}

@for $i from 1 through 5 {
  .rhombus#{$i}-right {
    @include rhombus;
    -webkit-transform: skew(-20deg);
    margin-left: 20% * $i - 10%;
  }
}

@keyframes clapper {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-30deg)
  }
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

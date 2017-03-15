<template lang="html">
  <div class="main-movies">
    <!-- render multiple list if the list is a category: true -->
    <movie-list v-for="item in listTypes" v-if="item.isCategory" :type="'component'" :mode="'collection'" :category="item.query" :shortList="true" :title="item.title"></movie-list>
  </div>

</template>

<script>

import MovieList from './MovieList.vue'
import stored from '../stored.js'

export default {
  data () {
    return {
      listTypes: stored.listTypes
    }
  },
  components: {
    MovieList
  }
}
</script>

<style lang="scss">

@import '../styles/media.scss';

.main-movies {
  .movie {
    width: 50%;
    @include tablet-portrait-and-up {
      width: 25%;
    }
    @include desktop-and-up {
      width: 20%;
    }
    &:last-child {
      display: none;
      @include desktop-and-up {
        display: block;
      }
    }
  }
}

</style>

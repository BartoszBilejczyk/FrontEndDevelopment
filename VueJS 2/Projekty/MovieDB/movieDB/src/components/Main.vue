<template lang="html">
  <div class="movies">
    <!-- render multiple list if the list is a category: true -->
    <movie-list v-for="list in listTypes" v-if="list.isCategory" :shortList="true" :type="'component'" :mode="'collection'" :title="list.title" :category="list.query"  :key="list.query"></movie-list>
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

<style lang="scss" scoped>
$menu-dimensions: 90px;



</style>

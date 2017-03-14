<template lang="html">
  <div class="main">
    <!-- render multiple list if the list is a category: true -->
    <movie-list v-for="list in listTypes" v-if="list.isCategory" :type="'component'" :mode="'collection'" :category="list.query" :shortList="true" :key="list.query"></movie-list>
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
$menu-dimensions: 80px;

.main {
    padding: $menu-dimensions 0 0;
    margin-left: $menu-dimensions;
    width: calc(100% - $menu-dimensions);
    height: 100%;
}


</style>

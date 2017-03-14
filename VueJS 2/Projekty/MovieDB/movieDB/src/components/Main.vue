<template lang="html">
  <div class="main">
    <movie-list></movie-list>
  </div>

</template>

<script>
import MovieList from './MovieList.vue'

export default {
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

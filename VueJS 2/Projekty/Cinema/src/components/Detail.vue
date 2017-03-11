<template lang="html">
  <div v-if="movie" id="detail">
    <movie-item :movie="movie" :sessions="[]"></movie-item>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue"
export default {
  props: ['movies'],
  computed: {
    movie() {
      let movie = this.movies.find(movie => movie.id == this.$route.params.id);
      return movie ? movie.movie : null
    }
  },
  created() {
    console.log(this.$route)
  },
  components: {
    MovieItem
  }
}
</script>

<template lang="html">
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster" alt="Movie Poster">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{ movie.Title }}</h2>
        <span class="movie-rating"> {{ movie.Rated }}</span>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  // this is movie from v-for
  props: ['movie']
}
</script>

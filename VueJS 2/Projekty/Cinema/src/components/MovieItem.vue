<template lang="html">
  <div class="movie">
    <div class="movie-col-left">
      <router-link :to="{ name: 'movie', params: { id: movie.imdbID} }">
        <img :src="movie.Poster" alt="Movie Poster">
      </router-link>
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID} }">
          <h2>{{ movie.Title }}</h2>
        </router-link>
        <span class="movie-rating"> {{ movie.Rated }}</span>
      </div>
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  // this is movie from v-for
  props: ['movie']
}
</script>

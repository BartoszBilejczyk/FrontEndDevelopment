<template lang="html">
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :genreForFilter="genre" @check-filter="checkFilter"></check-filter>
    </div>
  </div>
</template>

<script>
import genres from '../util/genres'
import CheckFilter from './Check-Filter'

export default {
    data() {
      return {
        genres
      }
    },
    methods: {
      checkFilter(category, title, checked) {
        this.$emit('check-filter', category, title, checked);
      }
    },
    components {
      CheckFilter
    }
}
</script>

<style lang="scss" scoped>
</style>

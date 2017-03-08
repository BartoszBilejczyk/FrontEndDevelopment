<template lang="html">
  <div :class="{'check-filter': true, active: checked }" @click="checkFilter()">
    <span class="checkbox"></span>
    <span class="check-filter-title"> {{ genreForFilter }} </span>
  </div>
</template>

<script>
export default {
  props: ['genreForFilter'],
  data() {
    return {
      checked: false
    }
  },
  methods: {
    checkFilter() {
      this.checked = !this.checked
      this.$emit('check-filter', 'genres', this.genreForFilter, this.checked);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template lang="html">
  <div class="soups">
    <div class="container">
      <div class="row">
        <soup v-for="soup in 7"></soup>
      </div>
    </div>
  </div>
</template>

<script>
import Soup from './Soup.vue'

export default {
  components: {
    Soup: Soup
  }
}

</script>

<style lang="scss">
</style>

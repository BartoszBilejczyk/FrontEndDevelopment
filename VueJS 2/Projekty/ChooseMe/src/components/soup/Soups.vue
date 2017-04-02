<template lang="html">
  <div class="soups">
    <soup v-for="soup in 5"></soup>
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

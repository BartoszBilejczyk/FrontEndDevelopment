<template lang="html">
  <div class="drinks-and-desserts">
    <drink-dessert v-for="drinkDessert in 5"></drink-dessert>
  </div>
</template>

<script>

import DrinkDessert from './DrinkDessert.vue'

export default {
  components: {
    drinkDessert: DrinkDessert
  }
}
</script>

<style lang="scss">
</style>

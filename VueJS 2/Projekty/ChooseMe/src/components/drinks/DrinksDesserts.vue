<template lang="html">
  <div class="drinks-and-desserts">
    <div class="container">
      <div class="row">
        <drink-dessert v-for="drinkDessert in 5"></drink-dessert>
      </div>
    </div>
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

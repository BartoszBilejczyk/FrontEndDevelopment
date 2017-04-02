<template lang="html">
  <div class="drinks-and-desserts">
    <div class="small-paddings">
      <div class="row">
        <h4>Beverages</h4>
        <drink-dessert v-for="beverage in beverages" :drinkDessert="beverage"></drink-dessert>
      </div>
      <div class="row">
        <h4>Drinks</h4>
        <drink-dessert v-for="drink in drinks" :drinkDessert="drink"></drink-dessert>
      </div>
      <div class="row">
        <h4>Desserts</h4>
        <drink-dessert v-for="dessert in deserts" :drinkDessert="dessert"></drink-dessert>
      </div>
    </div>
  </div>
</template>

<script>

import DrinkDessert from './DrinkDessert.vue'

export default {
  computed: {
    beverages () {
      return this.$store.state.beverages
    },
    drinks () {
      return this.$store.state.drinks
    },
    deserts () {
      return this.$store.state.desserts
    }
  },
  components: {
    drinkDessert: DrinkDessert
  }
}
</script>

<style lang="scss">


@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';


</style>

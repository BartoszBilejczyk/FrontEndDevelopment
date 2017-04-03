<template lang="html">
  <div class="col s6 l4">
    <v-card class="hoverable">
      <div class="card-image">
          <img :src="drinkDessert.url">
      </div>
      <div class="card-content">
        <span class="card-title">{{ drinkDessert.name }}</span>
        <p>Price: ${{ drinkDessert.price }} </p>
        <p>Preparation time: {{ drinkDessert.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="" @click="drinkDessertOrder">
          <v-btn large='true'>ORDER</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['drinkDessert'],
  methods: {
    drinkDessertOrder () {
      const drinkDessertOrder = {
        type: 'Drinks and desserts',
        name: this.drinkDessert.name,
        price: this.drinkDessert.price,
        prepTime: this.drinkDessert.prepTime
      }
      this.$store.dispatch('drinkDessertOrder', drinkDessertOrder)
    }
  }
}
</script>

<style lang="scss">
</style>

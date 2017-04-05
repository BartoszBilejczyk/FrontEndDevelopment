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
        <div class="" @click="addItem">
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
    addItem () {
      const drinkDessertOrder = {
        quantity: 1,
        type: 'Drinks and desserts',
        name: this.drinkDessert.name,
        price: this.drinkDessert.price,
        prepTime: this.drinkDessert.prepTime,
        url: this.drinkDessert.url
      }
      this.$store.dispatch('addItem', drinkDessertOrder)
    }
  }
}
</script>

<style lang="scss">
</style>

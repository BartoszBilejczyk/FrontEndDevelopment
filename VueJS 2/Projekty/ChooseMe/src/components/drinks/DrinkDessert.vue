<template lang="html">
  <div class="col s6 l4">
    <v-card>
      <div class="card-content">
        <span class="card-title">{{ drinkDessert.name }}</span>
        <p>Price: ${{ drinkDessert.price }} </p>
        <p>Preparation time: {{ drinkDessert.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="" @click="">
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
  }
}
</script>

<style lang="scss">
</style>

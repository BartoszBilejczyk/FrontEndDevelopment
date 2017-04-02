<template lang="html">
  <div class="col s12 m6">
    <v-card>
      <div class="card-content">
        <span class="card-title">{{ soup.name }}</span>
        <p>Price: ${{ soup.price }} </p>
        <p>Preparation time: {{ soup.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="" @click="testOrder">
          <v-btn large='true'>ORDER</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['soup'],
  methods: {
    testOrder () {
      const soupOrder = {
        name: this.soup.name,
        price: this.soup.price,
        prepTime: this.soup.prepTime
      }
      console.log(soupOrder)
      this.$store.dispatch('testOrder', soupOrder)
    }
  }
}
</script>

<style lang="scss">

.card {
  min-width: 300px;
}

</style>

<template lang="html">
  <div class="col s12 m6 l3">
    <v-card class="hoverable">
      <div class="card-image">
            <img :src="soup.url">
      </div>
      <div class="card-content">
        <p class="title">{{ soup.name }}</p>
        <p>Price: ${{ soup.price }} </p>
        <p>Preparation time: {{ soup.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="button-wrapper" @click="soupOrder">
          <v-btn large='true' @click.native="$dialog(`${soup.name} added to cart.`, 1500)">Add to cart</v-btn>
        </div>
      </div>
      <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">v-card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['soup'],
  computed: {
    order () {
      return this.$store.state.order
    }
  },
  methods: {
    soupOrder () {
      const soupOrder = {
        quantity: 1,
        type: 'soup',
        name: this.soup.name,
        price: this.soup.price,
        prepTime: this.soup.prepTime,
        url: this.soup.url
      }
      console.log(soupOrder)
      this.$store.dispatch('soupOrder', soupOrder)
    }
  }
}
</script>

<style lang="scss">

.card {
  max-width: 300px;
  .title {
    font-size: 1.3rem;
    line-height: 1.6rem;
    padding-bottom: 10px;
  }
  .v-card-image img {
    clip: rect(30px, 30px, 30px, 30px);
  }
}

.toast {
  background-color: #44A231 !important;
}

</style>

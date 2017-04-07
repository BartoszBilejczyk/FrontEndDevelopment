<template lang="html">
<transition name="fade">
  <div class="col s12 m6 l3">
    <v-card class="hoverable">
      <div class="card-image">
            <img :src="meal.url">
      </div>
      <div class="card-content">
        <p class="title">{{ meal.name }}</p>
        <p>Price: ${{ meal.price }} </p>
        <p>Preparation time: {{ meal.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="button-wrapper" @click="addItem">
          <v-btn large='true' @click.native="$dialog(`${meal.name} added to cart.`, 1500)">Add to cart</v-btn>
        </div>
      </div>
      <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">v-card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </v-card>
  </div>
</transition>

</template>

<script>
export default {
  props: ['meal', 'index'],
  computed: {
    order () {
      return this.$store.state.order
    }
  },
  methods: {
    addItem () {
      const soupOrder = {
        quantity: 1,
        type: 'meal',
        name: this.meal.name,
        price: this.meal.price,
        prepTime: this.meal.prepTime,
        url: this.meal.url
      }
      console.log(soupOrder)
      this.$store.dispatch('addItem', soupOrder)
    }
  },
  mounted () {
    console.log(this.mealType)
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

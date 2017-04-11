<template lang="html">
      <div class="col s6 l3 xl3">
        <v-card class="hoverable">
          <a :href="'/meal/' + meal.name" @click.prevent="openPopup()">
            <div class="card-image">
                  <img :src="meal.url">
            </div>
          </a>
          <div class="card-content">
            <p class="title">{{ meal.name }}</p>
            <div class="left">{{ meal.prepTime }} min</div>
            <div class="right">${{ meal.price }}</div>
          </div>
          <div class="card-action">
            <div class="button-wrapper center" @click="addItem">
              <v-btn @click.native="$dialog(`${meal.name} added to cart.`, 1500)">Add</v-btn>
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
  props: ['meal', 'index'],
  computed: {
    order () {
      return this.$store.state.order
    },
    popupVisible () {
      return this.$store.state.popupVisible
    }
  },
  methods: {
    addItem () {
      const addedItem = {
        quantity: 1,
        type: 'meal',
        name: this.meal.name,
        price: this.meal.price,
        prepTime: this.meal.prepTime,
        url: this.meal.url
      }
      console.log(addedItem)
      this.$store.dispatch('addItem', addedItem)
    },
    openPopup () {
      const mealDetails = {
        activeMeal: this.meal,
        openPopup: true
      }
      console.log(mealDetails)
      this.$store.dispatch('openPopup', mealDetails)
    }
  },
  mounted () {
    console.log(this.mealType)
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.card {
  max-width: 300px;
  .card-content {
    margin-bottom: 15px;
  }
  .title {
    font-size: 1.1rem;
    line-height: 1.4rem;
    padding-bottom: 10px;
  }
}

.toast {
  background-color: white !important;
  color: $main
}


</style>

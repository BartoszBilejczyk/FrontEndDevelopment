<template lang="html">
  <div class="meals">
    <div class="small-paddings">
      <div v-for="mealType in mealTypes">
        <div class="row">
          <meal v-for="(meal, index) in mealType.meals" :meal="meal" :index="index"></meal>
        </div>
      </div>
    </div>
    <router-link :to="{name: 'main-category', params: {category: 'mains'}}"><v-btn large="true">Next</v-btn></router-link>
  </div>
</template>

<script>
import Meal from './Meal.vue'

export default {
  props: ['category', 'indexo'],
  computed: {
    mealTypes () {
      return this.$store.state.mealTypes
    }
  },
  components: {
    Meal: Meal
  },
  mounted () {
    console.log(this.mealTypes.soups)
  }
}

</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.meals {
  @include flexy(center, center)
}
</style>

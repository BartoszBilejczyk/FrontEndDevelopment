<template lang="html">
  <transition name="fade">
    <div class="meals">
      <div class="small-paddings">
          <div class="row">
            <meal v-for="(meal, index) in mealTypes[index].meals" :meal="meal" :index="index"></meal>
          </div>
      </div>
      <router-link :to="{name: 'main-category', params: {category: 'mains', index: 1}}"><v-btn large="true">Next</v-btn></router-link>
    </div>
  </transition>
</template>

<script>
import Meal from './Meal.vue'

export default {
  props: ['category'],
  computed: {
    mealTypes () {
      return this.$store.state.mealTypes
    },
    soups () {
      return this.$store.state.soups
    },
    mains () {
      return this.$store.state.mains
    },
    drinks () {
      return this.$store.state.drinks
    },
    index () {
      return this.$route.params.index
    }
  },
  components: {
    Meal: Meal
  },
  mounted () {
    console.log(this.index)
  }
}

</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.meals {
  @include flexy(center, center)
}

.fade-enter-active {
  transition: all 3s ease;
}
.fade-enter, .fade-leave-active, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

</style>

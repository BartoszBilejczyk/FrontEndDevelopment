<template lang="html">
  <transition name="fade">
    <div class="meals" v-if="isListLoaded">
      <div class="small-paddings">
          <div class="row">
            <meal v-for="(meal, index) in meals" :meal="meal" :index="index"></meal>
          </div>
      </div>
      <div class="next">
        <router-link :to="{name: 'main-category', params: {category: nextCategory, index: nextIndex}}"><v-btn large="true">Next</v-btn></router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import Meal from './Meal.vue'

export default {
  props: ['category'],
  data () {
    return {
      isListLoaded: false,
      meals: []
    }
  },
  methods: {
    fetchData () {
      this.isListLoaded = false
      this.meals = []
      let self = this
      setTimeout(function () {
        self.meals = self.$store.state.mealTypes[self.index].meals
        self.isListLoaded = true
      }, 100)
    }
  },
  watch: {
    index () {
      this.fetchData()
    }
  },
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
    },
    next () {
      let nextCategory = ''
      let nextIndex = null
      if (this.index === 1) {
        nextCategory = 'mains'
        nextIndex = 2
      } else if (this.index === 2) {
        nextCategory = 'drinks'
        nextIndex = 3
      } else if (this.index === 3) {
        nextCategory = 'soups'
        nextIndex = 1
      }
      return {
        nextCategory,
        nextIndex
      }
    }
  },
  components: {
    Meal: Meal
  },
  created () {
    this.fetchData()
    console.log(this.index)
  }
}

</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.meals {
  @include flexy(flex-start, center);
  margin: 30px 1.5%;
}

.next {
  position: fixed;
  bottom: 30px;
}

</style>

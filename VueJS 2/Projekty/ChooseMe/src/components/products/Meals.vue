<template lang="html">
  <div class="choice" v-if="isListLoaded">
    <div class="meals">
      <div class="small-paddings">
        <h4>{{ mealCategory }}</h4>
          <div class="row">
            <meal v-for="(meal, index) in meals" :meal="meal" :index="index" :key="meal"></meal>
          </div>
      </div>
      <div class="next">
        <router-link :to="{name: nextName, params: {category: nextCategory, index: nextIndex}}"><v-btn large="true">{{ nextAction}}</v-btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Meal from './Meal.vue'

export default {
  props: ['category'],
  data () {
    return {
      isListLoaded: false,
      meals: [],
      nextAction: 'next'
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
    },
    category () {
      if (this.category === 'drinks') {
        this.nextAction = 'Order'
      } else {
        this.nextAction = 'Next'
      }
    }
  },
  computed: {
    mealTypes () {
      return this.$store.state.mealTypes
    },
    mealCategory () {
      return this.$store.state.mealTypes[this.index].title
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
      let index = null
      if (this.category === 'soups') {
        index = 0
      } else if (this.category === 'mains') {
        index = 1
      } else if (this.category === 'drinks') {
        index = 2
      }
      return index
    },
    nextIndex () {
      let nextIndex = null
      if (this.index === 0) {
        nextIndex = 1
      } else if (this.index === 1) {
        nextIndex = 2
      }
      return nextIndex
    },
    nextCategory () {
      let nextCategory = ''
      if (this.index === 0) {
        nextCategory = 'mains'
      } else if (this.index === 1) {
        nextCategory = 'drinks'
      } else if (this.index === 2) {
        nextCategory = 'checkout'
      }
      return nextCategory
    },
    nextName () {
      let nextName = ''
      if (this.nextCategory === 'checkout') {
        nextName = 'checkout'
      }
      return nextName
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

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.meals {
  @include flexy(flex-start, center);
  margin: 30px 1.5%;
}

.next {
  position: fixed;
  bottom: 30px;
}

</style>

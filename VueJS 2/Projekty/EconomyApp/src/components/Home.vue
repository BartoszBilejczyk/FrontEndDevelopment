<template lang="html">
  <div class="home">
    <div class="main-category-list">
      <category-list v-for="(list, index) in categories" :shortList='true' :category="'category'" :index="index" :list="list"></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'
import storage from '../storage.js'
export default {
  data () {
    return {
      categories: storage.subcategories
    }
  },
  components: {
    CategoryList
  }
}
</script>

<style lang="scss">

@import '../scss/globals.scss';
@import '../scss/responsive.scss';

</style>

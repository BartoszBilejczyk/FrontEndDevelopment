<template lang="html">
  <div class="home">
    <div class="main-category-list">
      <category-list v-for="(list, index) in listTypes" :shortList='true' :category="'category'" :index="index"></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'
import storage from '../storage.js'
export default {
  data () {
    return {
      listTypes: storage.listTypes
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

<template lang="html">
  <div class="" style=" padding: 50px;">
    <div class="" style="display: inline" v-for="subcategory in subcategories">
      <category-list-item :subcategory='subcategory'></category-list-item>
    </div>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
export default {
  data () {
    return {
      subcategories: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    CategoryListItem
  }
}
</script>

<style lang="scss">
</style>

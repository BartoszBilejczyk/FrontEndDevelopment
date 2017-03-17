<template lang="html">
  <div class="" style=" padding: 50px;">
    <div class="" style="display: inline" >
      <category-list-item :subcategory='subcategory' v-for="subcategory in subcategories"></category-list-item>
    </div>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
export default {
  props: ['shortList'],
  data () {
    return {
      subcategories: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    makeCategory () {
      if (this.shortList) {
        this.subcategories = this.subcategories.slice(0, 5)
      }
    }
  },
  created () {
    this.makeCategory()
  }
}
</script>

<style lang="scss">
</style>

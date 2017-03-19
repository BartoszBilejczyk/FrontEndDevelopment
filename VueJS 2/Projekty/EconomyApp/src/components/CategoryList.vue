<template lang="html">
  <div>
    <category-list-item :subcategory='subcategory' v-for="subcategory in subcategories"></category-list-item>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
import storage from '../storage.js'
import axios from 'axios'

export default {
  props: ['shortList', 'category'],
  data () {
    return {
      subcategories: storage.listTypes[0].subcategories,
      quandlData: {}
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    makeCategory () {
      if (this.shortList) {
        var self = this
        axios.get(`https://www.quandl.com/api/v3/datasets/UGID/${self.category}_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
          .then(function (response) {
            console.log(response.data.dataset)
            console.log(storage.listTypes[0].subcategories)
            let data = response.data.dataset
            self.quandlData = data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  },
  created () {
    this.makeCategory()
  }
}
</script>

<style lang="scss">

@import '../scss/globals.scss';
@import '../scss/responsive.scss';

</style>

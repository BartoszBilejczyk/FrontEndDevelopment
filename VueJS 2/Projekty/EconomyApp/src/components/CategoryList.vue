<template lang="html">
  <div>
    <!-- category list item is e.g. inflation, unemployment, mortality rate etc., there will be also CategoryListItemDetails with chart etc.
    when going to category list, iterate through every axios request and concat the data to quandl  -->
    <category-list-item :subcategory='subcategory' v-for="subcategory in subcategories"></category-list-item>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
import storage from '../storage.js'
import axios from 'axios'

export default {
  props: ['shortList', 'category', 'index'],
  data () {
    return {
      subcategories: [1, 2, 3],
      listTypes: storage.listTypes[this.index],
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
        axios.get(`https://www.quandl.com/api/v3/datasets/UGID/TRADE_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
          .then(function (response) {
            console.log(response.data.dataset)
            console.log(self.listTypes)
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

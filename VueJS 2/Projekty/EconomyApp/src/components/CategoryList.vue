<template lang="html">
  <div class="category">
    <!-- category list item is e.g. inflation, unemployment, mortality rate etc., there will be also CategoryListItemDetails with chart etc.
    when going to category list, iterate through every axios request and concat the data to quandl  -->
    <category-list-item :quandlDataItem='quandlDataItem' v-for="(quandlDataItem, index) in quandlData"></category-list-item>

    <router-link class="view-all" :to="{name: 'main-category', params: {category: category}}">
            <span>Zobacz wszystkie</span><i class="material-icons material-icons-go">call_made</i>
    </router-link>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
import storage from '../storage.js'
import axios from 'axios'

export default {
  props: ['category', 'index'],
  data () {
    return {
      // indexes doesn't work, HOW TO GET INDEX OF CATEGORY LIST, because home is not rendered OR how to render lists inside home
      indexes: [],
      subcategories: storage.subcategories,
      quandlData: []
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    makeCategory () {
      var self = this
      for (let i = 0; i < this.subcategories.length; i++) {
        for (let j = 0; j < this.subcategories[i].length; j++) {
          axios.get(`https://www.quandl.com/api/v3/datasets/UGID/${self.subcategories[i][j]}_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
            .then(function (response) {
              let data = response.data.dataset
              self.quandlData = self.quandlData.concat(data)
              console.log(self.subcategories[2].length)
              console.log(self.quandlData)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
      // axios.get(`https://www.quandl.com/api/v3/datasets/UGID/${self.subcategories[0][0]}_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
      //   .then(function (response) {
      //     let data = response.data.dataset
      //     self.quandlData = self.quandlData.concat(data)
      //     console.log(self.quandlData)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    }
  },
  created () {
    this.makeCategory()
    for (let i = 0; i < storage.subcategories.length; i++) {
      return i
    }
  }
}
</script>

<style lang="scss">

@import '../scss/globals.scss';
@import '../scss/responsive.scss';


.category {
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
}

</style>

<template lang="html">
  <div class="category">
    <!-- category list item is e.g. inflation, unemployment, mortality rate etc., there will be also CategoryListItemDetails with chart etc.
    when going to category list, iterate through every axios request and concat the data to quandl  -->
    <category-list-item v-for="(subcategory, index) in storage.subcategories[index]" :index='index' :subcategory='subcategory'></category-list-item>

    <router-link class="view-all" :to="{name: 'main-category', params: {category: category}}">
        <span>Zobacz wszystkie</span>
    </router-link>

  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
import storage from '../storage.js'
import axios from 'axios'

export default {
  props: ['category', 'list', 'index'],
  data () {
    return {
      storage,
      fetchedData: {
        economyData: [1, 1],
        financialData: [2, 2, 3, 4],
        socialData: ['sad', 'ssss']
      }
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    fetchEconomyData () {
      var self = this
      axios.get(`https://www.quandl.com/api/v3/datasets/UGID/BEER_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
        .then(function (response) {
          let data = response.data.dataset
          self.fetchedData.economyData = self.fetchedData.economyData.concat(data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchFinancialData () {
      var self = this
      axios.get(`https://www.quandl.com/api/v3/datasets/UGID/INFL_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
        .then(function (response) {
          let data = response.data.dataset
          self.fetchedData.financialData = self.fetchedData.financialData.concat(data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchSocialData () {
      var self = this
      axios.get(`https://www.quandl.com/api/v3/datasets/UGID/EMPM_POL.json?api_key=zCzq9ac25fyL89JXt7Rs`)
        .then(function (response) {
          let data = response.data.dataset
          self.fetchedData.socialData = self.fetchedData.socialData.concat(data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchEconomyData()
    this.fetchFinancialData()
    this.fetchSocialData()
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

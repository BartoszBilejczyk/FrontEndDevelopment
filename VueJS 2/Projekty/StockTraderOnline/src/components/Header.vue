<template lang="html">
  <v-nav nav-class="blue" fixed="true">
    <div class="container">
      <ul class="left">
        <router-link to="/" activeClass="active" tag="li"><a>Dashboard</a></router-link>
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <ul class="right">
        <li @click="endDay"><a href="#!">End day</a></li>
        <li>
          <v-btn v-dropdown:dropdown>Save / Load</v-btn>
          <v-dropdown id="dropdown">
            <li><a @click="saveData">Save</a></li>
            <li><a @click="loadData">Load</a></li>
          </v-dropdown>
        </li>
        <li>Funds: {{ funds | currency }}</li>
      </ul>
      <v-side-nav id="side2" slot="side-nav"></v-side-nav>
    </div>
  </v-nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      // $http to use Vue Resource
      // on Firebase put will overwrite the data
      // creating node data.json and passing data.
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    }
  }
}

</script>

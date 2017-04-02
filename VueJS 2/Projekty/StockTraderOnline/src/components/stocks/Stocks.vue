<template lang="html">
  <div class="stocks">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    <app-live-stock v-for="liveStock in liveStocks" :liveStock="liveStock"></app-live-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import LiveStock from './LiveStock.vue'
export default {
  components: {
    appStock: Stock,
    appLiveStock: LiveStock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    },
    liveStocks () {
      return this.$store.getters.liveStocks
    }
  },
  mounted () {
    this.$store.dispatch('loadLiveStocks')
  }
}
</script>

<style lang="scss">
</style>

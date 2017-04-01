<template lang="html">
  <div class="stocks">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
  data () {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 20 },
        { id: 4, name: 'Orlen', price: 3 }
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>

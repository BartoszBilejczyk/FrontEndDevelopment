<template lang="html">
  <div class="col s12 m6">
    <v-card class="blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ stock.name }}<small> (price: {{ stock.price }})</small></span>
            <input type="number" placeholder="Quantity" v-model="quantity" :class="{danger: noFunds}">
            <span v-if="quantity > 0">Transaction value: {{ this.quantity * this.stock.price }}</span>
            <button class="btn"
                    :disabled="noFunds || quantity <= 0 || !Number.isInteger(Number(this.quantity))"
                    @click="buyStock">{{ noFunds ? 'Insufficient funds' : 'Buy'}}</button>
        </div>
    </v-card>
    {{quantity}}
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    noFunds () {
      // will return true if I don't have enough money
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style lang="scss" scoped>

.danger {
  border-bottom: 1px solid red !important;
  box-shadow: 0 1px 0 0 red !important;
}

</style>

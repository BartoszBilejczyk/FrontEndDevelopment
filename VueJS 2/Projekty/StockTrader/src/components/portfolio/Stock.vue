<template lang="html">
  <div class="col s12 m6">
    <v-card class="blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ stock.name }}<small> (price: {{ stock.price }}) | quantity: {{ stock.quantity }}</small></span>
            <input type="number" placeholder="Quantity" v-model="quantity" :class="{danger: noQuantity}">
            <span v-if="quantity > 0">Transaction value: {{ this.quantity * this.stock.price }}</span>
            <button class="btn"
                    :disabled="noQuantity || quantity <= 0 || !Number.isInteger(Number(this.quantity))"
                    @click="sellStock">{{ noQuantity ? 'Not enough stocks' : 'Sell' }}</button>
        </div>
    </v-card>
    {{quantity}}
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    noQuantity () {
      // true if I want to sell more than I have
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      console.log(order)
      // this.sellStock can be used thanks to ...mapActions
      this.placeSellOrder(order)
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

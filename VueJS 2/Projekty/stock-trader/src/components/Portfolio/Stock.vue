<template lang="html">
  <div class="col s12 m6">
    <v-card class="blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ stock.name }}<small> (price: {{ stock.price }}) | quantity: {{ stock.quantity }}</small></span>
            <input type="number" placeholder="Quantity" v-model="quantity">
            <button class="btn"
                    :disabled="quantity <= 0 || !Number.isInteger(Number(this.quantity))"
                    @click="sellStock">Sell</button>
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

<style lang="css">
</style>

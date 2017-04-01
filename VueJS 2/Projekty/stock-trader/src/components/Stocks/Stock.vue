<template lang="html">
  <div class="col s6 m3">
    <v-card class="blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ stock.name }}<small> (price: {{ stock.price }})</small></span>
            <input type="number" placeholder="Quantity" v-model="quantity">
            <button class="btn"
                    :disabled="quantity <= 0 || !Number.isInteger(Number(this.quantity))"
                    @click="buyStock">Buy</button>
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
  methods: {
    buyStock () {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="container">
    <div class="checkout-cart">
      <div class="cart-items" v-for="(item, index) in order">
        <div class="row">
          <div class="item-image col s2 left-align"><img class="responsive-img" :src="order[index].url" alt=""></div>
          <div class="item-description col s5 left-align">{{ order[index].name }}<br><span class="grey-text text-lighten-1">description</span></div>
          <div class="item-quantity col s3 center-align"><span class="grey-text minus" @click="dec(item,index)">-</span><span class="quantity"> {{ order[index].quantity }} </span><span class="green-text plus" @click="inc(item,index)">+</span></div>
          <div class="item-value col s2 right-align"> ${{ order[index].quantity * order[index].price }}</div>
        </div>
        <hr>
      </div>
      <div class="row">
        <span class="left">Subtotal</span><span class="right">${{ subtotal }}</span>
      </div>
      <div class="row">
        <span class="left">Shipping</span><span class="right">${{ shipping }}</span>
      </div>
      <div class="row">
        <span class="left"><strong>Total</strong></span><span class="right"><strong>${{ totalCost }}</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    order () {
      return this.$store.state.order
    },
    totalTime () {
      return this.$store.state.totalTime
    },
    totalCost () {
      return this.$store.state.totalCost
    },
    subtotal () {
      return this.$store.state.subtotal
    },
    shipping () {
      return this.$store.state.shipping
    }
  },
  methods: {
    inc (item, index) {
      console.log(this.order[index])
      this.$store.state.order[index].quantity++
    },
    dec (item, index) {
      if (this.$store.state.order[index].quantity > 1) {
        this.$store.state.order[index].quantity--
      } else {
        this.$store.state.order.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';


</style>

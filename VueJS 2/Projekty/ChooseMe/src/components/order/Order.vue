<template lang="html">
  <div class="container">
    <div class="emptyOrder" v-if="orderEmpty">
      <h5>There's nothing in your cart</h5>
      <router-link to="/soups"><v-btn large>Ready to start?</v-btn></router-link>
    </div>
    <div class="order" v-if="!orderEmpty">
      <div class="checkout-cart">
        <div class="cart-items" v-for="(meal, index) in order">
          <div class="row">
            <div class="item-image col s2 left-align"><img class="responsive-img" :src="meal.url" alt=""></div>
            <div class="item-description col s5 left-align">{{ meal.name }}<br><span class="grey-text text-lighten-1">description</span></div>
            <div class="item-quantity col s3 center-align"><span class="grey-text minus" @click="deleteItem(meal, index)">-</span><span class="quantity"> {{ meal.quantity }} </span><span class="green-text plus" @click="addItem(meal, index)">+</span></div>
            <div class="item-value col s2 right-align"> ${{ meal.quantity * meal.price }}</div>
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
      <div class="checkout-navigation">
        <div class="row">
          <div class="center">
            <p>Everything good?</p><br>
            <router-link to="/checkout/shipping"><v-btn>Next</v-btn></router-link>
          </div>
        </div>
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
    orderEmpty () {
      if (this.order.length) {
        return false
      } else {
        return true
      }
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
    addItem (meal, index) {
      const addedItem = {
        quantity: 1,
        type: 'meal',
        name: meal.name,
        price: meal.price,
        prepTime: meal.prepTime,
        url: meal.url
      }
      console.log(addedItem)
      this.$store.dispatch('addItem', addedItem)
    },
    deleteItem (meal, index) {
      const deletedItem = {
        quantity: 1,
        type: 'meal',
        name: meal.name,
        price: meal.price,
        prepTime: meal.prepTime,
        url: meal.url
      }
      console.log(deletedItem)
      this.$store.dispatch('deleteItem', deletedItem)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.container {
  height: 100%;
  overflow-y: scroll;
}

.emptyOrder {
  height: 100%;
  @include flexy(center, center, wrap, column)
}

.order {
  min-height: 100%;
  @include flexy(stretch, space-between, wrap, column)
}



</style>

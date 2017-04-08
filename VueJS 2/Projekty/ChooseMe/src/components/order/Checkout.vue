<template lang="html">
  <div class="checkout">
    <div class="checkout-header">
      <ul class="checkout-menu">
        <router-link to="/checkout/first"><li class="checkout-menu-item">first</li></router-link>
        <router-link to="/checkout/shipping"><li class="checkout-menu-item">Shipping</li></router-link>
        <router-link to="/checkout/payment"><li class="checkout-menu-item">Payment</li></router-link>
        <router-link to="/checkout/confirmation"><li class="checkout-menu-item">Confirmation</li></router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.checkout {
  width: 80%;
  height: 70vh;
  background: white;
  .checkout-header {
    height: 50px;
    background: aqua;
    color: white;
    .checkout-menu {
      margin: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .checkout-menu-item {
        height: 50px;
        align-items: center;
      }
    }
  }
}

</style>

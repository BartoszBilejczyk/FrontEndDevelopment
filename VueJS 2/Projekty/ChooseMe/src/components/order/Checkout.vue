<template lang="html">
  <div class="checkout">
    <div class="checkout-header">
      <ul class="checkout-menu">
        <router-link to="/checkout/order"><li class="checkout-menu-item">Order</li></router-link>
        <router-link to="/checkout/shipping"><li class="checkout-menu-item">Shipping</li></router-link>
        <router-link to="/checkout/payment"><li class="checkout-menu-item">Payment</li></router-link>
        <router-link to="/checkout/confirmation"><li class="checkout-menu-item">Confirmation</li></router-link>
      </ul>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
    background: white;
    border-bottom: 1px solid #ccc;
    color: $checkout-active-dark;
    text-transform: uppercase;
    font-weight: bold;
    .checkout-menu {
      margin: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}

.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-enter, .fade-leave-active, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

</style>

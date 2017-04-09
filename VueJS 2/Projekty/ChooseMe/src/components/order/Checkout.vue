<template lang="html">
  <div class="checkout-wrapper">
    <div class="checkout">
      <div class="checkout-header">
        <ul class="checkout-menu">
          <router-link to="/checkout/order"><li class="checkout-menu-item">Order</li></router-link>
          <router-link to="/checkout/shipping"><li class="checkout-menu-item">Shipping</li></router-link>
          <router-link to="/checkout/payment"><li class="checkout-menu-item">Payment</li></router-link>
          <router-link to="/checkout/confirmation"><li class="checkout-menu-item">Confirmation</li></router-link>
        </ul>
      </div>
      <div class="checkout-body">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.checkout-wrapper {
  @include flexy (center, center)
  .checkout {
    width: 80%;
    height: 70vh;
    background: white;
    .checkout-header {
      height: 50px;
      background: white;
      border-bottom: 1px solid #ccc;
      color: $main-blue;
      text-transform: uppercase;
      font-weight: bold;
      .checkout-menu {
        margin: 0;
        height: 50px;
        @include flexy (center, space-around)
        a, li {
          display: flex;
          height: 100%;
          align-items: center;
          border-bottom: 1px solid $main-blue
        }
      }
    }
    .checkout-body {
      height: calc(70vh - 50px);
      @include flexy(center, center)
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

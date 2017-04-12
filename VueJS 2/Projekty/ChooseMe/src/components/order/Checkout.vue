<template lang="html">
  <div class="checkout-wrapper">
    <div class="checkout">
      <div class="checkout-header">
        <ul class="checkout-menu">
          <li class="checkout-menu-item" :class="activeOrder"><router-link to="/checkout/order">Order</router-link></li>
          <li class="checkout-menu-item" :class="activeShipping"><router-link to="/checkout/shipping">Shipping</router-link></li>
          <li class="checkout-menu-item" :class="activePayment"><router-link to="/checkout/payment">Payment</router-link></li>
          <li class="checkout-menu-item" :class="activeConfirmation"><router-link to="/checkout/confirmation">Confirmation</router-link></li>
        </ul>
      </div>
      <div class="checkout-body">
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: false
    }
  },
  computed: {
    activeOrder () {
    }
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.checkout-wrapper {
  @include flexy (center, center)
  .checkout {
    width: 80%;
    height: 600px;
    background: white;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    @include tablet-landscape-and-down {
      height: auto;
      max-height: 90%
    }
    .checkout-header {
      height: 50px;
      background: white;
      color: $main;
      text-transform: uppercase;
      font-weight: bold;
      .checkout-menu {
        margin: 0;
        height: 50px;
        @include flexy (center, space-around)
        li {
          @include flexy (center, center)
          height: 100%;
          width: 25%;
          transition: 0.2s;
          a {
            @include flexy (center, center)
            height: inherit;
            width: 100%;
            color: #111;
            transition: 0.2s;
            border-bottom: 2px solid #ccc;
            &:hover {
              color: $main;
            }
            &.router-link-active {
              color: $main;
              border-bottom: 2px solid $main
            }
          }
        }

      }
    }
    .checkout-body {
      height: calc(100% - 50px);
      padding: 30px 0;
      @include tablet-portrait-and-down {
        height: 70vh;
        overflow-y: scroll;
      }
      .container {
        height: 100%;
      }
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

.back {
  margin-right: 20px;
  color: $main;
  &:hover {
      text-decoration: underline;
  }
}

.active-step {
  border-bottom: 1px solid $main;
}

input:not([type]):focus:not([readonly]), input[type=text]:focus:not([readonly]), input[type=password]:focus:not([readonly]), input[type=email]:focus:not([readonly]), input[type=url]:focus:not([readonly]), input[type=time]:focus:not([readonly]), input[type=date]:focus:not([readonly]), input[type=datetime]:focus:not([readonly]), input[type=datetime-local]:focus:not([readonly]), input[type=tel]:focus:not([readonly]), input[type=number]:focus:not([readonly]), input[type=search]:focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid $main;
    box-shadow: 0 1px 0 0 $main;
}

input:not([type]):focus:not([readonly]) + label, input[type=text]:focus:not([readonly]) + label, input[type=password]:focus:not([readonly]) + label, input[type=email]:focus:not([readonly]) + label, input[type=url]:focus:not([readonly]) + label, input[type=time]:focus:not([readonly]) + label, input[type=date]:focus:not([readonly]) + label, input[type=datetime]:focus:not([readonly]) + label, input[type=datetime-local]:focus:not([readonly]) + label, input[type=tel]:focus:not([readonly]) + label, input[type=number]:focus:not([readonly]) + label, input[type=search]:focus:not([readonly]) + label, textarea.materialize-textarea:focus:not([readonly]) + label {
    color: $main;
}

.input-field label {
  left: 0;
}

</style>

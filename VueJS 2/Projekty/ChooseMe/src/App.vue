<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="main">
      <div class="cart-wrapper">
        <div class="disactivate" @mouseover="active = false"></div>
        <div class="icon" @mouseover="active = true" @click="active = !active">Cart</div>
        <transition name="slide-fade">
          <div class="cart" v-if="active" @mouseleave="active = false">
            <span>ORDER</span>
            <hr>
            <div class="cart-items" v-for="(item, index) in order">
              <div class="row">
                <div class="item-image col s2 left-align"><img :src="order[index].url" alt=""></div>
                <div class="item-description col s5 left-align">{{ order[index].name }}<br><span class="grey-text text-lighten-1">description</span></div>
                <div class="item-quantity col s3 center-align"><span class="grey-text minus">-</span><span class="quantity"> {{ order[index].quantity }} </span><span class="green-text plus">+</span></div>
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
            <v-btn class="right">PLACE ORDER</v-btn>
          </div>
        </transition>
      </div>
      <div class="choice">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
      <app-order-details></app-order-details>
    </div>
  </div>
</template>

<script>

import Menu from './components/Menu.vue'
import OrderDetails from './components/OrderDetails.vue'

export default {
  name: 'app',
  data () {
    return {
      active: false
    }
  },
  computed: {
    revealed () {
      return {
        reveal: this.active
      }
    },
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
  components: {
    appMenu: Menu,
    appOrderDetails: OrderDetails
  }
}
</script>

<style lang="scss">

@import './styling/globals.scss';
@import './styling/responsive.scss';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  overflow-x: hidden;
  z-index: 1
}
.cart-wrapper {
  position: absolute;
  top: 60px;
  right: 0;
  width: 450px;
  height: auto;
  background-color: #111;
  z-index: 99999
}
.cart {
  position: absolute;
  top: 0;
  right: 1px;
  width: 450px;
  min-height: 200px;
  background-color: white;
  padding: 10%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  img {
    max-width: 100%;
  }
  .row {
    margin: 10px auto;
  }
}

.cart-items {
  .row {
    margin: 10px auto;
    display: flex;
    align-items: center;
    .col:first-child {
      padding: 0 1rem 0 0
    }
    .col:last-child {
      padding: 0 0 0 1rem
    }
    .item-description {
      font-size: 0.9rem;
    }
  }
}

.plus, .minus {
  font-size: 1.5rem;
}

.quantity {
  margin: 0 8px;
  padding: 3px;
  border: 1px solid grey
}

.disactivate {
  position: absolute;
  top: -60px;
  right: 60px;
  width: 5px;
  height: 60px;
  opacity: 0
}

.icon {
  position: absolute;
  top: -60px;
  right: 0;
  width: 60px;
  height: 60px;
  background-color: black;
  color: white;
}

.reveal {
  position: absolute;
  transition: 1s;
  animation: reveal 1s forwards;
}

.main {
  width: calc(100vw - 180px);
  height: calc(100vh - 50px);
  background: #eee;
  position: relative
}
.choice {
  height: calc(100vh - 50px);
  margin-top: 0;
  overflow-y: scroll;
  @include flexy(initial, center)
}

.fade-enter-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-active, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
//
// @keyframes reveal {
//   from {
//     right: 0;
//   },
//   to {
//     right: 200px;
//   }
// }

@keyframes spin {
  100% {transform: rotate(1turn); }
}

</style>

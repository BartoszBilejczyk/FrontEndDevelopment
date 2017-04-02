<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="main">
      <div class="cart-wrapper">
        <div class="icon" @mouseover="active = true" @mouseleave="active = false">Cart</div>
        <transition name="slide-fade">
          <div class="cart" v-if="active" @mouseover="action = true">
            <div class="row">
              <div class="cart-item" v-for="(item, index) in order">
              {{ order[index].name }}
              </div>
            </div>
            <div class="row">
              <div class="col s6">{{ totalCost }}</div>
              <div class="col s6">{{ totalTime}}</div>
            </div>
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
  width: 350px;
  height: auto;
  background-color: #111;
  z-index: 4
}
.cart {
  position: absolute;
  top: 0;
  right: 0px;
  width: 350px;
  min-height: 200px;
  background-color: white;
  border: 1px solid #bbb;
  padding: 20px;
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

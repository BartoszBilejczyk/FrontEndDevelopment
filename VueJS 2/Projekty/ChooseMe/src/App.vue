<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="main">
      <div class="cart-wrapper">
        <div class="icon" @mouseover="active = true">Cart</div>
        <transition name="slide-fade">
          <div class="cart" v-show="active" @mouseleave="action = false" :class="">

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
}
.cart-wrapper {
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: limegreen;
}
.cart {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: red;
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
  transform: translateX(200px);
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

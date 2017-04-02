<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="main">
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
  components: {
    appMenu: Menu,
    appOrderDetails: OrderDetails
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
}

.main {
  width: 80vw;
  height: calc(100vh - 50px);
  background: #eee;
}
.choice {
  width: inherit;
  height: inherit;
  margin-top: 0;
}

.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-enter, .fade-leave-active, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

</style>

<template>
  <div id="app">
    <app-menu></app-menu>
    <h1>Test</h1>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    appMenu: Menu
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
</style>

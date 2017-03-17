<template>
  <div id="app">
    <navigation></navigation>
    <header>
      siema
    </header>
    <router-view name="list-view"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

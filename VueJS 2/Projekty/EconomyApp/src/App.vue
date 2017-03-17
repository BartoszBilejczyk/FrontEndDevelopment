<template>
  <div id="app">
    <navigation></navigation>

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

@import 'scss/globals.scss';
@import 'scss/responsive.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>

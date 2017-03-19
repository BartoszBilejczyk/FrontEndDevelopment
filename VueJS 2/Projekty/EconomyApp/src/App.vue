<template>
  <div id="app">
    <navigation></navigation>
    <div class="main">
      <transition name='fade'>
        <router-view name="list-view" :shortList='true' :category="$route.params.category"></router-view>
      </transition>
    </div>
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

.main {
  margin-left: $main-home-width;
  background: #eee;
  width: calc(100% - $main-home-width);
  min-height: 100vh;
}
</style>

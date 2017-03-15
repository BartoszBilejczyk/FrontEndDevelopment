<template>
  <div id="app">
    <navigation></navigation>
    <div class="header">
      <div class="logo"><img src="./assets/logo.png" alt=""></div>
        <div class="search-wrapper">
          <i class="material-icons material-icons-search">search</i>
          <input type="text" name="" value="" placeholder="Type a movie title">
        </div>
    </div>
    <div class="main">
      <transition name="fade">
        <router-view name="list-router-view" :type="'page'" :mode="'collection'" :shortList="false" :category="$route.params.category" :key="$route.params.category"></router-view>
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

@import '/styles/media.scss';

$menu-dimensions: 90px;

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  width: 100vw;
}
#app {
  font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input, textarea, select {
  font-family: inherit;
}

div.header {
  width: 100%;
  height: $menu-dimensions;
  background: #fff;
  position: fixed;
  z-index: 15;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(220,220,220,0.3);
  .logo {
    height: $menu-dimensions;
    width: $menu-dimensions;
    background: #000;
    list-style-type: none;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(220,220,220,0.3);
  }
  .search-wrapper {
    margin-left: 60px;
    .material-icons-search {
      padding: 5px;
    }
    input {
      border: none;
      color: #333;
      font-size: 1rem;
      outline: none;
    }
  }
}

.main {
  padding: $menu-dimensions 0 0;
  @include tablet-portrait-and-up {
    padding: $menu-dimensions 0 0;
    margin-left: $menu-dimensions;
    width: calc(100% - $menu-dimensions);
    height: 100%;
  }
}


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

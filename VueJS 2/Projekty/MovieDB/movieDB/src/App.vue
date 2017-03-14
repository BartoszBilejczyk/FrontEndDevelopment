<template>
  <div id="app">
    <navigation></navigation>
    <div class="header">
        <div class="search-wrapper">
          <i class="material-icons material-icons-search">search</i>
          <input type="text" name="" value="" placeholder="Type a movie title">
        </div>
      </div>
    <router-view name="main"></router-view>
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

$menu-dimensions: 80px;

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
  font-family:inherit;
}

div.header {
  width: 100%;
  height: $menu-dimensions;
  background: #fff;
  margin-left: $menu-dimensions;
  position: fixed;
  z-index: 15;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(220,220,220,0.3);
  .search-wrapper {
    margin-left: $menu-dimensions;
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
</style>

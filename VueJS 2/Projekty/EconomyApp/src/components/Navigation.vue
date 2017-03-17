<template lang="html">
  <nav>
    <ul class="nav">
      <a href="#">
        <div class="logo">LOGO </div>
      </a>
      <li class="nav-item" v-for="type in listTypes">
        <i :class="type.icon" class="fa fa-2x"></i>
        <span>{{ type.shortTitle.toUpperCase() }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import storage from '../storage.js'

export default {
  data () {
    return {
      listTypes: storage.listTypes
    }
  }
}
</script>

<style lang="scss">

@import '../scss/globals.scss';
@import '../scss/responsive.scss';

nav {
  position: fixed;
  top: 0;
  left: 0;
  ul.nav {
    background: #111;
    height: 100vh;
    width: $main-home-width;
    margin: 0;
    padding: 0;
    div.logo {
      background: #aaa;
      width: $main-home-width;
      height: $main-home-width;
    }
    li.nav-item {
      color: #fff;
      text-align: center;
      font-size: 12px;
      width: $main-home-width;
      height: $main-home-width;
      @include flexy(center, center, wrap, column);
      i {
        padding: 5px;
      }
    }
  }
}


</style>

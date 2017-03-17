<template lang="html">
  <nav>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Another link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

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
  }
}


</style>

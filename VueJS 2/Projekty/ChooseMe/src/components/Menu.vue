<template lang="html">
  <div class="menu">
    <div class="logo">LOGO</div>
    <nav class="nav">
      <ul class="steps">
        <li class="step"><a href=""><i></i><span>Soups</span></a></li>
        <li class="step"><a href=""><i></i><span>Main Courses</span></a></li>
        <li class="step"><a href=""><i></i><span>Drinks and Desserts</span></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.menu {
  height: 100vh;
  width: 20vh;
  background: #111;
  color: white;
  .logo {
    height: 10vh;
    background: #000;
    @include flexy(center, center);
  }
  .nav {
    height: 60vh;
    @include flexy(center, center)
    .steps {
      padding: 0;
      height: 30vh;
      .step {
        width: 20vh;
        height: 10vh;
        @include flexy(center, center);
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}

</style>

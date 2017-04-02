<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">LOGO</router-link></div>
    <nav class="nav">
      <ul class="steps">
        <li class="step"><router-link :to="{name: 'soups'}"><i></i><span>Soups</span></router-link></li>
        <li class="step"><router-link :to="{name: 'mains'}"><i></i><span>Main Courses</span></router-link></li>
        <li class="step"><router-link :to="{name: 'drinks-and-desserts'}"><i></i><span>Drinks and Desserts</span></router-link></li>
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
  width: 20vw;
  background: #111;
  color: white;
  .logo {
    height: 10vh;
    background: #000;
    @include flexy(center, center);
    a {
      text-decoration: none;
      color: white;
    }
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

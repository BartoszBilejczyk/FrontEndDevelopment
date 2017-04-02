<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">LOGO</router-link></div>
    <div class="nav">
      <ul class="steps">
        <router-link :to="{name: 'soups'}"><li class="step"><i></i><span>Soups</span></li></router-link>
        <router-link :to="{name: 'mains'}"><li class="step"><i></i><span>Main Courses</span></li></router-link>
        <router-link :to="{name: 'drinks-and-desserts'}"><li class="step"><i></i><span>Drinks and Desserts</span></li></router-link>
      </ul>
    </div>
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
      text-decoration: none;
      a {
        text-decoration: none;
        color: white;
      }
      .step {
        width: 20vh;
        height: 10vh;
        @include flexy(center, center);

      }
    }
  }
}

</style>

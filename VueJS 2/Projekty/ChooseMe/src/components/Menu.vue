<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">LOGO</router-link></div>
    <div class="nav">
      <ul class="steps">
        <router-link :to="{name: 'soups'}">
          <li class="step-wrapper">
            <div class="step">
              <img src="../assets/soup.png"></img>
              <span>Soups</span>
            </div>
          </li>
        </router-link>
        <router-link :to="{name: 'mains'}">
          <li class="step-wrapper">
            <div class="step">
              <img src="../assets/main.png"></img>
              <span>Main Courses</span>
            </div>
          </li>
        </router-link>
        <router-link :to="{name: 'drinks-and-desserts'}">
          <li class="step-wrapper">
            <div class="step">
              <img src="../assets/drink.png"></img>
              <span>Drinks and Desserts</span>
            </div>
          </li>
        </router-link>
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
  width: 180px;
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
    height: 30vh;
    @include flexy(center, center)
    .steps {
      padding: 0;
      height: 30vh;
      text-decoration: none;
      a {
        text-decoration: none;
        color: white;
      }
      .step-wrapper {
        width: 180px;
        height: 10vh;
        padding: 4px;
        @include flexy(center, center, wrap, column);
        .step {
          @include flexy(center, center, wrap, column);
          &:hover {
            border-bottom: 1px solid white;
          }
          img {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

</style>

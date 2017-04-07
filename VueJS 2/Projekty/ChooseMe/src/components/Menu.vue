<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">LOGO</router-link></div>
    <div class="nav">
      <ul class="steps">
        <li class="step-wrapper" v-for='mealType in mealTypes'>
          <router-link :to="{name: 'main-category', params: { category: mealType.query, index: mealType.index } }">
            <li class="step-wrapper">
              <div class="step">
                <img src='../assets/soup.png'></img>
                <span>{{ mealType.title }}</span>
              </div>
            </li>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mealTypes () {
      return this.$store.state.mealTypes
    }
  }
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

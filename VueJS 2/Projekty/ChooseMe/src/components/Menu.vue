<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">LOGO</router-link></div>
    <div class="nav">
      <ul class="steps">
        <li class="step-wrapper" v-for='mealType in mealTypes'>
          <router-link :to="{name: 'main-category', params: { category: mealType.query, index: mealType.index } }">
            <li class="step-wrapper">
              <div class="step">
                <span class="ion-icon" :class="mealType.icon" data-pack="default"></span>
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
  background: #1e5799; /* Old browsers */
  background: -moz-linear-gradient(top, $main 0%, $checkout-active-light 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,$main 0%,$checkout-active-light 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(top,$main 0%,$checkout-active-light 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$main, endColorstr=$checkout-active-light,GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  color: white;
  .logo {
    height: 10vh;
    background: darken($main, 6);
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
        }
      }
    }
  }
}

.ion-icon {
  font-size: 35px;
}

</style>

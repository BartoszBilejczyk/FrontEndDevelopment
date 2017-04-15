<template lang="html">
  <div class="menu">
    <div class="logo"><router-link :to="{name: 'home'}">ChooseMe</router-link></div>
    <div class="nav">
      <ul class="steps">
        <li class="step-wrapper" v-for='mealType in mealTypes'>
          <router-link :to="{name: 'main-category', params: { category: mealType.query, index: mealType.index } }">
              <div class="step">
                <span class="ion-icon" :class="mealType.icon" data-pack="default"></span>
                <span>{{ mealType.title }}</span>
              </div>
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
  z-index: 999;
  @include tablet-portrait-and-down {
    height: 70px;
    width: 100vw;
    position: fixed;
    bottom: 0;
  }
  .logo {
    height: 10vh;
    background: darken($main, 6);
    @include flexy(center, center);
    @include tablet-portrait-and-down {
      display: none;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
  .nav {
    height: 100%;
    @include flexy(flex-start, center)
    @include tablet-portrait-and-down {
      height: 100%;
    }
    .steps {
      padding: 0;
      height: inherit;
      width: 100%;
      height: 280px;
      text-decoration: none;
      @include tablet-portrait-and-down {
        @include flexy(center, center)
      }
      .step-wrapper {
        width: 180px;
        height: 10vh;
        padding: 4px;
        @include flexy(center, center, wrap, column);
        @include tablet-portrait-and-down {
          width: 33%;
          height: inherit;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: white;
          @include tablet-portrait-and-down {
            width: 100%;
            height: inherit;
          }
          .step {
            @include flexy(center, center, wrap, column);
            height: inherit
          }
        }
      }
    }
  }
}

.ion-icon {
  font-size: 35px;
  @include tablet-portrait-and-down {
    font-size: 20px;
  }
}

</style>

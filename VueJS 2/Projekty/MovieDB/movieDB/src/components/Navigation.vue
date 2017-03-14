<template lang="html">
  <nav class="nav">
    <ul class="nav-list">
      <li class="logo"><img src="../assets/logo.png" alt=""></li>
      <li class="nav-item" v-for="item in listTypes" v-if="item.isCategory">
        <router-link class="nav-item" :to="{name: 'main-category', params: { category: item.query } }">
          <i class="material-icons menu-icon">{{ item.icon }}</i>
          <span class="menu-title">{{ item.shortTitle }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import stored from '../stored'
export default {
  data () {
    return {
      listTypes: stored.listTypes
    }
  }
}
</script>

<style lang="scss">

$menu-dimensions: 90px;

  .nav {
    width: $menu-dimensions;
    height: 100vh;
    position: fixed;
    z-index: 10;
    border-right: 1px solid rgba(220,220,220,0.3);
    .nav-list {
      padding: 0;
      margin: 0;
      .logo {
        height: $menu-dimensions;
        width: $menu-dimensions;
        background: #000;
        list-style-type: none;;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(220,220,220,0.3);
      }
      .nav-item {
        height: $menu-dimensions;
        width: $menu-dimensions;
        background: #fff;
        list-style-type: none;;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(220,220,220,0.3);
        border-right: 1px solid rgba(220,220,220,0.3);
        font-size: 0.6rem;
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: #000;
        }
        .menu-icon {
          padding: 10px;
        }
      }
    }
  }


</style>

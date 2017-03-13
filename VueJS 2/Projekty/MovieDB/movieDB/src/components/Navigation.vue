<template lang="html">
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item"><img src="../assets/logo.png" alt=""></li>
      <li class="nav-item" v-for="menuItem in menu">
        <i class="material-icons">{{ menuItem.icon }}</i>
        {{ menuItem.category }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      menu: [
          {category: 'Popular', icon: 'search'},
          {category: 'First', icon: 'done'},
          {category: 'Second', icon: 'cached'},
          {category: 'Third', icon: 'code'}
      ]
    }
  }
}
</script>

<style lang="scss">

$menu-dimensions: 80px;

  .nav {
    width: $menu-dimensions;
    height: 100vh;
    position: fixed;
    z-index: 10;
    .nav-list {
      padding: 0;
      margin: 0;
      .nav-item {
        height: $menu-dimensions * 1.3;
        width: $menu-dimensions;
        background: #fff;
        list-style-type: none;;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(220,220,220,0.3);
        &:first-child {
          background: #111;
          height: $menu-dimensions
        }
      }
    }
  }


</style>

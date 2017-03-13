<template lang="html">
  <div class="main">
    <header class="main-header"></header>
    <div class="items">
      <div class="item" v-for="item in items">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="scss">

$menu-dimensions: 80px;

.main {
    padding: $menu-dimensions 0 0;
    margin-left: $menu-dimensions;
    width: 100%;
    height: 100%;
}

.main-header {
    background: url('http://www.lorempixel.com/1000/300/nature/5');
    background-size: cover;
    position: relative;
    width: 100%;
    height: 400px;
}

.items {
    .item {
      width: 100%;
      height: 500px;
      border: 1px solid lightgray
    }
}

</style>

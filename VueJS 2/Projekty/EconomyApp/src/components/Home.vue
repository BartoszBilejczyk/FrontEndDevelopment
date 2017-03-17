<template lang="html">
  <div class="home">
    <div class="main-category-list">
      <category-list v-for="list in listTypes">{{ list }}</category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'
import storage from '../storage.js'
export default {
  data () {
    return {
      listTypes: storage.listTypes
    }
  },
  components: {
    CategoryList
  }
}
</script>

<style lang="scss">

@import '../scss/globals.scss';
@import '../scss/responsive.scss';

.home {
  margin-left: $main-home-width;
  background: #eee;
  width: calc(100% - $main-home-width);
  min-height: 100vh;
}
</style>

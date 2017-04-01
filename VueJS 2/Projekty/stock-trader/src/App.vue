<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col s12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    appHeader: Header
  }
}
</script>

<style lang='scss'>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>

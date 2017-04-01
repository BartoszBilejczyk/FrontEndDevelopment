<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col s12">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
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
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style lang='scss'>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

.fade-enter, .fade-leave-to {
  opacity: 0.1
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}



</style>

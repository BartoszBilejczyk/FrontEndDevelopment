<template>
  <div id="app">
    <navigation></navigation>
    <!-- Something wrong with search -->
    <div class="header">
      <div class="logo"><img src="./assets/logo.png" alt=""></div>
        <!-- <div class="search-wrapper">
          <i class="material-icons material-icons-search">search</i>
          <input type="text" name="" value="" placeholder="Type a movie title" v-model.trim="searchQuery" @blur="search"><button class="btn" type="button" name="button" @click="search">Szukaj</button>
        </div> -->
    </div>

    <movie-popup v-if="moviePopupVisible" @close="closeMoviePopup" :id="moviePopupId"></movie-popup>

    <div class="main">
      <transition name="fade">
        <router-view name="list-router-view" :type="'page'" :mode="'collection'" :shortList="false"  :category="$route.params.category" :key="$route.params.category"></router-view>
        <router-view name="page-router-view"></router-view>
        <router-view name="search-router-view" :type="'page'" :mode="'search'" :key="$route.params.query"></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import MoviePopup from './components/MoviePopup.vue'
import EventBus from './bus.js'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      moviePopupVisible: false,
      moviePopupId: 0
    }
  },
  computed: {
    queryForRouter () {
      return encodeURI(this.searchQuery.replace(/ /g, '+'))
    }
  },
  methods: {
    search () {
      if (this.searchQuery !== '') {
        console.log(this.queryForRouter)
        this.$router.push({ name: 'search', params: { query: this.queryForRouter } })
      }
    }
  },
  components: {
    Navigation,
    MoviePopup
  },
  created () {
    EventBus.$on('openMoviePopup', () => { console.log('s') })
  }

}
</script>

<style lang="scss">

@import '/styles/media.scss';
@mixin flexy ($align-items, $justify-content, $flex-wrap: wrap) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
  flex-wrap: $flex-wrap;
}

$menu-dimensions: 90px;

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  width: 100vw;
}
#app {
  font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 200;
}

input, textarea, select {
  font-family: inherit;
}

div.header {
  width: 100%;
  height: $menu-dimensions;
  background: #fff;
  position: fixed;
  z-index: 15;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(220,220,220,0.3);
  @include mobile-only {
    height: $menu-dimensions / 1.8;
  }
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
    @include mobile-only {
      height: $menu-dimensions / 1.8;
      width: $menu-dimensions / 1.8;
    }
    img {
      width: 70%;
    }
  }
  .search-wrapper {
    margin-left: 60px;
    @include flexy(center, flex-start, nowrap);
    @include mobile-only {
      margin-left: 30px;
    }
    .material-icons-search {
      padding: 5px;
    }
    input {
      border: none;
      color: #333;
      font-size: 1rem;
      outline: none;
    }
    button.btn {
      background: transparent;
      border: 1px solid black;
      padding: 10px;
      font-family: inherit;
      border-radius: 5px
    }
  }
}

.main {
  position: relative;
  min-height: 100vh;
  padding: $menu-dimensions/1.8 0 0;
  @include tablet-portrait-and-up {
    padding: $menu-dimensions 0 0;
    margin-left: $menu-dimensions;
    width: calc(100% - $menu-dimensions);
    height: 100%;
  }
}


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<template lang="html">
  <div class="movie-popup">
    <div class="movie-popup-box">
      <movie :id='id'></movie>
      <button type="button" name="button" class="movie-popup-close"></button>
    </div>
  </div>
</template>

<script>
import Movie from './Movie.vue'

export default {
  props: ['id'],
  components: {
    Movie
  }
}
</script>

<style lang="scss">
.movie-popup{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background: rgba(30,30,30, 0.98);
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  &-box{
    width: 100%;
    max-width: 768px;
    position: relative;
    z-index: 5;
    background: #222;
    padding-bottom: 50px;
  }
  &-close{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    background: transparent;
    width: 40px;
    height: 40px;
    transition: background 0.5s ease;
    cursor: pointer;
    &:before,
    &:after{
      content: "";
      display: block;
      position: absolute;
      top: 19px;
      left: 10px;
      width: 20px;
      height: 2px;
      background: #ccc;
    }
    &:before{
      transform: rotate(45deg);
    }
    &:after{
      transform: rotate(-45deg);
    }
    &:hover{
      background: limegreen;
    }
  }
}
</style>

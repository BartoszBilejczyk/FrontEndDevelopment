<template lang="html">
  <div class="meal-popup" @click="closePopup">
    <div class="meal-popup_box" @click.stop>
      <h1>{{meal.name}}</h1>
      <h1>{{meal.price}}</h1>
      <h1>{{meal.prepTime}}</h1>
      <button class="meal-popup_close" @click="closePopup"></button>
    </div>
    <i class="loader"></i>
  </div>
</template>

<script>
export default {
  props: ['meal'],
  methods: {
    closePopup () {
      this.$store.dispatch('closePopup')
    }
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.meal-popup{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0, 0.3);
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  &_box{
    width: 100%;
    max-width: 768px;
    position: relative;
    z-index: 5;
    background: #eee;
    padding-bottom: 50px;
    margin: 100px auto;
  }
  &_close{
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
      background: #111;
    }
    &:before{
      transform: rotate(45deg);
    }
    &:after{
      transform: rotate(-45deg);
    }
    &:hover{
      animation: 0.5s rotate
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0)

  },
  to {
    transform: rotate(90deg)
  }
}


</style>

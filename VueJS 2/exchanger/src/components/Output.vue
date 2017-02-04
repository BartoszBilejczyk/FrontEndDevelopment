<template>
 <div>
siema
 </div>
</template>


<script>

  import {CategoryBus} from '../main'

  export default {

  }

</script>


<style lang="scss" scoped>
  @mixin flexy($align, $justify) {
    display: flex;
    align-items: $align;
    justify-content: $justify;
  }

  nav {
    @include flexy(flex-start, center) ;
    height: 85vh;
    background-color: #222
  }

  nav ul {
    padding: 3rem;
    margin: 0;

  }
</style>

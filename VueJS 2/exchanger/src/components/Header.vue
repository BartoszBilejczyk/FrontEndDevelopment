<template>
  <header>
    <p>This is app</p>
  </header>
</template>


<script>
  export default {
    data() {
      return {

      }
    },

  }
</script>


<style lang="scss">
  @mixin flexy($align, $justify) {
    display: flex;
    align-items: $align;
    justify-content: $justify;
  }

  header {
    @include flexy(center, center);
    height: 15vh;
    background-color: #111
  }

</style>

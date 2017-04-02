<template lang="html">
  <div class="start">
    <router-link :to="{name: 'soups'}"><v-btn large="true" wavesTeal="true">Let's start</v-btn></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.start {
  @include flexy(center, center)
}

</style>

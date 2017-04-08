<template lang="html">
  <div class="start">
    <router-link :to="{name: 'main-category', params: { category: 'soups', index: 0} }"><v-btn large=true>Let's start</v-btn></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.start {
  @include flexy(center, center)
}

</style>

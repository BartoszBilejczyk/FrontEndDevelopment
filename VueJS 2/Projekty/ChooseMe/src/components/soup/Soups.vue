<template lang="html">
  <div class="soups">
    <div class="small-paddings">
      <div class="row">
        <soup v-for="soup in soups" :soup="soup"></soup>
      </div>
    </div>
  </div>
</template>

<script>
import Soup from './Soup.vue'

export default {
  computed: {
    soups () {
      return this.$store.state.soups
    }
  },
  components: {
    Soup: Soup
  },
  mounted () {
    console.log(this.soups)
  }
}

</script>

<style lang="scss">


@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.soups {
  @include flexy(center, center)
}
</style>

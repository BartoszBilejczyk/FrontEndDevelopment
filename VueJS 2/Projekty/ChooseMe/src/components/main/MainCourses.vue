<template lang="html">
  <div class="mains">
    <div class="small-paddings">
      <div class="row">
        <main-course v-for="main in mains" :main="main"></main-course>
      </div>
    </div>
  </div>
</template>

<script>
import MainCourse from './MainCourse.vue'

export default {
  computed: {
    mains () {
      return this.$store.state.mains
    }
  },
  components: {
    mainCourse: MainCourse
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.mains {
  @include flexy(center, center)
}

</style>

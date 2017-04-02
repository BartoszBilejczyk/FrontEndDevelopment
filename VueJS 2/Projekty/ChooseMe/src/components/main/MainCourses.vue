<template lang="html">
  <div class="mains">
    <div class="container">
      <div class="row">
        <main-course v-for="mainCourse in 9"></main-course>
      </div>
    </div>
  </div>
</template>

<script>
import MainCourse from './MainCourse.vue'

export default {
  components: {
    mainCourse: MainCourse
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.mains {
}

</style>

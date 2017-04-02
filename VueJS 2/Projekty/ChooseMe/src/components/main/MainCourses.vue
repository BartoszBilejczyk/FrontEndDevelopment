<template lang="html">
  <div class="mains">
    <main-course v-for="mainCourse in 5"></main-course>
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
</style>

<template lang="html">
  <div class="subcategory">
    {{ subcategory }}
  </div>
</template>

<script>
export default {
  props: [ 'subcategory', 'index' ]
}
</script>

<style lang="scss">


@import '../scss/globals.scss';
@import '../scss/responsive.scss';


.subcategory {
  margin: 20px;
}

</style>

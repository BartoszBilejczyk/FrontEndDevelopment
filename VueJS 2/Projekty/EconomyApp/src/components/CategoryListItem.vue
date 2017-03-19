<template lang="html">
  <div class="subcategory">
      {{ quandlDataItem[index].id }}
  </div>
</template>

<script>
export default {
  props: [ 'quandlDataItem', 'index' ],
  created () {
    console.log(this.quandlDataItem)
  }
}
</script>

<style lang="scss">


@import '../scss/globals.scss';
@import '../scss/responsive.scss';


.subcategory {
  margin: 20px;
}

</style>

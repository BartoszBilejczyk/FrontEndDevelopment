<template lang="html">
  <div class="order-details">
    <span>Preparation time: {{ totalTime }}</span>
    <span>Total cost: {{ totalCost }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    totalTime () {
      return this.$store.state.totalTime
    },
    totalCost () {
      return this.$store.state.totalCost
    }
  }
}
</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.order-details {
  width: 100%;
  height: 50px;
  background: #111;
  color: white;
  @include flexy(center, space-around)
}
</style>

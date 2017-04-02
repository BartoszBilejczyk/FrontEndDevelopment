<template lang="html">
  <div class="order-details">
    <span>Preparation time: 10min</span>
    <span>Order value: $10</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

@import '../styling/globals.scss';
@import '../styling/responsive.scss';

.order-details {
  width: 80vw;
  height: 50px;
  @include flexy(center, space-around)
}
</style>

<template lang="html">
  <div class="container">
    <div class="confirmation">
      <div class="confirmation-icon">
        <img src='../../assets/soup.png'></img>
      </div>
      <div class="confirmation-message">
        <h4>Congratulations<br>Your order has been accepted</h4>
        <p>Estimated time arrival: 30 minutes. We will send you a notification when it will be near your place.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.confirmation {
  @include flexy(center, center, wrap, column)
  .confirmation-icon {
    background-color: black;
  }
}

</style>

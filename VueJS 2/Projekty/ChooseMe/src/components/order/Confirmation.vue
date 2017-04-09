<template lang="html">
  <div class="confirmation-wrapper">
    <div class="container">
      <div class="confirmation center">
        <img class="confirmation-icon" src='../../assets/soup.png'></img>
        <h4>Congratulations!</h4>
        <h5>Your order has been accepted</h5>
        <p>Estimated time arrival: 30 minutes. We will send you a notification when it will be near your place.</p>
      </div>
      <div class="checkout-navigation">
        <div class="row">
          <div class="center">
            <router-link to="/">Another order?</router-link>
          </div>
        </div>
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

.confirmation-wrapper {
  height: 100%;
  .container {
    @include flexy(center, space-around, wrap, column)
    height: 100%;
    .confirmation-icon {
      background-color: black;
    }
  }
}

a {
  color: $main
}
</style>

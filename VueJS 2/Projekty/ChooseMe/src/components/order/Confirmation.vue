<template lang="html">
  <div class="confirmation-wrapper">
    <div class="container">
      <div class="confirmation center">
        <div class="icon-wrapper">
          <span class="ion-icon ion-android-done"></span>
        </div>
        <h4>Congratulations!</h4>
        <h5>Your order has been accepted</h5>
        <p>Estimated time arrival: {{ totalTime }} minutes. We will send you a notification when it will be near your place.</p>
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
  computed: {
    totalTime () {
      return this.$store.state.totalTime
    }
  }
}
</script>

<style lang="scss" scoped>

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

.icon-wrapper {
  animation: 1s jumpIn;
  .ion-icon {
    font-size: 6rem;
  }
}

@keyframes jumpIn {
  0% {
    transform: scale(0);
  },
  40% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.2);
  },
  70% {
    transform: scale(1);
  },
  85% {
    transform: scale(1.05);
  },
  100% {
    transform: scale(1);
  }
}
</style>

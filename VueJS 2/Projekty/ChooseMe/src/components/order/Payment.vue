<template lang="html">
  <div class="payment-wrapper">
    <div class="payment">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="credit-card-wrapper">
            <img src="../../assets/card.png" alt="" class="responsive-img">
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="payment-form">
              <form action="">
                <h4>Payment details</h4>
                <div class="row">
                  <div class="col s12">
                    <div class="input-field">
                      <v-text-input name="first" id="first"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <div class="input-field">
                      <v-text-input name="first" id="first"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s6">
                    <div class="input-field">
                      <v-text-input name="first" id="first"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                  <div class="col s6">
                    <div class="input-field">
                      <v-text-input name="first" id="first"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-navigation">
      <div class="row">
        <div class="center">
          <router-link to="/checkout/shipping"><a href="#" class="back">Back</a></router-link>
          <router-link to="/checkout/confirmation"><v-btn>Next</v-btn></router-link>
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

.payment-wrapper {
  height: 100%;
  @include flexy(center, space-around, wrap, column)
}
.payment {
  @include flexy(center,center)
  .row {
    @include flexy(center,center)
  }
}
</style>

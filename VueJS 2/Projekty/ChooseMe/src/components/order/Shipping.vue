<template lang="html">
  <div class="shipping">
    <div class="container">
      <div class="row">
        <form action="">
          <h4>Shipping details</h4>
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
    <div class="checkout-navigation">
      <div class="row">
        <div class="center">
          <router-link to="/checkout/order"><a href="#" class="back">Back</a></router-link>
          <router-link to="/checkout/payment"><v-btn>Next</v-btn></router-link>
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


</style>

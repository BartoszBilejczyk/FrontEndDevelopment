<template lang="html">
    <div class="container">
      <div class="payment">
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
                      <v-text-input name="first" id="first" placeholder="First Name"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <div class="input-field">
                      <v-text-input name="first" id="first" placeholder="First Name"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s6">
                    <div class="input-field">
                      <v-text-input name="first" id="first" placeholder="First Name"></v-text-input>
                      <label for="first">First Name</label>
                    </div>
                  </div>
                  <div class="col s6">
                    <div class="input-field">
                      <v-text-input name="first" id="first" placeholder="First Name"></v-text-input>
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
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.payment {
  width: 100%;
  .row {
    @include flexy(center,center)
  }
}
</style>

<template lang="html">
  <div class="shipping-wrapper">
    <div class="shipping">
      <div class="row">
        <div class="col s12 l6">
          <form action="">
            <h5>Shipping details</h5>
            <div class="input-field">
              <v-text-input name="first" id="first"></v-text-input>
              <label for="first">First Name</label>
            </div>
            <div class="input-field">
              <v-text-input name="first" id="first"></v-text-input>
              <label for="first">Last Name</label>
            </div>
            <div class="input-field">
              <v-text-input name="first" id="first"></v-text-input>
              <label for="first">E-mail</label>
            </div>
            <div class="input-field">
              <v-text-input name="first" id="first"></v-text-input>
              <label for="first">Address</label>
            </div>
          </form>
        </div>
        <div class="col s12 l6">
          <form action="">
            <h5>Shipping method</h5>
            <div class="box-placeholder">
              <div class="input-field">
                <v-radio name="radio"
                       id="radio1"
                       val="Poczta"
                       v-model="radio1"
                       >Poczta Polska - priority
                </v-radio>
              </div>
            </div>
            <div class="box-placeholder">
              <div class="input-field">
                <v-radio name="radio"
                       id="radio2"
                       val="Paczkomat"
                       v-model="radio1"
                       >Paczkomaty 24/7
                </v-radio>
              </div>
            </div>
            <div class="box-placeholder">
              <div class="input-field">
                <v-radio name="radio"
                       id="radio3"
                       val="DHL"
                       v-model="radio1"
                       >DHL
                </v-radio>
              </div>
            </div>
          </form>
        </div>
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

.shipping-wrapper {
  height: 100%;
  padding: 0 3%;
  @include flexy(center, space-around, nowrap, column)
  @include tablet-portrait-and-down {
    display: block
  }

}
.shipping {
  @include flexy(center, space-around);
  width: 90%;
  margin: 0 auto;
  .row {
    @include flexy(flex-start, center);
    width: 100%
  }
}

.box-placeholder {
  width: 100%;
  height: 80px;
  border: 2px solid $main;
  margin: 5px;
  .input-field {
    margin-left: 1em
  }
}


[type="radio"]:checked + label:after, [type="radio"].with-gap:checked + label:after {
    background-color: $main;
    z-index: 0;
}
[type="radio"]:checked + label:after, [type="radio"].with-gap:checked + label:before, [type="radio"].with-gap:checked + label:after {
    border: 2px solid $main;
}


</style>

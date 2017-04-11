<template lang="html">
  <div class="payment-wrapper">
    <div class="payment">
      <div class="row">
        <div class="col s12 l6">
          <div class="credit-card-wrapper">
            <div class="card-base">
              <div class="visa">
                <img class="responsive-img" src="../../assets/visa.jpg" alt="">
              </div>
              <div class="processor">
                <img class="responsive-img" src="../../assets/chip.png" alt="">
              </div>
              <div class="card-number">{{ cardNumber | card }}</div>
              <div class="card-holder">{{ cardName.toUpperCase() }}</div>
              <div class="expiration-date">{{ validThrough }}</div>
            </div>
          </div>
        </div>
        <div class="col s12 l6">
          <div class="payment-form">
            <form action="">
              <h4>Payment details</h4>
                <div class="input-field">
                  <v-text-input name="name" id="name" v-model="cardName"></v-text-input>
                  <label for="name">Name on Card</label>
                </div>

                <div class="input-field" @keyup="checkNumber()">
                  <v-text-input name="card-number" id="card-number" v-model="cardNumber" ></v-text-input>
                  <label for="card-number">Card Number</label>
                </div>

                <div class="input-field">
                  <v-text-input name="date" id="date" v-model="validThrough"></v-text-input>
                  <label for="date">Valid Through</label>
                </div>

                <div class="input-field">
                  <v-text-input name="cvv" id="cvv" v-model="cvv"></v-text-input>
                  <label for="cvv">CVV/CVC</label>
                </div>
            </form>
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
  data () {
    return {
      cardName: '',
      cardNumber: '1234 1234 1234 1324',
      validThrough: null,
      cvv: null
    }
  },
  methods: {
    checkNumber () {
      return this.cardNumber.replace(/[^0-9]/g, '').replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
    }
  }
}
</script>

<style lang="scss">

@import '../../styling/globals.scss';
@import '../../styling/responsive.scss';

.payment-wrapper {
  height: 100%;
  padding: 0 3%;
  @include flexy(center, space-around, nowrap, column)
}
.payment {
  @include flexy(center,center);
  width: 90%;
  .row {
    @include flexy(center,center);
    width: 100%
  }
}

.credit-card-wrapper {
  text-align: center;
  margin: 10px;
  height: 300px;
  width: 480px;
  color: white;
  position: relative;
  text-shadow: 1px 1px black;
  .card-base {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: #1e5799; /* Old browsers */
    background: -moz-linear-gradient(45deg, $main 0%, $checkout-active-light 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg,$main 0%,$checkout-active-light 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg,$main 0%,$checkout-active-light 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$main, endColorstr=$checkout-active-light,GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    .visa {
      position: absolute;
      top: 10%;
      right: 10%;
      width: 20%;
      height: auto;
    }
    .processor {
      position: absolute;
      top: 30%;
      left: 10%;
      width: 10%;
      height: auto;
    }
    .card-number {
      position: absolute;
      top: 50%;
      left: 10%;
      font-size: 40px;
    }
    .card-holder {
      position: absolute;
      top: 80%;
      left: 10%;
      font-size: 25px;
    }
    .expiration-date {
      position: absolute;
      top: 80%;
      right: 10%;
      font-size: 25px;
    }
  }
}
</style>

<template lang="html">
  <div class="payment-wrapper">
    <div class="payment">
      <div class="row">
        <div class="col s12 l6">
          <div class="payment-form">
            <form action="">
              <h5 class="title">Payment details</h5>
                <div class="input-field">
                  <v-text-input name="name" id="name" v-model="cardName"></v-text-input>
                  <label for="name">Name on Card</label>
                </div>

                <div class="input-field" @keyup="checkNumber()">
                  <v-text-input name="card-number" id="card-number" v-model="cardNumber" ></v-text-input>
                  <label for="card-number">Card Number</label>
                </div>

                <!-- <div class="card-details">
                  <div class="input-field">
                    <v-select name="select"
                              id="select"
                              :items="months"
                              >
                    </v-select>
                    <label for="select2">Select</label>
                  </div>
                </div>
                <div class="card-details">
                  <div class="input-field">
                    <v-select name="select2"
                              id="select2"
                              :items="years"
                              >
                    </v-select>
                    <label for="select2">Select</label>
                  </div>
                </div> -->

                <div class="card-details">
                  <div class="input-field">
                    <v-text-input name="month" id="month" v-model="month"></v-text-input>
                    <label for="month">Month</label>
                  </div>
                </div>
                <div class="card-details">
                  <div class="input-field">
                    <v-text-input name="year" id="year" v-model="year"></v-text-input>
                    <label for="year">Year</label>
                  </div>
                </div>
                <div class="card-details">
                  <div class="input-field">
                    <v-text-input name="cvv" id="cvv" v-model="cvv"></v-text-input>
                    <label for="cvv">CVV</label>
                  </div>
                </div>
            </form>
          </div>
        </div>
        <div class="col s12 l6 hide-on-med-and-down credit-card-row">
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
              <div class="expiration-date">{{ month }}/{{ year }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-navigation">
        <div class="row">
          <div class="center">
            <router-link to="/checkout/shipping"><a href="#" class="back">Back</a></router-link>
            <router-link to="/checkout/confirmation"><v-btn>Order</v-btn></router-link>
          </div>
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
      cardNumber: '',
      month: null,
      year: null,
      cvv: null,
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      years: ['17', '18', '19', '20', '21', '22']
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
  @include tablet-portrait-and-down {
    height: 65vh;
    margin: 0 auto;
    overflow-y: scroll;
  }
}
.payment {
  @include flexy(center,center);
  width: 90%;
  height: 100%;
  @include tablet-portrait-and-down {
    height: 70vh;
    display: grid;
    margin: 0 auto;
  }
  .row {
    @include flexy(center,center);
    width: 100%
  }
  .title {
    margin-bottom: 10px;
  }
}

.credit-card-row {
  display: flex;
  justify-content: center;
}

.credit-card-wrapper {
  text-align: center;
  margin: 10px;
  height: 160px;
  width: 250px;
  color: white;
  position: relative;
  text-shadow: 1px 1px black;
  @include desktop-and-up {
    height: 192px;
    width: 300px;
  }
  .card-base {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
      font-size: 20px;
      @include desktop-and-up {
        font-size: 24px
      }
    }
    .card-holder {
      position: absolute;
      top: 80%;
      left: 10%;
      font-size: 10px;
      @include desktop-and-up {
        font-size: 12px
      }
    }
    .expiration-date {
      position: absolute;
      top: 80%;
      right: 10%;
      font-size: 10px;
      @include desktop-and-up {
        font-size: 12px
      }
    }
  }
}

.card-details {
  width: 32%;
  display: inline-block;
  @include mobile-only {
    width: 100%;
  }
}

select {
  color: #000
}

</style>

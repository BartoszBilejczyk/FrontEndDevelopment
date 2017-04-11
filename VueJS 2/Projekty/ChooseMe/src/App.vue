<template>
  <div id="app">
    <transition name="fade">
      <!-- :name="water" :meal="meal" -->
      <meal-details v-if="popupVisible" :meal="activeMeal"></meal-details>
    </transition>
    <app-menu></app-menu>
    <div class="main">
      <div class="cart-wrapper">
        <div class="disactivate" @mouseover="active = false"></div>
        <div class="icon" @mouseover="active = true" @click="active = !active"><span class="ion-icon ion-android-cart"></span></div>
        <transition name="slide-fade">
          <div class="cart" v-if="active" @mouseleave="active = false">
            <div class="emptyOrder" v-if="orderEmpty">
              <h5>There's nothing in your cart</h5>
              <router-link to="/soups"><div @click="active = false"><v-btn class="ready" large>Ready to start?</v-btn></div></router-link>
            </div>
            <div class="cart-items" v-if="!orderEmpty">
              <span>ORDER</span>
              <hr>
              <div class="cart-item" v-for="(meal, index) in order">
                <div class="row">
                  <div class="item-image col s3 l2 left-align"><img class="responsive-img" :src="meal.url" alt=""></div>
                  <div class="item-description col s7 l5 left-align">{{ meal.name }}<br><span class="grey-text text-lighten-1">description</span></div>
                  <div class="item-quantity col l3 center-align hide-on-med-and-down">
                    <span class="orange-text minus" @click="deleteItem(meal, index)">-</span>
                    <span class="quantity"> {{ meal.quantity }} </span>
                    <span class="green-text plus" @click="addItem(meal, index)">+</span>
                  </div>
                  <div class="item-value col s2 l2 right-align"> ${{ meal.quantity * meal.price }}</div>
                </div>
                <hr>
              </div>
            </div>
            <div class="totals">
              <div class="row">
                <span class="left">Subtotal</span><span class="right">${{ subtotal }}</span>
              </div>
              <div class="row">
                <span class="left">Shipping</span><span class="right">${{ shipping }}</span>
              </div>
              <div class="row">
                <span class="left"><strong>Total</strong></span><span class="right"><strong>${{ totalCost }}</strong></span>
              </div>
            </div>
            <router-link to="/checkout/order"><div @click="active = !active"><v-btn class="right">PLACE ORDER</v-btn></div></router-link>
          </div>
        </transition>
      </div>
        <transition name="fade">
          <router-view name="meals" :category="$route.params.category" :index="$route.params.index"></router-view>
          <router-view name="checkout"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

import Menu from './components/Menu.vue'
import MealDetails from './components/products/MealDetails.vue'

export default {
  name: 'app',
  data () {
    return {
      active: false
    }
  },
  computed: {
    revealed () {
      return {
        reveal: this.active
      }
    },
    order () {
      return this.$store.state.order
    },
    orderEmpty () {
      if (this.order.length) {
        return false
      } else {
        return true
      }
    },
    totalTime () {
      return this.$store.state.totalTime
    },
    totalCost () {
      return this.$store.state.totalCost
    },
    subtotal () {
      return this.$store.state.subtotal
    },
    shipping () {
      return this.$store.state.shipping
    },
    popupVisible () {
      return this.$store.state.popupVisible
    },
    activeMeal () {
      return this.$store.state.activeMeal
    }
  },
  methods: {
    addItem (meal, index) {
      const addedItem = {
        quantity: 1,
        type: 'meal',
        name: meal.name,
        price: meal.price,
        prepTime: meal.prepTime,
        url: meal.url
      }
      console.log(addedItem)
      this.$store.dispatch('addItem', addedItem)
    },
    deleteItem (meal, index) {
      const deletedItem = {
        quantity: 1,
        type: 'meal',
        name: meal.name,
        price: meal.price,
        prepTime: meal.prepTime,
        url: meal.url
      }
      console.log(deletedItem)
      this.$store.dispatch('deleteItem', deletedItem)
    }
  },
  components: {
    appMenu: Menu,
    MealDetails
  }
}
</script>

<style lang="scss">

@import './styling/globals.scss';
@import './styling/responsive.scss';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1
}

.btn-large {
    line-height: 20px;
}

.container .row {
  margin: 10px 0
}
.cart-wrapper {
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: auto;
  background-color: #111;
  z-index: 99999
}
.cart {
  position: absolute;
  top: 0;
  right: 1px;
  width: 450px;
  min-height: 200px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  @include mobile-only {
    width: 90%
  }
  img {
    max-width: 100%;
  }
  .row {
    margin: 10px auto;
  }
}

.emptyOrder {
  height: 100%;
  @include flexy(center, center, wrap, column)
  .ready {
    margin-top: 10px;
  }
}

.cart-items {
  @include tablet-portrait-and-down {
    max-height: 400px;
    overflow-y: scroll
  }
  @include mobile-only {
    max-height: 250px;
    overflow-y: scroll
  }
}

.cart-item {
  .row {
    margin: 10px auto;
    display: flex;
    align-items: center;
    .col:first-child {
      padding: 0 1rem 0 0
    }
    .col:last-child {
      padding: 0 0 0 1rem
    }
    .item-description {
      font-size: 0.9rem;
    }
  }
}

.plus, .minus {
  font-size: 1.5rem;
  cursor: pointer
}

.quantity {
  margin: 0 8px;
  padding: 3px;
  border: 1px solid grey
}

.disactivate {
  position: absolute;
  top: -60px;
  right: 60px;
  width: 50px;
  height: 60px;
  opacity: 0
}

.icon {
  position: absolute;
  top: -60px;
  right: 0;
  width: 60px;
  height: 60px;
  background-color: $main;
  color: white;
  @include flexy(center, center)
}

.reveal {
  position: absolute;
  transition: 1s;
  animation: reveal 1s forwards;
}

.btn, .btn-large {
  background: #1e5799; /* Old browsers */
  background: -moz-linear-gradient(45deg, $main 0%, $checkout-active-light 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg,$main 0%,$checkout-active-light 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg,$main 0%,$checkout-active-light 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$main, endColorstr=$checkout-active-light,GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.main {
  z-index: 2;
  width: calc(100vw - 180px);
  height: 100vh;
  background: #eee;
  position: relative;
  display: grid;
  @include tablet-portrait-and-down {
    height: 100%;
    min-height: calc(100vh - 70px);
    width: 100vw
  }
}
.choice {
  height: calc(100vh - 130px);
  margin-top: 0;
  overflow-y: scroll;
  @include flexy(initial, center);
  @include tablet-portrait-and-down {
    height: calc(100% - 90px);
    min-height: calc(100vh - 90px)
  }
    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
}

.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-enter, .fade-leave-active, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
//
// @keyframes reveal {
//   from {
//     right: 0;
//   },
//   to {
//     right: 200px;
//   }
// }

@keyframes spin {
  100% {transform: rotate(1turn); }
}

</style>

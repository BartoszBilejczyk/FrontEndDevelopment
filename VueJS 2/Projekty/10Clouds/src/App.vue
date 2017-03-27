<template>
<div id="app">

  <!-- preloader -->
  <div class="wrapper" v-if="preLoad">
    <div class="bg"></div>
    <img src="../src/assets/logo-kopia.png" alt='10Clouds logo' class='logo' />
  </div>
  <!-- end of preloader -->

  <div class="main" >

    <!-- background -->
    <div class="gradient-drop">
        <img src="../src/assets/gradient.png" alt='Gradient background'>
    </div>
    <div class="top-lines">
      <img src="../src/assets/top-lines.png" alt='top lines'>
    </div>
    <div class="bottom-lines">
      <img src="../src/assets/bottom-lines.png" alt='bottom lines'>
    </div>
    <!-- end of background -->

    <div class="container main-container" v-if="afterLoad">
      <div class="row no-gutters main-row align-items-center">
        <div class="col"></div>

        <!-- box with colorful lines -->
        <div class="hidden-md-down col-lg-3">
          <div class="left-box">
          </div>
          <div class="lines"></div>
        </div>
        <!-- end of box with colorful lines -->

        <!-- box with form and all content -->
        <div class="col-xs-12 col-md-8 col-lg-5">
          <div class="right-box">
              <div class="green-cap"></div>
              <div class="content">
                <h1 class="title">Your account</h1>
                <div class="content-inside-right-box">
                  <p class="subtitle">Take it all with you. Switch between devices, and pick up.</p>
                  <!-- error displayed if not all fields are filled in -->
                  <div class="error" v-if="error">
                    <span>You have to fill in all fields</span>
                  </div>
                  <form class="mui-form">
                    <div class="row">
                      <div class="mui-textfield col-12">
                        <input type="text" placeholder="John Doe" v-model="name" required class="name">
                        <label>Your name</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mui-select col col-5">
                        <select v-model="prefix">
                          <!-- Countries often selected by users can be moved to the top of the list. -->
                          <!-- The data-countryCode attribute is populated with ISO country code, and value is int'l calling code. -->
                          <option value="" placeholder="prefix">Prefix</option>
                          <!-- made use of v-for to clean the code and move JSON data to countries.js -->
                          <option v-model="prefix" :data-countryCode="country.countryCode" :value="country.prefixValue" v-for="country in countries">+{{country.prefixValue}} ({{country.countryCode}})</option>
                        </select>
                        <label>Mobile</label>
                      </div>
                      <div class="mui-textfield col-7">
                        <input type="tel" placeholder="123 456 789" v-model="mobile" required>
                      </div>
                    </div>
                    <div class="row col-12 mui-textfield">
                      <label for="gender" class="label-gender">Gender</label>
                    </div>
                    <div class="row">
                      <p>
                        <input type="radio" name="group1" id="gender-female" value="female" v-model="gender" required>
                        <label for="gender-female">
                          <span class="radio">
                            <span class="gender-icon">
                              <span class="icon-venus"></span>
                              <span class="gender-icon-big-square"></span>
                              <span class="gender-icon-small-square"></span>
                            </span>
                          </span>
                        </label>
                       </p>
                       <p>
                         <input type="radio" name="group1" id="gender-male" value="male" v-model="gender" required>
                         <label for="gender-male">
                           <span class="radio">
                             <span class="gender-icon">
                               <span class="icon-mars"></span>
                               <span class="gender-icon-big-square"></span>
                               <span class="gender-icon-small-square"></span>
                             </span>
                           </span>
                         </label>
                       </p>
                    </div>
                    <div class="row date-of-birth align-items-center">
                      <div class="mui-textfield col-3 col-md-2">
                        <input type="text" placeholder="01" v-model="day" required id="day">
                        <label id="day">Date of birth</label>
                      </div>
                      <div class="form-hr"></div>
                      <div class="mui-textfield col-3 hidden-sm-up">
                        <input type="text" placeholder="01" v-model="month" required id="month">
                      </div>
                      <div class="mui-textfield col hidden-xs-down">
                        <input type="text" placeholder="January" v-model="month" required id="month-full">
                      </div>
                      <div class="form-hr"></div>
                      <div class="mui-textfield col">
                        <input type="text" placeholder="1990" v-model="year" required id="year">
                      </div>
                    </div>
                    <button class="submit" name="action" type="submit" @click.prevent="submitForm()">
                      <div class="continue">
                        <span>CONTINUE</span>
                      </div>
                      <div class="arrow">
                        <span class="icon-right"></span>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          <div class="steps">
            <div class="step">
              <div class="line"></div>
              <span>01</span>
              <br>
              <span></span>
            </div>
            <div class="step active">
              <div class="line active"></div>
              <span>02</span>
              <br>
              <span>Personal</span>
            </div>
            <div class="step">
              <div class="line"></div>
              <span>03</span>
              <br>
              <span></span>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
// importing JSON data to use in select>options
import countries from './countries.js'
export default {
  name: 'app',
  data () {
    return {
      // data mostly used to generate the alert after submitting a form
      error: false,
      preLoad: true,
      afterLoad: false,
      name: '',
      prefix: '',
      mobile: '',
      gender: '',
      day: '',
      month: '',
      year: '',
      // this is the imported data
      countries
    }
  },
  methods: {
    submitForm () {
      if (this.name.length && this.mobile.length && this.gender.length && this.day.length && this.month.length && this.year.length) {
        this.error = false
        let gender = this.gender === 'male' ? 'man' : 'girl'
        alert(
          `Hey, ${this.name}.

Thanks for your submission, ${gender}.

PS. We'll send you a discount code on ${this.day}/${this.month} to your mobile +${this.prefix} ${this.mobile}`
        )
      } else {
        this.error = true
      }
    }
  },
  created () {
    // used setTimeout to show loader first, then everything else.
    setTimeout(() => {
      this.preLoad = false
      this.afterLoad = true
    }, 1900)
  }
}
</script>

<style lang="scss">

@import './style/globals.scss';
@import './style/responsive.scss';

* {
    box-sizing: border-box;
}
body,
html {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    font-size: 16px;
}
#app {
    font-family: 'Nimbus Sans', Helvetica, Arial, sans-serif;
    position: relative;
}
.wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.bg {
  width: 100%;
  height: 100%;
  background: #202020;
  animation: 2s loader cubic-bezier(.94,.15,.81,.69);
  transform-origin: 45% 50%;
  opacity: 1;

}

.logo {
  position: absolute;
  width: 20%;
  height: auto;
  opacity: 0;
  animation: 2s fade cubic-bezier(.94,.15,.81,.69);
  @include tablet-landscape-and-down {
    width: 40%;
  }
  @include tablet-landscape-and-down {
    width: 70%;
  }
} 
// END OF LOADER
.main {
    position: absolute;
    background-color: $base-bg;
    width: 100vw;
    min-height: 100vh;
    color: #fff;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
}
.gradient-drop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    @include mobile-only {
      top: -12%;
      left: -3%;
    }
    img {
      animation: 6s getBigger 0.5s;
      @include mobile-only {
        animation: none;
        max-width: 600px;
      }
    }
}
.top-lines {
    position: absolute;
    top: 0;
    left: 10%;
    // height: 155px;
    // width: 604px;
    background: ulr('assets/top-lines.png');
    z-index: 2;
    @include desktop-and-down {
      display: none;
    }
    img {
      animation: 6s getBiggerTopLines 0.5s;
      height: auto;
    }
}

.bottom-lines {
    position: absolute;
    bottom: 0;
    right: 0;
    // height: 155px;
    // width: 604px;
    z-index: 2;
    @include tablet-landscape-and-down {
      display: none;
    }
    img {
      animation: 4s Rotate 1s;
      transform-origin: 100% 100%;
    }
}
.main-container, .main-row {
    min-height: 100vh;
    z-index: 5;
    margin-bottom: 0;
}
.left-box {
    // width: 500px;
    position: relative;
    height: 552px;
    animation: fadeIn 1s;
    transform-origin: 100% 50%;
    background: url('../src/assets/left_box.png');
}
.lines {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: fadeInRightBox 1.2s;
    transform-origin: 0 50%;
    background: url('../src/assets/LINES.png');
}
.right-box {
    position: relative;
    background: #f9f9fb;
    /* Old browsers */
    background: -moz-linear-gradient(top, #f9f9fb 0%, #f9f9fb 0%, #efeff2 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #f9f9fb 0%,#f9f9fb 0%,#efeff2 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #f9f9fb 0%,#f9f9fb 0%,#efeff2 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr= '#f9f9fb', endColorstr='#efeff2',GradientType=0 );
    /* IE6-9 */
    height: 552px;
    animation: fadeInRightBox 1.2s;
    transform-origin: 0 50%;
    @include tablet-portrait-and-down {
      height: 420px;
    }
    .green-cap {
      position: absolute;
      top: -1px;
      left: 9%;
      height: 2px;
      width: 70px;
      background: #1bfec0;
      @include tablet-portrait-and-down {
        left: 5%;
        width: 70px;
      }
    }
}
.content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
    padding: 10% calc(10% + 10px) 10% 10%;
    // Added 10px to make up for padding that's added to inputs
    padding-right: calc(10% + 10px);
    @include tablet-portrait-and-down {
      padding: 5% calc(5% + 10px) 5% 5%;
    }
}
.title {
    position: absolute;
    top: -4rem;
    margin-left: 10px;
    font-size: 2.8rem;
    font-weight: lighter;
    @include tablet-portrait-and-down {
      font-size: 2rem;
      top: -3rem;
    }
}
.subtitle {
    color: $text;
    width: 100%;
    font-size: 1rem;
    margin-left: 10px;
    @include tablet-portrait-and-down {
      font-size: 0.9rem;
    }
}

.content-inside-right-box {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    justify-content: space-around;
}

.error {
    color: red;
    font-size: 0.8rem;
    padding-left: 10px;
}

form {
  color: #454545;
  .row {
    margin-bottom: 10px;
    @include tablet-portrait-and-down {
      margin-bottom: 3px;
    }
  }
  p {
  position: relative;
  margin-left: 75px;
  height: 40px;
  }
}
.dropdown-content {
  max-height: 300px !important;
}
.input-group {
  width: 100%;
}

.mui-textfield {
  >input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid $form-inactive;
    border-radius: 0;
    outline: none;
    width: 100%;
    padding-left: 10px;
    box-shadow: none;
    box-sizing: content-box;
    transition: all 0.3s;
    color: $text;
  }
  >label {
    padding-left: 10px;
    color: #d0d0d7;
  }
}

label#day {
  width: 200%;
}

input#day, #month, #month-full, #year {
  margin-top: 6px;
  border: 2px solid $form-inactive;
  padding: 3px 0 0 10px;
  height: 40px;
  &:focus {
    border: 2px solid $form-purple;
    box-shadow: none;
  }
}


  .gender-icon {
    width: 50px;
    height: 50px;
    position: absolute;
    border: 2px solid $form-inactive;
    top: -2px;
    left: -60px;
    z-index: 5;
    span:first-child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      line-height: 1rem;
    }
    .gender-icon-big-square {
      position: absolute;
      background: #efeff2;
      border: 2px solid $form-inactive;
      height: 12px;
      width: 12px;
      top: calc(50% - 7px);
      right: -7px;
    }
    .gender-icon-small-square {
      position: absolute;
      background: $form-inactive;
      height: 2px;
      width: 2px;
      top: calc(50% - 2px);
      right: -2px;
    }
  }

  .mui-select {
    > select {
      border-bottom: 2px solid $form-inactive;
      padding-left: 10px;
      height: 34px;
      @include mobile-only {
        font-size: 0.8rem;
      }
    }
    > label {
      padding-left: 10px;
      color: #d0d0d7;
    }
    &__menu {
      z-index: 10;
      max-height: 250px;
      overflow-y: auto;
      top: 20px !important;
      background: #f9f9fb;
    }
  }

.form-hr {
  display: block;
  width: 5px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  margin-left: 6px;
  margin-right: -6px;
}
.submit {
    position: absolute;
    width: 50%;
    min-width: 150px;
    height: 50px;
    bottom: -25px;
    background: #f9f9fb;
    /* Old browsers */
    background: -moz-linear-gradient(left, #f9f9fb 0%, #8658eb 0%, #6a31e6 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #f9f9fb 0%,#8658eb 0%,#6a31e6 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #f9f9fb 0%,#8658eb 0%,#6a31e6 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr= '#f9f9fb', endColorstr='#6a31e6',GradientType=1 );
    /* IE6-9 */
    right: -50px;
    color: #fff;
    border: none;
    padding: 0;
    @include tablet-landscape-and-down {
      width: 65%;
      left: 50%;
      transform: translateX(-50%);
    }
    @include mobile-only {
      width: 60%;
    }
    &:focus {
      outline: none;
    }
}
.continue {
    font-size: 0.85rem;
    position: absolute;
    background-color: transparent;
    width: calc(100% - 50px);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.arrow {
    position: absolute;
    background-color: $purple;
    height: 50px;
    width: 50px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1.8s fadeInArrowWrapper;
    transform-origin: 50% 100%;
    span.icon-right {
      animation: 2.3s fadeInArrow;
    }
}
.steps {
    position: absolute;
    left: 100%;
    top: 8%;
    color: #555556;
    animation: 1.8s fadeInSteps;
    transform-origin: left;
    z-index: -1;
    font-size: 0.8rem;
    @include tablet-portrait-and-down {
      display: none;
    }
    .step {
        padding: 25% 0;
        &.active {
            color: #f2f2f2;
        }
    }
    .line {
        width: 20px;
        height: 2px;
        background-color: #555556;
        margin: 15px 0;
        &.active {
            background-color: #1af5b9;
        }
    }
    span {
        padding: 10px 10px;
    }
}

[type="radio"] {
  display: none;
}

[type="radio"]:checked + label .gender-icon,
[type="radio"]:checked + label .gender-icon-big-square {
  border: 2px solid $form-green;
}

[type="radio"]:checked + label .gender-icon-small-square {
  background: $form-green;
}

.mui-textfield>input:focus, .mui-textfield>textarea:focus, .mui-select:focus>select {
  border-bottom: 2px solid $form-purple;
}

.mui-textfield>input:focus~label, .mui-textfield>textarea:focus~label, .mui-select:focus>label, .mui-select>select:focus~label {
  color: $form-purple
}

  //  Animations
  // loader
  @keyframes loader {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0
    }
  }
  // End of loader

@keyframes fadeIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes fadeInRightBox {
  0% {
    transform: scaleX(0);
  }
  30% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes fadeInSteps {
  0% {
    left: 90%;
    opacity: 0
  }
  60% {
    left: 90%;
    opacity: 0;
  }
  100% {
    left: 100%;
    opacity: 1;
  }
}

@keyframes getBigger {
  0% {
    height: auto;
    width: 85%
  }
  to {
    height: auto;
    width: 100%
  }
}

@keyframes getBiggerTopLines {
  0% {
    height: auto;
    width: 90%
  }
  to {
    height: auto;
    width: 115%
  }
}


@keyframes Rotate {
  0% {
    transform: translateY(30%)
  }
  30% {
    transform: translateY(30%)
  }
  to {
    transform: translateY(0%)
  }
}


@keyframes fadeInArrowWrapper {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInArrow {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.4)
  }
  100% {
    transform: scale(1);
  }
}


</style>

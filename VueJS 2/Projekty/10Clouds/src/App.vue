<template>
<div id="app">
  <div class="wrapper" v-if="preLoad">
    <div class="bg"></div>
    <img src="../src/assets/logo-kopia.png" alt="" class="logo" />
  </div>
  <div class="main" >
    <!-- <svgicon icon="gradient-bg"></svgicon> -->
    <div class="gradient-drop">
        <!-- <icon name="gradient"></icon> -->
        <img src="../src/assets/gradient.png" class="img-fluid" alt="">
    </div>
    <div class="top-lines">
      <img src="../src/assets/top-lines.png" alt="img-fluid">
    </div>
    <div class="bottom-lines">
      <img src="../src/assets/bottom-lines.png" alt="img-fluid">
    </div>
    <div class="container main-container" v-if="afterLoad">
      <div class="row no-gutters main-row align-items-center">
        <div class="col"></div>
        <div class="hidden-md-down col-lg-3">
          <div class="left-box">
          </div>
          <div class="lines"></div>
        </div>
        <div class="col-xs-12 col-md-8 col-lg-5">
          <div class="right-box">
              <div class="green-cap"></div>
              <div class="content">
                <h1 class="title">Your account</h1>
                <div class="content-in-right-box">
                  <p class="subtitle">Take it all with you. Switch between devices, and pick up.</p>
                  <div class="error" v-if="error">
                    <span>You have to fill in all fields</span>
                  </div>
                  <form action="" class="mui-form">
                    <div class="row">
                      <div class="mui-textfield col-12">
                        <input type="text" placeholder="John Doe" v-model="name" required>
                        <label>Your name</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mui-select col col-5">
                        <select v-model="prefix">
                          <!-- Countries often selected by users can be moved to the top of the list. -->
                          <!-- Countries known to be subject to general US embargo are commented out by default. -->
                          <!-- The data-countryCode attribute is populated with ISO country code, and value is int'l calling code. -->
                          <option value="" placeholder="Prefix">Prefix</option>
                          <option data-countryCode="PL" value="48">+48 (PL)</option>
                          <option data-countryCode="DZ" value="213">+213 (DZ)</option>
                          <option data-countryCode="AD" value="376">+376 (AD)</option>
                          <option data-countryCode="AO" value="244">+244 (AO)</option>
                          <option data-countryCode="AI" value="1264">+1264 (AI)</option>
                          <option data-countryCode="AG" value="1268">+1268 (AG)</option>
                          <option data-countryCode="AR" value="54">+54 (AR)</option>
                          <option data-countryCode="AM" value="374">+374 (AM)</option>
                          <!-- <option data-countryCode="AW" value="297">+297 (AW)</option>
                          <option data-countryCode="AU" value="61">+61 (AU)</option>
                          <option data-countryCode="AT" value="43">+43 (AT)</option>
                          <option data-countryCode="AZ" value="994">+994 (AZ)</option>
                          <option data-countryCode="BS" value="1242">+1242 (BS)</option>
                          <option data-countryCode="BH" value="973">+973 (BH)</option>
                          <option data-countryCode="BD" value="880">+880 (BD)</option>
                          <option data-countryCode="BB" value="1246">+1246 (BB)</option>
                          <option data-countryCode="BY" value="375">+375 (BY)</option>
                          <option data-countryCode="BE" value="32">+32 (BE)</option>
                          <option data-countryCode="BZ" value="501">+501 (BZ)</option>
                          <option data-countryCode="BJ" value="229">+229 (BJ)</option>
                          <option data-countryCode="BM" value="1441">+1441 (BM)</option>
                          <option data-countryCode="BT" value="975">+975 (BT)</option>
                          <option data-countryCode="BO" value="591">+591 (BO)</option>
                          <option data-countryCode="BA" value="387">+387 (BA)</option>
                          <option data-countryCode="BW" value="267">+267 (BW)</option>
                          <option data-countryCode="BR" value="55">+55 (BR)</option>
                          <option data-countryCode="BN" value="673">+673 (BN)</option>
                          <option data-countryCode="BG" value="359">+359 (BG)</option>
                          <option data-countryCode="BF" value="226">+226 (BF)</option>
                          <option data-countryCode="BI" value="257">+257 (BI)</option>
                          <option data-countryCode="KH" value="855">+855 (KH)</option>
                          <option data-countryCode="CM" value="237">+237 (CM)</option>
                          <option data-countryCode="CA" value="1">+1 (CA)</option>
                          <option data-countryCode="CV" value="238">+238 (CV)</option>
                          <option data-countryCode="KY" value="1345">+1345 (KY)</option>
                          <option data-countryCode="CF" value="236">+236 (CF)</option>
                          <option data-countryCode="CL" value="56">+56 (CL)</option>
                          <option data-countryCode="CN" value="86">+86 (CN)</option>
                          <option data-countryCode="CO" value="57">+57 (CO)</option>
                          <option data-countryCode="KM" value="269">+269 (KM)</option>
                          <option data-countryCode="CG" value="242">+242 (CG)</option>
                          <option data-countryCode="CK" value="682">+682 (CK)</option>
                          <option data-countryCode="CR" value="506">+506 (CR)</option>
                          <option data-countryCode="HR" value="385">+385 (HR)</option>
                          <option data-countryCode="CU" value="53">+53 ()</option>
                          <option data-countryCode="CY" value="90">+90 (CY)</option>
                          <option data-countryCode="CY" value="357">+357 (CY)</option>
                          <option data-countryCode="CZ" value="420">+420 (CZ)</option>
                          <option data-countryCode="DK" value="45">+45 (DK)</option>
                          <option data-countryCode="DJ" value="253">+253 (DJ)</option>
                          <option data-countryCode="DM" value="1809">+1809 (DM)</option>
                          <option data-countryCode="DO" value="1809">+1809 (DO)</option>
                          <option data-countryCode="EC" value="593">+593 ()</option>
                          <option data-countryCode="EG" value="20">+20 ()</option>
                          <option data-countryCode="SV" value="503">+503 ()</option>
                          <option data-countryCode="GQ" value="240">+240 ()</option>
                          <option data-countryCode="ER" value="291">+291 ()</option>
                          <option data-countryCode="EE" value="372">+372 ()</option>
                          <option data-countryCode="ET" value="251">+251 ()</option>
                          <option data-countryCode="FK" value="500">+500 ()</option>
                          <option data-countryCode="FO" value="298">+298 ()</option>
                          <option data-countryCode="FJ" value="679">+679 ()</option>
                          <option data-countryCode="FI" value="358">+358 ()</option>
                          <option data-countryCode="FR" value="33">+33 ()</option>
                          <option data-countryCode="GF" value="594">+594 ()</option>
                          <option data-countryCode="PF" value="689">+689 ()</option>
                          <option data-countryCode="GA" value="241">+241 ()</option>
                          <option data-countryCode="GM" value="220">+220 ()</option>
                          <option data-countryCode="GE" value="7880">+7880 ()</option>
                          <option data-countryCode="DE" value="49">+49 ()</option>
                          <option data-countryCode="GH" value="233">+233 ()</option>
                          <option data-countryCode="GI" value="350">+350 ()</option>
                          <option data-countryCode="GR" value="30">+30 ()</option>
                          <option data-countryCode="GL" value="299">+299 ()</option>
                          <option data-countryCode="GD" value="1473">+1473 ()</option>
                          <option data-countryCode="GP" value="590">+590 ()</option>
                          <option data-countryCode="GU" value="671">+671 ()</option>
                          <option data-countryCode="GT" value="502">+502 ()</option>
                          <option data-countryCode="GN" value="224">+224 ()</option>
                          <option data-countryCode="GW" value="245">+245 ()</option>
                          <option data-countryCode="GY" value="592">+592 ()</option>
                          <option data-countryCode="HT" value="509">+509 ()</option>
                          <option data-countryCode="HN" value="504">+504 ()</option>
                          <option data-countryCode="HK" value="852">+852 ()</option>
                          <option data-countryCode="HU" value="36">+36 ()</option>
                          <option data-countryCode="IS" value="354">+354 ()</option>
                          <option data-countryCode="IN" value="91">+91 ()</option>
                          <option data-countryCode="ID" value="62">+62 ()</option>
                          <option data-countryCode="IQ" value="964">+964 ()</option>
                          <option data-countryCode="IR" value="98">+98 ()</option>
                          <option data-countryCode="IE" value="353">+353 ()</option>
                          <option data-countryCode="IL" value="972">+972 ()</option>
                          <option data-countryCode="IT" value="39">+39 ()</option>
                          <option data-countryCode="JM" value="1876">+1876 ()</option>
                          <option data-countryCode="JP" value="81">+81 ()</option>
                          <option data-countryCode="JO" value="962">+962 ()</option>
                          <option data-countryCode="KZ" value="7">+7 ()</option>
                          <option data-countryCode="KE" value="254">+254 ()</option>
                          <option data-countryCode="KI" value="686">+686 ()</option>
                          <option data-countryCode="KP" value="850">Korea +850 ()</option>
                          <option data-countryCode="KR" value="82">+82 ()</option>
                          <option data-countryCode="KW" value="965">+965 ()</option>
                          <option data-countryCode="KG" value="996">+996 ()</option>
                          <option data-countryCode="LA" value="856">+856 ()</option>
                          <option data-countryCode="LV" value="371">+371 ()</option>
                          <option data-countryCode="LB" value="961">+961 ()</option>
                          <option data-countryCode="LS" value="266">+266 ()</option>
                          <option data-countryCode="LR" value="231">+231 ()</option>
                          <option data-countryCode="LY" value="218">+218 ()</option>
                          <option data-countryCode="LI" value="417">+417 ()</option>
                          <option data-countryCode="LT" value="370">+370 ()</option>
                          <option data-countryCode="LU" value="352">+352 ()</option>
                          <option data-countryCode="MO" value="853">+853 ()</option>
                          <option data-countryCode="MK" value="389">+389 ()</option>
                          <option data-countryCode="MG" value="261">+261 ()</option>
                          <option data-countryCode="MW" value="265">+265 ()</option>
                          <option data-countryCode="MY" value="60">+60 ()</option>
                          <option data-countryCode="MV" value="960">+960 ()</option>
                          <option data-countryCode="ML" value="223">+223 ()</option>
                          <option data-countryCode="MT" value="356">+356 ()</option>
                          <option data-countryCode="MH" value="692">+692 ()</option>
                          <option data-countryCode="MQ" value="596">+596 ()</option>
                          <option data-countryCode="MR" value="222">+222 ()</option>
                          <option data-countryCode="YT" value="269">+269 ()</option>
                          <option data-countryCode="MX" value="52">+52 ()</option>
                          <option data-countryCode="FM" value="691">+691 ()</option>
                          <option data-countryCode="MD" value="373">+373 ()</option>
                          <option data-countryCode="MC" value="377">+377 ()</option>
                          <option data-countryCode="MN" value="976">+976 ()</option>
                          <option data-countryCode="MS" value="1664">+1664 ()</option>
                          <option data-countryCode="MA" value="212">+212 ()</option>
                          <option data-countryCode="MZ" value="258">+258 ()</option>
                          <option data-countryCode="MN" value="95">+95 ()</option>
                          <option data-countryCode="NA" value="264">+264 ()</option>
                          <option data-countryCode="NR" value="674">+674 ()</option>
                          <option data-countryCode="NP" value="977">+977 ()</option>
                          <option data-countryCode="NL" value="31">+31 ()</option>
                          <option data-countryCode="NC" value="687">+687 ()</option>
                          <option data-countryCode="NZ" value="64">+64 ()</option>
                          <option data-countryCode="NI" value="505">+505 ()</option>
                          <option data-countryCode="NE" value="227">+227 ()</option>
                          <option data-countryCode="NG" value="234">+234 ()</option>
                          <option data-countryCode="NU" value="683">+683 ()</option>
                          <option data-countryCode="NF" value="672">+672 ()</option>
                          <option data-countryCode="NP" value="670">+670 ()</option>
                          <option data-countryCode="NO" value="47">+47 ()</option>
                          <option data-countryCode="OM" value="968">+968 ()</option>
                          <option data-countryCode="PK" value="92">+92 ()</option>
                          <option data-countryCode="PW" value="680">+680 ()</option>
                          <option data-countryCode="PA" value="507">+507 ()</option>
                          <option data-countryCode="PG" value="675">+675 ()</option>
                          <option data-countryCode="PY" value="595">+595 ()</option>
                          <option data-countryCode="PE" value="51">+51 ()</option>
                          <option data-countryCode="PH" value="63">+63 ()</option>
                          <option data-countryCode="PT" value="351">+351 ()</option>
                          <option data-countryCode="PR" value="1787">+1787 ()</option>
                          <option data-countryCode="QA" value="974">+974 ()</option>
                          <option data-countryCode="RE" value="262">+262 ()</option>
                          <option data-countryCode="RO" value="40">+40 ()</option>
                          <option data-countryCode="RU" value="7">+7 ()</option>
                          <option data-countryCode="RW" value="250">+250 ()</option>
                          <option data-countryCode="SM" value="378">+378 ()</option>
                          <option data-countryCode="ST" value="239">+239 ()</option>
                          <option data-countryCode="SA" value="966">+966 ()</option>
                          <option data-countryCode="SN" value="221">+221 ()</option>
                          <option data-countryCode="CS" value="381">+381 ()</option>
                          <option data-countryCode="SC" value="248">+248 ()</option>
                          <option data-countryCode="SL" value="232">+232 ()</option>
                          <option data-countryCode="SG" value="65">+65 ()</option>
                          <option data-countryCode="SK" value="421">+421 ()</option>
                          <option data-countryCode="SI" value="386">+386 ()</option>
                          <option data-countryCode="SB" value="677">+677 ()</option>
                          <option data-countryCode="SO" value="252">+252 ()</option>
                          <option data-countryCode="ZA" value="27">+27 ()</option>
                          <option data-countryCode="ES" value="34">+34 ()</option>
                          <option data-countryCode="LK" value="94">+94 ()</option>
                          <option data-countryCode="SH" value="290">+290 ()</option>
                          <option data-countryCode="KN" value="1869">+1869 ()</option>
                          <option data-countryCode="SC" value="1758">+1758 ()</option>
                          <option data-countryCode="SR" value="597">+597 ()</option>
                          <option data-countryCode="SD" value="249">+249 ()</option>
                          <option data-countryCode="SZ" value="268">+268 ()</option>
                          <option data-countryCode="SE" value="46">+46 ()</option>
                          <option data-countryCode="CH" value="41">+41 ()</option>
                          <option data-countryCode="SY" value="963">+963 ()</option>
                          <option data-countryCode="TW" value="886">+886 ()</option>
                          <option data-countryCode="TJ" value="992">+992 ()</option>
                          <option data-countryCode="TH" value="66">+66 ()</option>
                          <option data-countryCode="TG" value="228">+228 ()</option>
                          <option data-countryCode="TO" value="676">+676 ()</option>
                          <option data-countryCode="TT" value="1868">+1868 ()</option>
                          <option data-countryCode="TN" value="216">+216 ()</option>
                          <option data-countryCode="TR" value="90">+90 ()</option>
                          <option data-countryCode="TM" value="993">+993 ()</option>
                          <option data-countryCode="TC" value="1649">+1649 ()</option>
                          <option data-countryCode="TV" value="688">+688 ()</option>
                          <option data-countryCode="UG" value="256">+256 ()</option>
                          <option data-countryCode="GB" value="44">+44 ()</option>
                          <option data-countryCode="UA" value="380">+380 ()</option>
                          <option data-countryCode="AE" value="971">+971 ()</option>
                          <option data-countryCode="UY" value="598">+598 ()</option>
                          <option data-countryCode="US" value="1">+1 ()</option>
                          <option data-countryCode="UZ" value="998">+998 ()</option>
                          <option data-countryCode="VU" value="678">+678 ()</option>
                          <option data-countryCode="VA" value="379">+379 ()</option>
                          <option data-countryCode="VE" value="58">+58 ()</option>
                          <option data-countryCode="VN" value="84">+84 ()</option>
                          <option data-countryCode="VG" value="1">+1</option>
                          <option data-countryCode="VI" value="1">+1</option>
                          <option data-countryCode="WF" value="681">+681 ()</option>
                          <option data-countryCode="YE" value="969">+969 ()</option>
                          <option data-countryCode="YE" value="967">+967 ()</option>
                          <option data-countryCode="ZM" value="260">+260 ()</option>
                          <option data-countryCode="ZW" value="263">+263 ()</option> -->
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
                      <div class="continue"><span>CONTINUE</span></div>
                      <div class="arrow"><span class="icon-right">

                      </span></div>
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
export default {
  name: 'app',
  data () {
    return {
      error: false,
      preLoad: true,
      afterLoad: false,
      name: '',
      prefix: '+48',
      mobile: '',
      gender: '',
      day: '',
      month: '',
      year: ''
    }
  },
  methods: {
    submitForm () {
      if (this.name.length && this.prefix.length && this.mobile.length && this.gender.length && this.day.length && this.month.length && this.year.length) {
        this.error = false
        let gender = this.gender === 'male' ? 'man' : 'girl'
        alert(
          `Hey, ${this.name}.

Thanks for your submission, ${gender}.

PS. We'll send you a discount code on ${this.day}/${this.month} to your mobile ${this.prefix} ${this.mobile}`
        )
      } else {
        this.error = true
      }
    }
  },
  created () {
    setTimeout(() => {
      this.preLoad = false
      this.afterLoad = true
    }, 1900)
  }
}
</script>

<style lang="scss">@import './style/globals.scss';
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
// LOADER
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
@keyframes loader {
  0% {
    opacity: 1;
  }
  70% {
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
div.main {
    position: absolute;
    background-color: $base-bg;
    width: 100vw;
    min-height: 100vh;
    color: #fff;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
}
div.gradient-drop {
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
        max-width: 600px;
      }
    }
}
div.top-lines {
    position: absolute;
    top: 0;
    left: 10%;
    // height: 155px;
    // width: 604px;
    background: ulr('assets/top-lines.png');
    z-index: 2;
    @include tablet-landscape-and-down {
      display: none;
    }
    img {
      animation: 6s getBiggerTopLines 0.5s;
      width: 115%;
      height: auto;
    }
}

div.bottom-lines {
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


div.main-container, div.main-row {
    min-height: 100vh;
    z-index: 5;
    margin-bottom: 0;
}
div.left-box {
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
div.right-box {
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
div.content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    @include tablet-portrait-and-down {
      padding: 5%
    }
}
h1.title {
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
p.subtitle {
    color: $text;
    width: 100%;
    font-size: 1rem;
    margin-left: 10px;
    @include tablet-portrait-and-down {
      font-size: 0.9rem;
    }
}

.content-in-right-box {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    justify-content: space-around;
}

.error {
    color: red;
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
  margin-left: 70px;
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
  }
}

label#day {
  width: 200%;
}

input#day, input#month, input#month-full, input#year {
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
    left: -55px;
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
    }
    > label {
      padding-left: 10px;
    }
    &__menu {
      z-index: 10;
      max-height: 250px;
      overflow-y: auto;
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
button.submit {
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
div.continue {
  font-size: 1rem;
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
div.arrow {
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
div.steps {
    position: absolute;
    left: 100%;
    top: 8%;
    color: #555556;
    animation: 1.8s fadeInSteps;
    transform-origin: left;
    z-index: -1;
    @include tablet-portrait-and-down {
      display: none;
    }
    .step {
        padding: 25% 0;
        &.active {
            color: #fff;
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
//
// [type="radio"]:not(:checked)+label:after, [type="radio"]:not(:checked)+label:after {
//     -webkit-transform: scale(0);
//     transform: scale(1);
//     height: 40px;
//     width: 40px;
//     border-radius: 0;
//     top: -12.5px;
//     left: -30px;
//   }


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

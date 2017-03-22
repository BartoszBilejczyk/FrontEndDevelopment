<template>
<div id="app">
  <div class="main">
    <!-- <svgicon icon="gradient-bg"></svgicon> -->
    <div class="gradient-drop"></div>
    <div class="top-lines"></div>
    <div class="bottom-lines"></div>
    <div class="container main-container">
      <div class="row no-gutters main-row align-items-center">
        <div class="col"></div>
        <div class="col-3">
          <div class="left-box">
          </div>
        </div>
        <div class="col-5">
          <div class="right-box">
              <div class="content">
                <h1 class="title">Your account</h1>
                  <p class="subtitle">Take it all with you. Switch between devices, and pick up.</p>
                <form action="">
                  <div class="row">
                    <div class="input-field col col-12">
                      <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                      <label for="first_name">Your Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <select>
                        <option value="" disabled selected>Prefix</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                        <option value="3">Option 3</option>
                      </select>
                      <label>Mobile</label>
                    </div>
                    <div class="input-field col col-8">
                      <input id="mobile" type="text" class="validate">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col col-2">
                      <input placeholder="Placeholder" id="first_name" type="radio" class="validate">
                      <label for="first_name">Your Name</label>
                    </div>
                    <div class="input-field col col-2">
                      <input placeholder="Placeholder" id="first_name" type="radio" class="validate">
                      <label for="first_name">Your Name</label>
                    </div>
                  </div>
                  <div class="row date-of-birth align-items-center">
                    <div class="input-field col col-2">
                      <input placeholder="1" id="day" type="text" class="validate">
                      <label for="day">Date of birth</label>
                    </div>
                    <div class="col-1">
                      <div class="form-hr"></div>
                    </div>
                    <div class="input-field col col-4">
                      <input placeholder="January" id="month" type="text" class="validate">
                    </div>
                    <div class="col-1">
                      <div class="form-hr"></div>
                    </div>
                    <div class="input-field col col-4">
                      <input placeholder="1990" id="year" type="text" class="validate">
                    </div>
                  </div>

                    <button class="submit" type="submit">
                      <div class="continue"><span>CONTINUE</span></div>
                      <div class="arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                    </button>
                </form>
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
  name: 'app'
}
</script>

<style lang="scss">@import './style/globals.scss';
@import './style/responsive.scss';

* {
    box-sizing: border-box;
    font-weight: lighter;
}

body,
html {
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Nimbus Sans', Helvetica, Arial, sans-serif;

}

div.main {
    position: relative;
    background-color: $base-bg;
    width: 100vw;
    min-height: 100vh;
    color: #fff;
    z-index: 1;
}

div.gradient-drop {
    position: absolute;
    top: 0;
    left: 0;
    height: 630px;
    width: 654px;
    background: url('assets/gradient.png');
    z-index: 3;
}

div.top-lines {
    position: absolute;
    top: 0;
    left: $container-margin + $column-width * 2 + $gutter * 2;
    height: 155px;
    width: 604px;
    background: url('assets/top-lines.png');
    z-index: 2;
}

div.main-container, div.main-row {
    min-height: 100vh;
    z-index: 5
}

div.left-box {
    // width: 500px;
    background: url('assets/left_box.png');
    height: 500px;
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
    height: 500px;
    .container {
      height: 100%;
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
}

h1.title {
    position: absolute;
    top: -100px;
    left: 10%;
    font-size: 3rem;
    font-weight: lighter;
}

p.subtitle {
    color: $text;
    width: 100%;
    height: 15%;
}

form {
  color: #454545;
  height: 85%;
  .row {
    margin-bottom: 10px;
  }
}

.dropdown-content {
  max-height: 300px !important;
}

.input-group {
  width: 100%;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
  color: $text;
}

label {
  display: block;
}

input#day, input#month, input#year {
  margin-top: 10px;
  border: 1px solid black;
}

.form-hr {
  display: block;
  width: 10px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.4);
}

button.submit {
    position: absolute;
    width: 300px;
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
}

div.continue {
    position: absolute;
    background-color: transparent;
    width: 250px;
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
}

div.steps {
    position: absolute;
    left: 100%;
    top: 5%;
    font-size: 0.8rem;
    color: #555556;
    .step {
        padding: 30% 0;
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
        padding: 10px 5px;
    }
}
</style>

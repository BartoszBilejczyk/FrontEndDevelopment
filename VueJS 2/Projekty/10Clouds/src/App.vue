<template>
  <div id="app">
    <div class="main">
      <!-- <svgicon icon="gradient-bg"></svgicon> -->
      <div class="gradient-drop"></div>
      <div class="top-lines"></div>
      <div class="bottom-lines"></div>
      <div class="container">
        <div class="box-wrapper">
          <div class="box">
            <div class="left-box">
            </div>
            <div class="right-box">
              <div class="content">
                <h1 class="title"></h1>
                <p class="subtitle"></p>
                <form action="">
                  <label for=""></label>
                  <input type="text">
                  <label for=""></label>
                  <select name="" id="">
                    <option value=""></option>
                  </select>
                  <label for=""></label>
                  <input type="text">
                  <label for=""></label>

                  <div class="input-group">
                    <label for=""></label>
                    <input type="text">
                    <input type="text">
                  </div>

                  <div class="input-group">
                    <label for=""></label>
                    <input type="text">
                    <div class="form-hr"></div>
                    <input type="text">
                    <div class="form-hr"></div>
                    <input type="text">
                  </div>
                  <div class="submit" type="submit">
                    <span>CONTINUE</span>
                    <div class="arrow"></div>
                  </div>
                </form>
              </div>
            </div>
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

<style lang="scss">

@import './style/globals.scss';
@import './style/responsive.scss';

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Nimbus Sans', Helvetica, Arial, sans-serif;
  font-weight: lighter;
}

div.main {
  position: relative;
  background-color: $base-bg;
  width: 100vw;
  min-height: 100vh;
  color: #fff;
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

div.bottom-lines {
  position: absolute;
  bottom: 0;
  left: 200px;
  height: 800px;
  width: 100%;
  background: url('assets/bottom-lines.png');
}


</style>

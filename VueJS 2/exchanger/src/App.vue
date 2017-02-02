<template>
  <div id="app">

    <section class="choose">
      <app-header></app-header>
      <app-categories></app-categories>
    </section>

    <section class="user-action">
      <app-category></app-category>
      <app-output></app-output>
    </section>











  <!--  <section class="input">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-4 col-md-offset-4">
                <label>Choose your unit</label>
                <select v-model="firstUnit">
                  <option v-for="unit in units" :value="unit.first">{{}}</option>
                </select>
                <label>Choose your second unit</label>
                 <select v-model="secondUnit">
                  <option v-for="unit in units" :value="unit.second">{{}}</option>
                </select>
              </div>

              selected: {{}} / {{}}
            </div>
          </div>
    </section>
    <section class="output">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                <label for="from">{{}}</label>
                <input type="text" id="from" v-model="firstNumber">

                <label for="to">{{}}</label>
                <input type="text" id="to" v-model="result">

                <button @click="countValue">Count</button>
          </div>

        </div>



      </div>
    </section>
      -->

  </div>

</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss" scoped>

  section.choose {
    width: 25%;
    height: 100vh;
    background-color: lightgrey;
  }





  /* #app {
    height: 100vh;
    width: 100%;
  }

  @mixin flexycenter {
    display: flex;
    align-items: center;
    justify-content: center
  }
  section.input {
    height: 25vh;
    @include flexycenter;
    background: #111;
    color: white;
    & select {
      position: relative;
      cursor: pointer;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #9e9e9e;
      outline: none;
      height: 3rem;
      line-height: 3rem;
      width: 100%;
      font-size: 1.5rem;
      margin: 0 0 20px 0;
      padding: 0;
      display: block;
    }
  }

  section.output {
    height: 75vh;
    @include flexycenter;
  }

  input {
    display: block;
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
  }
  */

</style>

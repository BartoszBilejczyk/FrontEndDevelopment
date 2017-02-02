<template>
  <div id="app">

     <div class="container">
       <div class="row">
         <div class="col-sm-8">
          <form>
             <div class="input-field">
               <input type="text" id="input_text"  placeholder="Name" v-model='name'>
               <label for="input-text">Name</label>
             </div>

             <div class="input-field">
               <input id="email" type="email" data-length="30" v-model='email'>
               <label for="email">E-mail</label>
             </div>


             <div class="input-field">
               <i class="material-icons prefix">phone</i>
               <input type="tel" class="validate" v-model='mobile'>
               <label for="" data-error="This is not a valid phone number">Phone number</label>
             </div>

              <div class="input-field">
                <input type="date" class="datepicker" id="datepicker" v-model='birthdate'>
                <label for="datepicker">Birthdate</label>
              </div>


             <div class="input-field">
               <textarea name="" id="textarea1" rows="3" class="materialize-textarea" v-model='about'></textarea>
               <label for="textarea1">About you</label>
             </div>

             <div class="input-field">
                <select>
                   <option value="1" v-model="favBand">Option 1</option>
                   <option value="2" v-model="favBand">Option 2</option>
                   <option value="3" v-model="favBand">Option 3</option>
                   <option value="4" v-model="favBand">Option 4</option>
               </select>
               <label>Your choices</label>
              </div>

              <p>
                <input class="with-gap" type="radio" id="gap-radio1" v-model="favColor">
                <label for="gap-radio1">Option 1</label>
                <input class="with-gap" type="radio" id="gap-radio2"  v-model="favColor">
                <label for="gap-radio2">Option 2</label>
                <input class="with-gap" type="radio" id="gap-radio3"  v-model="favColor">
                <label for="gap-radio3">Option 3</label>

              </p>


              <p>
                <input class="with-gap" type="checkbox" id="checkbox1">
                <label for="checkbox1">Option 1</label>
                <input class="with-gap" type="checkbox" id="checkbox2">
                <label for="checkbox2">Option 2</label>
                <input class="with-gap" type="checkbox" id="checkbox3">
                <label for="checkbox3">Option 3</label>

              </p>

              <div class="switch">
                <label>
                  Yes
                  <input type="checkbox">
                  <span class="lever"></span>
                  No
                </label>
              </div>


               <button class="btn btn-large" @click.prevent="submitForm()">Submit</button>

           </form>
         </div>
         <div class="col-sm-4" v-if="submitted">

            <p>Name: {{ name }}</p>
            <p>E-mail: {{ email }}</p>
            <p>Mobile: {{ mobile }}</p>
            <p>Birthdate: {{ birthdate }}</p>
            <p>About: {{ about }}</p>
            <p>Favorite Band: {{ favBand }}</p>
            <p>Favorite Color: {{ favColor }}</p>
            <p>Other interests: {{ interests }}</p>
            <p>Newsletter: {{ newsletter }}</p>



         </div>
       </div>
     </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      mobile: '',
      birthdate: '',
      about: '',
      favBand: [],
      favColor: '',
      interests: [],
      newsletter: '',
      submitted: false
    }
  },
  methods: {
    submitForm() {
      this.submitted = true
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .input-field {
    text-align: left;
  }

</style>

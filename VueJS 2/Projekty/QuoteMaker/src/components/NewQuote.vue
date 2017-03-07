<template>
  <div class="wrapper">
    <form>
      <div class="input-field">
       <textarea id="quote-text" class="materialize-textarea" v-model="quote"></textarea>
       <label for="quote-text">Your Quote</label>
      </div>
     <button @click.prevent="addNewQuote()" class="btn btn-large">sds</button>
   </form>
  </div>



</template>


<script>
  export default {
    props: ['myQuotes'],
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      addNewQuote() {
        if (this.quote !== '') {
          this.$emit('wasQuoteAdded', this.quote) // send the quote to the parent, parent listens through <app-new-quote :myQuotes="quotes" @wasQuoteAdded="newQuote"></app-new-quote>
          this.quote = ''
        } else {
          alert('You cannot pass an empty quote')
        }
      }
    }
  }

</script>


<style scoped>

   * {
    box-sizing: border-box
  }

  .wrapper {
    width: 20%;
    height: 80vh;
    background: #333;
    margin: 0;
    color: #eee
  }

</style>

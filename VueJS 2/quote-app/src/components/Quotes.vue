<template>
  <div class="wrapper">
      <app-single-quote v-for="(quote, index) in myQuotes" @click.native="deleteQuote(index)">{{ quote }}</app-single-quote> <!-- why native - you cannot click on app-single-quote, because it's not dom, but native tells vue to focus on what is rendered --> <!-- the quote in curly braces gets passed to the slot -->
  </div>
</template>


<script>
  import SingleQuote from './SingleQuote.vue'

  export default {
    props: ['myQuotes'],
    components: {
      appSingleQuote: SingleQuote

    },
    methods: {
      deleteQuote(index) {
        this.$emit('wasQuoteDeleted', index)
      }
    }
  }
</script>


<style scoped>

   * {
    box-sizing: border-box
  }

  .wrapper {
    width: 80%;
    display: flex;
    flex-wrap: wrap
  }

</style>

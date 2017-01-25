<template>

  <section>
    <app-quote-bar :howManyQuotes="quotes.length" :maxQuotes="maxQuotes"></app-quote-bar>
    <div class="wrapper">
      <app-new-quote :myQuotes="quotes" @wasQuoteAdded="newQuote"></app-new-quote>
      <app-quotes :myQuotes="quotes" @wasQuoteDeleted="deletedQuote"></app-quotes>
    </div>
  </section>


</template>

<script>

import QuoteBar from './components/QuoteBar.vue'
import NewQuote from './components/NewQuote.vue'
import Quotes from './components/Quotes.vue'

export default {
  data () {
    return {
      quotes: [
        'just a  quotequot'
      ],
      maxQuotes: 5
    }
  },
  components: {
    appQuoteBar: QuoteBar,
    appNewQuote: NewQuote,
    appQuotes: Quotes,
  },
  methods: {
    newQuote(quote) {  // here the quote is the quote from NewQuote, it is pushed to the array of quotes
      if (this.quotes.length == this.maxQuotes) {
        alert("Please delete some quotes to add new due to quantity restrictions")
      } else {
          this.quotes.push(quote)
      }
    },
    deletedQuote(index) {
      this.quotes.splice(index, 1)
    }
  },
  watch: {
    tooManyQuotes() {

    }
  }

}
</script>

<style scoped>

  * {
    box-sizing: border-box
  }

  section {
    height: 100vw;
    width: 100%;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }


</style>

<template>
     <div class="container">
         <div class="row">
             <div class="col-xs-12">
                <div>
                   <button @click="compSelected = 'appQuote'">Quote</button>
                   <button @click="compSelected = 'appAuthorInfo'">Author Info</button>
                   <button @click="compSelected = 'appAuthorQuoteList'">Author's Quotes</button>
                </div>

                <keep-alive>  <!-- Normally every component will be destroyed (every change we make to it like adding a new quote). We can use keep-alive that Vue.js gives us to make Vue remember the changes -->
                    <component :is="compSelected" @quotesToSee="compSelected = $event">
                    </component> <!-- This is a dynamic component. :is shows us the component that is currently stored in compSelected -->
                </keep-alive>



                 <!-- <app-quote>
                     <h2 slot="title">{{quoteTitle}}</h2>
                     <blockquote slot="content">Na gorze roze na dole fiołki</blockquote> <!-- here it's used from slot -->
                   <!--  <h5 slot="subtitle">This is a set subtitle</h5>
                 </app-quote> -->
             </div>
         </div>
     </div>

</template>

<script>

    import Quote from './components/Quote.vue'
    import AuthorInfo from './components/AuthorInfo.vue'
    import AuthorQuoteList from './components/AuthorQuoteList.vue'

    export default {
        data: function() {
            return {
                quoteTitle: "Wonderful Quote Machine", // I can use it even though it will be passed into a slot. Compiling is here, styling is in child.
                compSelected: 'appQuote'
           }
        },
        components: {
            appQuote: Quote,
            appAuthorInfo: AuthorInfo,
            appAuthorQuoteList: AuthorQuoteList
        }
    }

</script>

<style scoped>

    div {
        padding: 20px 0 ;
    }

</style>

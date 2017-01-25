<template>
        <div>
            <input type="text" name="quote-text" v-model="newQuote">
            <button @click="addQuote">Add new quote</button>
            <hr>
            <blockquote v-for="quote in quotes">{{quote}}</blockquote>
            <hr>
        </div>

</template>


<script>

    export default {
        data: function() {
            return {
                newQuote: '',
                quotes: [
                    'This is a sample quote',
                    'This is a sample quote',
                    'This is a sample quote',
                    'This is a sample quote',
                    'This is a sample quote'
                ]
            }
        },
        methods: {
            addQuote() {
                if (this.newQuote !== '') {
                    this.quotes.push(this.newQuote);
                    this.newQuote = ''
                } else {
                    alert('You cannot pass an empty quote')
                }
            }
        },
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
        }
    }

</script>


<style scoped>

    div {
        margin: 30px auto;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        text-align: center;
        border: 1px solid #eee;
        padding: 30px;
    }    /* if we want to style whatever is in the slot, that's the place (the child)*/

    .title {
        color: red;
    }

    .content {
        color: darkblue;
    }

    span {
        color: grey
    }
</style>

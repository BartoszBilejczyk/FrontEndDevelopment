<template>
        <div>
           <h1>Isaac Newton</h1>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non temporibus, pariatur eveniet commodi nisi corporis sunt ipsum, quam magni in rem molestiae et ex animi, ipsa id maiores. Praesentium, repellendus.</span>
            <span>Possimus veritatis tempora praesentium ipsam ipsa eligendi ullam impedit, eveniet qui quisquam placeat repellendus reiciendis quasi non aliquid asperiores voluptatibus necessitatibus sequi quae debitis sapiente rerum, suscipit. Laboriosam tenetur, quisquam.</span>
            <span>Blanditiis dolores quam minima deserunt debitis libero tenetur numquam nobis cum placeat veniam dolore ipsa doloremque amet maiores earum, explicabo quos neque voluptate non dolorem quia similique totam id. Cupiditate.</span></p>

            <button @click="seeQuotes()">See quotes</button>
        </div>
</template>


<script>

    export default {
        props: ['compSelected'],
        methods: {
            seeQuotes() {
                this.compSelected = 'appAuthorQuoteList',
                this.$emit('quotesToSee', this.compSelected)
            }
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

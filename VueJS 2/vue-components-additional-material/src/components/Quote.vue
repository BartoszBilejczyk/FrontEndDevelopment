<template>
        <div>
            <div class="title">
                <slot name="title"><h1>This is the default Quote</h1></slot>
                <span>
                    <slot name="subtitle">This is the default subtitle</slot> <!-- This is default, if it's not set in App.vue, in parent. When it is, it changes -->
                </span>
            </div>
            <hr>
            <div class="content">
                <slot name=content>This is the default content</slot>  <!-- It's possible to give a name to a slot and then use slot="something" in parent -->
            </div>
        </div>

</template>


<script>

    export default {

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

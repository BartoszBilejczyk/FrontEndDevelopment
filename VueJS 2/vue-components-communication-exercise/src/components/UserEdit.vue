<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ myAge }}</p>
        <button @click="changeAge()">Change Age</button>
    </div>
</template>

<script>

    import {eventBus} from '../main';

    export default {
        props: ['myAge'],

        methods: {
            changeAge() {
                this.myAge = 23;
              //this.$emit('wasAgeChanged', this.myAge);  // emit custom event. 1st argument is the name of the event to listen to, second the prop to be listened
            // if we want to share info (pass data) from child to parent we emit custom events and make parents listen to us. So we obtain a special tool to make our parents listen to us.

            // children cannot communicate with each other. If we want to do that, a child must make a parent listen, and then another child can receive the prop.
                eventBus.$emit('wasAgeChanged', this.myAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

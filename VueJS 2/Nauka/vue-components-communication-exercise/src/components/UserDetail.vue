<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username in capital letters: {{ bigName() }}</p>
        <p>Age: {{ myAge }}</p>
        <button @click="resetName()">Reset name custom event emit</button>
        <button @click="resetFn()">Reset name using prop</button>
    </div>
</template>

<script>

    import {eventBus} from '../main'

    export default {
        props: // this child can get properties from its parent (dostaje propsy od starych). Here 'name' can be set from outside
        // IT HAS TO MATCH THE INTERPOLATED THING WHICH IS USED in TEMPLATE. name here has to be the SOMETHING rom User.vue. Validating is also cool.
                {
            name: {
                type: [String, Array], // name can a string or Array
                required: true // this component can only be used if name is set :D // it is also possible to have defaul
            },
            resetFn: {
                type: Function
            },
            myAge: Number
        },
        methods: {
            // it's possible to have some methods and use them here :) e.g.
            bigName() {
                return this.name.toUpperCase()  // again I used name here, from User.vue
            },
            resetName() {
                this.name = "Bartek";
                this.$emit('wasNameChanged', this.name) // emit custom event. 1st argument is the name of the event to listen to, second the prop to be listened
            },
            // if we want to share info (pass data) from child to parent we emit custom events and make parents listen to us. So we obtain a special tool to make our parents listen to us.

            // children cannot communicate with each other. If we want to do that, a child must make a parent listen, and then another child can receive the prop.
            created() { // now setup a listener to the event which will be running from the moment uderdetail comp is created
                eventBus.$on('wasAgeChanged', (age) => { // listen to wasAgeChanged , the second arg is the code that should be executed whenever such an event occurs (is fired). Age is argument (ES6)
                    this.myAge = age;
                });
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

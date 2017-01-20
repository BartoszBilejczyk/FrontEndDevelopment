
<!-- This component can be used globally if we import it to main.js or locally if we import it to e.g. PaintGarage.vue  -->

<template> <!-- single file template that can be used in main.js -->
    <div> <!-- VERY IMPORTANT - template must have only one child so here everyhing is packed into div. Everything's gotta be wrapped in one root element -->
        <h1>Current car color: {{carColor}}</h1>
        <hr>
        <button @click="colored = !colored, changeColor()">Change the color</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                colored: false,
                carColor: 'Black'
            };
        },
        methods: {
            changeColor() {
                if (this.colored) {
                    this.carColor = 'White';
                } else {
                    this.carColor = 'Black';
                }
            }
        }
    }
</script>

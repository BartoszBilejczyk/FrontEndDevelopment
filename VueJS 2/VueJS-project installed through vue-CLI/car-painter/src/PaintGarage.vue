
<template> <!-- single file template that can be used in main.js -->
    <div>
        <car-color-changer></car-color-changer>
    </div>
</template>

<script>
    import CarColor from './CarColor.vue';
    export default {
        components: {
            'car-color-changer': CarColor
        }
    }
</script>

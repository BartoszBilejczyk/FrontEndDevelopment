<template>
    <div><slot></slot></div> <!-- All that is inside app-blue tag in App.vue will be passed to slot here. -->
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>

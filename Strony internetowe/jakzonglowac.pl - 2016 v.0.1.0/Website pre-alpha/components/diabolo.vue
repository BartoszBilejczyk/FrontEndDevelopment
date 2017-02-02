<template>
  {{checkOut}}
  <button @click="change"></button>
</template>


<script>
  export default {
    data: function () {
      return {
        checkOut: "11"
      }
    },
    methods: {
      change: function() {
        this.checkOut = '12'
      }
    }
  }
</script>


<style>

</style>

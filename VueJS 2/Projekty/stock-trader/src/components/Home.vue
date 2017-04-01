<template lang="html">
  <div class="container">
    <h1>Trade or View your portfolio</h1>
    <p>You may Save & Load your data</p>
    <p>Click on End Day to begin a New Day</p>
    <hr>
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style lang="css">
</style>

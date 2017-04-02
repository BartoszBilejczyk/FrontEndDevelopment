<template lang="html">
  <div class="col s6 l4">
    <v-card>
      <div class="card-content">
        <span class="card-title">{{ main.name }}</span>
        <p>Price: ${{ main.price }} </p>
        <p>Preparation time: {{ main.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <v-btn large='true'>ORDER</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['main']
}
</script>

<style lang="scss">
</style>

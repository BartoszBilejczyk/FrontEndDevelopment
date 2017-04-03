<template lang="html">
  <div class="col s6 l4">
    <v-card class="hoverable">
      <div class="card-image">
            <img :src="main.url">
      </div>
      <div class="card-content">
        <span class="card-title">{{ main.name }}</span>
        <p>Price: ${{ main.price }} </p>
        <p>Preparation time: {{ main.prepTime }} minutes</p>
      </div>
      <div class="card-action">
        <div class="" @click="mainCourseOrder">
          <v-btn large='true'>ORDER</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['main'],
  methods: {
    mainCourseOrder () {
      const mainCourseOrder = {
        quantity: 1,
        type: 'Main Course',
        name: this.main.name,
        price: this.main.price,
        prepTime: this.main.prepTime,
        url: this.main.url
      }
      this.$store.dispatch('mainCourseOrder', mainCourseOrder)
    }
  }
}
</script>

<style lang="scss">
</style>

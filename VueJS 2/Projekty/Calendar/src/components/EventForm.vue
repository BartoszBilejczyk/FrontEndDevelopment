<template lang="html">
<div id="event-form" :class="{ active: active }" :style="{top: top, left: left}">
    <h4>Add event</h4>
    <div class="text">
      <input type="text" v-model="description">
    </div>
    <button class="close-button" @click="close">&#10005</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ''
    }
  },
  methods: {
    close() {
      this.$store.commit('eventFormActive', false)
    }
  },
  computed: {
    active() {
      return this.$store.state.eventFormActive
    },
    top() {
      return `${this.$store.state.eventFormPositionY}px`
    },
    left() {
      return `${this.$store.state.eventFormPositionX}px`
    }
  }
}
</script>

<style lang="scss">
</style>

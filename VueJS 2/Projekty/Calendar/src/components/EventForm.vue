<template lang="html">
<div id="event-form" :class="{ active: active }" :style="{top: top, left: left}">
    <h4>Add event</h4>
    <span>{{ date.format('dddd, MMM Do') }}</span>
    <span v-if="error" class="error">Please provide a name for the event</span>
    <div class="text">
      <input type="text" class="add-event" v-focus v-model="description" :placeholder="inputPlaceholder" @keyup.enter="create">
    </div>
    <div class="buttons">
      <button @click="create">Create</button>
    </div>
    <button class="close-button" @click="close">&#10005</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      error: false
    }
  },
  methods: {
    close() {
      this.$store.commit('eventFormActive', false)
      this.$store.commit('changeActiveDay', false)
    },
    create() {
      if (this.description.length > 0) {
        this.error = false
        // clearing the description and closing the form only after an event is added (chained another promise inside index.js in store)
        this.$store.dispatch('addEvent', this.description).then(_ => {
          this.description = ''
          this.close()
        })
      } else {
        this.error = true
      }
    }
  },
  computed: {
    date() {
      return this.$store.state.eventFormDate
    },
    inputPlaceholder() {
      if (this.$store.state.eventFormDate.format('DD MM YYYY') === this.$moment().format('DD MM YYYY')) {
        return 'What are your plans for today?'
      } else {
        return 'What are your plans?'
      }
    },
    active() {
      return this.$store.state.eventFormActive
    },
    top() {
      return `${this.$store.state.eventFormPositionY}px`
    },
    left() {
      return `${this.$store.state.eventFormPositionX}px`
    }
  },
  directives: {
    focus: {
      update(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
</style>

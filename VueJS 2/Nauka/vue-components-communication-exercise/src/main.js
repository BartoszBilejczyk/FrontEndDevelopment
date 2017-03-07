import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({  // this bus is useful when we want to use some code in different places (components) without writing everything multiple times, it's available from here as long it is imported.
    data: {

    },
    methods: {
      changeAge(age) {
          this.$emit('wasAgeChanged', age)
      }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

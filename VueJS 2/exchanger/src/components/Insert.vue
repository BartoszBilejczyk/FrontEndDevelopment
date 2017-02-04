<template>
 <div>
     <p v-if="!category">Please select a server to  see it's status</p>
        <p v-else>Server  </p>
<button @click="showMe">show</button>
 </div>
</template>


<script>

  import {CategoryBus} from '../main'

  export default {
    data() {
      return {
        category: null
      }
    },

    methods: {
      showMe() {
        console.log(this.category);
      }
    },

    Created() { // listen if the bus was used
      console.log("siema")
      CategoryBus.$on('categorySelected', (category) => {
        this.category = category
      })
    }
  }

</script>


<style lang="scss" scoped>
  @mixin flexy($align, $justify) {
    display: flex;
    align-items: $align;
    justify-content: $justify;
  }

  nav {
    @include flexy(flex-start, center) ;
    height: 85vh;
    background-color: #222
  }

  nav ul {
    padding: 3rem;
    margin: 0;

  }
</style>

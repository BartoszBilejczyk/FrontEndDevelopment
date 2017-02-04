<template>
  <nav>
    <div class="container">
      <ul class="conversion-list">
        <app-category v-for="category in categories" :category="category"></app-category>
        {{categories}}
      </ul>
    </div>
  </nav>
</template>


<script>

  import Category from './Category.vue'
  import Insert from './Insert.vue'

  export default {
    data() {
      return {
        categories: [{id: 1, name: 'Weight'},
                     {id: 2, name: 'Numerical'}]
      }
    },
    components: {
      appCategory: Category,

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

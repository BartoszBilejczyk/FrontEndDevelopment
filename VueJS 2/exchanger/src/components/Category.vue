<template>
  <div class="category">
    <li
         class="category-list-item"
         style="cursor: pointer"
         @click="categorySelected">
      Category: {{category.name}}
    </li>
  </div>
</template>


<script>
  import {CategoryBus} from '../main'

  export default {
    props: ['category'],
    methods: {
      categorySelected() { // Inform the parent that a category was selected
        CategoryBus.$emit('categorySelected', this.category);
        console.log(this.category.name);// say that e.g. weight was selected
      }
    }

  }
</script>


<style lang="scss" scoped>

  .box1 {
    height: 100px;
    width: 100px;
    background-color: green;
  }
  .box2 {
    height: 100px;
    width: 100px;
    background-color: red;
  }

  li {
      display: inline-block;
      width: 100%;
      border: 1px solid white;
      margin: 10px 0;
      text-align: center;
      height: 60px;
      line-height: 60px;
      color: white;
  }

</style>

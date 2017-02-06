
<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6 col-sm-offset-3">
        <h2>Add a new book</h2>
      <form id="bookForm" @sumbit.prevent="addNewBook"> <!-- prevent default behavior, perform addNewBook method -->
        <div class="input-field">
          <input type="text" id="author" v-model="newBook.author">
          <label for="author">Author</label>
        </div>
        <div class="input-field">
          <input type="text" id="title" v-model="newBook.title">
          <label for="title">Title</label>
        </div>
        <div class="input-field">
          <input type="text" id="year" v-model="newBook.year">
          <label for="year">Year</label>
        </div>
         <div class="input-field">
          <input type="text" id="url" v-model="newBook.url" @keyup.enter="addNewBook()">
          <label for="url">Url</label>
        </div>
      </form>
      <button @click="addNewBook()" class="btn-large">Add the book</button>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['books']
  }


</script>


<style>

</style>

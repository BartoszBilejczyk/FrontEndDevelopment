<template>
  <div id="app">

    <div class="container">
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

        <app-books :books="books"></app-books>

    </div>
  </div>
</template>

<script>

  import Firebase from 'firebase'
  import toastr from 'toastr'
  import Books from './Books.vue'

  // To Initialize Firebase
  let config = {
    apiKey: 'AIzaSyC3Anmy_wKb7l9gudS1fTBic-t58DyjSRg',
    authDomain: 'vue-js-library-project.firebaseapp.com',
    databaseURL: 'https://vue-js-library-project.firebaseio.com',
    storageBucket: 'vue-js-library-project.appspot.com',
    messagingSenderId: '571897890527'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database() // reference to the database

  let booksRef = db.ref('books') // retrieve reference to books node in database

export default {
    name: 'app',
    firebase: {
      books: booksRef
    },
    data () {
      return {
        newBook: {
          author: '',
          title: '',
          year: null,
          url: ''
        }
      }
    },
    components: {
      appBooks: Books
    },
    methods: {
      addNewBook () {
        booksRef.push(this.newBook)
        toastr.success('Book added successfully')
        this.newBook.author = ''
        this.newBook.title = ''
        this.newBook.year = null
        this.newBook.url = ''
      },
      deleteBook (book) {
        booksRef.child(book['.key']).remove()  // it has to be a child of booksRef node, child expects to get the key of the element to remove. This key is obtained through book[.'key']. If we have that, the whole child can be removed through remove()
        toastr.warning('Book removed successfully')
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

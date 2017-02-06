
<template>
       <div class="row">
        <div class="col-xs-12 col-sm-offset-2 col-sm-8">
          <table class="table table-striped">
            <thead>
              <tr>
                <td>Author</td>
                <td>Title</td>
                <td>Year</td>
                <td>Url</td>
              </tr>
              <tr v-for="book in books">
                <td>{{book.author}}</td>
                <td>{{book.title}}</td>
                <td>{{book.year}}</td>
                <td>{{book.url}}</td>
                <td><span class="glyphicon glyphicon-trash" aria-hidden="true" @click="deleteBook(book)"></span></td>
              </tr>
            </thead>
          </table>
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

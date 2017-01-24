<template>
 <div>
      <span class="badge">Todos count: {{ todos.length }}</span>
      <ul class="todo-group">
          <to-do @delete-to-do="deleteToDo" v-for="todo in todos" :todo="todo" v-model=todo.done></to-do>
      </ul>
  </div>

</template>

<script>
  import ToDo from './ToDo'

  export default {
    props: ['todos'], // this has to be bind in app through :todosFromList
    components: {
      ToDo
    },
    methods: {
      deleteToDo (todo) {
        var toDoIndex = this.todos.indexOf(todo)
        this.todos.splice(toDoIndex, 1)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="container" id="app">
    <div class="page-header">
        <h1>This is Vue.js ToDo Application </h1>
    </div>
    <to-do-list :todos="todos"></to-do-list>

    <form @submit.prevent="addNew()">
      <div class="form-group">
          <input class="form-control" type="text" name="name" placeholder="Enter new todo here" v-model="newToDo">
      </div>
    </form>

  </div>


</template>

<script>
import ToDoList from './components/ToDoList'  // so that we can use it in App, as App is the parent of ToDoList and ToDos

export default {
  name: 'app',
  components: {
    ToDoList: ToDoList
  },
  data () {
    return {
      newToDo: '',
      todos: [{
        title: 'todo 1',
        done: false
      }, {
        title: 'todo 1',
        done: false
      }, {
        title: 'todo 1',
        done: false
      }, {
        title: 'todo 1',
        done: false
      }, {
        title: 'todo 1',
        done: false
      }]
    }
  },
  methods: {
    addNew () {
      if (this.newToDo.length > 0) {
        this.todos.push({
          title: this.newToDo,
          done: false
        })
        this.newToDo = ''
      }
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

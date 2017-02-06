<template>
  <div id="app">
    <section id="navigation">
      <nav>
        <ul>
          <li>siema</li>
          <li>siema</li>
          <li>siema</li>
        </ul>
      </nav>
    </section>
    <section id="todolist">


      <div class="input-field">
        <input type="text" id="new-todo" v-model="newTodo.name" @keyup.enter="addNewTodo()">
        <label for="new-todo">Add new todo</label>
      </div>

      <transition name="fadeup">
        <div class="add-button" v-if="newTodo.name !== ''">
          <button class="btn-large" @click="addNewTodo()">Add</button>
        </div>
      </transition>

      <div class="todos">
        <table>
          <thead>
            <tr>
              <td>Todo:</td>
              <td>Priority:</td>
              <td>Deadline:</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" >
              <td @click="changeName(todo)" :class="activatedTodo">{{todo.name}}</td>
              <td @click="changePriority(todo)">{{todo.priority}}</td>
              <td @click="changeDeadline(todo)">{{todo.deadline}}</td>

              <td><span class="glyphicon glyphicon-trash" aria-hidden="true" @click="deleteTodo(todo)"></span></td>
            </tr>
          </tbody>
        </table>




  </div>



    </section>

    <transition name="slide-details">
      <section id="todo-details">
       <div class="container">
        <div class="input-field">
          <input type="text" id="updateName" v-model="newName">
          <label for="updateName">Update name</label>
        </div>

         <div class="input-field">
          <input type="text" id="updatePriority" v-model="newPriority">
          <label for="updatePriority">Update priority</label>
        </div>

          <input type="date" class="datepicker" v-model="newDeadline">


        {{newDeadline}}

      </div>
      </section>
    </transition>

  </div>
</template>

<script>
import Firebase from 'firebase'
import toastr from 'toastr'

toastr.options = {
  'closeButton': false,
  'debug': false,
  'newestOnTop': false,
  'progressBar': false,
  'positionClass': 'toast-top-right',
  'preventDuplicates': false,
  'showDuration': '1',
  'hideDuration': '500',
  'timeOut': '1500',
  'extendedTimeOut': '500'
}

var config = {
  apiKey: 'AIzaSyBO-nnh18NnLtOgObcMogy-iqv4la6cycw',
  authDomain: 'vuejs-todo-project.firebaseapp.com',
  databaseURL: 'https://vuejs-todo-project.firebaseio.com',
  storageBucket: 'vuejs-todo-project.appspot.com',
  messagingSenderId: '259239228781'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let todosRef = db.ref('todos') // all: firebase.initializeApp(config).database().ref(todo)

export default {

  name: 'app',
  firebase: {
    todos: todosRef // like todos: db.ref('todos')
  },
  data () {
    return {
      newTodo: {
        name: '',
        priority: 'normal',
        deadline: ''
      },
      newName: '',
      newPriority: '',
      newDeadline: '',
      attachActivation: false
    }
  },
  computed: {
    activatedTodo () {
      return {
        activated: this.attachActivation
      }
    }
  },
  methods: {
    addNewTodo () {
      todosRef.push(this.newTodo)
      this.newTodo.name = ''
      this.newTodo.priority = 'normal'
      this.newTodo.deadline = ''
      toastr.success('Todo added')
    },
    deleteTodo (todo) {
      // take a child of todosRef, get todo's key and remove it .
      todosRef.child(todo['.key']).remove()
      toastr.warning('Todo removed')
    },
    changeName (todo) {
      todosRef.child(todo['.key']).child('name').set(this.newName)
      this.newName = ''
    },
    changePriority (todo) {
      todosRef.child(todo['.key']).child('priority').set(this.newPriority)
      this.newPriority = ''
    },
    changeDeadline (todo) {
      todosRef.child(todo['.key']).child('deadline').set(this.newDeadline)
      this.newDeadline = ''
    }
  }
}
</script>

<style lang="scss">

  body {
    min-width: 100vw;
    margin: 0 !important;
  }

  @mixin flexy($align-items, $justify-content) {
    display: flex;
    align-items: $align-items;
    justify-content: $justify-content;
  }

  body {
  background: #e2e1e0;
  text-align: center;
}

  @mixin card-shadow-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  @mixin card-shadow-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  @mixin card-shadow-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @include flexy(flex-start, flex-start);
    margin: 0;
    background: url('http://lorempixel.com/1920/1080');
    background-size: cover;
    flex-wrap: wrap;
  }

  #navigation {
    width: 20%;
    height: 100vh;
    color: #eee;
    @include flexy(flex-start, flex-start);

  }

  nav {
    background: transparent;
    color: #eee;
    height: calc(100vh - 80px);
    margin: 40px;
    border-radius: 20px;
    background-color: rgba(255,255,255, 0.95);
    padding: 2rem 0;
    & ul li {
      display: block;
      float: none;
      cursor: pointer;
      background-color: rgba(100, 100, 100, 0.95);
      margin: 1rem 2rem;
      border-radius: 10px;
      height: 30px;
      line-height: 30px;
    }
  }

  #todolist {
    width: calc(40% - 80px);
    height: calc(100vh - 100px);
    background-color: rgba(255,255,255, 0.95);
    margin: 40px;
    padding: 20px 5%;
    border-radius: 10px;
    @include card-shadow-2;
    overflow: scroll;
  }

  .activated {
    background-color: palegreen;
  }

  #todo-details {
    width: calc(40% - 80px);
    height: calc(100vh - 100px);
    background-color: rgba(255,255,255, 0.9);
    margin: 40px;
    border-radius: 10px;
    padding: 10px 0;
    @include flexy(flex-start, flex-start);
    @include card-shadow-2
  }


  /* TRANSITIONS AND ANIMATIONS */

  @keyframes slide-in {
    from {
      transform: translateY(10px)
    }
    to {
      transform: translateY(0px)
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0px)
    }
    to {
      transform: translateY(10px)
    }
  }

  @keyframes slide-in-details {
    from {
      transform: translateX(200px)
    }
    to {
      transform: translateX(0px)
    }
  }
  @keyframes slide-out-details {
    from {
      transform: translateX(0px)
    }
    to {
      transform: translateX(200px)
    }
  }

  .fadeup-enter {
    opacity: 0;
  }
  .fadeup-enter-active {
    transition: all 0.3s ;
    animation: slide-in 0.3s ease-out forwards
  }

  .fadeup-leave-active {
    opacity: 0;
    transition: 0.3s;
    animation: slide-out 0.3s ease-out forwards
  }

  .slide-details-enter {
    opacity: 0
  }

  .slide-details-enter-active {
    transition: all 0.5s;
    animation: slide-in-details 0.5s ease-out forwards
  }

  .slide-details-leave-active {
    opacity: 0;
    transition: all 0.5s;
    animation: slide-out-details 0.5s ease-out forwards
  }

  /* END OF ANIMATIONS */


  @media (max-width: 768px) {
    #navigation, #todolist, #todo-details {
      width: 100vw;
      height: 100%;
      margin: 1rem 1.5rem;
    }

    nav {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    #app {
      min-height: 100vh;
    background: url('http://lorempixel.com/768/1080');
      background-size: cover;
    }


  }

  @media (min-width: 769px) and (max-width: 1000px) {
    #navigation, #todolist {
      width: calc(50% - 60px);
      height: 100%;
    }

    #todo-details {
      height: 100%;
      width: 100vh;
    }

    #app {
    background: url('http://lorempixel.com/1000/1600');
      background-size: cover;
      min-height: 100vh
    }

    nav {
      height: 100%;
    }


  }

  @media (min-width: 1001px) and (max-width: 1280px) {
    #navigation, #todolist {
      width: calc(50% - 60px);
      height: 100%;
    }

    #todo-details {
      height: 100%;
      width: 100vh;
    }

    nav {
      height: 100%;
    }

    #app {
      min-height: 100vh;
    }


  }


</style>

<template>
    <li class="list-group-item">
      <div class="row">
        <div class="col-md-8">
          <div class="todo-title" @click="activateEdit" v-show="!isEdited">siema</div>
        </div>
        <form v-show="isEdited" v-on:submit.prevent="deactivateEdit" >
          <div class="form-group">
              <input v-model="changeTitle()" type="text" class="form-control" >
          </div>
        </form>

        <div class="col-md-4">
          <span class="bg-success todo-status">coś</span>
          <span class="bg-danger todo-status">coś</span>
          <input type="checkbox">
        </div>
      </div>
    </li>
</template>

<script>
    export default {
      props: 'todo',
      data () {
        return {
          isEdited: false
        }
      },
      methods: {
        activateEdit () {
          this.isEdited = true
        },
        deactivateEdit () {
          this.isEdited = false
        },
        deleteToDo (todo) {
          this.$dispatch('delete-to-do', todo)
        },
        changeTitle () {

        }
      }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

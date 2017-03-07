<template>
   <div>
    <li
             class="list-group-item"
             style="cursor: pointer"
             @click="serverSelected">
        Server #{{ server.id }}
    </li>
    </div>
</template>

<script>
    import {ServerBus} from '../../main'
    export default {
        props: ['server'],
        methods: {
            serverSelected() { // inform the parent that 'li' was selected
                ServerBus.$emit('serverSelected', this.server) // let's say 3rd is selected (move to server details), emit 3rd whole server
            }
        }
    }

</script>

<style>

</style>

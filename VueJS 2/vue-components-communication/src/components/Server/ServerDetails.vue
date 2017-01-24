<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server to see it's status</p>
        <p v-else>Server #{{ server.id }}, current status: {{server.status}}</p>
        <hr>
        <button @click="resetServerStatus">Reset status</button>
    </div>

</template>

<script>
    import {ServerBus} from '../../main'

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            resetServerStatus() {
                this.server.status = 'Normal'
            }
        },
        created() { // listen to server bus when is selected
            ServerBus.$on('serverSelected', (server) => {
                this.server = server  // from Server to here, 3rd is selected so, this.server = trzeci server jako obiekt
            } )
        }
    }
</script>

<style>

</style>

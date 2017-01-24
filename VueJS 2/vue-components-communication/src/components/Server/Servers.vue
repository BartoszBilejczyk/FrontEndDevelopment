<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="server in servers" :server="server" :serverStatus="status"></server><!-- here servers is the array of objects in the script. server.id is just the id of every server looped-->
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Cooling' },
                    { id: 5, status: 'Normal' },
                ]
            }
        },
        components: {
            server: Server
        }
    }
</script>

<style>

</style>

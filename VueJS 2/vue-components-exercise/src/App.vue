<template>
    <div class="container">

        <server-header></server-header>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <server v-for="server in 5"></server>
                </ul>
            </div>

            <server-details></server-details>
        </div>

        <hr>

        <server-footer></server-footer>
    </div>
</template>

<script>
    import ServerDetails from './ServerDetails.vue'
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Servers from './Servers.vue'

    export default {
        components: {
            'server-header': Header,
            'server': Servers,
            'server-details': ServerDetails,
            'server-footer': Footer,

        }
    }

</script>

<style>

</style>

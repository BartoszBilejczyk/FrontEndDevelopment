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
    import Header from './components/Shared/Header.vue'
    import Servers from './components/Server/Servers.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'
    import Footer from './components/Shared/Footer.vue'

    export default {
        components: {
            'server-header': Header, // can alo be serverHeader because Vue can change it to hyphenated version (server-header) which is awesoooome
            'server': Servers,
            'serverDetails': ServerDetails, // here I used the other version
            'server-footer': Footer,

        }
    }

</script>

<style>

</style>

<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User named {{ name }}! and I'm {{ age }}</p>
        <button @click="changeName">Change the name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :name="name"
                    @wasNameChanged="name = $event"
                    :resetFn="resetName"
                    :myAge="age"
                    ></app-user-detail>  <!-- this name is bind with 'name' in data in script. Colon makes it. :SOMETHING has to be the same as SOMETHING in UserDetail (check it) dynamic. Also, listen if an event called wasNameChanged fired. If it did, do what it says. Why $event? It refers to the second argument from $emit - the data which is passed. -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :myAge="age"
                    @wasAgeChanged="age = $event"
                    ></app-user-edit> <!-- here @wasAgeChanged because it is a listener $event is the this.myAge from UserEdit-->
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data() {
            return {
                name: 'Bartek',
                age: 22
            };
        },
        methods: {
            changeName() {
                this.name = "Bartłomiej"
            },
            resetName() {
                this.name = "Bartek"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

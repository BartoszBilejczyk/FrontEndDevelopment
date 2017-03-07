<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="compSelected = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="compSelected = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="compSelected = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>

                <component :is="compSelected">
                    <h2>This is the sample title</h2>
                    <p>This is the sample subtitle</p>
                </component>

                <!-- <app-blue>
                    <h2>This is the sample title</h2>
                    <p>This is the sample subtitle</p>
                </app-blue>
                <app-green>
                    <h2>This is the sample title</h2>
                    <p>This is the sample subtitle</p>
                </app-green>
                <app-red>
                    <h2>This is the sample title</h2>
                    <p>This is the sample subtitle</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                compSelected: ''
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>

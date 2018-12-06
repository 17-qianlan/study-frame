<template>
    <div id="app">{{msg}}</div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: '777777'
            };
        },
        mounted() {
            console.log('888');
        }
    };
</script>

<style scoped>
    div{
        width: 1500px;
        height: 1000px;
        background: url("./assets/images/1.jpeg") no-repeat;
    }
</style>

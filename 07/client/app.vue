<template>
    <div id="app">{{msg}}</div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 1111
            };
        }
    };
</script>

<style scoped>
    #app{
        font-size: 25px;
        font-weight: bold;
    }
</style>
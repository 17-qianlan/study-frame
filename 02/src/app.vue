<template>
    <div id="app">{{msg}}</div>
</template>

<script>
    export default {
        name: "app",
        data(){
            return {
                msg: "222222"
            }
        }
    }
</script>

<style scoped>
    #app{
        color: red;
    }
</style>
<template>
    <div id="app">{{msg}}</div>
</template>

<script>
    export default {
        name: "app",
        data(){
            return {
                msg: "999999"
            }
        }
    }
</script>

<style lang="scss" scoped>
    $h : 100px;
    #app{
        width: 1376px;
        height: 774px;
        background: url("./images/666.png") no-repeat center/cover;
        color: red;
        line-height: $h;
    }
</style>
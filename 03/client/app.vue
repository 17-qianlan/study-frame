<template>
    <div id="app">
        <index></index>
        <router-view />
    </div>
</template>

<script>
    import Index from "./views/todo/index.vue"
    export default {
        name: "app",
        components: {
            Index
        },
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

    }
</style>
<template>
    <div id="app">
        <Index></Index>
    </div>
</template>
<script>
    import Index from "./nav/index.vue"
    export default {
        components: {
            Index
        }
    }
</script>
<style scoped>
    #app {
        width: 600px;
        height: 500px;
        margin: 20px auto;
        border: 1px solid red;
    }
</style>
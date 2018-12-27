<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: ''
            };
        }
    };
</script>

<style scoped lang="scss">
    #app {
        width: 100%;
        height: 100%;
        background: url('./assets/images/bg.jpeg') no-repeat center/cover;
    }
</style>

<template>
    <div id="app">
        <Header></Header>
    </div>
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

<style scoped lang="scss">
    #app{
        width: 100%;
        height: 100%;
        background: url('./assets/images/bg2.jpg') no-repeat center/cover;
        margin: auto;
        border: 1px solid transparent;
    }
</style>

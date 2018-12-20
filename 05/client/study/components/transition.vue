<template>
    <div class="transitions"></div>
</template>

<script>
    export default {
        name: 'transition'
    };
</script>

<style scoped lang="scss">
    .transitions{
        width: 500px;
        height: 500px;
        background: red;
        margin: 200px auto;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

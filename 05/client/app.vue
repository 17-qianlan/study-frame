<template>
    <div id="app" :style="styles">
        <nav-list></nav-list>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                styles: ''
            };
        },
        mounted() {
            this.styles = {
                width: '100%',
                height: '100%'
            };
        }
    };
</script>

<style scoped lang="scss">
    $w: 1000px;
    $h: 600px;
    #app{
        background: url("assets/images/51.jpg") no-repeat center/cover;
        overflow: hidden;
    }
</style>

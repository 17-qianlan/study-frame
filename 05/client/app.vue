<template>
    <div id="app" :style="styles">
        <nav-list></nav-list>
        <alert v-show="boo"></alert>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                styles: '',
                boo: false
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
        position: relative;
        background: url("assets/images/51.jpg") no-repeat center/cover;
        overflow: hidden;
    }
</style>

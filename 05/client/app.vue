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
                styles: '',
                boo: true
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
        border-top: 1px solid transparent;
        margin-top: -1px;
    }
</style>

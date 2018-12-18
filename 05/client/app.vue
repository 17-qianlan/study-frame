<template>
    <div id="app" :style="styles" >
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                styles: '',
                boo: false,
                isShowJump: false
            };
        },
        mounted() {
            this.styles = {
                width: '100%',
                height: '100%'
            };
        },
        methods: {
            handleId(val) {
                this.dd = val;
            }
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

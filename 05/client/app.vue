<template>
    <div id="app" :style="styles">
        <Index :list="list"></Index>
    </div>
</template>

<script>
    import Index from './study/index.vue';
    export default {
        name: 'app',
        components: {
            Index
        },
        data() {
            return {
                styles: '',
                list: [11, 22, 33, 44, 55, 66, 77, 88, 99]
            };
        },
        mounted() {
            this.styles = {
                width: window.innerWidth.toString() + 'px',
                height: window.innerHeight.toString() + 'px'
            };
        }
    };
</script>

<style scoped lang="scss">
    $w: 1000px;
    $h: 600px;
    #app{
        background: url("../assets/images/51.jpg") no-repeat center/cover;
    }
</style>

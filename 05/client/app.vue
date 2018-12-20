<template>
    <div id="app" :style="styles" >
        <router-view />
        <button @click="show = !show">toggle</button>
        <transition name="fade">
            <!--<transitions v-if="show"></transitions>-->
            <p v-if="show">9999</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                styles: '',
                boo: false,
                isShowJump: false,
                show: true
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
        p{
            width: 500px;
            height: 500px;
            background: red;
            margin: 100px auto;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

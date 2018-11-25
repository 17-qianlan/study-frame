<template>
    <div class="first" v-show="fShow">
        {{text}}
        {{fIndex}}
    </div>
</template>

<script>
    export default {
        props: {
            fShow: {
                type : Boolean,
                default: false
            },
            fIndex: {
                type : Number,
                default: Infinity
            }
        },
        data() {
            return {
                text: " I'm first"
            }
        },
        watch :{
            fShow(val){
                this.fShow = val;
            }
        }
    }
</script>

<style scoped>
    .first {
        position: absolute;
        left: 20px;
        width: 100px;
        height: 30px;
        border: 1px solid blue;
    }
</style>
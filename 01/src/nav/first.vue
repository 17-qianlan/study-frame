<template>
    <div class="first" v-show="fShow">
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
                type : String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
    $h : 300px;
    .first {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 400px;
        height: $h;
        border: 1px solid blue;
        font-size: 50px;
        text-align: center;
        line-height: $h;
    }
</style>
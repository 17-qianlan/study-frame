<template>
    <div id="app">
        <Index :i-msg="arr"></Index>
    </div>
</template>

<script>
    import Index from "./components/index.vue"
    export default {
        name: "app",
        components: {
            Index
        },
        data(){
            return {
                msg: "222222",
                arr: [
                    {
                        key : 555,
                        title: "你是好人"
                    },
                    {
                        key : 666,
                        title: "你不好了"
                    },
                    {
                        key : 666,
                        title: "你还好吗"
                    },
                    {
                        key : 222,
                        title: "你怎么样"
                    },

                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #app{
        width: 500px;
        height: 900px;
        margin: 100px auto;
        background: url("../../base/images/13.jpg") no-repeat;
    }
</style>
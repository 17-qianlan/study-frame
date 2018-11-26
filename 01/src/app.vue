<template>
    <div id="app">
        <Index :list="arr"></Index>
    </div>
</template>
<script>
    import Index from "./nav/index.vue"
    export default {
        components: {
            Index
        },
        data(){
            return {
                arr: [
                    {
                        key : 11,
                        show : false
                    },
                    {
                        key : 22,
                        show : false
                    },
                    {
                        key : 33,
                        show : false
                    },
                    {
                        key : 44,
                        show : false
                    },
                    {
                        key : 55,
                        show : false
                    },
                    {
                        key : 66,
                        show : false
                    },
                    {
                        key : 77,
                        show : false
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    #app {
        width: 600px;
        height: 500px;
        margin: 20px auto;
        border: 1px solid red;
    }
</style>
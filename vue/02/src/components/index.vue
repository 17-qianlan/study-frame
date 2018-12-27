<template>
    <ul class="list fix">
        <li v-for="item of iMsg" class="fl">
            <p>{{item.key}}</p>
            <p>{{item.title}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "index",
        props: {
            iMsg: {
                type: Array,
                default(){
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $h :40px;
    .list{
        width: 100%;
        height: $h;
        line-height: $h;
        text-align: center;
        li{
            margin-left: 5px;
            p{
                height: 100%;
                color: red;
            }
        }
    }
</style>
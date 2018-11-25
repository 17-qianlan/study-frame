<template>
    <nav>
        <ul class="fix">
            <li class="fl" v-for="(item,index) of list" @mouseenter="enter(item,index)" @mouseleave="out" @key="index">
                <a href="">{{item}}</a>
                <First :f-show="show" :f-index="index"></First>
            </li>
            <!--<li class="fl">
                <a href="">11</a>
            </li>
            <li class="fl">
                <a href="">22</a>
            </li>
            <li class="fl">
                <a href="">33</a>
            </li>
            <li class="fl">
                <a href="">44</a>
            </li>
            <li class="fl">
                <a href="">55</a>
            </li>
            <li class="fl">
                <a href="">66</a>
            </li>
            <li class="fl">
                <a href="">77</a>
            </li>-->
        </ul>
    </nav>
</template>

<script>
    import First from "./first.vue"
    export default {
        name: "index",
        components: {
            First
        },
        data(){
            return {
                show: false,
                list: [11,22,33,44,55,66,77]
            }
        },
        methods: {
            enter(item,i){
                this.show = true;
                console.log(item, i);
            },
            out(){
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    ul{
        position: relative;
        width: 100%;
        height: 60px;
    }
    ul li{
        width: 60px;
        height: 100%;
        background: aquamarine;
        margin-left: 10px;
        border-radius: 50%;
    }
    ul li a{
        display: block;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
    }
    ul li:nth-child(1){
        margin-left: 0;
    }
    ul li a:hover{
        color: red;
    }
</style>
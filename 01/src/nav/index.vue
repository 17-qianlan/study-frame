<template>
    <nav>
        <ul class="fix">
            <li class="fl" v-for="(item,index) of list" @mouseenter="enter(item,index)" @mouseleave="out(item)" @key="index">
                <a href="">{{item.key}}</a>
                <First :f-show="item.show" :f-index="text"></First>
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
                text: "I'm ",
                list: [
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
                ],
                num : ["First","Second","third","forth","fifth","sixth","seventh","eighth","ninth","tenth"]
            }
        },
        methods: {
            enter(item,i){
                item.show = true;
                this.text += this.num[i];
            },
            out(item){
                item.show = false;
                this.text = "I'm ";
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
<template>
    <nav>
        <ul class="fix">
            <li class="fl" v-for="(item,index) of msgA" @mouseenter="enter(item,index)" @mouseleave="out(item)"
                @key="index">
                <a href="">{{item.key}}</a>
                <First :f-show="item.show" :f-text="text"></First>
            </li>
        </ul>
    </nav>
</template>

<script>
    import First from "./first.vue"

    export default {
        name: "index",
        props: {
            list: {
                type: Array,
                default(){
                    return [];
                }
            }
        },
        components: {
            First
        },
        data() {
            return {
                text: "I'm ",
                msgA: this.list,
                num: ["First", "Second", "Third", "Forth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"]
            }
        },
        methods: {
            enter(item, i) {
                item.show = true;
                this.text += this.num[i];
            },
            out(item) {
                item.show = false;
                this.text = "I'm ";
            }
        }
    }
</script>

<style scoped>
    ul {
        position: relative;
        width: 100%;
        height: 60px;
    }
    ul li {
        width: 60px;
        height: 100%;
        background: aquamarine;
        margin: 5px 0 0 10px;
        border-radius: 5px;
    }

    ul li a {
        display: block;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
    }
    ul li:nth-child(1) {
        margin-left: 0;
    }
    ul li a:hover {
        color: red;
    }
</style>
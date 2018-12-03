<template>
    <div id="app">
        <index></index>
        <!--<router-view name="testName"/>-->
        <p>{{count}}</p>
        <button @click="clickStop" :disabled="boo">点击我停止定时器</button>

        <button @click="clickStart" :disabled="boo">点击我开始定时器</button>
        <p>{{arr}}</p>
        <router-view />
    </div>
</template>

<script>
    import Index from "./views/todo/index.vue"
    export default {
        name: "app",
        components: {
            Index
        },
        data(){
            return {
                msg: "999999",
                i : 0,
                timer : 0,
                boo : true,
                arr: this.$store.getters.filterArr
            }
        },
        mounted(){
            // console.log(this.$store.state.count);
            this.$store.dispatch("asyncUpdateCount").then(() => {
                this.boo = false;
                this.start();
            }).catch(err => {
                console.log(err);
            })
        },
        computed: {
            count(){
                return this.$store.state.count
            }
        },
        methods: {
            clickStop(){
                clearInterval(this.timer);
                this.boo = !this.boo;
            },
            clickStart(){
                this.start();
                this.boo = !this.boo;
            },
            start(){
                this.timer = setInterval(() => {
                    this.$store.commit("updateCount",++this.i);
                },1000/60)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $h : 1000px;
    #app{
        position: relative;
        height: $h;
    }
</style>
<template>
    <div id="app">
        <index></index>
        <!--<router-view name="testName"/>-->
        <p>{{count}}</p>
        <div v-show="isShow">
            <button @click="clickStop" :disabled="boo">点击我停止定时器</button>
            <button @click="clickStart" :disabled="!boo">点击我开始定时器</button>
            <button @click="rest">重置定时器</button>
        </div>
        <p v-text="text"  style="color: red"></p>
        <p>{{arr}}</p>
        <router-view />
    </div>
</template>

<script>
    import Index from './views/todo/index.vue';
    export default {
        name: 'app',
        components: {
            Index
        },
        data() {
            return {
                msg: '999999',
                i: 0,
                timer: 0,
                boo: false,
                isShow: false,
                arr: this.$store.getters.filterArr
            };
        },
        mounted() {
            // console.log(this.$store.state.count);
            this.$store.dispatch('asyncUpdateCount').then(() => {
                this.start();
                this.isShow = true;
            }).catch(err => {
                console.log(err);
            });
            /* this.$store.commit("a/updateText",999);
            this.$store.getters.textPlus;
            this.$store.dispatch("a/add");
            console.log(this.$store.state.c.text); */
            /* console.log(this.$store.state.a.text);
            console.log(this.$store.state.b.text); */
        },
        computed: {
            count() {
                return this.$store.state.count;
            },
            text() {
                return 888;
                // return this.$store.state.a.text
            }
            // ...mapState(["count"])
        },
        methods: {
            clickStop() {
                clearInterval(this.timer);
                this.boo = !this.boo;
            },
            clickStart() {
                this.start();
                this.boo = !this.boo;
            },
            start() {
                this.timer = setInterval(() => {
                    this.$store.commit('updateCount', ++this.i);
                }, 1000 / 60);
            },
            rest() {
                clearInterval(this.timer);
                this.boo = true;
                this.$store.commit('updateCount', 0);
            }
        }
    };
</script>

<style lang="scss" scoped>
    $h : 1000px;
    #app{
        position: relative;
        height: $h;
    }
</style>

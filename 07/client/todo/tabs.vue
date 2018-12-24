<template>
    <div class="tabs">
        <ul class="item">
            <li class="fix" v-for="(item,index) in changeVal" :key="index"  @mouseenter="enter(item)" @mouseleave="leave(item)">
                <input type="radio" :name="item.name" :id="item.id" :checked="item.completed" @click="clickCancel(item,index)">
                <label :for="item.id" :class="{highlight: item.completed}">{{item.content}}</label>
                <button v-show="item.show" class="fr" @click="del(index)">×</button>
            </li>
        </ul>
        <section class="btn fix">
            <div class="total fl" v-text="len"></div>
            <ul class="type fl">
                <li class="fl" v-for="(item, index) in btnData" :key="index" @click="changeState(item, index)" :class="{active: item.isClick}">{{item.type}}</li>
            </ul>
            <div class="clean fl" @click="clickClean">clean Completed</div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                currentVal: [],
                changeVal: [],
                btnData: [
                    {
                        type: 'all',
                        isClick: true
                    },
                    {
                        type: 'active',
                        isClick: false
                    },
                    {
                        type: 'completed',
                        isClick: false
                    }
                ]
            };
        },
        mounted() {
            this.currentVal = this.$store.state.itemArr;
            this.changeVal = this.currentVal;
        },
        methods: {
            changeState(item, index) {
                this.changeVal = this.currentVal;
                this.btnData.forEach((thing, i) => {
                    /* eslint-disable */
                    thing.isClick = (i === index) ? true : false;
                });
                switch(index) {
                    case 2 :
                        this.changeVal = this.changeVal.filter(item => item.completed);
                        break;
                    case 1 :
                        this.changeVal = this.changeVal.filter(item => !item.completed);
                        break;
                }
            },
            clickCancel(item, index) {
                item.completed = !item.completed;
            },
            enter(item) {
                item.show = true;
            },
            leave(item) {
                item.show = false;
            },
            del(index) {
                this.$store.commit('removeData', index)
            },
            clickClean() {
                this.$store.commit('cleanCompleted');
                this.changeVal = [];
            }
        },
        computed: {
            len() {
                return this.currentVal.length + ' item left';
            }
        }
    };
</script>

<style scoped lang="scss">
    .tabs{
        width: 90%;
        margin-top: 20px;
        .item{
            width: 100%;
            height: auto;
            border-radius: 5px;
            li{
                width: 100%;
                height: 40px;
                padding-bottom: 2px;
                border-bottom: 1px solid rgba(248, 161, 164, .4);
                margin-top: 4px;
                input{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    margin: 1px 0 0 10px;
                    vertical-align: middle;
                }
                label{
                    display: inline-block;
                    min-width: 50px;
                    height: 100%;
                    font-size: 25px;
                    margin: 0 0 0 20px;
                    line-height: 40px;
                    vertical-align: middle;
                }
                .highlight{
                    text-decoration: line-through;
                    color: #ccc;
                }
                button{
                    width: 40px;
                    height: 100%;
                    border: 0;
                    background: #fff;
                    font-size: 25px;
                    line-height: 40px;
                    cursor: pointer;
                }
            }
        }
        .btn{
            width: 100%;
            height: 30px;
            line-height: 30px;
            .total{
                width: 20%;
                height: 100%;
                margin-left: 5px;
            }
            ul{
                width: 45%;
                height: 100%;
                margin-left: 15px;
                li{
                    width: auto;
                    height: 30px;
                    padding: 0 5px;
                    border: 1px solid transparent;
                    margin: 0px 0 0 5px;
                    cursor: pointer;
                }
                .active{
                    border-color: red;
                }
            }
            .clean{
                width: 27%;
                height: 100%;
                margin-left: 15px;
                cursor: pointer;
            }
        }
    }
</style>

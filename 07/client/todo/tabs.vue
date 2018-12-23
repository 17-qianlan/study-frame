<template>
    <div class="tabs">
        <ul class="item">
            <li v-for="(item,index) in currentVal" :key="index">
                <input type="radio" name="selected" id="selected">
                <label for="selected">{{item.content}}</label>
                <button v-show="item.show" @mouseenter="enter(index)" @mouseleave="leave(index)">×</button>
            </li>
        </ul>
        <section class="btn fix">
            <div class="total fl">10 item left</div>
            <ul class="type fl">
                <li class="fl" v-for="(item, index) in btnData" :key="index" @click="changeState(item, index)">{{item.type}}</li>
            </ul>
            <div class="clean fl">clean Completed</div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                currentVal: [],
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
            this.currentVal = this.$store.itemArr;
        },
        methods: {
            changeState(item, index) {
                item.isClick = false;
                this.btnData[index].isClick = true;
                if (item.isClick && index > 0) {
                    this.currentVal.filter(item => item.completed);
                };
            }
        }
    };
</script>

<style scoped lang="scss">
    .tabs{
        width: 90%;
        line-height: 60px;
        .btn{
            width: 100%;
            height: 60px;
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
                    border: 1px solid red;
                    margin: 20px 0 0 5px;
                    line-height: 0;
                    cursor: pointer;
                }
            }
            .clean{
                width: 27%;
                height: 100%;
                margin-left: 15px;
            }
        }
    }
</style>

<template>
    <div class="res" ref="res">
        <h2>注册</h2>
        <ul>
            <li>
                <span>账号:</span>
                <input type="user" ref="user">
            </li>
            <li>
                <span>密码:</span>
                <input type="user" ref="pass">
            </li>
            <li>
                <span>确认密码:</span>
                <input type="password" ref="confirmPassword">
            </li>
            <li>
                <input type="button" value="注册" @click="send">
                <input type="button" value="重置" @click="cleanVal">
            </li>
        </ul>
        <alert :mag="mag" :isShow="isShow" v-show="isShow"></alert>
    </div>
</template>

<script>
    export default {
        name: 'registered',
        data() {
            return {
                aInp: {},
                mag: {},
                isShow: false
            };
        },
        mounted() {
            this.aInp = this.$refs;
            this.mag = this.getOffset(this.$refs.res);
        },
        methods: {
            cleanVal() {
                for (const item of Object.values(this.aInp)) {
                    item.value = '';
                }
                this.aInp.user.focus();
            },
            send() {
                let val = '';
                for (const item of Object.values(this.aInp)) {
                    if (item.value === '') {
                        this.isShow = true;
                        item.focus();
                        break;
                    }
                    val += item.value + '/';
                }
                console.log(val);
            },
            getOffset(ele) {
                let obj = {
                    left: 0,
                    top: 0
                };
                while (ele !== document.body) {
                    obj.top += ele.offsetTop + ele.offsetParent.clientTop;
                    obj.left += ele.offsetLeft + ele.offsetParent.clientLeft;
                    ele = ele.offsetParent;
                };
                return obj;
            }
        },
        watch: {
            isShow(val) {
                this.$on('isShow', val);
            }
        }
    };
</script>

<style scoped lang="scss">
    .res {
        position: relative;
        width: 500px;
        height: 350px;
        margin: 100px auto;
        font-size: 20px;
        h2 {
            width: 70%;
            height: 40px;
            margin: auto;
            text-align: center;
        }
        ul {
            width: 70%;
            height: 70%;
            margin: 20px auto 0;
            font-size: 20px;
            li:not(:last-of-type) {
                width: 100%;
                height: 40px;
                margin: 15px 0 0 5px;
                span{
                    display: inline-block;
                    width: 25%;
                    text-align: center;
                }
                input{
                    display: inline-block;
                    width: 68%;
                    height: 25px;
                    line-height: 20px;
                    text-indent: 10px;
                }
            }
            li:nth-child(4){
                width: 70%;
                height: 40px;
                margin: 10px auto 0;
                input{
                    width: 40%;
                    height: 100%;
                    margin-left: 20px;
                    cursor: pointer;
                }
            }
            input{
                border: 1px;
                border-radius: 5px;
                font-size: 20px;
            }
        }
    }
</style>

<template>
    <section class="login">
        <ul class="input">
            <li v-for="(item, index) of userData" :key="index" >
                <span>{{item.span}}</span>
                <input :type="item.type" :placeholder="item.placeholder" :ref="item.ref" />
                <p v-if="item.show">{{item.msgErr}}</p>
                <p v-if="item.loginMsgErr">{{item.loginMsg}}</p>
            </li>
        </ul>
        <ul class="btn">
            <li @click="send"><input type="button" value="登录"></li>
            <li @click="reset"><input type="button" value="重置"></li>
        </ul>
    </section>
</template>

<script>
    import tool from '../../assets/js/tool';
    export default {
        name: 'login',
        data() {
            return {
                userData: [
                    {
                        type: 'user',
                        span: '账号:',
                        placeholder: '请输入用户名',
                        msgErr: '用户名类型错误,长度4-10,可以是数字和字母或混合',
                        show: false,
                        loginMsgErr: false,
                        ref: 'user'
                    },
                    {
                        type: 'password',
                        span: '密码:',
                        placeholder: '请输入密码',
                        msgErr: '密码类型错误,长度6-16,可以是数字和字母或混合',
                        loginMsg: '密码或者用户名错误',
                        loginMsgErr: false,
                        show: false,
                        ref: 'password'
                    }
                ],
                aInp: [],
                inputRules: tool.pattern
            };
        },
        mounted() {
            for (const val of Object.values(this.$refs)) {
                this.aInp.push(val);
            }
        },
        methods: {
            reset() {
                let arr = this.aInp;
                arr.forEach(item => {
                    item[0].value = '';
                });
            },
            send() {
                let options = this.opt();
                if (!options) return false;
                if (!this.inputRules.user.test(options.username)) {
                    this.userData[0].show = true;
                    return false;
                } else {
                    this.userData[0].show = false;
                }
                if (!this.inputRules.password.test(options.password)) {
                    this.userData[1].show = true;
                    return false;
                } else {
                    this.userData[1].show = false;
                }
            },
            opt() {
                let arr = this.aInp;
                let options = {
                    username: arr[0][0].value,
                    password: arr[0][0].value
                };
                console.log(options);
                return options;
            }
        }
    };
</script>

<style scoped lang="scss">
    section{
        width: 500px;
        height: auto;
        margin: auto;
        .input{
            width: 90%;
            height: auto;
            margin: auto;
            line-height: 30px;
            li{
                width: 100%;
                height: auto;
                margin-top: 10px;
                span{
                    display: inline-block;
                    width: 55px;
                    height: 30px;
                    font-size: 23px;
                }
                input{
                    display: inline-block;
                    width: 350px;
                    height: 30px;
                    font-size: 19px;
                    line-height: 30px;
                    text-indent: 15px;
                }
            }
        }
        .btn{
            width: 60%;
            height: 40px;
            margin: 30px auto;
            li{
                display: inline-block;
                width: 100px;
                height: 30px;
                background: #eee;
                input{
                    width: 100%;
                    height: 100%;
                    border: 0;
                    border-radius: 5px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                }
            }
            li:nth-child(2){
                margin-left: 50px;
            }
        }
    }
</style>

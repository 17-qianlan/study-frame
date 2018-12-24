<template>
    <section class="login">
        <ul class="input">
            <li v-for="(item, index) of userData" :key="index" :ref="item.ref">
                <span>{{item.span}}</span>
                <input :type="item.type" :placeholder="item.placeholder">
                <p v-if="item.show">{{item.msgErr}}</p>
                <p v-if="item.loginMsgErr">{{item.loginMsg}}</p>
            </li>
        </ul>
        <ul class="btn">
            <li><input type="button" value="登录"></li>
            <li><input type="button" value="重置"></li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                userData: [
                    {
                        type: 'user',
                        span: '账号',
                        placeholder: '请输入用户名',
                        msgErr: '用户名类型错误,长度6-10,可以是数字和字母或混合',
                        show: false,
                        loginMsgErr: false,
                        ref: 'user'
                    },
                    {
                        type: 'password',
                        span: '账号',
                        placeholder: '请输入密码',
                        msgErr: '密码类型错误,长度6-16,可以是数字和字母或混合',
                        loginMsg: '密码或者用户名错误',
                        loginMsgErr: false,
                        show: false,
                        ref: 'password'
                    }
                ]
            };
        }
    };
</script>

<style scoped>

</style>

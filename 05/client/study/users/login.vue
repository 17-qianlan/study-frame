<template>
    <div class="login">
        <h2>登录</h2>
        <ul>
            <li>
                <span>账号:</span>
                <input type="text">
            </li>
            <li>
                <span>密码:</span>
                <input type="text">
            </li>
            <li>
                <input type="button" value="登录">
                <input type="button" value="重置">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                aInp: {}
            };
        },
        mounted() {
            this.aInp = this.$refs;
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
                        confirm('请输入');
                        item.focus();
                        break;
                    }
                    val += item.value + '/';
                }
                console.log(val);
            }
        }
    };
</script>

<style scoped lang="scss">
    .login {
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
            li:nth-child(3){
                width: 70%;
                height: 40px;
                margin: 10px auto 0;
                input{
                    width: 40%;
                    height: 100%;
                    margin-left: 20px;
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

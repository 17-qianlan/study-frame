<template>
    <div class="login-state">
        <img src="../../assets/avatar/2.jpeg" alt="">
        <ul>
            <li>
                <router-link to="/">用户管理</router-link>
            </li>
            <li>
                <router-link to="/">用户信息</router-link>
            </li>
            <li>
                <router-link to="/">退出登录</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'login-state'
    };
</script>

<style scoped lang="scss">
    .login-state{
        position: relative;
        width: 100%;
        height: 100%;
        img{
            width: 30px;
            height: 100%;
            border-radius: 50%;
        }
        ul{
            position: absolute;
            top: 30px;
            left: 0;
            width: 100%;
            height: 93px;
            border-radius: 5px;
            border-top: 0;
            li{
                width: 100%;
                height: 30px;
                border-bottom: 1px solid #e3726d;
                background: greenyellow;
                a{
                    color: black;
                    font-size: 12px;
                    text-align: center;
                    line-height: 30px;
                };
            }
            li:hover a{
                color: red;
            }
        }
    }
</style>
